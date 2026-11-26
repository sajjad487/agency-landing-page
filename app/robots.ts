import type { MetadataRoute } from 'next'
import { absoluteUrl } from '@/lib/site'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: 'Googlebot', allow: '/' },
      { userAgent: 'bingbot', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'GPTBot', disallow: '/' },
      { userAgent: 'Google-Extended', disallow: '/' },
      { userAgent: '*', allow: '/', disallow: '/api/' },
    ],
    sitemap: absoluteUrl('/sitemap.xml'),
  }
}
