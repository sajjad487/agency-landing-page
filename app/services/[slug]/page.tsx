import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { FaqList } from '@/components/faq-list'
import { JsonLd, breadcrumbSchema } from '@/components/json-ld'
import { absoluteUrl, pageMetadata } from '@/lib/site'
import { getService, services } from '@/lib/services'

type ServicePageProps = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return pageMetadata('Service Not Found', 'This NORTHMARK service page could not be found.', `/services/${slug}`)
  return pageMetadata(service.title, service.description, `/services/${service.slug}`)
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  const homeUrl = absoluteUrl('/')
  const servicesUrl = absoluteUrl('/services')
  const serviceUrl = absoluteUrl(`/services/${service.slug}`)
  const organizationId = `${homeUrl}#organization`
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: service.shortTitle },
  ]
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${serviceUrl}#service`,
        name: service.title,
        serviceType: service.shortTitle,
        description: service.description,
        url: serviceUrl,
        provider: { '@id': organizationId },
        areaServed: ['Hungary', 'Europe', 'International markets'],
      },
      {
        '@type': 'WebPage',
        '@id': `${serviceUrl}#webpage`,
        url: serviceUrl,
        name: `${service.title} | NORTHMARK`,
        isPartOf: { '@id': `${homeUrl}#website` },
        about: { '@id': `${serviceUrl}#service` },
        inLanguage: 'en',
      },
      {
        '@type': 'FAQPage',
        mainEntity: service.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
      breadcrumbSchema([
        { name: 'Home', url: homeUrl },
        { name: 'Services', url: servicesUrl },
        { name: service.shortTitle, url: serviceUrl },
      ]),
    ],
  }
  const faqItems = service.faqs.map((faq) => ({ ...faq, category: service.acronym, service: service.slug }))
  const relatedServices = services.filter((other) => other.slug !== service.slug)

  return (
    <main id="main-content">
      <JsonLd data={jsonLd} />
      <section className="nm-page-hero">
        <div className="nm-container">
          <Breadcrumbs items={breadcrumbItems} />
          <p className="nm-eyebrow">NORTHMARK / {service.acronym}</p>
          <h1 className="nm-page-title">{service.title}</h1>
          <p className="nm-page-lede">{service.summary}</p>
          <div className="nm-actions nm-service-hero-actions">
            <Link className="nm-button nm-button-primary" href={`/contact?service=${service.slug}`}>Discuss {service.acronym === 'AUDIT' ? 'an audit' : service.shortTitle} <span aria-hidden="true">→</span></Link>
            <Link className="nm-button nm-button-secondary" href="/services">All services <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="nm-page-body">
        <div className="nm-container nm-content-layout">
          <article className="nm-prose">
            {service.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
                {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
              </section>
            ))}
            <section>
              <h2>What the work may include</h2>
              <ul className="nm-deliverable-list">{service.deliverables.map((deliverable) => <li key={deliverable}>{deliverable}</li>)}</ul>
            </section>
            <section>
              <h2>Questions about {service.shortTitle}</h2>
              <FaqList items={faqItems} serviceLinks={false} />
            </section>
            <div className="nm-content-callout">
              <h2>Talk through your search goals.</h2>
              <p>Share your website, market and objectives. NORTHMARK will review your enquiry and follow up with a clear next step.</p>
              <Link className="nm-button nm-button-primary" href={`/contact?service=${service.slug}`}>Start a conversation <span aria-hidden="true">→</span></Link>
            </div>
          </article>

          <aside className="nm-side-card" aria-labelledby="service-includes-title">
            <h2 id="service-includes-title">A focused engagement</h2>
            <p>Scope is shaped around your website, market and business objectives. Common areas of work include:</p>
            <ul className="nm-deliverables">{service.deliverables.slice(0, 6).map((item) => <li key={item}>{item}</li>)}</ul>
            <div className="nm-related">
              <h2>Related services</h2>
              <ul>{relatedServices.map((related) => <li key={related.slug}><Link href={`/services/${related.slug}`}>{related.acronym} · {related.shortTitle}</Link></li>)}</ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
