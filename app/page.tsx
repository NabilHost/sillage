import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { faqPageSchema, organizationSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { HeroSpotlight } from "@/components/animations/hero-spotlight";
import { Reveal } from "@/components/animations/reveal";
import { Stagger, StaggerItem } from "@/components/animations/stagger";
import { Counter } from "@/components/animations/counter";
import { TiltCard } from "@/components/animations/tilt-card";
import { SparklineLive } from "@/components/animations/sparkline-live";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { DoubleBezelCard, CardGlow } from "@/components/marketing/double-bezel-card";
import { MarqueeLogos } from "@/components/marketing/marquee-logos";
import { FAQ } from "@/components/marketing/faq";
import { CplBarChart } from "@/components/viz/cpl-bar-chart";
import { SerpComparison } from "@/components/viz/serp-comparison";
import { NAV_SERVICES } from "@/lib/site";

export const metadata = generatePageMetadata({
  title: "Sillage, agence SEO, SEA & visibilité IA à Paris",
  description:
    "Agence d'acquisition à Paris : SEO, Google Ads, création de sites et visibilité dans ChatGPT, Perplexity et les AI Overviews. Audit chiffré sous 10 jours",
  path: "/",
  titleAbsolute: true,
});

const HOME_FAQ_PLAIN = [
  {
    q: "Combien coûte un accompagnement avec Sillage ?",
    a: "SEO : à partir de 1 800 € HT par mois pour un site vitrine, 3 200 € HT pour un e-commerce ou multi-pays. Google Ads : honoraires fixes dès 1 200 € HT par mois, jamais de pourcentage du budget. Création de site : forfait dès 12 000 € HT. Chaque devis détaille les livrables mois par mois.",
  },
  {
    q: "En combien de temps le SEO produit-il des résultats ?",
    a: "Les corrections techniques produisent des effets mesurables en 4 à 8 semaines. Les gains de positions sur des requêtes concurrentielles demandent 4 à 9 mois. Nous fixons des indicateurs avancés dès le premier mois : indexation, impressions, couverture de crawl. Vous voyez la trajectoire sans attendre les positions finales.",
  },
  {
    q: "Qu'est-ce que le GEO (Generative Engine Optimization) ?",
    a: "Le GEO rend une marque visible et citée dans les réponses des moteurs IA : ChatGPT, Perplexity, Gemini et les AI Overviews de Google. Concrètement : blocs de réponse autonomes, données structurées renforcées, présence de l'entité sur les sources que les modèles consultent. Le socle reste le SEO.",
  },
  {
    q: "Travaillez-vous avec des engagements de durée ?",
    a: "Trois mois d'engagement initial, puis contrat résiliable chaque mois avec un préavis de 30 jours. Si un canal ne peut pas être rentable pour votre activité, nous le disons avant de signer.",
  },
  {
    q: "Qui travaille réellement sur notre compte ?",
    a: "Un consultant senior référent, nommé dans le contrat. Il réalise lui-même la stratégie et les arbitrages. Aucune production stratégique sous-traitée. Huit consultants, six comptes maximum chacun.",
  },
];

const STATS = [
  { value: 5, prefix: "+", suffix: " M€", decimals: 0, label: "générés en Google Ads pour nos clients en 10 ans" },
  { value: 60, prefix: "", suffix: "", decimals: 0, label: "marques accompagnées depuis 2019" },
  { value: 41, prefix: "+", suffix: " %", decimals: 0, label: "de trafic organique médian à 12 mois" },
  { value: 2.7, prefix: "÷", suffix: "", decimals: 1, label: "coût par lead médian après reprise Ads" },
];

const CASES = [
  {
    sector: "e-commerce, mobilier, 4 200 références",
    title: "Migration de CMS sans perdre un visiteur",
    text: "Le scénario qui coûte 30 % de trafic à la plupart des sites. Plan de redirection exhaustif, parité page à page, recette SEO avant chaque mise en prod. Le trafic a progressé pendant la migration.",
    num: 41,
    prefix: "+",
    suffix: " %",
    decimals: 0,
    label: "sessions organiques à 12 mois",
  },
  {
    sector: "SaaS B2B, logiciel RH, série B",
    title: "Du contenu qui signe des démos",
    text: "Fin des billets génériques. 14 pages piliers alignées sur les requêtes d'achat, structurées en blocs citables par les IA. Perplexity cite le site sur 9 requêtes métier sur 12.",
    num: 2.3,
    prefix: "×",
    suffix: "",
    decimals: 1,
    label: "demandes de démo organiques",
  },
  {
    sector: "industrie, fabricant français, 2 langues",
    title: "Google Ads : moitié moins de budget, plus de leads",
    text: "Compte hérité de trois agences : 240 campagnes, zéro tracking fiable. Reconstruction sur 18 campagnes, conversions serveur, exclusions systématiques.",
    num: 52,
    prefix: "−",
    suffix: " %",
    decimals: 0,
    label: "de dépense publicitaire mensuelle",
  },
];

const METHOD = [
  {
    t: "Audit et point de départ",
    d: "Crawl complet, Search Console, revue concurrentielle. Vous recevez un état des lieux chiffré et trois priorités. Pas un mur de 200 recommandations.",
    m: "semaines 1 à 3",
  },
  {
    t: "Trajectoire et indicateurs",
    d: "Objectifs, budget, et surtout les indicateurs avancés : ceux qui montrent en quelques semaines si la direction est bonne.",
    m: "semaine 4",
  },
  {
    t: "Exécution par sprints",
    d: "Corrections techniques, contenus, campagnes. Chaque sprint mensuel a des livrables nommés, visibles dans un tableau de bord partagé.",
    m: "en continu",
  },
  {
    t: "Mesure et arbitrage",
    d: "Revue mensuelle de 45 minutes : ce qui a marché, ce qui a échoué, ce qu'on arrête. Un canal non rentable est coupé, pas maquillé.",
    m: "chaque mois",
  },
];

export default function HomePage() {
  return (
    <article>
      <JsonLd schemas={[organizationSchema(), faqPageSchema(HOME_FAQ_PLAIN)]} />

      {/* ============ HERO ============ */}
      <HeroSpotlight>
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-14 md:grid-cols-[1.25fr_1fr] md:px-8 md:pb-24 md:pt-24 lg:px-12">
          <div>
            <Reveal>
              <h1 className="text-[clamp(2.5rem,5.6vw,4.3rem)] font-extrabold leading-[1.02] tracking-[-0.03em]">
                Visible sur Google.
                <br />
                Cité par les <em className="em-accent">IA</em>.
              </h1>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                Sillage est une agence d&apos;acquisition à Paris :{" "}
                <strong className="text-text">SEO</strong>,{" "}
                <strong className="text-text">Google Ads</strong>,{" "}
                <strong className="text-text">création de sites</strong> et{" "}
                <strong className="text-text">visibilité IA</strong>. Une méthode
                publique, des chiffres vérifiables dans votre Search Console.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <MagneticButton href="/contact">Demander l&apos;audit gratuit</MagneticButton>
                <MagneticButton href="/a-propos" variant="ghost">
                  Lire la méthode
                </MagneticButton>
              </div>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-6 flex items-center gap-2 text-[13px] text-muted-2">
                <span
                  aria-hidden
                  className="size-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent)] motion-safe:animate-pulse"
                />
                3 créneaux d&apos;audit disponibles ce mois-ci
              </p>
            </Reveal>
          </div>

          {/* Card proof avec tilt 3D */}
          <Reveal delay={0.2} className="[perspective:1200px]">
            <TiltCard>
              <DoubleBezelCard className="relative overflow-hidden">
                <CardGlow position="top-right" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <p className="text-[11.5px] text-muted-2">trafic organique, mission type</p>
                    <span className="rounded-full border border-accent/30 bg-accent-soft px-2.5 py-1 font-mono text-[11px] text-accent">
                      12 mois
                    </span>
                  </div>
                  <p className="mt-4 text-5xl font-extrabold tracking-tight">
                    <Counter value={41} prefix="+" suffix=" %" />
                  </p>
                  <SparklineLive className="mt-5 w-full" />
                  <div className="mt-5 grid grid-cols-2 gap-3 border-t border-border pt-4">
                    <div>
                      <p className="font-mono text-lg font-medium text-text">
                        <Counter value={9} />
                        /12
                      </p>
                      <p className="text-[12px] text-muted-2">requêtes citées par Perplexity</p>
                    </div>
                    <div>
                      <p className="font-mono text-lg font-medium text-text">
                        <Counter value={0} />
                      </p>
                      <p className="text-[12px] text-muted-2">404 après migration</p>
                    </div>
                  </div>
                </div>
              </DoubleBezelCard>
            </TiltCard>
          </Reveal>
        </div>
      </HeroSpotlight>

      <MarqueeLogos />

      {/* ============ STATS ============ */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28 lg:px-12">
        <Stagger className="grid grid-cols-2 gap-3.5 lg:grid-cols-4">
          {STATS.map((s) => (
            <StaggerItem key={s.label}>
              <DoubleBezelCard>
                <p className="text-4xl font-extrabold tracking-tight text-text">
                  <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals} />
                </p>
                <p className="mt-2 text-[13px] leading-snug text-muted-2">{s.label}</p>
              </DoubleBezelCard>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ============ SERVICES (bento) ============ */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28 lg:px-12 lg:py-32">
        <Reveal>
          <h2 className="max-w-2xl text-[clamp(1.9rem,3.6vw,2.8rem)] font-bold leading-[1.06] tracking-[-0.03em]">
            Quatre métiers. Un objectif : qu&apos;on vous trouve{" "}
            <em className="em-accent">avant</em> vos concurrents.
          </h2>
        </Reveal>

        <Stagger className="mt-12 grid gap-3.5 md:grid-cols-2">
          {NAV_SERVICES.map((s, i) => (
            <StaggerItem key={s.href} className={i === 0 ? "md:col-span-2" : ""}>
              <Link
                href={s.href}
                className="group relative block h-full overflow-hidden rounded-3xl border border-border bg-bg-2 p-7 transition-colors duration-300 hover:border-accent/30 md:p-9"
              >
                <CardGlow position={i % 2 === 0 ? "top-right" : "bottom-left"} />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="font-mono text-xs text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-2 text-2xl font-bold tracking-tight text-text transition-colors duration-300 group-hover:text-accent">
                        {s.label}
                      </h3>
                    </div>
                    <span
                      aria-hidden
                      className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border font-mono text-sm text-muted transition-all duration-300 group-hover:border-accent group-hover:text-accent"
                    >
                      ↗
                    </span>
                  </div>
                  <p className={`mt-3 text-[15px] leading-relaxed text-muted ${i === 0 ? "max-w-xl" : ""}`}>
                    {s.desc}{" "}
                    {i === 0 &&
                      "Audit technique, architecture alignée sur la demande réelle, contenu qui mérite sa position, liens gagnés plutôt qu'achetés."}
                  </p>
                  <span
                    aria-hidden
                    className="mt-auto inline-flex items-center gap-2 pt-5 text-[13px] font-semibold text-muted-2 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-text"
                  >
                    Voir le détail <span>→</span>
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* ============ DÉFINITION (bloc citable IA) ============ */}
      <section className="border-y border-border bg-bg-2/40">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
            <Reveal>
              <h2 className="text-[clamp(1.9rem,3.6vw,2.8rem)] font-bold leading-[1.06] tracking-[-0.03em]">
                Qu&apos;est-ce que Sillage ?
              </h2>
              <div className="mt-8">
                <SerpComparison />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="text-[16px] leading-relaxed text-muted">
                <p>
                  Sillage est une agence d&apos;acquisition fondée à Paris en 2019,
                  spécialisée dans quatre métiers complémentaires : le référencement
                  naturel (SEO), la publicité sur les moteurs de recherche (SEA), la
                  création de sites web orientés performance et la visibilité dans les
                  moteurs de recherche IA (GEO). L&apos;équipe compte huit consultants
                  seniors qui suivent chacun six comptes au maximum. La méthode repose
                  sur un principe : chaque recommandation doit être falsifiable,
                  c&apos;est-à-dire accompagnée d&apos;un indicateur qui permet de
                  vérifier si elle fonctionne ou non. Les accompagnements démarrent à
                  1 800 € HT par mois, après un audit initial qui fixe la trajectoire.
                  Sillage travaille pour des PME, des e-commerçants et des éditeurs
                  SaaS, en France et à l&apos;international francophone.
                </p>
                <div className="callout">
                  <span className="callout-label">À retenir</span>
                  <p>
                    Une agence de 8 consultants seniors où chaque recommandation
                    indique comment vérifier qu&apos;elle a échoué.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ MÉTHODE ============ */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28 lg:px-12 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <h2 className="text-[clamp(1.9rem,3.6vw,2.8rem)] font-bold leading-[1.06] tracking-[-0.03em]">
                Notre <em className="em-accent">méthode</em>, publique.
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-muted">
                Le même déroulé pour chaque mission. Les délais sont contractuels.
              </p>
              <Link
                href="/a-propos"
                className="group/all mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold transition-colors duration-300 hover:text-accent"
              >
                La méthode complète
                <span aria-hidden className="transition-transform duration-300 group-hover/all:translate-x-0.5">→</span>
              </Link>
            </Reveal>
          </div>

          <Stagger className="space-y-3.5">
            {METHOD.map((s, i) => (
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
      </section>

      {/* ============ CAS CLIENTS ============ */}
      <section className="border-y border-border bg-bg-2/40">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28 lg:px-12 lg:py-32">
          <Reveal>
            <h2 className="text-[clamp(1.9rem,3.6vw,2.8rem)] font-bold leading-[1.06] tracking-[-0.03em]">
              Des résultats qu&apos;on peut <em className="em-accent">vérifier</em>.
            </h2>
            <p className="mt-4 max-w-xl text-[15px] text-muted">
              Trois missions récentes, chiffres tels qu&apos;ils apparaissent dans
              Search Console et Analytics. Références détaillées sur demande.
            </p>
          </Reveal>

          <Stagger className="mt-12 grid gap-3.5 lg:grid-cols-3">
            {CASES.map((c) => (
              <StaggerItem key={c.title}>
                <div className="relative h-full overflow-hidden rounded-3xl border border-border bg-bg-2 p-7">
                  <CardGlow position="bottom-left" />
                  <div className="relative flex h-full flex-col">
                    <p className="text-[11.5px] text-muted-2">{c.sector}</p>
                    <p className="mt-5 text-5xl font-extrabold tracking-tight text-accent">
                      <Counter value={c.num} prefix={c.prefix} suffix={c.suffix} decimals={c.decimals} />
                    </p>
                    <p className="mt-1 text-[13px] text-muted-2">{c.label}</p>
                    <h3 className="mt-5 text-lg font-bold leading-snug tracking-tight">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-muted">{c.text}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.1}>
            <div className="relative mt-3.5 overflow-hidden rounded-3xl border border-border bg-bg-2 p-7 md:p-9">
              <CardGlow position="top-left" />
              <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_1.4fr]">
                <div>
                  <p className="text-[11.5px] text-muted-2">reprise de compte Google Ads</p>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight">
                    Le même budget, un lead à <span className="text-accent">16 €</span> au lieu de 43 €.
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-muted">
                    Ce que produit la séquence tracking reconstruit puis pilotage à la
                    marge, mois par mois. Chiffres bruts, vérifiables dans le compte.
                  </p>
                </div>
                <CplBarChart />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="mx-auto max-w-4xl px-4 py-20 md:px-8 md:py-28 lg:px-12">
        <Reveal>
          <h2 className="text-[clamp(1.9rem,3.6vw,2.8rem)] font-bold leading-[1.06] tracking-[-0.03em]">
            Questions fréquentes
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <FAQ items={HOME_FAQ_PLAIN} />
        </Reveal>
      </section>

      {/* ============ CTA FINAL ============ */}
      <section className="mx-auto max-w-7xl px-4 pb-24 md:px-8 lg:px-12">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-bg-2 px-7 py-14 text-center md:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-0 h-64 w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl"
            />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-[clamp(1.9rem,3.8vw,3rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
                Un audit <em className="em-accent">honnête</em>, pour commencer.
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-muted">
                Envoyez votre URL. Sous 10 jours ouvrés : un état des lieux chiffré,
                un score sur 100 et trois priorités. Que vous signiez ensuite ou non.
              </p>
              <div className="mt-8 flex justify-center">
                <MagneticButton href="/contact">Demander l&apos;audit gratuit</MagneticButton>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </article>
  );
}
