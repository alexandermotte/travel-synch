import { Helmet } from "react-helmet-async";

const SITE_URL = "https://exec-pass.com";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  /** Extra JSON-LD blocks for this route. */
  schema?: Record<string, unknown>[];
}

/** Per-route head: self-canonical to exec-pass.com, never across domains. */
export const Seo = ({ title, description, path, schema = [] }: SeoProps) => {
  const url = `${SITE_URL}${path}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
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
