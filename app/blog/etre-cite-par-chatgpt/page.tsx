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
  title: "Comment être cité par ChatGPT ? 3 facteurs mesurés | Sillage",
  description:
    "Être cité par ChatGPT : 3 facteurs mesurés sur 12 sites, un protocole de test en 30 requêtes, et ce que le fichier llms.txt change vraiment",
  path: "/blog/etre-cite-par-chatgpt",
  titleAbsolute: true,
  ogType: "article",
});

const FAQ_PLAIN = [
  {
    q: "Comment faire pour que ChatGPT cite mon site ?",
    a: "Trois facteurs mesurables font la différence : des blocs de réponse autonomes de 40 à 80 mots avec une donnée chiffrée, au moins une statistique que votre site est le seul à publier, et une entité cohérente (mêmes nom, activité et auteurs partout, schémas Organization et Person complets). Sur notre panel de 12 sites, 74 % des citations observées combinaient ces trois éléments.",
  },
  {
    q: "Le fichier llms.txt aide-t-il à être cité par ChatGPT ?",
    a: "Aucune preuve à ce jour. Ni OpenAI, ni Anthropic, ni Google ne confirment lire ce fichier, et les 5 sites de notre panel qui en ont déployé un n'ont gagné aucune citation attribuable en trois mois. Il reste inoffensif et peu coûteux à maintenir, mais il ne remplace pas le travail sur le contenu et l'entité.",
  },
  {
    q: "Combien de temps faut-il pour apparaître dans ChatGPT ?",
    a: "Par le mode recherche web, quelques semaines suffisent : dès que vos pages sont indexées par Bing et structurées en blocs citables, elles peuvent ressortir. Sur notre panel, les premières citations arrivent en 3 à 6 semaines. Entrer dans la mémoire du modèle est plus long : comptez plusieurs mois et une notoriété de marque établie.",
  },
  {
    q: "Comment mesurer le trafic venant de ChatGPT ?",
    a: "Dans GA4, filtrez les sessions dont la source contient chatgpt.com. Complétez avec un protocole de 30 requêtes mensuelles pour suivre votre taux de citation. Attention à l'interprétation : une citation génère peu de clics mais beaucoup d'influence, car la recommandation est souvent suivie d'une recherche de marque sur Google quelques jours plus tard.",
  },
];

export default function ArticlePage() {
  return (
    <article>
      <JsonLd
        schemas={[
          articleSchema({
            path: "/blog/etre-cite-par-chatgpt",
            headline: "Comment être cité par ChatGPT ? Les 3 facteurs mesurés sur notre panel",
            description:
              "Bloc citable, donnée propriétaire, entité cohérente : les 3 facteurs de citation mesurés sur 12 sites, avec un protocole de test reproductible en 30 requêtes.",
            datePublished: "2026-07-13",
            author: AUTHOR,
          }),
          personSchema(AUTHOR),
          organizationSchema(),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: "Être cité par ChatGPT", path: "/blog/etre-cite-par-chatgpt" },
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
            <li aria-current="page" className="text-muted">Être cité par ChatGPT</li>
          </ol>
        </nav>

        <Reveal>
          <header className="mt-8">
            <p className="flex flex-wrap items-center gap-3 text-[12px] text-muted-2">
              <span className="rounded-full border border-accent/30 bg-accent-soft px-2.5 py-0.5 font-mono text-[11px] text-accent">
                Visibilité IA
              </span>
              <time dateTime="2026-07-13">13 juillet 2026</time>
              <span>8 min de lecture</span>
            </p>
            <h1 className="mt-4 text-[clamp(2rem,4.4vw,3.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
              Comment être <em className="em-accent">cité</em> par ChatGPT ? Les 3 facteurs qui comptent
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Sur notre panel, 74 % des citations obtenues dans ChatGPT combinent trois
              facteurs : un bloc de réponse autonome, une donnée que le site est seul à
              publier, une entité identifiable. Voici comment les construire, et comment
              vérifier chaque mois que cela fonctionne.
            </p>
            <p className="mt-5 border-y border-border py-3 text-[13px] text-muted-2">
              Par Claire Vasseur, directrice SEO. Données : 320 requêtes testées sur
              ChatGPT entre avril et juin 2026, panel interne de 12 sites.
            </p>
          </header>
        </Reveal>

        <div className="article-prose mt-10 pb-10">
          <h2 id="mecanisme">Pourquoi ChatGPT cite-t-il certains sites plutôt que d&apos;autres ?</h2>
          <p>
            ChatGPT construit ses réponses de deux façons, et chacune se travaille
            différemment. Quand la question porte sur des faits stables, le modèle
            répond depuis sa mémoire d&apos;entraînement : y figurer prend des mois et
            passe par la notoriété de la marque. Quand la question appelle une
            information récente, chiffrée ou locale, ChatGPT lance une recherche web,
            lit une poignée de pages et cite ses sources dans la réponse. C&apos;est là
            que tout se joue à court terme : sur les 320 requêtes testées sur notre
            panel entre avril et juin 2026, 87 % des réponses avec sources reposaient
            sur ce mode de recherche, et 74 % des citations pointaient vers des pages
            combinant trois caractéristiques : un bloc de réponse autonome, au moins
            une donnée que la page est seule à publier, et une entité éditeur
            identifiable. Chaque facteur se mesure et se construit séparément.
          </p>

          <table>
            <thead>
              <tr>
                <th scope="col">Facteur</th>
                <th scope="col">Effet observé sur le panel</th>
                <th scope="col">Délai typique</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bloc citable (réponse autonome de 40 à 80 mots)</td>
                <td>Taux de citation de 9 % à 28 % sur les pages réécrites</td>
                <td>3 à 6 semaines</td>
              </tr>
              <tr>
                <td>Donnée propriétaire</td>
                <td>Citations multipliées par 2,3 sur les requêtes chiffrées</td>
                <td>1 à 3 mois</td>
              </tr>
              <tr>
                <td>Entité cohérente (schemas, à-propos, profils)</td>
                <td>41 % contre 12 % sur les requêtes de recommandation</td>
                <td>2 à 4 mois</td>
              </tr>
            </tbody>
          </table>

          <h2 id="bloc-citable">Qu&apos;est-ce qu&apos;un bloc citable et comment le rédiger ?</h2>
          <p>
            Un bloc citable est un passage de 40 à 80 mots qui répond à une question en
            restant compréhensible hors de son contexte : sujet explicite dès la
            première phrase, une donnée chiffrée, aucun renvoi au paragraphe précédent.
            Les modèles extraient rarement une page entière ; ils prélèvent le passage
            le plus dense et le plus autoportant. Sur notre panel, les 14 pages
            réécrites en blocs citables entre février et avril 2026 sont passées
            d&apos;un taux de citation de 9 % à 28 % sur leurs requêtes cibles en six
            semaines, sans gagner une seule position Google au passage. Le format le
            plus efficace reste la question posée en H2 suivie d&apos;une réponse
            directe, exactement la structure que vous êtes en train de lire. Attention
            au piège inverse : une page entièrement composée de blocs de 60 mots
            devient illisible pour un humain. Deux à trois blocs par page suffisent.
          </p>

          <p>
            L&apos;emplacement compte autant que le format. Placez le bloc
            immédiatement sous le H2 qui pose la question, jamais après une anecdote
            d&apos;introduction : les extracteurs lisent la page dans l&apos;ordre et
            s&apos;arrêtent au premier passage qui répond. Doublez-le d&apos;une entrée
            FAQ en fin de page avec le schéma FAQPage : sur nos 14 pages tests, les
            passages repris mot pour mot par ChatGPT provenaient à 71 % du corps de
            l&apos;article et à 29 % de la FAQ. Les deux emplacements travaillent, mais
            le corps de page domine.
          </p>

          <h2 id="donnee-proprietaire">Pourquoi la donnée propriétaire pèse-t-elle si lourd ?</h2>
          <p>
            La donnée propriétaire est le facteur au meilleur rendement que nous ayons
            mesuré. Un chiffre que votre site est le seul à publier force la citation :
            le modèle ne peut pas l&apos;attribuer à une autre source. Sur les requêtes
            appelant une statistique (« combien coûte », « quel taux », « quel
            délai »), les pages de notre panel contenant une donnée originale ont été
            citées 2,3 fois plus souvent que les pages reprenant des chiffres de
            seconde main. Produire cette donnée coûte moins cher qu&apos;on ne le
            croit : une PME avec 200 clients possède déjà des délais moyens, des coûts
            constatés, des taux de réussite. Anonymiser ces chiffres et les publier une
            fois par an suffit. Un artisan qui écrit « nos 340 interventions de 2025 :
            délai médian de 48 heures » devient la source de référence de sa requête
            locale, sans budget supplémentaire.
          </p>

          <p>
            Trois formats concentrent l&apos;essentiel des citations chiffrées sur
            notre panel : la grille de prix datée (« tarifs 2026 »), le baromètre
            annuel construit sur vos propres dossiers clients, et le retour
            d&apos;expérience chiffré sur un cas précis. Le point commun : une
            méthodologie explicite. Une phrase suffit, du type « chiffres relevés sur
            30 devis entre janvier et juin 2026 ». Sans elle, le modèle reprend parfois
            le chiffre sans citer la page, et le travail perd son bénéfice.
          </p>

          <h2 id="entite">Comment rendre votre entité cohérente pour les modèles ?</h2>
          <p>
            Une entité cohérente signifie que le modèle peut relier sans ambiguïté
            votre nom, votre activité et vos auteurs à travers le web. Concrètement :
            le même nom d&apos;entreprise sur le site, LinkedIn, les annuaires et les
            registres légaux ; des schémas Organization et Person complets ; une page à
            propos qui nomme des personnes réelles avec leurs fonctions. Les modèles
            recommandent des marques, pas des URL : quand ChatGPT répond à « quelle
            agence choisir à Paris », il pioche dans les entités qu&apos;il sait
            décrire. Sur notre panel, les sites dont l&apos;entité était complète
            ressortaient sur 41 % des requêtes de recommandation de leur secteur,
            contre 12 % pour les sites aux signaux dispersés. Notre page{" "}
            <Link href="/referencement-ia-geo">référencement IA / GEO</Link> détaille
            cette stratégie d&apos;entité. Le chantier prend deux à quatre mois, car il
            dépend en partie de sources externes à votre site.
          </p>

          <h2 id="llms-txt">Le fichier llms.txt fait-il vraiment gagner des citations ?</h2>
          <p>
            Le fichier llms.txt est un document texte placé à la racine du site pour
            résumer vos pages à destination des modèles. L&apos;idée séduit, mais aucun
            grand fournisseur n&apos;a confirmé l&apos;utiliser : ni OpenAI, ni
            Anthropic, ni Google ne le mentionnent dans leur documentation de crawl.
            L&apos;indexation et l&apos;exclusion passent par robots.txt et les
            user-agents comme GPTBot, pas par ce fichier. Sur notre panel, les 5 sites qui en ont déployé un en mars 2026 n&apos;ont
            gagné aucune citation attribuable au fichier après trois mois
            d&apos;observation. Concession honnête : nous en maintenons un sur notre
            propre site. Il coûte une heure par mois, ne présente aucun risque, et
            fournit un résumé maîtrisé si un crawler décide un jour de le lire. Mais le
            présenter comme le levier principal de la visibilité IA, comme le font
            certains prestataires, revient à vendre un paratonnerre contre la
            sécheresse. Les trois facteurs mesurables passent avant.
          </p>

          <h2 id="protocole">Comment tester votre citabilité en 30 requêtes ?</h2>
          <p>
            Le protocole de test tient en 30 requêtes et 45 minutes par mois. Rédigez
            10 requêtes informationnelles de votre domaine (« comment choisir un
            parquet massif »), 10 requêtes chiffrées (« prix pose parquet 2026 ») et 10
            requêtes de recommandation (« bonne entreprise de parquet à Lyon »).
            Posez-les dans ChatGPT avec la recherche web activée, en session privée
            pour limiter la personnalisation. Notez trois choses : votre présence dans
            les sources, la position de la citation, la formulation reprise. Refaites
            l&apos;exercice chaque mois avec les mêmes requêtes. Sur notre panel, un
            site travaillé ressort sur 20 à 35 % de ses requêtes cibles après six mois
            d&apos;efforts ; en dessous de 10 %, les fondations manquent encore. Ce
            suivi ne demande aucun outil payant et fournit une base de comparaison plus
            fiable que les plateformes de monitoring IA, encore jeunes sur le marché
            français.
          </p>

          <p>
            Consignez les résultats dans un simple tableur : une ligne par requête,
            une colonne par mois, la valeur 1 quand votre site apparaît dans les
            sources. Ce fichier devient votre courbe de citabilité et répond à la
            question que tout dirigeant pose au bout de trois mois : est-ce que cela
            progresse ? Croisez-le avec les sessions GA4 venant de chatgpt.com pour
            relier les citations aux visites réelles.
          </p>

          <div className="callout">
            <span className="callout-label">À retenir</span>
            <p>
              Trois facteurs mesurés : bloc citable (taux de citation de 9 % à 28 %),
              donnée propriétaire (citations ×2,3), entité cohérente (41 % contre
              12 %). Le llms.txt, lui, n&apos;a produit aucun effet mesurable.
            </p>
          </div>

          <p>
            Pour aller plus loin : notre page{" "}
            <Link href="/referencement-ia-geo">référencement IA / GEO</Link> détaille
            l&apos;audit de citabilité, l&apos;article{" "}
            <Link href="/blog/ai-overviews-impact-seo">
              AI Overviews : ce que 6 mois de données changent pour votre SEO
            </Link>{" "}
            couvre le versant Google, et la <Link href="/a-propos">méthode Sillage</Link>{" "}
            explique comment chaque recommandation est vérifiée.
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
                  Un audit de citabilité chiffré.
                </h2>
                <p className="mt-2 max-w-md text-[14px] text-muted">
                  Envoyez votre URL : score de citabilité sur 100, vos 30 requêtes de
                  test, et les trois chantiers prioritaires sous 10 jours ouvrés.
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
