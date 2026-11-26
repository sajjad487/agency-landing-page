import type { Metadata } from 'next'

export const SITE_NAME = 'NORTHMARK'
export const OWNER_NAME = 'Muhammad Sajjad'
export const OWNER_EMAIL = 'chodharisajjad098@gmail.com'
export const LOCATION = 'Budapest, Hungary'

export function getSiteOrigin() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (configuredUrl) {
    const normalized = /^https?:\/\//i.test(configuredUrl)
      ? configuredUrl
      : `https://${configuredUrl}`
    return new URL(normalized).origin
  }

  const productionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim()
  return productionUrl ? `https://${productionUrl.replace(/^https?:\/\//i, '')}` : 'http://localhost:3000'
}

export function absoluteUrl(path = '/') {
  return new URL(path, getSiteOrigin()).toString()
}

export function pageMetadata(
  title: string,
  description: string,
  path: string,
  type: 'website' | 'article' = 'website',
): Metadata {
  const url = absoluteUrl(path)
  const pageTitle = title.replace(/\s*(?:\|\s*)?NORTHMARK$/i, '').trim()
  return {
    title: pageTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${pageTitle} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'en_GB',
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${pageTitle} | ${SITE_NAME}`,
      description,
    },
  }
}
