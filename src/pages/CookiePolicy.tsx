import LegalLayout from "@/components/LegalLayout";
import LinkifyText from "@/components/LinkifyText";
import { en as c } from "@/data/legal/cookiePolicy.en";

export default function CookiePolicy() {
  return (
    <LegalLayout
      badge={c.badge}
      title={c.title}
      lastUpdated={c.lastUpdated}
      seoTitle="ExecPass - Cookie Policy"
      seoDescription="How Exec Pass uses cookies and similar technologies, and how you can manage your preferences."
      path="/cookie-policy"
    >
      {c.intro.map((p, i) => (
        <p key={i}><LinkifyText text={p} /></p>
      ))}

      <h2>{c.art1Title}</h2>
      {c.art1.map((p, i) => <p key={i}><LinkifyText text={p} /></p>)}
      <ul>
        {c.art1List.map((it, i) => (
          <li key={i}><strong>{it.label}</strong>: <LinkifyText text={it.text} /></li>
        ))}
      </ul>

      <h2>{c.art2Title}</h2>
      <h3>{c.art2_0Title}</h3>
      {c.art2_0.map((p, i) => <p key={i}><LinkifyText text={p} /></p>)}

      <h3>{c.art2_1Title}</h3>
      <p><LinkifyText text={c.art2_1Intro} /></p>
      <ul>{c.art2_1List.map((li, i) => <li key={i}><LinkifyText text={li} /></li>)}</ul>
      <p><LinkifyText text={c.art2_1After} /></p>

      <h3>{c.art2_2Title}</h3>
      <p><LinkifyText text={c.art2_2Intro} /></p>
      <ul>{c.art2_2List.map((li, i) => <li key={i}><LinkifyText text={li} /></li>)}</ul>
      {c.art2_2After.map((p, i) => <p key={i}><LinkifyText text={p} /></p>)}

      <h3>{c.art2_3Title}</h3>
      <p><LinkifyText text={c.art2_3Intro} /></p>
      <ul>{c.art2_3List.map((li, i) => <li key={i}><LinkifyText text={li} /></li>)}</ul>

      <h3>{c.art2_4Title}</h3>
      <p><LinkifyText text={c.art2_4Intro} /></p>
      <ul>{c.art2_4List.map((li, i) => <li key={i}><LinkifyText text={li} /></li>)}</ul>
      <p><LinkifyText text={c.art2_4After} /></p>

      <h2>{c.art3Title}</h2>
      <p><LinkifyText text={c.art3Intro} /></p>
      <div className="overflow-x-auto my-6 rounded-xl border border-border">
        <table className="min-w-full">
          <thead>
            <tr className="bg-muted">
              {c.art3TableHeaders.map((h, i) => (
                <th key={i} className="border-b border-border px-4 py-3 text-left text-foreground text-sm font-semibold">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="text-muted-foreground text-sm">
            {c.art3Rows.map((row, i) => (
              <tr key={i} className="border-b border-border/60 last:border-b-0">
                {row.map((cell, j) => (
                  <td key={j} className="px-4 py-3 align-top"><LinkifyText text={cell} /></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>{c.art4Title}</h2>
      <p><LinkifyText text={c.art4Intro} /></p>
      <ul>{c.art4List.map((li, i) => <li key={i}><LinkifyText text={li} /></li>)}</ul>
      {c.art4After.map((p, i) => <p key={i}><LinkifyText text={p} /></p>)}

      <h2>{c.art5Title}</h2>
      {c.art5.map((p, i) => <p key={i}><LinkifyText text={p} /></p>)}

      <h2>{c.art6Title}</h2>
      <p><LinkifyText text={c.art6Intro} /></p>
      <ul>{c.art6List.map((li, i) => <li key={i}><LinkifyText text={li} /></li>)}</ul>
      {c.art6After.map((p, i) => <p key={i}><LinkifyText text={p} /></p>)}

      <h2>{c.art7Title}</h2>
      {c.art7.map((p, i) => <p key={i}><LinkifyText text={p} /></p>)}
      <p><strong>{c.art7RetentionLabel}</strong></p>
      <p><LinkifyText text={c.art7Retention} /></p>
      <ul>{c.art7RetentionList.map((li, i) => <li key={i}><LinkifyText text={li} /></li>)}</ul>
      <p><LinkifyText text={c.art7After} /></p>

      <h2>{c.art8Title}</h2>
      {c.art8.map((p, i) => <p key={i}><LinkifyText text={p} /></p>)}

      <h2>{c.art9Title}</h2>
      <p><LinkifyText text={c.art9Intro} /></p>
      <p><LinkifyText text={c.art9Postal} /></p>
      <p><LinkifyText text={c.art9Phone} /></p>
      <p><LinkifyText text={c.art9Website} /></p>
    </LegalLayout>
  );
}
