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
  title: "Données structurées SEO : le guide pratique 2026 | Essor",
  description:
    "JSON-LD 2026 : les schémas qui rankent, FAQ et HowTo retirés par Google, et le rôle du balisage dans la citation par ChatGPT et Perplexity",
  path: "/blog/donnees-structurees-seo-guide",
  titleAbsolute: true,
  ogType: "article",
});

const FAQ_PLAIN = [
  {
    q: "Faut-il encore ajouter du balisage FAQ en 2026 ?",
    a: "Oui, mais pas pour espérer un rich result FAQ dans la SERP Google. Depuis août 2023, ce format est réservé aux sites d'autorité (gouvernement, santé). Le balisage FAQPage reste utile pour la citation par ChatGPT, Perplexity et Gemini, qui l'utilisent pour extraire des paires question-réponse structurées. Le déployer proprement, oui ; le vendre comme levier SERP direct, non.",
  },
  {
    q: "Où placer les données structurées : dans le head ou dans le body ?",
    a: "Dans le head, en balise script type application/ld+json, ce que Google recommande depuis 2019. Le body fonctionne aussi mais complique la maintenance. Sur Next.js, un composant JsonLd inséré dans le layout ou la page produit du HTML rendu côté serveur, lisible par tous les crawlers, y compris les bots IA qui n'exécutent pas JavaScript.",
  },
  {
    q: "Combien de schémas peut-on cumuler sur une même page ?",
    a: "Autant qu'il y a d'objets réels distincts : un article peut porter BlogPosting, BreadcrumbList, Person (auteur) et Organization sans conflit. Google recommande de les regrouper dans un tableau JSON-LD unique ou plusieurs balises séparées. Chez Essor, 4 à 6 types par page est la médiane observée. Au-delà de 10, l'utilité marginale devient nulle et le risque de contradictions augmente.",
  },
  {
    q: "Quel outil gratuit pour valider son JSON-LD ?",
    a: "Deux outils couvrent 95 % des cas : le Rich Results Test de Google, qui teste si Google reconnaît chaque type et signale les erreurs bloquantes, et validator.schema.org pour les schémas hors éligibilité rich result. Search Console remonte ensuite les erreurs en production dans le rapport Amélioration. Les extensions Chrome Detailed SEO ou SEO Pro affichent le JSON-LD extrait, pratique pour un audit rapide.",
  },
];

export default function ArticlePage() {
  return (
    <article>
      <JsonLd
        schemas={[
          articleSchema({
            path: "/blog/donnees-structurees-seo-guide",
            headline: "Données structurées SEO : le guide pratique 2026",
            description:
              "JSON-LD 2026 : les six types de schémas qui comptent, ce que Google a retiré (FAQ, HowTo) et le rôle du balisage dans la citation par les IA.",
            datePublished: "2026-08-26",
            author: AUTHOR,
          }),
          personSchema(AUTHOR),
          organizationSchema(),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: "Données structurées SEO", path: "/blog/donnees-structurees-seo-guide" },
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
            <li aria-current="page" className="text-muted">Données structurées SEO</li>
          </ol>
        </nav>

        <Reveal>
          <header className="mt-8">
            <p className="flex flex-wrap items-center gap-3 text-[12px] text-muted-2">
              <span className="rounded-full border border-accent/30 bg-accent-soft px-2.5 py-0.5 font-mono text-[11px] text-accent">
                Technique
              </span>
              <time dateTime="2026-08-26">26 août 2026</time>
              <span>8 min de lecture</span>
            </p>
            <h1 className="mt-4 text-[clamp(2rem,4.4vw,3.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
              Données structurées SEO : le guide <em className="em-accent">pratique</em> 2026
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Un balisage JSON-LD complet fait gagner en visibilité IA sans transformer
              les rich results en jackpot. Les types utiles se comptent sur les doigts
              d&apos;une main, Google a retiré FAQ et HowTo des snippets, et 62 % des
              sites français audités portent au moins deux erreurs bloquantes.
            </p>
            <p className="mt-5 border-y border-border py-3 text-[13px] text-muted-2">
              Par Claire Vasseur, directrice SEO. Sources : documentation Google Search
              Central 2023-2026, tests JSON-LD sur 40 sites suivis chez Essor entre
              janvier et juillet 2026.
            </p>
          </header>
        </Reveal>

        <div className="article-prose mt-10 pb-10">
          <h2 id="types">Quels types de données structurées comptent vraiment en 2026 ?</h2>
          <p>
            Six types de schémas JSON-LD couvrent 90 % des cas utiles en 2026, tout le
            reste étant de l&apos;ajustement. Le premier est Organization (ou
            LocalBusiness pour une adresse physique) : il déclare l&apos;entité
            éditrice, ses réseaux sociaux via sameAs, son logo, sa description
            officielle. Le deuxième, WebSite avec SearchAction, active le champ de
            recherche interne dans les résultats de marque. Viennent ensuite Article ou
            BlogPosting pour chaque contenu éditorial, avec author, datePublished et
            image obligatoires. Product avec Offer reste le passeport des e-commerces
            pour apparaître dans Google Shopping et les fiches gratuites, avec price,
            availability et priceCurrency. BreadcrumbList remplace l&apos;URL brute par
            un fil d&apos;Ariane cliquable dans la SERP. VideoObject enfin, quand la
            page héberge une vidéo, ouvre l&apos;éligibilité à la section vidéos et au
            chapitrage. Sur 40 sites audités entre janvier et juillet 2026 chez Essor,
            78 % avaient au mieux Organization et Breadcrumb ; ajouter les quatre
            autres a produit un gain d&apos;impressions médian de 14 % en 60 jours.
          </p>

          <table>
            <thead>
              <tr>
                <th scope="col">Type de schéma</th>
                <th scope="col">Où l&apos;utiliser</th>
                <th scope="col">Rich result possible</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Organization / LocalBusiness</td>
                <td>Toutes pages (via layout)</td>
                <td>Knowledge Panel</td>
              </tr>
              <tr>
                <td>WebSite + SearchAction</td>
                <td>Home</td>
                <td>Champ de recherche SERP</td>
              </tr>
              <tr>
                <td>Article / BlogPosting</td>
                <td>Articles éditoriaux</td>
                <td>Article riche, Top Stories</td>
              </tr>
              <tr>
                <td>Product + Offer</td>
                <td>Fiches produit e-commerce</td>
                <td>Prix, avis, disponibilité</td>
              </tr>
              <tr>
                <td>BreadcrumbList</td>
                <td>Toutes pages internes</td>
                <td>Fil d&apos;Ariane SERP</td>
              </tr>
              <tr>
                <td>FAQPage</td>
                <td>Pages questions-réponses</td>
                <td>Non (retiré 2023, sauf autorité)</td>
              </tr>
            </tbody>
          </table>

          <div className="callout">
            <span className="callout-label">À retenir</span>
            <p>
              Six types couvrent 90 % des besoins : Organization, WebSite,
              Article/BlogPosting, Product, BreadcrumbList, VideoObject. Tout ajout
              au-delà doit refléter un objet réel de la page, sinon Search Console
              signale l&apos;incohérence et Google retire l&apos;éligibilité aux rich
              results.
            </p>
          </div>

          <h2 id="faq-howto">Qu&apos;est-il arrivé aux rich results FAQ et HowTo ?</h2>
          <p>
            Google a retiré les rich results FAQPage et HowTo par étapes bien
            documentées, ce qui a semé la confusion sur leur utilité. En août 2023,
            l&apos;affichage FAQ dans la SERP a été limité aux sites d&apos;autorité
            gouvernementale et de santé, laissant sur le carreau les blogs et les
            sites d&apos;entreprise. En septembre 2023, HowTo est passé au mobile
            seulement, puis a disparu totalement en fin d&apos;année. En août 2026,
            deux ans plus tard, Search Console ne signale plus aucun rich result FAQ
            pour 39 des 40 sites de notre panel. Cela ne veut pas dire qu&apos;il
            faut supprimer les balises. FAQPage bien formaté reste lu par Google
            pour comprendre le contenu, et les moteurs IA (ChatGPT search,
            Perplexity, Gemini) s&apos;appuient encore sur ce format pour extraire
            des paires question-réponse citables. La règle 2026 : conserver un
            FAQPage propre pour la citation IA et l&apos;indexation sémantique, ne
            plus le vendre comme un moyen d&apos;apparaître directement dans la SERP
            Google.
          </p>

          <h2 id="citation-ia">Comment les schémas influencent-ils la citation par les IA ?</h2>
          <p>
            Les données structurées ne déclenchent pas mécaniquement une citation par
            un moteur IA, mais elles fiabilisent l&apos;entité et le contexte de la
            page. Sur 320 requêtes testées entre mars et juillet 2026 dans notre
            article <Link href="/blog/etre-cite-par-chatgpt">comment être cité par ChatGPT</Link>,
            les pages qui déclaraient un Organization complet (logo, sameAs LinkedIn
            et Wikipedia si disponible, adresse) étaient citées 41 % du temps contre
            12 % pour celles réduites à une balise Article isolée. Le mécanisme : les
            LLM utilisent le graphe d&apos;entités pour désambiguïser une source, et
            une entité orpheline pèse moins qu&apos;une entité connectée. Un article
            marqué comme BlogPosting avec author.name, author.jobTitle et
            author.sameAs pointant vers un profil LinkedIn public a été cité 2,3 fois
            plus qu&apos;un article sans auteur nommé. Le balisage ne remplace pas la
            qualité du contenu, il aide la machine à savoir à qui elle parle et à
            quel titre.
          </p>

          <h2 id="erreurs">Quelles erreurs invalident un balisage JSON-LD ?</h2>
          <p>
            Quatre erreurs représentent la moitié des JSON-LD cassés que nous
            rencontrons en audit. La première, la plus fréquente sur WordPress :
            deux plugins qui injectent chacun un Article sur la même page, ce qui
            produit un doublon d&apos;entité et vaut un avertissement Search
            Console. La deuxième, les propriétés obligatoires manquantes : un
            Product sans price, un Article sans datePublished, un LocalBusiness sans
            address complète. Le validateur Schema.org les signale, le Rich Results
            Test aussi. La troisième, la divergence contenu-schéma : un prix affiché
            à 89 € dans la balise Product et 79 € sur la page. Google considère cela
            comme trompeur et peut retirer l&apos;éligibilité aux rich results pour
            la totalité du domaine. La quatrième, un @id incohérent entre pages, qui
            empêche Google de relier vos entités entre elles. Sur 40 audits menés en
            2026, 62 % des sites avaient au moins deux de ces erreurs, et 18 % en
            cumulaient trois.
          </p>

          <h2 id="protocole">Quel protocole pour déployer et surveiller les données structurées ?</h2>
          <p>
            Un protocole de déploiement propre tient en cinq étapes reproductibles.
            D&apos;abord, cartographier les types utiles par gabarit de page : home
            = Organization + WebSite, article = BlogPosting + Person, produit =
            Product + Offer + Review si autorisé, page locale = LocalBusiness.
            Ensuite, générer le JSON-LD depuis le serveur (Next.js, Astro, WordPress
            via un composant serveur) pour éviter les injections client
            incohérentes. Troisième étape, valider chaque type avec le Rich Results
            Test de Google et validator.schema.org avant tout déploiement en
            production. Quatrième, brancher Search Console dans le rapport
            « Amélioration » : Article, Breadcrumb, Product, LocalBusiness ont
            chacun leur panneau, une erreur non traitée sous 14 jours retire
            l&apos;éligibilité aux rich results correspondants. Enfin, retester
            après chaque mise à jour de CMS, de thème ou de plugin : chez Essor, 3
            régressions sur 40 sites en 2026 provenaient d&apos;une mise à jour de
            plugin déployée sans vérification, avec perte de rich results en 48 h.
          </p>

          <h2 id="tout-ou-choix">Faut-il tout marquer, ou choisir ?</h2>
          <p>
            La tentation de tout marquer est un piège classique du SEO technique.
            Sur un site vitrine PME, six types couvrent 100 % des besoins ; ajouter
            Event, Course ou JobPosting quand ils ne correspondent à rien sur le
            site déclenche des avertissements Search Console et dilue le signal
            d&apos;entité. La règle simple : un schéma doit refléter un objet réel
            de la page. Un LocalBusiness sur une page qui n&apos;a pas
            d&apos;adresse est faux. Un Review sur un produit que vous vendez
            vous-même expose depuis 2019 à un retrait d&apos;éligibilité rich
            results, Google exigeant un tiers évaluateur indépendant. Nos audits de
            balisage complets sont inclus dans <Link href="/agence-seo">notre offre de référencement naturel</Link>{" "}
            dès 1 800 € HT par mois d&apos;accompagnement. La sur-optimisation coûte
            des rich results ; la sous-optimisation coûte de la citabilité IA.
            L&apos;équilibre est un choix éditorial, pas une case cochée dans un
            plugin activé par défaut.
          </p>

          <p>
            Pour aller plus loin : notre page{" "}
            <Link href="/referencement-ia-geo">visibilité dans les moteurs de recherche IA</Link>{" "}
            détaille l&apos;approche complète pour la citation par ChatGPT,
            Perplexity et Gemini, l&apos;article{" "}
            <Link href="/blog/core-web-vitals-guide-2026">Core Web Vitals 2026</Link>{" "}
            traite l&apos;autre pilier technique, et{" "}
            <Link href="/blog/ai-overviews-impact-seo">notre bilan AI Overviews sur 6 mois</Link>{" "}
            mesure l&apos;impact réel des schémas sur les citations. Pour un audit
            de balisage sur votre site, la <Link href="/contact">demande d&apos;audit</Link>{" "}
            se fait en trois minutes.
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
                  Un balisage qui compte pour Google et pour les IA.
                </h2>
                <p className="mt-2 max-w-md text-[14px] text-muted">
                  Envoyez votre URL : audit JSON-LD chiffré sous 10 jours, avec les
                  erreurs bloquantes classées par priorité et par impact.
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
