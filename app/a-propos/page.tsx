import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { breadcrumbSchema, organizationSchema, personSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { HeroSpotlight } from "@/components/animations/hero-spotlight";
import { Reveal } from "@/components/animations/reveal";
import { Stagger, StaggerItem } from "@/components/animations/stagger";
import { Counter } from "@/components/animations/counter";
import { MagneticButton } from "@/components/animations/magnetic-button";
import { DoubleBezelCard, CardGlow } from "@/components/marketing/double-bezel-card";

export const metadata = generatePageMetadata({
  title: "Méthode & équipe : une agence qui montre son travail | Essor",
  description:
    "La méthode Essor : percevoir, analyser, valider, agir. Chaque recommandation est falsifiable. 8 consultants seniors, 6 comptes maximum chacun, zéro sous-traitance",
  path: "/a-propos",
  titleAbsolute: true,
});

const TEAM = [
  { name: "Nabil Brahim", role: "Directeur & fondateur, SEA", bio: "10 ans de Google Ads, plus de 5 M€ de chiffre d'affaires générés pour ses clients. Fonde Essor en 2024, arbitre les stratégies et garde la main sur trois comptes.", sameAs: ["https://www.linkedin.com/in/nabil-brahim"] },
  { name: "Claire Vasseur", role: "Directrice SEO", bio: "12 ans de SEO, ex-responsable acquisition d'un e-commerçant du top 50 français. Obsédée par la falsifiabilité : chaque recommandation porte son test.", sameAs: ["https://www.linkedin.com/in/claire-vasseur-seo"] },
  { name: "Inès Bellamy", role: "Consultante senior, GEO & contenu", bio: "Linguiste de formation. Conçoit les blocs de réponse et le panel de mesure de citation IA. Publie la veille trimestrielle.", sameAs: ["https://www.linkedin.com/in/ines-bellamy"] },
  { name: "Thomas Roussel", role: "Lead développeur", bio: "Next.js, Astro, Shopify. Garantit les Core Web Vitals contractuels et forme les équipes clientes à l'autonomie.", sameAs: ["https://www.linkedin.com/in/thomas-roussel-dev"] },
];

const PHASES = [
  { t: "Percevoir", d: "Collecter les signaux bruts sans les interpréter : crawl, Search Console, Analytics, parole des équipes de vente, lecture des SERP. Auditer aussi nos propres a priori.", m: "observer, écouter" },
  { t: "Analyser", d: "Réduire aux causes premières. Relier ce qui semble séparé : une chute de positions et une migration de CDN, par exemple. Ordonner les actions en graphe de dépendances.", m: "penser, connecter" },
  { t: "Valider", d: "Confronter le plan au réel : votre capacité d'exécution, votre voix de marque, vos utilisateurs. Poser le test de falsifiabilité sur chaque action retenue.", m: "éprouver, accepter" },
  { t: "Agir", d: "Livrer, mesurer, boucler. Les indicateurs avancés disent en semaines ce que les positions mettraient des mois à révéler.", m: "créer, faire croître" },
];

export default function AProposPage() {
  return (
    <article>
      <JsonLd
        schemas={[
          organizationSchema(),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Méthode & équipe", path: "/a-propos" },
          ]),
          ...TEAM.map((m) => personSchema({ name: m.name, jobTitle: m.role, sameAs: m.sameAs })),
        ]}
      />

      <nav aria-label="Fil d'Ariane" className="mx-auto max-w-7xl px-4 pt-6 md:px-8 md:pt-10 lg:px-12">
        <ol className="flex flex-wrap items-center gap-2 text-[12.5px] text-muted-2">
          <li><Link href="/" className="transition-colors hover:text-text">Accueil</Link></li>
          <li aria-hidden>/</li>
          <li aria-current="page" className="text-muted">Méthode &amp; équipe</li>
        </ol>
      </nav>

      <HeroSpotlight>
        <div className="mx-auto grid max-w-7xl items-end gap-10 px-4 pb-16 pt-8 md:grid-cols-[1.5fr_1fr] md:px-8 md:pb-20 md:pt-12 lg:px-12">
          <div>
            <Reveal>
              <h1 className="text-[clamp(2.2rem,4.8vw,3.7rem)] font-extrabold leading-[1.04] tracking-[-0.03em]">
                Une agence qui <em className="em-accent">montre</em> son travail.
              </h1>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
                Le marketing digital a un problème simple : on peut y facturer longtemps
                sans jamais rien prouver. Notre méthode rend cela impossible, y compris
                pour nous.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <DoubleBezelCard className="relative overflow-hidden">
              <CardGlow position="top-left" />
              <div className="relative grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-3xl font-extrabold"><Counter value={2024} /></p>
                  <p className="mt-1 text-[11.5px] text-muted-2">fondation, Paris</p>
                </div>
                <div>
                  <p className="text-3xl font-extrabold"><Counter value={8} /></p>
                  <p className="mt-1 text-[11.5px] text-muted-2">consultants seniors</p>
                </div>
                <div>
                  <p className="text-3xl font-extrabold"><Counter value={6} /></p>
                  <p className="mt-1 text-[11.5px] text-muted-2">comptes max chacun</p>
                </div>
              </div>
            </DoubleBezelCard>
          </Reveal>
        </div>
      </HeroSpotlight>

      <section className="border-y border-border bg-bg-2/40">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
            <Reveal>
              <h2 className="text-[clamp(1.7rem,3.2vw,2.5rem)] font-bold leading-[1.08] tracking-[-0.03em]">
                Le principe : la <em className="em-accent">falsifiabilité</em>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="text-[16px] leading-relaxed text-muted">
                <p>
                  Chaque recommandation que nous émettons est accompagnée de deux choses :
                  l&apos;observation qui la justifie, et le test qui permettrait de
                  constater qu&apos;elle a échoué. « Restructurer les pages catégories »
                  n&apos;est pas une recommandation. « Restructurer les pages catégories,
                  et si leurs impressions n&apos;augmentent pas de 20 % sous huit
                  semaines, l&apos;hypothèse était fausse » en est une.
                </p>
                <p className="mt-4">
                  Ce principe change la relation. Vous n&apos;avez pas à nous croire sur
                  parole : vous vérifiez chaque mois, dans un tableau de bord que vous
                  gardez si nous partons. Une hypothèse qui échoue est enterrée en revue
                  mensuelle, pas maquillée dans un rapport.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28 lg:px-12">
        <Reveal>
          <h2 className="text-[clamp(1.7rem,3.2vw,2.5rem)] font-bold leading-[1.08] tracking-[-0.03em]">
            Les quatre phases de chaque mission
          </h2>
        </Reveal>
        <Stagger className="mt-10 grid gap-3.5 md:grid-cols-2 lg:grid-cols-4">
          {PHASES.map((p, i) => (
            <StaggerItem key={p.t}>
              <DoubleBezelCard className="h-full">
                <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-xl font-bold tracking-tight">{p.t}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{p.d}</p>
                <p className="mt-4 text-[11.5px] text-muted-2">{p.m}</p>
              </DoubleBezelCard>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="border-y border-border bg-bg-2/40">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28 lg:px-12">
          <Reveal>
            <h2 className="text-[clamp(1.7rem,3.2vw,2.5rem)] font-bold leading-[1.08] tracking-[-0.03em]">
              Qui fait le travail ?
            </h2>
            <p className="mt-4 max-w-xl text-[15px] text-muted">
              Les personnes ci-dessous travaillent sur les comptes. Il n&apos;y a pas
              d&apos;étage commercial entre vous et elles.
            </p>
          </Reveal>
          <Stagger className="mt-10 grid gap-3.5 sm:grid-cols-2">
            {TEAM.map((m) => (
              <StaggerItem key={m.name}>
                <div className="group h-full rounded-3xl border border-border bg-bg-2 p-6 transition-colors duration-300 hover:border-accent/30">
                  <p className="text-[11.5px] text-muted-2">{m.role}</p>
                  <h3 className="mt-2 text-xl font-bold tracking-tight group-hover:text-accent">
                    {m.name}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted">{m.bio}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.1}>
            <p className="mt-6 text-[13.5px] text-muted-2">
              Quatre autres consultants complètent l&apos;équipe. Chacun est nommé dans
              les contrats des comptes qu&apos;il suit.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-12">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-bg-2 px-7 py-12 md:px-12 md:py-16">
            <div aria-hidden className="pointer-events-none absolute -left-16 -bottom-16 size-64 rounded-full bg-accent/10 blur-3xl" />
            <div className="relative flex flex-wrap items-center justify-between gap-6">
              <div className="max-w-xl">
                <h2 className="text-[clamp(1.6rem,3vw,2.3rem)] font-extrabold leading-[1.08] tracking-[-0.03em]">
                  Voyez la méthode appliquée à votre site.
                </h2>
                <p className="mt-3 text-[15px] text-muted">
                  L&apos;audit initial suit exactement ces quatre phases. Vous jugerez sur pièce.
                </p>
              </div>
              <MagneticButton href="/contact">Demander l&apos;audit</MagneticButton>
            </div>
          </div>
        </Reveal>
      </section>
    </article>
  );
}
