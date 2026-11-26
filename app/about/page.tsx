import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { JsonLd, breadcrumbSchema } from '@/components/json-ld'
import { absoluteUrl, pageMetadata } from '@/lib/site'

export const metadata: Metadata = pageMetadata(
  'About NORTHMARK',
  'Meet NORTHMARK, a Budapest-based specialist agency focused on search engines, answer experiences and generative AI discovery.',
  '/about',
)

export default function AboutPage() {
  const homeUrl = absoluteUrl('/')
  const aboutUrl = absoluteUrl('/about')
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': `${aboutUrl}#webpage`,
        url: aboutUrl,
        name: 'About NORTHMARK',
        about: { '@id': `${homeUrl}#organization` },
        isPartOf: { '@id': `${homeUrl}#website` },
      },
      {
        '@type': 'Person',
        '@id': `${homeUrl}#founder`,
        name: 'Muhammad Sajjad',
        jobTitle: 'Founder',
        worksFor: { '@id': `${homeUrl}#organization` },
      },
      breadcrumbSchema([
        { name: 'Home', url: homeUrl },
        { name: 'About', url: aboutUrl },
      ]),
    ],
  }

  return (
    <main id="main-content">
      <JsonLd data={schema} />
      <section className="nm-page-hero">
        <div className="nm-container">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About' }]} />
          <p className="nm-eyebrow">About NORTHMARK</p>
          <h1 className="nm-page-title">A Clearer View of What Search Is Becoming.</h1>
          <p className="nm-page-lede">NORTHMARK is a Budapest-based specialist agency focused on the evolving relationship between businesses, search engines and artificial intelligence.</p>
        </div>
      </section>
      <section className="nm-page-body">
        <div className="nm-container nm-content-layout">
          <article className="nm-prose">
            <h2>Our mission</h2>
            <p>To help businesses become more discoverable, understandable and credible across traditional and AI-powered search environments.</p>
            <p>Search has expanded beyond a single results page. NORTHMARK brings together technical foundations, useful content and clear business information so organizations can meet customers across the ways they search today.</p>
            <h2>Founder</h2>
            <h3>Muhammad Sajjad — Founder of NORTHMARK</h3>
            <p>Muhammad Sajjad founded NORTHMARK with a focus on helping businesses navigate the changing search landscape through structured, research-driven search optimization strategies.</p>
            <p>Based in Budapest, NORTHMARK works remotely with businesses in Hungary, Europe and international English-speaking markets.</p>
            <h2>How we work</h2>
            <p>Every engagement begins with context: your website, your market, your customers and the outcomes that matter to your business. Recommendations are prioritized, the available evidence is explained, and results are measured without promising outcomes controlled by search platforms.</p>
          </article>
          <aside className="nm-side-card">
            <h2>Our principles</h2>
            <ul className="nm-deliverables">
              <li>Clarity in language and reporting</li>
              <li>Research before recommendations</li>
              <li>Integrity in how results are described</li>
              <li>Precision in technical execution</li>
              <li>Sustainable growth over shortcuts</li>
            </ul>
          </aside>
        </div>
      </section>
    </main>
  )
}
