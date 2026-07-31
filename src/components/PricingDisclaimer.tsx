import { useCurrency } from "@/contexts/CurrencyContext";
import { useT } from "@/i18n/LanguageContext";

/**
 * Pricing / membership disclaimer used under every pricing box.
 * Kept short and identical site-wide, matching the single-line format
 * used across the sibling travel portals.
 */
const PricingDisclaimer = ({ className = "" }: { className?: string }) => {
  const { formatPrice } = useCurrency();
  const t = useT("pricing");

  const text = t("disclaimer")
    .replace("{medium}", formatPrice(49))
    .replace("{premium}", formatPrice(79));

  return (
    <div className={`max-w-4xl ${className}`}>
      <p className="text-center text-sm md:text-base text-ink-muted leading-relaxed">
        {text}
      </p>
    </div>
  );
};

export default PricingDisclaimer;
