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
  title: "Combien coûte une agence Google Ads en 2026 ? | Essor",
  description:
    "Honoraires 500 à 3 000 € HT/mois pour une agence Google Ads. Fixe ou pourcentage du budget, seuil de rentabilité, pièges de facturation",
  path: "/blog/cout-agence-google-ads",
  titleAbsolute: true,
  ogType: "article",
});

const FAQ_PLAIN = [
  {
    q: "Quel est le prix moyen d'une agence Google Ads en France ?",
    a: "Entre 500 et 3 000 € HT par mois pour un accompagnement complet, selon la taille du budget publicitaire et la complexité du compte. Une PME avec 2 000 € HT de budget média se situe autour de 600 à 900 € HT d'honoraires. Un e-commerce à 15 000 € HT de budget paie 1 800 à 2 800 € HT. Un setup initial ajoute 800 à 3 500 € HT une seule fois.",
  },
  {
    q: "Vaut-il mieux payer au forfait ou au pourcentage du budget ?",
    a: "Le forfait fixe protège le client contre le contre-incitatif du pourcentage : quand l'agence facture 15 % du budget média, réduire une dépense inutile réduit aussi ses honoraires. Chez Essor, nous facturons uniquement au forfait, entre 500 et 3 000 € HT par mois selon la complexité. Le pourcentage garde du sens au-delà de 30 000 € HT de budget mensuel piloté au ROAS.",
  },
  {
    q: "À partir de quel budget faut-il déléguer ses campagnes Google Ads ?",
    a: "Le seuil pratique se situe autour de 1 500 € HT de budget média mensuel. En dessous, la somme du budget et des honoraires (500 à 800 €) dépasse 30 % du total, rarement rentable hors secteurs à panier moyen élevé. Entre 1 500 et 4 000 €, la délégation devient rentable si la marge par lead dépasse 60 €. Au-delà, elle s'autofinance par les économies d'optimisation.",
  },
  {
    q: "Combien de temps un compte Google Ads met-il à devenir rentable ?",
    a: "Un compte bien structuré atteint son coût par lead cible en 8 à 14 semaines. Les 30 premiers jours servent à nourrir les enchères automatiques (30 conversions minimum requises par le machine learning Google), le mois 2 nettoie les requêtes non rentables, les mois 3 et 4 stabilisent le ROAS. Avant 6 semaines, aucun chiffre n'est fiable statistiquement.",
  },
];

export default function ArticlePage() {
  return (
    <article>
      <JsonLd
        schemas={[
          articleSchema({
            path: "/blog/cout-agence-google-ads",
            headline: "Combien coûte une agence Google Ads en 2026 ? Grille réelle et pièges",
            description:
              "Grille tarifaire 2026 des agences Google Ads en France, forfait ou pourcentage du budget, seuil de délégation et clauses à surveiller avant de signer.",
            datePublished: "2026-09-17",
            author: AUTHOR,
          }),
          personSchema(AUTHOR),
          organizationSchema(),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: "Coût d'une agence Google Ads en 2026", path: "/blog/cout-agence-google-ads" },
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
            <li aria-current="page" className="text-muted">Coût d&apos;une agence Google Ads</li>
          </ol>
        </nav>

        <Reveal>
          <header className="mt-8">
            <p className="flex flex-wrap items-center gap-3 text-[12px] text-muted-2">
              <span className="rounded-full border border-accent/30 bg-accent-soft px-2.5 py-0.5 font-mono text-[11px] text-accent">
                Google Ads
              </span>
              <time dateTime="2026-09-17">17 septembre 2026</time>
              <span>8 min de lecture</span>
            </p>
            <h1 className="mt-4 text-[clamp(2rem,4.4vw,3.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
              Combien coûte une agence Google Ads en <em className="em-accent">2026</em> ?
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              De 500 à 3 000 € HT par mois selon la taille du compte, plus un setup
              initial de 800 à 3 500 €. L&apos;écart entre forfait et pourcentage du
              budget change la facture réelle du simple au triple : voici la grille
              française, les pièges de facturation et le seuil de budget en dessous
              duquel déléguer n&apos;est pas rentable.
            </p>
            <p className="mt-5 border-y border-border py-3 text-[13px] text-muted-2">
              Par Claire Vasseur, directrice SEO. Sources : 26 grilles publiques
              d&apos;agences françaises relevées en septembre 2026, plus nos propres
              devis et 34 migrations de compte gérées entre 2024 et 2026.
            </p>
          </header>
        </Reveal>

        <div className="article-prose mt-10 pb-10">
          <h2 id="grille">Quelle est la grille tarifaire d&apos;une agence Google Ads en 2026 ?</h2>
          <p>
            Le marché français de la gestion Google Ads se répartit en trois paliers
            assez stables. Les freelances et micro-agences facturent entre 300 et
            800 € HT par mois pour un compte de petite taille, souvent limité à une ou
            deux campagnes suivies en autonomie partielle. Les agences intermédiaires,
            dont Essor fait partie, pratiquent des honoraires de 500 à 1 800 € HT par
            mois selon la complexité, avec un consultant dédié et un reporting
            bimensuel. Les agences médias et cabinets spécialisés e-commerce dépassent
            2 500 € HT mensuels, avec des équipes larges et des outils de bidding
            avancés. Ces fourchettes viennent de 26 grilles publiques d&apos;agences
            françaises relevées en septembre 2026, complétées par nos propres devis. Le
            setup initial d&apos;un compte représente entre 800 et 3 500 € HT
            supplémentaires, facturé une seule fois, et couvre l&apos;audit,
            l&apos;architecture des campagnes, le tracking serveur et la conversion
            API.
          </p>

          <table>
            <thead>
              <tr>
                <th scope="col">Profil de compte</th>
                <th scope="col">Honoraires mensuels</th>
                <th scope="col">Setup initial</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PME locale, 1 à 2 campagnes</td>
                <td>500 à 900 € HT</td>
                <td>800 à 1 500 € HT</td>
              </tr>
              <tr>
                <td>PME nationale, lead generation</td>
                <td>900 à 1 800 € HT</td>
                <td>1 500 à 2 500 € HT</td>
              </tr>
              <tr>
                <td>E-commerce, Shopping + PMax</td>
                <td>1 800 à 2 800 € HT</td>
                <td>2 000 à 3 500 € HT</td>
              </tr>
              <tr>
                <td>Grand compte, multi-marchés</td>
                <td>2 800 € HT et plus</td>
                <td>Sur devis</td>
              </tr>
            </tbody>
          </table>

          <div className="callout">
            <span className="callout-label">À retenir</span>
            <p>
              Chez Essor : gestion Google Ads dès 500 € HT par mois en honoraires
              fixes, jamais au pourcentage du budget, setup initial de 800 à 3 500 €
              HT et chaque livrable nommé dans le devis.
            </p>
          </div>

          <h2 id="fixe-pourcentage">Honoraires fixes ou pourcentage du budget : pourquoi ce choix change tout ?</h2>
          <p>
            Deux modèles de facturation cohabitent en France, et ils n&apos;alignent
            pas les intérêts de la même manière. Le pourcentage du budget publicitaire,
            souvent situé entre 10 et 20 %, reste dominant chez les agences réseau :
            plus le client dépense en Ads, plus l&apos;agence facture. Le problème est
            structurel, pas moral : un consultant qui passe deux heures à couper
            3 000 € de dépenses inutiles perd 300 à 600 € d&apos;honoraires mensuels,
            et ce contre-incitatif finit par se voir dans les campagnes. Les
            honoraires fixes, entre 500 et 3 000 € HT par mois selon la taille du
            compte, découplent la facture de la dépense et récompensent
            l&apos;optimisation. Sur 18 comptes migrés d&apos;un modèle à l&apos;autre
            entre 2024 et 2026, la baisse médiane de dépense inutile a atteint 22 % en
            90 jours. Le forfait suppose en revanche un périmètre précis inscrit au
            contrat.
          </p>

          <h2 id="seuil-budget">À partir de quel budget confier ses campagnes à une agence ?</h2>
          <p>
            Le calcul de rentabilité de la délégation repose sur trois nombres : le
            budget publicitaire mensuel, les honoraires de l&apos;agence et la marge
            nette dégagée par euro dépensé en Ads. En dessous de 1 500 € HT de budget
            média mensuel, ajouter 500 à 800 € d&apos;honoraires fait passer le coût
            total de gestion au-dessus de 30 % du budget, un seuil rarement rentable
            en dehors de secteurs à panier moyen très élevé. Entre 1 500 et 4 000 € HT
            de budget média, la délégation devient pertinente si la marge par lead
            dépasse 60 € ou si le compte génère du chiffre récurrent. Au-delà de
            4 000 € HT mensuels, l&apos;agence se rembourse presque toujours par les
            seules économies sur les mots-clés non rentables et les enchères mal
            calibrées. Concession honnête : sous 1 000 € de budget média, la
            formation et le pilotage interne sortent souvent gagnants face à la
            délégation.
          </p>

          <h2 id="perimetre">Que couvrent réellement les honoraires d&apos;une agence Google Ads ?</h2>
          <p>
            Un contrat Google Ads sérieux couvre six postes explicitement nommés dans
            le devis. La gestion des campagnes existantes, avec ajustement des
            enchères, des mots-clés négatifs et des budgets, occupe la moitié du
            temps mensuel. La création d&apos;annonces et l&apos;itération créative
            (RSA, extensions, visuels PMax) pèse 15 à 20 %. Le pilotage du tracking
            (Google Tag Manager, mesure améliorée, API Conversions, désactivation du
            modélisé lorsqu&apos;il fausse) demande 10 % en continu et davantage en
            début de mission. La veille sur les nouveautés Google, notamment le
            basculement d&apos;AI Max qui remplace les Dynamic Search Ads depuis
            septembre 2026, prend 5 %. Le reporting bimensuel et le point mensuel
            avec le client mobilisent 10 à 15 %. Sur 12 devis anonymisés relus en
            2026, 7 omettaient au moins deux de ces postes, dont le tracking à chaque
            fois. Découvrez notre offre de <Link href="/agence-sea">gestion Google
            Ads</Link> pour un périmètre écrit noir sur blanc.
          </p>

          <h2 id="pieges">Quels pièges de facturation éviter avant de signer ?</h2>
          <p>
            Quatre clauses méritent une lecture attentive avant tout engagement
            Google Ads. L&apos;engagement de 12 mois signé avant les premiers
            résultats : trois mois suffisent pour juger la trajectoire d&apos;un
            compte optimisé, un prestataire confiant l&apos;accepte. Le pourcentage
            du budget déguisé en fixe : certains contrats indexent les honoraires
            sur des seuils de dépense qui, une fois franchis, déclenchent une hausse
            automatique de 20 à 40 %. Les frais de setup facturés séparément à
            chaque nouvelle campagne : la création d&apos;un compte se paie une fois,
            pas à chaque saison. Enfin la propriété du compte MCC : le compte Google
            Ads, les conversions et l&apos;historique doivent rester au nom du
            client, jamais du prestataire. Sur 34 changements d&apos;agence gérés en
            2024-2026, 8 clients ont dû reconstruire leur compte faute d&apos;accès
            administrateur transféré. Aucune clause n&apos;est illégale, chacune
            déplace le risque du prestataire vers vous.
          </p>

          <h2 id="rentabilite">Comment mesurer la rentabilité d&apos;une agence Google Ads ?</h2>
          <p>
            La rentabilité d&apos;une agence Google Ads se juge sur trois indicateurs
            vérifiables, jamais sur le seul ROAS déclaré par la plateforme. Le coût
            par lead qualifié, celui qui devient devis ou vente et pas un simple
            formulaire, évolue à la baisse mois après mois : un compte piloté doit
            perdre 15 à 30 % de coût par lead entre le mois 1 et le mois 6. Le taux
            d&apos;impression pertinent hors requêtes hors sujet monte de 8 à 15
            points sur la même période grâce au tri des mots-clés négatifs. Le ROAS
            mesuré via un modèle d&apos;attribution serveur (GA4, Piano, Matomo) doit
            rester dans un écart de 15 % avec le ROAS déclaré par Google Ads :
            au-delà, la plateforme surestime les conversions et le compte finance des
            clics qui ne convertissent pas. Un point mensuel qui ne montre pas ces
            trois indicateurs, chiffres à l&apos;appui, transforme la relation en
            canal de dépense pilotée à l&apos;aveugle.
          </p>

          <p>
            Pour aller plus loin : notre page{" "}
            <Link href="/agence-sea">agence Google Ads</Link> détaille la méthode et
            la grille de nos forfaits, l&apos;article{" "}
            <Link href="/blog/budget-google-ads-rentable">
              quel budget Google Ads pour être rentable
            </Link>{" "}
            pose la formule du budget minimum par secteur, et l&apos;article{" "}
            <Link href="/blog/performance-max-ou-shopping">
              Performance Max ou Shopping
            </Link>{" "}
            aide à choisir le bon format avant de comparer des devis. Notre{" "}
            <Link href="/a-propos">méthode Essor</Link> détaille la falsifiabilité de
            chaque recommandation chiffrée.
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
                  Un devis Google Ads sans pourcentage du budget.
                </h2>
                <p className="mt-2 max-w-md text-[14px] text-muted">
                  Envoyez votre URL et votre budget média : audit du compte sous 10
                  jours, forfait chiffré et avis honnête sur la rentabilité de la
                  délégation pour votre marché.
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
