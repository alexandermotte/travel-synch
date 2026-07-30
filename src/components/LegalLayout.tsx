import { ReactNode } from "react";
import { ExecPassHeader } from "@/components/ExecPassHeader";
import { ExecPassFooter } from "@/components/ExecPassFooter";
import { Seo } from "@/components/Seo";

interface LegalLayoutProps {
  badge: string;
  title: string;
  lastUpdated?: string;
  seoTitle: string;
  seoDescription: string;
  path: string;
  children: ReactNode;
}

/** Shared shell for the Exec Pass legal pages. */
export const LegalLayout = ({
  badge,
  title,
  lastUpdated,
  seoTitle,
  seoDescription,
  path,
  children,
}: LegalLayoutProps) => (
  <div className="min-h-screen flex flex-col bg-background">
    <Seo title={seoTitle} description={seoDescription} path={path} />
    <ExecPassHeader />

    <main className="flex-1">
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-muted border border-border text-muted-foreground text-xs font-medium tracking-wider uppercase mb-6">
              {badge}
            </span>
            <h1 className="ep-heading text-4xl md:text-5xl font-bold text-foreground mb-4">{title}</h1>
            {lastUpdated && <p className="text-muted-foreground text-sm">{lastUpdated}</p>}
          </div>

          <div
            className="prose prose-lg max-w-none space-y-6 text-left
            [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-4
            [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-foreground/90 [&_h3]:mt-6 [&_h3]:mb-3
            [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:text-foreground/90 [&_h4]:mt-5 [&_h4]:mb-2
            [&_p]:text-muted-foreground [&_p]:leading-relaxed
            [&_li]:text-muted-foreground
            [&_strong]:text-foreground/90
            [&_a]:text-primary [&_a]:hover:underline
            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2
            [&_em]:italic"
          >
            {children}
          </div>
        </div>
      </section>
    </main>

    <ExecPassFooter />
  </div>
);

export default LegalLayout;
