import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AirsideMark } from "@/components/AirsideMark";
import { LangLink } from "@/components/LangLink";
import { LanguageSelector } from "@/components/LanguageSelector";
import { preCheckoutPath, MEMBER_URL } from "@/lib/booking";
import { useT } from "@/i18n/LanguageContext";

const NAV = [
  { key: "about", href: "/about" },
  { key: "howItWorks", href: "/how-it-works" },
  { key: "faq", href: "/faq" },
  { key: "contact", href: "/contact" },
  { key: "unsubscribe", href: "/unsubscribe" },
];

export const ExecPassHeader = () => {
  const [open, setOpen] = useState(false);
  const { search } = useLocation();
  const t = useT("common");
  const bookUrl = preCheckoutPath(undefined, search);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-line ep-bg-paper"
      style={{ height: 72, backgroundColor: "hsl(var(--ep-paper) / 0.88)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
    >
      <div className="mx-auto flex h-full max-w-container items-center justify-between px-6">
        <div className="flex items-center gap-10">
          <AirsideMark variant="dark" />
          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((n) => (
              <LangLink
                key={n.href}
                to={n.href}
                className="ep-mono text-ink-muted hover:text-ink ep-ease"
              >
                {t(`nav.${n.key}`)}
              </LangLink>
            ))}
          </nav>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <LanguageSelector />
          <a
            href={MEMBER_URL}
            className="ep-mono text-ink-muted hover:text-ink ep-ease text-[13px] uppercase tracking-wider"
          >
            {t("cta.login")}
          </a>
          <LangLink
            to={bookUrl}
            className="ep-btn-type text-[13px] uppercase tracking-wider bg-flare hover:bg-flare-bright text-white px-6 py-2.5 ep-ease ep-press rounded-full"
          >
            {t("cta.join")}
          </LangLink>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSelector />
          <button
            className="text-ink p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden ep-bg-paper border-t border-line">
          <nav className="mx-auto max-w-container px-6 py-6 flex flex-col gap-4">
            {NAV.map((n) => (
              <LangLink
                key={n.href}
                to={n.href}
                onClick={() => setOpen(false)}
                className="ep-mono text-ink"
              >
                {t(`nav.${n.key}`)}
              </LangLink>
            ))}
            <LangLink
              to={bookUrl}
              onClick={() => setOpen(false)}
              className="ep-btn-type text-[13px] uppercase tracking-wider bg-flare text-white px-5 py-3 text-center mt-2 rounded-full"
            >
              {t("cta.join")}
            </LangLink>
          </nav>
        </div>
      )}
    </header>
  );
};
