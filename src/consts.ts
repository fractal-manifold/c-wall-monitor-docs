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

// The campaign is in PRELAUNCH: the Kickstarter page only offers "Notify me on
// launch", so every CTA says follow/notify — never pledge/back.
//
// Launch-day checklist (prelaunch wording is NOT confined to this file):
//   1. KICKSTARTER_CTA below → 'Back it on Kickstarter'
//   2. ANNOUNCE_KEY below → bump the suffix, so people who dismissed the
//      prelaunch bar still see the launch one
//   3. AnnounceBar.astro copy → "is live on Kickstarter"
//   4. index.astro — the "Coming soon · Kickstarter" badge, the band's
//      "emailed the moment it opens" line, and the meta description
//   5. faq.astro — the "Can I buy one yet?" answer and the closing CTA
export const ANNOUNCE_KEY = 'tmon:announce:prelaunch';
export const KICKSTARTER_URL =
  'https://www.kickstarter.com/projects/jorgemf/token-monitor-see-your-ai-usage-on-your-desk';
export const KICKSTARTER_CTA = 'Follow on Kickstarter';

export const LEGAL =
  'TokenMonitor is an independent third-party product. Claude™ is a trademark of Anthropic, PBC. Codex is a trademark of OpenAI. Antigravity and Gemini are trademarks of Google LLC. This product is not affiliated with, endorsed by, or sponsored by these companies.';
