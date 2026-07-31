import { createContext, useContext, useEffect, useMemo, ReactNode } from "react";
import { DEFAULT_LANG, Lang, localePath } from "./config";

/**
 * Translation dictionaries.
 * Each locale file lives at src/i18n/locales/{lang}/{namespace}.ts and
 * default-exports a flat-ish object of strings/arrays for that page.
 * Missing keys fall back to English.
 */
type Dict = Record<string, unknown>;
const modules = import.meta.glob<{ default: Dict }>("./locales/*/*.ts", { eager: true });

const DICTS: Record<string, Record<string, Dict>> = {};
for (const path in modules) {
  const match = path.match(/\.\/locales\/([^/]+)\/([^/]+)\.ts$/);
  if (!match) continue;
  const [, lang, ns] = match;
  DICTS[lang] = DICTS[lang] || {};
  DICTS[lang][ns] = modules[path].default;
}

interface LanguageContextValue {
  lang: Lang;
  /** Prefix an internal path with the active language. */
  path: (p: string) => string;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: DEFAULT_LANG,
  path: (p) => localePath(DEFAULT_LANG, p),
});

export const LanguageProvider = ({ lang, children }: { lang: Lang; children: ReactNode }) => {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(() => ({ lang, path: (p: string) => localePath(lang, p) }), [lang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLang = () => useContext(LanguageContext);

function lookup(dict: Dict | undefined, key: string): unknown {
  if (!dict) return undefined;
  return key.split(".").reduce<unknown>((acc, part) => {
    if (acc && typeof acc === "object") return (acc as Record<string, unknown>)[part];
    return undefined;
  }, dict);
}

/**
 * Translations for one namespace (page). Usage:
 *   const t = useT("home");
 *   t("hero.title")            -> string
 *   t<string[]>("hero.bullets") -> typed value
 */
export function useT(namespace: string) {
  const { lang } = useLang();
  return useMemo(() => {
    const local = DICTS[lang]?.[namespace];
    const fallback = DICTS[DEFAULT_LANG]?.[namespace];
    return function t<T = string>(key: string, fallbackValue?: T): T {
      const value = lookup(local, key) ?? lookup(fallback, key) ?? fallbackValue ?? key;
      return value as T;
    };
  }, [lang, namespace]);
}
