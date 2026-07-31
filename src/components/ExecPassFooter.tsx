import { useLocation } from "react-router-dom";
import { AirsideMark } from "@/components/AirsideMark";
import { LangLink } from "@/components/LangLink";
import { preCheckoutPath, LEGAL_LINKS, MEMBER_URL } from "@/lib/booking";
import { useT } from "@/i18n/LanguageContext";

export const ExecPassFooter = () => {
  const { search } = useLocation();
  const t = useT("common");

  return (
    <footer className="ep-bg-void border-t border-line-dark">
      <div className="mx-auto max-w-container px-6 py-16">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand + disclaimer */}
          <div className="md:col-span-5">
            <AirsideMark variant="light" />
            <p className="ep-mono text-steel mt-6">{t("footer.tagline")}</p>
            <p className="mt-6 max-w-prose text-[15px] text-steel">{t("footer.blurb")}</p>

          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <div className="ep-mono text-flare-bright mb-4">{t("footer.brandHeading")}</div>
            <ul className="space-y-3 text-[15px]">
              <li><LangLink to="/how-it-works" className="text-bright hover:text-flare-bright ep-ease">{t("nav.howItWorks")}</LangLink></li>
              <li><LangLink to="/faq" className="text-bright hover:text-flare-bright ep-ease">{t("nav.faq")}</LangLink></li>
              <li><LangLink to="/about" className="text-bright hover:text-flare-bright ep-ease">{t("nav.about")}</LangLink></li>
              <li><LangLink to="/contact" className="text-bright hover:text-flare-bright ep-ease">{t("nav.contact")}</LangLink></li>
              <li>
                <a href={MEMBER_URL} className="text-bright hover:text-flare-bright ep-ease">
                  {t("footer.memberZone")}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal — hosted on exec-pass.com */}
          <div className="md:col-span-2">
            <div className="ep-mono text-flare-bright mb-4">{t("footer.legalHeading")}</div>
            <ul className="space-y-3 text-[15px]">
              {LEGAL_LINKS.map((l) => (
                <li key={l.path}>
                  <LangLink
                    to={`/${l.path}`}
                    className="text-bright hover:text-flare-bright ep-ease"
                  >
                    {t(`legalLinks.${l.path}`, l.label)}
                  </LangLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <div className="ep-mono text-flare-bright mb-4">{t("footer.operatorHeading")}</div>
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
                alt={t("footer.paymentsAlt")}
                className="h-8 opacity-70"
              />
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-line-dark flex flex-col md:flex-row justify-between gap-4">
          <div className="ep-chip text-steel">© {new Date().getFullYear()} Marvelliant B.V. {t("footer.rights")}</div>
          <div className="ep-chip text-steel">{t("footer.locations")}</div>
        </div>
      </div>
    </footer>
  );
};
