import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AirsideMark } from "@/components/AirsideMark";
import { preCheckoutPath } from "@/lib/booking";

const NAV = [
  { label: "How it works", href: "/how-it-works" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const ExecPassHeader = () => {
  const [open, setOpen] = useState(false);
  const { search } = useLocation();
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
              <Link
                key={n.href}
                to={n.href}
                className="ep-mono text-ink-muted hover:text-ink ep-ease"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <Link
            to={bookUrl}
            className="ep-btn-type text-[13px] uppercase tracking-wider bg-flare hover:bg-flare-bright text-white px-6 py-2.5 ep-ease ep-press rounded-full"
          >
            Join Exec Pass
          </Link>
        </div>

        <button
          className="lg:hidden text-ink p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden ep-bg-paper border-t border-line">
          <nav className="mx-auto max-w-container px-6 py-6 flex flex-col gap-4">
            {NAV.map((n) => (
              <Link
                key={n.href}
                to={n.href}
                onClick={() => setOpen(false)}
                className="ep-mono text-ink"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to={bookUrl}
              onClick={() => setOpen(false)}
              className="ep-btn-type text-[13px] uppercase tracking-wider bg-flare text-white px-5 py-3 text-center mt-2 rounded-full"
            >
              Join Exec Pass
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
