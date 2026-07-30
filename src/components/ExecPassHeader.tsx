import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AirsideMark } from "@/components/AirsideMark";

const NAV = [
  { label: "About", href: "/services-pricing" },
  { label: "Contact", href: "/contacts" },
];

const BOOK_URL = "https://fasttrack.exec-pass.com/en";

export const ExecPassHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-line-dark"
      style={{
        height: 72,
        backgroundColor: "hsl(var(--ep-void) / 0.82)",
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
          <a
            href={BOOK_URL}
            className="ep-btn-type text-[13px] uppercase tracking-wider bg-flare hover:bg-flare-bright text-white px-5 py-2.5 ep-ease ep-press"
            style={{ borderRadius: 12 }}
          >
            Book Fast Track
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
              href={BOOK_URL}
              className="ep-btn-type text-[13px] uppercase tracking-wider bg-flare text-white px-5 py-3 text-center mt-2"
              style={{ borderRadius: 12 }}
            >
              Book Fast Track
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
