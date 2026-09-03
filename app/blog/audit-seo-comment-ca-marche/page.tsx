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
  title: "Audit SEO : que contient un audit sérieux ? | Essor",
  description:
    "Un audit SEO complet couvre 4 dimensions (technique, contenu, autorité, GEO), livre 40 à 90 pages en 8 à 15 jours, coûte 1 500 à 5 000 € HT",
  path: "/blog/audit-seo-comment-ca-marche",
  titleAbsolute: true,
  ogType: "article",
});

const FAQ_PLAIN = [
  {
    q: "Combien de temps prend un audit SEO complet ?",
    a: "Entre 8 et 15 jours ouvrés selon la taille du site. Un site de moins de 500 URL demande 8 à 10 jours ; un e-commerce de 20 000 URL en demande 12 à 15. La durée dépend surtout du volume à crawler et de l'accès aux données historiques Search Console, GA4 et backlinks sur 12 à 16 mois. Un audit livré en 48 heures est un rapport automatique, pas un audit.",
  },
  {
    q: "Un audit SEO gratuit vaut-il quelque chose ?",
    a: "Il vaut ce qu'il coûte : un premier signal, pas une décision. Un audit gratuit remplit deux ou trois indicateurs sans crawl complet et sans lecture croisée avec vos ventes. Il sert à générer un rendez-vous commercial. Utile pour un premier contact, insuffisant pour engager 20 000 € HT de travaux techniques ou de refonte de contenu sur un site à revenus.",
  },
  {
    q: "Quelle différence entre audit technique et audit SEO complet ?",
    a: "L'audit technique couvre le crawl, l'indexation, la structure interne et la performance Core Web Vitals. Un audit SEO complet ajoute trois dimensions : contenu (couverture sémantique, cannibalisation, obsolescence), autorité (profil de liens, entités) et GEO (citabilité par ChatGPT, Perplexity, AI Overviews). Le premier coûte 1 200 à 2 500 € HT, le second 2 500 à 5 000 €.",
  },
  {
    q: "L'audit doit-il obligatoirement mener à un abonnement ?",
    a: "Non, et c'est même un red flag. Un audit sérieux se vend comme un livrable autonome : vous partez avec les priorités, les données brutes et le droit d'exécuter en interne ou avec un autre prestataire. Un audit conditionné à la signature d'un contrat de 12 mois n'est pas un audit, c'est un argumentaire commercial déguisé en diagnostic.",
  },
];

export default function ArticlePage() {
  return (
    <article>
      <JsonLd
        schemas={[
          articleSchema({
            path: "/blog/audit-seo-comment-ca-marche",
            headline:
              "Audit SEO : que contient un audit sérieux et quels sont les 5 red flags ?",
            description:
              "Ce que couvre un audit SEO complet en 2026 : 4 dimensions, livrables attendus, délais et grille tarifaire française, plus 5 signes d'un audit vendu comme prétexte à un abonnement.",
            datePublished: "2026-09-03",
            author: AUTHOR,
          }),
          personSchema(AUTHOR),
          organizationSchema(),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Blog", path: "/blog" },
            {
              name: "Audit SEO : comment ça marche",
              path: "/blog/audit-seo-comment-ca-marche",
            },
          ]),
          faqPageSchema(FAQ_PLAIN),
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 pt-6 md:px-8 md:pt-10 lg:px-12">
        <nav aria-label="Fil d'Ariane">
          <ol className="flex flex-wrap items-center gap-2 text-[12.5px] text-muted-2">
            <li>
              <Link href="/" className="transition-colors hover:text-text">
                Accueil
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/blog" className="transition-colors hover:text-text">
                Blog
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li aria-current="page" className="text-muted">
              Audit SEO : comment ça marche
            </li>
          </ol>
        </nav>

        <Reveal>
          <header className="mt-8">
            <p className="flex flex-wrap items-center gap-3 text-[12px] text-muted-2">
              <span className="rounded-full border border-accent/30 bg-accent-soft px-2.5 py-0.5 font-mono text-[11px] text-accent">
                SEO
              </span>
              <time dateTime="2026-09-03">3 septembre 2026</time>
              <span>8 min de lecture</span>
            </p>
            <h1 className="mt-4 text-[clamp(2rem,4.4vw,3.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
              Audit SEO : que contient un audit <em className="em-accent">sérieux</em> ?
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Un audit SEO sérieux fait 40 à 90 pages, coûte 1 500 à 5 000 € HT, prend
              8 à 15 jours ouvrés. Voici ce qu&apos;il couvre vraiment, les livrables
              attendus, et les 5 signes d&apos;un audit vendu comme prétexte à un
              abonnement.
            </p>
            <p className="mt-5 border-y border-border py-3 text-[13px] text-muted-2">
              Par Claire Vasseur, directrice SEO. Sources : 34 audits menés par Essor
              entre 2024 et 2026 sur des sites de 200 à 40 000 URL, plus la lecture
              comparée de 12 audits reçus de tiers.
            </p>
          </header>
        </Reveal>

        <div className="article-prose mt-10 pb-10">
          <h2 id="definition">Qu&apos;est-ce qu&apos;un audit SEO en 2026 ?</h2>
          <p>
            Un audit SEO est l&apos;examen structuré d&apos;un site pour mesurer
            l&apos;écart entre son état actuel et ce que Google, Bing et les moteurs IA
            récompensent en 2026. C&apos;est un livrable écrit, pas un rendez-vous
            commercial : entre 40 et 90 pages, un score chiffré par dimension, une
            liste de priorités classée par impact attendu et effort de mise en œuvre,
            un plan séquencé sur 90 à 180 jours. Sur les 34 audits menés par Essor
            entre 2024 et 2026, l&apos;écart moyen le plus fréquent porte sur la
            couverture sémantique : 41 % des pages ciblent la même intention
            qu&apos;une autre URL du même site, sans arbitrage explicite. Le deuxième
            écart concerne la performance mobile : la médiane du LCP terrain dépasse
            3,4 secondes, quand Google exige 2,5. Un audit sans priorisation, sans
            données brutes exportées et sans indicateur de vérification à 90 jours
            reste un rapport descriptif, pas un livrable opérationnel.
          </p>

          <h2 id="dimensions">Quelles 4 dimensions un audit SEO doit-il couvrir ?</h2>
          <p>
            Un audit SEO sérieux couvre quatre dimensions, pas une seule. La dimension
            technique traite le crawl, l&apos;indexation, la profondeur des URL, les
            codes de statut, la performance Core Web Vitals au 75e centile, la
            gestion du JavaScript et le fichier robots.txt. La dimension contenu
            mesure la couverture sémantique par cluster, détecte la cannibalisation
            entre pages, chiffre l&apos;obsolescence : sur nos audits, 29 % des
            articles de plus de 24 mois plafonnent parce qu&apos;ils citent des faits
            périmés ou des seuils dépassés. La dimension autorité analyse le profil
            de liens (domaines référents, anchors, ratio dofollow) et la cohérence de
            l&apos;entité (Knowledge Graph, sameAs, citations externes). La dimension
            GEO, apparue depuis 2024, mesure la citabilité par ChatGPT, Perplexity,
            Gemini et AI Overviews sur un panel de 30 requêtes réelles. Un audit à
            trois dimensions sur quatre laisse aujourd&apos;hui près d&apos;un tiers
            de la performance possible sur la table.
          </p>

          <h2 id="delai">Combien de temps prend l&apos;audit et que se passe-t-il chaque semaine ?</h2>
          <p>
            Un audit SEO complet demande 8 à 15 jours ouvrés selon la taille du site.
            La première semaine sert au crawl exhaustif via Screaming Frog ou
            Sitebulb, à la collecte des données historiques (Search Console sur 16
            mois, GA4 sur 12 mois, exports Ahrefs ou Majestic pour le profil de
            liens) et à l&apos;analyse des logs serveur quand ils sont disponibles. La
            deuxième semaine croise ces sources : cannibalisation identifiée par
            recoupement clics/impressions/URL, décrochages Core Web Vitals mis en
            regard des pages à forte valeur, mesure GEO sur 30 requêtes réelles. La
            troisième phase, courte, produit le livrable écrit et la restitution
            orale de 90 minutes. Un audit vendu en 48 heures est un rapport
            automatique généré depuis un outil SaaS : sur les 12 audits reçus de
            tiers que nous avons relus en 2026, 9 tenaient en 6 pages et ne
            contenaient aucune donnée propriétaire au site examiné.
          </p>

          <h2 id="livrables">Quels livrables attendre d&apos;un audit sérieux ?</h2>
          <p>
            Un audit SEO opérationnel se lit à cinq livrables. Un rapport écrit de 40
            à 90 pages structuré par dimension, avec un score sur 100 par axe et un
            score global. Une liste de priorités classée par ordre d&apos;impact
            attendu et d&apos;effort de mise en œuvre, typiquement 12 à 25 items pour
            un site de taille intermédiaire. Les données brutes exportées : crawl
            complet en CSV, tableau de cannibalisation, export des positions Search
            Console sur 16 mois, liste des domaines référents. Une roadmap
            trimestrielle qui séquence les corrections avec les indicateurs de
            vérification à 90 jours (LCP au 75e centile, impressions par cluster,
            taux de citation IA). Une restitution orale de 90 minutes avec
            l&apos;équipe qui devra exécuter, pour arbitrer les zones grises et
            valider l&apos;ordre. Cette matière est réutilisable indépendamment de
            l&apos;agence qui l&apos;a produite : c&apos;est le meilleur test
            qu&apos;un audit vaut son prix.
          </p>

          <h2 id="redflags">Quels sont les 5 red flags d&apos;un audit bidon ?</h2>
          <p>
            Cinq signaux distinguent un audit sérieux d&apos;un argumentaire déguisé.
            Premier signal : l&apos;audit est offert à condition de signer un contrat
            de 12 mois derrière ; un livrable gratuit n&apos;engage rien, ni
            l&apos;analyse ni le prestataire. Deuxième signal : le rapport fait 6 à
            15 pages et ressemble à un score PDF généré par un outil, sans donnée
            propre à votre site. Troisième signal : aucune priorisation, seulement
            une liste de bonnes pratiques universelles. Quatrième signal : pas
            d&apos;accès demandé à votre Search Console ni à GA4, ce qui exclut
            toute lecture croisée avec les vraies requêtes et les vraies conversions.
            Cinquième signal : aucun crawl technique n&apos;a été effectué, ni logs,
            ni Screaming Frog, ni parcours d&apos;URL réel. Sur les 12 audits tiers
            relus en 2026, 9 cumulaient au moins trois de ces signaux et servaient
            uniquement à justifier la vente d&apos;un abonnement mensuel derrière.
          </p>

          <div className="callout">
            <span className="callout-label">À retenir</span>
            <p>
              Un audit SEO valide se juge à quatre preuves : un crawl technique
              complet, une lecture croisée avec Search Console et GA4, une
              priorisation chiffrée, et le droit contractuel de partir avec les
              livrables sans obligation d&apos;abonnement mensuel.
            </p>
          </div>

          <h2 id="prix">Combien coûte un audit SEO en France en 2026 ?</h2>
          <p>
            La grille française 2026 pour un audit SEO se lit à trois paliers,
            corrélés à la taille du site et à la profondeur d&apos;analyse. Un audit
            technique seul, sur un site de moins de 500 URL, se facture 1 200 à
            2 500 € HT. Un audit SEO complet à quatre dimensions, pour une PME de 500
            à 5 000 URL, se situe entre 2 500 et 4 000 € HT. Un e-commerce de 5 000 à
            50 000 références demande 4 000 à 6 000 € HT pour un audit à quatre
            dimensions, avec analyse de logs et de catalogue. En dessous de 50 URL, un
            audit à 3 000 € HT ne se justifie pas : une matinée de review payée 300 à
            500 € HT donne un meilleur retour. Règle utile : si l&apos;audit coûte
            moins de 0,10 € par URL crawlée, il ne peut mathématiquement pas contenir
            de lecture manuelle sérieuse, seulement une lecture d&apos;outil.
          </p>

          <table>
            <thead>
              <tr>
                <th scope="col">Taille du site</th>
                <th scope="col">Prix HT</th>
                <th scope="col">Délai</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Vitrine, moins de 500 URL</td>
                <td>1 200 à 2 500 €</td>
                <td>8 à 10 jours</td>
              </tr>
              <tr>
                <td>PME, 500 à 5 000 URL</td>
                <td>2 500 à 4 000 €</td>
                <td>10 à 12 jours</td>
              </tr>
              <tr>
                <td>E-commerce, 5 000 à 50 000 URL</td>
                <td>4 000 à 6 000 €</td>
                <td>12 à 15 jours</td>
              </tr>
              <tr>
                <td>Grand compte, plus de 50 000 URL</td>
                <td>6 000 € HT et plus</td>
                <td>Sur devis</td>
              </tr>
            </tbody>
          </table>

          <p>
            Pour aller plus loin : notre offre de{" "}
            <Link href="/agence-seo">référencement naturel</Link> détaille le
            protocole d&apos;audit et la roadmap qui suit, l&apos;article{" "}
            <Link href="/blog/cout-agence-seo-2026">
              coût d&apos;une agence SEO en 2026
            </Link>{" "}
            couvre les honoraires en mission longue, et le comparatif{" "}
            <Link href="/blog/agence-seo-ou-freelance">agence ou freelance</Link>{" "}
            aide à choisir le format d&apos;exécution après l&apos;audit.
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
                  Un audit qui se lit et s&apos;exécute.
                </h2>
                <p className="mt-2 max-w-md text-[14px] text-muted">
                  Envoyez votre URL : audit à 4 dimensions livré sous 10 jours
                  ouvrés, données brutes incluses, aucune obligation
                  d&apos;abonnement mensuel.
                </p>
              </div>
              <MagneticButton href="/contact">Demander l&apos;audit</MagneticButton>
            </div>
          </div>
        </Reveal>
        <p className="mt-8 text-[13.5px] text-muted-2">
          <Link
            href="/blog"
            className="underline underline-offset-2 transition-colors hover:text-accent"
          >
            ← Retour au blog
          </Link>
        </p>
      </section>
    </article>
  );
}
