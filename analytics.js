/* Site-wide Google Analytics 4 configuration.
   Uses the site owner-provided GA4 web data stream Measurement ID.
   This shared loader is included once by all published HTML pages. */
(function () {
  "use strict";
  var MEASUREMENT_ID = "G-SK548F6DDY";

  if (!/^G-[A-Z0-9]+$/i.test(MEASUREMENT_ID)) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", MEASUREMENT_ID);

  var tag = document.createElement("script");
  tag.async = true;
  tag.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(MEASUREMENT_ID);
  document.head.appendChild(tag);

  // Track meaningful site interactions without collecting contact details.
  document.addEventListener("click", function (event) {
    var target = event.target;
    var link = target && target.closest ? target.closest("a[href]") : null;
    if (!link) return;

    var url;
    try { url = new URL(link.href, window.location.href); }
    catch (error) { return; }

    var destination = "";
    if (url.protocol === "mailto:") destination = "email";
    else if (url.hostname === "linkedin.com" || url.hostname === "www.linkedin.com") destination = "linkedin";
    else if (url.hostname === "gbavaro.substack.com") destination = "substack";
    else if (url.origin === window.location.origin && url.pathname.indexOf("/executive/") === 0) destination = "executive";
    else if (url.origin === window.location.origin && url.pathname.indexOf("/writing/") === 0) destination = "writing";
    else if (url.origin === window.location.origin && url.pathname.indexOf("/articles/") === 0) destination = "article";
    else if (url.origin === window.location.origin && url.pathname.indexOf("/work/") === 0) destination = "work";

    if (destination) {
      // Preserve the original event for historical continuity. Explicit event
      // names make contact intent reportable without a custom dimension.
      var section = link.closest("section");
      var params = {
        destination: destination,
        link_placement: section && section.id ? section.id : (link.closest("header") ? "navigation" : "page"),
        page_path: window.location.pathname,
        site_version: "2026-10-25-ecosystem-header",
        transport_type: "beacon"
      };
      if (url.protocol === "https:" || url.protocol === "http:") {
        params.link_url = url.origin + url.pathname;
      }
      window.gtag("event", "portfolio_click", params);
      var events = {
        email: "contact_email_click",
        linkedin: "contact_linkedin_click",
        executive: "view_executive_click",
        work: "view_work_click",
        writing: "view_writing_click",
        article: "view_article_click",
        substack: "view_substack_click"
      };
      window.gtag("event", events[destination], params);
    }
  }, { passive: true });
})();

