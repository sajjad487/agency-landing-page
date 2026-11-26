type JsonLdProps = { data: Record<string, unknown> | Record<string, unknown>[] }

export function JsonLd({ data }: JsonLdProps) {
  const json = JSON.stringify(data).replace(/</g, '\\u003c')
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
}

export function organizationSchema(siteUrl: string) {
  const origin = new URL(siteUrl).origin
  const organizationId = `${origin}/#organization`
  const personId = `${origin}/#founder`
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': organizationId,
        name: 'NORTHMARK',
        url: origin,
        logo: `${origin}/icon.svg`,
        email: 'chodharisajjad098@gmail.com',
        description: 'Search visibility for the AI era: SEO, AEO, GEO and AI search visibility for businesses.',
        founder: { '@id': personId },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Budapest',
          addressCountry: 'HU',
        },
        areaServed: [
          { '@type': 'Country', name: 'Hungary' },
          { '@type': 'Place', name: 'Europe' },
          { '@type': 'Place', name: 'International markets' },
        ],
        knowsAbout: ['Search Engine Optimization', 'Answer Engine Optimization', 'Generative Engine Optimization', 'AI search visibility'],
      },
      {
        '@type': 'Person',
        '@id': personId,
        name: 'Muhammad Sajjad',
        jobTitle: 'Founder',
        worksFor: { '@id': organizationId },
      },
      {
        '@type': 'WebSite',
        '@id': `${origin}/#website`,
        url: origin,
        name: 'NORTHMARK',
        publisher: { '@id': organizationId },
        inLanguage: 'en',
      },
    ],
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
