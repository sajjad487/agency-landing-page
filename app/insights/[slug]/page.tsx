import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { FaqList } from '@/components/faq-list'
import { JsonLd, breadcrumbSchema } from '@/components/json-ld'
import { getInsight, insights } from '@/lib/insights'
import { absoluteUrl, OWNER_NAME, pageMetadata } from '@/lib/site'
import { getService } from '@/lib/services'

type InsightPageProps = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return insights.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: InsightPageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getInsight(slug)
  if (!article) return pageMetadata('Article Not Found', 'This NORTHMARK insight could not be found.', `/insights/${slug}`, 'article')
  const metadata = pageMetadata(article.title, article.description, `/insights/${article.slug}`, 'article')
  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      type: 'article',
      publishedTime: article.publishedAt,
      modifiedTime: article.publishedAt,
      authors: [OWNER_NAME],
    },
  }
}

function headingId(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat('en-GB', { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(value))
}

export default async function InsightDetailPage({ params }: InsightPageProps) {
  const { slug } = await params
  const article = getInsight(slug)
  if (!article) notFound()

  const homeUrl = absoluteUrl('/')
  const insightsUrl = absoluteUrl('/insights')
  const articleUrl = absoluteUrl(`/insights/${article.slug}`)
  const relatedService = getService(article.relatedService)
  const date = formatDate(article.publishedAt)
  const articleSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${articleUrl}#article`,
        headline: article.title,
        description: article.description,
        datePublished: article.publishedAt,
        dateModified: article.publishedAt,
        author: { '@type': 'Person', '@id': `${homeUrl}#founder`, name: OWNER_NAME },
        publisher: { '@id': `${homeUrl}#organization` },
        mainEntityOfPage: { '@id': `${articleUrl}#webpage` },
        inLanguage: 'en',
      },
      {
        '@type': 'WebPage',
        '@id': `${articleUrl}#webpage`,
        url: articleUrl,
        name: article.title,
        isPartOf: { '@id': `${homeUrl}#website` },
        inLanguage: 'en',
      },
      breadcrumbSchema([
        { name: 'Home', url: homeUrl },
        { name: 'Insights', url: insightsUrl },
        { name: article.title, url: articleUrl },
      ]),
    ],
  }
  const articleFaqs = article.faqs.map((faq) => ({ ...faq, category: 'Article', service: article.relatedService }))

  return (
    <main id="main-content">
      <JsonLd data={articleSchema} />
      <article>
        <header className="nm-page-hero">
          <div className="nm-container">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Insights', href: '/insights' }, { label: article.title }]} />
            <p className="nm-eyebrow">NORTHMARK insights</p>
            <h1 className="nm-page-title">{article.title}</h1>
            <p className="nm-page-lede">{article.excerpt}</p>
            <div className="nm-article-meta">
              <span>By {OWNER_NAME}, Founder</span>
              <time dateTime={article.publishedAt}>Published {date}</time>
              <time dateTime={article.publishedAt}>Updated {date}</time>
            </div>
          </div>
        </header>
        <div className="nm-page-body">
          <div className="nm-container nm-content-layout">
            <div className="nm-prose">
              <p className="nm-article-answer">{article.excerpt}</p>
              <nav className="nm-article-toc" aria-label="Article contents">
                <h2>In this guide</h2>
                <ol>{article.sections.map((section) => <li key={section.heading}><a href={`#${headingId(section.heading)}`}>{section.heading}</a></li>)}</ol>
              </nav>
              {article.sections.map((section) => (
                <section key={section.heading} id={headingId(section.heading)}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
                </section>
              ))}
              <section>
                <h2>Key takeaways</h2>
                <ul>{article.takeaways.map((takeaway) => <li key={takeaway}>{takeaway}</li>)}</ul>
              </section>
              <section>
                <h2>Common questions</h2>
                <FaqList items={articleFaqs} serviceLinks={false} />
              </section>
              <section className="nm-references" aria-labelledby="references-title">
                <h2 id="references-title">References &amp; further reading</h2>
                <ul>{article.references.map((reference) => <li key={reference.url}><a href={reference.url} target="_blank" rel="noreferrer noopener">{reference.label}<span className="sr-only"> (opens in a new tab)</span></a></li>)}</ul>
              </section>
              <p className="nm-article-note">Search platforms and generative systems change over time. This guide explains general practices and does not promise rankings, citations or recommendations.</p>
              <div className="nm-article-author"><strong>About the author:</strong> {OWNER_NAME} is the founder of NORTHMARK, a Budapest-based search optimization agency.</div>
            </div>
            <aside className="nm-side-card">
              <h2>Continue exploring</h2>
              <p>{relatedService?.summary}</p>
              {relatedService && <Link className="nm-text-link" href={`/services/${relatedService.slug}`}>Explore {relatedService.acronym} <span aria-hidden="true">→</span></Link>}
              <div className="nm-related">
                <h2>Talk with NORTHMARK</h2>
                <p>Discuss how these search changes relate to your business.</p>
                <Link className="nm-text-link" href="/contact">Start a conversation <span aria-hidden="true">→</span></Link>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </main>
  )
}
