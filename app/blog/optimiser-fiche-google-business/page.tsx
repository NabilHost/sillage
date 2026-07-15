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
  title: "Optimiser sa fiche Google Business Profile en 2026 | Essor",
  description:
    "Checklist Google Business Profile 2026 : catégories, avis, photos, NAP. Ce qui pèse vraiment dans le classement local et ce que Google a déprécié",
  path: "/blog/optimiser-fiche-google-business",
  titleAbsolute: true,
  ogType: "article",
});

const FAQ_PLAIN = [
  {
    q: "L'optimisation d'une fiche Google Business Profile est-elle gratuite ?",
    a: "Oui, l'outil est entièrement gratuit et aucune option payante n'améliore le classement. Le coût réel est le temps : comptez 3 à 4 heures pour la mise à niveau initiale, puis 1 à 2 heures par mois pour les avis, les photos et les posts. Les prestataires qui facturent un « référencement Google Maps » vendent ce temps et cette méthode, pas un accès privilégié à Google.",
  },
  {
    q: "Combien de temps pour voir des résultats dans le pack local ?",
    a: "Les modifications de fiche sont prises en compte par Google en quelques jours, mais les effets sur le classement se mesurent en 4 à 8 semaines. Sur nos missions locales, une fiche retravaillée gagne en médiane 38 % d'interactions (appels, itinéraires, clics) en 90 jours. Les avis et les photos, accumulés dans la durée, font la différence au-delà de ce délai.",
  },
  {
    q: "Faut-il afficher son adresse quand on travaille à domicile ?",
    a: "Non. Si vous vous déplacez chez vos clients sans les recevoir, déclarez une zone de chalandise (établissement de services de proximité) et masquez l'adresse : c'est ce que demandent les règles de Google. Utiliser une adresse de domiciliation ou une boîte postale pour paraître implanté dans une ville expose la fiche à une suspension.",
  },
  {
    q: "Comment répondre à un avis négatif ?",
    a: "Sous 72 heures, sur les faits, sans divulguer d'informations sur le client, en proposant de poursuivre l'échange en privé. La réponse s'adresse autant aux futurs lecteurs qu'à l'auteur. Le signalement à Google ne vaut que si l'avis viole une règle précise (faux avis, concurrent, propos haineux) : dans notre expérience, environ 1 demande de suppression sur 4 aboutit.",
  },
];

export default function ArticlePage() {
  return (
    <article>
      <JsonLd
        schemas={[
          articleSchema({
            path: "/blog/optimiser-fiche-google-business",
            headline: "Optimiser sa fiche Google Business Profile : la checklist 2026",
            description:
              "Checklist Google Business Profile 2026 : catégories, attributs, avis, photos, NAP, mesure. Ce qui pèse dans le classement local et ce qui a été déprécié.",
            datePublished: "2026-07-14",
            author: AUTHOR,
          }),
          personSchema(AUTHOR),
          organizationSchema(),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: "Optimiser sa fiche Google Business Profile", path: "/blog/optimiser-fiche-google-business" },
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
            <li aria-current="page" className="text-muted">Fiche Google Business Profile</li>
          </ol>
        </nav>

        <Reveal>
          <header className="mt-8">
            <p className="flex flex-wrap items-center gap-3 text-[12px] text-muted-2">
              <span className="rounded-full border border-accent/30 bg-accent-soft px-2.5 py-0.5 font-mono text-[11px] text-accent">
                SEO local
              </span>
              <time dateTime="2026-07-14">14 juillet 2026</time>
              <span>8 min de lecture</span>
            </p>
            <h1 className="mt-4 text-[clamp(2rem,4.4vw,3.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
              Optimiser sa fiche Google Business Profile : la{" "}
              <em className="em-accent">checklist</em> 2026
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Une fiche complète reçoit en moyenne 7 fois plus de clics qu&apos;une
              fiche minimale, et les signaux de la fiche pèsent environ un tiers du
              classement local. Voici la checklist 2026, poste par poste, et les
              pratiques dépréciées que les guides recopient encore.
            </p>
            <p className="mt-5 border-y border-border py-3 text-[13px] text-muted-2">
              Par Claire Vasseur, directrice SEO. Sources : 19 audits de fiches
              locales menés par Essor de janvier à juin 2026, études Whitespark et
              BrightLocal.
            </p>
          </header>
        </Reveal>

        <div className="article-prose mt-10 pb-10">
          <h2 id="poids">Pourquoi la fiche Google Business Profile pèse-t-elle autant en 2026 ?</h2>
          <p>
            La fiche Google Business Profile est le premier levier du référencement
            local en 2026. L&apos;étude Whitespark sur les facteurs de classement
            local attribue environ 32 % du positionnement dans le pack local aux
            seuls signaux de la fiche : catégories, avis, complétude, cohérence des
            informations. Le pack local, ce bloc de trois établissements affiché avec
            une carte, apparaît sur la grande majorité des requêtes à intention
            locale et capte près de 44 % des clics de la page. Or ces requêtes
            représentent environ 46 % des recherches Google selon les chiffres les
            plus cités. Une fiche complète reçoit en moyenne 7 fois plus de clics
            qu&apos;une fiche minimale, pour un coût d&apos;entrée nul : l&apos;outil
            est gratuit. Une limite honnête s&apos;impose : la proximité physique
            reste un critère dominant. Si votre concurrent est à 500 mètres du
            chercheur et vous à 15 kilomètres, aucune optimisation ne renversera ce
            handicap.
          </p>

          <h2 id="categories">Quelles catégories et quels attributs choisir ?</h2>
          <p>
            Le choix de la catégorie principale est la décision la plus lourde de
            toute la fiche. Google en propose plus de 4 000, et la catégorie
            principale filtre les requêtes sur lesquelles l&apos;établissement peut
            apparaître : un « plombier » ne sortira pas sur « chauffagiste », même à
            200 mètres du chercheur. La règle : choisir la catégorie la plus
            spécifique qui décrit l&apos;activité principale, puis ajouter 2 à 4
            catégories secondaires correspondant à des activités réelles, jamais pour
            élargir artificiellement la couverture. Les attributs (accès PMR,
            terrasse, paiement sans contact, sur rendez-vous) alimentent les filtres
            de Google Maps et les réponses des moteurs IA : renseignez-les tous, leur
            liste change selon la catégorie choisie. Vérifiez enfin le NAP : nom,
            adresse et téléphone doivent être strictement identiques sur la fiche, le
            site et les annuaires. Une simple variation d&apos;orthographe suffit à
            diluer le signal d&apos;entité.
          </p>

          <h2 id="avis">Comment gérer les avis pour peser dans le classement ?</h2>
          <p>
            Les avis pèsent doublement : dans le classement local et dans la décision
            du client. Sur les 19 fiches auditées par Essor au premier semestre
            2026, les établissements du top 3 local affichaient en médiane 47 avis
            avec une note de 4,6, contre 12 avis pour les fiches reléguées au-delà de
            la première page de Maps. Trois pratiques font la différence. La
            régularité d&apos;abord : mieux vaut 4 avis par mois toute l&apos;année
            qu&apos;une campagne de 50 avis en janvier, que les filtres de Google
            traitent comme un signal suspect. La réponse ensuite : visez 100 % de
            taux de réponse sous 72 heures, avis positifs compris, car Google indique
            que répondre améliore la visibilité de la fiche. Le contenu enfin : les
            avis qui mentionnent le service rendu et la ville renforcent la
            pertinence sémantique. Sollicitez par SMS ou QR code après la prestation,
            jamais contre récompense : la pratique est interdite et sanctionnée.
          </p>

          <h2 id="photos">Quelles photos et quels posts publier, à quel rythme ?</h2>
          <p>
            Les photos restent le poste le plus négligé des fiches que nous
            auditons : 8 fiches sur 19 n&apos;avaient reçu aucune photo depuis plus
            d&apos;un an. L&apos;étude BrightLocal la plus citée mesure pourtant
            jusqu&apos;à 520 % d&apos;appels supplémentaires pour les fiches
            dépassant 100 photos par rapport à la moyenne de leur secteur. Le rythme
            compte plus que le volume initial : 2 à 4 photos nouvelles par mois
            (équipe, réalisations, locaux, produits) signalent un établissement
            vivant. Couvrez chaque format : logo, photo de couverture, intérieur,
            extérieur, équipe au travail. Les posts Google, eux, n&apos;ont pas
            d&apos;effet direct démontré sur le classement, mais ils occupent de
            l&apos;espace sur la fiche et alimentent les requêtes de marque : un post
            par semaine avec une offre, une réalisation ou une actualité suffit.
            Inutile en revanche de géolocaliser les fichiers photo avant envoi : les
            données EXIF sont retraitées par Google et ce conseil relève du mythe.
          </p>

          <h2 id="deprecie">Qu&apos;est-ce que Google a supprimé et que les guides recommandent encore ?</h2>
          <p>
            Plusieurs fonctionnalités recommandées par des guides encore en ligne ont
            disparu. Le site web gratuit créé depuis la fiche a été supprimé en mars
            2024 : les adresses en business.site ne fonctionnent plus et les
            établissements concernés ont dû migrer vers un vrai site. La messagerie
            intégrée (chat) a été arrêtée en juillet 2024, boutons « Discuter »
            compris. Le fil « Suivre » de Google Maps a été retiré, et les résultats
            enrichis FAQ ont quasiment disparu des pages locales. Conséquence
            pratique : un guide qui recommande d&apos;activer le chat ou de créer le
            site Google date d&apos;avant 2024, et le reste de ses conseils mérite la
            même prudence. La fonctionnalité Questions-réponses, elle, existe
            toujours et reste sous-exploitée : publiez vous-même les 5 questions les
            plus fréquentes avec leurs réponses, car n&apos;importe quel internaute
            peut sinon y répondre à votre place.
          </p>

          <h2 id="mesure">Comment vérifier que la fiche progresse vraiment ?</h2>
          <p>
            Les statistiques intégrées à la fiche donnent quatre indicateurs à suivre
            chaque mois : appels, demandes d&apos;itinéraire, clics vers le site et
            requêtes d&apos;affichage, avec la répartition entre recherches directes
            sur le nom et recherches par catégorie. Sur nos missions locales, une
            fiche retravaillée selon cette checklist gagne en médiane 38 %
            d&apos;interactions en 90 jours, l&apos;essentiel venant des appels et
            des itinéraires. Deux compléments rendent la mesure fiable. Un paramètre
            UTM sur le lien du site (utm_source=google, utm_medium=organic,
            utm_campaign=gbp) isole le trafic de la fiche dans vos analytics, sans
            quoi il se confond avec le SEO classique. Un suivi de position par grille
            géographique (un relevé par point sur un maillage de 7 × 7 autour de
            l&apos;adresse) montre où la fiche sort réellement dans le pack local,
            car la position dépend du lieu de la recherche. Sans ces deux outils,
            impossible de relier optimisation et chiffre d&apos;affaires.
          </p>

          <table>
            <thead>
              <tr>
                <th scope="col">Poste</th>
                <th scope="col">Action 2026</th>
                <th scope="col">Fréquence</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Catégories et attributs</td>
                <td>1 principale spécifique, 2 à 4 secondaires, tous les attributs</td>
                <td>Revue trimestrielle</td>
              </tr>
              <tr>
                <td>NAP (nom, adresse, téléphone)</td>
                <td>Strictement identique sur fiche, site et annuaires</td>
                <td>Vérification semestrielle</td>
              </tr>
              <tr>
                <td>Avis</td>
                <td>Sollicitation régulière, réponse à 100 % sous 72 h</td>
                <td>Continu</td>
              </tr>
              <tr>
                <td>Photos</td>
                <td>2 à 4 nouvelles photos authentiques</td>
                <td>Mensuel</td>
              </tr>
              <tr>
                <td>Posts</td>
                <td>Offre, réalisation ou actualité</td>
                <td>Hebdomadaire</td>
              </tr>
              <tr>
                <td>Horaires</td>
                <td>Horaires spéciaux (fériés, congés) déclarés à l&apos;avance</td>
                <td>À chaque échéance</td>
              </tr>
            </tbody>
          </table>

          <div className="callout">
            <span className="callout-label">À retenir</span>
            <p>
              Trois gestes par mois entretiennent l&apos;essentiel : répondre à
              chaque avis sous 72 heures, ajouter 2 à 4 photos, publier un post
              hebdomadaire. Et un NAP strictement identique partout.
            </p>
          </div>

          <p>
            Pour aller plus loin : notre page <Link href="/agence-seo">agence SEO</Link>{" "}
            intègre le référencement local dans ses accompagnements, la page{" "}
            <Link href="/creation-site-web">création de site web</Link> détaille le
            socle technique qui reçoit le trafic de la fiche, l&apos;article{" "}
            <Link href="/blog/combien-de-temps-seo-resultats">
              combien de temps pour des résultats SEO
            </Link>{" "}
            donne les délais réalistes par levier, et la{" "}
            <Link href="/a-propos">méthode Essor</Link> explique comment chaque
            recommandation est vérifiée.
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
                  Votre fiche mérite un audit chiffré.
                </h2>
                <p className="mt-2 max-w-md text-[14px] text-muted">
                  Envoyez votre URL et votre ville : audit local sous 10 jours, avec
                  un score sur 100 et les trois priorités qui feront bouger le pack
                  local.
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
