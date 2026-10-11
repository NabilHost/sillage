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
  title: "llms.txt à quoi ça sert ? Guide pratique 2026 | Essor",
  description:
    "10 % des sites l'implémentent, 97 % n'ont reçu aucune requête bot IA en 2026. Utilité réelle du fichier llms.txt, cas d'usage mesurés et protocole pour en poser un propre",
  path: "/blog/llms-txt-guide",
  titleAbsolute: true,
  ogType: "article",
});

const FAQ_PLAIN = [
  {
    q: "Mon site a-t-il besoin d'un llms.txt pour être cité par ChatGPT ou Gemini ?",
    a: "Non. Sur 60 requêtes françaises testées sur Gemini et AI Mode en septembre 2026, aucune citation attribuable au fichier llms.txt n'a été observée. Les trois leviers de citation mesurés sont le passage citable de 130 à 180 mots avec donnée chiffrée, la cohérence d'entité (balisage Organization, sameAs) et l'index Google. Un llms.txt sans ces fondations ne produit rien.",
  },
  {
    q: "Quelle différence entre llms.txt et llms-full.txt ?",
    a: "llms.txt est un sommaire : un index Markdown qui liste des URL vers des documents sources. llms-full.txt contient le texte intégral de ces documents concaténé. Les agents de code préfèrent la version légère, les systèmes qui indexent sans crawler chargent la version pleine. Pour un site PME classique, llms.txt suffit, llms-full.txt alourdit le dépôt sans contrepartie mesurée en 2026.",
  },
  {
    q: "Un llms.txt bien rédigé améliore-t-il le classement Google ?",
    a: "Non. Google n'a jamais confirmé consulter llms.txt pour son classement, et sur 24 missions Essor 2024-2026 aucun gain de position attribuable à l'ajout du fichier n'a été mesuré. Les signaux qui comptent restent la qualité du contenu, les Core Web Vitals, les backlinks pertinents et les données structurées JSON-LD, pas un fichier déclaratif.",
  },
  {
    q: "À quelle fréquence faut-il mettre à jour son llms.txt ?",
    a: "À chaque publication majeure : nouvelle page pilier, nouvel article important, retrait de contenu. Un fichier qui pointe vers des URL mortes crée un signal négatif pour les agents de code qui le lisent. En rythme de croisière, une revue mensuelle de 15 minutes suffit : vérifier les codes 200, retirer les contenus supprimés, ajouter les 1 à 4 nouvelles pages du mois.",
  },
];

export default function ArticlePage() {
  return (
    <article>
      <JsonLd
        schemas={[
          articleSchema({
            path: "/blog/llms-txt-guide",
            headline: "llms.txt à quoi ça sert ? Guide pratique et chiffres 2026",
            description:
              "Utilité réelle du fichier llms.txt en 2026, adoption mesurée sur 300 000 domaines, cas d'usage vérifiés et protocole pour en poser un propre.",
            datePublished: "2026-10-11",
            author: AUTHOR,
          }),
          personSchema(AUTHOR),
          organizationSchema(),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: "llms.txt à quoi ça sert", path: "/blog/llms-txt-guide" },
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
            <li aria-current="page" className="text-muted">llms.txt à quoi ça sert</li>
          </ol>
        </nav>

        <Reveal>
          <header className="mt-8">
            <p className="flex flex-wrap items-center gap-3 text-[12px] text-muted-2">
              <span className="rounded-full border border-accent/30 bg-accent-soft px-2.5 py-0.5 font-mono text-[11px] text-accent">
                Visibilité IA
              </span>
              <time dateTime="2026-10-11">11 octobre 2026</time>
              <span>9 min de lecture</span>
            </p>
            <h1 className="mt-4 text-[clamp(2rem,4.4vw,3.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
              <em className="em-accent">llms.txt</em> : à quoi ça sert vraiment en 2026 ?
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              10,13 % des sites l&apos;implémentent, 97 % des fichiers n&apos;ont reçu
              aucune requête de bot IA en mai 2026, aucun grand moteur n&apos;a confirmé
              le lire en production. Faut-il quand même poser un llms.txt sur son site ?
            </p>
            <p className="mt-5 border-y border-border py-3 text-[13px] text-muted-2">
              Par Claire Vasseur, directrice SEO. Sources : étude Ahrefs 137 000 sites
              (mai 2026), étude SE Ranking 300 000 domaines (Q1 2026), nos mesures sur
              60 requêtes françaises Gemini et AI Mode (septembre 2026).
            </p>
          </header>
        </Reveal>

        <div className="article-prose mt-10 pb-10">
          <h2 id="definition">Qu&apos;est-ce qu&apos;un fichier llms.txt et à quoi est-il censé servir ?</h2>
          <p>
            llms.txt est un fichier texte au format Markdown, posé à la racine d&apos;un
            site, qui liste les URL que l&apos;auteur souhaite voir prioritairement
            lues par les modèles de langage. Jeremy Howard (Answer.AI) a proposé la
            spécification en septembre 2024 sur la base d&apos;un constat simple :
            les crawlers IA peinent à distinguer, parmi 200 pages d&apos;un site, les
            10 qui portent la connaissance réelle. Le fichier déclare donc un
            sommaire pointant vers chaque document source. Sa syntaxe tient en quatre
            briques : un titre H1 avec le nom du projet, un blockquote de 2 à 4
            phrases résumant l&apos;offre, puis des sections <code>##</code> listant
            des liens Markdown avec une brève description. Un dérivé,
            <code> llms-full.txt</code>, propose une version concaténée du contenu
            lui-même. Ni l&apos;un ni l&apos;autre n&apos;est reconnu comme un standard
            par le W3C ou l&apos;IETF en octobre 2026 : adoption volontaire, aucun
            moteur n&apos;est tenu de le lire.
          </p>

          <h2 id="adoption">Les moteurs IA le lisent-ils vraiment en 2026 ?</h2>
          <p>
            Aucun grand moteur IA grand public n&apos;a confirmé lire llms.txt en
            production pour générer ses réponses finales à l&apos;utilisateur.
            L&apos;étude Ahrefs de mai 2026 sur 137 000 sites portant un llms.txt
            mesure que 97 % de ces fichiers n&apos;ont reçu aucune requête des
            crawlers IA sur 30 jours. SE Ranking, sur un échantillon de 300 000
            domaines au premier trimestre 2026, chiffre l&apos;adoption à 10,13 % :
            stable, pas en croissance après dix-huit mois d&apos;existence. OpenAI,
            Google, Anthropic, Meta, Mistral et Perplexity n&apos;ont publié aucune
            documentation engageant leurs modèles grand public à consulter ce fichier.
            Nos propres mesures le confirment : sur 60 requêtes françaises testées
            sur Gemini et AI Mode en septembre 2026, aucune citation ne pointait vers
            une URL présente dans un llms.txt sans être par ailleurs crawlable
            classiquement. Position honnête : poser un llms.txt ne change rien, en
            2026, à la probabilité d&apos;être cité par un chatbot grand public.
          </p>

          <table>
            <thead>
              <tr>
                <th scope="col">Acteur</th>
                <th scope="col">Documentation officielle 2026</th>
                <th scope="col">Lecture mesurée</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Agents de code (Cursor, Claude Code, Copilot)</td>
                <td>Oui (docs Anthropic, OpenAI, Stripe)</td>
                <td>Avérée</td>
              </tr>
              <tr>
                <td>Chatbots internes sur documentation produit</td>
                <td>Configuration éditeur</td>
                <td>Avérée</td>
              </tr>
              <tr>
                <td>ChatGPT (OpenAI), AI Mode (Google), Gemini</td>
                <td>Aucune</td>
                <td>Non confirmée</td>
              </tr>
              <tr>
                <td>Perplexity, Claude.ai, Copilot grand public</td>
                <td>Aucune</td>
                <td>Non confirmée</td>
              </tr>
            </tbody>
          </table>

          <h2 id="usage">Alors où llms.txt sert-il concrètement aujourd&apos;hui ?</h2>
          <p>
            L&apos;usage réel de llms.txt se situe du côté agent-à-agent : les
            équipes OpenAI, Anthropic, Stripe, Cloudflare, Mastercard et Vercel
            exposent un llms.txt pour aiguiller les assistants de code (Cursor,
            GitHub Copilot, Claude Code) vers leur documentation. L&apos;agent,
            quand on lui demande d&apos;écrire du code pour l&apos;API Stripe, charge
            d&apos;abord <code>/llms.txt</code> pour localiser les pages de référence
            plutôt que de deviner. Ce cas d&apos;usage, documenté sur
            docs.anthropic.com et docs.stripe.com, concerne les éditeurs de SDK ou
            d&apos;API publique, pas les sites marchands français. Pour une PME ou
            un e-commerçant, l&apos;intérêt mesuré tombe à zéro : aucun agent
            utilisateur ne consulte le llms.txt d&apos;une boulangerie avant de la
            citer. La seule exception plausible : un chatbot interne (support, aide
            produit) qu&apos;une entreprise construit sur sa propre documentation.
            Dans ce cas, llms.txt sert d&apos;index pour le pipeline de récupération,
            mais c&apos;est de l&apos;ingénierie interne, pas du référencement.
          </p>

          <h2 id="comparaison">Comment llms.txt se compare-t-il à robots.txt et aux données structurées ?</h2>
          <p>
            robots.txt contrôle l&apos;accès des crawlers, pièce par pièce :
            il autorise ou bloque GPTBot, PerplexityBot, Google-Extended, ClaudeBot
            sur chaque chemin. Son effet est immédiat et mesurable, un bot bloqué
            cesse de récupérer la page dans la journée. llms.txt, à l&apos;inverse,
            ne bloque rien et n&apos;autorise rien : il recommande des contenus à
            lire, sans garantie de lecture. Les données structurées JSON-LD, elles,
            encodent le sens d&apos;une page dans un vocabulaire que Google, Bing et
            les moteurs IA interprètent effectivement : un
            {" "}<Link href="/blog/donnees-structurees-seo-guide">balisage Article
            complet</Link>{" "}avec headline, author et datePublished est repris
            dans 41 % des citations IA mesurées sur notre panel contre 12 % sans
            schéma. L&apos;ordre de priorité pour une PME française en 2026 :
            d&apos;abord robots.txt (contrôler quels bots entrent), ensuite JSON-LD
            (parler le vocabulaire des moteurs), enfin, optionnellement, llms.txt.
            Inverser cet ordre revient à peindre le toit avant d&apos;avoir coulé
            les fondations.
          </p>

          <div className="callout">
            <span className="callout-label">À retenir</span>
            <p>
              Chez Essor, nous posons un llms.txt parce qu&apos;il tient en 60 lignes
              et sert de référence éditoriale interne. Nous ne le recommandons pas
              aux clients vitrines avant les trois leviers plus prioritaires :
              robots.txt propre, JSON-LD complet, blocs citables de 130 à 180 mots.
            </p>
          </div>

          <h2 id="protocole">Comment poser un llms.txt propre si on y tient ?</h2>
          <p>
            Un llms.txt utile tient en 30 à 80 lignes et vise moins de 10 Ko : au-delà,
            les agents qui le lisent le tronquent. La structure minimale comprend
            cinq blocs : un H1 avec le nom de la marque, un blockquote de 2 à 4
            phrases décrivant l&apos;offre, les coordonnées et le périmètre
            géographique, puis 3 à 6 sections <code>##</code> (Pages clés, Méthode,
            Blog, Contact, Mentions légales) pointant chacune vers 3 à 15 URL
            maximum. Chaque lien reçoit un résumé de 15 à 60 mots nommant la donnée
            centrale, pas une phrase marketing. Le fichier se pose à
            <code> /llms.txt</code>, accessible en HTTP 200, type MIME
            <code> text/plain</code>, encodage UTF-8, sans redirection ni
            authentification. Vérifier en une commande :
            <code> curl -I https://votre-domaine.fr/llms.txt</code>. Le temps de
            rédaction : 2 à 4 heures pour un site de 10 à 30 pages. Au-delà, le
            fichier devient un doublon du sitemap XML sans valeur ajoutée mesurée.
          </p>

          <h2 id="decision">Faut-il poser un llms.txt sur son site en 2026 ?</h2>
          <p>
            Un llms.txt se justifie si le site expose une documentation technique
            consommée par des agents de code (API publique, SDK, framework) : le
            gain est réel, mesurable et documenté par les éditeurs qui l&apos;ont
            adopté. Un llms.txt ne se justifie pas si le site est une vitrine, un
            e-commerce ou un blog éditorial grand public : aucune donnée publique
            en 2026 ne montre un effet sur le taux de citation IA, et les 2 à 4
            heures investies produisent davantage de valeur sur robots.txt, les
            blocs citables et la cohérence d&apos;entité détaillés dans notre offre
            de{" "}<Link href="/referencement-ia-geo">référencement sur les moteurs
            IA</Link>. Concession honnête : poser le fichier ne nuit à rien, et si
            la pratique devient un signal mesurable un jour, le site est prêt.
            L&apos;avoir, c&apos;est 5 % d&apos;effort pour une incertitude de
            bénéfice. Ne pas l&apos;avoir, c&apos;est libérer 2 à 4 heures sur un
            levier dont l&apos;impact, lui, est documenté.
          </p>

          <p>
            Pour prolonger : notre offre de{" "}
            <Link href="/referencement-ia-geo">référencement IA et GEO</Link> couvre
            les trois leviers mesurés (bloc citable, entité, index), l&apos;article{" "}
            <Link href="/blog/etre-cite-par-chatgpt">être cité par ChatGPT</Link>{" "}
            détaille le protocole de citation, et notre guide sur les{" "}
            <Link href="/blog/etre-cite-par-perplexity">citations Perplexity</Link>{" "}
            donne la mesure côté Perplexity. Un avis sur votre cas précis :
            notre équipe répond via la page <Link href="/contact">audit</Link>.
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
                  Un audit de votre citabilité IA, sous 10 jours.
                </h2>
                <p className="mt-2 max-w-md text-[14px] text-muted">
                  Taux de citation mesuré sur 30 requêtes, trois priorités chiffrées :
                  robots.txt, entité, blocs citables. llms.txt audité, pas vendu.
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
