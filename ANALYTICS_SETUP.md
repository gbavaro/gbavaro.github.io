# Website analytics setup

The site loads `/analytics.js` on all six HTML pages, but analytics is intentionally inactive until a Google Analytics 4 (GA4) Web data stream Measurement ID has been supplied. There is **no historical visitor count** to recover from the previous site.

## GA4 activated

The owner-provided GA4 Web data stream Measurement ID `G-SK548F6DDY` was configured in root `analytics.js` on 2026-10-14. All six published HTML pages load this same shared file exactly once. Do not also paste a second copy of the Google tag in each page: duplicate initialization may affect measurement.

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
