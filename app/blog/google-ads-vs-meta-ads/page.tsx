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
  title: "Google Ads ou Meta Ads : lequel choisir en 2026 ? | Essor",
  description:
    "Intention vs interruption : quand Google Ads bat Meta Ads, quand c'est l'inverse. Grille par type d'offre, coût par lead comparé, arbre de décision",
  path: "/blog/google-ads-vs-meta-ads",
  titleAbsolute: true,
  ogType: "article",
});

const FAQ_PLAIN = [
  {
    q: "Faut-il commencer par Google Ads ou par Meta Ads ?",
    a: "Cela dépend de votre offre, pas d'une préférence. Si votre solution est nommée dans Keyword Planner avec au moins 200 recherches mensuelles, commencez par Google Ads : le lead arrive plus vite et se convertit mieux. Sinon, testez Meta Ads avec une créa vidéo de 15 à 30 secondes et un budget de 1 500 € HT sur 30 jours.",
  },
  {
    q: "Google Ads est-il vraiment plus cher que Meta Ads ?",
    a: "Le CPC Google est en moyenne 3 à 5 fois supérieur au CPC Meta, mais le taux de conversion l'est aussi. Sur 40 comptes Essor suivis, le coût par client signé finit souvent plus bas côté Google en B2B services. En e-commerce mode et lifestyle, Meta reste imbattable sur le coût d'acquisition à volume équivalent.",
  },
  {
    q: "Peut-on suivre les résultats des deux plateformes correctement ?",
    a: "Oui, à condition de mettre en place le tracking serveur (Conversion API côté Meta, Enhanced Conversions côté Google) et un modèle d'attribution data-driven. Sans cela, chaque plateforme s'attribue la même conversion et la somme des ROAS déclarés dépasse largement le vrai chiffre d'affaires. Comptez 1 500 à 3 000 € HT de setup initial.",
  },
  {
    q: "Quel budget minimum pour tester une plateforme ?",
    a: "1 500 € HT sur 30 jours par plateforme, soit 3 000 € HT pour un test comparatif honnête. En dessous, l'algorithme n'atteint pas ses seuils d'apprentissage (30 conversions minimum Google, 50 Meta) et vous mesurez du bruit. Un test à 500 € par plateforme ne prouve rien, sauf que vous n'aviez pas de quoi tester.",
  },
];

export default function ArticlePage() {
  return (
    <article>
      <JsonLd
        schemas={[
          articleSchema({
            path: "/blog/google-ads-vs-meta-ads",
            headline: "Google Ads ou Meta Ads : lequel choisir en 2026 ?",
            description:
              "Intention vs interruption : la grille par type d'offre, le coût par lead comparé et le seuil à partir duquel les deux plateformes se complètent vraiment.",
            datePublished: "2026-09-20",
            author: AUTHOR,
          }),
          personSchema(AUTHOR),
          organizationSchema(),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: "Google Ads ou Meta Ads en 2026", path: "/blog/google-ads-vs-meta-ads" },
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
            <li aria-current="page" className="text-muted">Google Ads ou Meta Ads</li>
          </ol>
        </nav>

        <Reveal>
          <header className="mt-8">
            <p className="flex flex-wrap items-center gap-3 text-[12px] text-muted-2">
              <span className="rounded-full border border-accent/30 bg-accent-soft px-2.5 py-0.5 font-mono text-[11px] text-accent">
                Google Ads
              </span>
              <time dateTime="2026-09-20">20 septembre 2026</time>
              <span>8 min de lecture</span>
            </p>
            <h1 className="mt-4 text-[clamp(2rem,4.4vw,3.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
              Google Ads ou Meta Ads : lequel choisir en <em className="em-accent">2026</em> ?
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Google Ads capte l&apos;intention, Meta Ads crée le désir : le vrai
              arbitrage 2026 pour un budget publicitaire PME. Voici la grille par type
              d&apos;offre, les coûts par lead observés et le seuil à partir duquel
              les deux plateformes se complètent au lieu de se cannibaliser.
            </p>
            <p className="mt-5 border-y border-border py-3 text-[13px] text-muted-2">
              Par Claire Vasseur, directrice SEO. Sources : 40 comptes actifs Essor
              Google Ads et Meta Ads audités entre 2024 et 2026, plus les résultats
              publics de Meta pour le deuxième trimestre 2026.
            </p>
          </header>
        </Reveal>

        <div className="article-prose mt-10 pb-10">
          <h2 id="intention-interruption">Intention ou interruption : quelle est la vraie différence ?</h2>
          <p>
            Google Ads capte une demande déjà formulée : quelqu&apos;un tape
            « plombier Paris 15 » ou « CRM immobilier », l&apos;annonce
            s&apos;affiche sur une intention explicite, avec un intitulé de
            recherche mesurable au mot près. Meta Ads fonctionne à l&apos;opposé :
            personne n&apos;ouvre Instagram ou Facebook pour acheter, la plateforme
            interrompt le fil avec une créa taillée pour susciter le désir. Cette
            distinction gouverne toute la suite du choix. Sur Google, la conversion
            suit rapidement parce que la personne cherchait déjà ; sur Meta, il
            faut souvent quatre à sept expositions avant qu&apos;un premier clic ne
            tombe et douze avant une première conversion. En 2025, Meta a servi
            30 % de vues d&apos;annonces en plus qu&apos;un an plus tôt selon ses
            propres chiffres publiés fin janvier, et le prix moyen par annonce a
            monté de 12 % au deuxième trimestre 2026 : la demande publicitaire est
            là, la friction créative aussi. Opposer les deux plateformes revient à
            comparer un vendeur qui répond aux appels et un vendeur qui décroche à
            froid.
          </p>

          <h2 id="type-offre">Quelle plateforme selon votre type d&apos;offre ?</h2>
          <p>
            L&apos;offre décide de la plateforme, pas l&apos;inverse. Les services
            locaux et le B2B ciblé (plombier, avocat, expert-comptable, éditeur
            SaaS de niche) trouvent leur volume sur Google Ads parce que le
            prospect cherche déjà une solution nommée ; le coût par lead y descend
            souvent sous 25 € HT dans ces verticales. Les produits d&apos;achat
            impulsif à faible ticket, la mode, le lifestyle, la beauté et les
            infoproduits vivent mieux sur Meta parce que l&apos;image porte la
            conversion et que personne ne tape leur nom sur Google. Un e-commerce
            de mobilier design qui vend un canapé à 1 400 € réussit sur Meta si
            sa création est forte, mais Google Ads Shopping reste indispensable
            pour capter les recherches « canapé 3 places velours ». En dessous de
            100 recherches mensuelles sur votre mot-clé principal via Keyword
            Planner, Google Ads n&apos;aura pas le carburant pour tourner : Meta
            devient alors la seule option scalable. Pour trancher rapidement :
            quelqu&apos;un a-t-il déjà tapé votre solution sur Google ce mois-ci ?
          </p>

          <table>
            <thead>
              <tr>
                <th scope="col">Type d&apos;offre</th>
                <th scope="col">Plateforme prioritaire</th>
                <th scope="col">Coût par lead observé (2026)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Service local B2C (plombier, avocat, artisan)</td>
                <td>Google Ads</td>
                <td>18 à 32 € HT</td>
              </tr>
              <tr>
                <td>SaaS B2B ciblé, éditeur logiciel</td>
                <td>Google Ads</td>
                <td>55 à 120 € HT</td>
              </tr>
              <tr>
                <td>Mode, lifestyle, accessoires</td>
                <td>Meta Ads</td>
                <td>11 à 22 € HT</td>
              </tr>
              <tr>
                <td>Cosmétique, infoproduit, coaching</td>
                <td>Meta Ads</td>
                <td>9 à 28 € HT</td>
              </tr>
              <tr>
                <td>E-commerce mobilier ou déco</td>
                <td>Meta + Google Shopping</td>
                <td>24 à 60 € HT</td>
              </tr>
              <tr>
                <td>Lead gen B2B mid-market</td>
                <td>Google + Meta</td>
                <td>45 à 90 € HT</td>
              </tr>
            </tbody>
          </table>

          <div className="callout">
            <span className="callout-label">À retenir</span>
            <p>
              Sous 2 000 € HT de budget publicitaire mensuel : une seule plateforme,
              celle qui colle à votre offre. Au-delà : Google Ads pour capter la
              demande, Meta Ads pour créer le désir, tracking serveur obligatoire.
            </p>
          </div>

          <h2 id="cout-par-lead">Combien coûte un lead sur Google Ads et Meta Ads en 2026 ?</h2>
          <p>
            Le coût par lead varie moins entre plateformes qu&apos;entre secteurs.
            Sur les 40 comptes actifs Essor audités entre 2024 et 2026, Google Ads
            sort à 22 € HT en services locaux, 38 € HT en B2B services et 96 € HT
            en SaaS mid-market ; Meta Ads sort à 14 € HT en e-commerce mode,
            31 € HT en B2C services et 68 € HT en B2B lead gen. Ces chiffres
            masquent la qualité : un lead Meta B2B coûte moins cher à
            l&apos;entrée mais son taux de closing tombe souvent à 6 %, contre 18
            à 22 % pour un lead Google Ads sur la même offre. Comparer les coûts
            par lead bruts est trompeur ; il faut ramener au coût par client
            signé. Une agence immobilière suivie en 2025 paie 42 € HT le lead
            Google et 19 € HT le lead Meta, mais son coût par mandat signé finit
            à 220 € Google contre 380 € Meta. La conversion mesure, pas le clic.
          </p>

          <h2 id="choisir-les-deux">Faut-il vraiment choisir entre les deux plateformes ?</h2>
          <p>
            Non, sauf sous 2 000 € HT de budget publicitaire mensuel. En dessous,
            disperser deux plateformes revient à sous-alimenter chacune : Google
            Ads plafonne à 15 clics par jour sur un budget de 900 € en B2B
            compétitif, Meta a besoin d&apos;au moins 50 conversions hebdomadaires
            pour sortir de sa phase d&apos;apprentissage. Au-delà de 2 000 € HT,
            la complémentarité paie. Google Ads capture la demande explicite et
            sert de fond de campagne stable ; Meta crée de la demande sur des
            audiences froides, alimente le retargeting et fait remonter les
            recherches de marque quinze à vingt jours plus tard. Une étude
            Nielsen publiée en 2024 mesurait un lift de 19 % sur les recherches
            de marque Google après quatre semaines de Meta Ads soutenues.
            Concession honnête : cette synergie n&apos;existe que si vous mesurez
            au niveau serveur, sinon chaque plateforme s&apos;attribue la même
            conversion et le budget grossit sans résultat net vérifiable.
          </p>

          <h2 id="signaux-arbitrage">Quels signaux techniques mesurer pour arbitrer ?</h2>
          <p>
            Trois signaux tranchent l&apos;arbitrage entre Google Ads et Meta Ads
            en une heure de diagnostic. Le premier : le volume mensuel de
            recherches sur votre mot-clé principal via Keyword Planner. Sous 200
            recherches, Google Ads n&apos;aura jamais d&apos;impact ; au-delà de
            2 000 recherches mensuelles, la plateforme devient prioritaire quel
            que soit le secteur. Le deuxième : le taux d&apos;engagement de vos
            contenus organiques Instagram et Facebook sur les 30 derniers posts.
            Un taux inférieur à 1,5 % signale que votre créa ne portera pas la
            publicité, il faut d&apos;abord travailler le format avant de
            basculer un euro en payé. Le troisième : le taux de conversion actuel
            de votre landing page. En dessous de 2 %, aucun budget publicitaire
            ne sera rentable, quelle que soit la plateforme choisie. Ces trois
            mesures coûtent zéro euro et se relèvent seule. Une décision qui
            ignore ces chiffres remet le choix à l&apos;intuition ;
            l&apos;intuition en publicité vaut environ 800 € HT par semaine de
            budget brûlé.
          </p>

          <h2 id="canal-sature">Que faire quand un canal sature ?</h2>
          <p>
            Un canal sature quand augmenter le budget de 30 % ne fait plus
            baisser le coût par lead : chaque euro supplémentaire achète du
            trafic marginal moins qualifié. Google Ads sature d&apos;abord sur
            les mots-clés exacts, généralement autour de 60 à 80 % du search
            impression share ; à ce seuil, la seule sortie reste d&apos;élargir
            aux requêtes proches ou d&apos;ouvrir Performance Max avec des
            exclusions de marque pour éviter la cannibalisation. Meta Ads sature
            quand la fréquence dépasse 3,5 sur sept jours et que le CTR chute de
            20 % : signal clair que l&apos;audience est brûlée, il faut
            renouveler la créa ou changer d&apos;audience. Ouvrir la seconde
            plateforme devient alors un levier de croissance, pas un doublon. Ce
            diagnostic doit se refaire tous les mois : sinon, une équipe passe
            six mois à empiler du budget sur un canal saturé pendant qu&apos;un
            canal secondaire aurait débloqué 40 % de nouveaux leads pour moitié
            moins cher.
          </p>

          <p>
            Pour aller plus loin : notre page{" "}
            <Link href="/agence-sea">agence Google Ads</Link> détaille méthode et
            livrables, l&apos;article{" "}
            <Link href="/blog/budget-google-ads-rentable">
              quel budget Google Ads pour être rentable
            </Link>{" "}
            donne la formule chiffrée, et{" "}
            <Link href="/blog/taux-de-conversion-landing-page">
              comment améliorer le taux de conversion d&apos;une landing page
            </Link>{" "}
            couvre le levier qui décide de la rentabilité des deux canaux.
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
                  Un arbitrage Google Ads et Meta Ads chiffré pour votre marché.
                </h2>
                <p className="mt-2 max-w-md text-[14px] text-muted">
                  Envoyez votre URL et votre budget cible : diagnostic sous 10 jours
                  avec les trois signaux mesurés et la plateforme prioritaire.
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
