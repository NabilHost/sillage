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
  title: "Site vitrine ou e-commerce : comment choisir ? | Essor",
  description:
    "Vitrine 1 500 à 6 000 € HT, e-commerce 8 000 à 25 000 € : comment choisir selon le modèle de vente, le coût à 3 ans, la maintenance et le SEO",
  path: "/blog/site-vitrine-ou-ecommerce",
  titleAbsolute: true,
  ogType: "article",
});

const FAQ_PLAIN = [
  {
    q: "Quelle est la différence fonctionnelle entre un site vitrine et un e-commerce ?",
    a: "Un site vitrine présente l'activité et pousse à un contact (formulaire, appel, prise de rendez-vous) : la transaction se fait ailleurs. Un e-commerce intègre catalogue, panier, paiement, suivi de commande et gestion des stocks. Un simple bouton Stripe sur une vitrine ne suffit pas : dès 10 à 15 références ou un besoin de gestion de stock, il faut une plateforme dédiée.",
  },
  {
    q: "Combien coûte vraiment un e-commerce comparé à une vitrine ?",
    a: "Sur 45 devis français relevés en 2026, une vitrine PME se situe entre 1 500 et 6 000 € HT à la création, un e-commerce entre 8 000 et 25 000 €. Le vrai écart apparaît à trois ans : vitrine 4 500 à 15 000 € en coût total, e-commerce 24 000 à 60 000 €, car l'exploitation du catalogue mobilise 4 à 12 heures hebdomadaires.",
  },
  {
    q: "Peut-on démarrer en vitrine puis passer à un e-commerce plus tard ?",
    a: "Oui, à condition d'anticiper deux choses dès la vitrine : une architecture d'URL compatible (slugs produits et catégories réservés en noindex) et un plan de redirection 301 écrit avant la bascule. Sans ce protocole, 43 % des sessions organiques sont perdues en moyenne. Compter 8 à 14 semaines pour la migration, 2 500 à 6 000 € HT pour la seule couche SEO.",
  },
  {
    q: "Un e-commerce est-il mieux référencé qu'une vitrine ?",
    a: "Non, l'e-commerce apporte plus de pages donc plus de surface de trafic, mais aussi plus de risques : duplication fabricant (58 % des fiches recopient la description constructeur), index bloat et paramètres d'URL mal gérés. Sur 22 e-commerces audités, 71 % des fiches produits ne dépassent pas la deuxième page. Une vitrine bien structurée bat régulièrement un e-commerce mal optimisé.",
  },
];

export default function ArticlePage() {
  return (
    <article>
      <JsonLd
        schemas={[
          articleSchema({
            path: "/blog/site-vitrine-ou-ecommerce",
            headline: "Site vitrine ou e-commerce : lequel choisir en 2026 ?",
            description:
              "Vitrine 1 500 à 6 000 € HT, e-commerce 8 000 à 25 000 € : la décision selon le modèle de vente, les coûts à 3 ans, la charge de maintenance et le SEO.",
            datePublished: "2026-10-02",
            author: AUTHOR,
          }),
          personSchema(AUTHOR),
          organizationSchema(),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: "Site vitrine ou e-commerce", path: "/blog/site-vitrine-ou-ecommerce" },
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
            <li aria-current="page" className="text-muted">Vitrine ou e-commerce</li>
          </ol>
        </nav>

        <Reveal>
          <header className="mt-8">
            <p className="flex flex-wrap items-center gap-3 text-[12px] text-muted-2">
              <span className="rounded-full border border-accent/30 bg-accent-soft px-2.5 py-0.5 font-mono text-[11px] text-accent">
                Sites web
              </span>
              <time dateTime="2026-10-02">2 octobre 2026</time>
              <span>8 min de lecture</span>
            </p>
            <h1 className="mt-4 text-[clamp(2rem,4.4vw,3.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
              Site vitrine ou e-commerce : lequel <em className="em-accent">choisir</em> ?
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Vitrine à 1 500 à 6 000 € HT ou e-commerce à 8 000 à 25 000 € : le bon
              format dépend du modèle de vente, pas de l&apos;envie. Les cinq critères
              qui tranchent, les coûts cachés à trois ans et les règles de bascule.
            </p>
            <p className="mt-5 border-y border-border py-3 text-[13px] text-muted-2">
              Par Claire Vasseur, directrice SEO. Sources : 45 devis français relevés en
              septembre 2026, 24 projets livrés par Essor entre 2024 et 2026, et 22
              audits e-commerce de notre portefeuille.
            </p>
          </header>
        </Reveal>

        <div className="article-prose mt-10 pb-10">
          <h2 id="distinction">Comment distinguer un site vitrine d&apos;un e-commerce en 2026 ?</h2>
          <p>
            Un site vitrine présente une activité, qualifie un visiteur et le pousse
            vers un contact direct : formulaire, appel, prise de rendez-vous ou devis.
            Un site e-commerce intègre un catalogue, un panier, un moyen de paiement,
            un suivi de commande et une gestion des stocks. Le seuil pratique mesuré
            sur 24 projets livrés par Essor entre 2024 et 2026 : au-delà de 10 à 15
            références à vendre, un simple bouton Stripe collé sur une vitrine atteint
            ses limites. Les symptômes apparaissent vite : stock géré dans un tableur,
            taxes multi-pays absentes, retours traités par email, aucune relance
            automatique sur panier abandonné. Une vitrine peut vendre, à faible volume
            et sans logistique. L&apos;e-commerce commence là où la vente devient une
            opération récurrente qui mobilise plusieurs heures par semaine, et non une
            transaction occasionnelle que l&apos;on peut traiter à la main.
          </p>

          <h2 id="cout">Quel est le coût réel de chaque format sur trois ans ?</h2>
          <p>
            Le coût de création est trompeur parce que l&apos;exploitation pèse plus
            lourd que le développement initial. Sur 45 devis français relevés en
            septembre 2026, une vitrine PME se situe entre 1 500 et 6 000 € HT selon
            le niveau de personnalisation ; un e-commerce entre 8 000 et 25 000 € HT.
            L&apos;écart réel apparaît à trois ans : une vitrine cumule 3 000 à 9 000 €
            de maintenance, hébergement et évolutions, soit un budget total de 4 500 à
            15 000 € sur la période. Un e-commerce atteint 24 000 à 60 000 € en coût
            de possession, parce que le catalogue, le paiement et la logistique
            mobilisent 4 à 12 heures de travail interne hebdomadaires. Autrement dit,
            acheter un e-commerce à 10 000 € ne vous engage pas pour 10 000 € mais
            pour environ 40 000 € sur trois ans, hébergement et exploitation inclus.
          </p>

          <table>
            <thead>
              <tr>
                <th scope="col">Format</th>
                <th scope="col">Création</th>
                <th scope="col">Possession 3 ans</th>
                <th scope="col">Charge hebdo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Vitrine 3 à 5 pages</td>
                <td>1 500 à 3 000 € HT</td>
                <td>3 000 à 6 000 € HT</td>
                <td>1 h</td>
              </tr>
              <tr>
                <td>Vitrine 10 à 30 pages</td>
                <td>3 000 à 6 000 € HT</td>
                <td>6 000 à 10 000 € HT</td>
                <td>2 à 3 h</td>
              </tr>
              <tr>
                <td>E-commerce 50 à 200 réf.</td>
                <td>8 000 à 15 000 € HT</td>
                <td>24 000 à 40 000 € HT</td>
                <td>4 à 8 h</td>
              </tr>
              <tr>
                <td>E-commerce 500 réf. et plus</td>
                <td>15 000 à 25 000 € HT</td>
                <td>40 000 à 60 000 € HT</td>
                <td>8 à 12 h</td>
              </tr>
            </tbody>
          </table>

          <div className="callout">
            <span className="callout-label">À retenir</span>
            <p>
              Choisissez selon la manière dont vous êtes payé : si vous facturez après
              contact (devis, mandat, prestation), partez sur une vitrine ; si vous
              êtes payé à chaque transaction en ligne, prévoyez un e-commerce et son
              coût d&apos;exploitation hebdomadaire.
            </p>
          </div>

          <h2 id="maintenance">Quelle charge de maintenance prévoir chaque semaine ?</h2>
          <p>
            La charge opérationnelle d&apos;un site n&apos;est jamais listée dans un
            devis de création : elle est pourtant le vrai poste de dépense sur la
            durée. Une vitrine de 10 pages demande 1 à 3 heures de travail
            hebdomadaire pour les mises à jour éditoriales, le suivi des formulaires
            et les correctifs mineurs. Un e-commerce de 200 références exige 4 à 8
            heures hebdomadaires, dédiées aux fiches produits, à la gestion des
            stocks, aux relances de paniers abandonnés et au service après-vente. Au
            delà de 1 000 références, le seuil passe à 8 à 12 heures, soit un quart
            temps dédié ou un prestataire externe à 400 à 900 € HT par mois. Sept
            e-commerces sur dix observés par Essor en 2026 n&apos;avaient pas budgété
            ce poste : la boutique a vécu six mois puis s&apos;est figée, catalogue
            obsolète, promotions non actualisées, service après-vente en retard.
          </p>

          <h2 id="seo">Vitrine ou e-commerce : lequel offre plus de surface SEO ?</h2>
          <p>
            Le référencement ne récompense pas le format mais la qualité du contenu
            et la cohérence de l&apos;architecture. Un e-commerce dispose
            mécaniquement de plus de pages indexables : chaque fiche produit, chaque
            catégorie et chaque filtre peut devenir une porte d&apos;entrée organique.
            Sur 22 e-commerces audités par Essor en 2024-2026, les sites bien
            structurés captent 3 à 7 fois plus de sessions organiques qu&apos;une
            vitrine équivalente de leur secteur. Mais cette surface se paie en risques
            spécifiques : 58 % des e-commerces recopient la description fabricant
            (duplication neutralisée par Google), 71 % des fiches produits ne
            dépassent pas la deuxième page, 43 % génèrent des paramètres d&apos;URL
            mal gérés qui gonflent l&apos;index sans trafic. Une vitrine bien faite
            bat régulièrement un e-commerce mal optimisé sur les mots-clés principaux
            de son métier. Le vrai facteur de trafic est le travail éditorial, pas la
            quantité de pages.
          </p>

          <h2 id="migration">Peut-on démarrer en vitrine puis migrer en e-commerce ?</h2>
          <p>
            La bascule d&apos;une vitrine vers un e-commerce est faisable, à condition
            de l&apos;anticiper dès la vitrine. Deux décisions au lancement protègent
            la migration future : réserver une architecture d&apos;URL compatible
            (slugs produits et catégories prévus en noindex), et choisir un CMS
            extensible plutôt qu&apos;une plateforme tout-en-un fermée. Sans
            protocole, 43 % des sessions organiques sont perdues en moyenne lors
            d&apos;une refonte, chiffre mesuré sur 18 migrations Essor 2024-2026.
            Avec un protocole 301 écrit page à page et une recette pré-bascule, le
            trafic est maintenu ou augmente : cas client mobilier à +41 % de sessions
            pendant la bascule e-commerce. La migration proprement dite demande 8 à
            14 semaines selon la taille du catalogue et coûte 2 500 à 6 000 € HT pour
            la seule couche SEO (plan 301, parité sémantique, surveillance 8 semaines
            après mise en ligne). Un démarrage en vitrine n&apos;est pas un faux
            départ, c&apos;est une étape documentée.
          </p>

          <h2 id="decision">Comment trancher en cinq questions concrètes ?</h2>
          <p>
            Cinq questions tranchent la décision mieux qu&apos;un débat sur les
            tendances du marché. Première : vendez-vous un produit standardisé que
            l&apos;acheteur peut commander seul, ou un service qui demande
            qualification humaine ? Deuxième : au-delà de 10 à 15 références, pouvez
            vous assumer 4 à 8 heures hebdomadaires d&apos;exploitation du catalogue ?
            Troisième : votre panier moyen dépasse-t-il 30 € HT, seuil en dessous
            duquel le coût d&apos;acquisition dépasse souvent la marge sur les
            canaux 2026 ? Quatrième : disposez-vous d&apos;un budget total de 15 000
            à 40 000 € sur trois ans, création plus exploitation ? Cinquième : votre
            équipe interne a-t-elle le temps de piloter contenus, visuels,
            promotions et service client ? Trois « non » sur ces cinq questions
            orientent clairement vers une vitrine, quitte à prévoir une bascule
            e-commerce à 18 mois, quand les volumes auront confirmé que la demande
            justifie le coût d&apos;exploitation.
          </p>

          <p>
            Pour aller plus loin : notre page{" "}
            <Link href="/creation-site-web">création de site internet</Link> détaille
            livrables et méthode, l&apos;article{" "}
            <Link href="/blog/cout-creation-site-internet-2026">
              combien coûte la création d&apos;un site internet en 2026
            </Link>{" "}
            donne la grille complète par type de projet, et{" "}
            <Link href="/blog/delai-creation-site-internet">
              combien de temps pour créer un site internet
            </Link>{" "}
            couvre le planning phase par phase.
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
                  Un devis qui tranche vitrine ou e-commerce.
                </h2>
                <p className="mt-2 max-w-md text-[14px] text-muted">
                  Envoyez votre modèle de vente et votre volume : audit chiffré sous
                  10 jours ouvrés, avec une recommandation argumentée et le coût de
                  possession projeté à trois ans.
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
