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
  title: "Refonte de site sans perdre son SEO : protocole | Sillage",
  description:
    "Refonte de site : le protocole en 5 étapes pour préserver votre référencement. Inventaire, plan 301, parité sémantique, recette et surveillance 8 semaines",
  path: "/blog/refonte-site-sans-perdre-seo",
  titleAbsolute: true,
  ogType: "article",
});

const FAQ_PLAIN = [
  {
    q: "Combien de temps faut-il prévoir pour préparer une migration SEO ?",
    a: "Comptez 3 à 6 semaines de préparation en parallèle du développement : une semaine pour l'inventaire, une à deux pour le plan de redirections et la parité sémantique, une pour la recette pré-bascule. La surveillance post-bascule ajoute 8 semaines. Sur un site de moins de 1 000 pages, la charge totale représente 8 à 12 jours de travail SEO.",
  },
  {
    q: "Faut-il conserver les anciennes URLs lors d'une refonte ?",
    a: "Quand c'est possible, oui : une URL qui ne change pas conserve son historique sans dépendre d'une redirection. Ne changez une URL que si la nouvelle structure apporte un gain réel, comme une arborescence plus lisible. Un changement de design, de CMS ou de technologie n'oblige en rien à changer les URLs : c'est une décision séparée, à arbitrer page par page.",
  },
  {
    q: "Que faire si le trafic chute après une refonte déjà en ligne ?",
    a: "Agissez dans les 4 premières semaines : crawlez la liste des anciennes URLs pour repérer les 404, rétablissez les redirections manquantes, comparez titles et contenus des pages qui ont perdu des clics. Sur les migrations que nous avons auditées, la récupération prend 2 à 4 mois quand les corrections arrivent vite ; au-delà de 6 mois, une partie des positions est réattribuée durablement.",
  },
  {
    q: "Une refonte peut-elle faire progresser le SEO ?",
    a: "Oui, si elle embarque les corrections que l'ancien site ne permettait pas : performance, maillage interne, structure des titres, données structurées. Notre client mobilier a gagné 41 % de sessions organiques pendant sa migration. La refonte est le meilleur moment pour traiter la dette technique, à condition que la préservation de l'existant passe d'abord.",
  },
];

export default function ArticlePage() {
  return (
    <article>
      <JsonLd
        schemas={[
          articleSchema({
            path: "/blog/refonte-site-sans-perdre-seo",
            headline: "Refondre son site sans perdre son référencement : le protocole en 5 étapes",
            description:
              "Inventaire, plan 301 page à page, parité sémantique, recette pré-bascule et surveillance 8 semaines : le protocole de migration SEO complet, avec un cas à +41 %.",
            datePublished: "2026-07-15",
            author: AUTHOR,
          }),
          personSchema(AUTHOR),
          organizationSchema(),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: "Refonte sans perdre son référencement", path: "/blog/refonte-site-sans-perdre-seo" },
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
            <li aria-current="page" className="text-muted">Refonte sans perdre son SEO</li>
          </ol>
        </nav>

        <Reveal>
          <header className="mt-8">
            <p className="flex flex-wrap items-center gap-3 text-[12px] text-muted-2">
              <span className="rounded-full border border-accent/30 bg-accent-soft px-2.5 py-0.5 font-mono text-[11px] text-accent">
                Sites web
              </span>
              <time dateTime="2026-07-15">15 juillet 2026</time>
              <span>8 min de lecture</span>
            </p>
            <h1 className="mt-4 text-[clamp(2rem,4.4vw,3.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
              Refondre son site sans perdre son <em className="em-accent">référencement</em>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Une bascule sans protocole coûte en moyenne 43 % des sessions organiques
              en huit semaines. Voici le protocole en 5 étapes qui évite la chute :
              inventaire, redirections page à page, parité sémantique, recette et
              surveillance. Avec un client mobilier à +41 % pendant sa migration.
            </p>
            <p className="mt-5 border-y border-border py-3 text-[13px] text-muted-2">
              Par Claire Vasseur, directrice SEO. Données : 9 migrations auditées ou
              accompagnées par Sillage entre 2024 et juillet 2026.
            </p>
          </header>
        </Reveal>

        <div className="article-prose mt-10 pb-10">
          <h2 id="pourquoi-chute">Pourquoi une refonte fait-elle chuter le trafic organique ?</h2>
          <p>
            Une refonte mal préparée se paie en trafic : sur les 9 migrations que
            Sillage a auditées ou accompagnées depuis 2024, les sites arrivés après une
            bascule sans protocole avaient perdu en moyenne 43 % de leurs sessions
            organiques en huit semaines. La mécanique est connue. Google a indexé des
            URLs précises, leur a attribué un historique de signaux et les a reliées
            entre elles. Changer une URL sans redirection remet cette page à zéro.
            Supprimer une page jugée inutile supprime aussi les liens qu&apos;elle
            recevait. Réécrire un contenu qui se positionnait modifie sa pertinence
            perçue sur ses requêtes. Aucun de ces dégâts n&apos;est visible le jour de
            la mise en ligne : la chute s&apos;étale sur quatre à huit semaines, le
            temps que Google recrawle l&apos;ensemble du site. C&apos;est ce délai qui
            rend le sujet traître : quand la perte devient visible, elle est déjà
            installée.
          </p>

          <table>
            <thead>
              <tr>
                <th scope="col">Étape</th>
                <th scope="col">Moment</th>
                <th scope="col">Livrable</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1. Inventaire</td>
                <td>Dès le lancement du projet</td>
                <td>Tableur de référence : URLs, trafic, backlinks, conversions</td>
              </tr>
              <tr>
                <td>2. Plan de redirections 301</td>
                <td>Pendant le développement</td>
                <td>Correspondance page à page, ancienne vers nouvelle URL</td>
              </tr>
              <tr>
                <td>3. Parité sémantique</td>
                <td>À la livraison des contenus</td>
                <td>Comparatif title, H1, corps de texte, maillage</td>
              </tr>
              <tr>
                <td>4. Recette pré-bascule</td>
                <td>Sur la préproduction</td>
                <td>Checklist 12 points, dont 4 bloquants</td>
              </tr>
              <tr>
                <td>5. Surveillance</td>
                <td>8 semaines après bascule</td>
                <td>Suivi 404, indexation, clics page par page</td>
              </tr>
            </tbody>
          </table>

          <h2 id="inventaire">Comment construire l&apos;inventaire avant la bascule ?</h2>
          <p>
            L&apos;inventaire est la liste exhaustive de ce que le site actuel possède
            et de ce qu&apos;il rapporte. Concrètement : un crawl complet du site, les
            pages recevant du trafic sur 16 mois de Search Console, les pages recevant
            des backlinks, et les pages qui convertissent d&apos;après
            l&apos;analytics. Ces quatre sources se recoupent dans un tableur unique,
            une ligne par URL. Le chiffre qui surprend nos clients à chaque mission :
            80 % du trafic organique provient en général de moins de 20 % des URLs. Ce
            sont ces pages qui concentrent l&apos;attention pendant toute la refonte :
            leur contenu, leurs balises et leurs liens entrants doivent survivre à
            l&apos;identique. L&apos;inventaire fige aussi une référence chiffrée :
            positions, sessions et conversions par page avant bascule. Sans cette
            photographie initiale, impossible de mesurer quoi que ce soit après la
            mise en ligne, ni de prouver ce qui a été préservé.
          </p>
          <p>
            Deux exports complètent l&apos;inventaire : la liste des redirections déjà
            en place, héritées d&apos;une refonte précédente, qui doivent être reprises
            dans le nouveau plan pour éviter les chaînes, et les 100 premières pages
            par backlinks, à traiter comme intouchables. Pour un site de 500 pages,
            l&apos;inventaire complet représente une à deux journées de travail.
            C&apos;est le seul livrable de la migration qui ne peut pas être rattrapé
            après coup : les données de référence disparaissent avec l&apos;ancien
            site.
          </p>

          <h2 id="plan-301">Comment bâtir un plan de redirections 301 fiable ?</h2>
          <p>
            Le plan de redirections est un tableur à deux colonnes : chaque ancienne
            URL pointe vers la nouvelle URL correspondante, en 301, en un seul saut. La
            règle qui fait la différence : une correspondance page à page, jamais une
            redirection massive vers l&apos;accueil. Google traite une redirection vers
            une page sans rapport comme un soft 404, et le signal historique est perdu.
            Sur nos migrations, nous visons 100 % des URLs à trafic ou à backlinks
            mappées individuellement ; les pages mortes sans aucun signal peuvent
            renvoyer un 410 assumé. Deux pièges reviennent systématiquement : les
            chaînes de redirections, quand l&apos;ancienne règle de 2023 pointe vers
            une URL qui redirige à nouveau et que chaque saut dilue le signal, et les
            URLs à paramètres oubliées, pagination et filtres en tête. Le plan se teste
            avant la bascule, en préproduction, avec un crawl de la liste complète des
            anciennes URLs.
          </p>

          <h2 id="parite">Qu&apos;est-ce que la parité sémantique, et comment la vérifier ?</h2>
          <p>
            La parité sémantique consiste à vérifier que chaque page stratégique de la
            nouvelle version conserve ce qui la faisait se positionner : son title, son
            H1, sa structure de titres, son contenu principal et ses liens internes
            entrants. Une refonte graphique s&apos;accompagne presque toujours
            d&apos;une réécriture, et c&apos;est là que les pertes silencieuses se
            produisent. Sur une migration e-commerce auditée en 2025, 60 fiches
            réécrites pour être plus vendeuses avaient perdu les termes exacts sur
            lesquels elles se positionnaient : 31 % de clics en moins sur ce segment,
            sans qu&apos;aucune URL n&apos;ait changé. La méthode tient en un tableur :
            exporter pour chaque page les 10 requêtes qui génèrent ses clics dans
            Search Console, puis vérifier que ces termes restent présents dans le
            title, le H1 et le corps de la nouvelle version. Une heure par lot de 50
            pages, zéro outil payant.
          </p>
          <p>
            La parité vaut aussi pour le maillage interne : si la nouvelle navigation
            supprime un bloc de liens de pied de page ou un module d&apos;articles
            liés, les pages qui en dépendaient perdent leurs liens entrants au moment
            précis où elles doivent convaincre Google de leur continuité. Le crawl de
            préproduction doit donc comparer le nombre de liens internes reçus par
            chaque page stratégique avant et après, pas seulement son contenu.
          </p>

          <h2 id="recette">Que vérifier lors de la recette pré-bascule ?</h2>
          <p>
            La recette pré-bascule est une inspection de la préproduction, à froid,
            avant toute mise en ligne. Notre checklist compte 12 points, dont quatre
            bloquants : le noindex de préproduction doit sauter à la bascule, le plan
            de redirections doit répondre en 301 sur un échantillon testé, le sitemap
            XML doit lister les nouvelles URLs et elles seules, et les balises
            canonical doivent pointer vers les nouvelles adresses. S&apos;ajoutent les
            données structurées, les hreflang le cas échéant, les Core Web Vitals
            mesurés sur la préproduction et le robots.txt. La recette se fait en
            comparant un crawl de préproduction au crawl de référence de
            l&apos;inventaire, écart par écart. Une demi-journée de travail qui évite
            les accidents les plus coûteux : sur les 9 migrations que nous avons
            auditées, 3 chutes provenaient d&apos;un simple noindex resté en place
            après la mise en ligne, une erreur qui désindexe un site entier en
            quelques jours.
          </p>

          <h2 id="surveillance">Comment surveiller les 8 semaines après la mise en ligne ?</h2>
          <p>
            La surveillance post-bascule dure huit semaines, le temps nécessaire à
            Google pour recrawler et réévaluer un site de taille moyenne. Semaine 1 :
            crawl quotidien des anciennes URLs pour traquer les 404, et rapport Pages
            de Search Console pour vérifier que l&apos;indexation bascule. Semaines 2
            à 4 : suivi des impressions et des clics page par page, comparés à la
            référence de l&apos;inventaire. Semaines 5 à 8 : correction des pertes
            résiduelles, page par page, redirection ou contenu selon le diagnostic.
            C&apos;est ce protocole qui a permis à notre client mobilier de traverser
            sa migration en progression : +41 % de sessions organiques pendant la
            période de bascule, portés par les corrections techniques embarquées dans
            la refonte. Concession honnête : même un protocole parfait n&apos;annule
            pas les fluctuations des deux premières semaines. Il garantit seulement
            qu&apos;elles restent temporaires, mesurées et explicables.
          </p>

          <div className="callout">
            <span className="callout-label">À retenir</span>
            <p>
              Inventaire, 301 page à page, parité sémantique, recette 12 points,
              surveillance 8 semaines : chez Sillage, ce protocole est inclus dans
              chaque création de site, pas facturé en option.
            </p>
          </div>

          <p>
            Pour aller plus loin : notre page{" "}
            <Link href="/creation-site-web">création de site web</Link> détaille la
            méthode de refonte complète, la page <Link href="/agence-seo">agence SEO</Link>{" "}
            couvre l&apos;accompagnement continu après migration, et l&apos;article{" "}
            <Link href="/blog/combien-de-temps-seo-resultats">
              combien de temps pour des résultats SEO
            </Link>{" "}
            donne les délais de récupération à attendre levier par levier.
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
                  Une refonte en vue ?
                </h2>
                <p className="mt-2 max-w-md text-[14px] text-muted">
                  Envoyez votre URL : audit de migration chiffré sous 10 jours,
                  inventaire compris, et un avis honnête sur ce que votre refonte
                  risque de coûter ou de rapporter en SEO.
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
