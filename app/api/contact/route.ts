import { Resend } from 'resend'
import { OWNER_EMAIL } from '@/lib/site'

export const runtime = 'nodejs'

const allowedServices = new Set(['', 'seo', 'aeo', 'geo', 'ai-search-audit', 'not-sure'])
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const websitePattern = /^https?:\/\//i
const submissionIdPattern = /^[a-f0-9-]{36}$/i

type ContactPayload = {
  name?: unknown
  email?: unknown
  company?: unknown
  websiteUrl?: unknown
  industry?: unknown
  targetMarket?: unknown
  service?: unknown
  objective?: unknown
  additionalInfo?: unknown
  consent?: unknown
  website?: unknown
  submissionId?: unknown
}

function textField(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : ''
}

function jsonError(message: string, status: number, directEmailFallback = false) {
  return Response.json({ message, directEmailFallback }, { status })
}

export async function POST(request: Request) {
  const origin = request.headers.get('origin')
  if (origin) {
    try {
      if (new URL(origin).origin !== new URL(request.url).origin) {
        return jsonError('This request could not be verified. Refresh the page and try again.', 403)
      }
    } catch {
      return jsonError('This request could not be verified. Refresh the page and try again.', 403)
    }
  }

  const bodyText = await request.text()
  if (bodyText.length > 20_000) return jsonError('Your enquiry is too large. Please shorten it and try again.', 413)

  let parsed: unknown
  try {
    parsed = JSON.parse(bodyText)
  } catch {
    return jsonError('The enquiry could not be read. Please review the form and try again.', 400)
  }
  if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
    return jsonError('The enquiry could not be read. Please review the form and try again.', 400)
  }
  const payload = parsed as ContactPayload

  if (textField(payload.website, 500)) {
    return Response.json({ ok: true })
  }

  const name = textField(payload.name, 100)
  const email = textField(payload.email, 254).toLowerCase()
  const company = textField(payload.company, 120)
  const websiteUrl = textField(payload.websiteUrl, 300)
  const industry = textField(payload.industry, 100)
  const targetMarket = textField(payload.targetMarket, 120)
  const service = textField(payload.service, 40)
  const objective = textField(payload.objective, 1200)
  const additionalInfo = textField(payload.additionalInfo, 2400)
  const submissionId = textField(payload.submissionId, 36)

  if (name.length < 2 || !emailPattern.test(email) || !company || payload.consent !== true) {
    return jsonError('Please provide your name, a valid business email and company, and accept the privacy notice.', 400)
  }
  if (websiteUrl && (!websitePattern.test(websiteUrl) || !URL.canParse(websiteUrl))) {
    return jsonError('Please enter a complete website address beginning with http:// or https://.', 400)
  }
  if (!allowedServices.has(service) || !submissionIdPattern.test(submissionId)) {
    return jsonError('Please refresh the page and submit the form again.', 400)
  }

  const apiKey = process.env.RESEND_API_KEY
  const configuredDomain = process.env.RESEND_EMAIL_DOMAIN?.trim().replace(/^https?:\/\//i, '').replace(/\/$/, '')
  const validDomain = Boolean(configuredDomain && /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,63}$/i.test(configuredDomain))

  if (!apiKey || !validDomain) {
    return jsonError('The secure email service is not configured yet. Please contact NORTHMARK directly.', 503, true)
  }

  const serviceLabel = service ? serviceOptionsLabel(service) : 'Not specified'
  const messageText = [
    'New NORTHMARK website enquiry',
    '',
    `Name: ${name}`,
    `Business email: ${email}`,
    `Company: ${company}`,
    `Website: ${websiteUrl || 'Not provided'}`,
    `Industry: ${industry || 'Not provided'}`,
    `Target market: ${targetMarket || 'Not provided'}`,
    `Service of interest: ${serviceLabel}`,
    '',
    'Primary business objective:',
    objective || 'Not provided',
    '',
    'Additional information:',
    additionalInfo || 'Not provided',
  ].join('\n')

  try {
    const resend = new Resend(apiKey)
    const { data, error } = await resend.emails.send({
      from: `NORTHMARK <enquiries@${configuredDomain}>`,
      to: [OWNER_EMAIL],
      replyTo: email,
      subject: `Website enquiry: ${company.replace(/[\r\n]+/g, ' ').slice(0, 140)}`,
      text: messageText,
    }, {
      idempotencyKey: `northmark-contact/${submissionId}`,
    })

    if (error || !data) {
      return jsonError('We could not deliver your enquiry right now. Please try again or email us directly.', 502, true)
    }

    return Response.json({ ok: true, id: data.id })
  } catch {
    return jsonError('We could not deliver your enquiry right now. Please try again or email us directly.', 502, true)
  }
}

function serviceOptionsLabel(value: string) {
  const labels: Record<string, string> = {
    seo: 'Search Engine Optimization (SEO)',
    aeo: 'Answer Engine Optimization (AEO)',
    geo: 'Generative Engine Optimization (GEO)',
    'ai-search-audit': 'AI Search Visibility Audit',
    'not-sure': 'Not sure yet',
  }
  return labels[value] ?? 'Not specified'
}
