import type { Metadata } from 'next'
import Link from 'next/link'
import { FaqList } from '@/components/faq-list'
import { JsonLd, organizationSchema } from '@/components/json-ld'
import { homepageFaqs } from '@/lib/faqs'
import { absoluteUrl, pageMetadata } from '@/lib/site'
import { services } from '@/lib/services'

export const metadata: Metadata = {
  ...pageMetadata(
    'SEO, AEO & GEO Agency in Budapest',
    'NORTHMARK is a Budapest-based SEO, AEO and GEO agency helping businesses improve visibility across Google, ChatGPT and AI-powered search engines.',
    '/',
  ),
  title: { absolute: 'SEO, AEO & GEO Agency in Budapest | NORTHMARK' },
}

const visibilityStages = [
  { number: '01', title: 'Discoverability', description: 'Can search engines and AI systems find your business information?' },
  { number: '02', title: 'Understandability', description: 'Can they interpret what you offer and who you serve?' },
  { number: '03', title: 'Credibility', description: 'Is your information clear, consistent and supported by trustworthy sources?' },
  { number: '04', title: 'Conversion', description: 'Can a potential customer confidently take the next step?' },
]

const process = [
  { number: '01', title: 'Audit', description: 'Assess search visibility, technical foundations, website structure, content and how your business is represented.' },
  { number: '02', title: 'Strategy', description: 'Prioritize opportunities around your objectives, customer search behavior and competitive landscape.' },
  { number: '03', title: 'Optimize', description: 'Improve technical foundations, landing pages, content, structured information and business details.' },
  { number: '04', title: 'Measure', description: 'Review search performance, AI visibility signals, citations, traffic and relevant business outcomes.' },
]

const principles = [
  'Search-first website architecture',
  'Human-readable and machine-readable content',
  'Transparent, research-driven methodology',
  'Sustainable visibility over shortcuts',
  'Business-focused measurement',
  'No manipulative tactics or ranking guarantees',
]

const platformNames = ['Google', 'Bing', 'ChatGPT', 'Gemini', 'Perplexity', 'Microsoft Copilot']

export default function HomePage() {
  const origin = absoluteUrl('/')
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homepageFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${origin}#webpage`,
    url: origin,
    name: 'SEO, AEO & GEO Agency in Budapest | NORTHMARK',
    description: 'NORTHMARK is a Budapest-based SEO, AEO and GEO agency helping businesses improve visibility across Google, ChatGPT and AI-powered search engines.',
    isPartOf: { '@id': `${origin}#website` },
    about: { '@id': `${origin}#organization` },
    inLanguage: 'en',
  }

  return (
    <main id="main-content">
      <JsonLd data={organizationSchema(origin)} />
      <JsonLd data={webPageSchema} />
      <JsonLd data={faqSchema} />

      <section className="nm-hero">
        <div className="nm-container nm-hero-grid">
          <div className="nm-hero-copy">
            <p className="nm-eyebrow">Search visibility for the AI era</p>
            <h1>Be Found.<br />Be Understood.<br /><span>Be Recommended.</span></h1>
            <p className="nm-hero-intro">NORTHMARK is a Budapest-based search optimization agency helping businesses improve their visibility across traditional search engines, AI-powered answer engines and generative search platforms.</p>
            <div className="nm-actions">
              <Link className="nm-button nm-button-primary" href="/contact?service=ai-search-audit">Get a Search Visibility Audit <span aria-hidden="true">→</span></Link>
              <Link className="nm-button nm-button-secondary" href="/services">Explore Our Services <span aria-hidden="true">→</span></Link>
            </div>
            <p className="nm-service-line">SEO <span>·</span> AEO <span>·</span> GEO <span>·</span> AI Search Visibility</p>
          </div>
          <div className="nm-hero-visual" role="img" aria-label="Diagram connecting a business to search engines, answer platforms and potential customers">
            <div className="nm-visual-heading"><span>Search ecosystem</span><span className="nm-visual-rule" /></div>
            <div className="nm-visual-map">
              <div className="nm-map-node nm-map-business"><span className="nm-node-symbol">N</span><strong>Your business</strong><small>Clear, useful information</small></div>
              <div className="nm-map-connectors" aria-hidden="true"><i /><i /><i /><i /></div>
              <div className="nm-map-platforms">
                <span>Search engines</span>
                <span>Answer engines</span>
                <span>Generative search</span>
                <span>People</span>
              </div>
            </div>
            <p className="nm-visual-note">Visibility begins with being understood.</p>
          </div>
        </div>
      </section>

      <section className="nm-section nm-search-shift" aria-labelledby="search-shift-title">
        <div className="nm-container nm-split-section">
          <div>
            <p className="nm-eyebrow">A changing landscape</p>
            <h2 id="search-shift-title">Your Customers Are Searching Differently.</h2>
          </div>
          <div className="nm-copy-block">
            <p>Search is no longer limited to a list of blue links. Customers increasingly use AI-powered platforms to discover businesses, compare solutions and make purchasing decisions.</p>
            <p>Businesses need to be discoverable, understandable and credible across both traditional and AI-powered search environments.</p>
          </div>
        </div>
        <div className="nm-container">
          <ul className="nm-platform-list" aria-label="Search platforms NORTHMARK helps businesses optimize for">
            {platformNames.map((platform) => <li key={platform}>{platform}</li>)}
          </ul>
          <p className="nm-disclaimer">Platform names are used for identification only. NORTHMARK is independent and does not claim partnership or endorsement by these companies.</p>
        </div>
      </section>

      <section className="nm-section nm-section-tint" aria-labelledby="services-title">
        <div className="nm-container">
          <div className="nm-section-heading">
            <p className="nm-eyebrow">What we do</p>
            <h2 id="services-title">Three Disciplines.<br /><span>One Search Strategy.</span></h2>
            <p>Connected services for stronger, clearer visibility wherever your customers search.</p>
          </div>
          <div className="nm-service-grid">
            {services.map((service, index) => (
              <article className="nm-service-card" key={service.slug}>
                <span className="nm-card-number">0{index + 1}</span>
                <p className="nm-card-acronym">{service.acronym}</p>
                <h3>{service.shortTitle}</h3>
                <p>{service.summary}</p>
                <Link href={`/services/${service.slug}`} className="nm-text-link">Explore {service.acronym === 'AUDIT' ? 'AI Search Audit' : service.acronym} <span aria-hidden="true">→</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="nm-section" aria-labelledby="visibility-title">
        <div className="nm-container">
          <div className="nm-section-heading nm-section-heading-wide">
            <p className="nm-eyebrow">The visibility framework</p>
            <h2 id="visibility-title">How Search Visibility Works</h2>
            <p>Strong discovery is a sequence: systems need access, clarity and credible information before a customer can act.</p>
          </div>
          <ol className="nm-stage-grid">
            {visibilityStages.map((stage) => (
              <li key={stage.number}>
                <span className="nm-stage-number">{stage.number}</span>
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
              </li>
            ))}
          </ol>
          <p className="nm-caveat">Optimization improves the conditions for discovery and visibility; search platforms determine their own results and no recommendation or ranking can be guaranteed.</p>
        </div>
      </section>

      <section className="nm-section nm-process-section" aria-labelledby="process-title">
        <div className="nm-container nm-process-layout">
          <div className="nm-process-intro">
            <p className="nm-eyebrow">How we work</p>
            <h2 id="process-title">A Structured Approach to Search Visibility.</h2>
            <p>Clear scope, research-led priorities and reporting that separates observed signals from business outcomes.</p>
            <Link className="nm-text-link" href="/about">Get to know NORTHMARK <span aria-hidden="true">→</span></Link>
          </div>
          <ol className="nm-process-list">
            {process.map((step) => (
              <li key={step.number}>
                <span>{step.number}</span>
                <div><h3>{step.title}</h3><p>{step.description}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="nm-section" aria-labelledby="why-title">
        <div className="nm-container nm-why-layout">
          <div className="nm-section-heading">
            <p className="nm-eyebrow">Why NORTHMARK</p>
            <h2 id="why-title">Built for the Next Era of Search.</h2>
            <p>Independent thinking, transparent execution and an emphasis on durable foundations.</p>
          </div>
          <ul className="nm-principle-list">
            {principles.map((principle) => <li key={principle}><span aria-hidden="true">→</span>{principle}</li>)}
          </ul>
        </div>
      </section>

      <section className="nm-section nm-section-tint" aria-labelledby="faq-title">
        <div className="nm-container nm-faq-layout">
          <div className="nm-section-heading">
            <p className="nm-eyebrow">Good to know</p>
            <h2 id="faq-title">Questions, Clearly Answered.</h2>
            <Link className="nm-text-link" href="/faq">Visit the full FAQ <span aria-hidden="true">→</span></Link>
          </div>
          <FaqList items={homepageFaqs.map((faq) => ({ ...faq, service: faq.service ?? (faq.category === 'SEO' ? 'seo' : faq.category === 'AEO' ? 'aeo' : undefined) }))} />
        </div>
      </section>

      <section className="nm-final-cta">
        <div className="nm-container nm-final-cta-inner">
          <div>
            <p className="nm-eyebrow">Make the next move</p>
            <h2>Make Your Business Easier to Discover.</h2>
            <p>Understand how your business appears across search engines and AI-powered platforms, identify gaps and build a strategy for stronger visibility.</p>
          </div>
          <Link className="nm-button nm-button-light" href="/contact?service=ai-search-audit">Request a Search Visibility Audit <span aria-hidden="true">→</span></Link>
        </div>
      </section>
    </main>
  )
}
