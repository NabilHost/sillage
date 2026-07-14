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
  title: "Combien de temps pour des résultats SEO ? | Sillage",
  description:
    "Timeline SEO réelle : technique 4 à 8 semaines, contenu 3 à 6 mois, autorité 6 à 12 mois. Les indicateurs à surveiller mois par mois, sur 24 missions",
  path: "/blog/combien-de-temps-seo-resultats",
  titleAbsolute: true,
  ogType: "article",
});

const FAQ_PLAIN = [
  {
    q: "Combien de temps avant les premiers résultats SEO ?",
    a: "Comptez 4 à 8 semaines pour les effets des corrections techniques, 3 à 6 mois pour qu'un contenu neuf trouve ses positions stables, et 6 à 12 mois pour les effets de l'autorité. Sur nos 24 missions suivies entre 2023 et 2026, le délai médian avant une hausse nette du trafic organique est de 14 semaines.",
  },
  {
    q: "Peut-on accélérer les résultats SEO ?",
    a: "Partiellement. La technique et la mise à jour de contenus existants sont les leviers les plus rapides, avec des effets en 4 à 8 semaines. La vitesse d'application des recommandations côté client est le premier facteur de variance mesuré sur nos missions. L'autorité, en revanche, ne s'accélère pas sans prendre des risques de pénalité.",
  },
  {
    q: "Mon trafic ne bouge pas après 3 mois : est-ce normal ?",
    a: "Oui, si les indicateurs avancés progressent : pages indexées, impressions, nombre de requêtes distinctes, positions 11 à 30. Le trafic est un indicateur retardé qui suit les impressions de 6 à 8 semaines. Si ces quatre signaux sont plats à trois mois, demandez un point d'étape formel avec les données Search Console.",
  },
  {
    q: "Les AI Overviews rallongent-ils les délais du SEO ?",
    a: "Ils ne changent pas les délais de positionnement, mais ils réduisent les clics sur les requêtes informationnelles exposées : baisse médiane de 23 % mesurée sur notre panel de 12 sites. Les requêtes transactionnelles et locales restent mieux préservées. La timeline reste la même, le choix des requêtes cibles compte davantage.",
  },
];

export default function ArticlePage() {
  return (
    <article>
      <JsonLd
        schemas={[
          articleSchema({
            path: "/blog/combien-de-temps-seo-resultats",
            headline: "Combien de temps pour voir des résultats SEO ? La timeline réelle",
            description:
              "Timeline SEO par type d'action : technique 4 à 8 semaines, contenu 3 à 6 mois, autorité 6 à 12 mois, avec les indicateurs avancés à surveiller.",
            datePublished: "2026-07-12",
            author: AUTHOR,
          }),
          personSchema(AUTHOR),
          organizationSchema(),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: "Combien de temps pour des résultats SEO", path: "/blog/combien-de-temps-seo-resultats" },
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
            <li aria-current="page" className="text-muted">Délais des résultats SEO</li>
          </ol>
        </nav>

        <Reveal>
          <header className="mt-8">
            <p className="flex flex-wrap items-center gap-3 text-[12px] text-muted-2">
              <span className="rounded-full border border-accent/30 bg-accent-soft px-2.5 py-0.5 font-mono text-[11px] text-accent">
                SEO
              </span>
              <time dateTime="2026-07-12">12 juillet 2026</time>
              <span>8 min de lecture</span>
            </p>
            <h1 className="mt-4 text-[clamp(2rem,4.4vw,3.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
              Combien de temps pour des <em className="em-accent">résultats</em> SEO ?
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Technique : 4 à 8 semaines. Contenu : 3 à 6 mois. Autorité : 6 à
              12 mois. Voici la timeline observée sur nos missions, les indicateurs
              qui prédisent le résultat avant le trafic, et les jalons où il faut
              s&apos;inquiéter.
            </p>
            <p className="mt-5 border-y border-border py-3 text-[13px] text-muted-2">
              Par Claire Vasseur, directrice SEO. Données : 24 missions Sillage
              suivies entre 2023 et 2026, croisées avec Search Console.
            </p>
          </header>
        </Reveal>

        <div className="article-prose mt-10 pb-10">
          <h2 id="cycles">Pourquoi le SEO demande-t-il plusieurs mois ?</h2>
          <p>
            Le référencement naturel dépend de trois cycles que ni vous ni votre
            agence ne contrôlez entièrement. Le premier est le crawl : Google doit
            revisiter vos pages pour constater les changements, ce qui prend de
            quelques jours à plusieurs semaines selon la fréquence d&apos;exploration
            de votre site. Le deuxième est l&apos;évaluation : une page nouvelle
            traverse une phase de test pendant laquelle ses positions oscillent,
            souvent entre la 8e et la 30e place, durant 6 à 12 semaines. Le
            troisième est la consolidation : signaux d&apos;engagement et liens
            entrants s&apos;accumulent lentement, mois après mois. Sur les 24
            missions que nous avons suivies entre 2023 et 2026, le délai médian
            entre la première action et le premier mois de hausse nette du trafic
            organique est de 14 semaines. Cette médiane cache des écarts réels :
            6 semaines pour un site établi, plus de 24 semaines pour un domaine
            récent.
          </p>

          <h2 id="delais">Quels délais selon le type d&apos;action SEO ?</h2>
          <p>
            Chaque levier du SEO avance à sa propre vitesse, et confondre ces
            horizons produit des attentes intenables. Les corrections techniques
            agissent le plus vite : une erreur d&apos;indexation corrigée se traduit
            par une reprise des impressions en 4 à 8 semaines sur nos missions. La
            mise à jour de contenus existants suit le même rythme, car Google
            réévalue rapidement une page qu&apos;il connaît déjà. Le contenu neuf
            demande 3 à 6 mois pour trouver ses positions stables, le temps de
            traverser la phase d&apos;évaluation. L&apos;autorité, enfin, est le
            levier le plus lent : relations presse, études citées et liens
            éditoriaux produisent leurs effets en 6 à 12 mois. Conséquence
            pratique : un plan SEO sérieux commence par la technique et les
            contenus existants, précisément parce que ce sont les deux seuls
            leviers capables de montrer un signal mesurable avant le quatrième
            mois de mission.
          </p>

          <table>
            <thead>
              <tr>
                <th scope="col">Type d&apos;action</th>
                <th scope="col">Premier signal</th>
                <th scope="col">Effet stabilisé</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Correction technique (crawl, indexation)</td>
                <td>2 à 4 semaines</td>
                <td>4 à 8 semaines</td>
              </tr>
              <tr>
                <td>Mise à jour de contenu existant</td>
                <td>2 à 4 semaines</td>
                <td>4 à 8 semaines</td>
              </tr>
              <tr>
                <td>Contenu neuf (pages, articles)</td>
                <td>6 à 12 semaines</td>
                <td>3 à 6 mois</td>
              </tr>
              <tr>
                <td>Autorité (liens, presse, études)</td>
                <td>3 à 6 mois</td>
                <td>6 à 12 mois</td>
              </tr>
              <tr>
                <td>Refonte ou migration</td>
                <td>2 à 4 semaines de turbulence</td>
                <td>2 à 4 mois</td>
              </tr>
            </tbody>
          </table>

          <p>
            Ces fourchettes supposent des actions réellement livrées. Un audit
            rendu au mois 1 mais appliqué au mois 4 décale toute la timeline de
            trois mois, et c&apos;est le scénario le plus fréquent que nous
            observons. Autre point souvent oublié : les délais se chevauchent. Une
            mission bien construite lance la technique, la mise à jour des contenus
            et les premières pages neuves dans les six premières semaines, si bien
            que les effets arrivent en vagues successives plutôt qu&apos;en un
            déclic unique. Méfiez-vous d&apos;un calendrier qui promet un
            basculement soudain au mois 6 : la courbe réelle ressemble à un
            escalier, pas à une marche.
          </p>

          <h2 id="indicateurs">Quels indicateurs surveiller pendant le premier trimestre ?</h2>
          <p>
            Le trafic est un indicateur retardé : attendre qu&apos;il bouge pour
            juger une mission fait perdre des mois. Quatre signaux avancés se
            lisent dans Search Console bien avant les sessions. Le nombre de pages
            indexées d&apos;abord : il doit converger vers le nombre de pages
            utiles du site dès les premières semaines. Les impressions ensuite :
            sur nos missions, une hausse d&apos;impressions de 30 à 50 % précède
            la hausse de clics de 6 à 8 semaines en moyenne. Le nombre de requêtes
            distinctes qui affichent le site, troisième signal, mesure
            l&apos;élargissement de l&apos;empreinte sémantique. Enfin les
            positions 11 à 30 : une page installée en deuxième page est une future
            première page, et c&apos;est là que se joue le travail des mois
            suivants. Un reporting mensuel qui ne montre que le trafic vous prive
            de ces quatre lectures.
          </p>

          <div className="callout">
            <span className="callout-label">À retenir</span>
            <p>
              Quatre signaux à exiger dans un reporting dès le premier mois :
              pages indexées, impressions, requêtes distinctes, positions 11 à 30.
              Le trafic suit les impressions de 6 à 8 semaines.
            </p>
          </div>

          <h2 id="paliers">Que se passe-t-il entre le quatrième et le douzième mois ?</h2>
          <p>
            La progression du trafic organique n&apos;est pas linéaire, elle avance
            par paliers. Entre le quatrième et le sixième mois, les pages
            travaillées franchissent la deuxième page : le trafic frémit sans
            transformer la courbe. Entre le sixième et le neuvième mois, les
            positions 4 à 10 se consolident et les premières conversions
            organiques arrivent en volume mesurable. Le dernier trimestre concentre
            l&apos;essentiel des gains : sur nos missions 2023-2026, 58 % de la
            croissance de la première année arrive après le huitième mois. Un
            exemple : un e-commerce de mobilier accompagné depuis 2024 a gagné 9 %
            de sessions organiques sur ses six premiers mois, puis 38 % entre le
            mois 7 et le mois 12, sans changement de méthode ni de budget. La
            patience entre les paliers n&apos;est pas de la complaisance :
            c&apos;est la forme normale de la courbe.
          </p>

          <h2 id="facteurs">Qu&apos;est-ce qui accélère ou ralentit les résultats ?</h2>
          <p>
            Cinq facteurs expliquent l&apos;essentiel des écarts de délai entre
            deux sites comparables. L&apos;historique du domaine d&apos;abord : un
            site de dix ans avec des liens réels progresse deux à trois fois plus
            vite qu&apos;un domaine enregistré l&apos;an dernier. L&apos;état
            technique de départ ensuite : un CMS qui bloque les corrections ajoute
            des mois au calendrier. Le rythme de publication, troisième facteur,
            conditionne la vitesse d&apos;élargissement sémantique. La concurrence,
            quatrième : viser des requêtes à difficulté 40 avec un site neuf
            repousse tout de six mois. Le cinquième facteur est le moins cité et
            le plus mesurable chez nous : la vitesse d&apos;application côté
            client. Sur nos missions, une recommandation technique appliquée en
            moins de 15 jours produit son effet dans le trimestre ; la même
            recommandation appliquée en trois mois décale le résultat
            d&apos;autant. Le SEO est une coproduction.
          </p>

          <h2 id="jalons">Quand faut-il s&apos;inquiéter et changer d&apos;approche ?</h2>
          <p>
            Des jalons objectifs permettent de distinguer une mission lente
            d&apos;une mission qui échoue. À trois mois, les signaux avancés
            doivent bouger : indexation propre, impressions en hausse, premières
            positions en page 2. S&apos;ils sont plats, demandez un point
            d&apos;étape formel avec les données Search Console à l&apos;appui. À
            six mois, l&apos;absence totale d&apos;amélioration des impressions
            signale un problème de diagnostic ou d&apos;exécution : c&apos;est le
            moment de faire relire la stratégie, pas d&apos;attendre. Et il faut
            l&apos;admettre : le SEO n&apos;est pas toujours le bon canal. Un
            marché qui génère moins de 200 recherches qualifiées par mois, ou un
            besoin de chiffre d&apos;affaires sous 90 jours, justifient de
            commencer par Google Ads et de traiter le SEO en second temps. Une
            agence sérieuse vous le dit avant de signer, chiffres de volume de
            recherche à l&apos;appui, pas au douzième mois de facturation.
          </p>

          <p>
            Le budget entre aussi dans cette décision : un accompagnement sérieux
            doit être financé 9 à 12 mois pour produire son plein effet. Si votre
            trésorerie n&apos;en couvre que quatre, un audit ponctuel suivi
            d&apos;une exécution interne est un meilleur usage de la même somme.
          </p>

          <p>
            Pour aller plus loin : notre page <Link href="/agence-seo">agence SEO</Link>{" "}
            détaille les livrables mois par mois, l&apos;article{" "}
            <Link href="/blog/cout-agence-seo-2026">
              combien coûte une agence SEO en 2026
            </Link>{" "}
            chiffre les budgets à prévoir, et la <Link href="/a-propos">méthode Sillage</Link>{" "}
            explique pourquoi chaque recommandation part avec son indicateur de
            vérification.
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
                  Une timeline chiffrée avant de signer.
                </h2>
                <p className="mt-2 max-w-md text-[14px] text-muted">
                  Envoyez votre URL : audit livré en 10 jours, avec les délais
                  réalistes pour votre marché et les indicateurs de suivi mois
                  par mois.
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
