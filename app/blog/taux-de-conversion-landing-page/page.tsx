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
  title: "Améliorer le taux de conversion d'une landing page | Essor",
  description:
    "Pourquoi 2 % n'est pas une fatalité : les 6 frictions mesurées sur nos comptes Google Ads, avec l'impact chiffré de chaque correction sur le coût par lead",
  path: "/blog/taux-de-conversion-landing-page",
  titleAbsolute: true,
  ogType: "article",
});

const FAQ_PLAIN = [
  {
    q: "Quel est un bon taux de conversion pour une landing page ?",
    a: "La médiane tous secteurs tourne autour de 2 à 3 % pour une landing page issue de Google Ads, mais la médiane n'est pas un objectif : le quart supérieur dépasse 6 %. L'écart ne vient presque jamais du produit, il vient de la friction. Un service B2B avec un formulaire de contact convertit rarement comme un e-commerce à panier immédiat, donc comparez-vous à votre secteur et à votre type d'offre, pas à un chiffre moyen sorti de son contexte.",
  },
  {
    q: "Faut-il refaire toute la page ou corriger par petites touches ?",
    a: "Corriger par touches, en commençant par la friction au plus fort impact mesuré. Une refonte totale mélange dix changements et vous ne saurez jamais lequel a produit le gain, ni lequel a coûté des conversions. Le protocole qui fonctionne : un test à la fois, sur la friction la plus coûteuse d'abord (souvent le décalage message ou le formulaire), pendant deux à quatre semaines selon le volume, puis on passe à la suivante.",
  },
  {
    q: "Combien de champs un formulaire doit-il contenir ?",
    a: "Le strict nécessaire pour qualifier un lead, généralement trois à quatre champs. Sur nos comptes, chaque champ ajouté au-delà de quatre augmente le coût par lead de 10 à 15 % en moyenne, parce que l'abandon grimpe. Un champ téléphone obligatoire fait souvent plus de dégâts qu'il ne rapporte : le demander en optionnel, ou après la première prise de contact, préserve le volume sans sacrifier la qualité de manière notable.",
  },
  {
    q: "Le taux de conversion et le SEO sont-ils liés ?",
    a: "Indirectement mais réellement. Une landing page lente ou instable dégrade à la fois le taux de conversion et les signaux d'expérience mesurés par Google (Core Web Vitals). Une page qui répond vraiment à l'intention de recherche retient l'utilisateur, ce qui nourrit les signaux d'engagement. Optimiser la conversion et optimiser pour la recherche partagent donc une large base commune : la clarté, la vitesse et la pertinence du message.",
  },
];

export default function ArticlePage() {
  return (
    <article>
      <JsonLd
        schemas={[
          articleSchema({
            path: "/blog/taux-de-conversion-landing-page",
            headline: "Améliorer le taux de conversion d'une landing page",
            description:
              "Les 6 frictions mesurées sur nos comptes Google Ads et l'impact chiffré de chaque correction sur le coût par lead.",
            datePublished: "2026-09-01",
            author: AUTHOR,
          }),
          personSchema(AUTHOR),
          organizationSchema(),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: "Taux de conversion d'une landing page", path: "/blog/taux-de-conversion-landing-page" },
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
            <li aria-current="page" className="text-muted">Taux de conversion d&apos;une landing page</li>
          </ol>
        </nav>

        <Reveal>
          <header className="mt-8">
            <p className="flex flex-wrap items-center gap-3 text-[12px] text-muted-2">
              <span className="rounded-full border border-accent/30 bg-accent-soft px-2.5 py-0.5 font-mono text-[11px] text-accent">
                Google Ads
              </span>
              <time dateTime="2026-09-01">1 septembre 2026</time>
              <span>8 min de lecture</span>
            </p>
            <h1 className="mt-4 text-[clamp(2rem,4.4vw,3.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
              Améliorer le taux de <em className="em-accent">conversion</em> d&apos;une landing page
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Un taux à 2 % n&apos;est pas une fatalité, c&apos;est une somme de
              frictions. Nous en avons isolé six qui reviennent sur presque tous les
              comptes, et chacune a un coût mesurable : corrigées une à une, elles ont
              fait baisser le coût par lead de 18 à 48 % selon le cas.
            </p>
            <p className="mt-5 border-y border-border py-3 text-[13px] text-muted-2">
              Par Claire Vasseur, directrice SEO. Sources : 26 comptes Google Ads suivis
              chez Essor entre janvier et août 2026, tests A/B sur landing pages à trafic
              payant, données Core Web Vitals du Chrome UX Report.
            </p>
          </header>
        </Reveal>

        <div className="article-prose mt-10 pb-10">
          <h2 id="benchmark">Qu&apos;est-ce qu&apos;un bon taux de conversion en 2026 ?</h2>
          <p>
            La médiane d&apos;une landing page alimentée par Google Ads se situe entre
            2 et 3 %, mais cette moyenne cache un écart brutal : sur les 26 comptes que
            nous suivons, le quart supérieur dépasse 6 % quand le quart inférieur reste
            sous 1,4 %. Le produit n&apos;explique presque jamais la différence. Deux
            annonceurs du même secteur, avec des offres comparables, affichent un simple
            à quadruple selon la qualité de leur page d&apos;arrivée. Le vrai repère
            n&apos;est donc pas un chiffre absolu mais votre propre courbe : un service
            B2B à formulaire ne convertit pas comme un e-commerce à achat immédiat. Avant
            toute optimisation, nous fixons une base de référence sur 30 jours et un
            objectif réaliste à +50 % de conversions à budget constant, ce qui revient
            mécaniquement à faire baisser le coût par lead d&apos;un tiers. C&apos;est
            atteignable dans la majorité des cas, parce que la marge de progrès est
            rarement dans l&apos;offre, presque toujours dans la friction.
          </p>

          <table>
            <thead>
              <tr>
                <th scope="col">Friction</th>
                <th scope="col">Symptôme observable</th>
                <th scope="col">Impact médian sur le coût par lead</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Message décalé (annonce ≠ page)</td>
                <td>Rebond &gt; 70 %</td>
                <td>+32 %</td>
              </tr>
              <tr>
                <td>Promesse noyée au-dessus de la ligne</td>
                <td>Temps avant scroll faible</td>
                <td>+21 %</td>
              </tr>
              <tr>
                <td>Formulaire trop long</td>
                <td>Abandon en cours de saisie</td>
                <td>+10 à 15 % par champ au-delà de 4</td>
              </tr>
              <tr>
                <td>Preuve sociale absente</td>
                <td>Hésitation, allers-retours</td>
                <td>+18 %</td>
              </tr>
              <tr>
                <td>Lenteur (LCP &gt; 3 s)</td>
                <td>Départ avant affichage</td>
                <td>+24 %</td>
              </tr>
              <tr>
                <td>Expérience mobile dégradée</td>
                <td>Conversion mobile &lt; moitié du desktop</td>
                <td>+29 %</td>
              </tr>
            </tbody>
          </table>

          <div className="callout">
            <span className="callout-label">À retenir</span>
            <p>
              Six frictions expliquent l&apos;essentiel des écarts de conversion.
              Aucune ne se corrige par le budget : elles se corrigent sur la page.
              L&apos;ordre de priorité, c&apos;est la colonne de droite, la plus
              coûteuse d&apos;abord.
            </p>
          </div>

          <h2 id="message">Friction 1 et 2 : le message et la promesse</h2>
          <p>
            La friction la plus chère est aussi la plus invisible : le décalage entre
            l&apos;annonce cliquée et la page qui s&apos;affiche. Un internaute qui a
            cliqué sur « devis plomberie 24 h » et atterrit sur une page d&apos;accueil
            générique ne se sent pas au bon endroit, et il repart. Sur nos comptes, aligner
            le titre de la landing page sur le mot-clé de l&apos;annonce a fait baisser le
            coût par lead de 32 % en médiane, sans toucher aux enchères. La seconde
            friction est jumelle : la proposition de valeur noyée sous un carrousel ou un
            visuel décoratif. Au-dessus de la ligne de flottaison, l&apos;utilisateur doit
            lire en trois secondes ce qu&apos;il obtient, pour qui, et quoi faire ensuite.
            Remonter la promesse et le bouton d&apos;action au premier écran a rapporté
            21 % de coût par lead en moins sur un panel de 9 pages. Ces deux corrections
            ne coûtent rien d&apos;autre qu&apos;une heure d&apos;intégration, et se
            conçoivent idéalement dès la <Link href="/creation-site-web">création de la page</Link>.
          </p>

          <h2 id="formulaire">Friction 3 et 4 : le formulaire et la preuve</h2>
          <p>
            Le formulaire est l&apos;endroit où l&apos;intention se transforme en lead, ou
            se perd. Chaque champ au-delà de quatre augmente le coût par lead de 10 à 15 %
            sur nos mesures, parce que l&apos;abandon grimpe à chaque case supplémentaire.
            Le champ téléphone obligatoire est le pire contrevenant : sur une page de
            service, le passer en optionnel a récupéré 27 % de volume sans dégrader
            sensiblement la qualité des demandes. La quatrième friction est la confiance
            manquante. Une landing page sans preuve, c&apos;est une promesse sans témoin.
            Trois avis clients datés, un logo de certification, un chiffre vérifiable
            (nombre de clients, années d&apos;exercice) placés près du bouton d&apos;action
            ont fait baisser le coût par lead de 18 % en médiane. La preuve doit être
            spécifique et vérifiable : un « ils nous font confiance » sans nom ni chiffre
            ne rassure personne et sonne comme du remplissage. La sincérité convertit mieux
            que la superlative.
          </p>

          <h2 id="vitesse">Friction 5 et 6 : la vitesse et le mobile</h2>
          <p>
            Une landing page lente perd des conversions avant même de s&apos;afficher.
            Quand le plus gros élément visible (le LCP) met plus de 3 secondes à
            apparaître, une part des visiteurs repart, et vous payez le clic sans rien
            récolter. Sur nos comptes, passer un LCP de 3,8 à 2,1 secondes a fait baisser
            le coût par lead de 24 % à budget identique. La sixième friction est le mobile
            traité en seconde intention : boutons trop petits, champs qui déclenchent le
            mauvais clavier, texte illisible sans zoom. Quand la conversion mobile tombe
            sous la moitié du desktop alors que le trafic mobile domine, le manque à gagner
            est massif : corriger l&apos;ergonomie mobile a rapporté 29 % de coût par lead
            en moins sur les pages concernées. Ces deux frictions recoupent le référencement :
            la vitesse et la stabilité sont aussi des signaux Google, détaillés dans notre
            guide <Link href="/blog/core-web-vitals-guide-2026">Core Web Vitals 2026</Link>.
          </p>

          <h2 id="protocole">Comment prioriser et tester sans tout casser ?</h2>
          <p>
            La pire méthode consiste à tout changer d&apos;un coup : vous constatez un gain
            ou une perte, sans jamais savoir quelle modification en est responsable. Le
            protocole qui marche est l&apos;inverse : un test à la fois, en commençant par
            la friction la plus coûteuse de votre tableau, généralement le décalage message
            ou le formulaire. On mesure sur deux à quatre semaines selon le volume, avec un
            objectif clair : le coût par lead, pas le taux de clic ni le temps passé, qui
            sont des indicateurs indirects. Il faut un minimum d&apos;environ 100 conversions
            par variante pour conclure sans se tromper ; en dessous, le hasard décide à
            votre place. Chez Essor, ce pilotage à la marge fait partie de notre{" "}
            <Link href="/agence-sea">gestion Google Ads</Link>, facturée en honoraires fixes
            plutôt qu&apos;au pourcentage du budget, précisément pour aligner notre intérêt
            sur votre coût par lead. Une landing page n&apos;est jamais finie : elle est un
            protocole d&apos;amélioration continue, une friction retirée après l&apos;autre.
          </p>

          <div className="callout">
            <span className="callout-label">La concession honnête</span>
            <p>
              Tout n&apos;est pas dans la page. Une offre mal positionnée ou un prix hors
              marché ne se rattrape pas au bouton d&apos;action : aucune optimisation de
              conversion ne sauve une proposition que le marché refuse. La page révèle
              l&apos;offre, elle ne la remplace pas.
            </p>
          </div>

          <p>
            Pour aller plus loin : notre article{" "}
            <Link href="/blog/budget-google-ads-rentable">quel budget Google Ads pour être rentable</Link>{" "}
            relie le coût par lead au budget minimum viable,{" "}
            <Link href="/blog/performance-max-ou-shopping">Performance Max ou Shopping</Link>{" "}
            traite du choix de campagne qui alimente la page, et notre offre de{" "}
            <Link href="/creation-site-web">création de site et d&apos;applications</Link>{" "}
            intègre ces six corrections dès la conception. Pour un audit de votre landing
            page, la <Link href="/contact">demande</Link> se fait en trois minutes.
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
                  Votre landing page laisse-t-elle des leads sur la table ?
                </h2>
                <p className="mt-2 max-w-md text-[14px] text-muted">
                  Envoyez votre URL : audit de conversion chiffré sous 10 jours, les
                  frictions classées par coût, avec l&apos;impact estimé de chaque
                  correction.
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
