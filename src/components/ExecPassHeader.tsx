import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AirsideMark } from "@/components/AirsideMark";

const NAV = [
  { label: "Services", href: "/services-pricing" },
  { label: "Membership", href: "/#membership" },
  { label: "Questions", href: "/faq" },
  { label: "Contact", href: "/contacts" },
];

const LOCALES = ["EN", "DE", "FR"] as const;

export const ExecPassHeader = () => {
  const [open, setOpen] = useState(false);
  const [locale, setLocale] = useState<(typeof LOCALES)[number]>("EN");

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-line-dark"
      style={{
        height: 72,
        backgroundColor: "hsl(var(--ep-void) / 0.78)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div className="mx-auto flex h-full max-w-container items-center justify-between px-6">
        <div className="flex items-center gap-10">
          <AirsideMark variant="light" />
          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((n) => (
              <Link
                key={n.href}
                to={n.href}
                className="ep-mono text-steel hover:text-bright ep-ease"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-1" role="group" aria-label="Language">
            {LOCALES.map((code) => (
              <button
                key={code}
                onClick={() => setLocale(code)}
                className={`ep-mono px-2 py-1 ep-ease ${
                  locale === code ? "text-flare-bright" : "text-steel hover:text-bright"
                }`}
              >
                {code}
              </button>
            ))}
          </div>
          <a
            href="https://member.exec-pass.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="ep-mono text-steel hover:text-bright ep-ease"
          >
            Log in
          </a>
          <a
            href="https://fasttrack.exec-pass.com"
            className="ep-btn-type text-[13px] uppercase tracking-wider bg-flare-fill hover:bg-flare-fill-hover text-white px-5 py-2.5 ep-ease ep-press"
            style={{ borderRadius: 12 }}
          >
            Start free trial
          </a>
        </div>

        <button
          className="lg:hidden text-bright p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden ep-bg-void border-t border-line-dark">
          <nav className="mx-auto max-w-container px-6 py-6 flex flex-col gap-4">
            {NAV.map((n) => (
              <Link
                key={n.href}
                to={n.href}
                onClick={() => setOpen(false)}
                className="ep-mono text-bright"
              >
                {n.label}
              </Link>
            ))}
            <a
              href="https://member.exec-pass.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="ep-mono text-steel"
            >
              Log in
            </a>
            <div className="flex gap-2 pt-2">
              {LOCALES.map((code) => (
                <button
                  key={code}
                  onClick={() => setLocale(code)}
                  className={`ep-mono px-2 py-1 border border-line-dark ${
                    locale === code ? "text-flare-bright" : "text-steel"
                  }`}
                >
                  {code}
                </button>
              ))}
            </div>
            <a
              href="https://fasttrack.exec-pass.com"
              className="ep-btn-type text-[13px] uppercase tracking-wider bg-flare-fill text-white px-5 py-3 text-center mt-2"
              style={{ borderRadius: 12 }}
            >
              Start free trial
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
