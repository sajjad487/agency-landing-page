import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { pageMetadata } from '@/lib/site'
import { services } from '@/lib/services'

export const metadata: Metadata = pageMetadata(
  'Search Optimization Services',
  'Explore NORTHMARK’s SEO, AEO, GEO and AI Search Visibility Audit services for clear, sustainable search discovery.',
  '/services',
)

export default function ServicesPage() {
  return (
    <main id="main-content">
      <section className="nm-page-hero">
        <div className="nm-container">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services' }]} />
          <p className="nm-eyebrow">Services</p>
          <h1 className="nm-page-title">Search Optimization, Built Around Your Business.</h1>
          <p className="nm-page-lede">SEO, AEO and GEO are connected disciplines. NORTHMARK brings them together around the way your customers discover, evaluate and choose a business.</p>
        </div>
      </section>
      <section className="nm-page-body">
        <div className="nm-container">
          <div className="nm-service-grid">
            {services.map((service, index) => (
              <article className="nm-service-card" key={service.slug}>
                <span className="nm-card-number">0{index + 1}</span>
                <p className="nm-card-acronym">{service.acronym}</p>
                <h2>{service.shortTitle}</h2>
                <p>{service.summary}</p>
                <Link className="nm-text-link" href={`/services/${service.slug}`}>Explore {service.acronym === 'AUDIT' ? 'the audit' : service.acronym} service <span aria-hidden="true">→</span></Link>
              </article>
            ))}
          </div>
          <div className="nm-content-callout">
            <h2>Not sure where to start?</h2>
            <p>A human-led visibility audit can help identify which foundations and opportunities deserve attention first.</p>
            <Link className="nm-button nm-button-primary" href="/contact?service=ai-search-audit">Discuss a search visibility audit <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>
    </main>
  )
}
