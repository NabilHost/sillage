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
  title: "Prix d'un site internet en 2026 : la grille réelle | Essor",
  description:
    "Prix création site internet 2026 : 1 500 à 6 000 € HT en vitrine, 8 000 à 25 000 € en e-commerce. Grille par type, coût à 3 ans et postes omis des devis",
  path: "/blog/cout-creation-site-internet-2026",
  titleAbsolute: true,
  ogType: "article",
});

const FAQ_PLAIN = [
  {
    q: "Quel est le prix moyen d'un site internet pour une PME ?",
    a: "Entre 1 500 et 6 000 € HT pour un site vitrine standard, 6 000 à 15 000 € HT dès qu'une stratégie SEO et des contenus professionnels sont inclus. Un e-commerce démarre autour de 8 000 € HT. Sur 3 ans, comptez environ le double du prix de création en intégrant hébergement, maintenance et évolutions.",
  },
  {
    q: "Pourquoi certains sites coûtent 500 € et d'autres 15 000 € ?",
    a: "Le prix reflète trois choses : qui produit (thème habillé en deux jours ou conception sur mesure par un profil senior), ce qui est inclus (contenus, SEO, migration, maintenance sont exclus de 60 % des devis analysés) et l'objectif du site (plaquette de présentation ou actif d'acquisition conçu pour générer des demandes).",
  },
  {
    q: "Quels coûts cachés faut-il anticiper ?",
    a: "Quatre postes reviennent : la rédaction des contenus (80 à 150 € HT par page), la maintenance technique (80 à 250 € HT par mois), les licences d'extensions (jusqu'à 600 € par an) et, en cas de refonte, la migration SEO. Sans plan de redirections 301, une refonte coûte en moyenne 43 % des sessions organiques.",
  },
  {
    q: "Un site Wix ou Squarespace peut-il suffire ?",
    a: "Oui, si votre activité vit du bouche-à-oreille et que le site sert uniquement de carte de visite : 20 à 30 € par mois suffisent. Non, dès que l'acquisition en ligne devient un enjeu : limites SEO, dépendance à la plateforme et migration coûteuse le jour où vous voulez en sortir.",
  },
];

export default function ArticlePage() {
  return (
    <article>
      <JsonLd
        schemas={[
          articleSchema({
            path: "/blog/cout-creation-site-internet-2026",
            headline: "Combien coûte la création d'un site internet en 2026 ? La grille réelle",
            description:
              "Grille de prix 2026 par type de site, coût de possession à 3 ans et les postes que les devis low-cost omettent.",
            datePublished: "2026-08-03",
            author: AUTHOR,
          }),
          personSchema(AUTHOR),
          organizationSchema(),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: "Prix de création d'un site internet en 2026", path: "/blog/cout-creation-site-internet-2026" },
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
            <li aria-current="page" className="text-muted">Prix de création d&apos;un site internet</li>
          </ol>
        </nav>

        <Reveal>
          <header className="mt-8">
            <p className="flex flex-wrap items-center gap-3 text-[12px] text-muted-2">
              <span className="rounded-full border border-accent/30 bg-accent-soft px-2.5 py-0.5 font-mono text-[11px] text-accent">
                Sites web
              </span>
              <time dateTime="2026-08-03">3 août 2026</time>
              <span>8 min de lecture</span>
            </p>
            <h1 className="mt-4 text-[clamp(2rem,4.4vw,3.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
              Combien coûte la création d&apos;un site internet en <em className="em-accent">2026</em> ?
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              De 1 500 à plus de 30 000 € HT : rarement un devis n&apos;explique cet
              écart. Voici la grille relevée sur 45 devis français en 2026, le coût
              réel à 3 ans, et les postes que les offres low-cost passent sous silence.
            </p>
            <p className="mt-5 border-y border-border py-3 text-[13px] text-muted-2">
              Par Claire Vasseur, directrice SEO. Sources : 45 devis de création de
              site analysés entre janvier et juillet 2026, plus nos propres projets
              livrés.
            </p>
          </header>
        </Reveal>

        <div className="article-prose mt-10 pb-10">
          <h2 id="grille">Quelle est la grille de prix par type de site ?</h2>
          <p>
            Le marché français de la création de site se structure en quatre paliers.
            Un site vitrine de 5 à 15 pages, réalisé par un indépendant ou une petite
            agence, se facture entre 1 500 et 6 000 € HT. Un site vitrine premium,
            avec stratégie éditoriale et SEO intégrés dès la conception, monte de
            6 000 à 15 000 € HT. Un e-commerce sous Shopify ou WooCommerce démarre à
            8 000 € HT et dépasse couramment 25 000 € dès que le catalogue, les flux
            produits et la logistique se complexifient. Le sur-mesure applicatif,
            enfin, commence vers 30 000 € HT. Ces fourchettes proviennent de 45 devis
            analysés entre janvier et juillet 2026 sur des projets de PME françaises.
            L&apos;écart au sein d&apos;un même palier s&apos;explique d&apos;abord
            par ce qui est inclus : contenu, SEO et maintenance font varier un devis
            du simple au double à périmètre technique égal.
          </p>

          <table>
            <thead>
              <tr>
                <th scope="col">Type de site</th>
                <th scope="col">Prix de création</th>
                <th scope="col">Coût de possession à 3 ans</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Site vitrine essentiel (5 à 15 pages)</td>
                <td>1 500 à 6 000 € HT</td>
                <td>4 500 à 11 800 € HT</td>
              </tr>
              <tr>
                <td>Site vitrine premium avec SEO et contenus</td>
                <td>6 000 à 15 000 € HT</td>
                <td>11 000 à 24 000 € HT</td>
              </tr>
              <tr>
                <td>E-commerce (Shopify, WooCommerce)</td>
                <td>8 000 à 25 000 € HT</td>
                <td>15 000 à 45 000 € HT</td>
              </tr>
              <tr>
                <td>Sur-mesure applicatif</td>
                <td>30 000 € HT et plus</td>
                <td>Sur devis</td>
              </tr>
            </tbody>
          </table>

          <p>
            Les délais suivent la même logique : 3 à 5 semaines pour un site
            essentiel, 6 à 10 semaines pour un projet avec stratégie éditoriale, 3 à
            6 mois pour un e-commerce structuré. Méfiez-vous des extrêmes : un site
            promis en une semaine sort d&apos;un gabarit, un projet qui dépasse 6 mois
            sans jalon écrit dérive. Le rythme de paiement standard reste 30 % à la
            commande, 40 % à la validation des maquettes, 30 % à la mise en ligne.
          </p>

          <div className="callout">
            <span className="callout-label">À retenir</span>
            <p>
              Chez Essor : site vitrine orienté acquisition de 6 500 à 12 000 € HT,
              SEO et contenus inclus, maintenance à 150 € HT par mois, et coût de
              possession à 3 ans chiffré dans chaque devis.
            </p>
          </div>

          <h2 id="ecarts">Pourquoi les devis varient du simple au décuple ?</h2>
          <p>
            Trois variables expliquent qu&apos;un même cahier des charges reçoive des
            devis de 2 500 et de 18 000 € HT. La première : qui produit réellement.
            Un thème acheté 60 € et habillé en deux jours ne coûte pas le même prix
            qu&apos;une conception sur maquettes menée par un développeur senior. La
            deuxième : le périmètre. Sur les 45 devis analysés, 60 % n&apos;incluent
            ni la rédaction des contenus, ni la migration SEO, ni la maintenance la
            première année ; le prix affiché ne couvre que la coquille technique. La
            troisième : le modèle économique du prestataire. Une agence qui livre 15
            sites par mois industrialise et facture bas ; une équipe qui en livre 2
            conçoit chaque page pour convertir. Aucun des deux modèles n&apos;est
            malhonnête, mais ils ne produisent pas le même actif. Comparez des
            périmètres écrits, jamais des totaux.
          </p>

          <p>
            Un repère simple pour objectiver un devis : le taux journalier. Un
            développeur ou un designer senior se facture entre 450 et 700 € HT par
            jour en France en 2026, un profil junior entre 250 et 350 €. Divisez le
            montant du devis par le nombre de jours annoncés : sous 300 € par jour,
            le travail est industrialisé ou sous-traité ; au-delà de 800 €, demandez
            ce qui justifie la marge. Ce calcul de deux minutes déclenche des
            conversations plus honnêtes que trois réunions de négociation.
          </p>

          <h2 id="possession">Que coûte vraiment un site sur 3 ans ?</h2>
          <p>
            Le prix de création n&apos;est que la moitié du sujet : un site se paie
            aussi pendant qu&apos;on l&apos;exploite. Sur 3 ans, il faut ajouter
            l&apos;hébergement (10 à 60 € par mois selon la technologie), la
            maintenance technique (80 à 250 € par mois pour mises à jour, sauvegardes
            et correctifs), les licences d&apos;extensions (0 à 600 € par an) et les
            évolutions. Résultat mesuré sur nos projets : un site vitrine facturé
            6 000 € HT à la création représente un coût de possession médian de
            11 800 € HT à 3 ans, soit près du double. Un e-commerce double presque
            son prix initial sur la même période. Intégrer ce total dès le départ
            change souvent la décision : mieux vaut un site à 8 000 € économe en
            maintenance qu&apos;un site à 5 000 € qui exige un prestataire à chaque
            modification de texte.
          </p>

          <p>
            Deux leviers réduisent ce total sans rogner la qualité : un contrat de
            maintenance forfaitaire négocié à la signature plutôt qu&apos;en urgence,
            et une interface d&apos;édition autonome exigée dès le cahier des
            charges. Sur nos projets, ces deux clauses économisent 1 500 à
            2 500 € HT sur 3 ans pour un site vitrine.
          </p>

          <h2 id="postes-omis">Quels postes les devis low-cost omettent-ils ?</h2>
          <p>
            Quatre postes absents des devis d&apos;entrée de gamme finissent toujours
            par être payés. La rédaction des contenus d&apos;abord : comptez 80 à
            150 € HT par page professionnelle, soit plus de 1 200 € pour un site de
            10 pages, un montant rarement provisionné. La migration SEO ensuite :
            sans plan de redirections 301, une refonte coûte en moyenne 43 % des
            sessions organiques, chiffre mesuré sur les migrations reprises par notre
            équipe et détaillé dans notre protocole de{" "}
            <Link href="/blog/refonte-site-sans-perdre-seo">
              refonte sans perte de référencement
            </Link>
            . La maintenance encore : 90 % des sites piratés que nous avons repris
            n&apos;étaient plus à jour depuis 6 mois. La formation enfin : sans elle,
            chaque modification de texte ou d&apos;image repasse par le prestataire,
            facturée à l&apos;acte au tarif horaire en vigueur.
            Un devis sérieux nomme ces quatre lignes, même pour préciser
            qu&apos;elles sont exclues.
          </p>

          <h2 id="outil">Faut-il un CMS, du sur-mesure ou un constructeur ?</h2>
          <p>
            Le choix de l&apos;outil pèse davantage sur le coût total que sur le prix
            de création. WordPress équipe environ 43 % du web et reste pertinent pour
            un site éditorial riche, à condition de budgéter sa maintenance. Les
            frameworks modernes comme Next.js, notre choix chez Essor, coûtent 15 à
            30 % de plus à la création mais réduisent la maintenance et offrent des
            temps de chargement excellents, un facteur de classement mesurable.
            Concession honnête : si votre activité vit du bouche-à-oreille, sans
            enjeu d&apos;acquisition en ligne, un constructeur comme Wix ou
            Squarespace à 20 ou 30 € par mois est un choix rationnel ; une agence qui
            vous vend un site à 10 000 € dans cette situation vous vend trop. Le
            sur-mesure applicatif ne se justifie qu&apos;à partir d&apos;un besoin
            réel : espace client, configurateur, connexion à un outil métier.
          </p>

          <p>
            Côté e-commerce, ajoutez les frais de plateforme au calcul : un
            abonnement Shopify va de 27 à 289 € par mois selon le plan, plus une
            commission sur les paiements hors solution native. WooCommerce
            n&apos;a pas d&apos;abonnement mais déplace le coût vers
            l&apos;hébergement et les extensions. Sur une boutique à 300 000 € de
            volume annuel, l&apos;écart entre les deux scénarios atteint 3 000 à
            5 000 € par an : un critère de choix à part entière.
          </p>

          <h2 id="choisir">Comment choisir le bon prestataire pour votre budget ?</h2>
          <p>
            Cinq questions posées avant signature éliminent l&apos;essentiel des
            mauvaises surprises. Qui rédige les contenus, et à quel tarif par page ?
            Le plan de redirections 301 est-il inclus si un site existe déjà ? Que
            couvre la maintenance, à quel prix mensuel, et que se passe-t-il sans
            contrat ? Le site vous appartient-il intégralement, code, contenus et
            accès compris ? Enfin, quel indicateur le prestataire suivra-t-il après
            la mise en ligne : positions, sessions, demandes de contact ? Sur les 45
            devis de notre échantillon, 7 seulement répondaient à ces cinq questions
            sans relance. C&apos;est le rôle d&apos;une agence d&apos;acquisition :
            livrer un site conçu comme un actif commercial, pas comme une plaquette.
            Notre page{" "}
            <Link href="/creation-site-web">création de site web</Link> détaille la
            méthode, les délais types de 6 à 10 semaines et la liste complète des
            livrables inclus dans chaque formule.
          </p>

          <p>
            Pour aller plus loin : notre protocole de{" "}
            <Link href="/blog/refonte-site-sans-perdre-seo">
              refonte sans perdre son référencement
            </Link>{" "}
            couvre le cas où un site existe déjà, et la{" "}
            <Link href="/a-propos">méthode Essor</Link> explique pourquoi chaque
            recommandation est livrée avec son indicateur de vérification.
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
                  Un devis qui chiffre le coût à 3 ans.
                </h2>
                <p className="mt-2 max-w-md text-[14px] text-muted">
                  Décrivez votre projet : périmètre écrit ligne par ligne, coût de
                  possession chiffré, et un avis honnête si un constructeur suffit.
                </p>
              </div>
              <MagneticButton href="/contact">Demander un devis</MagneticButton>
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
