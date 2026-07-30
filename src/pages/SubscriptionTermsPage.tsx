import LegalLayout from "@/components/LegalLayout";
import { useCurrency } from "@/contexts/CurrencyContext";
import { subscriptionTermsTranslations } from "@/data/legal/subscriptionTermsContent";
import { bookingUrl } from "@/lib/booking";
import { useLocation } from "react-router-dom";

export default function SubscriptionTermsPage() {
  const { formatPrice } = useCurrency();
  const { search } = useLocation();
  const t = subscriptionTermsTranslations.en;

  const unsubLink = (
    <a href={bookingUrl("unsubscribe", search)} className="text-primary hover:underline">
      this link
    </a>
  );

  return (
    <LegalLayout
      badge={t.badge}
      title={t.title}
      seoTitle="ExecPass - Subscription Terms"
      seoDescription="What the Exec Pass membership includes, how billing works and how to cancel at any time."
      path="/subscription-terms"
    >
      <p>{t.intro}</p>
      <ul>
        {t.services.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
      <p>{t.trialText(formatPrice)}</p>
      <p>{t.cancelAnytime}</p>
      <p>{t.cancelHow(unsubLink)}</p>
      <p>{t.noSell}</p>
      <p>{t.pci}</p>
    </LegalLayout>
  );
}
