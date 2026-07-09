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
  title: "Combien coûte une agence SEO en 2026 ? Grilles réelles | Sillage",
  description:
    "Tarifs SEO 2026 en France : 800 à 5 000 € HT/mois selon le profil, audit de 2 400 à 4 800 €. Grille détaillée, pièges de facturation et questions à poser avant de signer",
  path: "/blog/cout-agence-seo-2026",
  titleAbsolute: true,
  ogType: "article",
});

const FAQ_PLAIN = [
  {
    q: "Quel est le prix moyen d'une agence SEO en France ?",
    a: "Entre 800 et 5 000 € HT par mois selon la taille du site et l'intensité de l'accompagnement. Un site vitrine PME se situe entre 800 et 2 000 €, un e-commerce entre 2 000 et 5 000 €, les grands comptes au-delà. Un audit initial seul coûte entre 1 500 et 5 000 € HT.",
  },
  {
    q: "Pourquoi de tels écarts de prix entre agences ?",
    a: "Trois facteurs dominent : qui travaille réellement sur le compte (senior ou junior, interne ou sous-traité), ce qui est inclus (la production de contenu et le netlinking sont souvent facturés en plus), et le modèle économique de l'agence (volume de comptes par consultant). Un tarif bas avec 20 comptes par consultant revient plus cher qu'un tarif moyen avec 6 comptes.",
  },
  {
    q: "Le SEO pas cher est-il une fausse économie ?",
    a: "En dessous de 600 € par mois, le temps réellement passé sur votre site est de quelques heures : trop peu pour produire un effet sur un marché concurrentiel. Pire, certaines pratiques low-cost (liens achetés en réseau, contenu généré en masse) créent un risque de pénalité qui coûte plus cher à réparer que l'économie réalisée.",
  },
  {
    q: "Audit payant ou audit gratuit : que choisir ?",
    a: "Un audit gratuit est un document commercial : utile pour un premier contact, insuffisant pour décider. Un audit payant (1 500 à 5 000 € HT) engage la responsabilité de l'agence sur un livrable réel : crawl complet, données Search Console, priorités chiffrées. Le bon test : demandez un exemple d'audit anonymisé avant de payer.",
  },
];

export default function ArticlePage() {
  return (
    <article>
      <JsonLd
        schemas={[
          articleSchema({
            path: "/blog/cout-agence-seo-2026",
            headline: "Combien coûte une agence SEO en 2026 ? Grilles réelles et pièges",
            description:
              "Tarifs SEO 2026 en France : grille par profil de site, ce que cachent les écarts de prix, et les questions à poser avant de signer.",
            datePublished: "2026-07-02",
            author: AUTHOR,
          }),
          personSchema(AUTHOR),
          organizationSchema(),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: "Coût d'une agence SEO en 2026", path: "/blog/cout-agence-seo-2026" },
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
            <li aria-current="page" className="text-muted">Coût d&apos;une agence SEO</li>
          </ol>
        </nav>

        <Reveal>
          <header className="mt-8">
            <p className="flex flex-wrap items-center gap-3 text-[12px] text-muted-2">
              <span className="rounded-full border border-accent/30 bg-accent-soft px-2.5 py-0.5 font-mono text-[11px] text-accent">
                SEO
              </span>
              <time dateTime="2026-07-02">2 juillet 2026</time>
              <span>7 min de lecture</span>
            </p>
            <h1 className="mt-4 text-[clamp(2rem,4.4vw,3.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
              Combien coûte une agence SEO en <em className="em-accent">2026</em> ?
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              De 800 à 5 000 € HT par mois : l&apos;écart est réel, et rarement expliqué.
              Voici la grille pratiquée en France, ce que cachent les extrêmes, et les
              cinq questions qui protègent votre budget.
            </p>
            <p className="mt-5 border-y border-border py-3 text-[13px] text-muted-2">
              Par Claire Vasseur, directrice SEO. Sources : grilles publiques de 30
              agences françaises relevées en juin 2026, plus nos propres devis.
            </p>
          </header>
        </Reveal>

        <div className="article-prose mt-10 pb-10">
          <h2 id="grille">Quelle est la grille tarifaire réelle en France ?</h2>
          <p>
            Le marché français du SEO se structure en trois paliers assez stables. Les
            indépendants et petites agences facturent entre 600 et 1 500 € HT par mois,
            audit souvent inclus mais production de contenu en supplément. Les agences
            intermédiaires, dont Sillage fait partie, pratiquent entre 1 500 et
            3 500 € HT par mois pour un accompagnement complet : technique, contenu,
            netlinking et reporting. Les grands cabinets et agences médias dépassent
            5 000 € HT mensuels, avec des équipes larges et des frais de structure
            assumés. L&apos;audit initial seul, lui, va de 1 500 à 5 000 € HT selon la
            taille du site. Ces chiffres proviennent des grilles publiques de 30
            agences françaises relevées en juin 2026 : les écarts reflètent moins la
            qualité que le modèle économique de chaque structure.
          </p>

          <table>
            <thead>
              <tr>
                <th scope="col">Profil de site</th>
                <th scope="col">Fourchette mensuelle</th>
                <th scope="col">Audit initial</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Site vitrine PME (moins de 100 pages)</td>
                <td>800 à 2 000 € HT</td>
                <td>1 500 à 2 500 € HT</td>
              </tr>
              <tr>
                <td>E-commerce (500 à 50 000 références)</td>
                <td>2 000 à 5 000 € HT</td>
                <td>2 500 à 4 800 € HT</td>
              </tr>
              <tr>
                <td>SaaS / éditeur avec blog volumineux</td>
                <td>1 800 à 4 000 € HT</td>
                <td>2 400 à 4 000 € HT</td>
              </tr>
              <tr>
                <td>Grand compte, multi-pays</td>
                <td>5 000 € HT et plus</td>
                <td>Sur devis</td>
              </tr>
            </tbody>
          </table>

          <div className="callout">
            <span className="callout-label">À retenir</span>
            <p>
              Chez Sillage : accompagnement dès 1 800 € HT par mois, audit seul de
              2 400 à 4 800 € HT, chaque livrable nommé dans le devis.
            </p>
          </div>

          <h2 id="ecarts">Pourquoi de tels écarts entre agences ?</h2>
          <p>
            Trois variables expliquent l&apos;essentiel des écarts de prix entre
            agences SEO. La première : qui travaille sur votre compte. Un consultant
            senior interne coûte à l&apos;agence trois à quatre fois plus qu&apos;un
            junior ou qu&apos;un sous-traitant offshore, et cela se retrouve dans le
            tarif. La deuxième : le périmètre réel. Beaucoup de contrats à 900 € par
            mois excluent la production de contenu et le netlinking, facturés en
            supplément, ce qui double la facture effective. La troisième : le nombre de
            comptes par consultant. À 20 comptes par personne, chaque client reçoit
            quelques heures d&apos;attention mensuelle ; à 6 comptes, le suivi est
            réel. Avant de comparer deux devis, ramenez-les à une question simple :
            combien d&apos;heures de travail senior par mois, et sur quels livrables
            nommés ?
          </p>

          <h2 id="pieges">Quels pièges de facturation éviter ?</h2>
          <p>
            Quatre clauses méritent une lecture attentive avant signature. Les
            engagements de 12 mois signés avant tout résultat : un prestataire confiant
            accepte un engagement court, trois mois suffisent pour juger une
            trajectoire. Les rapports fondés sur les positions uniquement : un rapport
            honnête montre les sessions organiques et les conversions, pas seulement
            des mots-clés qui montent. Le netlinking « inclus » sans détail : demandez
            la liste des domaines des six derniers mois, les réseaux de sites se
            repèrent en dix minutes. Enfin la propriété des livrables : contenus,
            études et accès Search Console doivent vous appartenir contractuellement,
            sinon changer d&apos;agence coûte le prix d&apos;une reconstruction
            complète. Aucune de ces clauses n&apos;est illégale, mais chacune déplace
            le risque du prestataire vers vous.
          </p>

          <h2 id="rentabilite">À partir de quand le SEO est-il rentable ?</h2>
          <p>
            Le calcul tient en trois nombres : le coût mensuel de l&apos;accompagnement,
            la valeur d&apos;un client acquis, et le volume de recherche réellement
            disponible sur votre marché. Exemple concret tiré de nos missions : une PME
            industrielle paie 1 800 € HT par mois, sa valeur client moyenne est de
            9 000 €, son marché génère environ 2 400 recherches qualifiées mensuelles.
            Il lui suffit de 3 clients organiques par an pour que le canal soit
            rentable ; elle en a signé 11 la deuxième année. À l&apos;inverse, un
            marché à 150 recherches mensuelles avec un panier de 80 € ne remboursera
            jamais un accompagnement complet : dans ce cas, nous le disons au premier
            appel et nous orientons vers <Link href="/agence-sea">Google Ads</Link> ou
            un paramétrage ponctuel. La rentabilité du SEO est une propriété de votre
            marché avant d&apos;être une promesse d&apos;agence.
          </p>

          <h2 id="repartition">Comment se répartit un budget SEO mensuel ?</h2>
          <p>
            Un accompagnement à 1 800 € HT par mois bien construit se décompose en
            quatre postes dont les proportions varient selon la phase. En début de
            mission, la technique domine : 40 à 50 % du temps part dans les
            corrections de crawl, d&apos;indexation et de performance, parce que rien
            ne sert de publier sur un socle cassé. En régime de croisière, le contenu
            prend la première place avec 40 à 50 % du budget : pages piliers,
            comparatifs, mises à jour des contenus qui plafonnent. L&apos;autorité
            (relations presse, études citables) pèse 15 à 20 % en continu. Le
            pilotage, enfin, ne devrait jamais dépasser 15 % : un prestataire qui
            passe un tiers de son temps en réunions et en rapports facture de la
            coordination, pas du référencement. Demandez cette répartition dans le
            devis : sa simple présence est un bon filtre.
          </p>

          <p>
            Pour aller plus loin : notre page <Link href="/agence-seo">agence SEO</Link>{" "}
            détaille livrables et méthode, l&apos;article{" "}
            <Link href="/blog/budget-google-ads-rentable">
              quel budget Google Ads pour être rentable
            </Link>{" "}
            couvre le canal payant, et la <Link href="/a-propos">méthode Sillage</Link>{" "}
            explique la falsifiabilité de chaque recommandation.
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
                  Un devis qui nomme chaque livrable.
                </h2>
                <p className="mt-2 max-w-md text-[14px] text-muted">
                  Envoyez votre URL : audit chiffré sous 10 jours, et un avis honnête
                  sur la rentabilité du SEO pour votre marché.
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
