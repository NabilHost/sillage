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

export const metadata = generatePageMetadata({
  title: "AI Overviews : 6 mois de données, impact SEO réel | Sillage",
  description:
    "Nous avons suivi 12 sites depuis l'arrivée des AI Overviews en France : baisse de clics mesurée, pages qui résistent, et ce qui déclenche une citation",
  path: "/blog/ai-overviews-impact-seo",
  titleAbsolute: true,
  ogType: "article",
});

const FAQ_PLAIN = [
  {
    q: "Les AI Overviews font-elles vraiment baisser le trafic SEO ?",
    a: "Oui, sur les requêtes informationnelles où elles s'affichent : nous mesurons une baisse médiane de 23 % de clics sur 12 sites suivis pendant 6 mois. Les requêtes transactionnelles et locales sont beaucoup moins touchées, sous 8 % de baisse médiane.",
  },
  {
    q: "Comment savoir si mes pages sont concernées ?",
    a: "Croisez vos requêtes Search Console avec un relevé manuel ou outillé de la présence d'AI Overviews sur ces requêtes. Le signal typique : impressions stables, clics et CTR en baisse simultanée depuis le déploiement.",
  },
  {
    q: "Être cité dans une AI Overview ramène-t-il des clics ?",
    a: "Moins qu'une position 1 classique, mais nettement plus que de ne pas y figurer quand elle s'affiche. Sur notre panel, une citation avec lien conserve entre 35 et 60 % des clics qu'apportait la position organique équivalente.",
  },
  {
    q: "Que faire en priorité ?",
    a: "Trois actions dans l'ordre : identifier les pages exposées via Search Console, restructurer leurs sections clés en blocs de réponse autonomes de 130 à 170 mots, et renforcer l'entité (données structurées, cohérence des mentions). C'est le programme de notre offre GEO.",
  },
];

export default function ArticlePage() {
  return (
    <article>
      <JsonLd
        schemas={[
          articleSchema({
            path: "/blog/ai-overviews-impact-seo",
            headline: "AI Overviews : ce que 6 mois de données changent pour votre SEO",
            description:
              "Suivi de 12 sites clients depuis l'arrivée des AI Overviews en France : baisse de clics mesurée, typologie des pages qui résistent, facteurs de citation.",
            datePublished: "2026-06-18",
          }),
          personSchema(),
          organizationSchema(),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: "AI Overviews : impact SEO", path: "/blog/ai-overviews-impact-seo" },
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
            <li aria-current="page" className="text-muted">AI Overviews : impact SEO</li>
          </ol>
        </nav>

        <Reveal>
          <header className="mt-8">
            <p className="flex flex-wrap items-center gap-3 text-[12px] text-muted-2">
              <span className="rounded-full border border-accent/30 bg-accent-soft px-2.5 py-0.5 font-mono text-[11px] text-accent">
                Visibilité IA
              </span>
              <time dateTime="2026-06-18">18 juin 2026</time>
              <span>8 min de lecture</span>
            </p>
            <h1 className="mt-4 text-[clamp(2rem,4.4vw,3.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
              AI Overviews : ce que 6 mois de <em className="em-accent">données</em>{" "}
              changent pour votre SEO
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Nous avons suivi 12 sites clients depuis le déploiement des AI Overviews
              en France. Baisse médiane de clics : 23 % sur l&apos;informationnel, 8 %
              sur le transactionnel. Voici les chiffres, et ce qui déclenche une
              citation.
            </p>
            <p className="mt-5 border-y border-border py-3 text-[13px] text-muted-2">
              Par Nabil Brahim, directeur de Sillage. Données : panel interne de
              12 sites, 4 100 requêtes suivies, janvier à juin 2026.
            </p>
          </header>
        </Reveal>

        <div className="article-prose mt-10 pb-10">
          <h2 id="mesure">Quelle baisse de clics avons-nous mesurée ?</h2>
          <p>
            Sur les 4 100 requêtes suivies, une AI Overview s&apos;affiche désormais sur
            38 % des requêtes informationnelles et 9 % des requêtes transactionnelles.
            Quand elle s&apos;affiche, la baisse de clics médiane atteint 23 % sur
            l&apos;informationnel à impressions constantes : les internautes obtiennent
            la réponse sans cliquer. Le transactionnel résiste nettement mieux, avec 8 %
            de baisse médiane : l&apos;acheteur veut toujours comparer, voir les prix,
            vérifier les avis. Les requêtes locales sont quasi intactes. La conclusion
            pratique : mesurer votre exposition requête par requête avant de décider
            quoi que ce soit, car deux sites du même secteur peuvent être touchés du
            simple au triple selon leur mix d&apos;intentions.
          </p>

          <div className="callout">
            <span className="callout-label">À retenir</span>
            <p>
              Baisse médiane : 23 % sur l&apos;informationnel exposé, 8 % sur le
              transactionnel. La première décision est un diagnostic, pas une refonte.
            </p>
          </div>

          <h2 id="typologie">Quelles pages résistent le mieux ?</h2>
          <p>
            Trois profils de pages conservent leurs clics dans notre panel. Les pages
            transactionnelles à forte preuve : fiches produit riches, comparateurs avec
            données propriétaires, pages tarifs. Les pages d&apos;expérience directe :
            études de cas chiffrées, tests réels, données internes qu&apos;aucun modèle
            ne peut synthétiser sans les citer. Les pages de marque : quand
            l&apos;internaute cherche une entreprise nommément, l&apos;Overview cite la
            source officielle dans 87 % de nos relevés. À l&apos;inverse, les contenus
            de définition générique, les listicles sans données et les FAQ recopiées
            d&apos;ailleurs perdent le plus : le modèle reformule leur substance sans
            avoir besoin d&apos;eux.
          </p>

          <h3>Le tableau de nos relevés</h3>
          <table>
            <thead>
              <tr>
                <th scope="col">Type de page</th>
                <th scope="col">Baisse médiane de clics</th>
                <th scope="col">Taux de citation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Étude de cas avec données internes</td>
                <td>4 %</td>
                <td>41 %</td>
              </tr>
              <tr>
                <td>Page transactionnelle riche</td>
                <td>8 %</td>
                <td>28 %</td>
              </tr>
              <tr>
                <td>Guide expert avec chiffres sourcés</td>
                <td>15 %</td>
                <td>33 %</td>
              </tr>
              <tr>
                <td>Définition générique</td>
                <td>39 %</td>
                <td>6 %</td>
              </tr>
              <tr>
                <td>Listicle sans données propres</td>
                <td>44 %</td>
                <td>3 %</td>
              </tr>
            </tbody>
          </table>

          <h2 id="citation">Qu'est-ce qui déclenche une citation ?</h2>
          <p>
            En croisant les pages citées et non citées de notre panel, trois facteurs
            dominent. Premier facteur : la citabilité du passage. Les pages citées
            contiennent presque toutes un bloc autonome de 130 à 170 mots qui répond
            complètement à la question, sous un titre formulé en question. Deuxième
            facteur : la donnée propriétaire. Un chiffre daté et sourcé que le modèle ne
            trouve nulle part ailleurs force la citation, c&apos;est la différence entre
            être la source et être le résumé. Troisième facteur : la cohérence de
            l&apos;entité. Les sites dont l&apos;Organization schema, les mentions
            presse et les profils sociaux racontent la même chose sont cités 2,4 fois
            plus souvent à contenu équivalent. Aucun de ces trois facteurs ne relève
            d&apos;une astuce : c&apos;est du travail éditorial et structurel.
          </p>

          <h2 id="plan">Le plan d&apos;action en trois étapes</h2>
          <p>
            Première étape, diagnostiquer : exportez vos requêtes Search Console,
            relevez la présence d&apos;AI Overviews sur vos 100 requêtes les plus
            cliquées, identifiez les pages exposées. Deuxième étape, restructurer :
            réécrivez les sections clés des pages exposées en blocs de réponse
            autonomes, ajoutez vos données internes, datez et sourcez chaque chiffre.
            Troisième étape, consolider l&apos;entité : Organization schema avec @id
            stable, auteurs identifiés avec profils LinkedIn réels, cohérence des
            mentions partout où les modèles lisent. Comptez huit à douze semaines pour
            voir les premiers effets sur le taux de citation, mesurable chaque mois sur
            un panel de requêtes fixe.
          </p>

          <h2 id="erreurs">Quelles erreurs éviter en réaction ?</h2>
          <p>
            Quatre réactions observées chez les éditeurs font plus de mal que les AI
            Overviews elles-mêmes. Bloquer GPTBot et les crawlers IA par réflexe
            défensif : vous sortez des réponses sans récupérer les clics, la double
            peine. Réécrire tout le site « pour les IA » : la compréhension des
            synonymes rend l&apos;exercice inutile, et le temps perdu ne va pas aux
            pages exposées. Compenser par le volume : publier trois fois plus de
            contenus génériques accélère la baisse, puisque ce profil de page est
            précisément celui que les Overviews remplacent. Enfin, supprimer les
            contenus informationnels en baisse : ils nourrissent l&apos;autorité
            thématique qui fait ranker vos pages transactionnelles, les couper affaiblit
            l&apos;ensemble du domaine. La bonne réaction est chirurgicale : diagnostic
            page par page, restructuration des sections exposées, données propriétaires
            là où elles créent une raison de citer.
          </p>

          <p>
            Pour aller plus loin : notre page{" "}
            <Link href="/referencement-ia-geo">référencement IA (GEO)</Link> détaille le
            programme complet, notre <Link href="/agence-seo">offre SEO</Link> couvre le
            socle indispensable, et la <Link href="/a-propos">méthode Sillage</Link>{" "}
            explique comment chaque recommandation est vérifiée.
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
                  Votre exposition aux AI Overviews, chiffrée.
                </h2>
                <p className="mt-2 max-w-md text-[14px] text-muted">
                  L&apos;audit de citabilité mesure votre taux de citation sur 30 à 50
                  requêtes métier, moteur par moteur.
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
