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
  title: "SEO local pour PME : le guide concret | Essor",
  description:
    "Les 3 couches du référencement local (fiche Google, NAP, avis), comment cibler plusieurs villes sans doorway pages, et le seuil au-delà duquel Google pénalise",
  path: "/blog/seo-local-pme-artisans",
  titleAbsolute: true,
  ogType: "article",
});

const FAQ_PLAIN = [
  {
    q: "Faut-il une adresse physique pour le SEO local ?",
    a: "Il faut une adresse réelle et vérifiable pour créer une fiche Google Business Profile, mais pas forcément une boutique : le mode « zone desservie » permet de cacher l'adresse et de n'afficher que les zones. Sans adresse vérifiable, pas de fiche, donc pas de pack local ; on mise alors sur l'organique.",
  },
  {
    q: "Combien d'avis Google faut-il pour bien ranker ?",
    a: "Il n'y a pas de chiffre magique. Ce qui compte, c'est un flux régulier d'avis récents, une note cohérente avec votre marché, et surtout un taux de réponse proche de 100 %. Mieux vaut 30 avis récents bien gérés que 200 avis figés depuis deux ans.",
  },
  {
    q: "Peut-on cibler plusieurs villes sans se faire pénaliser ?",
    a: "Oui, via les zones desservies de votre fiche Google et des pages locales à contenu unique réel. Ce qui est pénalisé, ce sont les pages « service + ville » quasi identiques dupliquées à la chaîne : Google les traite en doorway pages, surtout au-delà d'une trentaine.",
  },
  {
    q: "Le SEO local est-il plus rapide que le SEO classique ?",
    a: "Souvent oui. Une fiche Google Business Profile bien optimisée peut apparaître dans le pack local en quelques semaines, là où l'organique national demande des mois. Les avis et la cohérence du NAP accélèrent encore le mouvement.",
  },
];

export default function ArticlePage() {
  return (
    <article>
      <JsonLd
        schemas={[
          articleSchema({
            path: "/blog/seo-local-pme-artisans",
            headline: "SEO local pour PME et artisans : le guide concret",
            description:
              "Les trois couches du référencement local (fiche Google, NAP, avis), comment cibler plusieurs villes sans doorway pages, et le seuil de pénalité.",
            datePublished: "2026-08-23",
            author: AUTHOR,
          }),
          personSchema(AUTHOR),
          organizationSchema(),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: "SEO local pour PME", path: "/blog/seo-local-pme-artisans" },
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
            <li aria-current="page" className="text-muted">SEO local pour PME</li>
          </ol>
        </nav>

        <Reveal>
          <header className="mt-8">
            <p className="flex flex-wrap items-center gap-3 text-[12px] text-muted-2">
              <span className="rounded-full border border-accent/30 bg-accent-soft px-2.5 py-0.5 font-mono text-[11px] text-accent">
                SEO local
              </span>
              <time dateTime="2026-08-23">23 août 2026</time>
              <span>8 min de lecture</span>
            </p>
            <h1 className="mt-4 text-[clamp(2rem,4.4vw,3.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
              SEO local pour PME : par où <em className="em-accent">commencer</em> ?
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Près d&apos;une recherche Google sur deux a une intention locale. Pour une
              PME ou un artisan, c&apos;est souvent le canal le plus rentable, et le plus
              rapide. Voici les trois couches qui comptent, et le piège à éviter.
            </p>
            <p className="mt-5 border-y border-border py-3 text-[13px] text-muted-2">
              Par Claire Vasseur, directrice SEO. Sources : documentation Google Business
              Profile et nos accompagnements de commerces et prestataires locaux.
            </p>
          </header>
        </Reveal>

        <div className="article-prose mt-10 pb-10">
          <h2 id="definition">Qu&apos;est-ce que le SEO local, et en quoi diffère-t-il du SEO classique ?</h2>
          <p>
            Le SEO local désigne le travail qui fait apparaître une entreprise sur les
            recherches géolocalisées : « plombier Nantes », « boulangerie près de moi »,
            ou une requête tapée depuis un mobile en déplacement. Il diffère du SEO
            classique parce qu&apos;il repose sur deux systèmes de classement distincts.
            D&apos;un côté, les résultats organiques habituels. De l&apos;autre, le
            « pack local » : cette carte avec trois fiches d&apos;établissements qui
            s&apos;affiche en haut, alimentée par Google Business Profile, pas par votre
            site. Près de 46 % des recherches Google ont une intention locale, et pour un
            commerce ou un artisan, ce pack local capte l&apos;essentiel des clics à forte
            intention d&apos;achat. Concrètement, bien ranker en local, c&apos;est jouer
            sur deux tableaux à la fois : votre fiche Google pour le pack, et votre site
            pour l&apos;organique. Les deux se nourrissent, mais ne se pilotent pas de la
            même manière.
          </p>

          <table>
            <thead>
              <tr>
                <th scope="col">Couche</th>
                <th scope="col">Ce que c&apos;est</th>
                <th scope="col">Levier principal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fiche Google (GBP)</td>
                <td>Votre présence dans le pack local et sur Maps</td>
                <td>Catégories, photos, posts, complétude</td>
              </tr>
              <tr>
                <td>NAP</td>
                <td>Nom, adresse, téléphone, cohérents partout</td>
                <td>Citations identiques (site, annuaires)</td>
              </tr>
              <tr>
                <td>Avis</td>
                <td>Preuve sociale et signal de confiance</td>
                <td>Flux régulier + réponses systématiques</td>
              </tr>
            </tbody>
          </table>

          <div className="callout">
            <span className="callout-label">À retenir</span>
            <p>
              Le SEO local tient sur trois couches : une fiche Google Business Profile
              complète, un NAP identique au caractère près partout, et un flux d&apos;avis
              auxquels vous répondez. Jamais de pages « service + ville » dupliquées.
            </p>
          </div>

          <h2 id="couches">Quelles sont les 3 couches du référencement local ?</h2>
          <p>
            Le référencement local repose sur trois couches qui se renforcent, et qu&apos;il
            faut travailler dans cet ordre. La première est la fiche Google Business
            Profile : c&apos;est elle qui vous fait entrer dans le pack local, la seule
            couche qui n&apos;est pas votre site. La deuxième est le NAP, pour Name,
            Address, Phone : votre nom, votre adresse et votre téléphone doivent être
            strictement identiques sur votre site, votre fiche et les annuaires, car
            Google recoupe ces mentions pour valider que votre entreprise existe vraiment.
            La troisième est constituée des avis : leur nombre, leur régularité et vos
            réponses pèsent lourd dans le classement local. Une étude sectorielle situe le
            poids des signaux liés à la fiche et aux avis autour d&apos;un tiers des
            facteurs de classement local. Négliger une seule de ces couches plafonne les
            deux autres : une fiche parfaite avec un NAP incohérent reste bridée.
          </p>

          <h2 id="fiche">La fiche Google Business Profile, à quel point est-elle décisive ?</h2>
          <p>
            La fiche Google Business Profile est le levier numéro un du SEO local, loin
            devant le reste. C&apos;est elle qui décide si vous figurez dans les trois
            fiches du pack local, l&apos;espace le plus cliqué d&apos;une recherche
            géolocalisée. Une fiche complète, avec la bonne catégorie principale, des
            catégories secondaires pertinentes, des photos récentes, des horaires exacts
            et une description claire, obtient en moyenne sept fois plus de clics
            qu&apos;une fiche vide. Les publications régulières, les questions-réponses et
            les attributs (accessibilité, moyens de paiement) ajoutent des signaux que la
            plupart des concurrents laissent de côté. Le détail complet de
            l&apos;optimisation est dans notre article dédié :{" "}
            <Link href="/blog/optimiser-fiche-google-business">optimiser sa fiche Google Business Profile</Link>.
            Le bon réflexe : traiter la fiche comme une mini-page d&apos;accueil, à tenir
            à jour chaque mois, pas comme un formulaire rempli une fois pour toutes.
          </p>

          <h2 id="nap">Le NAP : pourquoi la cohérence nom, adresse, téléphone compte autant ?</h2>
          <p>
            Le NAP est la colonne vertébrale invisible du SEO local, et la source
            d&apos;erreur la plus fréquente. Le principe : votre nom d&apos;entreprise,
            votre adresse et votre numéro de téléphone doivent être écrits exactement de la
            même façon partout où ils apparaissent, votre site, votre fiche Google, les
            annuaires et les réseaux sociaux. Une adresse notée « 12 rue de Paris » ici et
            « 12 r. de Paris » là, deux numéros de téléphone différents, un ancien nom qui
            traîne : chacune de ces incohérences amène Google à douter que les deux
            mentions désignent bien la même entreprise, ce qui dilue la confiance et fait
            baisser le classement local. La règle est simple : figez une version exacte du
            NAP, reportez-la au caractère près, et corrigez les annuaires qui portent une
            vieille information. C&apos;est un travail peu spectaculaire, souvent une
            demi-journée, mais c&apos;est lui qui débloque le plafond de verre du pack
            local pour beaucoup de PME.
          </p>

          <h2 id="villes">Peut-on créer des pages par ville sans se faire pénaliser ?</h2>
          <p>
            Créer une page par ville est tentant pour couvrir une zone, mais c&apos;est
            aussi le piège le plus courant du SEO local. Google pénalise les doorway
            pages : des pages « service + ville » quasi identiques, produites à la chaîne
            en remplaçant seulement le nom de la commune, dont le seul but est de capter
            du trafic géographique. Au-delà d&apos;une trentaine de ces pages dupliquées,
            le risque de dévaluation devient sérieux, et il touche parfois tout le site,
            pas seulement les pages fautives. La bonne approche est inverse : ne créer une
            page locale que lorsqu&apos;elle a un contenu unique et réel, une agence
            physique, une équipe sur place, des chantiers ou des cas clients propres à
            cette zone, une FAQ locale. Pour couvrir plusieurs villes sans page dédiée, on
            s&apos;appuie sur les zones desservies de la fiche Google et sur une seule
            page de service solide. Mieux vaut trois pages locales riches que trente
            coquilles vides.
          </p>

          <h2 id="mesure">Comment mesurer et faire progresser son SEO local ?</h2>
          <p>
            Mesurer son SEO local demande de suivre des indicateurs différents de
            l&apos;organique classique. Trois comptent vraiment. D&apos;abord la position
            dans le pack local, qui varie selon l&apos;endroit d&apos;où l&apos;internaute
            cherche : un outil de suivi par grille géographique donne une image bien plus
            juste qu&apos;une position moyenne. Ensuite les actions issues de la fiche
            Google : appels, demandes d&apos;itinéraire, clics vers le site, tous visibles
            dans les statistiques de Google Business Profile. Enfin le flux d&apos;avis et
            votre taux de réponse. Sur nos accompagnements locaux, une fiche reprise en
            main gagne en général 30 à 40 % d&apos;interactions en trois mois. La
            concession honnête : le SEO local dépend fortement de la proximité physique
            entre le chercheur et l&apos;entreprise, un facteur que personne ne contrôle.
            Sans établissement réel dans la zone visée, le pack local restera hors de
            portée, et il faudra jouer l&apos;organique.
          </p>

          <p>
            Pour aller plus loin : notre page{" "}
            <Link href="/agence-seo">agence SEO</Link> détaille la méthode complète,
            l&apos;article{" "}
            <Link href="/blog/optimiser-fiche-google-business">optimiser sa fiche Google Business Profile</Link>{" "}
            couvre la première couche en profondeur, et vous pouvez{" "}
            <Link href="/contact">demander un audit</Link> de votre visibilité locale.
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
                  Visible là où vos clients cherchent.
                </h2>
                <p className="mt-2 max-w-md text-[14px] text-muted">
                  Envoyez votre fiche et votre URL : audit de visibilité locale chiffré,
                  et les trois priorités pour entrer dans le pack local.
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
