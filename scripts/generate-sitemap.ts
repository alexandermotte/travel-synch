// Runs before `vite dev` and `vite build` (predev/prebuild hooks); writes public/sitemap.xml.
// Covers the five marketing pages exec-pass.com owns, in every supported
// language (/{lang}/{page}), with hreflang alternates. The booking app
// (fasttrack.exec-pass.com) maintains its own sitemap.

import { writeFileSync } from "fs"
import { resolve } from "path"

const BASE_URL = "https://exec-pass.com"

const LANGS = ["en", "fr", "pt", "es", "it", "de", "tr", "pl", "el"] as const
const DEFAULT_LANG = "en"

interface SitemapEntry {
  path: string
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"
  priority?: string
}

const entries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/how-it-works", changefreq: "monthly", priority: "0.8" },
  { path: "/faq", changefreq: "monthly", priority: "0.8" },
  { path: "/about", changefreq: "monthly", priority: "0.6" },
  { path: "/contact", changefreq: "yearly", priority: "0.5" },
]

const localeUrl = (lang: string, path: string) =>
  `${BASE_URL}/${lang}${path === "/" ? "" : path}`

function generateSitemap(entries: SitemapEntry[]) {
  const urls: string[] = []

  for (const e of entries) {
    for (const lang of LANGS) {
      urls.push(
        [
          `  <url>`,
          `    <loc>${localeUrl(lang, e.path)}</loc>`,
          ...LANGS.map(
            (l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${localeUrl(l, e.path)}"/>`,
          ),
          `    <xhtml:link rel="alternate" hreflang="x-default" href="${localeUrl(DEFAULT_LANG, e.path)}"/>`,
          e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
          e.priority ? `    <priority>${e.priority}</priority>` : null,
          `  </url>`,
        ]
          .filter(Boolean)
          .join("\n"),
      )
    }
  }

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`,
    ...urls,
    `</urlset>`,
  ].join("\n")
}

writeFileSync(resolve("public/sitemap.xml"), generateSitemap(entries))
console.log(`sitemap.xml written (${entries.length * LANGS.length} entries)`)
