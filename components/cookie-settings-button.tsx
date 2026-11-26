'use client'

export function CookieSettingsButton() {
  return (
    <button
      className="nm-cookie-settings"
      type="button"
      onClick={() => window.dispatchEvent(new Event('northmark:open-consent'))}
    >
      Cookie settings
    </button>
  )
}
