'use client'

import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import { useEffect, useState, useSyncExternalStore } from 'react'

type Consent = 'granted' | 'denied' | null
const CONSENT_COOKIE = 'corvin-clarity-consent'
const CLARITY_PROJECT_ID = 'ze8axd7lnf'
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

function getConsentSnapshot(): Consent {
  if (typeof document === 'undefined') return null
  const value = document.cookie
    .split('; ')
    .find((cookie) => cookie.startsWith(`${CONSENT_COOKIE}=`))
    ?.split('=')[1]
  return value === 'granted' || value === 'denied' ? value : null
}

function subscribeToConsent(callback: () => void) {
  window.addEventListener('northmark:consent-change', callback)
  return () => window.removeEventListener('northmark:consent-change', callback)
}

export function ClarityConsent() {
  const consent = useSyncExternalStore(subscribeToConsent, getConsentSnapshot, () => null)
  const [preferencesOpen, setPreferencesOpen] = useState(false)

  useEffect(() => {
    const openPreferences = () => setPreferencesOpen(true)
    window.addEventListener('northmark:open-consent', openPreferences)
    return () => window.removeEventListener('northmark:open-consent', openPreferences)
  }, [])

  function chooseConsent(value: 'granted' | 'denied') {
    const wasGranted = consent === 'granted'
    document.cookie = `${CONSENT_COOKIE}=${value}; Path=/; Max-Age=15552000; SameSite=Lax${location.protocol === 'https:' ? '; Secure' : ''}`
    window.dispatchEvent(new Event('northmark:consent-change'))
    setPreferencesOpen(false)
    if (wasGranted && value === 'denied') window.location.reload()
  }

  return (
    <>
      {consent === 'granted' && (
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_PROJECT_ID}");`,
          }}
        />
      )}
      {consent === 'granted' && process.env.NODE_ENV === 'production' && <Analytics />}
      {consent === 'granted' && GA_MEASUREMENT_ID && /^G-[A-Z0-9]+$/i.test(GA_MEASUREMENT_ID) && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`} strategy="afterInteractive" />
          <Script id="northmark-ga4" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || []; function gtag(){window.dataLayer.push(arguments);} window.gtag = gtag; gtag('js', new Date()); gtag('config', '${GA_MEASUREMENT_ID}', { anonymize_ip: true });`}
          </Script>
        </>
      )}
      {(consent === null || preferencesOpen) && (
        <aside
          aria-label="Analytics cookie preferences"
          className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl rounded-xl border border-border bg-card p-5 text-card-foreground shadow-2xl sm:inset-x-6 sm:p-6"
          role="region"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <h2 className="text-base font-semibold">Help us improve NORTHMARK</h2>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                With your permission, Microsoft Clarity and Vercel Analytics help us understand site usage; Google Analytics 4 may also run if configured. You can decline and still use the site.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-2">
              <button
                type="button"
                onClick={() => chooseConsent('denied')}
                className="rounded-md border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Decline
              </button>
              <button
                type="button"
                onClick={() => chooseConsent('granted')}
                className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Accept analytics
              </button>
            </div>
          </div>
        </aside>
      )}
    </>
  )
}
