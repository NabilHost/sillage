import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import {
  articleSchema,
  breadcrumbSchema,
  faqPageSchema,
  organizationSchema,
  personSchema,
} from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { Reveal } from "@/components/animations/reveal";
import { FAQ } from "@/components/marketing/faq";
import { MagneticButton } from "@/components/animations/magnetic-button";

const AUTHOR = {
  name: "Claire Vasseur",
  jobTitle: "Directrice SEO",
  sameAs: ["https://www.linkedin.com/in/claire-vasseur-seo"],
};

export const metadata = generatePageMetadata({
  title: "Core Web Vitals 2026 : LCP, INP et CLS | Essor",
  description:
    "Les Core Web Vitals en 2026 : seuils de LCP, INP et CLS, données terrain contre labo, et comment corriger chaque goulot. L'INP a remplacé le FID depuis 2024",
  path: "/blog/core-web-vitals-guide-2026",
  titleAbsolute: true,
  ogType: "article",
});

const FAQ_PLAIN = [
  {
    q: "Quels sont les bons seuils des Core Web Vitals ?",
    a: "Un LCP sous 2,5 secondes, un INP sous 200 millisecondes et un CLS sous 0,1. Ces seuils sont jugés au 75e centile, donc pour les trois quarts de vos visiteurs, sur les données réelles de terrain collectées par Chrome, pas sur un test isolé.",
  },
  {
    q: "L'INP a-t-il remplacé le FID ?",
    a: "Oui, depuis mars 2024. L'INP mesure la réactivité sur toutes les interactions d'une visite, là où le FID ne regardait que la première et se montrait plus permissif. Tout guide qui parle encore de First Input Delay est périmé.",
  },
  {
    q: "Un bon score PageSpeed suffit-il ?",
    a: "Non. PageSpeed Insights et Lighthouse produisent une donnée de laboratoire : une seule visite simulée, utile pour déboguer. Google juge sur les données de terrain. Un score vert en local avec un terrain rouge reste un échec, car vos visiteurs ont des appareils plus lents.",
  },
  {
    q: "Les Core Web Vitals sont-ils un facteur de classement important ?",
    a: "C'est un facteur mineur, un départage entre pages de pertinence comparable. Le contenu domine. En revanche, la vitesse et la stabilité pèsent lourd sur la conversion et le taux de rebond : on optimise d'abord pour les visiteurs, le bonus de classement vient en prime.",
  },
];

export default function ArticlePage() {
  return (
    <article>
      <JsonLd
        schemas={[
          articleSchema({
            path: "/blog/core-web-vitals-guide-2026",
            headline: "Core Web Vitals 2026 : LCP, INP et CLS expliqués",
            description:
              "Seuils actuels des Core Web Vitals, données terrain contre labo, et comment corriger chaque goulot. L'INP a remplacé le FID en mars 2024.",
            datePublished: "2026-08-17",
            author: AUTHOR,
          }),
          personSchema(AUTHOR),
          organizationSchema(),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: "Core Web Vitals 2026", path: "/blog/core-web-vitals-guide-2026" },
          ]),
          faqPageSchema(FAQ_PLAIN),
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 pt-6 md:px-8 md:pt-10 lg:px-12">
        <nav aria-label="Fil d'Ariane">
          <ol className="flex flex-wrap items-center gap-2 text-[12.5px] text-muted-2">
            <li><Link href="/" className="transition-colors hover:text-text">Accueil</Link></li>
            <li aria-hidden>/</li>
            <li><Link href="/blog" className="transition-colors hover:text-text">Blog</Link></li>
            <li aria-hidden>/</li>
            <li aria-current="page" className="text-muted">Core Web Vitals 2026</li>
          </ol>
        </nav>

        <Reveal>
          <header className="mt-8">
            <p className="flex flex-wrap items-center gap-3 text-[12px] text-muted-2">
              <span className="rounded-full border border-accent/30 bg-accent-soft px-2.5 py-0.5 font-mono text-[11px] text-accent">
                Technique
              </span>
              <time dateTime="2026-08-17">17 août 2026</time>
              <span>8 min de lecture</span>
            </p>
            <h1 className="mt-4 text-[clamp(2rem,4.4vw,3.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
              Core Web Vitals 2026, le guide <em className="em-accent">clair</em>.
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              LCP, INP, CLS : trois sigles, trois seuils, et beaucoup de guides périmés
              depuis que l&apos;INP a remplacé le FID. Voici ce que Google mesure vraiment
              en 2026, et comment corriger chaque goulot.
            </p>
            <p className="mt-5 border-y border-border py-3 text-[13px] text-muted-2">
              Par Claire Vasseur, directrice SEO. Sources : documentation web.dev et
              Chrome UX Report relevées en juin 2026, plus nos recettes de sites.
            </p>
          </header>
        </Reveal>

        <div className="article-prose mt-10 pb-10">
          <h2 id="definition">Que sont les Core Web Vitals en 2026 ?</h2>
          <p>
            Les Core Web Vitals sont trois mesures d&apos;expérience que Google évalue
            sur vos vrais visiteurs. Le LCP, ou Largest Contentful Paint, chronomètre
            l&apos;affichage du plus gros élément visible : il doit rester sous 2,5
            secondes. L&apos;INP, ou Interaction to Next Paint, mesure la réactivité de
            la page à chaque clic ou frappe, avec une cible de 200 millisecondes. Le CLS,
            ou Cumulative Layout Shift, quantifie les sauts de mise en page pendant le
            chargement : il faut le maintenir sous 0,1. Ces seuils sont jugés au 75e
            centile, donc pour les trois quarts de vos visiteurs, sur 28 jours de données
            réelles. Le changement majeur date de mars 2024 : l&apos;INP a remplacé le
            FID, plus permissif. Conséquence pratique, tout guide qui parle encore de
            First Input Delay est périmé, et une page validée sous l&apos;ancienne
            métrique peut échouer sous la nouvelle.
          </p>

          <table>
            <thead>
              <tr>
                <th scope="col">Métrique</th>
                <th scope="col">Ce qu&apos;elle mesure</th>
                <th scope="col">Seuil « bon »</th>
                <th scope="col">Principal responsable</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>LCP</td>
                <td>Chargement du plus gros élément</td>
                <td>Sous 2,5 s</td>
                <td>Image ou police du hero, TTFB serveur</td>
              </tr>
              <tr>
                <td>INP</td>
                <td>Réactivité aux interactions</td>
                <td>Sous 200 ms</td>
                <td>JavaScript qui bloque le thread principal</td>
              </tr>
              <tr>
                <td>CLS</td>
                <td>Stabilité visuelle</td>
                <td>Sous 0,1</td>
                <td>Images sans dimensions, contenu inséré</td>
              </tr>
            </tbody>
          </table>

          <div className="callout">
            <span className="callout-label">À retenir</span>
            <p>
              Les trois seuils « bons », au 75e centile des vrais utilisateurs : LCP sous
              2,5 s, INP sous 200 ms, CLS sous 0,1. L&apos;INP a remplacé le FID en mars
              2024 : tout guide qui parle encore de FID est à jeter.
            </p>
          </div>

          <h2 id="lcp">Comment améliorer le LCP (chargement) ?</h2>
          <p>
            Améliorer le LCP revient à afficher plus vite le plus gros élément de
            l&apos;écran, presque toujours une image ou un titre. Le premier levier est le
            temps de réponse du serveur : au-delà de 600 millisecondes de TTFB, aucun
            réglage côté navigateur ne rattrape le retard, un hébergement rapide et un CDN
            deviennent prioritaires. Le deuxième levier est l&apos;image du hero : format
            moderne AVIF ou WebP, dimensions déclarées, compression sérieuse, et attribut
            de priorité pour qu&apos;elle se charge en premier. Le troisième est le
            préchargement de la ressource responsable du LCP, image ou police, pour que le
            navigateur ne la découvre pas trop tard. Les polices web, justement, retardent
            souvent l&apos;affichage : un font-display en swap et un préchargement évitent
            le texte invisible. Sur nos recettes, l&apos;image du hero pèse à elle seule
            60 à 70 % du LCP : c&apos;est le premier endroit où regarder.
          </p>

          <h2 id="inp">Comment corriger l'INP (réactivité) ?</h2>
          <p>
            Corriger l&apos;INP demande de libérer le thread principal du navigateur,
            celui qui gère à la fois l&apos;affichage et vos clics. L&apos;INP, qui a
            remplacé le FID en mars 2024, échoue dès qu&apos;une tâche JavaScript longue
            bloque la page au moment où l&apos;utilisateur interagit : la cible est 200
            millisecondes, tout au-dessus de 500 est jugé mauvais. Le premier réflexe est
            de réduire le JavaScript envoyé : découpage du code, suppression des
            librairies superflues, chargement différé de ce qui n&apos;est pas visible. Le
            deuxième est de casser les tâches longues en morceaux de moins de 50
            millisecondes, pour que le navigateur puisse répondre entre deux. Le troisième
            concerne l&apos;hydratation des frameworks : une page rendue côté serveur mais
            lourdement hydratée reste inerte plusieurs secondes. Un site vitrine sobre
            passe l&apos;INP sans effort ; un site saturé de scripts tiers, tags et
            widgets, en est presque toujours le coupable.
          </p>

          <h2 id="cls">Comment éliminer le CLS (stabilité visuelle) ?</h2>
          <p>
            Éliminer le CLS consiste à empêcher les éléments de bouger pendant que la page
            se charge. Le CLS, à maintenir sous 0,1, punit chaque saut visuel : un bouton
            qui se déplace au moment du clic, un paragraphe repoussé par une image qui
            arrive en retard. La première cause est l&apos;absence de dimensions : toute
            image, vidéo ou iframe doit réserver sa hauteur et sa largeur, sans quoi le
            contenu saute à son chargement. La deuxième est l&apos;insertion de contenu
            au-dessus de l&apos;existant : bannières de consentement, encarts publicitaires
            ou messages qui poussent le reste vers le bas. Il faut leur réserver un espace
            fixe. La troisième est le chargement des polices : une police de secours de
            taille différente provoque un décalage à la substitution, qu&apos;un réglage de
            métriques atténue. Un CLS propre coûte peu de temps, mais se dégrade vite à
            chaque ajout non maîtrisé sur le site.
          </p>

          <h2 id="terrain">Données de labo ou données de terrain : lesquelles comptent ?</h2>
          <p>
            Distinguer données de laboratoire et données de terrain évite l&apos;erreur la
            plus fréquente sur les Core Web Vitals. Les données de terrain proviennent du
            Chrome UX Report : elles agrègent les mesures des vrais utilisateurs de Chrome
            sur 28 jours, au 75e centile, et ce sont elles, et elles seules, que Google
            utilise pour le classement. Les données de laboratoire, produites par
            Lighthouse ou PageSpeed Insights, simulent une seule visite dans des
            conditions fixées : elles servent à déboguer, pas à valider. La conséquence
            surprend beaucoup d&apos;équipes : un score Lighthouse à 100 en local ne
            garantit rien si le terrain reste dans le rouge, parce que vos visiteurs réels
            ont des mobiles plus lents et des réseaux moins bons que votre machine de test.
            La règle tient en une phrase : on diagnostique en labo, on juge sur le terrain,
            et l&apos;INP en particulier ne se mesure vraiment que sur des interactions
            réelles.
          </p>

          <h2 id="classement">Les Core Web Vitals influencent-ils vraiment le classement ?</h2>
          <p>
            Les Core Web Vitals influencent le classement, mais moins qu&apos;on ne le
            vend. Google les intègre au signal d&apos;expérience de page, qui agit surtout
            comme un départage entre deux pages de pertinence comparable : à contenu égal,
            la plus rapide passe devant, mais aucun temps de chargement ne compense un
            contenu faible. Voici la concession honnête : sur-investir dans les Core Web
            Vitals pour le seul SEO est rarement rentable, et passer de 3 secondes à 2,4 de
            LCP change peu le classement d&apos;une page déjà pertinente. Le vrai retour se
            joue ailleurs. La vitesse et la stabilité pèsent lourd sur la conversion :
            chaque seconde de chargement en plus fait grimper le taux de rebond, et un
            mobile lent fait fuir avant même la première interaction. On optimise donc les
            Core Web Vitals d&apos;abord pour vos visiteurs et votre chiffre
            d&apos;affaires, le petit bonus de classement venant en prime.
          </p>

          <p>
            Pour aller plus loin : notre page{" "}
            <Link href="/creation-site-web">création de site web</Link> garantit ces
            seuils par contrat à la livraison, notre page{" "}
            <Link href="/agence-seo">agence SEO</Link> relie la performance au reste du
            référencement, et vous pouvez{" "}
            <Link href="/contact">demander un audit</Link> pour mesurer vos Core Web
            Vitals sur le terrain.
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-3xl px-4 pb-16 md:px-8 lg:px-12">
        <Reveal>
          <h2 className="text-2xl font-bold tracking-tight">Questions fréquentes</h2>
          <FAQ items={FAQ_PLAIN} />
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-24 md:px-8 lg:px-12">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-bg-2 p-8">
            <div aria-hidden className="pointer-events-none absolute -right-12 -top-12 size-44 rounded-full bg-accent/15 blur-3xl" />
            <div className="relative flex flex-wrap items-center justify-between gap-6">
              <div>
                <h2 className="text-xl font-extrabold tracking-tight">
                  Un site rapide, garanti par contrat.
                </h2>
                <p className="mt-2 max-w-md text-[14px] text-muted">
                  Envoyez votre URL : on mesure vos Core Web Vitals sur le terrain et on
                  chiffre les corrections prioritaires, sous 10 jours.
                </p>
              </div>
              <MagneticButton href="/contact">Demander l&apos;audit</MagneticButton>
            </div>
          </div>
        </Reveal>
        <p className="mt-8 text-[13.5px] text-muted-2">
          <Link href="/blog" className="underline underline-offset-2 transition-colors hover:text-accent">
            ← Retour au blog
          </Link>
        </p>
      </section>
    </article>
  );
}
