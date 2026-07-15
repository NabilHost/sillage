import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { ServicePageLayout } from "@/components/services/service-page-layout";
import { TrackRecordTeaser } from "@/components/services/track-record-teaser";

export const metadata = generatePageMetadata({
  title: "Agence SEO à Paris : référencement naturel | Essor",
  description:
    "Audit technique, architecture, contenu et netlinking. Accompagnement dès 1 800 € HT/mois, indicateurs contractuels, chaque recommandation vérifiable",
  path: "/agence-seo",
  titleAbsolute: true,
});

const FAQ_PLAIN = [
  {
    q: "Que contient un audit SEO Essor ?",
    a: "Un crawl complet du site, l'analyse Search Console sur 16 mois, la revue des Core Web Vitals (LCP, INP, CLS) sur données de terrain, la validation des données structurées, l'analyse de l'architecture et du maillage interne, une revue concurrentielle sur vos 20 requêtes prioritaires. Livré en 10 jours ouvrés : rapport chiffré, score sur 100, trois priorités classées par impact.",
  },
  {
    q: "Garantissez-vous la première position sur Google ?",
    a: "Non, personne de sérieux ne le peut : les résultats dépendent de l'algorithme et de vos concurrents. Ce que nous garantissons contractuellement : les livrables (audits, contenus, corrections) et le suivi d'indicateurs avancés qui montrent en quelques semaines si la trajectoire est bonne.",
  },
  {
    q: "Faites-vous du netlinking ?",
    a: "Oui, uniquement par relations presse digitales et contenus cités naturellement. Nous n'achetons jamais de liens sur des plateformes ou des réseaux de sites : le risque de pénalité dépasse largement le gain espéré.",
  },
  {
    q: "Le SEO est-il encore utile à l'ère de ChatGPT ?",
    a: "Oui. Les moteurs IA s'appuient sur les mêmes index et les mêmes signaux que la recherche classique : une page doit être indexée et éligible aux extraits pour apparaître dans les réponses IA. Le SEO reste le socle, le GEO en est le prolongement.",
  },
];

export default function AgenceSeoPage() {
  return (
    <>
      <JsonLd
        schemas={[
          serviceSchema({
            path: "/agence-seo",
            name: "Accompagnement SEO",
            serviceType: "Référencement naturel (SEO)",
            description:
              "Audit technique, architecture de site, stratégie de contenu et netlinking. Accompagnement mensuel avec indicateurs contractuels, à partir de 1 800 € HT par mois.",
            price: "1800",
          }),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Agence SEO", path: "/agence-seo" },
          ]),
          faqPageSchema(FAQ_PLAIN),
        ]}
      />
      <ServicePageLayout
        data={{
          breadcrumb: "Agence SEO",
          h1: (
            <>
              Un référencement qui <em className="em-accent">résiste</em> aux mises à jour.
            </>
          ),
          lede: (
            <>
              Pas de recette secrète : de la <strong className="text-text">technique propre</strong>,
              une <strong className="text-text">architecture</strong> pensée pour vos requêtes, du{" "}
              <strong className="text-text">contenu</strong> qui mérite sa position, des{" "}
              <strong className="text-text">liens gagnés</strong> plutôt qu&apos;achetés.
            </>
          ),
          cta: "Demander l'audit SEO",
          asideFacts: [
            { strong: "Dès 1 800 € HT / mois.", rest: "Audit seul : 2 400 à 4 800 € HT selon la taille du site." },
            { strong: "Premier livrable sous 10 jours ouvrés.", rest: "Indicateurs de suivi contractuels dès le mois 1." },
            { strong: "Chaque recommandation est falsifiable :", rest: "elle indique comment vérifier qu'elle a échoué." },
          ],
          definitionTitle: "En quoi consiste un accompagnement SEO chez Essor ?",
          definition:
            "Un accompagnement SEO chez Essor couvre les quatre piliers du référencement naturel : la technique (crawl, indexation, Core Web Vitals, données structurées), l'architecture (arborescence et maillage interne alignés sur la demande réelle), le contenu (pages conçues pour répondre à une intention de recherche précise) et l'autorité (liens obtenus par relations presse et contenus cités). La mission démarre par un audit livré en dix jours ouvrés, avec un score global sur 100 et trois priorités classées par impact estimé. Le travail avance ensuite par sprints mensuels avec des livrables nommés. Chaque recommandation est accompagnée d'un test de falsifiabilité : l'indicateur qui permettra de constater, en quelques semaines, si elle produit l'effet attendu. Les tarifs démarrent à 1 800 € HT par mois pour un site vitrine.",
          calloutText:
            "4 piliers, des sprints mensuels, et un indicateur de vérification attaché à chaque recommandation.",
          deliverablesTitle: "Ce que vous recevez, concrètement",
          deliverablesIntro:
            "Chaque élément apparaît nommément dans le devis, avec sa date de livraison.",
          deliverables: [
            { strong: "Audit technique complet", rest: "Crawl, logs serveur, indexation, budget de crawl, chaînes de canoniques, rendu JavaScript." },
            { strong: "Revue Core Web Vitals", rest: "LCP, INP, CLS sur données de terrain (CrUX), mobile et desktop séparés, goulots décomposés." },
            { strong: "Architecture cible", rest: "Arborescence et maillage construits depuis la demande réelle, pas depuis l'organigramme." },
            { strong: "Plan éditorial trimestriel", rest: "Chaque sujet justifié par une requête, un volume et une intention documentés." },
            { strong: "Données structurées JSON-LD", rest: "Organization, Article, Product, BreadcrumbList, FAQ selon vos gabarits. Validées." },
            { strong: "Netlinking éditorial", rest: "Relations presse digitales, études citables. Jamais d'achat de liens." },
            { strong: "Tableau de bord partagé", rest: "Positions, impressions, conversions organiques. Lisible sans formation." },
            { strong: "Revue mensuelle de 45 min", rest: "Ce qui a marché, ce qui a échoué, ce qu'on arrête. Acté par écrit." },
          ],
          tableTitle: "Pour qui ce service fonctionne-t-il ?",
          tableHead: ["Profil", "Situation type", "Ce que nous faisons"],
          tableRows: [
            ["E-commerce", "500 à 50 000 références, dépendance forte à Google Ads", "Architecture de catégories, facettes maîtrisées, schema Product, contenu de catégorie"],
            ["SaaS B2B", "Blog volumineux, peu de démos organiques", "Pages piliers à intention d'achat, comparatifs, blocs citables par les IA"],
            ["PME & industrie", "Notoriété métier réelle, invisibilité en ligne", "Socle technique, pages service par expertise et par zone, SEO local si pertinent"],
            ["Éditeurs & médias", "Trafic en baisse depuis les AI Overviews", "Diagnostic d'exposition, stratégie d'entité et de citation, diversification"],
          ],
          tableNote: (
            <>
              Si votre marché ne génère pas assez de recherches pour rentabiliser un
              accompagnement, nous le disons au premier appel et nous vous orientons vers{" "}
              <Link href="/agence-sea" className="text-muted underline underline-offset-2 hover:text-accent">le SEA</Link>.
            </>
          ),
          extraSection: (
            <TrackRecordTeaser
              eyebrow="preuves SEO · comptes en gestion"
              title={
                <>
                  Le SEO, sur des comptes à <em className="em-accent">toutes</em> les
                  maturités.
                </>
              }
              lede="D'un e-commerce établi à un restaurant local suivi sur 16 mois, jusqu'à un site fraîchement lancé. Chiffres réels, captures Search Console anonymisées sous NDA."
              stats={[
                { v: "32,5 k", l: "clics SEO cumulés" },
                { v: "+41 %", l: "trafic organique gagné pendant une refonte" },
                { v: "4,7", l: "position moyenne en SEO local (16 mois)" },
                { v: "3", l: "propriétés SEO additionnelles suivies" },
              ]}
            />
          ),
          faqTitle: "Questions fréquentes sur le SEO",
          faq: FAQ_PLAIN,
          ctaFinalTitle: (
            <>
              Commencez par savoir <em className="em-accent">où</em> vous en êtes.
            </>
          ),
          ctaFinalText:
            "Audit livré en 10 jours ouvrés : score sur 100, trois priorités, estimation du potentiel. Sans engagement de suite.",
          crossLinks: (
            <>
              Souvent combiné avec :{" "}
              <Link href="/referencement-ia-geo" className="underline underline-offset-2 hover:text-accent">Visibilité IA (GEO)</Link>{" "}
              pour la couche moteurs génératifs,{" "}
              <Link href="/creation-site-web" className="underline underline-offset-2 hover:text-accent">Création de site</Link>{" "}
              quand le socle doit être refondu,{" "}
              <Link href="/agence-sea" className="underline underline-offset-2 hover:text-accent">Google Ads</Link>{" "}
              pour couvrir les requêtes en attendant les positions.
            </>
          ),
        }}
      />
    </>
  );
}
