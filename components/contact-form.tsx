'use client'

import { useState, type FormEvent } from 'react'
import { OWNER_EMAIL } from '@/lib/site'

const serviceOptions = [
  { value: 'seo', label: 'Search Engine Optimization (SEO)' },
  { value: 'aeo', label: 'Answer Engine Optimization (AEO)' },
  { value: 'geo', label: 'Generative Engine Optimization (GEO)' },
  { value: 'ai-search-audit', label: 'AI Search Visibility Audit' },
  { value: 'not-sure', label: 'Not sure yet' },
]

export function ContactForm({ defaultService = '' }: { defaultService?: string }) {
  const [status, setStatus] = useState<{ kind: 'success' | 'error'; message: string } | null>(null)
  const [pending, setPending] = useState(false)
  const [directEmailFallback, setDirectEmailFallback] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus(null)
    setDirectEmailFallback(false)
    setPending(true)

    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = {
      name: String(formData.get('name') ?? ''),
      email: String(formData.get('email') ?? ''),
      company: String(formData.get('company') ?? ''),
      websiteUrl: String(formData.get('websiteUrl') ?? ''),
      industry: String(formData.get('industry') ?? ''),
      targetMarket: String(formData.get('targetMarket') ?? ''),
      service: String(formData.get('service') ?? ''),
      objective: String(formData.get('objective') ?? ''),
      additionalInfo: String(formData.get('additionalInfo') ?? ''),
      consent: formData.get('consent') === 'on',
      website: String(formData.get('website') ?? ''),
      submissionId: crypto.randomUUID(),
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const result = await response.json().catch(() => ({}))

      if (!response.ok) {
        setStatus({ kind: 'error', message: result.message ?? 'We could not send your enquiry right now. Please try again or email us directly.' })
        setDirectEmailFallback(Boolean(result.directEmailFallback))
        return
      }

      form.reset()
      const analyticsWindow = window as Window & { gtag?: (command: string, eventName: string, parameters: Record<string, string>) => void }
      analyticsWindow.gtag?.('event', 'generate_lead', { method: 'contact_form' })
      setStatus({ kind: 'success', message: 'Your enquiry has been sent to NORTHMARK. We’ll follow up by email.' })
    } catch {
      setStatus({ kind: 'error', message: 'We could not connect to the enquiry service. Please try again or email us directly.' })
      setDirectEmailFallback(true)
    } finally {
      setPending(false)
    }
  }

  return (
    <form className="nm-form clarity-fully-masked" onSubmit={handleSubmit}>
      <div className="nm-form-grid">
        <div className="nm-field">
          <label htmlFor="contact-name">Full name</label>
          <input autoComplete="name" id="contact-name" name="name" maxLength={100} required />
        </div>
        <div className="nm-field">
          <label htmlFor="contact-email">Business email</label>
          <input autoComplete="email" id="contact-email" name="email" type="email" maxLength={254} required />
        </div>
        <div className="nm-field">
          <label htmlFor="contact-company">Company name</label>
          <input autoComplete="organization" id="contact-company" name="company" maxLength={120} required />
        </div>
        <div className="nm-field">
          <label htmlFor="contact-website">Website URL</label>
          <input id="contact-website" name="websiteUrl" type="url" placeholder="https://example.com" maxLength={300} />
        </div>
        <div className="nm-field">
          <label htmlFor="contact-industry">Industry</label>
          <input id="contact-industry" name="industry" maxLength={100} />
        </div>
        <div className="nm-field">
          <label htmlFor="contact-market">Target market</label>
          <input id="contact-market" name="targetMarket" placeholder="e.g. Hungary, Europe" maxLength={120} />
        </div>
        <div className="nm-field nm-field-full">
          <label htmlFor="contact-service">Service of interest</label>
          <select id="contact-service" name="service" defaultValue={serviceOptions.some((option) => option.value === defaultService) ? defaultService : ''}>
            <option value="" disabled>Select a service</option>
            {serviceOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
          </select>
        </div>
        <div className="nm-field nm-field-full">
          <label htmlFor="contact-objective">Primary business objective</label>
          <textarea id="contact-objective" name="objective" maxLength={1200} rows={3} placeholder="What would you like search visibility to help your business achieve?" />
        </div>
        <div className="nm-field nm-field-full">
          <label htmlFor="contact-info">Additional information</label>
          <textarea id="contact-info" name="additionalInfo" maxLength={2400} rows={4} placeholder="Share any context that would help us understand your enquiry." />
        </div>
      </div>

      <div className="nm-honeypot" aria-hidden="true">
        <label htmlFor="contact-website-check">Leave this field blank</label>
        <input id="contact-website-check" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <label className="nm-consent">
        <input name="consent" type="checkbox" required />
        <span>I have read the <a href="/privacy-policy" target="_blank" rel="noreferrer">Privacy Policy</a> and agree that NORTHMARK may use these details to respond to my enquiry.</span>
      </label>

      {status && (
        <p className="nm-form-status" data-state={status.kind} role={status.kind === 'error' ? 'alert' : 'status'}>
          {status.message}{directEmailFallback && <> <a href={`mailto:${OWNER_EMAIL}`}>Email NORTHMARK directly</a>.</>}
        </p>
      )}

      <button className="nm-button nm-button-primary" type="submit" disabled={pending}>
        {pending ? 'Sending enquiry…' : 'Request My Search Visibility Audit'} <span aria-hidden="true">→</span>
      </button>
      <p className="nm-disclaimer">Please don’t include passwords, payment details or sensitive customer information.</p>
    </form>
  )
}
