import Link from 'next/link'
import { CookieSettingsButton } from '@/components/cookie-settings-button'
import { OWNER_EMAIL, OWNER_NAME } from '@/lib/site'

const footerServices = [
  { label: 'Search Engine Optimization', href: '/services/seo' },
  { label: 'Answer Engine Optimization', href: '/services/aeo' },
  { label: 'Generative Engine Optimization', href: '/services/geo' },
  { label: 'AI Search Visibility Audit', href: '/services/ai-search-audit' },
]

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="nm-footer">
      <div className="nm-container">
        <div className="nm-footer-grid">
          <div className="nm-footer-about">
            <Link className="nm-brand" href="/">
              <span className="nm-brand-symbol" aria-hidden="true"><span /></span>
              <span>NORTHMARK</span>
            </Link>
            <p>Search visibility for the AI era.</p>
            <p>Budapest, Hungary.</p>
          </div>
          <div>
            <h2>Services</h2>
            <ul>{footerServices.map((service) => <li key={service.href}><Link href={service.href}>{service.label}</Link></li>)}</ul>
          </div>
          <div>
            <h2>Explore</h2>
            <ul>
              <li><Link href="/insights">Insights</Link></li>
              <li><Link href="/faq">FAQs</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h2>Contact</h2>
            <p>{OWNER_NAME}<br />Founder</p>
            <a href={`mailto:${OWNER_EMAIL}`}>{OWNER_EMAIL}</a>
          </div>
        </div>
        <div className="nm-footer-bottom">
          <p>© {year} NORTHMARK. All rights reserved.</p>
          <nav aria-label="Legal links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <CookieSettingsButton />
          </nav>
        </div>
      </div>
    </footer>
  )
}
