export type Faq = { question: string; answer: string; category: string; service?: string }

export const faqs: Faq[] = [
  { category: 'General', question: 'What is NORTHMARK?', answer: 'NORTHMARK is a search optimization agency based in Budapest, Hungary, specializing in SEO, AEO, GEO and AI search visibility for businesses.' },
  { category: 'General', question: 'Does NORTHMARK work with international businesses?', answer: 'Yes. NORTHMARK is based in Budapest and works remotely with businesses in Hungary, Europe and international English-speaking markets.' },
  { category: 'SEO', service: 'seo', question: 'Is traditional SEO still important in the AI era?', answer: 'Yes. Technical accessibility, relevant content, trustworthy information and strong search foundations remain important for both traditional and AI-powered discovery.' },
  { category: 'SEO', service: 'seo', question: 'How long does search optimization take?', answer: 'The timeline depends on website condition, competition, existing authority and the scope of optimization. Meaningful results generally require ongoing work rather than a one-time change.' },
  { category: 'SEO', service: 'seo', question: 'Does NORTHMARK guarantee rankings?', answer: 'No. Rankings are determined by search platforms and vary with query, location and context. We commit to transparent, research-driven work, not outcomes outside our control.' },
  { category: 'AEO', service: 'aeo', question: 'What is the difference between SEO, AEO and GEO?', answer: 'SEO focuses on organic search visibility. AEO focuses on making information suitable for direct answers. GEO focuses on improving visibility and representation within generative AI search experiences. These disciplines overlap and work together.' },
  { category: 'AEO', service: 'aeo', question: 'Is AEO a separate ranking factor?', answer: 'AEO is a practical discipline, not a universal platform ranking factor. It combines clear answers, useful structure and strong SEO foundations to make information easier to understand.' },
  { category: 'GEO', service: 'geo', question: 'Can NORTHMARK help my business appear in ChatGPT?', answer: 'NORTHMARK helps businesses improve the accessibility, clarity and credibility of their online information, which may support visibility in ChatGPT and other AI-powered search platforms. Specific recommendations cannot be guaranteed.' },
  { category: 'GEO', service: 'geo', question: 'Are you an official partner of Google, Bing, ChatGPT or Gemini?', answer: 'No. NORTHMARK is an independent consultancy and is not claiming an official partnership or endorsement by any platform.' },
  { category: 'AI visibility', service: 'geo', question: 'Can AI search results be measured reliably?', answer: 'Some signals can be observed, such as cited sources, referral visits and responses to a defined set of questions. These are directional because answers vary by platform, query, user context and time.' },
  { category: 'AI visibility', service: 'geo', question: 'Does structured data guarantee an AI citation?', answer: 'No. Structured data can clarify information when it accurately describes visible page content, but it does not guarantee indexing, rich results, AI citations or recommendations.' },
  { category: 'Working together', service: 'ai-search-audit', question: 'What happens after I request an audit?', answer: 'Your enquiry is reviewed by NORTHMARK. We will use the details you provide to understand the scope and follow up by email. Submitting the form does not run an instant automated audit.' },
  { category: 'Working together', service: 'ai-search-audit', question: 'What information should I share in a contact form?', answer: 'A business email, public website, target market and a short description of your objective are useful. Do not submit passwords, payment details or sensitive customer information.' },
]

export const homepageFaqs = faqs.filter((faq) => [
  'What is NORTHMARK?',
  'What is the difference between SEO, AEO and GEO?',
  'Can NORTHMARK help my business appear in ChatGPT?',
  'Is traditional SEO still important in the AI era?',
  'How long does search optimization take?',
  'Does NORTHMARK work with international businesses?',
].includes(faq.question))
