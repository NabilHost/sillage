import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";
import { DoubleBezelCard } from "@/components/marketing/double-bezel-card";

const GOOGLE_ADS_ROWS = [
  { name: "Search · Marque FR", type: "Search", clicks: "3 487", cpc: "0,63 €", cost: "2 180 €", roas: "×4,9" },
  { name: "Shopping · Catalogue FR", type: "Shopping", clicks: "8 920", cpc: "0,54 €", cost: "4 850 €", roas: "×4,5" },
  { name: "Search · Hors marque", type: "Search", clicks: "2 540", cpc: "0,95 €", cost: "2 410 €", roas: "×3,1" },
  { name: "Performance Max · Audience large", type: "PMax", clicks: "1 080", cpc: "1,67 €", cost: "1 800 €", roas: "×2,8" },
];

const META_KPIS = [
  { value: "1 387", label: "Achats", delta: "↑ 186 %", down: false },
  { value: "14 520 €", label: "Dépense", delta: "↑ 42 %", down: false },
  { value: "58 433 €", label: "Valeur d’achat", delta: "↑ 156 %", down: false },
  { value: "×4,02", label: "ROAS", delta: "↑ 24 %", down: false },
  { value: "8,40 €", label: "CPM", delta: "↓ 12 %", down: true },
];

const META_CAMPAIGNS = [
  { name: "Acquisition · Look-alike 1 %", result: "523 achats · ×4,8" },
  { name: "Retargeting · Visiteurs 30 j", result: "412 achats · ×4,7" },
  { name: "Advantage+ Shopping", result: "328 achats · ×3,4" },
];

/** Section résultats du compte e-commerce : dashboards recréés dans la charte. */
export function SeaResults() {
  return (
    <section className="border-y border-border bg-bg-2/40" aria-labelledby="sea-results-title">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28 lg:px-12">
        <div className="mb-10 grid gap-8 md:grid-cols-[1.1fr_1fr] md:items-end">
          <Reveal>
            <h2
              id="sea-results-title"
              className="text-[clamp(1.7rem,3.2vw,2.5rem)] font-bold leading-[1.08] tracking-[-0.03em]"
            >
              Un compte, six mois, trois <em className="em-accent">dashboards</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-[54ch] text-[15px] leading-relaxed text-muted">
              E-commerce cosmétique premium, période du 25 novembre 2025 au 25 mai
              2026, après refonte du site. Interfaces reproduites dans notre
              charte, captures originales consultables en visio.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <DoubleBezelCard>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <p className="font-mono text-xs font-semibold text-accent">
                Google Ads · Toutes les campagnes
              </p>
              <span className="rounded-full border border-border bg-bg/60 px-2.5 py-0.5 font-mono text-[10px] text-muted">
                25 nov. 2025 - 25 mai 2026
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left text-[13px]">
                <thead>
                  <tr className="border-b border-border text-[11px] uppercase tracking-[0.06em] text-muted-2">
                    <th scope="col" className="py-2.5 pr-4 font-semibold">Campagne</th>
                    <th scope="col" className="py-2.5 pr-4 font-semibold">Type</th>
                    <th scope="col" className="py-2.5 pr-4 text-right font-semibold">Clics</th>
                    <th scope="col" className="py-2.5 pr-4 text-right font-semibold">CPC moy.</th>
                    <th scope="col" className="py-2.5 pr-4 text-right font-semibold">Coût</th>
                    <th scope="col" className="py-2.5 text-right font-semibold">ROAS</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  {GOOGLE_ADS_ROWS.map((r) => (
                    <tr key={r.name} className="border-b border-border/60">
                      <td className="py-2.5 pr-4 text-text">{r.name}</td>
                      <td className="py-2.5 pr-4">{r.type}</td>
                      <td className="py-2.5 pr-4 text-right font-mono">{r.clicks}</td>
                      <td className="py-2.5 pr-4 text-right font-mono">{r.cpc}</td>
                      <td className="py-2.5 pr-4 text-right font-mono">{r.cost}</td>
                      <td className="py-2.5 text-right font-mono font-semibold text-text">{r.roas}</td>
                    </tr>
                  ))}
                  <tr>
                    <td className="py-3 pr-4 font-semibold text-text">Total · 4 campagnes</td>
                    <td className="py-3 pr-4">486 000 impr.</td>
                    <td className="py-3 pr-4 text-right font-mono font-semibold text-text">16 027</td>
                    <td className="py-3 pr-4 text-right font-mono font-semibold text-text">0,70 €</td>
                    <td className="py-3 pr-4 text-right font-mono font-semibold text-text">11 240 €</td>
                    <td className="py-3 text-right font-mono font-bold text-accent">×4,0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </DoubleBezelCard>
        </Reveal>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <Reveal>
            <DoubleBezelCard className="h-full">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <p className="font-mono text-xs font-semibold text-accent">
                  Meta Ads · Même compte, même période
                </p>
                <span className="rounded-full border border-border bg-bg/60 px-2.5 py-0.5 font-mono text-[10px] text-muted">
                  6 mois
                </span>
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-3">
                {META_KPIS.map((k) => (
                  <div key={k.label}>
                    <p className="font-mono text-xl font-semibold tracking-[-0.02em] text-text md:text-2xl">
                      {k.value}
                    </p>
                    <p className="mt-1 text-[11.5px] leading-snug text-muted-2">
                      {k.label}{" "}
                      <span className={k.down ? "text-muted" : "text-accent"}>{k.delta}</span>
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t border-dashed border-border pt-4">
                <p className="mb-2 text-[10px] uppercase tracking-[0.08em] text-muted-2">
                  Campagnes actives
                </p>
                <ul className="space-y-1.5 text-[12.5px] text-muted">
                  {META_CAMPAIGNS.map((c) => (
                    <li key={c.name} className="flex justify-between gap-3">
                      <span>{c.name}</span>
                      <span className="font-mono text-text">{c.result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </DoubleBezelCard>
          </Reveal>

          <Reveal delay={0.1}>
            <DoubleBezelCard className="h-full">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <p className="font-mono text-xs font-semibold text-accent">
                  Search Console · Le SEO en parallèle
                </p>
                <span className="rounded-full border border-border bg-bg/60 px-2.5 py-0.5 font-mono text-[10px] text-muted">
                  3 derniers mois
                </span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="font-mono text-xl font-semibold tracking-[-0.02em] text-text md:text-2xl">4,59 k</p>
                  <p className="mt-1 text-[11.5px] text-muted-2">Clics organiques</p>
                </div>
                <div>
                  <p className="font-mono text-xl font-semibold tracking-[-0.02em] text-text md:text-2xl">199 k</p>
                  <p className="mt-1 text-[11.5px] text-muted-2">Impressions</p>
                </div>
                <div>
                  <p className="font-mono text-xl font-semibold tracking-[-0.02em] text-text md:text-2xl">8,5</p>
                  <p className="mt-1 text-[11.5px] text-muted-2">Position moyenne</p>
                </div>
              </div>
              <div className="mt-6 rounded-2xl border border-accent/20 bg-accent-soft p-4">
                <p className="text-[12.5px] leading-relaxed text-muted">
                  Résultat combiné des trois canaux :{" "}
                  <strong className="font-semibold text-text">192 226 € de ventes</strong>{" "}
                  sur les 30 derniers jours de la période.
                </p>
              </div>
            </DoubleBezelCard>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-[14px] text-muted">
            Ce compte fait partie d&apos;un track record de 6 comptes e-commerce, ROAS moyen 4,2×.
            <Link
              href="/resultats"
              className="group inline-flex items-center gap-1.5 font-semibold text-accent"
            >
              Voir les 6 comptes
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
