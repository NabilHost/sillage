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
  title: "Délai création site internet : 4 à 14 semaines | Essor",
  description:
    "Vitrine 4-6 semaines, e-commerce 8-14, sur-mesure 14-24. Planning phase par phase, médiane sur 24 projets Essor et 3 causes de retard chiffrées",
  path: "/blog/delai-creation-site-internet",
  titleAbsolute: true,
  ogType: "article",
});

const FAQ_PLAIN = [
  {
    q: "Quel est le délai minimum pour un site vitrine sérieux ?",
    a: "4 semaines calendaires est le plancher réaliste pour un site vitrine PME de 6 à 10 pages, à condition d'arriver avec contenus finalisés (textes, photos, logo) et un décisionnaire unique côté client. Sous ce délai, on livre un thème préchargé avec 3 pages génériques, sans travail sur l'arborescence, le balisage SEO ni la conformité RGPD. La médiane observée sur 24 projets Essor tourne autour de 5 semaines calendaires, ce qui inclut une phase de recette de 5 jours ouvrés incompressible.",
  },
  {
    q: "Un e-commerce peut-il être livré en moins de 8 semaines ?",
    a: "Un e-commerce à catalogue simple (moins de 200 références, pas de connecteur ERP, paiement Stripe standard, transporteur Colissimo natif) peut sortir en 6 à 7 semaines si les fiches produits sont rédigées avant le développement. Sous ce seuil, la migration SEO depuis l'ancien site et la recette du tunnel d'achat sont sacrifiées, ce qui coûte 3 à 8 % du chiffre d'affaires les premiers mois post-lancement.",
  },
  {
    q: "Comment savoir si un prestataire tiendra ses délais ?",
    a: "Trois indicateurs à vérifier avant signature : le devis nomme chaque phase avec un nombre de jours ouvrés précis (pas juste un total), il prévoit une clause de pénalité en cas de retard prestataire (2 à 5 % du forfait par semaine), et le prestataire vous demande le nom du décisionnaire unique dès le premier appel. Sans ces trois points, le délai annoncé est une intention commerciale, pas un engagement contractuel.",
  },
  {
    q: "Pourquoi les projets dépassent-ils si souvent leur planning ?",
    a: "Sur nos 24 projets suivis, 71 % ont dépassé le planning initial, dont 82 % à cause du client (contenus livrés en retard, décisions non prises à temps, ajouts de périmètre en cours de route). Ce n'est pas une fatalité : verrouiller les contenus au kick-off avec une deadline signée, désigner un décideur unique et chiffrer les demandes hors périmètre suffit à tenir dans neuf cas sur dix.",
  },
];

export default function ArticlePage() {
  return (
    <article>
      <JsonLd
        schemas={[
          articleSchema({
            path: "/blog/delai-creation-site-internet",
            headline: "Combien de temps pour créer un site internet ? Les délais réels 2026",
            description:
              "Vitrine 4 à 6 semaines, e-commerce 8 à 14, sur-mesure 14 à 24 : la médiane observée sur 24 projets Essor, le planning phase par phase et les 3 causes de retard qui reviennent.",
            datePublished: "2026-09-29",
            author: AUTHOR,
          }),
          personSchema(AUTHOR),
          organizationSchema(),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: "Délai de création d'un site internet", path: "/blog/delai-creation-site-internet" },
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
            <li aria-current="page" className="text-muted">Délai de création d&apos;un site</li>
          </ol>
        </nav>

        <Reveal>
          <header className="mt-8">
            <p className="flex flex-wrap items-center gap-3 text-[12px] text-muted-2">
              <span className="rounded-full border border-accent/30 bg-accent-soft px-2.5 py-0.5 font-mono text-[11px] text-accent">
                Sites web
              </span>
              <time dateTime="2026-09-29">29 septembre 2026</time>
              <span>8 min de lecture</span>
            </p>
            <h1 className="mt-4 text-[clamp(2rem,4.4vw,3.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
              Combien de temps pour créer un site <em className="em-accent">internet</em> ?
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Un site vitrine PME sort en 4 à 6 semaines, un e-commerce en 8 à 14, un projet
              sur-mesure en 14 à 24. Ces trois plages viennent de 24 projets livrés par Essor
              depuis 2024, et les dépassements suivent trois causes récurrentes que le devis peut
              anticiper.
            </p>
            <p className="mt-5 border-y border-border py-3 text-[13px] text-muted-2">
              Par Claire Vasseur, directrice SEO. Sources : 24 projets Essor livrés entre 2024 et
              2026, planning tracké phase par phase avec relevé des causes de dépassement.
            </p>
          </header>
        </Reveal>

        <div className="article-prose mt-10 pb-10">
          <h2 id="delais">Quels sont les délais réels pour créer un site en 2026 ?</h2>
          <p>
            Un site vitrine PME sérieusement conçu demande 4 à 6 semaines calendaires, un
            e-commerce standard 8 à 14, un projet sur-mesure 14 à 24. Ces trois plages viennent de
            24 projets Essor livrés entre 2024 et 2026, avec suivi hebdomadaire du planning
            contractuel. Les médianes observées sont plus resserrées : 5 semaines pour la vitrine,
            11 pour l&apos;e-commerce, 18 pour le sur-mesure. Sous 4 semaines, aucun site sérieux
            n&apos;existe : le temps physique de recette, d&apos;écriture éditoriale et de mise en
            conformité RGPD prime sur la vitesse pure de développement. Les projets vendus
            « livrés en 10 jours » livrent un thème préchargé avec trois pages génériques, jamais
            un site pensé pour un métier. À l&apos;inverse, un projet vitrine qui dépasse
            8 semaines révèle presque toujours un cahier des charges flou plutôt qu&apos;une
            complexité technique réelle. Le tableau ci-dessous détaille la grille de délais par
            type.
          </p>

          <table>
            <thead>
              <tr>
                <th scope="col">Type de site</th>
                <th scope="col">Délai plancher</th>
                <th scope="col">Médiane observée</th>
                <th scope="col">Délai maximum</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Vitrine PME (moins de 10 pages)</td>
                <td>4 semaines</td>
                <td>5 semaines</td>
                <td>8 semaines</td>
              </tr>
              <tr>
                <td>Vitrine multi-services (10 à 30 pages)</td>
                <td>6 semaines</td>
                <td>8 semaines</td>
                <td>12 semaines</td>
              </tr>
              <tr>
                <td>E-commerce (200 à 5 000 références)</td>
                <td>8 semaines</td>
                <td>11 semaines</td>
                <td>14 semaines</td>
              </tr>
              <tr>
                <td>SaaS avec espace client</td>
                <td>12 semaines</td>
                <td>16 semaines</td>
                <td>22 semaines</td>
              </tr>
              <tr>
                <td>Site sur-mesure (fonctionnalités métier)</td>
                <td>14 semaines</td>
                <td>18 semaines</td>
                <td>24 semaines</td>
              </tr>
            </tbody>
          </table>

          <div className="callout">
            <span className="callout-label">À retenir</span>
            <p>
              Le délai plancher n&apos;est atteignable qu&apos;avec contenus fournis avant le
              kick-off et un décisionnaire unique côté client. À défaut, tabler sur la médiane,
              plus 15 à 20 % de marge de sécurité.
            </p>
          </div>

          <h2 id="phases">Comment se décompose le planning phase par phase ?</h2>
          <p>
            Le planning d&apos;un site se découpe en cinq phases séquentielles, dont trois
            dépendent autant du client que du prestataire. Cadrage et arborescence : 5 à
            10 jours ouvrés, plus long si l&apos;entreprise n&apos;a jamais formalisé son offre
            par écrit. Design UI/UX : 2 à 4 semaines pour une vitrine, jusqu&apos;à 6 pour un
            e-commerce, avec 3 à 5 allers-retours moyens observés sur nos 24 projets.
            Développement et intégration : 2 à 6 semaines selon la complexité fonctionnelle
            (paiement, comptes utilisateurs, connecteurs métier). Rédaction et intégration des
            contenus : 2 à 4 semaines dont la moitié dépend directement du client. Recette et mise
            en ligne : 5 à 10 jours ouvrés pour tester chaque parcours, brancher les outils
            analytiques et migrer les redirections SEO. Un planning honnête ne compresse jamais la
            recette : c&apos;est dans cette dernière phase que se logent les régressions
            coûteuses après ouverture.
          </p>
          <p>
            Ces phases se chevauchent partiellement sur les projets bien organisés : la rédaction
            démarre pendant le design, la recette pendant les derniers développements. Cette
            optimisation gagne 15 à 25 % sur le total, à condition que les livrables
            intermédiaires soient validés à l&apos;écrit et non par échanges oraux. Un
            chevauchement mal maîtrisé au contraire double le temps de recette et coûte plus
            qu&apos;il ne fait gagner.
          </p>

          <h2 id="retards">Quelles sont les 3 causes de retard qui reviennent le plus ?</h2>
          <p>
            Sur les 24 projets Essor livrés entre 2024 et 2026, 17 ont dépassé leur planning
            contractuel initial. Trois causes concentrent 82 % de ces retards. Première cause,
            les contenus fournis par le client : textes, photos et vidéos arrivent 3 semaines
            après la deadline en moyenne, souvent parce qu&apos;aucun responsable contenu
            n&apos;a été nommé côté entreprise. Deuxième cause, les allers-retours design non
            plafonnés : 4 tours prévus dans le devis, 8 à 12 réalisés quand le décisionnaire
            final n&apos;a pas validé la direction créative en début de projet. Troisième cause,
            le cahier des charges flou : ajouter un formulaire multi-étapes ou un espace client
            en cours de route ajoute 2 à 4 semaines de développement pur. Les 18 % restants
            viennent du prestataire (intégrations tierces sous-estimées, bugs de dernière
            minute). Bonne nouvelle : ces trois grandes causes sont anticipables au devis, aucune
            n&apos;est de nature purement technique.
          </p>
          <p>
            Le contre-poison tient en trois clauses écrites : un responsable contenu nommé côté
            client avec une deadline par livrable, un plafond d&apos;allers-retours design
            chiffré au-delà duquel chaque tour supplémentaire est facturé, et une option chiffrée
            pour les demandes hors périmètre. Ces trois clauses figurent dans nos devis depuis
            2025, et le taux de projets livrés à l&apos;heure est passé de 29 % à 68 % en un an
            sur 14 chantiers comparables.
          </p>

          <h2 id="raccourcir">Peut-on raccourcir un projet sans dégrader le résultat ?</h2>
          <p>
            Un projet de site peut effectivement livrer plus vite que la médiane, mais sous
            conditions précises et rarement gratuites. Premier levier, les contenus prêts avant
            le lancement : quand textes, photos et logos sont finalisés avant le kick-off, la
            médiane vitrine passe de 5 à 3,5 semaines sur nos 6 derniers projets où cette
            condition était remplie. Deuxième levier, un décisionnaire unique côté client : un
            projet à décideur unique livre 30 % plus vite qu&apos;un projet à comité de trois
            personnes ou plus, sur la base de 12 projets comparés en 2026. Troisième levier, un
            cahier des charges verrouillé avec un devis chiffré pour les demandes hors périmètre :
            moins de discussions au milieu du chantier. Concession honnête : accélérer sous
            4 semaines exige de trancher au premier passage sur le design, ce qui rebute la
            plupart des dirigeants qui aiment ajuster jusqu&apos;au dernier moment avant mise en
            ligne.
          </p>
          <p>
            À l&apos;inverse, aucun levier ne rattrape une équipe interne indisponible. Sur
            3 projets 2026 où la PME cliente était en refonte de son organisation en parallèle,
            le délai a systématiquement doublé, indépendamment de la préparation initiale. Le
            bon moment pour lancer un site n&apos;est pas quand le budget est disponible mais
            quand quelqu&apos;un peut consacrer 3 à 5 heures hebdomadaires au projet côté
            client.
          </p>

          <h2 id="ia">Un site en 48 heures avec l&apos;IA, est-ce sérieux ?</h2>
          <p>
            Un site produit en 48 heures avec un outil génératif existe techniquement, mais
            couvre 5 à 10 % du besoin réel d&apos;une PME. Sur 8 projets Essor en 2026 où le
            client arrivait avec un premier jet fait par un outil IA (Lovable, Wix Studio et
            générateurs équivalents), 6 ont dû être refaits presque intégralement : arborescence
            incohérente, contenus dupliqués depuis d&apos;autres sites, balisage SEO absent,
            aucune migration prévue depuis l&apos;ancien site. Le temps gagné en démarrage est
            perdu deux fois en corrections a posteriori. L&apos;usage utile de l&apos;IA sur nos
            chantiers 2026 : accélérer la rédaction de premiers jets (gain moyen de 25 % sur la
            phase contenu, mesuré sur 6 projets), produire des variantes de wireframes, générer
            des transcriptions d&apos;entretiens client. Aucun de ces usages ne remplace un
            cadrage humain, une recette manuelle, ni la responsabilité contractuelle sur les
            Core Web Vitals ou la mise en conformité RGPD.
          </p>
          <p>
            Cette même limite s&apos;applique aux plateformes tout-en-un vendues avec assistance
            IA embarquée. Sur nos audits post-lancement, 4 sites sur 10 construits sur ces
            plateformes portent des erreurs SEO structurelles (canonicals mal posés, sitemap
            absent, balises Open Graph vides) qui n&apos;apparaissent que trois mois plus tard,
            quand le trafic organique ne décolle pas comme espéré.
          </p>

          <p>
            Pour aller plus loin : notre page{" "}
            <Link href="/creation-site-web">création de site internet</Link> détaille
            l&apos;offre complète et les livrables inclus, l&apos;article{" "}
            <Link href="/blog/cout-creation-site-internet-2026">
              combien coûte la création d&apos;un site en 2026
            </Link>{" "}
            couvre la grille tarifaire équivalente, et l&apos;article{" "}
            <Link href="/blog/refonte-site-sans-perdre-seo">refonte sans perte de SEO</Link>{" "}
            aborde le cas particulier des migrations. Notre{" "}
            <Link href="/a-propos">méthode</Link> décrit comment nous verrouillons les délais
            par écrit dans chaque devis.
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
                <h3 className="text-xl font-extrabold tracking-tight">
                  Un planning verrouillé, phase par phase.
                </h3>
                <p className="mt-2 max-w-md text-[14px] text-muted">
                  Envoyez votre brief : devis avec délais chiffrés par phase et clause de
                  pénalité prestataire, sous 10 jours ouvrés.
                </p>
              </div>
              <MagneticButton href="/contact">Demander le devis</MagneticButton>
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
