/** Supported site languages. URL structure is /{lang}/{page}. */
export const LANGUAGES = [
  { code: "en", short: "EN", label: "English" },
  { code: "fr", short: "FR", label: "Français" },
  { code: "pt", short: "PT", label: "Português" },
  { code: "es", short: "ES", label: "Español" },
  { code: "it", short: "IT", label: "Italiano" },
  { code: "de", short: "DE", label: "Deutsch" },
  { code: "tr", short: "TR", label: "Türkçe" },
  { code: "pl", short: "PL", label: "Polski" },
  { code: "el", short: "EL", label: "Ελληνικά" },
] as const;

export type Lang = (typeof LANGUAGES)[number]["code"];

export const DEFAULT_LANG: Lang = "en";

export const LANG_CODES = LANGUAGES.map((l) => l.code) as readonly Lang[];

export const isLang = (value?: string): value is Lang =>
  !!value && (LANG_CODES as readonly string[]).includes(value);

/** Prefix an app path with the language segment: ("fr", "/about") -> "/fr/about" */
export function localePath(lang: Lang, path = "/") {
  const clean = path === "/" ? "" : `/${path.replace(/^\/+/, "")}`;
  return `/${lang}${clean}`;
}
