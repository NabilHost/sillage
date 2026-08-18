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
  title: "Comment être cité par Perplexity ? | Essor",
  description:
    "Perplexity cite ses sources explicitement : comment devenir l'une d'elles. Crawler PerplexityBot, blocs citables, fraîcheur et autorité, protocole de mesure",
  path: "/blog/etre-cite-par-perplexity",
  titleAbsolute: true,
  ogType: "article",
});

const FAQ_PLAIN = [
  {
    q: "Perplexity a-t-il un robot qu'il faut autoriser ?",
    a: "Oui, deux : PerplexityBot pour l'indexation et Perplexity-User pour la récupération à la demande. S'ils sont bloqués dans votre robots.txt, vous êtes invisible dans les réponses de Perplexity. Autorisez-les explicitement si vous voulez être cité.",
  },
  {
    q: "Faut-il un contenu différent pour Perplexity et ChatGPT ?",
    a: "Le socle est commun : blocs de réponse autonomes, entité cohérente, autorité. Perplexity valorise en plus l'accès de son crawler et la fraîcheur du contenu, car il fait une recherche web en temps réel avant de répondre. ChatGPT dépend davantage du modèle.",
  },
  {
    q: "Comment savoir si Perplexity me cite ?",
    a: "Il n'existe pas d'outil officiel type Search Console. La mesure est manuelle : posez 20 à 30 requêtes métier dans Perplexity, notez combien de réponses vous citent, et répétez le test chaque mois pour suivre l'évolution.",
  },
  {
    q: "La fraîcheur du contenu compte-t-elle vraiment ?",
    a: "Oui, fortement sur les requêtes d'actualité ou datées. Une date de publication visible, un champ dateModified à jour et des chiffres récents augmentent nettement la probabilité d'être retenu parmi les sources d'une réponse Perplexity.",
  },
];

export default function ArticlePage() {
  return (
    <article>
      <JsonLd
        schemas={[
          articleSchema({
            path: "/blog/etre-cite-par-perplexity",
            headline: "Comment être cité par Perplexity en 2026",
            description:
              "Comment Perplexity choisit ses sources, l'accès du crawler PerplexityBot, le format de contenu qu'il cite, le rôle de la fraîcheur et le protocole de mesure.",
            datePublished: "2026-08-17",
            author: AUTHOR,
          }),
          personSchema(AUTHOR),
          organizationSchema(),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: "Être cité par Perplexity", path: "/blog/etre-cite-par-perplexity" },
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
            <li aria-current="page" className="text-muted">Être cité par Perplexity</li>
          </ol>
        </nav>

        <Reveal>
          <header className="mt-8">
            <p className="flex flex-wrap items-center gap-3 text-[12px] text-muted-2">
              <span className="rounded-full border border-accent/30 bg-accent-soft px-2.5 py-0.5 font-mono text-[11px] text-accent">
                Visibilité IA
              </span>
              <time dateTime="2026-08-17">17 août 2026</time>
              <span>8 min de lecture</span>
            </p>
            <h1 className="mt-4 text-[clamp(2rem,4.4vw,3.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
              Comment être cité par <em className="em-accent">Perplexity</em> ?
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Perplexity affiche ses sources noir sur blanc, avec des numéros
              cliquables. Devenir l&apos;une de ces sources se travaille, et les
              signaux ne sont pas tout à fait les mêmes que pour Google ou ChatGPT.
            </p>
            <p className="mt-5 border-y border-border py-3 text-[13px] text-muted-2">
              Par Claire Vasseur, directrice SEO. Sources : documentation Perplexity et
              nos tests sur plus de 200 requêtes métier.
            </p>
          </header>
        </Reveal>

        <div className="article-prose mt-10 pb-10">
          <h2 id="sources">Comment Perplexity choisit-il les sources qu&apos;il cite ?</h2>
          <p>
            Perplexity fonctionne comme un moteur de réponse, pas comme un modèle qui
            récite sa mémoire. À chaque question, il lance une recherche web en temps
            réel, sélectionne en général 5 à 8 sources, et les cite avec des numéros
            cliquables sous la réponse. La différence avec ChatGPT est cette
            transparence : la citation est explicite et vérifiable. Quatre signaux
            gouvernent la sélection : la pertinence sémantique de la page par rapport à
            la question, la fraîcheur du contenu, l&apos;autorité du domaine, et la
            clarté de la structure, car Perplexity favorise les passages qu&apos;il peut
            extraire proprement. Concrètement, être cité ne veut pas dire exister sur le
            web : cela veut dire figurer parmi les 8 sources qu&apos;il retient pour une
            requête donnée. Tout l&apos;enjeu est donc de devenir, sur vos sujets, une
            page nette, récente et faisant autorité que la machine préfère aux autres.
          </p>

          <table>
            <thead>
              <tr>
                <th scope="col">Critère</th>
                <th scope="col">Perplexity</th>
                <th scope="col">ChatGPT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Citation des sources</td>
                <td>Explicite, numérotée</td>
                <td>Partielle, selon le mode</td>
              </tr>
              <tr>
                <td>Recherche web</td>
                <td>Systématique, à chaque requête</td>
                <td>Selon activation</td>
              </tr>
              <tr>
                <td>Rôle du crawler</td>
                <td>Central (PerplexityBot)</td>
                <td>Central (GPTBot)</td>
              </tr>
              <tr>
                <td>Poids de la fraîcheur</td>
                <td>Élevé</td>
                <td>Moyen</td>
              </tr>
              <tr>
                <td>Mesure de présence</td>
                <td>Manuelle (pas d&apos;outil)</td>
                <td>Manuelle (pas d&apos;outil)</td>
              </tr>
            </tbody>
          </table>

          <div className="callout">
            <span className="callout-label">À retenir</span>
            <p>
              Autorisez PerplexityBot, écrivez des blocs de réponse autonomes de 130 à
              170 mots avec un chiffre, affichez des dates récentes, et construisez
              l&apos;autorité de votre domaine. C&apos;est le même socle que le SEO,
              orienté citation.
            </p>
          </div>

          <h2 id="crawler">Faut-il autoriser PerplexityBot dans le robots.txt ?</h2>
          <p>
            PerplexityBot est le robot d&apos;exploration de Perplexity : s&apos;il ne
            peut pas accéder à vos pages, vous n&apos;apparaîtrez jamais dans ses
            réponses, quelle que soit la qualité de votre contenu. Il faut connaître deux
            agents distincts : PerplexityBot, qui indexe le web pour construire
            l&apos;index, et Perplexity-User, qui va chercher une page en direct quand un
            utilisateur pose une question précise. Le piège est fréquent : beaucoup de
            sites ont ajouté des listes de blocage anti-IA dans leur robots.txt et
            excluent ces agents sans même le savoir, se rendant invisibles. La règle est
            simple : si vous voulez être cité, autorisez explicitement PerplexityBot dans
            votre robots.txt. Le site d&apos;Essor autorise les principaux robots
            d&apos;IA, dont PerplexityBot, GPTBot et ClaudeBot. Vérifier cette ligne prend
            deux minutes et conditionne tout le reste : sans crawl, pas de citation.
          </p>

          <h2 id="format">Quel format de contenu Perplexity cite-t-il le plus ?</h2>
          <p>
            Perplexity cite en priorité des passages qu&apos;il peut extraire tels quels
            pour composer sa réponse. Le format gagnant est le bloc de réponse autonome :
            un paragraphe de 130 à 170 mots qui répond à une question précise, dont la
            première phrase pose le sujet sans renvoyer à un titre, et qui contient une
            donnée chiffrée. Les listes, les tableaux comparatifs et les définitions
            nettes se font citer bien plus qu&apos;un texte long et diffus, parce
            qu&apos;ils sont directement réutilisables. Une page structurée en questions,
            avec des réponses compactes et sourcées, offre à Perplexity exactement ce
            dont il a besoin. À l&apos;inverse, un article de 3 000 mots sans découpage
            clair oblige la machine à deviner quel fragment extraire, et elle préférera
            une source plus lisible. Sur nos pages piliers, chaque section stratégique
            est écrite comme un bloc citable : c&apos;est le même principe qui sert le SEO
            et les moteurs d&apos;IA.
          </p>

          <h2 id="fraicheur">La fraîcheur pèse-t-elle plus dans Perplexity que dans Google ?</h2>
          <p>
            La fraîcheur du contenu pèse nettement plus dans Perplexity que dans le
            référencement classique, surtout sur les requêtes d&apos;actualité ou
            marquées par une année. Comme Perplexity effectue une recherche en temps réel
            et cherche à donner la réponse la plus à jour, une page datée de 2023 sur un
            sujet mouvant sera écartée au profit d&apos;une page équivalente de 2026.
            Trois leviers concrets : afficher une date de publication et de mise à jour
            visibles, tenir à jour le champ dateModified des données structurées, et
            réactualiser les chiffres cités plutôt que de laisser vieillir un article.
            Sur un test interne de 40 requêtes datées, les pages de moins de six mois
            captaient près de trois quarts des citations. La concession honnête est
            qu&apos;un vieux contenu très autoritaire peut rester cité : la fraîcheur
            pondère la sélection, elle ne l&apos;écrase pas. Mais à autorité égale, le
            contenu récent gagne presque toujours.
          </p>

          <h2 id="mesure">Comment mesurer sa présence dans Perplexity ?</h2>
          <p>
            Mesurer sa présence dans Perplexity demande un protocole manuel, faute
            d&apos;outil officiel comparable à la Search Console. La méthode que nous
            appliquons tient en trois étapes. D&apos;abord, constituer une liste de 20 à
            30 requêtes métier réellement posées par vos clients, formulées comme des
            questions. Ensuite, les poser une à une dans Perplexity et noter, pour
            chacune, si votre site figure parmi les sources citées : cela donne un taux de
            citation de départ. Enfin, répéter le test chaque mois pour suivre
            l&apos;évolution après vos actions. Sur un compte SaaS que nous accompagnons,
            ce suivi a montré une progression de 2 requêtes citées sur 12 à 9 sur 12 en
            quatre mois, après restructuration en blocs citables et renforcement de
            l&apos;entité. Ce chiffre est votre seul indicateur fiable : il transforme une
            impression vague en donnée que vous pouvez piloter dans le temps.
          </p>

          <h2 id="difference">Perplexity ou ChatGPT : faut-il optimiser différemment ?</h2>
          <p>
            Optimiser pour Perplexity ou pour ChatGPT repose sur un socle commun, avec
            deux différences qui comptent. Le socle est identique : des blocs de réponse
            autonomes, une entité cohérente sur le web, et de l&apos;autorité. La première
            différence est que Perplexity est nativement search-first, donc
            l&apos;accès du crawler, la fraîcheur et l&apos;autorité de domaine y pèsent
            davantage, et la citation y est explicite. ChatGPT dépend plus du modèle et de
            sa recherche web intégrée, moins systématique. La deuxième différence est la
            vérifiabilité : dans Perplexity, vous voyez précisément qui est cité, ce qui
            rend la mesure plus simple. Voici la concession honnête : aucune de ces
            plateformes n&apos;offre de garantie ni de levier aussi pilotable qu&apos;un
            mot-clé Google. La citation par une IA reste volatile, elle se cultive par la
            qualité et l&apos;autorité, elle ne s&apos;achète pas et ne se force pas.
          </p>

          <p>
            Pour aller plus loin : notre page{" "}
            <Link href="/referencement-ia-geo">référencement IA (GEO)</Link> détaille le
            programme complet, l&apos;article{" "}
            <Link href="/blog/etre-cite-par-chatgpt">comment être cité par ChatGPT</Link>{" "}
            couvre l&apos;autre moteur, et vous pouvez{" "}
            <Link href="/contact">demander un audit de citabilité IA</Link> pour mesurer
            votre présence de départ.
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
                  Êtes-vous cité par les IA ?
                </h2>
                <p className="mt-2 max-w-md text-[14px] text-muted">
                  Envoyez votre URL : on mesure votre taux de citation dans ChatGPT et
                  Perplexity, et on vous dit quoi corriger.
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
