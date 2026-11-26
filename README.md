# NORTHMARK — Search visibility for the AI era

NORTHMARK is a Budapest-based search optimization agency focused on SEO, AEO, GEO and AI search visibility. This website uses Next.js App Router, TypeScript and Tailwind CSS. Public pages are server-rendered or statically generated.

## Local development

```bash
pnpm install
pnpm dev
```

## Environment configuration

Set these values in the Vercel project’s **Vars** settings for the appropriate environments. Never commit API keys.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Preferred canonical origin, e.g. `https://your-current-production-domain`. Use the existing production domain until a new one is confirmed. If omitted on Vercel, the site uses `VERCEL_PROJECT_PRODUCTION_URL`; local development falls back to `http://localhost:3000`. |
| `RESEND_API_KEY` | Server-only Resend API key used by `/api/contact`. |
| `RESEND_EMAIL_DOMAIN` | Verified Resend sending domain, without protocol or path. The sender is `NORTHMARK <enquiries@that-domain>`. Form enquiries are delivered to `chodharisajjad098@gmail.com`. Verify the domain in Resend before using the form in production. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Optional Google Search Console verification token. |
| `NEXT_PUBLIC_BING_SITE_VERIFICATION` | Optional Bing Webmaster Tools verification token. |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Optional GA4 ID (`G-…`). GA4 loads only after analytics consent; a successful contact form sends a `generate_lead` event. No ID is provided by default. |
| `key_2` | IndexNow ownership key. The existing public key file is checked against it before any IndexNow POST. Never log the key. |

The contact endpoint validates and length-limits all fields, checks the request origin, requires the privacy consent checkbox, ignores a honeypot field and uses a per-submission Resend idempotency key. If Resend is not configured or delivery fails, the form reports the issue and offers a direct email link; it never shows a false success state.

## Analytics and consent

Microsoft Clarity (project `ze8axd7lnf`) and Vercel Analytics load only after a visitor accepts analytics. Optional GA4 also loads only after consent when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is configured. A successful contact form sends the GA4 `generate_lead` event. The visitor can reopen **Cookie settings** from the footer to change the choice. Contact form data is masked in Clarity recordings. No analytics ID is invented.

## Routes and content

- `/` — Homepage and search visibility overview
- `/services` — SEO, AEO, GEO and AI Search Audit overview
- `/services/seo`, `/services/aeo`, `/services/geo`, `/services/ai-search-audit` — Dedicated, statically generated service pages
- `/about` — Founder and agency information
- `/insights` — Educational knowledge hub
- `/insights/[slug]` — Eight statically generated introductory guides
- `/faq` — Server-rendered categorized FAQ
- `/contact` — Contact and search visibility audit enquiry
- `/privacy-policy` and `/terms` — Editable legal drafts for owner review

To add an insight, append a complete entry to `lib/insights.ts` with a unique slug, description, publication date, original sections, takeaways and FAQs. The article route, canonical metadata and sitemap are generated from that data. Service details are maintained in `lib/services.ts`; update the sitemap and cross-links automatically by adding a new service there.

## Search configuration and validation

- Canonical URLs, Open Graph URLs, JSON-LD and the sitemap use one origin from `NEXT_PUBLIC_SITE_URL`, falling back to Vercel’s production URL.
- `/sitemap.xml` is generated from the published pages, services and insight articles.
- `/robots.txt` allows Googlebot, Bingbot and OAI-SearchBot, disallows GPTBot and Google-Extended by default, and keeps `/api/` out of crawl paths. Robots directives are crawler preferences, not access controls. OpenAI documents OAI-SearchBot separately from GPTBot; review platform crawler documentation before changing these defaults.
- Structured data is generated from visible page content. Validate it with Google’s Rich Results Test and Schema.org’s validator; valid markup does not guarantee enhanced results or AI citations.
- Check `/robots.txt`, `/sitemap.xml`, canonical tags and page source after deployment. Submit the sitemap in Google Search Console and Bing Webmaster Tools after verifying the production domain.
- Run `pnpm build` before release. TypeScript build errors are not suppressed.

## Manual IndexNow bulk submission

The reusable script at `scripts/indexnow-bulk-submit.mjs` is manual-only; it is not run by development, build, deploy or any public route. Set the `key_2` environment variable before using it. It fetches `https://www.corvinweb.com/sitemap.xml`, rejects sitemap URLs outside the exact HTTPS `www.corvinweb.com` origin, verifies that `https://www.corvinweb.com/<key_2>.txt` returns the matching key, and selects only URLs with a `lastmod` in the last seven days that have not already been accepted for that same `lastmod`.

Preview eligible URLs without submitting:

```bash
pnpm indexnow -- --dry-run
```

Manually submit eligible URLs after reviewing the preview:

```bash
pnpm indexnow
```

Use `pnpm indexnow -- --days=14` to adjust the recency window. Requests are POSTed in batches of at most 10,000 URLs; transient network errors, HTTP 5xx and HTTP 429 responses receive bounded retries with `Retry-After` support. The script reports response statuses and submitted URLs. Successful URLs and their sitemap modification dates are recorded in `.indexnow-submission-state.json`, which is gitignored, so unchanged URLs are not resubmitted on later runs. If that local state file is removed, recently modified entries may be submitted again. No unauthenticated submission endpoint is provided.

## Owner review before launch

1. Confirm the existing production domain and set `NEXT_PUBLIC_SITE_URL`; no replacement domain is assumed and no redirects are configured until old URLs are mapped to their closest new equivalents.
2. Verify the Resend sending domain and test enquiry delivery to the owner inbox.
3. Have qualified counsel review and complete the privacy and terms drafts. Confirm the legal entity, formal registered address, lawful bases, retention schedule, data processors and transfer safeguards; these details were not provided and have not been invented.
4. Add Search Console and Bing verification tokens if desired. No Google Analytics 4 ID, testimonials, client names, performance statistics, certifications or ranking claims are fabricated.
5. Review the robots policy if the owner wants to authorize additional model-training crawlers. Search access and model-training access are handled separately where platform documentation supports that distinction.
