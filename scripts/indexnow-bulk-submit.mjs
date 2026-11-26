import {
  closeSync,
  existsSync,
  openSync,
  readFileSync,
  renameSync,
  unlinkSync,
  writeFileSync,
} from 'node:fs'
import { resolve } from 'node:path'

const HOST = 'www.corvinweb.com'
const SITE_ORIGIN = `https://${HOST}`
const SITEMAP_URL = `${SITE_ORIGIN}/sitemap.xml`
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow'
const INDEXNOW_KEY = process.env.key_2?.trim()
const STATE_PATH = resolve(process.cwd(), '.indexnow-submission-state.json')
const LOCK_PATH = `${STATE_PATH}.lock`
const MAX_URLS_PER_REQUEST = 10_000
const MAX_ATTEMPTS = 4
const REQUEST_TIMEOUT_MS = 15_000
const MAX_RETRY_DELAY_MS = 60_000

function getOptions(args) {
  const options = { days: 7, dryRun: false }
  const values = args.filter((arg) => arg !== '--')

  for (let index = 0; index < values.length; index += 1) {
    const arg = values[index]
    if (arg === '--dry-run') {
      options.dryRun = true
      continue
    }

    const daysValue = arg.startsWith('--days=')
      ? arg.slice('--days='.length)
      : arg === '--days'
        ? values[++index]
        : undefined

    if (daysValue !== undefined) {
      const days = Number(daysValue)
      if (!Number.isInteger(days) || days < 1 || days > 365) {
        throw new Error('--days must be a whole number from 1 to 365.')
      }
      options.days = days
      continue
    }

    throw new Error('Usage: pnpm indexnow [-- --days=7] [-- --dry-run]')
  }

  return options
}

function decodeXml(value) {
  return value.replace(/&(#x[\da-f]+|#\d+|amp|lt|gt|quot|apos);/gi, (entity, token) => {
    const normalized = token.toLowerCase()
    if (normalized === 'amp') return '&'
    if (normalized === 'lt') return '<'
    if (normalized === 'gt') return '>'
    if (normalized === 'quot') return '"'
    if (normalized === 'apos') return "'"
    const codePoint = normalized.startsWith('#x')
      ? Number.parseInt(normalized.slice(2), 16)
      : Number.parseInt(normalized.slice(1), 10)
    return Number.isFinite(codePoint) ? String.fromCodePoint(codePoint) : entity
  })
}

function validateSiteUrl(rawUrl) {
  let url
  try {
    url = new URL(rawUrl)
  } catch {
    throw new Error('The sitemap contains an invalid URL.')
  }

  if (
    url.protocol !== 'https:' ||
    url.hostname !== HOST ||
    url.origin !== SITE_ORIGIN ||
    url.username ||
    url.password
  ) {
    throw new Error(`The sitemap contains a URL outside https://${HOST}; no URLs were submitted.`)
  }

  url.hash = ''
  return url.toString()
}

function parseSitemap(xml) {
  const entries = [...xml.matchAll(/<url\b[^>]*>([\s\S]*?)<\/url>/gi)]
  if (entries.length === 0) throw new Error('The sitemap contains no <url> entries.')

  const byUrl = new Map()
  for (const [, block] of entries) {
    const locMatch = block.match(/<loc(?:\s[^>]*)?>([\s\S]*?)<\/loc>/i)
    if (!locMatch) throw new Error('A sitemap entry is missing its <loc> URL.')
    const url = validateSiteUrl(decodeXml(locMatch[1].trim()))
    const lastmodMatch = block.match(/<lastmod(?:\s[^>]*)?>([\s\S]*?)<\/lastmod>/i)
    if (!lastmodMatch) continue

    const timestamp = Date.parse(decodeXml(lastmodMatch[1].trim()))
    if (!Number.isFinite(timestamp)) throw new Error('The sitemap contains an invalid <lastmod> value.')
    const lastmod = new Date(timestamp).toISOString()
    const current = byUrl.get(url)
    if (!current || Date.parse(lastmod) > Date.parse(current)) byUrl.set(url, lastmod)
  }

  return byUrl
}

async function fetchText(url, label) {
  let response
  try {
    response = await fetch(url, {
      redirect: 'error',
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    })
  } catch {
    throw new Error(`Could not fetch ${label}; check the network and try again.`)
  }

  if (response.status !== 200) throw new Error(`${label} returned HTTP ${response.status}; expected HTTP 200.`)
  return response.text()
}

function loadState() {
  if (!existsSync(STATE_PATH)) return new Map()

  let parsed
  try {
    parsed = JSON.parse(readFileSync(STATE_PATH, 'utf8'))
  } catch {
    throw new Error('The IndexNow state file is unreadable. Fix or remove it before submitting.')
  }

  if (
    !parsed ||
    parsed.version !== 1 ||
    !parsed.submissions ||
    typeof parsed.submissions !== 'object' ||
    Array.isArray(parsed.submissions)
  ) {
    throw new Error('The IndexNow state file has an unsupported format.')
  }

  return new Map(Object.entries(parsed.submissions).filter(([, lastmod]) => typeof lastmod === 'string'))
}

function saveState(state) {
  const temporaryPath = `${STATE_PATH}.tmp`
  const serialized = JSON.stringify({ version: 1, submissions: Object.fromEntries(state) }, null, 2)
  writeFileSync(temporaryPath, `${serialized}\n`, { encoding: 'utf8', mode: 0o600 })
  renameSync(temporaryPath, STATE_PATH)
}

function retryDelay(response, attempt) {
  const retryAfter = response.headers.get('retry-after')
  if (retryAfter) {
    const seconds = Number(retryAfter)
    if (Number.isFinite(seconds) && seconds >= 0) return seconds * 1000
    const retryDate = Date.parse(retryAfter)
    if (Number.isFinite(retryDate)) return Math.max(retryDate - Date.now(), 0)
  }
  return Math.min(1000 * 2 ** (attempt - 1), MAX_RETRY_DELAY_MS)
}

const wait = (milliseconds) => new Promise((resolveWait) => setTimeout(resolveWait, milliseconds))

async function submitBatch(urlList) {
  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_ORIGIN}/${INDEXNOW_KEY}.txt`,
    urlList,
  }

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt += 1) {
    let response
    try {
      response = await fetch(INDEXNOW_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(payload),
        redirect: 'error',
        signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
      })
    } catch {
      if (attempt === MAX_ATTEMPTS) {
        console.error(`No HTTP response; ${urlList.length} URLs were not confirmed as submitted.`)
        for (const url of urlList) console.error(url)
        throw new Error('IndexNow request failed after network retries.')
      }
      const delay = Math.min(1000 * 2 ** (attempt - 1), MAX_RETRY_DELAY_MS)
      console.warn(`Network error; retrying IndexNow request in ${Math.ceil(delay / 1000)} seconds.`)
      await wait(delay)
      continue
    }

    if ((response.status === 429 || response.status >= 500) && attempt < MAX_ATTEMPTS) {
      const delay = retryDelay(response, attempt)
      console.warn(`IndexNow returned HTTP ${response.status}; retrying in ${Math.ceil(delay / 1000)} seconds.`)
      await wait(delay)
      continue
    }

    if (response.status !== 200 && response.status !== 202) {
      console.error(`IndexNow response: HTTP ${response.status}; ${urlList.length} URLs were not accepted.`)
      for (const url of urlList) console.error(url)
      const reason = response.status === 429
        ? 'rate limit reached; wait before running the command again'
        : response.status === 400
          ? 'request format was rejected'
          : response.status === 403 || response.status === 422
            ? 'key, key file or URL ownership validation failed'
            : `request was rejected (HTTP ${response.status})`
      throw new Error(`IndexNow returned HTTP ${response.status}: ${reason}.`)
    }

    console.log(`IndexNow response: HTTP ${response.status}; submitted ${urlList.length} URLs.`)
    for (const url of urlList) console.log(url)
    if (response.status === 202) console.warn('The request was accepted; IndexNow key validation is still pending.')
    return response.status
  }

  throw new Error('IndexNow request exhausted its retry limit.')
}

async function run() {
  const { days, dryRun } = getOptions(process.argv.slice(2))
  if (!INDEXNOW_KEY || !/^[A-Za-z0-9-]{8,128}$/.test(INDEXNOW_KEY)) {
    throw new Error('Set a valid 8–128 character IndexNow key in the key_2 environment variable.')
  }

  let lockDescriptor
  try {
    lockDescriptor = openSync(LOCK_PATH, 'wx')
  } catch {
    throw new Error('Another IndexNow submission may already be running; check the lock file before retrying.')
  }

  try {
    const sitemapXml = await fetchText(SITEMAP_URL, 'The NORTHMARK sitemap')
    const sitemapEntries = parseSitemap(sitemapXml)
    const state = loadState()
    const cutoff = Date.now() - days * 24 * 60 * 60 * 1000
    const now = Date.now()
    const pending = [...sitemapEntries.entries()].filter(([url, lastmod]) => {
      const modifiedAt = Date.parse(lastmod)
      return modifiedAt >= cutoff && modifiedAt <= now && state.get(url) !== lastmod
    })

    if (pending.length === 0) {
      console.log(`No unchanged or recently updated sitemap URLs to submit in the last ${days} days.`)
      return
    }

    const urlList = pending.map(([url]) => validateSiteUrl(url))
    if (dryRun) {
      console.log(`Dry run: ${urlList.length} recently updated URLs would be submitted.`)
      for (const url of urlList) console.log(url)
      return
    }

    const keyLocation = `${SITE_ORIGIN}/${INDEXNOW_KEY}.txt`
    const verificationFile = await fetchText(keyLocation, 'The IndexNow verification file')
    if (verificationFile.trim() !== INDEXNOW_KEY) {
      throw new Error('The publicly hosted IndexNow verification file does not match key_2; no URLs were submitted.')
    }

    for (let offset = 0; offset < pending.length; offset += MAX_URLS_PER_REQUEST) {
      const batch = pending.slice(offset, offset + MAX_URLS_PER_REQUEST)
      const batchUrls = batch.map(([url]) => validateSiteUrl(url))
      await submitBatch(batchUrls)
      for (const [url, lastmod] of batch) state.set(url, lastmod)
      saveState(state)
    }
  } finally {
    if (lockDescriptor !== undefined) closeSync(lockDescriptor)
    try {
      unlinkSync(LOCK_PATH)
    } catch {
      // A missing lock file needs no cleanup.
    }
  }
}

run().catch((error) => {
  console.error(error instanceof Error ? error.message : 'IndexNow submission failed.')
  process.exitCode = 1
})
