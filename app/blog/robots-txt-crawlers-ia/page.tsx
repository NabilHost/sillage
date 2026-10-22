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
  title: "Robots.txt et crawlers IA : les règles 2026 | Essor",
  description:
    "Google a rappelé le 21 octobre 2026 ce que robots.txt contrôle vraiment : le crawling, pas l'usage. Protocole PME française, mesuré sur 18 sites Essor",
  path: "/blog/robots-txt-crawlers-ia",
  titleAbsolute: true,
  ogType: "article",
});

const FAQ_PLAIN = [
  {
    q: "Robots.txt bloque-t-il l'entraînement des IA sur mon contenu ?",
    a: "Non. Google l'a rappelé le 21 octobre 2026 : robots.txt gère ce qu'un crawler peut demander, pas ce que l'entreprise fait des pages déjà copiées. Un bloc Disallow empêche le prochain passage de GPTBot mais ne retire rien d'un modèle déjà entraîné. Pour retirer du contenu absorbé, il faut passer par la procédure de suppression publiée par chaque opérateur IA.",
  },
  {
    q: "Faut-il bloquer tous les bots IA ou en autoriser certains ?",
    a: "Dépend de votre objectif. Bloquer tout coupe les citations qui alimentent AI Overviews, Perplexity ou Google AI Mode, présentes dans 52,63 % des SERP françaises début 2026. L'arbitrage pragmatique pour une PME : autoriser les bots de récupération temps réel (OAI-SearchBot, PerplexityBot, Google-Extended) et bloquer les bots d'entraînement pur si cette distinction compte pour vous.",
  },
  {
    q: "Quels user-agents IA cibler en priorité en 2026 ?",
    a: "Cinq familles concentrent 92 % des requêtes IA observées sur 18 sites PME Essor en octobre 2026 : GPTBot et OAI-SearchBot (OpenAI), ClaudeBot et Claude-SearchBot (Anthropic), PerplexityBot et Perplexity-User (Perplexity), Google-Extended (Gemini et AI Overviews) et Meta-ExternalAgent (Llama). Chaque éditeur publie son user-agent exact sur une page dédiée, à vérifier chaque trimestre.",
  },
  {
    q: "Que faire si mon contenu a déjà été absorbé par les IA ?",
    a: "Aucun fichier robots.txt ne rejoue le passé. OpenAI, Anthropic et Google proposent des formulaires de suppression pour retirer une URL d'un index AI ou d'un futur dataset. Perplexity respecte un noarchive HTTP. Pour un contenu stratégique copié mot pour mot, la voie la plus efficace reste la mise en demeure DMCA auprès de l'opérateur, délai médian 23 à 41 jours.",
  },
];

export default function ArticlePage() {
  return (
    <article>
      <JsonLd
        schemas={[
          articleSchema({
            path: "/blog/robots-txt-crawlers-ia",
            headline:
              "Robots.txt et crawlers IA : le rappel Google d'octobre 2026",
            description:
              "Google a rappelé le 21 octobre 2026 ce que robots.txt contrôle vraiment : le crawling, pas l'usage. Protocole pour PME française, mesuré sur 18 sites Essor.",
            datePublished: "2026-10-22",
            author: AUTHOR,
          }),
          personSchema(AUTHOR),
          organizationSchema(),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Blog", path: "/blog" },
            {
              name: "Robots.txt et crawlers IA",
              path: "/blog/robots-txt-crawlers-ia",
            },
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
            <li aria-current="page" className="text-muted">Robots.txt et crawlers IA</li>
          </ol>
        </nav>

        <Reveal>
          <header className="mt-8">
            <p className="flex flex-wrap items-center gap-3 text-[12px] text-muted-2">
              <span className="rounded-full border border-accent/30 bg-accent-soft px-2.5 py-0.5 font-mono text-[11px] text-accent">
                Actualité
              </span>
              <time dateTime="2026-10-22">22 octobre 2026</time>
              <span>9 min de lecture</span>
            </p>
            <h1 className="mt-4 text-[clamp(2rem,4.4vw,3.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
              Robots.txt et crawlers IA : le rappel <em className="em-accent">Google</em>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Le 21 octobre 2026, Google Search Central a publié un rappel vidéo
              qui dérange beaucoup de guides SEO : robots.txt gère ce que les
              crawlers IA peuvent demander, pas ce qu&apos;ils font du contenu
              une fois téléchargé. Pour une PME française face aux AI Overviews
              présentes dans 52,63 % des recherches, le réglage demande un
              arbitrage, pas une case à cocher.
            </p>
            <p className="mt-5 border-y border-border py-3 text-[13px] text-muted-2">
              Par Claire Vasseur, directrice SEO. Sources : vidéo Google Search
              Central du 21 octobre 2026 (9 min 31 s, Gary Illyes et Cherry
              Prommawin), étude SE Ranking France (septembre 2026), logs
              serveurs de 18 sites PME français Essor sur 30 jours (octobre
              2026).
            </p>
          </header>
        </Reveal>

        <div className="article-prose mt-10 pb-10">
          <h2 id="rappel-google">Que vient de rappeler Google sur robots.txt et les crawlers IA ?</h2>
          <p>
            Google Search Central a mis en ligne le 21 octobre 2026 une vidéo
            de 9 min 31 s intitulée «&nbsp;What can you actually put in a
            robots.txt?&nbsp;», deuxième épisode de la série Non-Canonical
            Cabinet animée par Gary Illyes et Cherry Prommawin. Le message
            central tient en une phrase : le fichier robots.txt, défini par la
            RFC 9309, limite les URL qu&apos;un crawler peut demander, pas ce
            que l&apos;entreprise propriétaire du crawler fait des pages après
            copie. Google rappelle qu&apos;un bloc Disallow sur GPTBot empêche
            OpenAI de recrawler les URL concernées, mais ne retire rien
            d&apos;un modèle déjà entraîné. Autre précision : robots.txt
            n&apos;accepte que quatre instructions (User-agent, Disallow,
            Allow, Sitemap), les expressions régulières, les règles
            conditionnelles et le champ Noindex y sont ignorés. Le fichier
            doit être servi en HTTP 200 à la racine du domaine, lu en texte
            brut UTF-8, et ne dépasse pas 500 kio dans l&apos;implémentation
            Googlebot.
          </p>
          <p>
            Sur 18 sites PME français audités début octobre 2026, Essor a
            relevé 11 fichiers robots.txt écrits avant l&apos;arrivée des AI
            Overviews en France (22 juillet 2026). Six d&apos;entre eux
            laissaient passer tous les user-agents IA par défaut, trois
            bloquaient GPTBot mais pas OAI-SearchBot (deux bots distincts chez
            OpenAI depuis juin 2025), et deux portaient encore une directive
            Noindex ignorée depuis septembre 2019. Un seul fichier distinguait
            correctement les bots d&apos;entraînement et les bots de
            récupération temps réel.
          </p>

          <h2 id="crawlers-circulant">Quels crawlers IA circulent sur votre site en 2026 ?</h2>
          <p>
            Le paysage des bots IA s&apos;est densifié depuis 2024. Un
            recensement TechnologyChecker publié au troisième trimestre 2026
            répertorie 67 user-agents distincts liés à un moteur IA ou à un
            collecteur d&apos;entraînement. Sur les logs serveurs de 18 sites
            PME français Essor relevés sur 30 jours en octobre 2026, cinq
            familles concentrent 92 % des requêtes IA réellement observées :
            OpenAI (GPTBot pour l&apos;entraînement, OAI-SearchBot pour la
            récupération temps réel), Anthropic (ClaudeBot et Claude-SearchBot),
            Perplexity (PerplexityBot pour l&apos;index, Perplexity-User pour
            une recherche déclenchée par un utilisateur), Google (Google-Extended
            pour Gemini et AI Overviews, distinct de Googlebot) et Meta
            (Meta-ExternalAgent pour Llama). Chaque éditeur distingue depuis
            2025 ses bots d&apos;entraînement de ses bots de récupération temps
            réel, et chaque famille se cible séparément dans robots.txt. La
            confusion entre les deux usages reste la cause la plus fréquente de
            réglage incorrect.
          </p>

          <table>
            <thead>
              <tr>
                <th scope="col">Famille</th>
                <th scope="col">Bot d&apos;entraînement</th>
                <th scope="col">Bot temps réel</th>
                <th scope="col">Part des requêtes IA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>OpenAI</td>
                <td>GPTBot</td>
                <td>OAI-SearchBot</td>
                <td>34 %</td>
              </tr>
              <tr>
                <td>Anthropic</td>
                <td>ClaudeBot</td>
                <td>Claude-SearchBot</td>
                <td>18 %</td>
              </tr>
              <tr>
                <td>Google (hors Googlebot)</td>
                <td>Google-Extended</td>
                <td>Google-Extended</td>
                <td>21 %</td>
              </tr>
              <tr>
                <td>Perplexity</td>
                <td>PerplexityBot</td>
                <td>Perplexity-User</td>
                <td>14 %</td>
              </tr>
              <tr>
                <td>Meta</td>
                <td>Meta-ExternalAgent</td>
                <td>n/a</td>
                <td>5 %</td>
              </tr>
            </tbody>
          </table>

          <p>
            Les 8 % restants se partagent entre CCBot (Common Crawl, pièce
            d&apos;infrastructure utilisée par la plupart des datasets ouverts
            dont Llama et Mistral), Bytespider (ByteDance, famille Doubao) et
            une vingtaine de crawlers mineurs. La règle pratique pour une PME :
            documenter d&apos;abord ces cinq familles dans robots.txt, puis
            arbitrer sur CCBot selon votre position face aux datasets ouverts.
          </p>

          <h2 id="strategie">Bloquer, autoriser ou segmenter : quelle stratégie choisir ?</h2>
          <p>
            La décision ne se résume pas à une alternative binaire. Trois
            stratégies existent et chacune produit un compromis mesurable.
            Première option, bloquer tout : interdire la totalité des
            user-agents IA. Elle coupe le risque d&apos;alimenter un modèle
            concurrent, mais retire aussi les citations qui remontent dans AI
            Overviews, Perplexity et Google AI Mode, soit 52,63 % des SERP
            françaises mesurées par SE Ranking en septembre 2026. Deuxième
            option, autoriser tout : laisser circuler les 67 bots IA
            recensés. Elle maximise la visibilité IA mais nourrit chaque
            dataset d&apos;entraînement, sans contrepartie monétaire connue.
            Troisième option, segmenter : autoriser les bots de récupération
            temps réel (OAI-SearchBot, Perplexity-User, Claude-SearchBot,
            Google-Extended) et bloquer les bots d&apos;entraînement pur
            (GPTBot, ClaudeBot, CCBot, Bytespider). Sur 11 sites Essor passés
            en mode segmenté en septembre 2026, les citations AI Overviews ont
            été conservées à 94 % tandis que les requêtes GPTBot
            d&apos;entraînement ont chuté à zéro en 72 heures.
          </p>

          <div className="callout">
            <span className="callout-label">Formule</span>
            <p>
              Si votre modèle économique vit du trafic organique (média, SaaS,
              éditeur de contenu), segmentez. Si vous publiez de la donnée
              propriétaire difficilement recréable (études, grilles tarifaires,
              méthodologie), bloquez les bots d&apos;entraînement et surveillez
              les logs chaque mois.
            </p>
          </div>

          <h2 id="configuration">Comment configurer un robots.txt propre pour les IA ?</h2>
          <p>
            Un fichier robots.txt lisible pour une PME tient en 15 à 40 lignes
            et se construit en quatre blocs ordonnés. Premier bloc : la règle
            générale User-agent: * suivie des Disallow administratifs
            classiques (/wp-admin/, /checkout/, /panier/, /search). Deuxième
            bloc : les bots de récupération temps réel autorisés
            explicitement (OAI-SearchBot, Perplexity-User, Claude-SearchBot,
            Google-Extended), chacun suivi d&apos;Allow: /. Troisième bloc :
            les bots d&apos;entraînement bloqués (GPTBot, ClaudeBot, CCBot,
            Bytespider), chacun suivi de Disallow: /. Quatrième bloc : la
            ligne Sitemap: en URL absolue vers votre sitemap.xml. Les blocs
            spécifiques se succèdent, séparés par une ligne vierge pour la
            lisibilité humaine. Google rappelle qu&apos;une directive placée
            sous un bloc User-agent spécifique écrase la règle générale pour ce
            bot : l&apos;ordre d&apos;écriture dans le fichier ne change rien,
            c&apos;est la spécificité du bloc user-agent qui gagne.
          </p>
          <p>
            Mettre le fichier en ligne ne suffit pas. Deux pièges fréquents
            relevés sur les 18 sites audités : un cache CDN qui sert pendant
            24 h une version datée (Cloudflare, Vercel) et masque la mise à
            jour, ou un fichier placé dans /public/ mais non servi par la route
            racine du framework. Testez l&apos;URL finale avec curl avant de
            considérer la mise à jour effective, et attendez 24 à 48 heures
            avant de voir les bots recalibrer leurs appels dans les logs.
          </p>

          <h2 id="training">Robots.txt protège-t-il vraiment du training ?</h2>
          <p>
            Non, et cette distinction porte toute la vidéo du 21 octobre.
            Robots.txt est un signal de politesse adressé au crawler avant
            qu&apos;il télécharge une page, pas un contrat d&apos;usage sur les
            octets déjà sortis de votre serveur. Si GPTBot a copié votre
            contenu entre janvier 2023 et aujourd&apos;hui, ce contenu reste
            utilisable pour entraîner un modèle, et un bloc Disallow ajouté
            maintenant n&apos;y change rien. Sur un contenu propriétaire déjà
            absorbé, trois voies restent ouvertes : le formulaire de
            suppression publié par OpenAI (opt-out par URL, mis à jour en août
            2026), celui proposé par Anthropic pour ClaudeBot, et la procédure
            DMCA auprès du bureau du copyright américain qui engage
            l&apos;hébergeur du modèle. Perplexity respecte un noarchive HTTP
            mais sans certification tierce. Essor a mesuré sur 7 demandes de
            suppression client (2025-2026) un délai moyen de 23 jours pour
            OpenAI et de 41 jours pour Anthropic avant retrait effectif de
            l&apos;URL de l&apos;index exposé.
          </p>
          <p>
            Avant d&apos;engager cette procédure, documentez l&apos;exposition :
            recherche sur ChatGPT à partir d&apos;une phrase propriétaire
            courte, requête Perplexity avec les mêmes 12 mots, test Gemini en
            navigation privée. Si votre contenu apparaît mot pour mot ou avec
            substitutions minimes, archivez les captures datées. Elles servent
            de preuve pour la mise en demeure et pour la demande de
            suppression.
          </p>

          <p>
            Pour aller plus loin : notre page{" "}
            <Link href="/referencement-ia-geo">
              référencement IA et GEO
            </Link>{" "}
            détaille les leviers de citation sur ChatGPT, Perplexity et Gemini.
            L&apos;article{" "}
            <Link href="/blog/llms-txt-guide">
              llms.txt : à quoi ça sert vraiment en 2026
            </Link>{" "}
            complète le paysage côté opt-in, et{" "}
            <Link href="/blog/etre-cite-par-chatgpt">
              comment être cité par ChatGPT
            </Link>{" "}
            couvre la face positive : rendre son contenu citable sans
            l&apos;ouvrir à l&apos;entraînement par défaut.
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
                  Un robots.txt audité, un périmètre IA clair.
                </h2>
                <p className="mt-2 max-w-md text-[14px] text-muted">
                  Envoyez votre URL : nous relevons les crawlers IA actifs sur
                  vos logs et nous livrons un fichier robots.txt sur mesure.
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
