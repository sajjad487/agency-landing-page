export type ServiceSection = { heading: string; body: string; bullets?: string[] }

export type Service = {
  slug: string
  acronym: string
  shortTitle: string
  title: string
  description: string
  summary: string
  sections: ServiceSection[]
  deliverables: string[]
  faqs: { question: string; answer: string }[]
}

export const services: Service[] = [
  {
    slug: 'seo',
    acronym: 'SEO',
    shortTitle: 'Search Engine Optimization',
    title: 'Search Engine Optimization Services',
    description: 'Build durable organic search visibility with technical SEO, useful content, thoughtful site architecture and measurement grounded in your business goals.',
    summary: 'A search foundation that helps people and search engines find, understand and trust your website.',
    sections: [
      { heading: 'What SEO means for your business', body: 'Search engine optimization is the ongoing work of making your pages accessible, relevant and useful for the queries your customers use. As an SEO agency based in Budapest, NORTHMARK works with local and international businesses on technical accessibility, useful content and clear site architecture. No single change guarantees a ranking; effective SEO is a disciplined process of removing barriers and improving relevance.' },
      { heading: 'Start with the technical foundations', body: 'Search engines need to discover, crawl, render and index the pages that matter. We review indexability, internal links, redirects, metadata, structured data and page experience to find issues that make important content harder to access.' },
      { heading: 'Build around intent and usefulness', body: 'Keyword research is a way to understand language and intent, not a reason to repeat phrases unnaturally. We map topics to the right pages, improve on-page clarity and recommend content that answers real questions with first-hand, verifiable information.' },
      { heading: 'Measure what matters', body: 'Search Console and analytics provide useful signals, but rankings and traffic are not business outcomes on their own. Reporting should connect visibility to qualified visits, enquiries and the objectives agreed at the beginning of the engagement.' },
    ],
    deliverables: ['Technical SEO audits', 'Keyword and search-intent research', 'On-page optimization and internal linking', 'Site architecture and indexability reviews', 'Content optimization and briefs', 'Local and international SEO planning', 'Structured data and Core Web Vitals reviews', 'Google Search Console reporting'],
    faqs: [
      { question: 'How long does SEO take to show results?', answer: 'Timing varies with site condition, competition, authority and the work involved. SEO is an ongoing process; early technical improvements can be measurable before broader content and authority changes, but no fixed timeline or ranking can be promised.' },
      { question: 'Do you guarantee first-page rankings?', answer: 'No. Search results are controlled by search platforms and change by query, location and context. NORTHMARK focuses on sound technical work, useful content and transparent measurement rather than ranking guarantees.' },
    ],
  },
  {
    slug: 'aeo',
    acronym: 'AEO',
    shortTitle: 'Answer Engine Optimization',
    title: 'Answer Engine Optimization Services',
    description: 'Make business information clearer and easier for search and answer engines to retrieve, interpret and present as useful responses.',
    summary: 'Structure trustworthy answers around the questions your customers actually ask.',
    sections: [
      { heading: 'What answer engine optimization does', body: 'AEO is a practical approach to making accurate information easy to identify and interpret in experiences that provide direct answers. The term is used in different ways across the industry; there is no separate, universal answer-engine ranking switch.' },
      { heading: 'Make answers direct and complete', body: 'Question research helps reveal the language people use. We organize pages around clear questions, concise answers and supporting context, while making sure the page still serves the reader rather than being written only for a machine.' },
      { heading: 'Use structure to clarify meaning', body: 'Descriptive headings, semantic HTML, useful internal links and accurate structured data can make the relationships between a business, its services and its information easier to understand. Markup must reflect visible page content and never invent claims.' },
      { heading: 'Keep quality ahead of formatting', body: 'Answer visibility depends on relevance, access, source quality and the platform’s own systems. We improve the conditions for understanding and measure real outcomes without promising featured answers or citations.' },
    ],
    deliverables: ['Question-based search research', 'Search-intent and topic mapping', 'Direct-answer content structure', 'FAQ and definition-page optimization', 'Featured snippet opportunity reviews', 'Semantic heading and internal-link reviews', 'Business information clarity', 'Structured data validation', 'Answer visibility monitoring plan'],
    faqs: [
      { question: 'Is AEO different from SEO?', answer: 'AEO focuses on making useful information suitable for direct answers, while SEO covers broader organic search discovery and site quality. Their foundations overlap and they should be planned together.' },
      { question: 'Can AEO guarantee a featured snippet?', answer: 'No. Search engines select answers using systems outside a website owner’s control. Clear, accurate formatting can improve eligibility, but it cannot guarantee a specific display.' },
    ],
  },
  {
    slug: 'geo',
    acronym: 'GEO',
    shortTitle: 'Generative Engine Optimization',
    title: 'Generative Engine Optimization Services',
    description: 'Strengthen the clarity, accessibility and credibility of your business information across generative AI search experiences.',
    summary: 'Help generative search systems accurately understand your business and its expertise.',
    sections: [
      { heading: 'What GEO can and cannot do', body: 'Generative Engine Optimization describes work intended to improve how a brand is understood and represented in generative search experiences. Outputs can vary with wording, user context, location, model and available sources, so no agency can guarantee a citation or recommendation.' },
      { heading: 'Establish clear business entities', body: 'Consistent names, service descriptions, locations, authorship and contact details help readers and systems resolve what a business does. We look for conflicts and ambiguity across the site and the public sources that describe the organization.' },
      { heading: 'Make credible information accessible', body: 'Useful pages should be crawlable, specific, well-supported and easy to navigate. We review technical access, source quality, third-party references and whether important claims are backed by evidence rather than promotional repetition.' },
      { heading: 'Evaluate real search experiences', body: 'We define representative questions, record what sources appear and note how results change over time. These observations are directional, not a universal visibility score, and recommendations are based on the limits of the platform data available.' },
    ],
    deliverables: ['AI search visibility audits', 'Brand entity and information consistency reviews', 'AI crawler access checks', 'Citation-worthy content planning', 'Generative search content optimization', 'Source and credibility analysis', 'Competitor visibility research', 'Third-party mention opportunities', 'Generative search monitoring framework'],
    faqs: [
      { question: 'Can GEO make AI tools recommend my business?', answer: 'No recommendation can be guaranteed. GEO work can improve the clarity, accessibility and credibility of public information, but AI outputs vary by query, location, platform and context.' },
      { question: 'Is GEO a replacement for SEO?', answer: 'No. Crawlable pages, relevant content, site structure and trustworthy information remain important. GEO complements these foundations by considering how generative search experiences represent sources.' },
    ],
  },
  {
    slug: 'ai-search-audit',
    acronym: 'AUDIT',
    shortTitle: 'AI Search Visibility Audit',
    title: 'AI Search Visibility Audit',
    description: 'Understand how your website and business information appear across search engines and AI-powered platforms with a focused, human-led audit.',
    summary: 'A clear review of where discoverability, interpretation, credibility or conversion may be getting lost.',
    sections: [
      { heading: 'A human-led assessment, not an instant score', body: 'The audit is a research engagement, not an automated report generated by this website. We review the information available for your business, note evidence and limitations, and prioritize practical next steps around your objectives.' },
      { heading: 'Review access and interpretation', body: 'We may examine crawlability, index presence, metadata, structured data, page structure, business entity clarity and content quality. The goal is to understand which important information is discoverable and where instructions or content may be ambiguous.' },
      { heading: 'Review visibility and credibility signals', body: 'Where relevant, we sample agreed search questions across selected platforms, review citations and public brand mentions, and compare competitor presentation. Results are a time-bound snapshot: AI answers can vary and are not a promise of future inclusion.' },
      { heading: 'Receive prioritized next steps', body: 'Findings are organized by impact, confidence and effort, with clear recommendations for technical fixes, content improvements and measurement. The scope and delivery format are confirmed after we understand your website and target market.' },
    ],
    deliverables: ['Website crawlability and index-presence review', 'Metadata and structured data checks', 'Business entity and content clarity review', 'AI crawler accessibility review', 'Sampled AI search response research', 'Brand mention and competitor review', 'Conversion-path observations', 'Prioritized recommendations and a consultation'],
    faqs: [
      { question: 'Is the audit generated instantly?', answer: 'No. A person reviews the information and scope before preparing findings. Submitting the form sends an enquiry; it does not run an instant audit.' },
      { question: 'What should I include in an audit request?', answer: 'Share your public website, target market, industry and the business objective you want search visibility to support. Do not include passwords, customer records or other confidential personal data.' },
    ],
  },
]

export function getService(slug: string) {
  return services.find((service) => service.slug === slug)
}
