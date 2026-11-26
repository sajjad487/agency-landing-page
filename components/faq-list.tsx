import Link from 'next/link'
import type { Faq } from '@/lib/faqs'

export function FaqList({ items, serviceLinks = true }: { items: Faq[]; serviceLinks?: boolean }) {
  return (
    <div className="nm-faq-list">
      {items.map((faq) => (
        <details className="nm-faq-item" key={faq.question}>
          <summary>{faq.question}<span aria-hidden="true">+</span></summary>
          <div className="nm-faq-answer">
            <p>{faq.answer}</p>
            {serviceLinks && faq.service && <Link href={`/services/${faq.service}`}>Explore the related service <span aria-hidden="true">→</span></Link>}
          </div>
        </details>
      ))}
    </div>
  )
}
