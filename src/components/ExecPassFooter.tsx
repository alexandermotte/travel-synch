import { Link, useLocation } from "react-router-dom";
import { AirsideMark } from "@/components/AirsideMark";
import { preCheckoutPath, LEGAL_LINKS, MEMBER_URL } from "@/lib/booking";

export const ExecPassFooter = () => {
  const { search } = useLocation();

  return (
    <footer className="ep-bg-void border-t border-line-dark">
      <div className="mx-auto max-w-container px-6 py-16">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand + disclaimer */}
          <div className="md:col-span-5">
            <AirsideMark variant="light" />
            <p className="ep-mono text-steel mt-6">Fly clever.</p>
            <p className="mt-6 max-w-prose text-[15px] text-steel">
              Exec Pass is a travel membership: Fast Track security, automatic check-in, lounges,
              flight compensation, luggage recovery, eSIM data and a 24/7 concierge — in two plans.
              Exec Pass is not affiliated with any airport or airline.
            </p>
            <Link
              to={preCheckoutPath(undefined, search)}
              className="ep-btn-type text-[13px] uppercase tracking-wider inline-block bg-flare hover:bg-flare-bright text-white px-5 py-3 mt-8 ep-ease ep-press rounded-full"
            >
              Join Exec Pass
            </Link>

          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <div className="ep-mono text-flare-bright mb-4">Exec Pass</div>
            <ul className="space-y-3 text-[15px]">
              <li><Link to="/how-it-works" className="text-bright hover:text-flare-bright ep-ease">How it works</Link></li>
              <li><Link to="/faq" className="text-bright hover:text-flare-bright ep-ease">FAQ</Link></li>
              <li><Link to="/about" className="text-bright hover:text-flare-bright ep-ease">About</Link></li>
              <li><Link to="/contact" className="text-bright hover:text-flare-bright ep-ease">Contact</Link></li>
              <li>
                <a href={MEMBER_URL} className="text-bright hover:text-flare-bright ep-ease">
                  Member zone
                </a>
              </li>
            </ul>
          </div>

          {/* Legal — hosted on exec-pass.com */}
          <div className="md:col-span-2">
            <div className="ep-mono text-flare-bright mb-4">Legal</div>
            <ul className="space-y-3 text-[15px]">
              {LEGAL_LINKS.map((l) => (
                <li key={l.path}>
                  <Link
                    to={`/${l.path}`}
                    className="text-bright hover:text-flare-bright ep-ease"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <div className="ep-mono text-flare-bright mb-4">Operator</div>
            <address className="not-italic text-[15px] text-bright leading-relaxed">
              MARVELLIANT B.V.<br />
              Bos en Lommerplein 280<br />
              1055RW Amsterdam<br />
              Netherlands<br />
              <span className="ep-chip text-steel">KVK 96513519 · RSIN 867643298</span>
            </address>
            <div className="mt-4 space-y-1 text-[15px]">
              <a href="mailto:contact@exec-pass.com" className="block text-bright hover:text-flare-bright ep-ease">contact@exec-pass.com</a>
              <a href="tel:+442039362491" className="block text-bright hover:text-flare-bright ep-ease">+44 20 3936 2491</a>
            </div>
            <div className="mt-5 pt-4 border-t border-line-dark">
              <img
                src="/images/payment-card.svg"
                alt="Accepted payment methods — Visa, Mastercard, American Express"
                className="h-8 opacity-70"
              />
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-line-dark flex flex-col md:flex-row justify-between gap-4">
          <div className="ep-chip text-steel">© {new Date().getFullYear()} Marvelliant B.V. All rights reserved.</div>
          <div className="ep-chip text-steel">Amsterdam · Operating globally · 200+ airports</div>
        </div>
      </div>
    </footer>
  );
};
