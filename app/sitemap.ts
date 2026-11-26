import type { MetadataRoute } from 'next'
import { absoluteUrl } from '@/lib/site'
import { insights } from '@/lib/insights'
import { services } from '@/lib/services'

const sitePages = [
  { path: '/', priority: 1, changeFrequency: 'monthly' as const },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/about', priority: 0.7, changeFrequency: 'yearly' as const },
  { path: '/insights', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/faq', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/contact', priority: 0.8, changeFrequency: 'yearly' as const },
  { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
  { path: '/terms', priority: 0.3, changeFrequency: 'yearly' as const },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const servicesUrls = services.map((service) => ({
    url: absoluteUrl(`/services/${service.slug}`),
    lastModified: new Date('2026-11-26T12:00:00.000Z'),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))
  const insightUrls = insights.map((article) => ({
    url: absoluteUrl(`/insights/${article.slug}`),
    lastModified: new Date(article.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    ...sitePages.map((page) => ({
      url: absoluteUrl(page.path),
      lastModified: new Date('2026-11-26T12:00:00.000Z'),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...servicesUrls,
    ...insightUrls,
  ]
}
