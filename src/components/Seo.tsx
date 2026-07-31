import { Helmet } from "react-helmet-async";
import { LANGUAGES, localePath } from "@/i18n/config";
import { useLang } from "@/i18n/LanguageContext";

const SITE_URL = "https://exec-pass.com";

interface SeoProps {
  title: string;
  description: string;
  /** Unprefixed app path, e.g. "/about" — the language segment is added here. */
  path: string;
  /** Extra JSON-LD blocks for this route. */
  schema?: Record<string, unknown>[];
}

/** Per-route head: self-canonical to exec-pass.com, plus hreflang alternates. */
export const Seo = ({ title, description, path, schema = [] }: SeoProps) => {
  const { lang } = useLang();
  const url = `${SITE_URL}${localePath(lang, path)}`;
  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {LANGUAGES.map((l) => (
        <link
          key={l.code}
          rel="alternate"
          hrefLang={l.code}
          href={`${SITE_URL}${localePath(l.code, path)}`}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}${localePath("en", path)}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={lang} />
      <meta property="og:site_name" content="Exec Pass" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {schema.map((s, i) => (
        <script type="application/ld+json" key={i}>
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};
