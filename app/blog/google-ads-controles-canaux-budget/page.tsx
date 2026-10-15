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
  title: "Google Ads : priorisation des canaux (oct. 2026) | Essor",
  description:
    "Depuis le 15 octobre 2026, Google Ads permet de plafonner la part des canaux secondaires. Ce qui change pour une PME française et comment régler sans casse",
  path: "/blog/google-ads-controles-canaux-budget",
  titleAbsolute: true,
  ogType: "article",
});

const FAQ_PLAIN = [
  {
    q: "Quelles campagnes acceptent la priorisation des canaux ?",
    a: "Les campagnes Search, Shopping, Performance Max et Demand Gen sont concernées par le déploiement du 15 octobre 2026. Une campagne Search pure, sans extension au réseau partenaire, ne reçoit pas de bénéfice visible : la priorisation agit surtout sur les campagnes qui dépensent déjà sur Display, YouTube ou le réseau de recherche partenaire.",
  },
  {
    q: "Que se passe-t-il si je plafonne un canal à 0 % ?",
    a: "Un plafond nul force Google à ne plus dépenser sur ce canal pour la campagne concernée. L'exclusion devient effective en 24 à 48 heures. L'effet n'est pas rétroactif : les conversions déjà attribuées restent au canal exclu. Prévoyez une période d'observation de 14 jours avant d'évaluer l'impact réel sur le coût par lead.",
  },
  {
    q: "Faut-il appliquer le même plafond sur toutes les campagnes ?",
    a: "Non. Une campagne Shopping à forte intention et une Performance Max de découverte n'ont pas la même tolérance au réseau partenaire. Commencez par mesurer la part de dépense actuelle par canal sur 30 jours, puis définissez un plafond par campagne. Un réglage uniforme masque les écarts de rentabilité entre produits ou segments d'audience.",
  },
  {
    q: "Comment vérifier que le plafond est respecté ?",
    a: "Le rapport « Insights » de chaque campagne affiche désormais la répartition réelle de la dépense par canal, mise à jour toutes les 24 heures. Un écart supérieur à 2 points entre la cible et le réalisé signale un problème de volume (budget insuffisant) ou une inéligibilité technique. Croisez avec la conversion attribuée par canal avant de corriger.",
  },
];

export default function ArticlePage() {
  return (
    <article>
      <JsonLd
        schemas={[
          articleSchema({
            path: "/blog/google-ads-controles-canaux-budget",
            headline:
              "Google Ads : la priorisation des canaux change le pilotage en octobre 2026",
            description:
              "Google Ads déploie depuis le 15 octobre 2026 un contrôle fin de la part de budget allouée à chaque canal. Ce qui change pour une PME française et comment régler sans casse.",
            datePublished: "2026-10-15",
            author: AUTHOR,
          }),
          personSchema(AUTHOR),
          organizationSchema(),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Blog", path: "/blog" },
            {
              name: "Google Ads : priorisation des canaux",
              path: "/blog/google-ads-controles-canaux-budget",
            },
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
            <li aria-current="page" className="text-muted">Priorisation des canaux Google Ads</li>
          </ol>
        </nav>

        <Reveal>
          <header className="mt-8">
            <p className="flex flex-wrap items-center gap-3 text-[12px] text-muted-2">
              <span className="rounded-full border border-accent/30 bg-accent-soft px-2.5 py-0.5 font-mono text-[11px] text-accent">
                Actualité
              </span>
              <time dateTime="2026-10-15">15 octobre 2026</time>
              <span>7 min de lecture</span>
            </p>
            <h1 className="mt-4 text-[clamp(2rem,4.4vw,3.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
              Priorisation des canaux Google Ads : ce qui change en <em className="em-accent">octobre</em>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Depuis le 15 octobre 2026, Google Ads autorise un plafond en pourcentage
              sur chaque canal secondaire (Display, YouTube, réseau partenaire). Quatre
              types de campagnes sont concernés, et le réglage change immédiatement la
              répartition de dépense. Voici ce qui est acté, ce qui bouge, et le
              protocole pour l&apos;appliquer sans casser une campagne rentable.
            </p>
            <p className="mt-5 border-y border-border py-3 text-[13px] text-muted-2">
              Par Claire Vasseur, directrice SEO. Sources : annonce Google Ads du
              15 octobre 2026, relevés Search Engine Land, données Essor sur 11 comptes
              PME français observés depuis janvier 2026.
            </p>
          </header>
        </Reveal>

        <div className="article-prose mt-10 pb-10">
          <h2 id="definition">Qu&apos;est-ce que la priorisation des canaux Google Ads ?</h2>
          <p>
            La priorisation des canaux Google Ads est une option de pilotage introduite
            dans l&apos;interface le 15 octobre 2026. Chaque campagne éligible accepte
            désormais deux niveaux de priorité (« High priority » et « Low priority ») et
            un plafond quotidien en pourcentage sur les canaux marqués comme secondaires.
            Jusqu&apos;ici, un annonceur pouvait exclure un emplacement entier (par
            exemple le réseau Display), mais pas doser sa part. Un retailer qui voulait
            garder 90 % de son budget sur Shopping et 10 % sur YouTube devait répartir
            le budget en créant deux campagnes séparées, avec les complications
            d&apos;attribution que cela implique. Avec la nouvelle option, un seul
            compte, un seul budget quotidien, et une règle de répartition inscrite dans
            la campagne. Google décrit la fonctionnalité comme un contrôle, pas comme
            une optimisation : la plateforme n&apos;ajuste pas automatiquement le
            plafond, c&apos;est à l&apos;annonceur de le fixer et de le relire.
          </p>

          <h2 id="pourquoi">Pourquoi Google active ce contrôle en octobre 2026 ?</h2>
          <p>
            L&apos;activation en octobre 2026 répond à deux pressions documentées. La
            première vient des annonceurs e-commerce : depuis l&apos;extension de
            Performance Max à l&apos;été 2023, plus de 60 % des comptes PME français
            observés par Essor voient une part partenaire supérieure à 25 % sur leurs
            campagnes PMax, parfois sans conversion attribuée en retour. La seconde
            pression est réglementaire : la Commission européenne scrute les contraintes
            d&apos;achat liées à l&apos;écosystème Google, et offrir un contrôle fin par
            canal répond à l&apos;argument de l&apos;achat lié. Google accompagne le
            déploiement d&apos;un cas d&apos;usage principal : un e-commerçant qui veut
            protéger son Shopping intention haute d&apos;une sur-exposition sur Display.
            La fonctionnalité ne corrige pas les faiblesses historiques de PMax (manque
            de visibilité sur les requêtes), mais elle en limite les débordements
            budgétaires.
          </p>

          <h2 id="eligibles">Quelles campagnes sont concernées par la limite par pourcentage ?</h2>
          <p>
            Quatre types de campagnes acceptent la priorisation des canaux : Search,
            Shopping, Performance Max et Demand Gen. Trois exclusions importantes : les
            campagnes Discovery héritées (migrées sur Demand Gen en 2024), les App
            campaigns, et les campagnes Vidéo autonomes. Le tableau ci-dessous résume
            l&apos;impact par type de campagne, en se fondant sur la répartition
            moyenne observée dans Google Ads Transparency et les relevés Essor de 2026.
          </p>

          <table>
            <thead>
              <tr>
                <th scope="col">Type de campagne</th>
                <th scope="col">Canaux « Low priority » plafonnables</th>
                <th scope="col">Impact attendu</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Search</td>
                <td>Réseau de recherche partenaire</td>
                <td>Faible : 4 à 8 % du budget en moyenne</td>
              </tr>
              <tr>
                <td>Shopping standard</td>
                <td>Comparateurs partenaires, Display Discovery</td>
                <td>Modéré : 10 à 18 % du budget</td>
              </tr>
              <tr>
                <td>Performance Max</td>
                <td>Display, YouTube, Gmail, Discover</td>
                <td>Fort : 25 à 55 % selon le compte</td>
              </tr>
              <tr>
                <td>Demand Gen</td>
                <td>Gmail, Discover secondaires</td>
                <td>Modéré : 15 à 25 % du budget</td>
              </tr>
            </tbody>
          </table>

          <div className="callout">
            <span className="callout-label">À retenir</span>
            <p>
              Première règle prudente : plafonner les canaux « Low priority » à 10 %
              pendant 14 jours, mesurer, puis ajuster. Un passage brutal à 0 % expose à
              une baisse de volume non compensée par les canaux prioritaires.
            </p>
          </div>

          <h2 id="reglage">Comment régler les canaux sans casser une campagne rentable ?</h2>
          <p>
            Le réglage des canaux Google Ads suit un protocole en quatre étapes
            testables. Premier geste : baseline sur 30 jours. Dans le rapport
            « Insights » de chaque campagne, relever la part de dépense réelle par
            canal et le coût par acquisition associé. Deuxième geste : hiérarchie
            commerciale. Marquer en « High priority » les canaux qui livrent plus de
            80 % des conversions attribuées, en « Low priority » les autres. Troisième
            geste : plafond progressif. Démarrer à 15 % de budget maximal sur les
            canaux secondaires, soit la moitié de la part moyenne observée (28 % sur
            notre panel). Quatrième geste : fenêtre d&apos;apprentissage. Google
            recommande 14 jours de stabilité après chaque modification, car les
            algorithmes d&apos;enchère se recalibrent. Concession honnête : sur une
            PMax à faible volume (moins de 30 conversions par mois), le signal
            statistique est trop faible pour arbitrer, le réglage se fait alors au
            jugé, et il faut l&apos;assumer.
          </p>

          <h2 id="gains">Quels gains attendre pour une PME française ?</h2>
          <p>
            Les gains de la priorisation des canaux dépendent du point de départ. Sur
            notre panel de 11 comptes PME français mesurés d&apos;avril à septembre
            2026, la part partenaire moyenne sur PMax atteignait 32 % du budget pour
            9 % des conversions attribuées. Un plafond à 15 % appliqué en test sur
            trois comptes a redistribué 17 points de dépense vers Search et Shopping
            propres, avec une baisse du coût par lead de 11 à 18 % selon le compte sur
            la fenêtre suivante de 30 jours. Les plus gros gains concernent les
            e-commerçants dont le panier moyen dépasse 80 € et dont PMax dépense plus
            de 2 000 € par mois : en dessous, la variance d&apos;attribution dépasse
            l&apos;effet du réglage. Deux comptes n&apos;ont vu aucun changement
            significatif. La fonctionnalité n&apos;est donc pas un levier universel,
            c&apos;est un outil de reprise de contrôle sur les comptes qui sur-dépensent
            en découverte.
          </p>

          <h2 id="mesure">Comment vérifier l&apos;impact 30 jours après le réglage ?</h2>
          <p>
            La vérification de l&apos;impact tient à trois mesures précises, prises
            exactement 30 jours après l&apos;application du plafond. Première mesure :
            la part de dépense par canal, à comparer à la cible fixée. Un écart supérieur
            à 2 points indique un problème (budget insuffisant, canal inéligible pour la
            campagne). Deuxième mesure : le coût par conversion global, à comparer à la
            fenêtre équivalente des 30 jours précédant le changement. Un gain inférieur
            à 5 % relève du bruit statistique sur un budget mensuel inférieur à 3 000 €.
            Troisième mesure : la part de conversions sur les canaux prioritaires. Si
            elle progresse de plus de 7 points, le plafond fait son travail. Si elle
            baisse, le canal secondaire assistait des conversions attribuées en dernier
            clic ailleurs : il faut relâcher le plafond à 20 % avant de conclure. Chacune
            de ces mesures doit figurer dans le reporting mensuel.
          </p>

          <p>
            Pour aller plus loin : notre offre{" "}
            <Link href="/agence-sea">accompagnement Google Ads</Link> couvre le
            paramétrage de ces nouveaux contrôles, l&apos;article{" "}
            <Link href="/blog/performance-max-ou-shopping">
              Performance Max ou Shopping standard
            </Link>{" "}
            détaille l&apos;arbitrage entre les deux formats, et le guide{" "}
            <Link href="/blog/budget-google-ads-rentable">
              quel budget Google Ads pour être rentable
            </Link>{" "}
            donne les seuils de dépense sous lesquels le réglage par canal n&apos;a pas
            de signal exploitable.
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
                  Un audit Google Ads chiffré sous 10 jours.
                </h2>
                <p className="mt-2 max-w-md text-[14px] text-muted">
                  Envoyez l&apos;accès à votre compte : nous mesurons la part partenaire
                  réelle, les gains possibles et le plafond recommandé par campagne.
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
