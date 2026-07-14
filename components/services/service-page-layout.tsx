import Link from "next/link";
import type { ReactNode } from "react";
import { HeroSpotlight } from "@/components/animations/hero-spotlight";
import { Reveal } from "@/components/animations/reveal";
import { Stagger, StaggerItem } from "@/components/animations/stagger";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { DoubleBezelCard, CardGlow } from "@/components/marketing/double-bezel-card";
import { FAQ } from "@/components/marketing/faq";

export type ServicePageData = {
  breadcrumb: string;
  h1: ReactNode;
  lede: ReactNode;
  cta: string;
  asideFacts: { strong: string; rest: string }[];
  definitionTitle: string;
  definition: string;
  calloutText: string;
  deliverablesTitle: string;
  deliverablesIntro: string;
  deliverables: { strong: string; rest: string }[];
  stepsTitle?: string;
  stepsIntro?: string;
  steps?: { t: string; d: string; m: string }[];
  tableTitle: string;
  tableHead: [string, string, string];
  tableRows: [string, string, string][];
  tableNote?: ReactNode;
  extraSection?: ReactNode;
  faqTitle: string;
  faq: { q: string; a: string }[];
  ctaFinalTitle: ReactNode;
  ctaFinalText: string;
  crossLinks: ReactNode;
};

/** Layout partagé des pages pillar service : mêmes sections, données injectées. */
export function ServicePageLayout({ data }: { data: ServicePageData }) {
  return (
    <article>
      {/* Breadcrumb */}
      <nav aria-label="Fil d'Ariane" className="mx-auto max-w-7xl px-4 pt-6 md:px-8 md:pt-10 lg:px-12">
        <ol className="flex flex-wrap items-center gap-2 text-[12.5px] text-muted-2">
          <li>
            <Link href="/" className="transition-colors hover:text-text">Accueil</Link>
          </li>
          <li aria-hidden>/</li>
          <li aria-current="page" className="text-muted">{data.breadcrumb}</li>
        </ol>
      </nav>

      {/* Hero */}
      <HeroSpotlight>
        <div className="mx-auto grid max-w-7xl items-end gap-10 px-4 pb-16 pt-8 md:grid-cols-[1.5fr_1fr] md:px-8 md:pb-20 md:pt-12 lg:px-12">
          <div>
            <Reveal>
              <h1 className="text-[clamp(2.2rem,4.8vw,3.7rem)] font-extrabold leading-[1.04] tracking-[-0.03em]">
                {data.h1}
              </h1>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{data.lede}</p>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-8">
                <MagneticButton href="/contact">{data.cta}</MagneticButton>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <DoubleBezelCard className="relative overflow-hidden">
              <CardGlow position="top-right" />
              <div className="relative space-y-4">
                {data.asideFacts.map((f) => (
                  <p key={f.strong} className="border-b border-border pb-4 text-[14px] leading-relaxed text-muted last:border-0 last:pb-0">
                    <strong className="text-text">{f.strong}</strong> {f.rest}
                  </p>
                ))}
              </div>
            </DoubleBezelCard>
          </Reveal>
        </div>
      </HeroSpotlight>

      {/* Définition citable IA */}
      <section className="border-y border-border bg-bg-2/40">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
            <Reveal>
              <h2 className="text-[clamp(1.7rem,3.2vw,2.5rem)] font-bold leading-[1.08] tracking-[-0.03em]">
                {data.definitionTitle}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="text-[16px] leading-relaxed text-muted">
                <p>{data.definition}</p>
                <div className="callout">
                  <span className="callout-label">À retenir</span>
                  <p>{data.calloutText}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Livrables */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="text-[clamp(1.7rem,3.2vw,2.5rem)] font-bold leading-[1.08] tracking-[-0.03em]">
                {data.deliverablesTitle}
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-muted">{data.deliverablesIntro}</p>
            </Reveal>
          </div>
          <Stagger className="grid gap-3.5 sm:grid-cols-2">
            {data.deliverables.map((d) => (
              <StaggerItem key={d.strong}>
                <div className="group h-full rounded-3xl border border-border bg-bg-2 p-5 transition-colors duration-300 hover:border-accent/30">
                  <p className="text-[15px] font-semibold text-text group-hover:text-accent">
                    {d.strong}
                  </p>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted">{d.rest}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Étapes (optionnel) */}
      {data.steps && (
        <section className="border-y border-border bg-bg-2/40">
          <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <Reveal>
                  <h2 className="text-[clamp(1.7rem,3.2vw,2.5rem)] font-bold leading-[1.08] tracking-[-0.03em]">
                    {data.stepsTitle}
                  </h2>
                  <p className="mt-4 text-[15px] leading-relaxed text-muted">{data.stepsIntro}</p>
                </Reveal>
              </div>
              <Stagger className="space-y-3.5">
                {data.steps.map((s, i) => (
                  <StaggerItem key={s.t}>
                    <DoubleBezelCard>
                      <div className="flex items-start gap-5">
                        <span className="font-mono text-sm text-accent">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-baseline justify-between gap-2">
                            <h3 className="text-lg font-bold tracking-tight">{s.t}</h3>
                            <span className="text-[11.5px] text-muted-2">{s.m}</span>
                          </div>
                          <p className="mt-2 text-[14px] leading-relaxed text-muted">{s.d}</p>
                        </div>
                      </div>
                    </DoubleBezelCard>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>
      )}

      {/* Tableau */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28 lg:px-12">
        <Reveal>
          <h2 className="text-[clamp(1.7rem,3.2vw,2.5rem)] font-bold leading-[1.08] tracking-[-0.03em]">
            {data.tableTitle}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-9 overflow-x-auto rounded-2xl border border-border">
            <table className="w-full border-collapse text-[14px]">
              <thead className="bg-bg-3">
                <tr>
                  {data.tableHead.map((h) => (
                    <th
                      key={h}
                      scope="col"
                      className="border-b border-border px-4 py-3.5 text-left text-[12px] font-semibold uppercase tracking-[0.06em] text-text"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.tableRows.map((row, i) => (
                  <tr key={i} className="even:bg-white/[0.015]">
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className={`border-b border-border px-4 py-3.5 align-top last:border-b-0 ${
                          j === 0 ? "font-semibold text-text" : "text-muted"
                        } ${i === data.tableRows.length - 1 ? "border-b-0" : ""}`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
        {data.tableNote && (
          <Reveal delay={0.15}>
            <p className="mt-5 max-w-2xl text-[13.5px] leading-relaxed text-muted-2">
              {data.tableNote}
            </p>
          </Reveal>
        )}
      </section>

      {data.extraSection}

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 pb-20 md:px-8 md:pb-28 lg:px-12">
        <Reveal>
          <h2 className="text-[clamp(1.7rem,3.2vw,2.5rem)] font-bold leading-[1.08] tracking-[-0.03em]">
            {data.faqTitle}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <FAQ items={data.faq} />
        </Reveal>
      </section>

      {/* CTA final */}
      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-8 lg:px-12">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-bg-2 px-7 py-12 md:px-12 md:py-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-accent/10 blur-3xl"
            />
            <div className="relative flex flex-wrap items-center justify-between gap-6">
              <div className="max-w-xl">
                <h2 className="text-[clamp(1.6rem,3vw,2.3rem)] font-extrabold leading-[1.08] tracking-[-0.03em]">
                  {data.ctaFinalTitle}
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{data.ctaFinalText}</p>
              </div>
              <MagneticButton href="/contact">{data.cta}</MagneticButton>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Cross-links */}
      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-8 lg:px-12">
        <p className="border-t border-border pt-6 text-[13.5px] leading-relaxed text-muted-2">
          {data.crossLinks}
        </p>
      </section>
    </article>
  );
}
