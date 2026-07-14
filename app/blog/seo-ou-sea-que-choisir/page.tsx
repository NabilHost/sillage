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
  title: "SEO ou SEA : que choisir ? L'arbre de décision | Sillage",
  description:
    "SEO ou SEA : l'arbre de décision selon votre horizon, votre budget et votre marché. Coûts comparés à 12 et 36 mois, seuils chiffrés et séquence recommandée",
  path: "/blog/seo-ou-sea-que-choisir",
  titleAbsolute: true,
  ogType: "article",
});

const FAQ_PLAIN = [
  {
    q: "Faut-il commencer par le SEO ou par le SEA ?",
    a: "Par le SEA si vous avez besoin de clients dans les 3 mois : une campagne Search livre ses premiers clics en 48 heures. Par le SEO si votre horizon dépasse 12 mois et que votre marché génère au moins 1 000 recherches qualifiées mensuelles. La séquence la plus rentable que nous observons : SEA d'abord pour valider les requêtes qui convertissent, SEO ensuite avec ces données.",
  },
  {
    q: "Le SEA améliore-t-il le référencement naturel ?",
    a: "Non, aucun effet direct : Google a confirmé à plusieurs reprises que dépenser en Ads n'influence pas le classement organique. L'effet indirect est réel en revanche : les rapports de termes de recherche révèlent les requêtes qui convertissent avec leur coût exact, et une marque vue en annonce obtient un taux de clic organique légèrement supérieur dans nos mesures.",
  },
  {
    q: "Quel budget minimum pour chaque canal ?",
    a: "En SEA, comptez le budget nécessaire pour 100 clics par cycle de décision : environ 1 000 € par mois de média en B2C, 1 500 à 2 500 € en B2B, hors gestion. En SEO, un accompagnement sérieux démarre entre 800 et 1 800 € HT mensuels selon la taille du site. En dessous de ces seuils, le canal sous-financé ne produit pas de données exploitables.",
  },
  {
    q: "Peut-on arrêter le SEA une fois le SEO en place ?",
    a: "Progressivement, jamais brutalement. Quand les positions organiques couvrent une requête rentable, testez une réduction d'enchères à budget constant sur 4 semaines et mesurez le volume total de leads, pas le trafic. Dans nos comptes, couper les annonces sur les requêtes de marque fait perdre 5 à 15 % des conversions selon la pression concurrentielle : la bascule se mesure requête par requête.",
  },
];

export default function ArticlePage() {
  return (
    <article>
      <JsonLd
        schemas={[
          articleSchema({
            path: "/blog/seo-ou-sea-que-choisir",
            headline: "SEO ou SEA : que choisir ? L'arbre de décision selon votre horizon",
            description:
              "L'arbre de décision entre SEO et SEA selon l'horizon, le budget et le volume de recherche du marché, avec les coûts comparés à 12 et 36 mois.",
            datePublished: "2026-07-11",
            author: AUTHOR,
          }),
          personSchema(AUTHOR),
          organizationSchema(),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: "SEO ou SEA : que choisir ?", path: "/blog/seo-ou-sea-que-choisir" },
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
            <li aria-current="page" className="text-muted">SEO ou SEA</li>
          </ol>
        </nav>

        <Reveal>
          <header className="mt-8">
            <p className="flex flex-wrap items-center gap-3 text-[12px] text-muted-2">
              <span className="rounded-full border border-accent/30 bg-accent-soft px-2.5 py-0.5 font-mono text-[11px] text-accent">
                Stratégie
              </span>
              <time dateTime="2026-07-11">11 juillet 2026</time>
              <span>7 min de lecture</span>
            </p>
            <h1 className="mt-4 text-[clamp(2rem,4.4vw,3.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
              SEO ou SEA : lequel <em className="em-accent">choisir</em> pour votre acquisition ?
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Votre budget acquisition ne finance souvent qu&apos;un canal sérieusement.
              Le bon choix dépend de trois variables : votre horizon, votre trésorerie
              et le volume de recherche de votre marché. Voici l&apos;arbre de décision
              que nous déroulons à chaque premier appel, avec les seuils chiffrés.
            </p>
            <p className="mt-5 border-y border-border py-3 text-[13px] text-muted-2">
              Par Claire Vasseur, directrice SEO. Sources : CPC constatés sur nos
              comptes Google Ads 2025-2026 et données Search Console de nos missions SEO.
            </p>
          </header>
        </Reveal>

        <div className="article-prose mt-10 pb-10">
          <h2 id="difference">Quelle est la vraie différence entre SEO et SEA ?</h2>
          <p>
            Le SEO et le SEA visent la même page de résultats Google, mais
            n&apos;achètent pas la même chose. Le SEA (la publicité Google Ads pour
            l&apos;essentiel) loue une position : vous payez chaque clic, entre 1 et
            8 € selon le secteur en France en 2026, et le trafic s&apos;arrête le jour
            où le budget s&apos;arrête. Le SEO construit un actif : les positions
            organiques ne coûtent rien au clic, mais demandent 3 à 6 mois de travail
            avant de produire, puis continuent de livrer des visites pendant des
            années. La répartition des clics penche nettement côté organique : sur une
            requête commerciale type, les annonces captent 15 à 25 % des clics dans
            nos données, les résultats naturels le reste. Comparer les deux canaux sur
            le coût du clic est donc trompeur. Le bon indicateur est le coût par
            client acquis, mesuré sur 12 mois au minimum.
          </p>

          <h2 id="sea-premier">Quand le SEA est-il le bon premier canal ?</h2>
          <p>
            Le SEA s&apos;impose quand le temps manque. Une campagne Search
            correctement paramétrée livre ses premiers clics en 48 heures et ses
            premières données fiables en 4 à 8 semaines : aucun autre levier
            d&apos;acquisition ne rend un verdict aussi vite. Trois situations le
            placent en premier : un lancement d&apos;offre, où il faut vérifier que la
            demande existe avant d&apos;investir des mois en contenu ; une trésorerie
            qui exige des clients ce trimestre et non l&apos;année prochaine ; une
            activité saisonnière dont la fenêtre de vente dure quelques semaines. Le
            prérequis reste non négociable : un budget média capable d&apos;acheter au
            moins 100 clics par cycle de décision, soit environ 1 000 € par mois en
            B2C et 1 500 à 2 500 € en B2B. En dessous de ce seuil, les enchères
            automatiques n&apos;accumulent jamais assez de signal pour apprendre.
          </p>

          <h2 id="seo-premier">Quand le SEO doit-il passer en premier ?</h2>
          <p>
            Le SEO devient prioritaire quand le marché contient un volume de recherche
            durable et que l&apos;horizon dépasse 12 mois. Trois signaux le
            confirment. Un volume suffisant d&apos;abord : à partir d&apos;environ
            1 000 recherches qualifiées mensuelles sur la thématique, le canal peut
            nourrir un flux régulier de clients. Des CPC élevés ensuite : quand le
            clic payant coûte 6 € ou plus, chaque position organique gagnée économise
            un budget média réel ; 2 000 clics organiques mensuels sur ces requêtes
            représentent l&apos;équivalent de 12 000 € de média par mois. Une marge
            qui supporte l&apos;attente enfin : le SEO se paie 6 mois avant de
            récolter, il faut que la trésorerie l&apos;absorbe sans tension.
            Concession honnête : si votre besoin de clients se compte en semaines, le
            SEO ne vous sauvera pas, quelle que soit l&apos;agence qui vous
            l&apos;a promis.
          </p>

          <h2 id="couts">Comment comparer les coûts réels des deux canaux ?</h2>
          <p>
            La comparaison honnête se fait sur le coût par client à 12 puis 36 mois,
            jamais sur le tarif mensuel. Prenons une PME B2B dont la valeur client est
            de 6 000 €. En SEA : 2 000 € de média mensuel plus 800 € de gestion, un
            CPC de 5 €, un taux de conversion de 3 %, soit 12 leads et environ 2
            clients par mois. Le coût par client s&apos;établit à 1 400 € et reste
            stable dans le temps, chaque clic se rachetant au même prix. En SEO :
            1 800 € HT mensuels, 6 mois avant les premiers clients organiques, puis un
            flux qui croît sans coût marginal au clic ; sur 36 mois, le coût par
            client passe sous 700 € dans nos missions comparables. La lecture est
            temporelle : le SEA gagne la première année, le SEO prend l&apos;avantage
            dès la deuxième et l&apos;écart se creuse ensuite.
          </p>

          <table>
            <thead>
              <tr>
                <th scope="col">Critère</th>
                <th scope="col">SEO</th>
                <th scope="col">SEA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Premiers résultats</td>
                <td>3 à 6 mois</td>
                <td>48 heures</td>
              </tr>
              <tr>
                <td>Coût d&apos;entrée mensuel</td>
                <td>800 à 1 800 € HT d&apos;accompagnement</td>
                <td>1 000 à 2 500 € de média, plus la gestion</td>
              </tr>
              <tr>
                <td>Coût marginal du clic</td>
                <td>Décroissant, tend vers zéro</td>
                <td>Stable, 1 à 8 € selon le secteur</td>
              </tr>
              <tr>
                <td>Que reste-t-il à l&apos;arrêt ?</td>
                <td>6 à 18 mois d&apos;inertie des positions</td>
                <td>Trafic nul sous 24 heures</td>
              </tr>
              <tr>
                <td>Intentions couvertes</td>
                <td>Informationnel et transactionnel</td>
                <td>Transactionnel surtout</td>
              </tr>
            </tbody>
          </table>

          <div className="callout">
            <span className="callout-label">À retenir</span>
            <p>
              Le SEA achète du trafic, le SEO construit un actif. La question
              n&apos;est pas lequel est meilleur, mais lequel correspond à votre
              horizon de trésorerie : moins de 12 mois, SEA ; au-delà, SEO.
            </p>
          </div>

          <p>
            Deux coûts cachés méritent d&apos;entrer dans le calcul. Côté SEA, la
            hausse tendancielle des enchères : sur nos comptes, les CPC ont progressé
            de 8 à 12 % par an entre 2023 et 2026, si bien qu&apos;un budget constant
            achète chaque année moins de clics. Côté SEO, la maintenance : un contenu
            qui plafonne ou décroche demande une mise à jour, et environ 20 % du
            budget annuel devrait y être réservé après la deuxième année. Aucun des
            deux canaux n&apos;est un investissement que l&apos;on règle une fois pour
            toutes ; la différence est que l&apos;entretien SEO protège un actif
            existant, quand la hausse des CPC renchérit chaque nouveau client.
          </p>

          <h2 id="cumul">Peut-on mener SEO et SEA en même temps ?</h2>
          <p>
            Mener SEO et SEA de front est l&apos;idéal théorique, et une erreur
            fréquente quand le budget est contraint. En dessous d&apos;environ
            3 500 € HT mensuels tout compris, répartir sur deux canaux revient à
            sous-financer les deux : des campagnes qui n&apos;atteignent pas 100 clics
            par cycle de décision et un SEO limité à quelques heures par mois ne
            produisent ni l&apos;un ni l&apos;autre. La séquence qui fonctionne dans
            nos missions : lancer le SEA d&apos;abord pour identifier les requêtes qui
            convertissent, puis réinvestir ces données dans le SEO 6 à 12 mois plus
            tard. Les rapports de termes de recherche Google Ads constituent la
            meilleure étude de mots-clés disponible, car chaque requête y est associée
            à un coût et à des conversions réelles plutôt qu&apos;à des estimations.
            Le cumul simultané se justifie quand chaque canal atteint seul son seuil
            d&apos;efficacité, pas avant.
          </p>

          <h2 id="arbre">Quel arbre de décision appliquer à votre situation ?</h2>
          <p>
            L&apos;arbre de décision tient en quatre questions posées dans
            l&apos;ordre. Un : avez-vous besoin de clients dans moins de 3 mois ? Si
            oui, SEA, le SEO n&apos;arrivera pas à temps. Deux : votre marché
            génère-t-il au moins 1 000 recherches qualifiées par mois ? Si non, ni le
            SEO ni le SEA ne suffiront ; la prospection directe ou les partenariats
            seront plus rentables, et nous le disons dès le premier appel. Trois :
            votre budget total dépasse-t-il 3 500 € HT mensuels ? Si oui, les deux
            canaux en parallèle deviennent viables ; sinon, séquencez. Quatre : votre
            valeur client couvre-t-elle au moins 20 fois votre CPC ? Sous ce ratio, la
            marge ne survit pas au coût d&apos;acquisition payant et le SEO redevient
            la seule voie. Ce filtre écarte environ un prospect sur cinq chez nous :
            mieux vaut un refus argumenté qu&apos;une mission perdante pour tout le
            monde.
          </p>

          <p>
            Pour aller plus loin : notre page <Link href="/agence-seo">agence SEO</Link>{" "}
            détaille la méthode organique, notre page{" "}
            <Link href="/agence-sea">agence Google Ads</Link> couvre le canal payant,
            l&apos;article{" "}
            <Link href="/blog/budget-google-ads-rentable">
              quel budget Google Ads pour être rentable
            </Link>{" "}
            donne la formule de calcul complète, et la{" "}
            <Link href="/a-propos">méthode Sillage</Link> explique pourquoi chaque
            recommandation doit être falsifiable.
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
                  Un arbitrage chiffré, pas un discours commercial.
                </h2>
                <p className="mt-2 max-w-md text-[14px] text-muted">
                  Envoyez votre URL et votre marché : nous déroulons l&apos;arbre de
                  décision avec vos chiffres et nous vous disons quel canal financer,
                  ou aucun des deux.
                </p>
              </div>
              <MagneticButton href="/contact">Demander l&apos;arbitrage</MagneticButton>
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
