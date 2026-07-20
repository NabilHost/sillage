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
  title: "Agence SEO ou freelance : la grille pour choisir | Essor",
  description:
    "Agence SEO ou freelance : coûts comparés 2026, heures senior réelles, continuité, périmètre. La grille de décision honnête et le seuil des 800 € HT",
  path: "/blog/agence-seo-ou-freelance",
  titleAbsolute: true,
  ogType: "article",
});

const FAQ_PLAIN = [
  {
    q: "Un freelance SEO est-il moins cher qu'une agence ?",
    a: "Oui en valeur absolue : 600 à 1 500 € HT par mois contre 1 500 à 3 500 € HT pour une agence intermédiaire. Mais le périmètre diffère : le freelance couvre le conseil et une partie de l'exécution, l'agence ajoute la production de contenu, le netlinking et la continuité d'équipe. Ramenez toujours les deux offres au coût de l'heure senior réellement travaillée sur votre site : c'est le seul comparateur fiable.",
  },
  {
    q: "Quels sont les risques d'un freelance SEO ?",
    a: "Le principal est le point de défaillance unique : congés, maladie ou surcharge interrompent la mission sans remplaçant, et trois mois d'arrêt suffisent à geler une dynamique. S'ajoutent un périmètre limité, rarement technique, contenu et netlinking à la fois, et une capacité d'exécution plafonnée à quelques jours par mois. Ces risques se gèrent : engagement souple, livrables documentés, accès et contenus qui restent votre propriété.",
  },
  {
    q: "À partir de quel budget une agence se justifie-t-elle ?",
    a: "Autour de 1 500 € HT par mois. En dessous, une agence dilue quelques heures entre plusieurs intervenants et un freelance senior livre davantage de valeur au même prix : c'est le constat honnête de notre comparatif. Au-delà, le budget achète un périmètre multi-compétences réunissant technique, contenu et autorité, plus une continuité d'équipe qu'une personne seule ne peut pas garantir contractuellement.",
  },
  {
    q: "Peut-on combiner freelance et agence ?",
    a: "Oui, et c'est fréquent : un freelance pour le conseil stratégique ou un chantier pointu comme une migration, une agence pour l'exécution récurrente, ou l'inverse. La condition de réussite : un responsable unique de la feuille de route, pour éviter les recommandations contradictoires. Sur nos 24 missions actives, 5 cohabitent avec un indépendant côté client sans aucune friction, parce que les périmètres sont écrits.",
  },
];

export default function ArticlePage() {
  return (
    <article>
      <JsonLd
        schemas={[
          articleSchema({
            path: "/blog/agence-seo-ou-freelance",
            headline: "Agence SEO ou freelance : la grille de décision honnête",
            description:
              "Coûts comparés, heures senior réelles, continuité et périmètre : la grille pour choisir entre agence SEO et freelance selon la taille de votre projet.",
            datePublished: "2026-07-16",
            author: AUTHOR,
          }),
          personSchema(AUTHOR),
          organizationSchema(),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: "Agence SEO ou freelance", path: "/blog/agence-seo-ou-freelance" },
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
            <li aria-current="page" className="text-muted">Agence SEO ou freelance</li>
          </ol>
        </nav>

        <Reveal>
          <header className="mt-8">
            <p className="flex flex-wrap items-center gap-3 text-[12px] text-muted-2">
              <span className="rounded-full border border-accent/30 bg-accent-soft px-2.5 py-0.5 font-mono text-[11px] text-accent">
                SEO
              </span>
              <time dateTime="2026-07-16">16 juillet 2026</time>
              <span>8 min de lecture</span>
            </p>
            <h1 className="mt-4 text-[clamp(2rem,4.4vw,3.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
              Agence SEO ou <em className="em-accent">freelance</em> : comment choisir sans se tromper ?
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Un freelance senior facture 600 à 1 500 € HT par mois, une agence
              intermédiaire 1 500 à 3 500 €. L&apos;écart s&apos;explique, mais il ne
              répond pas à la vraie question : de combien d&apos;heures senior votre
              projet a-t-il besoin, et sur quel périmètre ?
            </p>
            <p className="mt-5 border-y border-border py-3 text-[13px] text-muted-2">
              Par Claire Vasseur, directrice SEO. Sources : grilles publiques de 30
              agences françaises et TJM de 25 profils freelances relevés en juin et
              juillet 2026, plus nos propres missions.
            </p>
          </header>
        </Reveal>

        <div className="article-prose mt-10 pb-10">
          <h2 id="couts">Freelance ou agence : qui coûte combien en 2026 ?</h2>
          <p>
            Le marché français se structure en 2026 autour de fourchettes assez
            lisibles. Un freelance SEO senior facture entre 450 et 800 € HT la
            journée, soit 600 à 1 500 € HT par mois pour un accompagnement récurrent
            d&apos;une à deux journées mensuelles. Une agence intermédiaire pratique
            entre 1 500 et 3 500 € HT par mois, périmètre complet inclus : technique,
            contenu, netlinking et reporting. Ces chiffres recoupent notre relevé de
            juin 2026 sur les grilles publiques de 30 agences françaises, complété en
            juillet par 25 profils freelances. L&apos;écart brut de 1 à 3 ne dit
            pourtant rien de la valeur : il reflète surtout le périmètre couvert et
            les frais de structure. La seule comparaison honnête consiste à ramener
            chaque proposition au nombre d&apos;heures senior réellement travaillées
            sur votre site chaque mois, puis au coût de cette heure. Un TJM élevé n&apos;est d&apos;ailleurs pas un signal négatif : à 700 € la journée, un indépendant qui règle en 4 heures un problème d&apos;indexation vaut mieux qu&apos;un forfait diffus.
          </p>

          <table>
            <thead>
              <tr>
                <th scope="col">Critère</th>
                <th scope="col">Freelance senior</th>
                <th scope="col">Agence intermédiaire</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tarif mensuel courant</td>
                <td>600 à 1 500 € HT</td>
                <td>1 500 à 3 500 € HT</td>
              </tr>
              <tr>
                <td>Heures senior réelles par mois</td>
                <td>7 à 16 h (une à deux journées)</td>
                <td>6 à 20 h selon le nombre de comptes</td>
              </tr>
              <tr>
                <td>Continuité en cas d&apos;absence</td>
                <td>Mission suspendue</td>
                <td>Reprise par l&apos;équipe</td>
              </tr>
              <tr>
                <td>Périmètre couvert</td>
                <td>1 à 2 leviers maîtrisés</td>
                <td>Technique, contenu, netlinking, reporting</td>
              </tr>
            </tbody>
          </table>

          <div className="callout">
            <span className="callout-label">À retenir</span>
            <p>
              En dessous de 800 € HT par mois, un freelance senior livre plus de
              valeur qu&apos;une agence au même prix. Au-delà de 1 500 € HT, le
              périmètre multi-compétences fait pencher la balance vers l&apos;agence.
            </p>
          </div>

          <h2 id="senior">Un freelance senior bat-il une agence junior ?</h2>
          <p>
            La réponse est oui, et sans débat dans la plupart des cas. Un consultant
            indépendant avec 8 ou 10 ans de pratique produit de meilleures
            recommandations qu&apos;un chef de projet junior qui gère 15 à 20 comptes
            en parallèle, même adossé à une marque d&apos;agence rassurante. La raison
            est mécanique : un senior interne coûte à une agence trois à quatre fois
            plus cher qu&apos;un junior, et certaines structures compensent en
            confiant l&apos;exécution aux profils les moins expérimentés. Le statut
            juridique du prestataire ne prédit donc rien. Nous avons repris des sites
            suivis par de grandes agences avec des erreurs d&apos;indexation
            basiques, et audité des sites suivis par des indépendants dans un état
            technique irréprochable. La vraie ligne de partage passe entre les
            prestataires seniors qui travaillent réellement sur votre compte et les
            autres, quel que soit le logo qui figure sur la facture. Sur nos 24 missions actives, 9 clients venaient d&apos;une agence à bas coût : leur déception tenait moins au prix qu&apos;à l&apos;absence d&apos;interlocuteur expérimenté.
          </p>

          <h2 id="criteres">Quels critères comptent plus que le statut ?</h2>
          <p>
            Trois critères déterminent la qualité d&apos;un accompagnement SEO, bien
            avant l&apos;opposition agence contre freelance. Premier critère : les
            heures senior réelles. Demandez combien d&apos;heures d&apos;expertise
            confirmée votre budget achète chaque mois ; en dessous de 6 à 8 heures
            mensuelles, aucun prestataire ne peut suivre sérieusement un site sur un
            marché concurrentiel. Deuxième critère : la continuité. Un indépendant
            seul constitue un point de défaillance unique : congés, maladie,
            surcharge ou changement d&apos;activité suspendent la mission, et trois
            mois d&apos;interruption suffisent à geler une dynamique de publication
            et de netlinking. Troisième critère : le périmètre. Le SEO moderne
            mobilise de la technique, du contenu, de l&apos;autorité et parfois du
            développement ; un freelance excellent couvre rarement les quatre à un
            niveau égal. Ces trois questions posées aux deux candidats produisent une
            comparaison plus fiable que n&apos;importe quel a priori sur le statut. Exigez les trois réponses par écrit : un prestataire sérieux, agence comme indépendant, les fournit en moins de 48 heures.
          </p>

          <h2 id="freelance">Quand le freelance est-il le meilleur choix ?</h2>
          <p>
            Le freelance senior est objectivement le bon choix dans trois situations.
            La première : un budget inférieur à 800 € HT par mois. À ce niveau, une
            agence ne peut allouer que quelques heures diluées entre plusieurs
            intervenants, alors qu&apos;un indépendant y consacre une vraie journée
            mensuelle. C&apos;est la concession que nous assumons, alors même que
            nous sommes une agence. La deuxième : un site vitrine de moins de 100
            pages sur un marché local peu concurrentiel, où l&apos;essentiel se joue
            sur la fiche Google Business Profile et une base technique saine. La
            troisième : un besoin ponctuel et cadré, comme un audit, un
            accompagnement de migration ou la formation d&apos;une équipe interne qui
            exécutera ensuite. Dans ces trois cas, cherchez un profil avec 5 ans
            d&apos;expérience minimum, des références vérifiables dans votre secteur
            et une disponibilité mensuelle écrite noir sur blanc dans la proposition. Pour un besoin ponctuel, comptez 1 500 à 4 000 € HT selon la taille du site, sans abonnement mensuel.
          </p>

          <h2 id="agence">Quand l&apos;agence devient-elle nécessaire ?</h2>
          <p>
            L&apos;agence se justifie quand le projet dépasse ce qu&apos;une personne
            seule peut couvrir. Un e-commerce de 500 à 50 000 références cumule des
            chantiers techniques, éditoriaux et de netlinking qui réclament des
            compétences distinctes, rarement réunies chez un seul indépendant. Un
            objectif de croissance rapide impose ensuite un volume d&apos;exécution :
            produire 8 à 12 contenus optimisés par mois tout en menant les
            corrections techniques dépasse une journée d&apos;intervention mensuelle.
            La continuité contractuelle protège enfin les missions longues : chez
            Essor, chaque compte est suivi par un consultant nommé au contrat, avec
            un binôme qui reprend le dossier sans interruption en cas
            d&apos;absence, et 6 comptes maximum par consultant. Le seuil pratique se
            situe autour de 1 500 € HT mensuels : en dessous, le budget
            n&apos;achète pas assez d&apos;heures multi-compétences pour que la formule agence exprime son avantage réel. Reste une zone grise entre 800 et 1 500 € HT : à ce niveau, comparez les dossiers ligne à ligne, le meilleur profil gagne, pas le statut.
          </p>

          <h2 id="comparer">Comment comparer deux propositions concrètes ?</h2>
          <p>
            La comparaison se joue sur pièces, pas sur la réputation. Posez les cinq
            mêmes questions aux deux candidats. Combien d&apos;heures senior par
            mois, écrites dans le devis ? Qui exécute réellement, avec nom et
            ancienneté ? Quels livrables nommés au trimestre ? Quelle durée
            d&apos;engagement, sachant que 3 mois suffisent à un prestataire confiant
            pour démontrer une trajectoire ? Qui possède les contenus et les accès
            Search Console en fin de contrat ? Ajoutez un test simple : demandez un
            exemple d&apos;audit anonymisé. Un document de 5 pages de captures
            d&apos;outils automatiques signale un prestataire qui industrialise ; un
            audit avec priorités chiffrées et indicateurs de vérification signale un
            partenaire. Notre grille des{" "}
            <Link href="/blog/cout-agence-seo-2026">
              tarifs SEO pratiqués en France
            </Link>{" "}
            détaille les fourchettes poste par poste ; les réponses à ces cinq
            questions expliquent presque toujours l&apos;écart entre deux devis. Sur les 30 grilles relevées en juin, moins d&apos;une sur trois précisait les heures senior incluses : poser la question élimine déjà la moitié des candidats.
          </p>

          <p>
            Pour aller plus loin : notre page <Link href="/agence-seo">agence SEO</Link>{" "}
            détaille livrables, méthode et tarifs, et la{" "}
            <Link href="/a-propos">méthode Essor</Link> explique pourquoi chaque
            recommandation part avec son indicateur de vérification, que vous
            travailliez avec nous ou avec un indépendant.
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
                  Agence ou freelance : un avis honnête sur votre cas.
                </h2>
                <p className="mt-2 max-w-md text-[14px] text-muted">
                  Envoyez votre URL : audit chiffré sous 10 jours, et si un freelance
                  vous servira mieux que nous, nous vous le dirons au premier appel.
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
