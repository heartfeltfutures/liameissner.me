// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// Base path: while served from a project-page URL
// (https://carecodeconnect.github.io/liameissner.me/) we need /liameissner.me
// as the base so /_astro/... assets resolve. CI sets SITE_BASE; local dev
// defaults to '/'. When DNS is wired up and the site moves to the apex
// liameissner.me domain, drop the SITE_BASE env var from the workflow.
const base = process.env.SITE_BASE ?? '/';

export default defineConfig({
  site: 'https://liameissner.me',
  base,
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'de',
        locales: {
          de: 'de-DE',
          en: 'en-US',
        },
      },
      // Keep noindex legal pages out of the sitemap.
      filter: (page) => !page.includes('/impressum') && !page.includes('/datenschutz'),
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date(),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});