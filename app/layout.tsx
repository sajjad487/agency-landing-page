import { Inter } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import { SiteHeader } from '@/components/navbar'
import { SiteFooter } from '@/components/footer'
import { ClarityConsent } from '@/components/clarity-consent'
import { getSiteOrigin } from '@/lib/site'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const siteOrigin = getSiteOrigin()

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: {
    default: 'SEO, AEO & GEO Agency in Budapest | NORTHMARK',
    template: '%s | NORTHMARK',
  },
  description: 'NORTHMARK is a Budapest-based SEO, AEO and GEO agency helping businesses improve visibility across Google, ChatGPT and AI-powered search engines.',
  applicationName: 'NORTHMARK',
  alternates: { canonical: siteOrigin },
  openGraph: {
    type: 'website',
    siteName: 'NORTHMARK',
    locale: 'en_GB',
    url: siteOrigin,
    title: 'SEO, AEO & GEO Agency in Budapest | NORTHMARK',
    description: 'NORTHMARK is a Budapest-based SEO, AEO and GEO agency helping businesses improve visibility across Google, ChatGPT and AI-powered search engines.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO, AEO & GEO Agency in Budapest | NORTHMARK',
    description: 'NORTHMARK is a Budapest-based SEO, AEO and GEO agency helping businesses improve visibility across Google, ChatGPT and AI-powered search engines.',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { 'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : undefined,
  },
  robots: { index: true, follow: true },
  icons: { icon: '/icon.svg' },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f8f9fb',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <a className="nm-skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <ClarityConsent />
      </body>
    </html>
  )
}
