import { useCurrency } from "@/hooks/useCurrency";

/**
 * Full-length pricing / membership disclaimer used under every pricing box.
 * Kept in one place so the wording stays identical site-wide.
 */
const PricingDisclaimer = ({ className = "" }: { className?: string }) => {
  const { formatPrice } = useCurrency();

  return (
    <div
      className={`max-w-4xl text-[13px] leading-relaxed text-ink-muted border-t border-line pt-6 space-y-3 ${className}`}
    >
      <p>
        Your Exec Pass membership starts with a 3-day free trial. After the trial, you will be
        charged {formatPrice(49)} every 3 months (Medium) or {formatPrice(79)} every 3 months
        (Premium), automatically debited from the card on file. Your membership renews
        automatically at the end of each billing period until cancelled, and you can cancel at any
        time before the next renewal date.
      </p>
      <p>
        All membership benefits activate after your first successful payment — simply purchase a
        Fast Track (price varies by airport) or a Smart Check-In to become an active member. Fast
        Track and Smart Check-In are available only to active members (members that have at least
        one successful subscription payment).
      </p>
      <p>
        Prices are shown in your selected currency for convenience; the amount actually charged may
        differ slightly depending on your bank's exchange rate. Exec Pass is operated by Marvelliant
        B.V. and is not affiliated with any airline or airport authority.
      </p>
    </div>
  );
};

export default PricingDisclaimer;
