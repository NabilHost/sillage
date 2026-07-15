import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { ServicePageLayout } from "@/components/services/service-page-layout";

export const metadata = generatePageMetadata({
  title: "Référencement IA (GEO) : être cité par ChatGPT | Essor",
  description:
    "Audit de citabilité, blocs de réponse, données structurées, présence d'entité. Être cité par ChatGPT, Perplexity, Gemini et les AI Overviews, sans les mythes",
  path: "/referencement-ia-geo",
  titleAbsolute: true,
});

const FAQ_PLAIN = [
  {
    q: "Le GEO remplace-t-il le SEO ?",
    a: "Non. Google l'écrit dans son propre guide d'optimisation pour l'IA : AEO et GEO sont des relabellisations du SEO. Les AI Overviews et les moteurs génératifs s'appuient sur les mêmes index et les mêmes systèmes de classement que la recherche classique. Une page doit être indexée et éligible aux extraits pour être citée. Le GEO est une exigence de clarté posée sur un socle SEO sain.",
  },
  {
    q: "Faut-il un fichier llms.txt pour être cité par les IA ?",
    a: "Non, en l'état actuel des preuves. Aucun moteur génératif majeur n'a annoncé utiliser llms.txt comme levier de citation, et les études de logs serveur ne montrent pas de consultation significative. Nous le déployons si vous y tenez, c'est sans risque, mais nous refusons de le vendre comme un levier. Les leviers réels : citabilité des passages, données structurées, présence d'entité.",
  },
  {
    q: "Comment mesurez-vous la visibilité dans les moteurs IA ?",
    a: "Par un panel de requêtes métier testées chaque mois sur ChatGPT, Perplexity, Gemini et les AI Overviews : votre marque est-elle citée, en quelle position, avec quel lien, face à quels concurrents. Le rapport suit le taux de citation requête par requête, complété par le trafic référent des moteurs IA dans Analytics.",
  },
  {
    q: "Qu'est-ce qu'un bloc de réponse citable ?",
    a: "Un passage autonome de 130 à 170 mots qui répond complètement à une question précise, compréhensible sans lire le reste de la page : définition claire, chiffres sourcés, pas de référence implicite au contexte. C'est le format que les moteurs génératifs extraient le plus volontiers.",
  },
];

export default function GeoPage() {
  return (
    <>
      <JsonLd
        schemas={[
          serviceSchema({
            path: "/referencement-ia-geo",
            name: "Visibilité dans les moteurs de recherche IA",
            serviceType: "Generative Engine Optimization (GEO)",
            description:
              "Audit de citabilité, structuration en blocs de réponse, données structurées et stratégie d'entité pour être cité par ChatGPT, Perplexity, Gemini et les AI Overviews de Google.",
          }),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Référencement IA (GEO)", path: "/referencement-ia-geo" },
          ]),
          faqPageSchema(FAQ_PLAIN),
        ]}
      />
      <ServicePageLayout
        data={{
          breadcrumb: "Référencement IA (GEO)",
          h1: (
            <>
              Quand l&apos;IA répond, c&apos;est <em className="em-accent">vous</em>{" "}
              qu&apos;elle doit citer.
            </>
          ),
          lede: (
            <>
              Une part croissante de vos clients ne clique plus sur dix liens bleus :
              ils lisent une réponse. Notre travail : que cette réponse mentionne{" "}
              <strong className="text-text">votre marque</strong>, avec un{" "}
              <strong className="text-text">lien vers vos pages</strong>.
            </>
          ),
          cta: "Demander l'audit de citabilité",
          asideFacts: [
            { strong: "Panel testé chaque mois", rest: "sur ChatGPT, Perplexity, Gemini et les AI Overviews." },
            { strong: "Approche fondée sur les preuves.", rest: "Nous vous dirons aussi ce qui ne marche pas, llms.txt en tête." },
            { strong: "Programme de 6 mois minimum,", rest: "adossé à un socle SEO sain." },
          ],
          definitionTitle: "Qu'est-ce que le référencement IA (GEO) ?",
          definition:
            "Le référencement IA, ou GEO (Generative Engine Optimization), regroupe les pratiques qui augmentent la probabilité qu'une marque soit citée dans les réponses des moteurs génératifs : ChatGPT, Perplexity, Gemini et les AI Overviews de Google. Ces systèmes s'appuient sur les mêmes index que la recherche classique : une page doit être indexée et éligible aux extraits pour apparaître dans une réponse. Le travail consiste à structurer les pages en blocs de réponse autonomes de 130 à 170 mots sous des titres formulés en questions, à couvrir les gabarits de données structurées pertinents, à renforcer la présence de l'entité sur les sources que les modèles consultent (Wikipédia, annuaires sectoriels, presse, LinkedIn), et à mesurer chaque mois le taux de citation sur un panel de requêtes métier. Le GEO prolonge le SEO, il ne le remplace pas.",
          calloutText:
            "Blocs de réponse autonomes, données structurées, présence d'entité, mesure mensuelle du taux de citation.",
          deliverablesTitle: "Le programme GEO, en pratique",
          deliverablesIntro:
            "Si le socle SEO n'est pas sain, on commence par le SEO. Sinon le GEO revient à décorer une maison sans fondations.",
          deliverables: [
            { strong: "Audit de citabilité", rest: "30 à 50 requêtes métier testées sur 4 moteurs, position et lien de chaque citation, concurrents cités à votre place." },
            { strong: "Blocs de réponse", rest: "Pages stratégiques restructurées en passages autonomes de 130 à 170 mots, titres en questions, chiffres sourcés." },
            { strong: "Données structurées étendues", rest: "Organization avec @id stable, Service, FAQPage, Person pour les auteurs. Validation continue." },
            { strong: "Stratégie d'entité", rest: "Cohérence nom-adresse-description partout où les modèles lisent, signaux E-E-A-T renforcés." },
            { strong: "Mesure mensuelle", rest: "Taux de citation requête par requête, trafic référent des moteurs IA, part des conversions associée." },
            { strong: "Veille trimestrielle honnête", rest: "Ce qui a changé dans les moteurs génératifs, ce que cela implique, ce qui reste du mythe." },
          ],
          tableTitle: "Trois idées reçues que nous ne vous vendrons pas",
          tableHead: ["L'idée reçue", "L'état des preuves", "Ce qui marche à la place"],
          tableRows: [
            ["« Il faut un fichier llms.txt »", "Aucun moteur majeur n'annonce l'utiliser, les logs ne montrent pas de consultation significative", "Blocs de réponse citables et données structurées propres"],
            ["« Il faut découper le contenu en chunks »", "Les modèles segmentent eux-mêmes, le découpage artificiel dégrade la lecture humaine", "Passages autonomes qui répondent complètement à une question"],
            ["« Il faut réécrire ses mots-clés pour les IA »", "La compréhension des synonymes suffit, aucun gain mesuré", "Couvrir les vraies questions des clients, réponses datées et sourcées"],
          ],
          tableNote:
            "Position appuyée sur le guide d'optimisation IA publié par Google et les études de logs disponibles. Quand les preuves changeront, notre discours changera aussi.",
          faqTitle: "Questions fréquentes sur le GEO",
          faq: FAQ_PLAIN,
          ctaFinalTitle: (
            <>
              Savez-vous qui les IA citent <em className="em-accent">à votre place</em> ?
            </>
          ),
          ctaFinalText:
            "L'audit de citabilité vous le montre, requête par requête, moteur par moteur. Souvent inconfortable, toujours utile.",
          crossLinks: (
            <>
              Souvent combiné avec :{" "}
              <Link href="/agence-seo" className="underline underline-offset-2 hover:text-accent">Accompagnement SEO</Link>{" "}
              (le socle indispensable),{" "}
              <Link href="/creation-site-web" className="underline underline-offset-2 hover:text-accent">Création de site</Link>{" "}
              pour des blocs de réponse intégrés dès la conception.
            </>
          ),
        }}
      />
    </>
  );
}
