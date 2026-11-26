export type ArticleSection = { heading: string; paragraphs: string[]; bullets?: string[] }
export type InsightArticle = {
  slug: string
  title: string
  description: string
  excerpt: string
  publishedAt: string
  sections: ArticleSection[]
  takeaways: string[]
  faqs: { question: string; answer: string }[]
  relatedService: string
  references: { label: string; url: string }[]
}

const publishedAt = '2026-11-26T12:00:00.000Z'

export const insights: InsightArticle[] = [
  {
    slug: 'what-is-answer-engine-optimization',
    title: 'What Is Answer Engine Optimization?',
    description: 'A practical explanation of AEO: how clear, useful answers and sound site structure can support discovery in answer-led search experiences.',
    excerpt: 'Answer Engine Optimization is the practice of making accurate information easy to find, interpret and use in search experiences that provide direct answers.',
    publishedAt,
    relatedService: 'aeo',
    references: [
      { label: 'Google Search Central: SEO Starter Guide', url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide' },
      { label: 'Google Search Central: Structured data introduction', url: 'https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data' },
    ],
    sections: [
      { heading: 'A practical definition of AEO', paragraphs: ['Answer Engine Optimization (AEO) describes work that helps search and answer experiences locate and interpret useful information. The term is used in different ways, and it does not refer to a single, officially defined platform algorithm.', 'In practice, AEO starts with the same reader-first foundations as good content: understand the question, answer it clearly, provide enough context to be trustworthy, and make the page easy to navigate.'] },
      { heading: 'What an AEO-ready page looks like', paragraphs: ['A useful page identifies its subject early, uses headings that describe the content below them, and keeps related information together. A direct answer can appear near the beginning, followed by supporting detail, examples, limitations and links to authoritative sources.', 'Structured data may clarify entities and page types when it accurately reflects visible content. It is not a shortcut to a featured answer and should not be added simply to claim eligibility.'] },
      { heading: 'How to improve answer usefulness', paragraphs: ['Start with real customer questions from sales conversations, support tickets and search research. Check that each answer is specific to your business, current and supported. Avoid rewriting the same thin response across many pages.', 'Measure changes with available search reporting, referral analytics and periodic manual checks. Treat any answer placement as an observation, not a guaranteed outcome.'] },
    ],
    takeaways: ['AEO is a practical discipline, not a guaranteed ranking feature.', 'Answer real questions directly and support answers with useful context.', 'Measure visibility as a changing signal alongside qualified enquiries.'],
    faqs: [{ question: 'Does AEO replace SEO?', answer: 'No. AEO relies on accessible pages, relevant information and sound site structure—foundations that also support SEO.' }, { question: 'Can a FAQ schema guarantee an answer result?', answer: 'No. Structured data must reflect visible content and does not guarantee a rich result or citation.' }],
  },
  {
    slug: 'what-is-generative-engine-optimization',
    title: 'What Is Generative Engine Optimization?',
    description: 'Understand GEO, how it relates to SEO, and practical ways to improve the clarity and credibility of a brand in generative search.',
    excerpt: 'GEO focuses on improving the discoverability and representation of useful business information in generative search experiences—without promising citations.',
    publishedAt,
    relatedService: 'geo',
    references: [
      { label: 'OpenAI: Overview of OpenAI crawlers', url: 'https://platform.openai.com/docs/bots' },
      { label: 'Google Search Central: SEO Starter Guide', url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide' },
    ],
    sections: [
      { heading: 'Defining GEO without the hype', paragraphs: ['Generative Engine Optimization (GEO) is a developing term for work intended to help generative systems discover, interpret and accurately represent information about a business. Definitions differ, and there is no universal GEO score or method that guarantees inclusion.', 'Generative search results can draw on indexed pages, retrieval systems, model knowledge and platform-specific sources. The mix can change across platforms and queries.'] },
      { heading: 'The work behind stronger representation', paragraphs: ['Businesses can make their own information clearer: describe services consistently, identify authors, keep essential details accessible in crawlable pages, and support factual claims. External references should be earned and independently useful, never fabricated.', 'Technical access is only one piece. A platform may have its own crawler controls, policies, indexing choices and source selection methods.'] },
      { heading: 'Set realistic expectations', paragraphs: ['AI answers are generated for a particular query and context. They can change between sessions, locations and model versions. A citation observed once is not a durable ranking position.', 'Use GEO alongside SEO and answer-focused content. Track a defined sample of questions, citations and referral traffic over time, then use the observations to guide editorial and technical priorities.'] },
    ],
    takeaways: ['GEO terminology is still evolving.', 'Clear, accurate business information is a controllable foundation.', 'Generative answers vary; no citation or recommendation can be guaranteed.'],
    faqs: [{ question: 'Does GEO work without SEO?', answer: 'GEO and SEO overlap. Accessible, useful, well-structured pages support both traditional and generative discovery.' }, { question: 'Can I buy a guaranteed AI citation?', answer: 'No reputable process can guarantee a platform will cite or recommend a specific business for a given question.' }],
  },
  {
    slug: 'seo-vs-aeo-vs-geo',
    title: 'SEO vs AEO vs GEO: What Is the Difference?',
    description: 'Compare SEO, answer engine optimization and generative engine optimization, and see why the disciplines work best as one search strategy.',
    excerpt: 'SEO supports organic discovery, AEO improves answer clarity, and GEO considers how businesses are represented in generative search. Their foundations overlap.',
    publishedAt,
    relatedService: 'seo',
    references: [
      { label: 'Google Search Central: SEO Starter Guide', url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide' },
      { label: 'OpenAI: Overview of OpenAI crawlers', url: 'https://platform.openai.com/docs/bots' },
    ],
    sections: [
      { heading: 'SEO: help people discover relevant pages', paragraphs: ['Search Engine Optimization improves the technical accessibility, relevance and usefulness of pages for organic search. It includes crawlability, site architecture, intent research, content quality and measurement.'] },
      { heading: 'AEO: make direct answers easy to understand', paragraphs: ['Answer Engine Optimization emphasizes questions and answers in experiences that may return a direct response. Its practical work includes clear definitions, concise answers, helpful context and semantic structure.'] },
      { heading: 'GEO: consider generative representation', paragraphs: ['Generative Engine Optimization considers how information about a business may be discovered and represented within generative search experiences. It includes entity clarity, evidence, source credibility and monitoring that acknowledges variation.', 'These labels describe overlapping practices, not three isolated switches. A clear, accessible service page can support organic search, answer retrieval and accurate generative summaries at the same time.'] },
      { heading: 'Choose the right sequence', paragraphs: ['Start from business goals and the current site condition. Fix critical accessibility or indexing barriers first, then improve the pages that serve customer intent. Add answer structures where they help readers, and monitor generative results as a directional signal.', 'Avoid treating any acronym as a promise of placement. Search platforms control their results, and results can vary by query, geography and context.'] },
    ],
    takeaways: ['SEO, AEO and GEO are complementary, overlapping disciplines.', 'Technical access and useful content are shared foundations.', 'Prioritize work by business need rather than chasing terminology.'],
    faqs: [{ question: 'Which should a business start with?', answer: 'Begin with a review of technical accessibility, customer intent and the pages closest to business outcomes. The findings determine the right order.' }, { question: 'Are SEO, AEO and GEO separate services?', answer: 'They can be scoped as distinct workstreams, but their content and technical foundations often overlap.' }],
  },
  {
    slug: 'how-ai-search-discovers-business-information',
    title: 'How AI Search Engines Discover Business Information',
    description: 'Learn how crawling, indexing, retrieval and source selection affect the public information that may appear in AI search experiences.',
    excerpt: 'AI search discovery depends on platform-specific access, available sources and retrieval systems; a website cannot compel a model to use its content.',
    publishedAt,
    relatedService: 'geo',
    references: [
      { label: 'OpenAI: Overview of OpenAI crawlers', url: 'https://platform.openai.com/docs/bots' },
      { label: 'Google: Robots.txt specification', url: 'https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt' },
    ],
    sections: [
      { heading: 'Discovery is not one universal pipeline', paragraphs: ['Different search products use different combinations of web indexes, live retrieval, licensed sources and model-generated knowledge. A crawler visiting a site does not mean the page will be indexed or used in a later answer.', 'Crawl controls are also purpose-specific. OpenAI documents OAI-SearchBot separately from GPTBot, so allowing search access is not the same as authorizing training use. Other platforms publish their own controls and policies.'] },
      { heading: 'What a site owner can influence', paragraphs: ['Publish important information in accessible HTML, use descriptive links, maintain a useful sitemap and avoid blocking essential assets. Keep service names, business identity and contact details consistent, and make facts easy to verify.', 'Robots rules express preferences to compliant crawlers; they do not enforce access control. Private information should be protected with authentication, not hidden by robots.txt.'] },
      { heading: 'Observe results carefully', paragraphs: ['When testing AI search, record the exact question, platform, date, location settings and cited sources. Repeat checks over time and separate observed citations from referral visits or actual leads.', 'Search answers vary. A single result is a snapshot, not evidence of a permanent position or guaranteed future recommendation.'] },
    ],
    takeaways: ['Crawling does not guarantee indexing or citation.', 'Search and model-training crawler choices can be distinct.', 'Use accessible public content and verify outcomes as time-bound observations.'],
    faqs: [{ question: 'Does robots.txt force every AI crawler to comply?', answer: 'No. Robots.txt is a crawler convention, not an access-control mechanism. Protect private resources with authentication and server-side authorization.' }, { question: 'If a crawler accesses my site, will it cite me?', answer: 'Not necessarily. Access is only one factor; systems decide whether to index, retrieve or use a source.' }],
  },
  {
    slug: 'make-your-website-accessible-to-ai-crawlers',
    title: 'How to Make Your Website More Accessible to AI Crawlers',
    description: 'A practical technical checklist for making public business information crawlable and understandable without confusing access with guaranteed visibility.',
    excerpt: 'Improve the technical accessibility of public pages, while remembering that crawl access alone cannot guarantee indexing or an AI citation.',
    publishedAt,
    relatedService: 'seo',
    references: [
      { label: 'Google: Robots.txt specification', url: 'https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt' },
      { label: 'OpenAI: Overview of OpenAI crawlers', url: 'https://platform.openai.com/docs/bots' },
      { label: 'Microsoft Bing Webmaster Tools: Robots.txt', url: 'https://www.bing.com/webmasters/help/robots-txt-594f567e' },
    ],
    sections: [
      { heading: 'Serve important information in crawlable pages', paragraphs: ['Use server-rendered or statically generated content for essential descriptions, service details and answers. Modern crawlers can execute some JavaScript, but a readable HTML response reduces unnecessary dependencies.', 'Use descriptive internal links, logical headings and stable URLs. Make sure key content is not hidden behind an interaction that a crawler cannot use.'] },
      { heading: 'Check technical access', paragraphs: ['Review robots.txt, sitemap availability, response codes, canonical URLs and whether important assets can be fetched. Resolve redirect loops, accidental noindex directives and broken internal links.', 'Use structured data only when it accurately describes visible content. Keep it syntactically valid and avoid claims that cannot be supported on the page.'] },
      { heading: 'Separate search access from training preferences', paragraphs: ['Some platforms publish distinct user agents for search crawlers and model-training crawlers. Review the platform’s current documentation before deciding which to allow. These directives express a preference and do not replace privacy or security controls.', 'After changes, check server logs and search platform tools where available. Access does not guarantee a page will be selected as a source.'] },
    ],
    takeaways: ['Make core content visible in HTML and easy to navigate.', 'Check robots, sitemap, indexability, canonical and response status.', 'Crawler access can support discovery but cannot guarantee a citation.'],
    faqs: [{ question: 'Should I block all JavaScript?', answer: 'No. Use JavaScript where it improves the experience, but ensure core page content and navigation remain accessible and progressively functional.' }, { question: 'Does an llms.txt file guarantee discovery?', answer: 'No. It is an emerging convention, not a recognized guarantee of indexing, ranking or AI visibility.' }],
  },
  {
    slug: 'why-structured-data-matters-for-search-visibility',
    title: 'Why Structured Data Matters for Search Visibility',
    description: 'Understand what structured data communicates, when JSON-LD is useful and why accurate markup is not a ranking or rich-result guarantee.',
    excerpt: 'Structured data gives machines explicit clues about visible page content, but it does not guarantee enhanced search results or AI citations.',
    publishedAt,
    relatedService: 'seo',
    references: [
      { label: 'Google Search Central: Structured data introduction', url: 'https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data' },
      { label: 'Schema.org: Getting started', url: 'https://schema.org/docs/gs.html' },
    ],
    sections: [
      { heading: 'Structured data adds explicit context', paragraphs: ['Structured data is machine-readable markup that describes entities and relationships on a page. A service page might identify a service provider; an article can identify its headline, author and publication date.', 'JSON-LD is a common format because it can be maintained separately from the visible HTML while describing the same content. It should still match what a visitor can see.'] },
      { heading: 'Use the schema that fits the page', paragraphs: ['Choose types based on real content and current documentation. Organization, WebSite, Service, Person, BreadcrumbList and Article may be appropriate in different contexts. Required and recommended properties vary by type and search feature.', 'Do not invent ratings, reviews, addresses, awards, opening hours or credentials to fill optional fields. Accurate structured data is more valuable than broad, unsupported markup.'] },
      { heading: 'Validate and maintain it', paragraphs: ['Validate JSON-LD syntax and review search-engine testing tools where available. Update markup when the visible page changes, and monitor Search Console for eligible reports or errors.', 'Correct markup does not guarantee that a search engine will crawl, index or display an enhanced result. It is one clarity signal among many.'] },
    ],
    takeaways: ['Structured data clarifies entities; it should match visible facts.', 'Select schema types for actual page content.', 'Markup does not guarantee rankings, rich results or AI citations.'],
    faqs: [{ question: 'Should every page have FAQ schema?', answer: 'No. Only use schema when the visible content genuinely matches the type and current platform guidance; eligibility does not guarantee a search feature.' }, { question: 'Can structured data hide information from readers?', answer: 'It should not. Markup is meant to describe visible content, not introduce hidden or misleading claims.' }],
  },
  {
    slug: 'prepare-business-for-ai-powered-search',
    title: 'How Businesses Can Prepare for AI-Powered Search',
    description: 'Practical steps for improving business information, content quality and measurement as search interfaces add AI-generated answers.',
    excerpt: 'Prepare for AI-powered search by strengthening the same foundations customers need: clear information, credible evidence and accessible pages.',
    publishedAt,
    relatedService: 'geo',
    references: [
      { label: 'Google Search Central: SEO Starter Guide', url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide' },
      { label: 'OpenAI: Overview of OpenAI crawlers', url: 'https://platform.openai.com/docs/bots' },
    ],
    sections: [
      { heading: 'Start with a clear business identity', paragraphs: ['Describe what the business does, who it serves and where it operates using consistent language. Keep names, service details and contact information aligned across the site and profiles you control.', 'Make important service information available on first-party pages, with named authors or reviewers where appropriate and evidence behind factual claims.'] },
      { heading: 'Improve the pages customers rely on', paragraphs: ['Review technical crawlability, navigation, mobile usability and content freshness. Answer important questions directly, then provide enough context for a reader to evaluate the answer.', 'Do not publish many near-identical pages just to target variations of a phrase. Consolidate overlapping content and link related topics in a useful way.'] },
      { heading: 'Build a measurement baseline', paragraphs: ['Record organic search impressions, clicks, qualified visits and enquiries before changing the site. Add a small, relevant set of AI-search questions and note platform, date and citations when checking results.', 'Separate observed visibility from business impact. Search interfaces and reporting can change, so keep methods transparent and avoid claiming certainty where data is limited.'] },
    ],
    takeaways: ['Clear business facts help people and systems understand an offer.', 'Improve technical foundations and useful content together.', 'Establish a baseline and report measurement limitations.'],
    faqs: [{ question: 'Should I redesign my site just for AI?', answer: 'Not by default. Prioritize user needs, accessibility and business goals. Changes for AI should make information better for people too.' }, { question: 'Is publishing more content always better?', answer: 'No. Useful, original pages are preferable to large volumes of repetitive or lightly edited content.' }],
  },
  {
    slug: 'measure-ai-search-visibility',
    title: 'How to Measure AI Search Visibility',
    description: 'A transparent framework for tracking AI search mentions, citations and referral outcomes without treating one answer as a stable ranking.',
    excerpt: 'Measure AI search with defined questions, dated observations, source notes and business outcomes—not a single score or guaranteed placement.',
    publishedAt,
    relatedService: 'ai-search-audit',
    references: [
      { label: 'Google Search Console: Performance report', url: 'https://support.google.com/webmasters/answer/7576553?hl=en' },
      { label: 'OpenAI: Overview of OpenAI crawlers', url: 'https://platform.openai.com/docs/bots' },
    ],
    sections: [
      { heading: 'Define what visibility means for your business', paragraphs: ['Possible indicators include whether a business is mentioned for relevant questions, which sources are cited, whether the linked page receives referral visits and whether those visits lead to qualified enquiries.', 'Choose questions that reflect real customers and the markets you serve. Document wording and context before checking results.'] },
      { heading: 'Use a repeatable observation method', paragraphs: ['Record platform, date, locale, query, answer summary and citations. Repeat checks at a reasonable cadence and avoid changing several variables at once. A result may differ for another user or session.', 'Do not treat a one-off answer as a ranking position. Platforms may vary responses by context and update their systems without notice.'] },
      { heading: 'Connect observations to outcomes', paragraphs: ['Use web analytics and server-side enquiry reporting to understand whether search visibility brings relevant visits. Respect consent requirements for nonessential analytics and avoid collecting unnecessary personal information.', 'Report the limits of the sample and distinguish correlated changes from proven causation. Use findings to prioritize technical and content improvements, then reassess.'] },
    ],
    takeaways: ['Track defined, relevant questions and preserve the context.', 'Record citations and platform referral traffic separately.', 'Explain sample limitations; do not claim a universal AI ranking score.'],
    faqs: [{ question: 'Is there a reliable universal AI visibility score?', answer: 'No universal score represents all platforms, queries and users. Any index should disclose its sample, method and limitations.' }, { question: 'How often should I check AI answers?', answer: 'Set a cadence suited to the business and the rate of change, such as monthly or quarterly. Consistency matters more than excessive checking.' }],
  },
]

export function getInsight(slug: string) {
  return insights.find((article) => article.slug === slug)
}
