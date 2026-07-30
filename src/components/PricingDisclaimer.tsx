import { useCurrency } from "@/contexts/CurrencyContext";

/**
 * Pricing / membership disclaimer used under every pricing box.
 * Kept short and identical site-wide, matching the single-line format
 * used across the sibling travel portals.
 */
const PricingDisclaimer = ({ className = "" }: { className?: string }) => {
  const { formatPrice } = useCurrency();

  return (
    <div className={`max-w-4xl ${className}`}>
      <p className="text-center text-sm md:text-base text-ink-muted leading-relaxed">
        Your Exec Pass membership starts with a 3-day free trial. After the trial, you will be
        charged {formatPrice(49)} every 3 months (Medium) or {formatPrice(79)} every 3 months
        (Premium), automatically debited from the card on file. All membership perks activate after
        your first payment — simply purchase a Fast Track (price varies by airport) or a Smart
        Check-In to become an active member.
      </p>
    </div>
  );
};

export default PricingDisclaimer;
