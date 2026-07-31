import { LangLink } from "@/components/LangLink";
import LegalLayout from "@/components/LegalLayout";
import LinkifyText from "@/components/LinkifyText";
import { getPrivacy } from "@/data/legal";
import { useLang } from "@/i18n/LanguageContext";

export default function PrivacyPolicy() {
  const { lang } = useLang();
  const c = getPrivacy(lang);
  return (
    <LegalLayout
      badge={c.badge}
      title={c.title}
      lastUpdated={c.lastUpdated}
      seoTitle={`ExecPass - ${c.title}`}
      seoDescription="How Exec Pass collects, uses and protects your personal data, and how to exercise your rights."
      path="/privacy"
    >
      {c.intro.map((p, i) => <p key={i}><LinkifyText text={p} /></p>)}

      <h2>{c.art1Title}</h2>
      <div className="overflow-x-auto my-6 rounded-xl border border-border">
        <table className="min-w-full">
          <tbody className="text-muted-foreground text-sm">
            {c.defs.map((d, i) => (
              <tr key={i} className="border-b border-border/60 last:border-b-0">
                <td className="px-4 py-3 align-top w-1/3 text-foreground font-semibold">{d.term}</td>
                <td className="px-4 py-3"><LinkifyText text={d.def} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>{c.art2Title}</h2>
      <h3>{c.art2_1Title}</h3>
      {c.art2_1.map((p, i) => <p key={i}><LinkifyText text={p} /></p>)}
      <h3>{c.art2_2Title}</h3>
      {c.art2_2.map((p, i) => <p key={i}><LinkifyText text={p} /></p>)}

      <h2>{c.art3Title}</h2>
      <p>{c.art3Intro}</p>
      <ul>{c.art3List.map((li, i) => <li key={i}><LinkifyText text={li} /></li>)}</ul>

      <h2>{c.art4Title}</h2>
      <p><LinkifyText text={c.art4Intro1} /></p>
      <ul>{c.art4Channels.map((li, i) => <li key={i}><LinkifyText text={li} /></li>)}</ul>
      <p><LinkifyText text={c.art4Intro2} /></p>
      <p><LinkifyText text={c.art4DataIntro} /></p>
      <ul>
        {c.art4DataList.map((it, i) => (
          <li key={i}><strong>{it.label}</strong>: <LinkifyText text={it.text} /></li>
        ))}
      </ul>
      <h3>{c.emailConnectTitle}</h3>
      {c.emailConnect.map((p, i) => <p key={i}><LinkifyText text={p} /></p>)}
      <h3>{c.healthTitle}</h3>
      {c.health.map((p, i) => <p key={i}><LinkifyText text={p} /></p>)}

      <h2>{c.art5Title}</h2>
      <p><LinkifyText text={c.art5Intro} /></p>
      <div className="overflow-x-auto my-6 rounded-xl border border-border">
        <table className="min-w-full">
          <thead>
            <tr className="bg-muted">
              <th className="border-b border-border px-4 py-3 text-left text-foreground text-sm font-semibold">{c.art5TableHeaders[0]}</th>
              <th className="border-b border-border px-4 py-3 text-left text-foreground text-sm font-semibold">{c.art5TableHeaders[1]}</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground text-sm">
            {c.art5Rows.map((row, i) => (
              <tr key={i} className="border-b border-border/60 last:border-b-0">
                <td className="px-4 py-3"><LinkifyText text={row[0]} /></td>
                <td className="px-4 py-3"><LinkifyText text={row[1]} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>{c.art6Title}</h2>
      {c.art6.map((p, i) => <p key={i}><LinkifyText text={p} /></p>)}
      <ul>
        {c.art6List.map((it, i) => (
          <li key={i}><strong>{it.label}</strong>: <LinkifyText text={it.text} /></li>
        ))}
      </ul>

      <h2>{c.art7Title}</h2>
      {c.art7.map((p, i) => <p key={i}><LinkifyText text={p} /></p>)}
      <ul>{c.art7List.map((li, i) => <li key={i}><LinkifyText text={li} /></li>)}</ul>

      <h2>{c.art8Title}</h2>
      {c.art8.map((p, i) => <p key={i}><LinkifyText text={p} /></p>)}
      <ul>{c.art8List.map((li, i) => <li key={i}><LinkifyText text={li} /></li>)}</ul>
      <p><LinkifyText text={c.art8After} /></p>

      <h2>{c.art9Title}</h2>
      {c.art9.slice(0, -1).map((p, i) => <p key={i}><LinkifyText text={p} /></p>)}
      <p>
        <LinkifyText text={c.art9[c.art9.length - 1]} />{" "}
        <LangLink to="/cookie-policy" className="text-primary hover:underline">exec-pass.com/cookie-policy</LangLink>.
      </p>

      <h2>{c.art10Title}</h2>
      {c.art10.map((p, i) => <p key={i}><LinkifyText text={p} /></p>)}
      {c.rights.map((r, i) => (
        <div key={i}>
          <h4>{r.title}</h4>
          <p><LinkifyText text={r.text} /></p>
        </div>
      ))}

      <h2>{c.art11Title}</h2>
      {c.art11.map((p, i) => <p key={i}><LinkifyText text={p} /></p>)}

      <h2>{c.art12Title}</h2>
      {c.art12.map((p, i) => <p key={i}><LinkifyText text={p} /></p>)}

      <h2>{c.art13Title}</h2>
      {c.art13.map((p, i) => <p key={i}><LinkifyText text={p} /></p>)}
    </LegalLayout>
  );
}
