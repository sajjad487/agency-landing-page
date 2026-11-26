import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { pageMetadata } from '@/lib/site'
import { insights } from '@/lib/insights'

export const metadata: Metadata = pageMetadata(
  'Search Visibility Insights',
  'Practical, researched guides to SEO, answer engine optimization, generative search and measuring AI visibility.',
  '/insights',
)

export default function InsightsPage() {
  return (
    <main id="main-content">
      <section className="nm-page-hero">
        <div className="nm-container">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Insights' }]} />
          <p className="nm-eyebrow">Insights & knowledge</p>
          <h1 className="nm-page-title">Understand the Changing Search Landscape.</h1>
          <p className="nm-page-lede">Clear, practical explanations for business owners navigating organic search, answer experiences and generative AI discovery.</p>
        </div>
      </section>
      <section className="nm-page-body">
        <div className="nm-container">
          <div className="nm-card-grid">
            {insights.map((article) => (
              <article className="nm-content-card" key={article.slug}>
                <p className="nm-eyebrow">Search visibility guide</p>
                <h2><Link href={`/insights/${article.slug}`}>{article.title}</Link></h2>
                <p>{article.excerpt}</p>
                <Link className="nm-text-link" href={`/insights/${article.slug}`}>Read the guide <span aria-hidden="true">→</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
