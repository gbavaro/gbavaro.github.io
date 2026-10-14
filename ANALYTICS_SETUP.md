# Website analytics setup

The site loads `/analytics.js` on all six HTML pages, but analytics is intentionally inactive until a Google Analytics 4 (GA4) Web data stream Measurement ID has been supplied. There is **no historical visitor count** to recover from the previous site.

## Activate Google Analytics 4

1. Go to https://analytics.google.com/ and create or select a GA4 property.
2. Under **Admin → Data streams**, add a **Web** stream for `https://gbavaro.github.io/` (or select the existing stream).
3. Copy the **Measurement ID** beginning with `G-`.
4. Edit the root `analytics.js` file. Change `var MEASUREMENT_ID = "";` to your actual `G-` ID, and commit.
5. Visit the site and confirm the session in **Reports → Realtime**. Data starts only after a valid ID is configured and tag execution is permitted.

The script uses the GA4 `gtag.js` endpoint, tracks page views on every HTML page, and emits a privacy-conscious custom event named `portfolio_click` with a `destination` value of `email`, `linkedin`, `substack`, `writing`, or `article`. It does not send the email address as an event parameter.

Review applicable privacy disclosures and consent requirements before enabling Analytics, particularly for visitors in jurisdictions requiring consent for nonessential analytics cookies.

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
