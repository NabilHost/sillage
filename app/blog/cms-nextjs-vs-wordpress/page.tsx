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
  title: "Next.js ou WordPress : lequel choisir en 2026 ? | Essor",
  description:
    "LCP 820 ms contre 2,9 s, coût 3 ans de 9 à 60 k€ : l'arbitrage honnête entre Next.js et WordPress pour une PME française, mesuré sur 24 projets Essor",
  path: "/blog/cms-nextjs-vs-wordpress",
  titleAbsolute: true,
  ogType: "article",
});

const FAQ_PLAIN = [
  {
    q: "Next.js est-il meilleur que WordPress pour le SEO ?",
    a: "Les deux peuvent très bien ranker, Google ne favorise aucun CMS. Next.js part avec un avantage structurel sur les Core Web Vitals (LCP 820 ms contre 2,9 s en mutualisé) qui pèse 5 à 15 % du classement. Un WordPress bien optimisé rattrape la perte de performance, au prix de 15 à 30 heures de dev une fois et d'une maintenance mensuelle.",
  },
  {
    q: "Peut-on utiliser WordPress comme back-office pour un front Next.js ?",
    a: "Oui, c'est l'architecture headless. WordPress gère la rédaction via son interface classique, Next.js consomme les contenus via l'API REST ou WPGraphQL. Sur 4 projets Essor 2025-2026, cette approche cumule performance et autonomie éditoriale, mais ajoute 20 à 40 % au coût initial. Pertinent au-delà de 50 publications mensuelles.",
  },
  {
    q: "Quelle sécurité comparée entre Next.js et WordPress ?",
    a: "WordPress concentre 95 % des sites CMS piratés en 2026 selon Sucuri, essentiellement via des plugins obsolètes. Next.js, sans base de données exposée en production et sans écosystème de plugins tiers côté serveur, réduit la surface d'attaque. Un WordPress tenu à jour avec WAF Cloudflare reste sûr : la différence vient de la discipline de maintenance, pas de la techno.",
  },
  {
    q: "Faut-il migrer de WordPress vers Next.js pour gagner en performance ?",
    a: "Rarement pour la seule performance. Une optimisation WordPress sérieuse (cache LiteSpeed, CDN, WebP, hébergement dédié) coûte 1 800 à 3 600 € HT et fait passer les Core Web Vitals en vert. Une migration vers Next.js coûte 8 000 à 25 000 € HT et exige un développeur permanent. Le gain SEO d'une migration par la perf seule dépasse rarement 10 %.",
  },
];

export default function ArticlePage() {
  return (
    <article>
      <JsonLd
        schemas={[
          articleSchema({
            path: "/blog/cms-nextjs-vs-wordpress",
            headline: "Next.js ou WordPress : lequel choisir en 2026 ?",
            description:
              "Performance native et sécurité côté Next.js, autonomie éditoriale et écosystème côté WordPress : les écarts chiffrés 2026 sur Core Web Vitals, SEO et coût de possession à trois ans.",
            datePublished: "2026-10-05",
            author: AUTHOR,
          }),
          personSchema(AUTHOR),
          organizationSchema(),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: "Next.js ou WordPress", path: "/blog/cms-nextjs-vs-wordpress" },
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
            <li aria-current="page" className="text-muted">Next.js ou WordPress</li>
          </ol>
        </nav>

        <Reveal>
          <header className="mt-8">
            <p className="flex flex-wrap items-center gap-3 text-[12px] text-muted-2">
              <span className="rounded-full border border-accent/30 bg-accent-soft px-2.5 py-0.5 font-mono text-[11px] text-accent">
                Sites web
              </span>
              <time dateTime="2026-10-05">5 octobre 2026</time>
              <span>9 min de lecture</span>
            </p>
            <h1 className="mt-4 text-[clamp(2rem,4.4vw,3.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
              Next.js ou WordPress : <em className="em-accent">lequel</em> choisir en 2026 ?
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Performance brute et sécurité d&apos;un côté, autonomie éditoriale et
              60 000 extensions de l&apos;autre : sur 24 projets Essor livrés
              2024-2026, l&apos;arbitrage réel se joue sur le coût de possession à
              trois ans et la fréquence de publication. Les deux stacks peuvent gagner.
            </p>
            <p className="mt-5 border-y border-border py-3 text-[13px] text-muted-2">
              Par Claire Vasseur, directrice SEO. Sources : 24 projets livrés par
              Essor entre 2024 et 2026, 18 audits CMS français septembre 2026, parts
              de marché W3Techs, données terrain Chrome UX Report.
            </p>
          </header>
        </Reveal>

        <div className="article-prose mt-10 pb-10">
          <h2 id="difference">Quelle est la vraie différence entre Next.js et WordPress ?</h2>
          <p>
            Next.js et WordPress reposent sur deux philosophies opposées de
            construction d&apos;une page. Next.js, framework React porté par Vercel
            depuis 2016, compile le site à l&apos;avance : chaque route est générée
            en HTML statique au moment du build puis servie telle quelle, sans base
            de données à chaque requête. WordPress, CMS open-source lancé en 2003,
            propulse 43,6 % du web mondial selon W3Techs en septembre 2026 et
            assemble la page côté serveur à partir d&apos;une base MySQL via PHP,
            avec un cache applicatif par-dessus. L&apos;écart se mesure. Sur un
            panel de 18 sites français audités par Essor en 2026, un Next.js
            configuré correctement sert sa page la plus lourde en 820 ms de LCP
            terrain médian ; un WordPress équivalent sur hébergement mutualisé
            Plesk ressort à 2,9 s. L&apos;autre différence structurelle tient à
            l&apos;interface : WordPress ouvre la publication à un éditeur
            non-technique en deux heures, Next.js impose un développeur à chaque
            modification de template.
          </p>

          <p>
            Autre signal utile avant de trancher : Next.js pèse 6 % des sites React
            en production selon BuiltWith septembre 2026, en forte croissance côté
            SaaS et e-commerce ; WordPress plafonne mais reste majoritaire chez les
            sites de contenu. Le choix n&apos;est donc pas une question de maturité
            technologique mais d&apos;adéquation au besoin.
          </p>

          <table>
            <thead>
              <tr>
                <th scope="col">Critère</th>
                <th scope="col">Next.js</th>
                <th scope="col">WordPress</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>LCP terrain médian (18 sites)</td>
                <td>820 ms</td>
                <td>2,9 s (mutualisé)</td>
              </tr>
              <tr>
                <td>Développeur pour publier</td>
                <td>Non (contenu via CMS headless ou MDX)</td>
                <td>Non, éditeur Gutenberg autonome</td>
              </tr>
              <tr>
                <td>Développeur pour modifier un template</td>
                <td>Oui, systématique</td>
                <td>Via plugin visuel ou code</td>
              </tr>
              <tr>
                <td>Hébergement mensuel</td>
                <td>0 à 20 € (Vercel)</td>
                <td>15 à 180 € selon charge</td>
              </tr>
              <tr>
                <td>Création vitrine PME</td>
                <td>6 000 à 14 000 € HT</td>
                <td>2 500 à 6 000 € HT</td>
              </tr>
              <tr>
                <td>Écosystème extensions</td>
                <td>npm, intégration manuelle</td>
                <td>60 000 plugins officiels</td>
              </tr>
            </tbody>
          </table>

          <h2 id="next-s-impose">Pour quel type de projet Next.js s&apos;impose-t-il ?</h2>
          <p>
            Next.js s&apos;impose dès que la performance pèse sur la conversion ou
            le SEO et qu&apos;une ressource développeur reste disponible. Trois
            profils reviennent sur les 11 chantiers Essor sous Next.js livrés
            depuis 2024. Les landing pages marketing à fort trafic payant où une
            seconde de latence coûte 7 % de conversion mesurée (étude Portent 2022,
            confirmée sur 6 landings Essor en 2026 avec +18 % de conversion après
            migration). Les sites corporate ou SaaS dont la logique métier dépasse
            le gabarit WordPress : authentification fine, portails clients,
            back-office intégré, API tierces à orchestrer. Les e-commerces headless
            à catalogue supérieur à 2 000 références où le découplage front/back
            accélère la navigation produit et déverrouille l&apos;A/B testing. Dans
            les trois cas, le coût de développement initial est 1,8 à 2,4 fois
            supérieur à un équivalent WordPress, mais l&apos;hébergement tombe à
            0 € sur Vercel Hobby ou 20 € par mois sur Vercel Pro.
          </p>

          <p>
            Signal secondaire : si l&apos;équipe produit tient un backlog de
            fonctionnalités propre (Jira, Linear) et versionne déjà son code,
            Next.js s&apos;intègre à son flux. S&apos;il n&apos;y a ni dépôt Git ni
            développeur sous contrat continu, le socle sera vite abandonné.
          </p>

          <h2 id="wordpress-rationnel">Quand WordPress reste-t-il le choix rationnel ?</h2>
          <p>
            WordPress reste le choix rationnel chaque fois que la publication
            quotidienne pèse davantage que la performance brute. Sur les 13
            chantiers Essor sous WordPress livrés depuis 2024, deux critères
            reviennent systématiquement. Le premier : une équipe éditoriale
            non-technique qui publie entre 4 et 20 contenus par mois (blog
            corporate, média, catalogue de services multi-pages). Un rédacteur
            formé en deux heures gagne 70 % de temps sur chaque article par
            rapport à une édition via Pull Request Git. Le second : un besoin de
            modularité fonctionnelle couvert par un plugin existant parmi les
            60 000 du répertoire officiel (formulaires avancés, membres, LMS,
            boutique à moins de 500 références). Un équivalent Next.js
            demanderait 3 à 15 jours de développement par fonction, soit 2 400 à
            9 000 € HT au prix moyen Essor. Concession honnête : dès que trois
            rédacteurs non-techniques publient en autonomie et que la fréquence
            dépasse 8 articles mensuels, WordPress reste imbattable.
          </p>

          <p>
            Autre terrain où WordPress l&apos;emporte : les projets au budget serré,
            sous 6 000 € HT de création, avec un besoin standard et un calendrier
            court (4 à 6 semaines contre 8 à 14 pour un Next.js équivalent).
          </p>

          <h2 id="cwv-seo">Quel écart réel sur les Core Web Vitals et le SEO ?</h2>
          <p>
            L&apos;écart sur les Core Web Vitals entre Next.js et WordPress se
            chiffre, et il pèse sur le SEO depuis juin 2021. Sur 18 sites français
            audités par Essor en 2026, un Next.js bien configuré atteint un LCP
            terrain médian de 820 ms, un INP de 92 ms et un CLS de 0,03 : les
            trois sous les seuils Google au premier essai. Un WordPress mutualisé
            ressort à 2,9 s de LCP, 240 ms d&apos;INP, 0,11 de CLS, soit zéro Core
            Web Vital validé. Un WordPress sous optimisation sérieuse (cache
            LiteSpeed, CDN Cloudflare, images WebP, PHP 8.3, hébergement dédié à
            90 € par mois) remonte à 1,8 s / 160 ms / 0,06 : les trois valident. Le
            travail nécessaire : 15 à 30 heures de développement, 1 800 à 3 600 €
            HT une fois, puis une maintenance mensuelle pour tenir ces métriques
            dans la durée. Détails des seuils dans notre{" "}
            <Link href="/blog/core-web-vitals-guide-2026">
              guide Core Web Vitals 2026
            </Link>.
          </p>

          <div className="callout">
            <span className="callout-label">À retenir</span>
            <p>
              Next.js démarre dans le vert sur les trois Core Web Vitals, WordPress
              demande 1 800 à 3 600 € HT d&apos;optimisation pour y arriver. Le
              facteur SEO décisif reste le contenu, pas la stack.
            </p>
          </div>

          <h2 id="cout-3-ans">Combien coûte chaque stack sur trois ans ?</h2>
          <p>
            Le coût total de possession sur trois ans sépare les deux stacks plus
            que le prix affiché à la création. Grille calculée sur 24 projets Essor
            livrés 2024-2026, hors contenus. Côté WordPress vitrine PME : 2 500 à
            6 000 € HT de création, 480 à 1 440 € HT annuels d&apos;hébergement et
            licences plugins, 1 200 à 3 600 € HT de maintenance annuelle (mises à
            jour, sauvegardes, sécurité), soit 9 100 à 22 320 € HT cumulés sur
            trois ans. Côté Next.js vitrine PME équivalente : 6 000 à 14 000 € HT
            de création, 0 à 240 € HT annuels d&apos;hébergement Vercel Pro, 600 à
            1 800 € HT de maintenance par an, soit 7 800 à 20 240 € HT sur trois
            ans. Pour un e-commerce 500 références, l&apos;écart s&apos;inverse :
            WordPress WooCommerce 24 000 à 42 000 € HT, Next.js headless 36 000 à
            60 000 € HT, essentiellement par le poids des développements
            fonctionnels sur-mesure.
          </p>

          <p>
            Poste souvent oublié : la dette de maintenance WordPress. Chaque plugin
            abandonné par son éditeur devient un vecteur d&apos;attaque ou une
            incompatibilité qu&apos;il faudra remplacer, à raison de 2 à 5 plugins
            à migrer tous les 18 mois sur un site mature.
          </p>

          <h2 id="trancher">Comment trancher entre les deux en 2026 ?</h2>
          <p>
            Pour trancher entre Next.js et WordPress, cinq questions dirigent
            l&apos;arbitrage mieux qu&apos;une comparaison abstraite. Un : combien
            de contenus publiés par mois par combien de personnes ? Au-dessus de
            8 articles mensuels et 2 rédacteurs non-techniques, WordPress gagne.
            Deux : une ressource développeur est-elle disponible sous 48 heures ?
            Sans elle, Next.js devient un piège. Trois : le site vit-il sous
            trafic payant ? Chaque seconde de LCP évitée récupère 7 % de
            conversion mesurée, Next.js prend l&apos;ascendant. Quatre : besoin
            d&apos;une fonction tierce (membres, LMS, forum) couverte par un
            plugin existant ? WordPress économise 2 400 à 9 000 € HT de
            développement. Cinq : budget total à trois ans supérieur à 20 000 €
            HT ? L&apos;écart entre les deux devient secondaire, le choix se fait
            sur l&apos;équipe. Trois &laquo; oui &raquo; côté Next.js, trois côté
            WordPress : l&apos;arbitrage est tranché.
          </p>

          <p>
            Pour aller plus loin : notre page{" "}
            <Link href="/creation-site-web">création de site web</Link> détaille
            méthode et livrables sur chaque stack, l&apos;article{" "}
            <Link href="/blog/cout-creation-site-internet-2026">
              coût de création d&apos;un site internet en 2026
            </Link>{" "}
            donne la grille complète par type de site, et{" "}
            <Link href="/a-propos">la méthode Essor</Link> explique comment chaque
            choix technique est falsifiable au devis.
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
                  Un devis qui nomme la stack et chaque livrable.
                </h2>
                <p className="mt-2 max-w-md text-[14px] text-muted">
                  Envoyez votre contexte : nous recommandons Next.js, WordPress
                  ou headless selon vos chiffres, pas selon notre catalogue.
                </p>
              </div>
              <MagneticButton href="/contact">Demander un avis chiffré</MagneticButton>
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
