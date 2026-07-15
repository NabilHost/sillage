import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { ServicePageLayout } from "@/components/services/service-page-layout";
import { TrackRecordTeaser } from "@/components/services/track-record-teaser";

export const metadata = generatePageMetadata({
  title: "Création de site web rapide et conçu pour le SEO | Essor",
  description:
    "Sites vitrines et e-commerce : Core Web Vitals garantis par contrat, HTML sémantique, données structurées natives. Livrés prêts à référencer, dès 12 000 € HT",
  path: "/creation-site-web",
  titleAbsolute: true,
});

const FAQ_PLAIN = [
  {
    q: "Combien coûte la création d'un site web avec Essor ?",
    a: "Un site vitrine sur mesure démarre à 12 000 € HT, un e-commerce à 25 000 € HT. Devis forfaitaire détaillé poste par poste : conception, design, développement, contenu SEO des pages clés, recette, mise en production. Pas de dépassement facturé sans avenant validé.",
  },
  {
    q: "Sur quelles technologies développez-vous ?",
    a: "Next.js ou Astro pour les sites à fort enjeu SEO, Shopify pour l'e-commerce quand l'écosystème le justifie, WordPress uniquement si votre équipe le maîtrise déjà. Le choix est argumenté par écrit en phase de cadrage : c'est votre site, vous devez pouvoir le faire vivre sans nous.",
  },
  {
    q: "Garantissez-vous les Core Web Vitals ?",
    a: "Oui, contractuellement : LCP sous 2,5 s, INP sous 200 ms et CLS sous 0,1 sur mobile à la livraison. Si un seuil n'est pas atteint, nous corrigeons à nos frais avant la mise en production.",
  },
  {
    q: "Gérez-vous la migration SEO depuis l'ancien site ?",
    a: "Systématiquement : inventaire des pages qui reçoivent du trafic et des liens, plan de redirection 301 exhaustif, parité des balises et contenus, recette SEO avant bascule, surveillance de l'indexation pendant 8 semaines. La refonte est le moment où l'on perd un trafic durement acquis, c'est précisément ce que nous verrouillons.",
  },
];

export default function CreationSiteWebPage() {
  return (
    <>
      <JsonLd
        schemas={[
          serviceSchema({
            path: "/creation-site-web",
            name: "Création de sites vitrines et e-commerce",
            serviceType: "Création de site web",
            description:
              "Conception et développement de sites web orientés performance : Core Web Vitals garantis contractuellement, HTML sémantique, données structurées natives, migration SEO incluse. À partir de 12 000 € HT.",
            price: "12000",
            priceUnit: "projet, à partir de, HT",
          }),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Création de site web", path: "/creation-site-web" },
          ]),
          faqPageSchema(FAQ_PLAIN),
        ]}
      />
      <ServicePageLayout
        data={{
          breadcrumb: "Création de site web",
          h1: (
            <>
              Des sites livrés <em className="em-accent">prêts</em> à référencer.
            </>
          ),
          lede: (
            <>
              La plupart des refontes détruisent du trafic. Les nôtres sont conçues à
              l&apos;envers : <strong className="text-text">architecture SEO</strong>{" "}
              d&apos;abord, <strong className="text-text">design</strong> ensuite,{" "}
              <strong className="text-text">performance garantie</strong> par contrat.
            </>
          ),
          cta: "Parler de votre projet",
          asideFacts: [
            { strong: "Site vitrine dès 12 000 € HT.", rest: "E-commerce dès 25 000 € HT. Forfait poste par poste." },
            { strong: "Core Web Vitals garantis par contrat :", rest: "LCP < 2,5 s, INP < 200 ms, CLS < 0,1 à la livraison." },
            { strong: "Vous restez propriétaire", rest: "du code, du design et des contenus. Sans exception." },
          ],
          definitionTitle: "Qu'est-ce qu'un site conçu pour le SEO ?",
          definition:
            "Un site conçu pour le SEO est un site dont l'architecture, le code et le contenu sont pensés pour la recherche avant la mise en ligne, pas corrigés après. Chez Essor, cela se traduit par des choix vérifiables : une arborescence construite depuis l'analyse de la demande réelle, un HTML sémantique avec une seule balise h1 par page, des données structurées JSON-LD générées nativement par les gabarits, des Core Web Vitals garantis par contrat (LCP sous 2,5 secondes, INP sous 200 millisecondes, CLS sous 0,1), un plan de redirections exhaustif quand un site existant précède. Le contenu des pages stratégiques est rédigé pendant le projet, pas après. Résultat : un site qui commence à travailler dès sa mise en production, à partir de 12 000 € HT.",
          calloutText:
            "Architecture pensée avant le design, performance garantie par contrat, contenu livré avec le site.",
          deliverablesTitle: "Un projet type, en cinq temps",
          deliverablesIntro:
            "10 à 16 semaines pour un site vitrine, 16 à 24 pour un e-commerce. Jalons contractuels.",
          deliverables: [
            { strong: "1. Cadrage et architecture", rest: "Analyse de la demande, arborescence cible, choix technique argumenté par écrit. Validé avant la première maquette. Semaines 1 à 3." },
            { strong: "2. Design sur mesure", rest: "Direction artistique propre à votre marque, pas un thème habillé. Design system documenté. Semaines 3 à 6." },
            { strong: "3. Développement", rest: "HTML sémantique, données structurées natives, accessibilité AA sur les parcours principaux. Semaines 6 à 12." },
            { strong: "4. Contenu et recette SEO", rest: "Rédaction des pages stratégiques, balises, maillage, plan de redirections. Recette complète. Semaines 10 à 14." },
            { strong: "5. Mise en prod et surveillance", rest: "Bascule contrôlée, sitemaps soumis, indexation et CWV surveillés 8 semaines. Formation incluse. Semaines 14 à 16." },
            { strong: "Garantie de correction", rest: "Un seuil Core Web Vitals manqué à la livraison est corrigé à nos frais avant mise en production." },
          ],
          tableTitle: "Quelle technologie pour quel projet ?",
          tableHead: ["Technologie", "Quand nous la recommandons", "Ce que vous y gagnez"],
          tableRows: [
            ["Next.js", "Fort enjeu SEO, contenus riches, besoins applicatifs", "Rendu statique ou serveur par page, performances de premier plan, évolutivité"],
            ["Astro", "Sites vitrines et éditoriaux sans besoin applicatif", "Quasi zéro JavaScript envoyé au navigateur, vitesse maximale"],
            ["Shopify", "E-commerce, catalogue et logistique standards", "Écosystème mature, coût de possession maîtrisé, thème sur mesure"],
            ["WordPress", "Uniquement si votre équipe le maîtrise déjà", "Autonomie éditoriale immédiate, thème sur mesure, jamais de page builder"],
          ],
          tableNote:
            "Le choix technique est argumenté par écrit en phase de cadrage, avec les coûts de possession à trois ans.",
          extraSection: (
            <TrackRecordTeaser
              eyebrow="résultats e-commerce · boutiques en gestion"
              title={
                <>
                  Un site n&apos;est réussi que s&apos;il <em className="em-accent">vend</em>.
                </>
              }
              lede="Les boutiques qu'on conçoit et refond sont faites pour vendre et pour référencer. Voici ce qu'elles produisent, chiffres réels anonymisés sous NDA."
              stats={[
                { v: "1,38 M€", l: "de CA e-commerce généré sur 6 boutiques" },
                { v: "+248 %", l: "de croissance annuelle médiane" },
                { v: "+41 %", l: "de trafic organique pendant une refonte, sans perte" },
                { v: "3,8 %", l: "de taux de conversion sur les meilleures boutiques" },
              ]}
            />
          ),
          faqTitle: "Questions fréquentes sur la création de site",
          faq: FAQ_PLAIN,
          ctaFinalTitle: (
            <>
              Un site qui travaille dès la <em className="em-accent">mise en ligne</em>.
            </>
          ),
          ctaFinalText:
            "Refonte ou création : nous répondons sous 48 h avec une première lecture et une fourchette budgétaire.",
          crossLinks: (
            <>
              Souvent combiné avec :{" "}
              <Link href="/agence-seo" className="underline underline-offset-2 hover:text-accent">Accompagnement SEO</Link>{" "}
              pour faire fructifier le socle après la mise en ligne,{" "}
              <Link href="/referencement-ia-geo" className="underline underline-offset-2 hover:text-accent">Visibilité IA (GEO)</Link>{" "}
              pour des gabarits citables dès la conception.
            </>
          ),
        }}
      />
    </>
  );
}
