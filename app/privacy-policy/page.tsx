import type { Metadata } from 'next'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { pageMetadata, OWNER_EMAIL, OWNER_NAME } from '@/lib/site'

export const metadata: Metadata = pageMetadata(
  'Privacy Policy',
  'Read the NORTHMARK privacy policy draft describing contact enquiries, analytics consent and privacy rights.',
  '/privacy-policy',
)

export default function PrivacyPolicyPage() {
  return (
    <main id="main-content">
      <section className="nm-page-hero">
        <div className="nm-container">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]} />
          <p className="nm-eyebrow">Privacy & data</p>
          <h1 className="nm-page-title">Privacy Policy</h1>
          <p className="nm-page-lede">Draft for owner and legal review · Updated 26 November 2026</p>
        </div>
      </section>
      <section className="nm-page-body">
        <article className="nm-container nm-prose nm-legal-copy">
          <p className="nm-legal-note"><strong>Owner review required before publication.</strong> This editable draft is not legal advice or a representation of complete GDPR compliance. The controller must confirm the legal entity, lawful bases, retention schedule, processors, international transfers, cookie behavior and any required notices with qualified counsel.</p>
          <h2>Who is responsible for your information?</h2>
          <p>NORTHMARK is a search optimization agency based in Budapest, Hungary. The contact for privacy questions is {OWNER_NAME}, Founder, at <a href={`mailto:${OWNER_EMAIL}`}>{OWNER_EMAIL}</a>. The responsible legal entity and any formal registered address have not been specified in this draft and must be added by the owner before publication.</p>
          <h2>Information you provide</h2>
          <p>If you use the contact form, we ask for your name, business email, company name and may collect your website URL, industry, target market, service interest and the information you choose to include in your message. Do not send passwords, payment details or sensitive personal information.</p>
          <h2>How enquiry information is used</h2>
          <p>Information submitted through the form is used to review and respond to your enquiry, understand the requested service and, where relevant, discuss a potential engagement. The current form sends the information to NORTHMARK by email through Resend, a service provider. Confirm the applicable data-processing terms and international transfer safeguards before production use.</p>
          <h2>Legal basis and retention</h2>
          <p>The controller must document the applicable lawful basis for each processing purpose, which may depend on the nature of the enquiry and any requested pre-contract steps. Enquiry information should be retained only as long as necessary to respond and manage the relationship or meet applicable obligations. NORTHMARK must set and publish a concrete retention schedule before treating this draft as final.</p>
          <h2>Cookies and analytics</h2>
          <p>Microsoft Clarity and Vercel Analytics are only activated after a visitor accepts analytics in the consent banner. If a GA4 measurement ID is configured, it is also loaded only after consent. Declining analytics does not prevent use of the site. The consent choice is stored in a first-party cookie, and it can be changed using Cookie settings in the footer. Review the current vendor documentation and complete any necessary cookie disclosures, consent records and regional settings before launch.</p>
          <h2>Your privacy rights</h2>
          <p>Depending on your location and the applicable law, you may have rights to access, correct, erase or restrict personal information, object to certain processing, request portability, or withdraw consent. You may contact <a href={`mailto:${OWNER_EMAIL}`}>{OWNER_EMAIL}</a> with a request. You may also have the right to complain to your local data protection authority. Confirm how requests will be authenticated and fulfilled before launch.</p>
          <h2>Security and updates</h2>
          <p>Reasonable technical and organizational safeguards should be used to protect enquiry information. No internet transmission or storage system can be guaranteed completely secure. This notice may be revised when the site, services, processors or applicable requirements change; material changes should be reflected here with an updated date.</p>
          <h2>Contact</h2>
          <p>Privacy questions can be sent to <a href={`mailto:${OWNER_EMAIL}`}>{OWNER_EMAIL}</a>. NORTHMARK is based in Budapest, Hungary.</p>
        </article>
      </section>
    </main>
  )
}
