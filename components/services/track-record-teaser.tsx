import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "@/components/animations/reveal";

/**
 * Extrait de preuve ciblé pour une page pilier : quelques KPIs de la tranche
 * pertinente + lien vers le track record complet /resultats.
 * Chaque pilier montre des chiffres différents (zéro contenu dupliqué).
 */
export function TrackRecordTeaser({
  eyebrow,
  title,
  lede,
  stats,
}: {
  eyebrow: string;
  title: ReactNode;
  lede: string;
  stats: { v: string; l: string }[];
}) {
  return (
    <section className="border-y border-border bg-bg-2/40">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28 lg:px-12">
        <div className="grid gap-8 md:grid-cols-[1.1fr_1fr] md:items-end">
          <Reveal>
            <p className="font-mono text-[11.5px] text-muted-2">{eyebrow}</p>
            <h2 className="mt-3 text-[clamp(1.7rem,3.2vw,2.5rem)] font-bold leading-[1.08] tracking-[-0.03em]">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-[54ch] text-[15px] leading-relaxed text-muted">{lede}</p>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-10 grid grid-cols-2 gap-3.5 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.l} className="rounded-2xl border border-border bg-bg-2 p-5">
                <p className="text-3xl font-extrabold tracking-tight text-text md:text-4xl">{s.v}</p>
                <p className="mt-2 text-[13px] leading-snug text-muted-2">{s.l}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Link
            href="/resultats"
            className="group mt-8 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-5 py-2.5 text-[14px] font-semibold text-accent transition-colors hover:bg-accent/10"
          >
            Voir le track record des 6 comptes
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
