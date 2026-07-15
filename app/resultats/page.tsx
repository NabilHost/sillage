import { generatePageMetadata } from "@/lib/seo";
import { Reveal } from "@/components/animations/reveal";
import { Counter } from "@/components/animations/counter";
import { MagneticButton } from "@/components/animations/magnetic-button";

export const metadata = generatePageMetadata({
  title: "Résultats : track record de 6 comptes e-commerce | Essor",
  description:
    "Chiffres réels et vérifiables : 1,38 M€ de CA géré sur 6 boutiques, ROAS Google Ads et Meta autour de 4×, SEO en croissance. Captures anonymisées sous NDA.",
  path: "/resultats",
});

/* ------------------------------------------------------------------ */
/* Données (chiffres réels, comptes anonymisés · NDA)                  */
/* ------------------------------------------------------------------ */

const HEAD_STATS = [
  { value: 1.38, decimals: 2, suffix: " M€", label: "de CA géré sur 6 boutiques" },
  { value: 248, prefix: "+", suffix: " %", label: "de croissance annuelle médiane" },
  { value: 4.2, decimals: 1, suffix: "×", label: "de ROAS publicitaire moyen" },
  { value: 32.5, decimals: 1, suffix: " k", label: "de clics SEO cumulés" },
];

type Table = { cols: string[]; rows: string[][]; total?: string[]; roasCol: number };

const CASES: {
  n: string;
  sector: string;
  title: string;
  meta: string;
  kpis: { v: string; l: string; up?: string }[];
  gsc?: { clics: string; impr: string; ctr: string; pos: string; months: string };
  queries?: { q: string; c: string; i: string; ctr: string; p: string }[];
  googleAds?: Table;
  meta_ads?: Table;
  read: string;
}[] = [
  {
    n: "01",
    sector: "cosmétiques & beauté premium",
    title: "Refonte + acquisition multicanale",
    meta: "Compte géré · 6 mois",
    kpis: [
      { v: "192 226 €", l: "ventes Shopify · CA total" },
      { v: "4,59 k", l: "clics SEO · 3 mois" },
      { v: "199 k", l: "impressions SEO" },
      { v: "8,5", l: "position moyenne" },
    ],
    googleAds: {
      cols: ["Campagne", "Budget/j", "Impr.", "Clics", "CPC", "Coût", "ROAS"],
      rows: [
        ["Search · Brand FR", "40 €", "84 240", "3 487", "0,63 €", "2 180 €", "4,9×"],
        ["Shopping · Catalogue FR", "160 €", "214 580", "8 920", "0,54 €", "4 850 €", "4,5×"],
        ["Search · Non-Brand", "80 €", "128 410", "2 540", "0,95 €", "2 410 €", "3,1×"],
        ["Performance Max · Broad", "60 €", "58 770", "1 080", "1,67 €", "1 800 €", "2,8×"],
      ],
      total: ["Total", "", "486 000", "16 027", "0,70 €", "11 240 €", "4,00×"],
      roasCol: 6,
    },
    meta_ads: {
      cols: ["Campagne", "Achats", "Coût/achat", "Dépense", "Impr.", "ROAS", "Valeur"],
      rows: [
        ["Acquisition · Look-alike 1%", "523", "10,02 €", "5 240 €", "624 200", "4,8×", "25 152 €"],
        ["Retargeting · Visiteurs 30j", "412", "7,72 €", "3 180 €", "389 500", "4,7×", "14 946 €"],
        ["Advantage+ Shopping", "328", "12,96 €", "4 250 €", "505 800", "3,4×", "14 450 €"],
        ["Awareness · Reels", "124", "14,92 €", "1 850 €", "220 200", "2,1×", "3 885 €"],
      ],
      total: ["Total", "1 387", "10,47 €", "14 520 €", "1 739 700", "4,02×", "58 433 €"],
      roasCol: 5,
    },
    read: "192 k€ en 6 mois : 45 k€ via Google Ads (dépense 11 240 €, ROAS 4,00×), 58 k€ via Meta Ads (dépense 14 520 €, ROAS 4,02×), le reste en SEO et direct. Le retargeting Meta atteint 4,7× sur les visiteurs de 30 jours.",
  },
  {
    n: "02",
    sector: "mode homme premium",
    title: "DTC mode & accessoires",
    meta: "Compte géré · 6 mois",
    kpis: [
      { v: "34 600 €", l: "ventes · 6 mois", up: "+246 %" },
      { v: "837", l: "commandes", up: "+221 %" },
      { v: "41,3 €", l: "panier moyen" },
      { v: "2,15 %", l: "taux de conversion" },
    ],
    gsc: { clics: "2,14 k", impr: "84 k", ctr: "2,5 %", pos: "12,3", months: "3 mois" },
    queries: [
      { q: "veste cuir homme premium", c: "384", i: "5 820", ctr: "6,6 %", p: "4,2" },
      { q: "chemise lin coton homme", c: "298", i: "8 240", ctr: "3,6 %", p: "7,8" },
      { q: "mode homme éthique", c: "214", i: "12 480", ctr: "1,7 %", p: "10,5" },
      { q: "marque vêtements homme français", c: "186", i: "18 920", ctr: "1,0 %", p: "13,8" },
      { q: "pantalon chino premium", c: "142", i: "9 640", ctr: "1,5 %", p: "11,2" },
    ],
    read: "837 commandes, +246 %. Google Ads génère 14 k€ de CA (ROAS 4,45×), Meta Ads 14,7 k€ (ROAS 3,58×). Le SEO monte en puissance (position moyenne 12,3), fort potentiel restant.",
  },
  {
    n: "03",
    sector: "parfumerie de niche",
    title: "DTC parfum premium · panier élevé",
    meta: "Compte géré · 6 mois",
    kpis: [
      { v: "287 400 €", l: "ventes · 6 mois", up: "+189 %" },
      { v: "1 234", l: "commandes" },
      { v: "232,8 €", l: "panier moyen" },
      { v: "3,42 %", l: "taux de conversion" },
    ],
    gsc: { clics: "8,2 k", impr: "312 k", ctr: "2,6 %", pos: "6,4", months: "3 mois" },
    read: "287 k€ en 6 mois, panier moyen 232 €. Google Ads : 543 conversions, 24 480 € de coût, 119 952 € de valeur (ROAS 4,90×). Meta Ads : 612 achats, 31 050 € de dépense, 136 310 € de valeur (ROAS 4,39×).",
  },
  {
    n: "04",
    sector: "mode multi-marché · FR · DE · BE+NL",
    title: "DTC mode éthique à l'international",
    meta: "Compte géré · 6 mois · 3 marchés",
    kpis: [
      { v: "412 800 €", l: "ventes · 6 mois", up: "+312 %" },
      { v: "2 845", l: "commandes" },
      { v: "145,1 €", l: "panier moyen" },
      { v: "2,98 %", l: "taux de conversion" },
    ],
    meta_ads: {
      cols: ["Campagne", "Achats", "Coût/achat", "Dépense", "ROAS", "Valeur"],
      rows: [
        ["FR · Advantage+ · Fashion 25-45", "512", "31,72 €", "16 240 €", "4,9×", "79 576 €"],
        ["DE · Look-alike FR Buyers 1%", "386", "32,08 €", "12 380 €", "4,8×", "59 424 €"],
        ["BE+NL · Retargeting 14j", "324", "29,44 €", "9 540 €", "4,9×", "46 746 €"],
        ["EU · Awareness Reels (en pause)", "126", "56,19 €", "7 080 €", "2,4×", "16 992 €"],
      ],
      total: ["Total · 3 marchés", "1 348", "33,56 €", "45 240 €", "4,48×", "202 738 €"],
      roasCol: 4,
    },
    read: "412 k€ en 6 mois en montée à l'international (FR, DE, BE/NL). Meta Ads : 203 k€ de CA (ROAS 4,48×). Google Ads : 168 k€ (ROAS 4,40×). SEO à 12,4 k clics, position 5,8. La campagne Awareness a été mise en pause faute de ROAS suffisant : optimisation continue.",
  },
  {
    n: "05",
    sector: "restaurant artisanal local",
    title: "SEO local longue durée · acquisition organique stable",
    meta: "Compte géré · 16 mois",
    kpis: [
      { v: "1,19 k", l: "clics SEO · 16 mois" },
      { v: "63,6 k", l: "impressions" },
      { v: "1,9 %", l: "CTR moyen" },
      { v: "4,7", l: "position moyenne" },
    ],
    queries: [
      { q: "restaurant artisanal [ville]", c: "218", i: "4 240", ctr: "5,1 %", p: "2,8" },
      { q: "pizzeria authentique [ville]", c: "186", i: "3 820", ctr: "4,9 %", p: "3,2" },
      { q: "meilleur restaurant italien [ville]", c: "142", i: "8 640", ctr: "1,6 %", p: "5,4" },
      { q: "restaurant ouvert dimanche", c: "98", i: "12 480", ctr: "0,8 %", p: "6,2" },
      { q: "pizza [ville] livraison", c: "86", i: "9 320", ctr: "0,9 %", p: "4,8" },
    ],
    read: "1,19 k clics sur 16 mois, position moyenne 4,7 (haut de la première page). Trafic stable, léger recul récent en mai 2026 : une phase d'optimisation arrive. Cas typique de SEO local longue durée, où l'on entretient une position plutôt que d'exploser un volume.",
  },
  {
    n: "06",
    sector: "bijouterie premium e-commerce",
    title: "DTC bijoux artisanaux · scaling Meta-first",
    meta: "Compte géré · 6 mois",
    kpis: [
      { v: "364 200 €", l: "ventes · 6 mois", up: "+287 %" },
      { v: "1 892", l: "commandes" },
      { v: "192,5 €", l: "panier moyen" },
      { v: "3,82 %", l: "taux de conversion" },
    ],
    googleAds: {
      cols: ["Campagne", "Budget/j", "Impr.", "Conv.", "Coût", "ROAS", "Revenu"],
      rows: [
        ["Shopping · Bijoux faits main", "80 €", "142 800", "298", "12 840 €", "4,8×", "61 632 €"],
        ["Search · Brand", "22 €", "38 400", "182", "3 280 €", "4,9×", "16 072 €"],
        ["Performance Max · Catalogue", "60 €", "96 400", "142", "8 920 €", "3,4×", "30 328 €"],
        ["Search · Non-brand", "26 €", "34 600", "62", "3 900 €", "2,4×", "9 360 €"],
      ],
      total: ["Total", "", "312 200", "684", "28 940 €", "4,06×", "117 392 €"],
      roasCol: 5,
    },
    meta_ads: {
      cols: ["Campagne", "Achats", "Coût/achat", "Dépense", "ROAS", "Valeur"],
      rows: [
        ["Advantage+ Shopping · Catalogue", "412", "34,66 €", "14 280 €", "4,9×", "69 972 €"],
        ["Acquisition · Look-alike Buyers", "324", "38,70 €", "12 540 €", "4,9×", "61 446 €"],
        ["Retargeting · 7 jours", "218", "31,28 €", "6 820 €", "4,7×", "32 054 €"],
        ["Awareness · Creator Reels", "54", "88,52 €", "4 780 €", "1,6×", "7 648 €"],
      ],
      total: ["Total", "1 008", "38,12 €", "38 420 €", "4,45×", "171 120 €"],
      roasCol: 4,
    },
    read: "364 k€ en 6 mois sur des bijoux premium, panier moyen 192 €. Stratégie Meta-first : 171 k€ de CA (ROAS 4,45×), le retargeting 7 jours atteint 4,7×. Google Ads complète à 117 k€ (ROAS 4,06×), le Search Brand à 4,9×. Les créas visuelles portent la performance.",
  },
];

const SEO_PROOFS = [
  { name: "Compte F · mode & lifestyle", period: "3 mois", clics: "377", impr: "32,6 k", ctr: "1,2 %", pos: "7,6" },
  { name: "Compte G · services B2B", period: "3 mois", clics: "183", impr: "5,32 k", ctr: "3,4 %", pos: "9,2" },
  { name: "Compte H · nouveau site (lancement)", period: "28 jours", clics: "58", impr: "2,95 k", ctr: "2,0 %", pos: "19,6" },
];

/* ------------------------------------------------------------------ */
/* Composants présentiels                                              */
/* ------------------------------------------------------------------ */

function KpiBadges({ items }: { items: { v: string; l: string; up?: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {items.map((k) => (
        <div key={k.l} className="rounded-xl border border-border bg-bg-2 p-4">
          <p className="flex items-baseline gap-1.5">
            <span className="text-xl font-extrabold tracking-tight text-text">{k.v}</span>
            {k.up && <span className="font-mono text-[11px] text-accent">{k.up}</span>}
          </p>
          <p className="mt-1 text-[12px] leading-snug text-muted-2">{k.l}</p>
        </div>
      ))}
    </div>
  );
}

function CampaignTable({ label, table }: { label: string; table: Table }) {
  return (
    <div>
      <p className="mb-2 font-mono text-[11px] uppercase tracking-wider text-muted-2">{label}</p>
      <div className="overflow-x-auto rounded-xl border border-border bg-bg-2">
        <table className="w-full min-w-[560px] border-collapse text-[13px]">
          <thead>
            <tr className="border-b border-border">
              {table.cols.map((c, i) => (
                <th
                  key={c}
                  className={`px-3 py-2.5 font-mono text-[10.5px] uppercase tracking-wider text-muted-2 ${i === 0 ? "text-left" : "text-right"}`}
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((r) => (
              <tr key={r[0]} className="border-b border-border/60 last:border-0">
                {r.map((cell, i) => (
                  <td
                    key={i}
                    className={`px-3 py-2.5 ${i === 0 ? "text-left font-medium text-text" : "text-right font-mono text-muted"} ${i === table.roasCol ? "font-semibold text-accent" : ""}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          {table.total && (
            <tfoot>
              <tr className="border-t border-border bg-bg-3/40">
                {table.total.map((cell, i) => (
                  <td
                    key={i}
                    className={`px-3 py-2.5 font-semibold ${i === 0 ? "text-left text-text" : "text-right font-mono text-text"} ${i === table.roasCol ? "text-accent" : ""}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            </tfoot>
          )}
        </table>
      </div>
    </div>
  );
}

function GscStats({ gsc }: { gsc: { clics: string; impr: string; ctr: string; pos: string; months: string } }) {
  const tiles = [
    { v: gsc.clics, l: "clics" },
    { v: gsc.impr, l: "impressions" },
    { v: gsc.ctr, l: "CTR" },
    { v: gsc.pos, l: "position" },
  ];
  return (
    <div>
      <p className="mb-2 font-mono text-[11px] uppercase tracking-wider text-muted-2">
        Google Search Console · {gsc.months}
      </p>
      <div className="grid grid-cols-4 gap-2.5">
        {tiles.map((t) => (
          <div key={t.l} className="rounded-xl border border-border bg-bg-2 p-3 text-center">
            <p className="font-mono text-lg font-bold text-text">{t.v}</p>
            <p className="mt-0.5 text-[11px] text-muted-2">{t.l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function QueryTable({ rows }: { rows: { q: string; c: string; i: string; ctr: string; p: string }[] }) {
  return (
    <div>
      <p className="mb-2 font-mono text-[11px] uppercase tracking-wider text-muted-2">Top requêtes</p>
      <div className="overflow-x-auto rounded-xl border border-border bg-bg-2">
        <table className="w-full min-w-[460px] border-collapse text-[13px]">
          <thead>
            <tr className="border-b border-border">
              {["Requête", "Clics", "Impr.", "CTR", "Pos."].map((c, i) => (
                <th key={c} className={`px-3 py-2.5 font-mono text-[10.5px] uppercase tracking-wider text-muted-2 ${i === 0 ? "text-left" : "text-right"}`}>
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.q} className="border-b border-border/60 last:border-0">
                <td className="px-3 py-2.5 text-left font-medium text-text">{r.q}</td>
                <td className="px-3 py-2.5 text-right font-mono text-muted">{r.c}</td>
                <td className="px-3 py-2.5 text-right font-mono text-muted">{r.i}</td>
                <td className="px-3 py-2.5 text-right font-mono text-muted">{r.ctr}</td>
                <td className="px-3 py-2.5 text-right font-mono font-semibold text-accent">{r.p}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function ResultatsPage() {
  return (
    <article>
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-14 md:px-8 md:pt-24 lg:px-12">
        <Reveal>
          <p className="font-mono text-[11.5px] text-muted-2">
            track record · 6 comptes e-commerce premium
          </p>
          <h1 className="mt-3 max-w-3xl text-[clamp(2.2rem,4.6vw,3.6rem)] font-extrabold leading-[1.04] tracking-[-0.03em]">
            Une croissance prouvée,
            <br />
            des chiffres <em className="em-accent">vérifiables</em>.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Données réelles de comptes Shopify, Google Search Console, Google Ads et
            Meta Ads Manager. Identités clients anonymisées (NDA). Les dashboards
            sources sont consultables en lecture seule sur demande, après signature.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 grid grid-cols-2 gap-3.5 lg:grid-cols-4">
            {HEAD_STATS.map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-bg-2 p-5">
                <p className="text-4xl font-extrabold tracking-tight text-text">
                  <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals} />
                </p>
                <p className="mt-2 text-[13px] leading-snug text-muted-2">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* CAS */}
      <section className="mx-auto max-w-7xl space-y-3.5 px-4 py-10 md:px-8 lg:px-12">
        {CASES.map((c) => (
          <Reveal key={c.n}>
            <div className="rounded-3xl border border-border bg-bg-2/40 p-6 md:p-9">
              <div className="flex items-start gap-4">
                <span className="font-mono text-sm text-accent">{c.n}</span>
                <div>
                  <p className="text-[11.5px] text-muted-2">{c.sector}</p>
                  <h2 className="mt-1 text-xl font-bold tracking-tight md:text-2xl">{c.title}</h2>
                  <p className="mt-1 text-[13px] text-muted-2">{c.meta}</p>
                </div>
              </div>

              <div className="mt-6">
                <KpiBadges items={c.kpis} />
              </div>

              <div className="mt-6 space-y-6">
                {c.gsc && <GscStats gsc={c.gsc} />}
                {c.queries && <QueryTable rows={c.queries} />}
                {c.googleAds && <CampaignTable label="Google Ads · 6 mois" table={c.googleAds} />}
                {c.meta_ads && <CampaignTable label="Meta Ads Manager · 6 mois" table={c.meta_ads} />}
              </div>

              <div className="callout mt-6">
                <span className="callout-label">Lecture</span>
                <p>{c.read}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      {/* PREUVES SEO ADDITIONNELLES */}
      <section className="border-y border-border bg-bg-2/40">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20 lg:px-12">
          <Reveal>
            <h2 className="text-[clamp(1.7rem,3.2vw,2.4rem)] font-bold leading-[1.08] tracking-[-0.03em]">
              Preuves SEO additionnelles
            </h2>
            <p className="mt-3 max-w-2xl text-[15px] text-muted">
              Trois propriétés anonymisées (NDA), captures Search Console réelles de mai
              2026, à des stades de maturité différents. KPIs distincts des cas ci-dessus.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-3.5 md:grid-cols-3">
            {SEO_PROOFS.map((p) => (
              <Reveal key={p.name}>
                <div className="rounded-2xl border border-border bg-bg-2 p-6">
                  <p className="text-[13px] font-semibold text-text">{p.name}</p>
                  <p className="text-[11.5px] text-muted-2">{p.period}</p>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div><p className="font-mono text-lg font-bold text-text">{p.clics}</p><p className="text-[11px] text-muted-2">clics</p></div>
                    <div><p className="font-mono text-lg font-bold text-text">{p.impr}</p><p className="text-[11px] text-muted-2">impressions</p></div>
                    <div><p className="font-mono text-lg font-bold text-text">{p.ctr}</p><p className="text-[11px] text-muted-2">CTR</p></div>
                    <div><p className="font-mono text-lg font-bold text-accent">{p.pos}</p><p className="text-[11px] text-muted-2">position</p></div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-3xl text-[13px] leading-relaxed text-muted-2">
              Du site fraîchement lancé (Compte H, 28 jours, position 19,6) au compte mode
              établi (Compte F, position 7,6). Toutes les captures proviennent de comptes
              réels en gestion, distincts des cas 01 à 06. Données sources en lecture seule
              après signature d&apos;un NDA.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24 lg:px-12">
        <Reveal>
          <div className="rounded-3xl border border-accent/20 bg-bg-2 px-7 py-14 text-center md:py-16">
            <h2 className="mx-auto max-w-2xl text-[clamp(1.7rem,3.4vw,2.6rem)] font-extrabold leading-[1.06] tracking-[-0.03em]">
              Vos chiffres, la même méthode.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-muted">
              Envoyez votre URL : audit chiffré sous 10 jours ouvrés, avec les leviers
              prioritaires pour votre compte. Sans engagement.
            </p>
            <div className="mt-8 flex justify-center">
              <MagneticButton href="/contact">Demander l&apos;audit gratuit</MagneticButton>
            </div>
          </div>
        </Reveal>
      </section>
    </article>
  );
}
