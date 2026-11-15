'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

const CONSENT_COOKIE = 'corvin-clarity-consent'
const CLARITY_PROJECT_ID = 'ze8axd7lnf'

export function ClarityConsent() {
  const [consent, setConsent] = useState<'granted' | 'denied' | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const value = document.cookie
      .split('; ')
      .find((cookie) => cookie.startsWith(`${CONSENT_COOKIE}=`))
      ?.split('=')[1]

    if (value === 'granted' || value === 'denied') setConsent(value)
    setReady(true)
  }, [])

  function chooseConsent(value: 'granted' | 'denied') {
    document.cookie = `${CONSENT_COOKIE}=${value}; Path=/; Max-Age=15552000; SameSite=Lax${location.protocol === 'https:' ? '; Secure' : ''}`
    setConsent(value)
  }

  return (
    <>
      {ready && consent === 'granted' && (
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_PROJECT_ID}");`,
          }}
        />
      )}
      {ready && consent === null && (
        <aside
          aria-label="Analytics cookie preferences"
          className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl rounded-xl border border-border bg-card p-5 text-card-foreground shadow-2xl sm:inset-x-6 sm:p-6"
          role="region"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <h2 className="text-base font-semibold">Help us improve Corvin Web</h2>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                With your permission, Microsoft Clarity uses session recordings and interaction analytics to help us understand site usage. You can decline and still use the site.
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
