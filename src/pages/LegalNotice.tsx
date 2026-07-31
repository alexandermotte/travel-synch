import LegalLayout from "@/components/LegalLayout";
import { legalNoticeTranslations, type LegalLang } from "@/data/legal/legalNoticeContent";
import { useLang } from "@/i18n/LanguageContext";

export default function LegalNotice() {
  const { lang } = useLang();
  const t = legalNoticeTranslations[lang as LegalLang] ?? legalNoticeTranslations.en;

  return (
    <LegalLayout
      badge={t.badge}
      title={t.title}
      seoTitle={`ExecPass - ${t.title}`}
      seoDescription="Legal notice for exec-pass.com — operator, contact, publication director and hosting details."
      path="/legal-notice"
    >
      {t.sections.map((section, i) => (
        <div key={i}>
          {section.heading && <h2>{section.heading}</h2>}
          {section.paragraphs.map((p, j) => (
            <p key={j}>{p}</p>
          ))}
          {section.list && (
            <ul>
              {section.list.map((item, k) => (
                <li key={k}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </LegalLayout>
  );
}
