import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { ContactForm } from '@/components/contact-form'
import { JsonLd, breadcrumbSchema } from '@/components/json-ld'
import { absoluteUrl, OWNER_EMAIL, OWNER_NAME, pageMetadata } from '@/lib/site'

export const metadata: Metadata = pageMetadata(
  'Contact NORTHMARK',
  'Request a search visibility audit or discuss SEO, AEO, GEO and AI search visibility with NORTHMARK in Budapest, Hungary.',
  '/contact',
)

type ContactPageProps = { searchParams: Promise<{ service?: string | string[] }> }

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams
  const requestedService = Array.isArray(params.service) ? params.service[0] : params.service ?? ''
  const homeUrl = absoluteUrl('/')
  const contactUrl = absoluteUrl('/contact')
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        '@id': `${contactUrl}#webpage`,
        url: contactUrl,
        name: 'Contact NORTHMARK',
        about: { '@id': `${homeUrl}#organization` },
      },
      breadcrumbSchema([{ name: 'Home', url: homeUrl }, { name: 'Contact', url: contactUrl }]),
    ],
  }

  return (
    <main id="main-content">
      <JsonLd data={schema} />
      <section className="nm-page-hero">
        <div className="nm-container">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />
          <p className="nm-eyebrow">Start a conversation</p>
          <h1 className="nm-page-title">Let’s Improve Your Search Visibility.</h1>
          <p className="nm-page-lede">Tell us about your business, your market and what you want search to help you achieve. We’ll review your enquiry and follow up by email.</p>
        </div>
      </section>
      <section className="nm-page-body">
        <div className="nm-container nm-contact-grid">
          <aside className="nm-contact-details">
            <p className="nm-eyebrow">NORTHMARK</p>
            <h2>Search visibility for the AI era.</h2>
            <p>Budapest, Hungary<br />Working remotely with businesses in Hungary, Europe and international markets.</p>
            <p><strong>{OWNER_NAME}</strong><br />Founder</p>
            <a href={`mailto:${OWNER_EMAIL}`}>{OWNER_EMAIL}</a>
            <p className="nm-contact-response-note">Submitting an enquiry requests a conversation; it does not run an instant automated audit.</p>
          </aside>
          <div>
            <ContactForm defaultService={requestedService} />
          </div>
        </div>
      </section>
    </main>
  )
}
