# Website analytics setup

The site loads `/analytics.js` once on each of its eight published HTML pages. GA4 has been active since October 14, 2026. Visits before successful tag activation cannot be recovered from the tag.

## GA4 activated

The owner-provided GA4 Web data stream Measurement ID `G-SK548F6DDY` was configured in root `analytics.js` on 2026-10-14. All published HTML pages load this same shared file exactly once. Do not also paste a second copy of the Google tag in each page: duplicate initialization may affect measurement.

Analytics data is only available from successful tag execution after activation. Check deployment by visiting the site and then **Reports → Realtime** in https://analytics.google.com/. A GitHub commit by itself does not prove collection or recover historical visits.

Before running nonessential analytics on visitors, review applicable privacy disclosure and consent requirements.


## Tagged links to paste onto external profiles

Use these when linking **to the website** from the named channel. Attribution is measured after Analytics is activated.

- LinkedIn profile website: https://gbavaro.github.io/?utm_source=linkedin&utm_medium=social&utm_campaign=profile
- Substack profile/About: https://gbavaro.github.io/?utm_source=substack&utm_medium=referral&utm_campaign=profile
- Substack newsletter/email: https://gbavaro.github.io/?utm_source=substack&utm_medium=email&utm_campaign=newsletter

If the site moves to `guybavaro.com`, update these links and the GA4 Web stream's site configuration accordingly.

## Reading your results

- GA4 **Reports → Realtime**: verify live activity.
- GA4 **Reports → Acquisition → Traffic acquisition**: where visits came from, including the tagged LinkedIn and Substack links.
- GA4 **Reports → Engagement → Events**: find `portfolio_click` and break down by its `destination` event parameter (create a GA4 custom dimension for event parameter `destination` if you want it in standard/exploration reports).
- GitHub repository **Insights → Traffic**: separate code repository visits over the recent 14-day window, **not** website visitors.

The Analytics measurement ID is not a password; it identifies the destination GA4 Web stream, and the tag is normally public in website HTML/JavaScript.

## Measurement update — October 25, 2026

The shared loader now sends explicit interaction events alongside the existing `portfolio_click`: `contact_email_click`, `contact_linkedin_click`, `view_executive_click`, `view_work_click`, `view_writing_click`, `view_article_click`, and `view_substack_click`. Do not add these events to `portfolio_click` to calculate unique interactions: they describe the same clicks. Email addresses, email subjects and URL query strings are not included in the added click payloads. GA4's normal page-location collection is unchanged.

Contact clicks indicate intent; they do not establish a sent email, recruiter identity, qualified opportunity or hire. LinkedIn clicks may be profile research. No event is automatically marked as a GA4 key event by this code. Owner/admin follow-up: verify the events in Realtime/DebugView, optionally mark `contact_email_click` as a key event, and register the event-scoped `destination` custom dimension if desired. The current connector does not provide GA4 admin writes.

### Comparable evaluation windows

- Metadata deployment: October 25, 2026. Treat deployment day as a transition day.
- Pre-change Google Search Console baseline: September 25–October 22, 2026 (28 days; excludes the newest days for reporting lag).
- First complete post-change window: October 26–November 22, 2026. Retrieve Search Console results November 25 or later. Recrawl timing can differ by URL, so this measures overall change rather than proving causality.
- GA4 baseline: September 26–October 23, 2026. Compare session sources, engagement and content views; the new named click events have no historical baseline. Do not interpret their initial appearance as growth.
- Track Google clicks, impressions, CTR and impression-weighted position; distinguish searches containing Guy Bavaro/Gaetano Bavaro from other visible queries. Query-level reporting can omit low-volume searches. Track page-level coverage separately.
- Track Bing organic sessions in GA4; Bing impressions and citations require connected Bing Webmaster Tools, which is currently unavailable.
- Track identifiable AI referral sessions using GA4 session source/medium (ChatGPT, Claude, Perplexity, Copilot, Gemini and Grok domains). Classify exact domains and subdomains, retaining original source labels. Direct traffic is unassigned, not automatically AI traffic. No referrer does not mean no AI mention.
- Keep a dated manual citation check using the same hiring prompts, platforms, region and account state. Record whether Guy is named and whether a site URL is cited. A handful of generated answers is a qualitative sample, not a reliable market-wide visibility score.
- Compare actual qualified inbound conversations in a private recruiting log. Do not place private analytics or recruiter details in this public repository.

Recheck on demand; this document does not create a scheduled report.

