import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { FaqList } from '@/components/faq-list'
import { JsonLd, breadcrumbSchema } from '@/components/json-ld'
import { faqs } from '@/lib/faqs'
import { absoluteUrl, pageMetadata } from '@/lib/site'

export const metadata: Metadata = pageMetadata(
  'Search Optimization FAQs',
  'Direct answers about NORTHMARK, SEO, AEO, GEO, AI search visibility and working with a Budapest-based search optimization agency.',
  '/faq',
)

const categories = ['General', 'SEO', 'AEO', 'GEO', 'AI visibility', 'Working together']

export default function FaqPage() {
  const homeUrl = absoluteUrl('/')
  const faqUrl = absoluteUrl('/faq')
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'FAQPage',
        '@id': `${faqUrl}#faq`,
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
      breadcrumbSchema([{ name: 'Home', url: homeUrl }, { name: 'FAQs', url: faqUrl }]),
    ],
  }

  return (
    <main id="main-content">
      <JsonLd data={schema} />
      <section className="nm-page-hero">
        <div className="nm-container">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'FAQs' }]} />
          <p className="nm-eyebrow">Search visibility knowledge base</p>
          <h1 className="nm-page-title">Frequently Asked Questions</h1>
          <p className="nm-page-lede">Clear answers about search optimization, AI discovery and how NORTHMARK works with businesses.</p>
        </div>
      </section>
      <section className="nm-page-body">
        <div className="nm-container nm-faq-page-content">
          {categories.map((category) => {
            const items = faqs.filter((faq) => faq.category === category)
            if (!items.length) return null
            return (
              <section className="nm-faq-category" key={category} aria-labelledby={`faq-${category.toLowerCase().replaceAll(' ', '-')}`}>
                <h2 id={`faq-${category.toLowerCase().replaceAll(' ', '-')}`}>{category}</h2>
                <FaqList items={items} />
              </section>
            )
          })}
        </div>
      </section>
    </main>
  )
}
