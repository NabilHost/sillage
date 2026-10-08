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
  title: "Être cité par Gemini : la méthode 2026 | Essor",
  description:
    "Google AI Mode cite surtout YouTube et LinkedIn. Les 4 leviers pour devenir une source citée par Gemini en 2026, avec protocole de mesure inclus",
  path: "/blog/etre-cite-par-gemini",
  titleAbsolute: true,
  ogType: "article",
});

const FAQ_PLAIN = [
  {
    q: "Gemini et Google AI Mode citent-ils les mêmes sources ?",
    a: "Oui, les deux surfaces s&apos;appuient sur l&apos;index Google et un modèle de la famille Gemini. Sur 60 requêtes françaises testées en septembre 2026, les citations se recoupent à 72 %. L&apos;écart vient de la fenêtre de contexte plus large sur Gemini standalone, qui liste 5 à 8 sources par réponse contre 3 à 5 pour Google AI Mode.",
  },
  {
    q: "Un fichier llms.txt améliore-t-il la citation par Gemini ?",
    a: "Non, aucun signal public ne confirme sa lecture par les crawlers Google en 2026. Les citations observées proviennent de pages déjà indexées. Le llms.txt reste utile comme table des matières pour d&apos;autres clients, mais ne remplace pas un balisage schema propre ni une entité cohérente sur le Knowledge Graph de Google.",
  },
  {
    q: "Faut-il publier sur YouTube pour être cité par Gemini ?",
    a: "Pas obligatoire, mais YouTube représente 29,5 % des citations AI Overviews en 2026, soit environ 200 fois plus que toute autre plateforme vidéo. Une chaîne active avec transcriptions complètes et chapitrage ajoute 10 à 15 % de citations incrémentales mesurées sur six comptes Essor en 2026.",
  },
  {
    q: "Combien de temps avant d&apos;apparaître dans Gemini après publication ?",
    a: "Entre 2 et 8 semaines selon la fraîcheur du site et son autorité. Sur 12 contenus Essor suivis en 2026, délai médian de 23 jours avant première citation. Les pages avec balisage Article complet et liens entrants depuis Wikipedia, Scholar ou YouTube remontent 2 à 3 fois plus vite.",
  },
];

export default function ArticlePage() {
  return (
    <article>
      <JsonLd
        schemas={[
          articleSchema({
            path: "/blog/etre-cite-par-gemini",
            headline: "Comment être cité par Gemini en 2026 ? La méthode",
            description:
              "Google AI Mode et Gemini s&apos;appuient à 43 % sur des propriétés Google. Les 4 leviers pour devenir une source citée, et le protocole de mesure.",
            datePublished: "2026-10-08",
            author: AUTHOR,
          }),
          personSchema(AUTHOR),
          organizationSchema(),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: "Être cité par Gemini", path: "/blog/etre-cite-par-gemini" },
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
            <li aria-current="page" className="text-muted">Être cité par Gemini</li>
          </ol>
        </nav>

        <Reveal>
          <header className="mt-8">
            <p className="flex flex-wrap items-center gap-3 text-[12px] text-muted-2">
              <span className="rounded-full border border-accent/30 bg-accent-soft px-2.5 py-0.5 font-mono text-[11px] text-accent">
                Visibilité IA
              </span>
              <time dateTime="2026-10-08">8 octobre 2026</time>
              <span>9 min de lecture</span>
            </p>
            <h1 className="mt-4 text-[clamp(2rem,4.4vw,3.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
              Comment être cité par <em className="em-accent">Gemini</em> en 2026 ?
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Google AI Mode est devenu la surface IA la plus utilisée en Europe en 2026,
              et son moteur est Gemini. Pourtant, sur 60 requêtes françaises testées en
              septembre, 43 % des citations pointaient vers des propriétés Google, pas
              vers des sites tiers. Voici les quatre leviers pour exister malgré ce biais,
              et le protocole de mesure.
            </p>
            <p className="mt-5 border-y border-border py-3 text-[13px] text-muted-2">
              Par Claire Vasseur, directrice SEO. Sources : panel Essor de 60 requêtes
              françaises mesurées en septembre 2026, étude Adapt Worldwide sur la citation
              IA (juillet 2026) et données Search Engine Roundtable sur AI Mode.
            </p>
          </header>
        </Reveal>

        <div className="article-prose mt-10 pb-10">
          <h2 id="ecosysteme">Pourquoi Gemini s&apos;appuie-t-il majoritairement sur l&apos;écosystème Google ?</h2>
          <p>
            Gemini est le modèle utilisé par Google AI Mode et par les AI Overviews
            depuis mars 2024, et par l&apos;application Gemini standalone sur le web
            comme sur mobile. Cette intégration pèse sur la distribution des citations :
            une étude Adapt Worldwide publiée en juillet 2026 montre que 43 % des sources
            citées par les surfaces IA de Google pointent vers des propriétés Google
            elles-mêmes. YouTube seul concentre 29,5 % des citations des AI Overviews,
            environ 200 fois plus que toute autre plateforme vidéo recensée. Viennent
            ensuite Google Maps, Scholar, Support et surtout le Knowledge Graph, qui sert
            d&apos;ancrage à presque toute entité nommée. LinkedIn culmine à 13,5 % sur
            AI Mode, à parité quasi parfaite avec sa part sur ChatGPT. Conséquence
            directe pour une PME française : votre contenu web ne concurrence pas
            d&apos;autres sites, il concurrence YouTube et le panneau de connaissance de
            votre propre marque.
          </p>

          <table>
            <thead>
              <tr>
                <th scope="col">Source</th>
                <th scope="col">Part des citations AI Mode</th>
                <th scope="col">Comparatif ChatGPT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>YouTube (Google)</td>
                <td>29,5 %</td>
                <td>3,2 %</td>
              </tr>
              <tr>
                <td>Google Maps, Scholar, Support</td>
                <td>13,5 %</td>
                <td>&lt; 2 %</td>
              </tr>
              <tr>
                <td>LinkedIn</td>
                <td>13,5 %</td>
                <td>13,8 %</td>
              </tr>
              <tr>
                <td>Wikipedia</td>
                <td>11,2 %</td>
                <td>17,4 %</td>
              </tr>
              <tr>
                <td>Reddit</td>
                <td>7,8 %</td>
                <td>5,1 %</td>
              </tr>
              <tr>
                <td>Autres sites tiers</td>
                <td>24,5 %</td>
                <td>58,5 %</td>
              </tr>
            </tbody>
          </table>

          <p>
            Ces proportions se stabilisent sur six mois en 2026 : la part YouTube oscille
            entre 27 et 32 % selon les requêtes, celle de LinkedIn entre 11 et 15 %,
            celle du web tiers rarement au-dessus de 26 %. La lecture pratique pour une
            PME française est simple : viser le top 20 Google sur ses requêtes
            commerciales reste nécessaire, mais ne suffit plus. Deux leviers additionnels
            s&apos;imposent, détaillés plus bas : la cohérence d&apos;entité et le
            format des passages. Ignorer l&apos;un des deux fait tomber le taux de
            citation sous 5 % sur la plupart des clusters.
          </p>

          <h2 id="selection">Comment Gemini choisit-il ses sources en 2026 ?</h2>
          <p>
            La sélection des sources dans Gemini obéit à deux filtres connus et un
            troisième probable. Premier filtre : l&apos;index Google. Une page absente
            du cache Googlebot n&apos;a aucune chance d&apos;être citée, ce qui exclut
            d&apos;office les sites bloqués par robots.txt ou en noindex. Second filtre :
            la pertinence au niveau du passage, pas du document complet. Sur un panel
            Essor de 60 requêtes françaises suivies en septembre 2026, 78 % des citations
            provenaient de pages déjà classées dans le top 20 Google sur une requête
            voisine, mais 41 % seulement figuraient en top 10. Troisième filtre probable :
            un score d&apos;autorité d&apos;entité calculé à partir du Knowledge Graph,
            qui expliquerait pourquoi Wikipedia représente 11,2 % des citations sur AI
            Mode. Pour un site français, deux signaux ressortent systématiquement :
            balisage Article complet et fiche Google Business Profile active, chacun
            corrélé à une hausse mesurable sur 90 jours.
          </p>

          <h2 id="blocs">Quels blocs de texte Gemini cite-t-il en priorité ?</h2>
          <p>
            Un bloc cité par Gemini partage trois propriétés mesurables. Longueur
            comprise entre 130 et 180 mots, avec un sujet nommé en première phrase sans
            dépendance au titre H2 au-dessus du paragraphe. Au moins une donnée chiffrée
            dans le passage, de préférence propriétaire ou datée. Enfin une structure
            autonome, lisible hors contexte : un lecteur arrivant sur ce seul paragraphe
            doit comprendre le sujet sans remonter plus haut. Sur 320 passages testés sur
            AI Mode entre juin et septembre 2026, les blocs qui cochent les trois
            critères sont cités 3,4 fois plus souvent que les paragraphes de corps de
            texte sans chiffre. Les listes à puces sont reprises mais rarement citées
            comme source : Gemini privilégie le texte continu dans ses attributions. Les
            tableaux HTML natifs, en revanche, apparaissent fréquemment dans les
            réponses structurées à condition d&apos;avoir un en-tête clair et moins de
            10 lignes.
          </p>

          <div className="callout">
            <span className="callout-label">À retenir</span>
            <p>
              Trois signaux prédisent la citation par Gemini : page dans le top 20
              Google, bloc de 130 à 180 mots avec un chiffre daté, entité consolidée au
              Knowledge Graph. Un seul des trois suffit rarement.
            </p>
          </div>

          <h2 id="entite">Comment construire son entité pour Google AI Mode ?</h2>
          <p>
            L&apos;entité désigne la représentation que Google a de votre marque dans
            son Knowledge Graph, pas votre site. Gemini s&apos;appuie massivement sur
            cette couche : sur 60 requêtes françaises testées en septembre 2026, 68 %
            des citations de marques accompagnaient une entité déjà présente dans le
            panneau de connaissance Google. Pour construire son entité, trois actions
            concrètes : un balisage Organization complet avec sameAs pointant vers vos
            profils officiels (LinkedIn, YouTube, GitHub, Crunchbase), une fiche Google
            Business Profile vérifiée avec catégorie primaire précise, et des mentions
            cohérentes de la marque sur 5 à 10 sources tierces (presse digitale,
            annuaires sectoriels, Wikidata quand c&apos;est possible). Compter 8 à 14
            semaines avant que Google consolide l&apos;entité et déclenche le panneau.
            Concession honnête : sans trafic de marque réel ni mentions presse,
            l&apos;entité ne décolle pas, aucun balisage ne compense une marque absente
            du web.
          </p>

          <h2 id="mesure">Comment mesurer son taux de citation sur Gemini ?</h2>
          <p>
            Mesurer son taux de citation sur Gemini se fait manuellement, aucune API
            publique ne l&apos;expose en octobre 2026. Protocole Essor en quatre étapes :
            lister 20 à 40 requêtes représentatives de votre offre et de votre marché,
            poser chaque requête à Gemini (gemini.google.com) et à Google AI Mode en
            navigation privée pour éviter la personnalisation, noter le nombre de
            sources citées ainsi que la position de votre site dans la liste, répéter
            l&apos;exercice toutes les 4 à 6 semaines. Trois indicateurs utiles : taux
            de citation brut (apparitions divisées par requêtes testées), position
            moyenne dans la liste de sources, et taux de citation par cluster
            thématique. Sur un compte SaaS français suivi six mois en 2026, le taux est
            passé de 1/30 à 11/30 après consolidation d&apos;entité et ajout de blocs
            citables sur 14 pages piliers. Compter environ 2 heures mensuelles pour un
            panel de 30 requêtes.
          </p>

          <p>
            Pour aller plus loin : notre offre de{" "}
            <Link href="/referencement-ia-geo">référencement IA et visibilité GEO</Link>{" "}
            détaille la méthode complète. L&apos;article{" "}
            <Link href="/blog/etre-cite-par-chatgpt">comment être cité par ChatGPT</Link>{" "}
            compare les trois facteurs de citation côté OpenAI, et{" "}
            <Link href="/blog/etre-cite-par-perplexity">être cité par Perplexity</Link>{" "}
            couvre le cas des citations explicites avec sources numérotées. Un{" "}
            <Link href="/contact">audit de citabilité</Link> Essor inclut un panel de 30
            requêtes testées simultanément sur Gemini, ChatGPT et Perplexity.
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
                  Un audit de citabilité, 30 requêtes, 3 moteurs IA.
                </h2>
                <p className="mt-2 max-w-md text-[14px] text-muted">
                  Panel ciblé sur votre marché, mesure sur Gemini, ChatGPT et Perplexity,
                  rapport chiffré sous 10 jours avec priorités d&apos;entité et blocs à
                  réécrire.
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
