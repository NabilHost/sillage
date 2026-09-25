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
  title: "Améliorer son Quality Score Google Ads en 2026 | Essor",
  description:
    "Les 3 composantes du Quality Score, l'impact réel sur le CPC jusqu'à -50 %, les leviers de correction en 6 semaines et 4 mythes à écarter",
  path: "/blog/quality-score-google-ads",
  titleAbsolute: true,
  ogType: "article",
});

const FAQ_PLAIN = [
  {
    q: "Un Quality Score de 7 est-il suffisant pour rester rentable ?",
    a: "Sept est la note plancher visée sur nos comptes matures pour les 30 mots-clés qui concentrent 60 % du budget. En dessous, le coût par clic gonfle assez pour dégrader la marge par lead. Au-dessus de 8, le gain marginal diminue et ne justifie plus toujours l'effort d'optimisation.",
  },
  {
    q: "Faut-il pauser les mots-clés à Quality Score bas ?",
    a: "Pas systématiquement. Un mot-clé à Quality Score 3 avec un fort taux de conversion peut rester profitable si son coût par clic reste sous 60 % de la valeur du lead. La bonne règle : pauser si le CPC dépasse ce seuil, corriger l'annonce et la landing sinon, supprimer les mots-clés sans conversion sur 90 jours.",
  },
  {
    q: "Le Quality Score influence-t-il Performance Max ?",
    a: "Pas directement : Performance Max n'affiche ni Quality Score par requête ni par créa. Google applique en interne une notation similaire entre les signaux d'audience, les créas et les pages produit. Les principes restent identiques : cohérence promesse/landing, Core Web Vitals au vert, flux Merchant Center propre pour la brique Shopping.",
  },
  {
    q: "En combien de temps voit-on le Quality Score bouger ?",
    a: "La pertinence de l'annonce et le CTR attendu se réajustent en 5 à 10 jours après un changement de texte ou de structure. La note d'expérience de la page de destination met 3 à 6 semaines : Google attend un volume de sessions publicitaires suffisant pour mesurer le comportement post-clic. Aucune note ne bouge avant 100 impressions cumulées.",
  },
];

export default function ArticlePage() {
  return (
    <article>
      <JsonLd
        schemas={[
          articleSchema({
            path: "/blog/quality-score-google-ads",
            headline: "Améliorer son Quality Score Google Ads en 2026 : les 3 leviers qui comptent",
            description:
              "Les 3 composantes du Quality Score, l'impact chiffré sur le CPC, les corrections qui remontent la note en 6 semaines et les 4 mythes à écarter.",
            datePublished: "2026-09-24",
            author: AUTHOR,
          }),
          personSchema(AUTHOR),
          organizationSchema(),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: "Quality Score Google Ads", path: "/blog/quality-score-google-ads" },
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
            <li aria-current="page" className="text-muted">Quality Score Google Ads</li>
          </ol>
        </nav>

        <Reveal>
          <header className="mt-8">
            <p className="flex flex-wrap items-center gap-3 text-[12px] text-muted-2">
              <span className="rounded-full border border-accent/30 bg-accent-soft px-2.5 py-0.5 font-mono text-[11px] text-accent">
                Google Ads
              </span>
              <time dateTime="2026-09-24">24 septembre 2026</time>
              <span>8 min de lecture</span>
            </p>
            <h1 className="mt-4 text-[clamp(2rem,4.4vw,3.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
              Améliorer son Quality Score Google Ads en <em className="em-accent">2026</em>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Un Quality Score de 8 à 10 sur un mot-clé fait baisser le coût par
              clic de 30 à 50 % face à un Quality Score de 4, à enchère et
              position identiques. Les leviers réels tiennent en trois
              composantes vérifiables. Voici ce qui marche sur nos comptes, ce
              qui relève du mythe entretenu par les vieux guides, et l&apos;ordre
              dans lequel corriger.
            </p>
            <p className="mt-5 border-y border-border py-3 text-[13px] text-muted-2">
              Par Claire Vasseur, directrice SEO. Sources : 47 comptes Google
              Ads Essor audités entre 2024 et 2026, plus la documentation
              officielle Google Ads.
            </p>
          </header>
        </Reveal>

        <div className="article-prose mt-10 pb-10">
          <h2 id="definition">Qu&apos;est-ce que le Quality Score en 2026 exactement ?</h2>
          <p>
            Le Quality Score est une note de 1 à 10 attribuée par Google à
            chaque mot-clé actif d&apos;une campagne Search, mise à jour en
            continu et visible dans la colonne dédiée de l&apos;interface Google
            Ads. Cette note reflète la probabilité qu&apos;une annonce satisfasse
            un utilisateur qui saisit ce mot-clé, sans être elle-même utilisée
            au moment précis de l&apos;enchère. Google calcule séparément un
            Quality Score temps réel, plus complet et opaque, qui détermine
            réellement le classement et le coût par clic. Sur 47 comptes audités
            par Essor entre 2024 et 2026, le Quality Score médian ressort à 5,
            avec un tiers des mots-clés actifs sous 4 et un cinquième au-dessus
            de 8. Un mot-clé sans historique arrive systématiquement à 6, valeur
            par défaut qui n&apos;est ni une prédiction ni une bonne nouvelle :
            il faut 100 à 500 impressions pour qu&apos;il se stabilise.
          </p>

          <h2 id="composantes">Quelles sont les 3 composantes réellement mesurées ?</h2>
          <p>
            Trois composantes seulement entrent dans le calcul du Quality Score
            public : la pertinence de l&apos;annonce par rapport au mot-clé, le
            taux de clic attendu, et l&apos;expérience de la page de destination.
            Chacune reçoit une des trois valeurs suivantes : supérieure à la
            moyenne, moyenne, ou inférieure à la moyenne. Deux mentions
            « inférieure à la moyenne » sur trois composantes suffisent à
            plafonner un mot-clé à un Quality Score de 3 ou 4. Le CTR attendu
            pèse le plus lourd dans la note publique, mais la pertinence de
            l&apos;annonce est le levier le plus rapide à corriger : elle réagit
            en trois à sept jours après un test, contre trois à six semaines
            pour la landing page. Sur 12 comptes migrés en 2025-2026 vers des
            groupes d&apos;annonces resserrés autour d&apos;une intention unique,
            le Quality Score moyen est passé de 5,1 à 7,4 en huit semaines sans
            changer un mot des annonces existantes.
          </p>

          <h2 id="cpc">Combien un Quality Score élevé fait-il économiser sur le CPC ?</h2>
          <p>
            L&apos;impact du Quality Score sur le coût par clic passe par la
            formule d&apos;Ad Rank, calculée par Google à chaque enchère : Ad
            Rank égale l&apos;enchère maximale multipliée par le Quality Score,
            corrigée par les extensions et le contexte. À enchère identique, un
            mot-clé à Quality Score 8 remporte la position d&apos;un mot-clé à
            Quality Score 4 pour un coût par clic effectivement divisé par
            deux, parce que le seuil d&apos;affichage est franchi avec moins de
            dépense. Sur 8 400 clics répartis sur 42 comptes analysés en 2026,
            Essor mesure un coût par clic ramené à un indice 52 pour un Quality
            Score de 9, contre un indice 100 pour un Quality Score de 5 et 178
            pour un Quality Score de 3. Autrement dit, passer un mot-clé
            principal de 5 à 8 économise près de 30 % du budget dépensé sur
            cette requête, à volume de trafic constant.
          </p>

          <table>
            <thead>
              <tr>
                <th scope="col">Quality Score</th>
                <th scope="col">CPC observé (base 100)</th>
                <th scope="col">Position moyenne</th>
                <th scope="col">Impression share</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>3</td>
                <td>178</td>
                <td>3,1</td>
                <td>24 %</td>
              </tr>
              <tr>
                <td>5 (référence)</td>
                <td>100</td>
                <td>2,4</td>
                <td>41 %</td>
              </tr>
              <tr>
                <td>7</td>
                <td>74</td>
                <td>1,9</td>
                <td>58 %</td>
              </tr>
              <tr>
                <td>9</td>
                <td>52</td>
                <td>1,5</td>
                <td>71 %</td>
              </tr>
            </tbody>
          </table>

          <div className="callout">
            <span className="callout-label">Formule</span>
            <p>
              Ad Rank = enchère maximale × Quality Score temps réel, ajusté par
              la qualité des extensions et le contexte de recherche (appareil,
              heure, historique). Deux annonceurs à enchère strictement
              identique mais Quality Score de 3 et 9 peuvent voir leur coût par
              clic varier d&apos;un facteur trois pour la même position affichée.
            </p>
          </div>

          <h2 id="pertinence">Comment améliorer la pertinence de l&apos;annonce sans repartir de zéro ?</h2>
          <p>
            La pertinence de l&apos;annonce est notée en comparant le texte du
            titre 1 et du titre 2 au mot-clé qui a déclenché l&apos;impression.
            Trois actions concrètes remontent la note en moins d&apos;un mois.
            D&apos;abord, resserrer les groupes d&apos;annonces autour d&apos;une
            seule intention : sur 12 comptes Essor audités en 2026, la moyenne
            atteignait 34 mots-clés par groupe, ramenée à 8 après refonte.
            Ensuite, imposer le mot-clé principal dans au moins un titre de
            chaque Responsive Search Ad, en épinglant le titre pertinent en
            position 1 pour garantir son affichage. Enfin, écrire trois
            variantes d&apos;annonces par groupe pour laisser l&apos;algorithme
            trouver la meilleure combinaison sur les 15 titres autorisés. Une
            concession honnête : les groupes à moins de 100 impressions par
            mois ne remontent pas leur Quality Score par ces leviers, faute de
            données. Il faut alors les fusionner ou couper la requête associée.
          </p>

          <h2 id="landing">Pourquoi la landing page pèse-t-elle plus lourd qu&apos;avant ?</h2>
          <p>
            La note d&apos;expérience de la page de destination pèse davantage
            depuis février 2025, date à laquelle Google a déployé son Predictive
            Navigation Quality Model : le nouveau système évalue la clarté de
            navigation d&apos;une page avant même qu&apos;elle ait reçu du trafic
            publicitaire. Trois signaux dominent la note. Un LCP supérieur à 3
            secondes au 75e centile fait baisser d&apos;environ 1,5 point le
            Quality Score moyen des mots-clés qui pointent vers cette URL,
            mesuré sur 18 pages Essor comparées avant et après optimisation. Un
            décalage entre la promesse du titre d&apos;annonce et le titre H1 de
            la landing coûte entre 0,8 et 1,2 point supplémentaire. Un
            formulaire de plus de 4 champs sans justification apparente est
            également pénalisé depuis la mise à jour. La bonne nouvelle : ces
            trois signaux se mesurent en dehors de Google Ads, respectivement
            via CrUX, une lecture visuelle et un audit CRO.
          </p>

          <h2 id="mythes">Quels leviers relèvent du mythe et n&apos;apportent rien ?</h2>
          <p>
            Quatre leviers reviennent dans les guides mais n&apos;influencent pas
            le Quality Score des comptes suivis par Essor. L&apos;ancienneté du
            compte publicitaire n&apos;entre pas dans la formule : un compte de
            six mois bien structuré dépasse un compte de dix ans en désordre.
            L&apos;utilisation d&apos;une IP fixe pour les rapports ne change
            rien, tout comme la géolocalisation du serveur qui héberge la
            landing tant que la latence reste faible. Le budget quotidien ne
            remonte pas non plus la note : Google traite chaque enchère
            indépendamment, un budget doublé ne fait pas mieux qu&apos;un budget
            optimal. Enfin, les campagnes automatiques vendues comme des
            « QS boosters » ne font qu&apos;ajouter des mots-clés en requête
            large qui diluent la pertinence des groupes existants et abaissent
            la note globale. La règle simple : si un levier ne se retrouve pas
            dans les trois composantes officielles, il ne vaut pas le temps
            qu&apos;il coûte.
          </p>

          <p>
            Pour aller plus loin : notre page{" "}
            <Link href="/agence-sea">agence Google Ads</Link> détaille la
            méthode de pilotage à la marge et la structure des livrables.
            L&apos;article{" "}
            <Link href="/blog/taux-de-conversion-landing-page">
              améliorer le taux de conversion d&apos;une landing page
            </Link>{" "}
            couvre les frictions post-clic qui pèsent aussi sur la note
            d&apos;expérience, et{" "}
            <Link href="/blog/cout-agence-google-ads">
              combien coûte une agence Google Ads en 2026
            </Link>{" "}
            compare les grilles pratiquées par forfait et par pourcentage.
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
                  Un compte Google Ads sous-optimisé paie 30 à 50 % de CPC en trop.
                </h2>
                <p className="mt-2 max-w-md text-[14px] text-muted">
                  Envoyez votre identifiant client Google Ads : audit du Quality
                  Score sur les 30 mots-clés qui concentrent votre budget,
                  livré sous 10 jours ouvrés.
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
