import { forwardRef } from "react";
import { Link, LinkProps } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";

/**
 * Drop-in replacement for react-router's <Link> that prefixes internal
 * paths with the active language segment (/fr/about, /de/faq, ...).
 */
export const LangLink = forwardRef<HTMLAnchorElement, LinkProps>(({ to, ...rest }, ref) => {
  const { path } = useLang();
  const target = typeof to === "string" && to.startsWith("/") ? path(to) : to;
  return <Link ref={ref} to={target} {...rest} />;
});

LangLink.displayName = "LangLink";
