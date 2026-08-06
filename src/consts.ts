// Shared site constants (were hard-coded in assets/site.js).
export const SITE = 'https://tokenmonitor.dev';

export const NAV = [
  { href: '/index.html', label: 'Overview', page: 'index' },
  { href: '/how-it-works.html', label: 'How it works', page: 'how-it-works' },
  { href: '/setup.html', label: 'Setup', page: 'setup' },
  { href: '/usage.html', label: 'Usage', page: 'usage' },
  { href: '/plugin.html', label: 'Plugin & skills', page: 'plugin' },
  { href: '/faq.html', label: 'FAQ', page: 'faq' },
];

// The campaign is LIVE: the Kickstarter page accepts pledges, so every CTA
// says back/pledge — never follow/notify. (It was in prelaunch until
// 2026-08-06; the checklist that flipped this wording is in git history.)
//
// End-of-campaign checklist (live wording is NOT confined to this file):
//   1. KICKSTARTER_CTA below → whatever succeeds it (late pledges? shop?)
//   2. ANNOUNCE_KEY below → bump the suffix, so people who dismissed the
//      live bar still see the next one
//   3. AnnounceBar.astro copy → "is live on Kickstarter"
//   4. index.astro — the "Live now · Kickstarter" badge, the band's
//      "campaign is running" line, and the meta description
//   5. faq.astro — the "Can I buy one yet?" answer and the closing CTA
//   6. how-it-works.astro — the "It's live on Kickstarter" CTA lead
export const ANNOUNCE_KEY = 'tmon:announce:live';
// `?ref=` is Kickstarter's conversion-tracking token — keep it on the URL so
// referrals from this site are attributed to the campaign's website source.
export const KICKSTARTER_URL =
  'https://www.kickstarter.com/projects/jorgemf/token-monitor-see-your-ai-usage-on-your-desk?ref=81tzx4';
export const KICKSTARTER_CTA = 'Back it on Kickstarter';

// Reddit Ads conversion pixel (components/RedditPixel.astro). The id is the
// ad account's public pixel id — it ships in the page source by design, it is
// not a secret. REDDIT_CTA_EVENT is the standard event fired when a visitor
// clicks through to the campaign. It stays 'Lead' even now that the campaign
// is live: the click is an outbound referral, not a completed transaction —
// the pledge happens on Kickstarter, which this pixel cannot observe. Switch
// it to 'Purchase' only if the site ever hosts a real checkout.
export const REDDIT_PIXEL_ID = 'a2_jedy8tmi7s6j';
export const REDDIT_CTA_EVENT = 'Lead';

export const LEGAL =
  'TokenMonitor is an independent third-party product. Claude™ is a trademark of Anthropic, PBC. Codex is a trademark of OpenAI. Antigravity and Gemini are trademarks of Google LLC. This product is not affiliated with, endorsed by, or sponsored by these companies.';
