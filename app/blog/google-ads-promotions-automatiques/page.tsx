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
  title: "Google Ads : promotions automatiques (oct. 2026) | Essor",
  description:
    "Google Ads applique depuis le 12 octobre 2026 des promotions détectées sur votre site marchand aux campagnes Search et PMax. Protocole de contrôle et risque marge",
  path: "/blog/google-ads-promotions-automatiques",
  titleAbsolute: true,
  ogType: "article",
});

const FAQ_PLAIN = [
  {
    q: "Les promotions automatiques Google Ads sont-elles activées par défaut ?",
    a: "Oui pour les comptes éligibles depuis le 12 octobre 2026 : Search et Performance Max avec un flux Merchant Center valide et au moins 60 jours d&apos;historique. La désactivation se fait au niveau du compte dans Paramètres, puis Promotions, puis Détection automatique. L&apos;extinction prend 24 à 48 heures pour cesser d&apos;apparaître dans les enchères servies.",
  },
  {
    q: "Google peut-il inventer une promotion qui n&apos;existe pas sur mon site ?",
    a: "Non en théorie, Google crawle les pages produits et les bandeaux promotionnels pour détecter des offres déjà publiées. En pratique, les sources de confusion sont fréquentes : codes expirés laissés en ligne, bandeaux saisonniers oubliés, offres réservées à un segment client. Vérifier chaque semaine le rapport Promotions détectées évite 80 % des mauvaises surprises observées en bêta.",
  },
  {
    q: "Faut-il désactiver si on vend sur marge courte ?",
    a: "Sous 25 % de marge brute, oui par défaut, le temps de piloter une liste de promotions manuelles. Un code -10 % appliqué automatiquement à un produit à 22 % de marge laisse 12 points pour couvrir les coûts opérationnels et le coût publicitaire : la vente devient non rentable. Au-delà de 40 % de marge brute, le risque reste gérable avec une surveillance hebdomadaire.",
  },
  {
    q: "Quelle différence avec les extensions de promotion manuelles ?",
    a: "Les extensions manuelles existent depuis 2018 : vous saisissez le code, la remise, les dates et les produits éligibles. La détection automatique crawle le site et crée l&apos;extension sans intervention. Les deux coexistent dans l&apos;interface : Google priorise la manuelle quand les deux visent le même produit, ce qui laisse une porte de sortie contrôlée sans tout désactiver.",
  },
];

export default function ArticlePage() {
  return (
    <article>
      <JsonLd
        schemas={[
          articleSchema({
            path: "/blog/google-ads-promotions-automatiques",
            headline:
              "Google Ads active les promotions automatiques (octobre 2026) : protocole de contrôle",
            description:
              "Google Ads applique depuis le 12 octobre 2026 des promotions détectées sur votre site aux campagnes Search et Performance Max. Mécanisme, risque marge et protocole en 4 étapes.",
            datePublished: "2026-10-19",
            author: AUTHOR,
          }),
          personSchema(AUTHOR),
          organizationSchema(),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Blog", path: "/blog" },
            {
              name: "Google Ads : promotions automatiques (oct. 2026)",
              path: "/blog/google-ads-promotions-automatiques",
            },
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
            <li aria-current="page" className="text-muted">Google Ads : promotions automatiques</li>
          </ol>
        </nav>

        <Reveal>
          <header className="mt-8">
            <p className="flex flex-wrap items-center gap-3 text-[12px] text-muted-2">
              <span className="rounded-full border border-accent/30 bg-accent-soft px-2.5 py-0.5 font-mono text-[11px] text-accent">
                Actualité
              </span>
              <time dateTime="2026-10-19">19 octobre 2026</time>
              <span>8 min de lecture</span>
            </p>
            <h1 className="mt-4 text-[clamp(2rem,4.4vw,3.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
              Google Ads active les promotions <em className="em-accent">automatiques</em> : faut-il laisser faire ?
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Depuis le 12 octobre 2026, Google Ads détecte seul les offres publiées sur
              votre site marchand et les applique aux campagnes Search et Performance
              Max. Pour une PME à 28 % de marge, un code -15 % appliqué sans contrôle
              ramène la marge nette sous le seuil de rentabilité. Protocole en 4 étapes.
            </p>
            <p className="mt-5 border-y border-border py-3 text-[13px] text-muted-2">
              Par Claire Vasseur, directrice SEO. Sources : annonce Google Ads du
              12 octobre 2026, relevés Search Engine Land et données Essor sur
              11 comptes PME français e-commerçants (janvier à septembre 2026).
            </p>
          </header>
        </Reveal>

        <div className="article-prose mt-10 pb-10">
          <h2 id="changement">Que change la détection automatique de promotions sur un site marchand ?</h2>
          <p>
            La fonctionnalité Détection automatique de promotions, annoncée par Google
            Ads le 12 octobre 2026, inverse la logique installée depuis 2018. Jusqu&apos;à
            cette date, un annonceur devait saisir à la main chaque extension de
            promotion : code, remise, dates, produits éligibles. Désormais, le crawler
            de Google parcourt les pages produits et les bandeaux marketing, extrait les
            offres identifiées comme actives et les attache aux annonces Search et aux
            campagnes Performance Max éligibles. Sur un panel de 11 comptes PME e-commerçants
            Essor suivis depuis janvier 2026, les promotions manuelles couvraient en moyenne
            3,4 offres actives à tout moment. L&apos;automatisation vise à combler l&apos;écart
            avec les offres réellement publiées sur le site, souvent 2 à 3 fois plus
            nombreuses faute de temps dédié à l&apos;extension.
          </p>

          <h2 id="detection">Comment Google Ads identifie les offres sur votre boutique ?</h2>
          <p>
            La détection repose sur trois signaux croisés documentés dans l&apos;annonce
            du 12 octobre. Premier signal : le flux Merchant Center quand il porte les
            attributs sale_price et sale_price_effective_date, c&apos;est la source la
            plus fiable car structurée. Deuxième signal : le crawl des pages produits
            avec extraction du prix barré, du pourcentage de remise et de la date de fin
            quand elle apparaît. Troisième signal : les bandeaux promotionnels présents
            en page d&apos;accueil ou en catégorie, détectés par analyse textuelle
            (patterns « -20 % », « code BLACK10 », « jusqu&apos;au 31 octobre »). Sur
            18 sites Essor audités en septembre 2026, 42 % portaient au moins un bandeau
            promotionnel oublié depuis plus de 30 jours. Dans l&apos;ancienne mécanique
            manuelle, ces oublis restaient invisibles côté Google Ads ; dans la nouvelle,
            ils peuvent devenir une extension servie à chaque enchère.
          </p>

          <h2 id="campagnes">Quelles campagnes et quels formats sont concernés ?</h2>
          <p>
            Le périmètre annoncé couvre les campagnes Search standard, les Dynamic Search
            Ads (DSA) et Performance Max, pour les comptes avec un flux Merchant Center
            valide et au moins 60 jours d&apos;historique de conversion. Les campagnes
            Shopping standard sans flux PMax, Demand Gen, Discovery héritées, App et
            Vidéo autonomes restent exclues au lancement. Côté format, la promotion
            détectée apparaît sous l&apos;annonce principale avec le code, la remise et
            la date de fin, comme une extension classique. L&apos;espace servi est
            partagé avec les autres assets : callouts, snippets structurés, sitelinks.
            Sur 11 comptes PME français mesurés en 2026, l&apos;ajout d&apos;une
            extension promotion fait progresser le CTR de 8 à 14 % quand elle est
            pertinente, mais déclenche jusqu&apos;à 22 % de clics non convertis quand
            l&apos;offre affichée ne correspond plus au prix vu en page produit.
          </p>

          <table>
            <thead>
              <tr>
                <th scope="col">Type de campagne</th>
                <th scope="col">Détection automatique</th>
                <th scope="col">Seuil d&apos;activation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Search standard</td>
                <td>Oui, par défaut</td>
                <td>60 jours d&apos;historique, 30 conv./30 j</td>
              </tr>
              <tr>
                <td>Dynamic Search Ads</td>
                <td>Oui, par défaut</td>
                <td>Flux URL ou catégories actif</td>
              </tr>
              <tr>
                <td>Performance Max</td>
                <td>Oui, par défaut si Merchant Center lié</td>
                <td>60 jours, 30 conv./30 j</td>
              </tr>
              <tr>
                <td>Shopping standard, Demand Gen, Discovery</td>
                <td>Non au lancement</td>
                <td>Pas de date communiquée</td>
              </tr>
            </tbody>
          </table>

          <div className="callout">
            <span className="callout-label">À retenir</span>
            <p>
              Depuis le 12 octobre 2026, Search et Performance Max servent par défaut
              des extensions de promotion détectées sur votre site. Désactivation au
              niveau du compte, effet sous 48 heures.
            </p>
          </div>

          <h2 id="protocole">Quel protocole en 4 étapes pour tester sans brûler sa marge ?</h2>
          <p>
            Le protocole Essor appliqué sur les 3 comptes qui ont activé la bêta
            septembre 2026 tient en 4 étapes mesurables. Étape 1, inventaire des
            promotions actives sur le site : lister chaque code, chaque bandeau, chaque
            prix barré, avec la date de fin et la marge du produit concerné. Étape 2,
            nettoyage du site : retirer les offres expirées, les codes désactivés en
            back-office, les bandeaux saisonniers oubliés (sur 18 audits, 42 % des
            sites portaient au moins un oubli). Étape 3, activation sur un sous-ensemble
            de campagnes à marge confortable (plus de 35 %) pendant 14 jours, en gardant la
            détection désactivée sur les campagnes à marge courte. Étape 4, bascule
            progressive : chaque semaine, ajouter une campagne au périmètre si la
            marge nette observée dépasse le seuil cible, retirer sinon.
          </p>

          <h2 id="surveillance">Comment surveiller l&apos;impact sur le coût par acquisition ?</h2>
          <p>
            La surveillance passe par trois indicateurs vérifiables dans Google Ads et
            dans votre back-office e-commerce, à relever chaque semaine pendant les
            6 premières semaines. Indicateur 1 : taux d&apos;utilisation du code
            promotionnel sur les conversions attribuées, un écart supérieur à 15 %
            entre le code servi par Google Ads et le code appliqué en caisse signale
            une confusion client. Indicateur 2 : marge nette par conversion, calculée
            hors remise effective et hors coût média, à comparer au mois précédent sur
            le même mix produit. Indicateur 3 : taux de clics non convertis sur annonces
            portant la promotion, un taux supérieur à 18 % trahit souvent une offre
            affichée disparue à l&apos;arrivée sur la page produit. Sur 3 comptes bêta
            Essor, la fuite médiane constatée atteignait 11 % du budget hebdomadaire.
          </p>

          <h2 id="decision">Faut-il désactiver immédiatement ou attendre les premiers signaux ?</h2>
          <p>
            La règle Essor dépend de la marge brute du compte et de la rigueur
            opérationnelle du site. Trois profils se dessinent sur les 11 comptes
            suivis. Profil 1, marge brute sous 25 % et site avec bandeaux promotionnels
            fréquents : désactivation immédiate recommandée, le temps d&apos;installer
            un cycle de vérification hebdomadaire des promotions actives. Profil 2,
            marge brute entre 25 et 40 % : conservation du périmètre par défaut sur
            Search uniquement, exclusion manuelle de Performance Max pendant 30 jours
            pour mesurer l&apos;écart avant d&apos;étendre. Profil 3, marge brute
            supérieure à 40 % avec flux Merchant Center propre et promotions saisies
            en back-office : laisser actif sur tout le périmètre, surveiller le rapport
            Promotions détectées chaque lundi. Concession honnête : avec moins de
            500 conversions mensuelles, aucun des 3 indicateurs ne produit de signal
            statistique exploitable, le réglage reste au jugé.
          </p>

          <p>
            Pour aller plus loin : notre offre de{" "}
            <Link href="/agence-sea">gestion Google Ads</Link> couvre le paramétrage
            et la surveillance hebdomadaire, l&apos;article{" "}
            <Link href="/blog/performance-max-ou-shopping">
              Performance Max ou Shopping
            </Link>{" "}
            détaille les garde-fous spécifiques à PMax, et l&apos;article{" "}
            <Link href="/blog/budget-google-ads-rentable">
              quel budget Google Ads pour être rentable
            </Link>{" "}
            explique le seuil de conversions sous lequel ces réglages restent
            statistiquement muets. Un avis gratuit sur votre configuration est
            disponible via la <Link href="/contact">page audit</Link>.
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
                  Un audit de vos campagnes avant d&apos;activer.
                </h2>
                <p className="mt-2 max-w-md text-[14px] text-muted">
                  Envoyez l&apos;accès lecture à votre compte Google Ads : nous
                  listons les promotions détectables, la marge par ligne, et le
                  périmètre à activer sans fuite.
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
