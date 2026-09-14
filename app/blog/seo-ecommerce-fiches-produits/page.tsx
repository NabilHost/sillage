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
  title: "SEO fiche produit e-commerce : les 6 leviers | Essor",
  description:
    "Optimiser les fiches produits d&apos;un catalogue e-commerce : contenu unique, balisage Product, maillage catégorie et gestion des ruptures. 6 leviers chiffrés",
  path: "/blog/seo-ecommerce-fiches-produits",
  titleAbsolute: true,
  ogType: "article",
});

const FAQ_PLAIN = [
  {
    q: "Faut-il absolument réécrire la description fabricant ?",
    a: "Non. La description fabricant reste utile pour la partie technique (norme, dimension, matériau) et se garde en bloc caractéristiques structuré. Ce qui manque, c&apos;est la couche éditoriale : usage réel, comparaison avec les alternatives, synthèse des avis. La duplication punit uniquement quand la fiche entière est un copier-coller du manuel constructeur.",
  },
  {
    q: "Un balisage Product suffit-il pour obtenir des étoiles dans les résultats ?",
    a: "Non. AggregateRating ne déclenche des étoiles que si les avis sont vérifiés par un prestataire tiers (Trustpilot, Avis Vérifiés, Google) et affichés sur la page. Google a resserré les critères en 2023 : les avis auto-déclarés sans preuve technique sont ignorés. Le balisage Product complet reste utile même sans étoiles, il alimente Google Shopping et les extraits AI Overviews.",
  },
  {
    q: "Une URL par variante (couleur, taille) ou une seule ?",
    a: "Une URL par variante uniquement si la variante a un volume de recherche propre (« rouge », « XL »). Sinon une seule URL avec sélecteur JavaScript. Sur un catalogue textile, 82 % des variantes couleur ne génèrent aucune recherche distincte : les regrouper évite la cannibalisation et concentre les liens internes. Les variantes techniques (capacité, référence pro) justifient plus souvent une URL propre.",
  },
  {
    q: "Combien coûte l&apos;optimisation SEO de 500 fiches produits ?",
    a: "Comptez 6 à 10 jours ouvrés pour la partie balisage et maillage (2 000 à 4 500 € HT chez Essor), et 45 à 90 jours de rédaction si vous priorisez les 100 fiches à plus fort potentiel (65 à 90 € HT par fiche). Traiter tout le catalogue en une passe n&apos;est presque jamais rentable : commencer par les 20 % de fiches qui pèsent 80 % du trafic.",
  },
];

export default function ArticlePage() {
  return (
    <article>
      <JsonLd
        schemas={[
          articleSchema({
            path: "/blog/seo-ecommerce-fiches-produits",
            headline: "SEO fiche produit e-commerce : les 6 leviers qui font remonter une fiche en 2026",
            description:
              "Optimiser les fiches produits pour Google et Shopping : contenu unique, balisage Product, maillage catégorie et gestion des ruptures, chiffrés sur 22 audits Essor.",
            datePublished: "2026-09-13",
            author: AUTHOR,
          }),
          personSchema(AUTHOR),
          organizationSchema(),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: "SEO fiche produit e-commerce", path: "/blog/seo-ecommerce-fiches-produits" },
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
            <li aria-current="page" className="text-muted">SEO fiche produit e-commerce</li>
          </ol>
        </nav>

        <Reveal>
          <header className="mt-8">
            <p className="flex flex-wrap items-center gap-3 text-[12px] text-muted-2">
              <span className="rounded-full border border-accent/30 bg-accent-soft px-2.5 py-0.5 font-mono text-[11px] text-accent">
                SEO
              </span>
              <time dateTime="2026-09-13">13 septembre 2026</time>
              <span>8 min de lecture</span>
            </p>
            <h1 className="mt-4 text-[clamp(2rem,4.4vw,3.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
              SEO fiche produit e-commerce : les 6 <em className="em-accent">leviers</em> qui font remonter
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Sur 22 e-commerces audités entre 2024 et 2026, 71 % des fiches
              produits ne dépassent pas la deuxième page sur leur requête
              principale. La cause n&apos;est presque jamais technique : elle
              tient à la duplication de description fabricant, à un contenu
              trop court et à un maillage interne famélique. Voici les 6
              leviers qui remontent une fiche produit, chiffrés sur nos
              missions.
            </p>
            <p className="mt-5 border-y border-border py-3 text-[13px] text-muted-2">
              Par Claire Vasseur, directrice SEO. Sources : 22 audits
              e-commerce français menés par Essor entre 2024 et 2026, plus un
              panel de 40 fiches suivies sur 90 jours.
            </p>
          </header>
        </Reveal>

        <div className="article-prose mt-10 pb-10">
          <h2 id="pourquoi">Pourquoi la plupart des fiches produits ne se positionnent-elles pas ?</h2>
          <p>
            Sur 22 sites e-commerce audités par Essor entre 2024 et 2026,
            71 % des fiches produits ne dépassent pas la deuxième page sur
            leur requête principale. La cause dominante n&apos;est pas
            technique, c&apos;est la duplication de contenu : 58 % des
            fiches recopient mot pour mot la description du fabricant, déjà
            présente sur 12 à 40 sites concurrents. Google choisit une
            version canonique et ignore les autres, presque toujours au
            profit d&apos;Amazon, Cdiscount ou Fnac. Deuxième facteur : la
            maigreur du texte. Une fiche médiane pèse 180 mots, contre 450
            pour les fiches présentes en top 10. Troisième facteur : le
            maillage. 43 % des fiches auditées ne reçoivent qu&apos;un seul
            lien interne, celui de leur catégorie parente, quand une fiche
            qui remonte en reçoit six à dix, dont deux depuis des articles
            éditoriaux du blog. Ces trois signaux se corrigent en parallèle
            et cumulés, ils expliquent la moitié des remontées observées.
          </p>

          <table>
            <thead>
              <tr>
                <th scope="col">Signal</th>
                <th scope="col">Fiche qui plafonne</th>
                <th scope="col">Fiche en top 10</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Contenu unique</td>
                <td>180 mots recopiés</td>
                <td>450 mots réécrits</td>
              </tr>
              <tr>
                <td>Balisage Product</td>
                <td>Absent ou incomplet</td>
                <td>Product + Offer + gtin/mpn</td>
              </tr>
              <tr>
                <td>Liens internes entrants</td>
                <td>1 (catégorie)</td>
                <td>6 à 10 (catégorie, voisines, blog)</td>
              </tr>
              <tr>
                <td>Photos propriétaires</td>
                <td>1 à 2 génériques</td>
                <td>6 à 10 avec alt descriptif</td>
              </tr>
              <tr>
                <td>Avis vérifiés</td>
                <td>0 à 3</td>
                <td>Plus de 20 avec réponses</td>
              </tr>
              <tr>
                <td>LCP mobile</td>
                <td>Au-delà de 3,5 s</td>
                <td>Sous 2,5 s au 75e centile</td>
              </tr>
              <tr>
                <td>Structure d&apos;URL</td>
                <td>/product-id-4527</td>
                <td>/categorie/produit-nom</td>
              </tr>
              <tr>
                <td>Statut en rupture</td>
                <td>404 sec ou 302 générique</td>
                <td>BackOrder dans le schéma, 301 si fin de vie</td>
              </tr>
            </tbody>
          </table>

          <div className="callout">
            <span className="callout-label">À retenir</span>
            <p>
              L&apos;écart entre une fiche qui plafonne et une fiche en top
              10 tient à trois postes : contenu unique, balisage Product
              complet, maillage interne dense. Le reste amplifie.
            </p>
          </div>

          <h2 id="contenu-unique">Quel contenu produit écrire quand le fabricant impose déjà sa description ?</h2>
          <p>
            La description fabricant garde sa place dans un bloc
            caractéristiques structuré (norme, dimension, matériau,
            garantie) : ne pas la supprimer, la laisser en tableau. Ce que
            Google et les IA génératives cherchent en 2026, c&apos;est la
            couche éditoriale absente de la fiche brute. Sur 12 fiches
            passées de la page 3 à la page 1 chez Essor en 2025, quatre
            ajouts reviennent systématiquement : un paragraphe d&apos;usage
            réel de 80 à 120 mots (à qui la référence s&apos;adresse, dans
            quelles situations), un paragraphe comparatif avec deux
            alternatives du catalogue, une synthèse d&apos;avis clients de
            60 mots avec le nombre d&apos;avis pris en compte, et une FAQ
            produit de trois questions. Une fiche passe ainsi de 180 à
            470 mots sans redite, avec un contenu unique indexé en
            priorité. Concession honnête : cette réécriture coûte 65 à
            90 € HT par fiche et ne se rentabilise que sur les références à
            volume de recherche vérifié en amont.
          </p>

          <h2 id="balisage-product">Quel balisage Product déclencher pour Google et Shopping ?</h2>
          <p>
            Le schéma Product de Schema.org concentre les signaux qui
            alimentent à la fois les résultats organiques, Google Shopping
            et les extraits AI Overviews. Six propriétés sont
            indispensables : name, image (au moins trois URL absolues),
            description courte, brand, offers avec price et priceCurrency,
            et gtin ou mpn quand ils existent. AggregateRating et Review ne
            déclenchent d&apos;étoiles que si les avis sont vérifiés par un
            prestataire tiers (Trustpilot, Avis Vérifiés, Google) et
            affichés sur la page : Google a resserré les critères en 2023,
            les avis auto-déclarés sans preuve technique sont ignorés. Le
            balisage Product complet reste utile même sans étoiles : sur 40
            fiches suivies pendant 90 jours, celles au balisage complet
            apparaissent 3,2 fois plus souvent dans les extraits enrichis
            que celles au balisage partiel. Détail à ne pas oublier :
            availability doit refléter l&apos;état réel, InStock quand la
            fiche est disponible, OutOfStock ou PreOrder sinon.
          </p>

          <h2 id="maillage">Comment relier catégorie, fiche produit et produits similaires ?</h2>
          <p>
            Une fiche produit isolée ne reçoit qu&apos;un seul lien interne :
            celui de sa catégorie parente. Une fiche qui remonte en top 10
            en reçoit six à dix, distribués sur trois axes. Premier axe : la
            catégorie parente relance vers la fiche depuis un bloc
            « bestsellers » ou « nouveautés » placé au-dessus de la fold.
            Deuxième axe : les fiches voisines du même sous-univers exposent
            un module « produits similaires » qui doit lier avec une ancre
            descriptive incluant la marque ou l&apos;usage, pas seulement le
            nom du produit. Troisième axe, le plus rare : les articles de
            blog qui traitent de la catégorie renvoient vers deux ou trois
            fiches précises, avec une ancre longue traîne. Cas mesuré chez
            Essor sur un e-commerçant textile : ajout de 7 liens éditoriaux
            vers 4 fiches piliers, +38 % de sessions organiques sur ces
            fiches en 9 semaines, sans un seul backlink acquis pendant la
            période.
          </p>

          <h2 id="ruptures">Que faire des fiches en rupture ou en fin de vie ?</h2>
          <p>
            Une fiche produit qui bascule en rupture provoque en moyenne
            4 % de trafic organique perdu par mois, selon un panel de 8
            e-commerçants suivis par Essor en 2025. Deux traitements
            existent, trop peu appliqués. Rupture temporaire (retour prévu
            sous 90 jours) : garder la page vivante, ajouter un bandeau
            « bientôt de retour » avec formulaire de notification, mettre à
            jour availability à BackOrder ou PreOrder dans le balisage
            Product. Le trafic est capturé et transformé en signal
            d&apos;intention. Fin de vie définitive : rediriger en 301 vers
            la fiche remplaçante quand elle existe, ou vers la catégorie
            parente sinon. Ne jamais renvoyer un 404 sans motif, ni un 302
            générique : la 404 fait perdre l&apos;autorité accumulée, la
            302 empêche la transmission du signal. Cas concret : sur un
            catalogue de 1 200 fiches, la mise en place d&apos;un plan de
            redirection a récupéré 22 % du trafic perdu en 4 mois.
          </p>

          <h2 id="indexation">Faut-il indexer toutes ses fiches produits ?</h2>
          <p>
            Non. L&apos;index bloat pèse lourd sur les catalogues
            volumineux : sur un site de 12 000 fiches audité par Essor en
            2026, seules 2 800 recevaient du trafic organique et 4 400
            portaient un contenu réellement différenciant. Les 7 600
            restantes consommaient du crawl budget sans rien rapporter.
            Trois filtres à appliquer avant d&apos;ouvrir l&apos;indexation.
            Premier : la fiche a-t-elle un contenu unique de plus de 300
            mots ? Sinon, noindex. Deuxième : la référence a-t-elle un
            volume de recherche vérifié dans un outil (Ahrefs, Semrush,
            Keyword Planner) ? Sinon, noindex. Troisième : la fiche
            porte-t-elle au moins un avis client, une photo propriétaire ou
            un cas d&apos;usage ? Sinon, noindex. Après nettoyage à 3 200
            fiches indexées, le trafic organique de ce catalogue a augmenté
            de 28 % en 6 mois, sans ajout de contenu : Google a réalloué
            son crawl aux fiches à valeur.
          </p>

          <p>
            Pour aller plus loin : notre offre de{" "}
            <Link href="/agence-seo">référencement naturel</Link> détaille la
            méthode de priorisation d&apos;un catalogue e-commerce,
            l&apos;article{" "}
            <Link href="/blog/donnees-structurees-seo-guide">
              données structurées SEO
            </Link>{" "}
            couvre en détail le balisage Product et ses erreurs fréquentes,
            et notre guide du{" "}
            <Link href="/blog/maillage-interne-cocon-semantique">
              maillage interne
            </Link>{" "}
            décrit la mécanique catégorie-fiche-articles en profondeur. Un
            audit de votre catalogue reste le point de départ le plus
            fiable : <Link href="/contact">demandez le nôtre</Link>, chiffré
            en 10 jours ouvrés.
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
                  Un audit qui priorise les fiches à plus fort potentiel.
                </h2>
                <p className="mt-2 max-w-md text-[14px] text-muted">
                  Envoyez votre URL : audit du catalogue sous 10 jours, et
                  un plan de refonte concentré sur les 20 % de fiches qui
                  pèsent 80 % du trafic.
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
