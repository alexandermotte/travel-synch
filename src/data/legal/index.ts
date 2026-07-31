import { DEFAULT_LANG, Lang } from "@/i18n/config";
import type { TermsContent } from "./termsConditions.types";
import type { PrivacyContent } from "./privacyPolicy.types";
import type { CookieContent } from "./cookiePolicy.types";

/**
 * Legal documents are one file per language (e.g. termsConditions.fr.ts).
 * They are collected with a glob so a language can be added by dropping in a
 * new file — any language without its own file falls back to English.
 */
const modules = import.meta.glob<Record<string, unknown>>("./*.*.ts", { eager: true });

function collect<T>(doc: string): Partial<Record<Lang, T>> {
  const out: Partial<Record<Lang, T>> = {};
  for (const path in modules) {
    const match = path.match(/^\.\/(.+)\.([a-z]{2})\.ts$/);
    if (!match) continue;
    const [, name, lang] = match;
    if (name !== doc || lang === "types") continue;
    const value = modules[path][lang];
    if (value) out[lang as Lang] = value as T;
  }
  return out;
}

const terms = collect<TermsContent>("termsConditions");
const privacy = collect<PrivacyContent>("privacyPolicy");
const cookies = collect<CookieContent>("cookiePolicy");

export const getTerms = (lang: Lang): TermsContent => terms[lang] ?? (terms[DEFAULT_LANG] as TermsContent);
export const getPrivacy = (lang: Lang): PrivacyContent => privacy[lang] ?? (privacy[DEFAULT_LANG] as PrivacyContent);
export const getCookies = (lang: Lang): CookieContent => cookies[lang] ?? (cookies[DEFAULT_LANG] as CookieContent);
