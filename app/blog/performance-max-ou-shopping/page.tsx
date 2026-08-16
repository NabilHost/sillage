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
  title: "Performance Max ou Shopping : que choisir ? | Essor",
  description:
    "PMax ou Shopping standard : quand chaque campagne se justifie, comment bloquer la cannibalisation de marque, et le protocole de test à budget constant",
  path: "/blog/performance-max-ou-shopping",
  titleAbsolute: true,
  ogType: "article",
});

const FAQ_PLAIN = [
  {
    q: "Performance Max remplace-t-il le Shopping standard ?",
    a: "Non, les deux coexistent. Performance Max a remplacé le Smart Shopping fin 2022, mais le Shopping standard reste disponible et souvent préférable quand vous avez besoin de contrôle, de transparence sur les termes de recherche ou de protéger votre marque.",
  },
  {
    q: "Combien de conversions faut-il pour lancer Performance Max ?",
    a: "Google recommande au moins 30 conversions sur 30 jours pour nourrir l'algorithme. En dessous de 15, la campagne reste en apprentissage prolongé avec des résultats instables. Une boutique à quelques ventes par mois performe mieux sur un Shopping standard.",
  },
  {
    q: "Comment savoir si PMax cannibalise ma marque ?",
    a: "Regardez la part du trafic de marque dans les insights et comparez le ROAS hors marque. Un ROAS qui bondit dès le lancement est un signal d'alerte. Activez les exclusions de marque, disponibles depuis 2023, et gardez une campagne Search de marque dédiée.",
  },
  {
    q: "Peut-on combiner Shopping standard et Performance Max ?",
    a: "Oui, c'est fréquent : Shopping standard ou Search pour le contrôle et la marque, PMax pour du volume incrémental avec exclusions de marque. Cela exige un tracking propre, sinon les deux campagnes se disputent les mêmes impressions.",
  },
];

export default function ArticlePage() {
  return (
    <article>
      <JsonLd
        schemas={[
          articleSchema({
            path: "/blog/performance-max-ou-shopping",
            headline: "Performance Max ou Shopping standard : comment choisir",
            description:
              "Quand Performance Max se justifie, quand le Shopping standard suffit, les garde-fous anti-cannibalisation de marque et le protocole de test à budget constant.",
            datePublished: "2026-08-16",
            author: AUTHOR,
          }),
          personSchema(AUTHOR),
          organizationSchema(),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: "Performance Max ou Shopping", path: "/blog/performance-max-ou-shopping" },
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
            <li aria-current="page" className="text-muted">Performance Max ou Shopping</li>
          </ol>
        </nav>

        <Reveal>
          <header className="mt-8">
            <p className="flex flex-wrap items-center gap-3 text-[12px] text-muted-2">
              <span className="rounded-full border border-accent/30 bg-accent-soft px-2.5 py-0.5 font-mono text-[11px] text-accent">
                Google Ads
              </span>
              <time dateTime="2026-08-16">16 août 2026</time>
              <span>8 min de lecture</span>
            </p>
            <h1 className="mt-4 text-[clamp(2rem,4.4vw,3.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
              Performance Max ou Shopping, que <em className="em-accent">choisir</em> ?
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Performance Max promet le volume, le Shopping standard promet le contrôle.
              Le bon choix dépend de votre catalogue, de vos données de conversion et
              d&apos;un piège trop souvent ignoré : la cannibalisation de votre marque.
            </p>
            <p className="mt-5 border-y border-border py-3 text-[13px] text-muted-2">
              Par Claire Vasseur, directrice SEO. Sources : documentation Google Ads
              relevée en juin 2026 et nos reprises de comptes e-commerce.
            </p>
          </header>
        </Reveal>

        <div className="article-prose mt-10 pb-10">
          <h2 id="difference">Performance Max et Shopping standard, quelle différence concrète ?</h2>
          <p>
            Performance Max et le Shopping standard ne jouent pas dans le même espace.
            Le Shopping standard diffuse votre flux produit sur l&apos;onglet Shopping et
            les résultats de recherche, avec des placements identifiables et des termes
            de recherche que vous pouvez exclure un par un. Performance Max, lancé en
            2021 et devenu le remplaçant du Smart Shopping fin 2022, fusionne sept
            inventaires dans une seule campagne : Recherche, Shopping, Display, YouTube,
            Gmail, Discover et Maps. L&apos;automatisation choisit seule la répartition
            du budget, les enchères et les audiences, à partir de votre flux et de vos
            assets. La contrepartie est la transparence : PMax ne détaille ni les
            placements exacts ni la majorité des termes déclencheurs. Concrètement, vous
            échangez le contrôle et la lisibilité du Shopping standard contre une portée
            plus large et une optimisation cross-canal. Ce choix n&apos;est pas
            cosmétique : il change ce que vous pouvez piloter et diagnostiquer.
          </p>

          <table>
            <thead>
              <tr>
                <th scope="col">Critère</th>
                <th scope="col">Shopping standard</th>
                <th scope="col">Performance Max</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Placements</td>
                <td>Recherche + onglet Shopping</td>
                <td>7 inventaires Google</td>
              </tr>
              <tr>
                <td>Termes de recherche</td>
                <td>Visibles, exclusions possibles</td>
                <td>Partiels (insights limités)</td>
              </tr>
              <tr>
                <td>Conversions conseillées / 30 j</td>
                <td>Dès quelques ventes</td>
                <td>30 et plus</td>
              </tr>
              <tr>
                <td>Risque de cannibalisation marque</td>
                <td>Faible</td>
                <td>Élevé sans exclusions</td>
              </tr>
              <tr>
                <td>Idéal pour</td>
                <td>Petit catalogue, contrôle, reprise</td>
                <td>Grand catalogue, volume, full-funnel</td>
              </tr>
            </tbody>
          </table>

          <div className="callout">
            <span className="callout-label">À retenir</span>
            <p>
              Performance Max si catalogue large, 30 conversions par mois et plus, assets
              solides et exclusions de marque en place. Shopping standard pour le
              contrôle, les petits budgets et les reprises de compte. Dans le doute, on
              teste à budget constant.
            </p>
          </div>

          <h2 id="quand-pmax">Quand Performance Max se justifie-t-il vraiment ?</h2>
          <p>
            Performance Max donne son plein potentiel dans des conditions précises, pas
            par défaut. La première est le volume de données : Google recommande au moins
            30 conversions sur 30 jours pour nourrir l&apos;algorithme, et en dessous de
            15 la campagne reste en apprentissage prolongé, aux résultats erratiques. La
            deuxième est un catalogue large et une valeur par commande suffisante pour
            absorber la dépense Display et YouTube que PMax impose. La troisième est la
            disponibilité d&apos;assets solides : titres, descriptions, images et vidéos,
            faute de quoi Google génère des vidéos automatiques de faible qualité. La
            quatrième est un objectif complet assumé, où la prospection compte autant que
            la conversion immédiate. Réunies, ces conditions font de PMax un vrai levier
            de croissance. Isolées, elles produisent surtout une dépense diluée. Un
            e-commerce à 40 conversions mensuelles avec un bon flux est un bien meilleur
            candidat qu&apos;une boutique à 8 ventes par mois.
          </p>

          <h2 id="quand-shopping">Quand le Shopping standard reste-t-il le meilleur choix ?</h2>
          <p>
            Le Shopping standard garde l&apos;avantage dès que le contrôle prime sur la
            portée. Une boutique avec un petit catalogue, moins de 15 conversions par
            mois, ou un budget média sous 2 000 € mensuels a tout intérêt à y rester : la
            dépense se concentre sur l&apos;intention d&apos;achat, sans fuite vers le
            Display ou YouTube. La transparence est le second argument. Le Shopping
            standard expose ses termes de recherche, ce qui permet d&apos;exclure les
            requêtes hors sujet et de comprendre précisément ce qui convertit.
            C&apos;est irremplaçable pour une reprise de compte, où la première tâche est
            de savoir où part l&apos;argent. Enfin, la protection de la marque est
            native : un Shopping standard ne se superpose pas silencieusement à votre
            Search de marque. Nous conservons le Shopping standard sur près de la moitié
            des comptes que nous reprenons, au moins le temps de rétablir un tracking
            fiable avant de tester l&apos;automatisation.
          </p>

          <h2 id="cannibalisation">Comment éviter que Performance Max cannibalise votre marque ?</h2>
          <p>
            La cannibalisation de marque est le piège numéro un de Performance Max. Par
            défaut, PMax capte les requêtes contenant votre nom de marque, les moins
            chères et les plus rentables, et s&apos;en attribue les conversions : le ROAS
            affiché grimpe alors que ces ventes auraient eu lieu sans un euro de plus.
            Trois garde-fous limitent l&apos;effet. Le premier : activer les exclusions
            de marque au niveau du compte, disponibles depuis 2023, pour empêcher PMax de
            diffuser sur vos termes de marque. Le deuxième : conserver une campagne Search
            de marque dédiée, pilotée et lisible, plutôt que de laisser
            l&apos;automatisation absorber ce trafic. Le troisième : suivre la part du
            trafic de marque dans les insights et comparer le ROAS hors marque, seul
            indicateur honnête. Sur une reprise récente, retirer la marque de PMax a fait
            passer le ROAS déclaré de 6,2 à 3,8, soit la vraie performance incrémentale
            du canal.
          </p>

          <h2 id="protocole">Quel protocole de test à budget constant permet de trancher ?</h2>
          <p>
            Un test à budget constant est la seule façon de trancher entre les deux
            formats sans se raconter d&apos;histoires. Le principe : garder la dépense
            totale identique, répartir le même budget entre une campagne Shopping
            standard et une campagne Performance Max sur le même catalogue, et laisser
            tourner 4 à 6 semaines, le temps de sortir de l&apos;apprentissage. Les
            exclusions de marque sont posées des deux côtés, pour comparer
            l&apos;incrémental et non le trafic de marque. Trois indicateurs décident : le
            ROAS hors marque, le taux de nouveaux clients, et le coût par acquisition réel
            après retours produits. Google propose des expériences intégrées qui
            répartissent le trafic automatiquement, ce qui évite les biais de
            saisonnalité. La règle que nous appliquons : on ne bascule 100 % du budget sur
            PMax que s&apos;il bat le Shopping standard sur au moins deux des trois
            indicateurs, sur la durée complète du test, jamais sur une bonne semaine
            isolée.
          </p>

          <h2 id="combiner">Faut-il choisir, ou combiner les deux ?</h2>
          <p>
            Choisir entre Performance Max et Shopping standard est souvent un faux
            dilemme : les comptes les plus solides combinent les deux. Le Shopping
            standard, ou une campagne Search dédiée, garde le contrôle sur les produits
            stratégiques et la marque ; Performance Max prend le relais sur le reste du
            catalogue pour chercher du volume incrémental, exclusions de marque activées.
            Cette architecture demande un tracking propre et une discipline de mesure,
            sinon les deux campagnes se disputent les mêmes impressions. Voici la
            concession honnête : Performance Max n&apos;est pas un gain automatique. Sur
            des comptes de moins de 15 conversions mensuelles ou à faible marge, la
            dépense Display et YouTube imposée dilue le ROAS global, et sa boîte noire
            complique le diagnostic. Nous avons vu plusieurs comptes regagner en
            rentabilité nette en revenant au Shopping standard. Le bon réflexe n&apos;est
            pas de suivre la recommandation par défaut de Google, mais de tester, mesurer
            l&apos;incrémental, et n&apos;automatiser que ce qui le mérite.
          </p>

          <p>
            Pour aller plus loin : notre page{" "}
            <Link href="/agence-sea">agence Google Ads</Link> détaille notre pilotage à
            la marge, l&apos;article{" "}
            <Link href="/blog/budget-google-ads-rentable">
              quel budget Google Ads pour être rentable
            </Link>{" "}
            pose les seuils chiffrés, et vous pouvez{" "}
            <Link href="/contact">demander un audit de compte</Link> pour chiffrer les
            fuites avant d&apos;arbitrer.
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
                  Votre compte fuit, probablement.
                </h2>
                <p className="mt-2 max-w-md text-[14px] text-muted">
                  Envoyez votre compte Google Ads : audit de reprise chiffré, cannibalisation
                  de marque et fuites identifiées en euros par mois.
                </p>
              </div>
              <MagneticButton href="/contact">Faire auditer mon compte</MagneticButton>
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
