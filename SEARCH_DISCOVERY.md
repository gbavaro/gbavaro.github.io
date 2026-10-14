# Search and AI discovery setup

Last reviewed: 2026-10-14

The public website is https://gbavaro.github.io/ and this repository currently contains six canonical, indexable HTML pages. Keep the GitHub Pages URL as canonical unless a custom domain actually resolves, serves the complete site, and has working redirects. Do not change canonical links merely because a domain has been purchased.

## What is already in the repository

- Root `robots.txt`: permits general crawlers and names the officially documented OpenAI, Anthropic and Perplexity bots; it references the sitemap. Some user-triggered retrieval agents do not necessarily follow robots.txt. xAI has not published a confirmed Grok crawler token; general crawlers are allowed by `User-agent: *`.
- Root `sitemap.xml`: lists all six canonical HTML URLs with latest technical update date.
- Root `llms.txt` and `llms-full.txt`: optional plain-text discovery aids that point back to the original published pages. `llms.txt` is a proposal, not an adopted universal indexing or ranking standard.
- All pages: index/follow, canonical URLs, plain HTML links, descriptive titles, descriptions and JSON-LD structured data. The homepage contains linked WebSite, ProfilePage and Person objects. Other pages contain CollectionPage or Article plus BreadcrumbList objects. Article author links refer to the same homepage Person ID.
- Homepage: contains an existing Google Search Console verification meta tag. This does not prove that a particular Google account has successfully verified the site.
- `analytics.js`: loaded site-wide and configured with the owner-provided GA4 Measurement ID `G-SK548F6DDY` on 2026-10-14; verify live collection in GA4 Realtime.

## Owner account actions

1. Open https://search.google.com/search-console and add or select URL-prefix property `https://gbavaro.github.io/`. Verify it using the already-present HTML meta tag if it has not been verified yet. Under **Sitemaps**, submit `https://gbavaro.github.io/sitemap.xml`. Use URL Inspection on the homepage and newly published articles, check live crawl and request indexing when appropriate.
2. Open https://www.bing.com/webmasters/. Import the verified Google Search Console property, or add and verify it directly. Submit the same sitemap and review the URL Inspection / indexing reports. Bing contributes to multiple search and AI discovery experiences.
3. Google Analytics 4 has been configured with the provided Measurement ID. Review applicable privacy and consent obligations and confirm deployment and a visit in https://analytics.google.com/ → Reports → Realtime. Historical visits before activation are not recoverable from GA4.
4. For future substantive content changes, update the affected page and its actual editorial `dateModified` when appropriate, then the corresponding sitemap `lastmod`. Keep the index and `llms.txt` in sync with new article URLs. Avoid artificially bumping publication dates without editorial changes.
5. Add a link to the canonical website on LinkedIn, GitHub profile and Substack; genuine relevant external links help discovery and identity matching. Maintain the same name and role across those public profiles.
6. Optional: implement IndexNow when an owned domain/verified key and publishing workflow are available. Do not submit an invented key or claim IndexNow submission merely from having an XML sitemap.

## QA checklist

- Every public HTML page returns HTTP 200 at its canonical URL and can be fetched without a login; test this against the **deployed** GitHub Pages site, not merely repository source.
- There is one correct canonical URL per page, with no `noindex` rule or robots disallow.
- `robots.txt` and `sitemap.xml` are publicly accessible at site root and the sitemap contains all public HTML pages, no broken pages.
- Validate structured data using https://search.google.com/test/rich-results and https://validator.schema.org/. Validation does not guarantee Google rich results.
- Verify search indexing inside Search Console and Bing Webmaster Tools, rather than assuming an accessible page must appear in results.
- Verify AI crawler access separately where vendor instrumentation permits. Allowing a crawler does not force OpenAI, Claude, Perplexity, Grok, Gemini or any other assistant to crawl, remember, cite or recommend a webpage.

## Official references

- Google Search essentials: https://developers.google.com/search/docs/essentials/technical
- Sitemap documentation: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- Google ProfilePage: https://developers.google.com/search/docs/appearance/structured-data/profile-page
- Google Article: https://developers.google.com/search/docs/appearance/structured-data/article
- OpenAI crawlers: https://developers.openai.com/api/docs/bots
- Anthropic crawler guide: https://support.anthropic.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler
- Perplexity crawlers: https://docs.perplexity.ai/docs/resources/perplexity-crawlers
- Bing Webmaster Tools: https://www.bing.com/webmasters/
- llms.txt proposal: https://llmstxt.org/

The checked GitHub source passed internal structural checks on 2026-10-14. Public deployment HTTP status, Search Console ownership, live indexing and crawler logs require separate verification.
