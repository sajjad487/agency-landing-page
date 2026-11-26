'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

const serviceLinks = [
  { label: 'SEO', href: '/services/seo', description: 'Organic search foundations' },
  { label: 'AEO', href: '/services/aeo', description: 'Clearer answers for search' },
  { label: 'GEO', href: '/services/geo', description: 'Generative search visibility' },
  { label: 'AI Search Audit', href: '/services/ai-search-audit', description: 'A human-led visibility review' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const servicesMenuRef = useRef<HTMLDetailsElement>(null)

  useEffect(() => {
    if (servicesMenuRef.current) servicesMenuRef.current.open = false
  }, [pathname])

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="nm-header">
      <div className="nm-container nm-header-inner">
        <Link className="nm-brand" href="/" aria-label="NORTHMARK home" onClick={closeMenu}>
          <span className="nm-brand-symbol" aria-hidden="true"><span /></span>
          <span>NORTHMARK</span>
        </Link>
        <button
          className="nm-menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav id="primary-navigation" className={`nm-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          <details ref={servicesMenuRef} className="nm-services-menu">
            <summary>Services <span aria-hidden="true" /></summary>
            <div className="nm-services-dropdown">
              <Link href="/services" className="nm-dropdown-overview" onClick={closeMenu}>All services <span aria-hidden="true">→</span></Link>
              {serviceLinks.map((service) => (
                <Link key={service.href} href={service.href} onClick={closeMenu}>
                  <strong>{service.label}</strong>
                  <span>{service.description}</span>
                </Link>
              ))}
            </div>
          </details>
          <Link href="/about" onClick={closeMenu}>About</Link>
          <Link href="/insights" onClick={closeMenu}>Insights</Link>
          <Link href="/faq" onClick={closeMenu}>FAQs</Link>
          <Link href="/contact" onClick={closeMenu}>Contact</Link>
          <Link className="nm-button nm-button-primary nm-nav-cta" href="/contact?service=ai-search-audit" onClick={closeMenu}>
            Get a Search Visibility Audit <span aria-hidden="true">→</span>
          </Link>
        </nav>
      </div>
    </header>
  )
}
