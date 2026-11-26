import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { pageMetadata, OWNER_EMAIL, OWNER_NAME } from '@/lib/site'

export const metadata: Metadata = pageMetadata(
  'Terms of Service',
  'Read the NORTHMARK terms of service draft for website information, search optimization enquiries and service engagements.',
  '/terms',
)

export default function TermsPage() {
  return (
    <main id="main-content">
      <section className="nm-page-hero">
        <div className="nm-container">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Terms of Service' }]} />
          <p className="nm-eyebrow">Terms & information</p>
          <h1 className="nm-page-title">Terms of Service</h1>
          <p className="nm-page-lede">Draft for owner and legal review · Updated 26 November 2026</p>
        </div>
      </section>
      <section className="nm-page-body">
        <article className="nm-container nm-prose nm-legal-copy">
          <p className="nm-legal-note"><strong>Owner review required before publication.</strong> This editable draft is not legal advice. Confirm the responsible legal entity, registered business details, governing law, payment terms, liability provisions and any required consumer or commercial disclosures with qualified counsel.</p>
          <h2>About NORTHMARK</h2>
          <p>NORTHMARK is a search optimization agency based in Budapest, Hungary. The founder is {OWNER_NAME}. Enquiries may be sent to <a href={`mailto:${OWNER_EMAIL}`}>{OWNER_EMAIL}</a>. The contracting legal entity and registered address must be supplied by the owner in the final terms.</p>
          <h2>Website information</h2>
          <p>Website content is provided for general educational and informational purposes. It is not legal, financial or other regulated professional advice. We aim to keep information useful and accurate but do not warrant that every page is complete, current or suitable for a particular decision.</p>
          <h2>Search optimization services</h2>
          <p>SEO, AEO, GEO and AI search visibility engagements are provided only under a separate written scope or agreement. The parties should agree on deliverables, timing, fees, payment terms, dependencies, data handling and termination rights in that document.</p>
          <h2>No guaranteed rankings or AI recommendations</h2>
          <p>Search rankings, indexing, citations, referrals and recommendations are controlled by independent platforms and may vary by query, location, context and time. NORTHMARK does not guarantee rankings, featured results, AI citations, recommendations, traffic or revenue.</p>
          <h2>Third-party platforms</h2>
          <p>References to Google, Bing, ChatGPT, Gemini, Perplexity, Microsoft Copilot and other third-party services are for identification and discussion. NORTHMARK is independent and does not claim sponsorship, partnership or endorsement. Third-party services operate under their own terms and policies.</p>
          <h2>Intellectual property and acceptable use</h2>
          <p>Unless otherwise stated, NORTHMARK’s original website content is protected by applicable intellectual property laws. You may read and link to public pages for lawful purposes. Do not interfere with site operation, misuse contact channels, attempt unauthorized access or misrepresent the source of our content.</p>
          <h2>Updates and contact</h2>
          <p>These draft terms may be updated as the business and services develop. Questions can be sent to <a href={`mailto:${OWNER_EMAIL}`}>{OWNER_EMAIL}</a>. The final version should identify the contracting entity and applicable jurisdiction before use.</p>
        </article>
      </section>
    </main>
  )
}
