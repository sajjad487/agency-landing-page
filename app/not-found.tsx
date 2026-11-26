import Link from 'next/link'

export default function NotFound() {
  return (
    <main id="main-content" className="nm-not-found nm-container">
      <p className="nm-eyebrow">404 · Page not found</p>
      <h1>This page isn’t here.</h1>
      <p>The address may have changed, or the page may no longer be available.</p>
      <div className="nm-actions nm-not-found-actions">
        <Link className="nm-button nm-button-primary" href="/">Return to NORTHMARK</Link>
        <Link className="nm-button nm-button-secondary" href="/services">Explore services</Link>
      </div>
    </main>
  )
}
