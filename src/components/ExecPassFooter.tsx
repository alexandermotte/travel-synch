import { Link } from "react-router-dom";
import { AirsideMark } from "@/components/AirsideMark";

export const ExecPassFooter = () => {
  return (
    <footer className="ep-bg-void border-t border-line-dark">
      <div className="mx-auto max-w-container px-6 py-16">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand + disclaimer */}
          <div className="md:col-span-5">
            <AirsideMark variant="light" />
            <p className="ep-mono text-steel mt-6">Straight to airside.</p>
            <p className="mt-6 max-w-prose text-[15px] text-steel">
              Exec Pass is not affiliated with any airport. We are an independent travel service that
              books priority lanes, check-in and lounge access on your behalf.
            </p>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <div className="ep-mono text-flare-bright mb-4">Product</div>
            <ul className="space-y-3 text-[15px]">
              <li><Link to="/services-pricing" className="text-bright hover:text-flare-bright ep-ease">Services</Link></li>
              <li><Link to="/#membership" className="text-bright hover:text-flare-bright ep-ease">Membership</Link></li>
              <li><Link to="/faq" className="text-bright hover:text-flare-bright ep-ease">Questions</Link></li>
              <li><Link to="/contacts" className="text-bright hover:text-flare-bright ep-ease">Contact</Link></li>
              <li><Link to="/unsubscribe" className="text-bright hover:text-flare-bright ep-ease">Unsubscribe</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-2">
            <div className="ep-mono text-flare-bright mb-4">Legal</div>
            <ul className="space-y-3 text-[15px]">
              <li><Link to="/terms" className="text-bright hover:text-flare-bright ep-ease">Terms &amp; Conditions</Link></li>
              <li><Link to="/subscription-terms" className="text-bright hover:text-flare-bright ep-ease">Subscription Terms</Link></li>
              <li><Link to="/privacy" className="text-bright hover:text-flare-bright ep-ease">Privacy Policy</Link></li>
              <li><Link to="/privacy" className="text-bright hover:text-flare-bright ep-ease">Cookie Policy</Link></li>
              <li><Link to="/terms" className="text-bright hover:text-flare-bright ep-ease">Legal Notice</Link></li>
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
              <span className="text-steel">KVK 96513519 (RSIN 867643298)</span>
            </address>
            <div className="mt-4 space-y-1 text-[15px]">
              <a href="mailto:contact@exec-pass.com" className="block text-bright hover:text-flare-bright ep-ease">contact@exec-pass.com</a>
              <a href="tel:+442039362491" className="block text-bright hover:text-flare-bright ep-ease">+44 20 3936 2491</a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-line-dark flex flex-col md:flex-row justify-between gap-4">
          <div className="ep-mono text-steel">© {new Date().getFullYear()} Marvelliant B.V. All rights reserved.</div>
          <div className="ep-mono text-steel">Amsterdam · Operating globally · 300+ airports</div>
        </div>
      </div>
    </footer>
  );
};
