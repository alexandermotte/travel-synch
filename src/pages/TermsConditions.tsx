import LegalLayout from "@/components/LegalLayout";
import { getTerms } from "@/data/legal";
import { useLang } from "@/i18n/LanguageContext";
import type { TermsBlock, TermsSection } from "@/data/legal/termsConditions.types";

const renderBlock = (block: TermsBlock, idx: number) => {
  switch (block.type) {
    case "p":
      return <p key={idx} dangerouslySetInnerHTML={{ __html: block.html }} />;
    case "h3":
      return <h3 key={idx}>{block.text}</h3>;
    case "ul":
      return (
        <ul key={idx}>
          {block.items.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      );
    case "dl":
      return (
        <ul key={idx}>
          {block.items.map((item, i) => (
            <li key={i}>
              <strong>&ldquo;{item.term}&rdquo;:</strong> {item.def}
            </li>
          ))}
        </ul>
      );
    default:
      return null;
  }
};

const renderSection = (section: TermsSection) => (
  <div key={section.id}>
    <h2>{section.title}</h2>
    {section.blocks.map(renderBlock)}
  </div>
);

export default function TermsConditions() {
  const { lang } = useLang();
  const c = getTerms(lang);
  return (
    <LegalLayout
      badge={c.badge}
      title={c.title}
      lastUpdated={c.lastUpdated}
      seoTitle={`ExecPass - ${c.title}`}
      seoDescription="General Terms and Conditions of Sale for Exec Pass services operated by Marvelliant B.V."
      path="/terms"
    >
      {c.sections.map(renderSection)}

      <div className="p-6 rounded-2xl bg-muted border border-border mt-8">
        <h2 className="!mt-0">{c.withdrawalForm.title}</h2>
        {c.withdrawalForm.blocks.map(renderBlock)}
      </div>
    </LegalLayout>
  );
}
