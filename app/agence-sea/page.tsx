import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { ServicePageLayout } from "@/components/services/service-page-layout";

export const metadata = generatePageMetadata({
  title: "Agence SEA : Google Ads pilotées à la marge | Sillage",
  description:
    "Search, Shopping et PMax pilotées à la marge, pas au clic. Tracking serveur, structure propre, honoraires fixes dès 1 200 € HT/mois, jamais au pourcentage",
  path: "/agence-sea",
  titleAbsolute: true,
});

const FAQ_PLAIN = [
  {
    q: "Comment facturez-vous la gestion Google Ads ?",
    a: "Honoraires fixes, jamais un pourcentage du budget dépensé : facturer au pourcentage récompense l'agence qui dépense plus, pas celle qui dépense mieux. À partir de 1 200 € HT par mois pour un compte mono-pays, devis précis après audit du compte existant.",
  },
  {
    q: "Reprenez-vous des comptes existants ?",
    a: "C'est la majorité de nos missions. L'audit de reprise identifie les fuites classiques : requêtes larges non exclues, conversions comptées en double, campagnes concurrentes entre elles, PMax cannibalisant le Search de marque. La reconstruction se fait sans coupure de diffusion.",
  },
  {
    q: "Quel budget publicitaire minimum faut-il ?",
    a: "En dessous de 2 000 € par mois de budget média, les honoraires pèsent trop lourd par rapport à la dépense. Dans ce cas nous le disons, et nous proposons un paramétrage initial en une fois, que vous pilotez ensuite vous-même.",
  },
  {
    q: "Vos rapports sont-ils compréhensibles sans être expert ?",
    a: "Le rapport mensuel tient sur une page : dépense, revenus ou leads attribués, coût par acquisition, marge après coûts publicitaires, et les trois décisions prises dans le mois. Le détail complet reste accessible dans un tableau de bord partagé.",
  },
];

export default function AgenceSeaPage() {
  return (
    <>
      <JsonLd
        schemas={[
          serviceSchema({
            path: "/agence-sea",
            name: "Gestion Google Ads",
            serviceType: "Publicité sur les moteurs de recherche (SEA)",
            description:
              "Gestion de campagnes Google Ads : Search, Shopping, Performance Max. Pilotage à la marge, tracking serveur, honoraires fixes à partir de 1 200 € HT par mois.",
            price: "1200",
          }),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Agence SEA", path: "/agence-sea" },
          ]),
          faqPageSchema(FAQ_PLAIN),
        ]}
      />
      <ServicePageLayout
        data={{
          breadcrumb: "Agence SEA",
          h1: (
            <>
              Google Ads pilotées à la <em className="em-accent">marge</em>, pas au clic.
            </>
          ),
          lede: (
            <>
              Un <strong className="text-text">compte propre</strong>, un{" "}
              <strong className="text-text">tracking fiable</strong>, des campagnes jugées
              sur ce qu&apos;elles <strong className="text-text">rapportent</strong> après
              coûts publicitaires. Le reste est du bruit.
            </>
          ),
          cta: "Faire auditer mon compte",
          asideFacts: [
            { strong: "Honoraires fixes dès 1 200 € HT / mois.", rest: "Jamais de pourcentage du budget dépensé." },
            { strong: "Audit de compte offert", rest: "à partir de 2 000 € de budget média mensuel." },
            { strong: "Fuites chiffrées en euros par mois", rest: "dans chaque audit de reprise." },
          ],
          definitionTitle: "Comment gérons-nous vos campagnes Google Ads ?",
          definition:
            "La gestion Google Ads chez Sillage repose sur trois fondations posées avant toute enchère. D'abord le tracking : conversions mesurées côté serveur, valeurs réelles importées (marge pour l'e-commerce, taux de qualification pour les leads), doublons éliminés. Ensuite la structure : dix-huit campagnes bien découpées valent mieux que deux cents qui se cannibalisent, chaque campagne a un rôle et un objectif de rentabilité propre. Enfin le pilotage : les enchères s'optimisent sur la marge après coûts publicitaires, jamais sur le volume de clics. Les honoraires sont fixes, à partir de 1 200 € HT par mois, jamais indexés sur le budget dépensé. Le rapport mensuel tient sur une page : dépense, revenus attribués, coût par acquisition, marge, et les trois décisions prises dans le mois.",
          calloutText:
            "Tracking serveur, structure resserrée, pilotage à la marge. Honoraires fixes, jamais au pourcentage du budget.",
          deliverablesTitle: "Le déroulé d'une reprise de compte",
          deliverablesIntro:
            "Cas le plus fréquent : un compte hérité d'une ou plusieurs agences, jamais reconstruit. Sans coupure de diffusion.",
          deliverables: [
            { strong: "Audit du compte existant", rest: "Requêtes réellement payées, exclusions manquantes, doublons de conversion, cannibalisation PMax / marque. Fuites chiffrées en € / mois." },
            { strong: "Tracking reconstruit", rest: "Conversions côté serveur, import des valeurs de marge, consentement conforme. Tant que la mesure ment, optimiser ne sert à rien." },
            { strong: "Nouvelle structure en parallèle", rest: "Les nouvelles campagnes montent pendant que les anciennes tournent. Bascule progressive, jamais de coupure sèche." },
            { strong: "Pilotage à la marge", rest: "Objectif de rentabilité par campagne, tests créatifs mensuels, arbitrages actés en revue. Rapport d'une page chaque mois." },
          ],
          tableTitle: "Quels leviers couvrons-nous ?",
          tableHead: ["Levier", "Quand il se justifie", "Notre approche"],
          tableRows: [
            ["Search", "Demande existante et formulée", "Découpage par intention, exclusions systématiques, annonces rédigées par des humains"],
            ["Shopping & PMax", "E-commerce avec flux produit", "Flux optimisé en amont, segmentation par marge, garde-fous anti-cannibalisation"],
            ["Display & YouTube", "Retargeting et notoriété ciblée", "Audiences sur vos données, plafonds de répétition stricts"],
            ["Microsoft Ads", "B2B, audiences professionnelles", "Duplication maîtrisée des campagnes Search rentables"],
          ],
          faqTitle: "Questions fréquentes sur le SEA",
          faq: FAQ_PLAIN,
          ctaFinalTitle: (
            <>
              Votre compte <em className="em-accent">fuit</em>, probablement.
            </>
          ),
          ctaFinalText:
            "L'audit de reprise chiffre les fuites en euros par mois. Offert à partir de 2 000 € de budget média mensuel.",
          crossLinks: (
            <>
              Souvent combiné avec :{" "}
              <Link href="/agence-seo" className="underline underline-offset-2 hover:text-accent">Référencement naturel</Link>{" "}
              pour réduire la dépendance publicitaire à moyen terme,{" "}
              <Link href="/creation-site-web" className="underline underline-offset-2 hover:text-accent">Création de site</Link>{" "}
              quand les pages d&apos;atterrissage plombent la conversion.
            </>
          ),
        }}
      />
    </>
  );
}
