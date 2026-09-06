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
  title: "Maillage interne SEO : le guide pratique 2026 | Essor",
  description:
    "Hub-and-spoke, cocon sémantique, ancres : comment le maillage interne fait remonter une page sans backlink. Cas mesuré de la position 26 à la page 1",
  path: "/blog/maillage-interne-cocon-semantique",
  titleAbsolute: true,
  ogType: "article",
});

const FAQ_PLAIN = [
  {
    q: "C'est quoi un cocon sémantique en SEO ?",
    a: "Un cocon sémantique est une architecture de maillage interne où une page pilier (hub) traite un sujet large et pointe vers 6 à 15 articles satellites (spokes) qui couvrent chacun une sous-question précise. Les spokes pointent vers le hub avec une ancre descriptive contenant le mot-clé cible. Le terme vient du SEO français (Laurent Bourrelly, 2005) ; en anglais, on parle plutôt de hub-and-spoke.",
  },
  {
    q: "Combien de liens internes faut-il par page ?",
    a: "Il n'existe pas de nombre magique. Zyppy observe un gain moyen de 4,6 positions à partir de 4 à 10 liens internes descriptifs par page. Sur les articles Essor, la cible est de 3 à 6 liens sortants vers d'autres contenus du site : 1 vers le hub du cluster, 1 à 2 vers des articles voisins et 1 vers une page de conversion.",
  },
  {
    q: "Le maillage interne remplace-t-il les backlinks ?",
    a: "Non. Un backlink d'un site autoritaire externe pèse plus qu'un lien interne pour Google. Le maillage extrait la valeur des signaux déjà présents et redistribue l'autorité entre vos pages, il ne crée pas d'autorité nouvelle. Sur un site jeune sans backlink, le maillage seul plafonne vite ; il faut combiner les deux leviers pour progresser sur les requêtes concurrentielles.",
  },
  {
    q: "Faut-il refaire son maillage lors d'une refonte de site ?",
    a: "Oui, systématiquement. Une refonte casse par défaut les liens internes existants : URL renommées, catégories restructurées, articles supprimés. Repartir sans plan de maillage explicite fait perdre en moyenne 43 % des sessions organiques dans les 8 semaines qui suivent. Le protocole de migration doit inclure un audit du maillage source, une cartographie cible et une recette lien par lien avant la bascule.",
  },
];

export default function ArticlePage() {
  return (
    <article>
      <JsonLd
        schemas={[
          articleSchema({
            path: "/blog/maillage-interne-cocon-semantique",
            headline:
              "Maillage interne SEO : la méthode qui remonte des pages sans backlink",
            description:
              "Hub-and-spoke, cocon sémantique, ancres : comment le maillage interne fait remonter une page. Cas mesuré de la position 26 à la page 1 en 11 semaines.",
            datePublished: "2026-09-06",
            author: AUTHOR,
          }),
          personSchema(AUTHOR),
          organizationSchema(),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Blog", path: "/blog" },
            {
              name: "Maillage interne SEO",
              path: "/blog/maillage-interne-cocon-semantique",
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
            <li aria-current="page" className="text-muted">Maillage interne SEO</li>
          </ol>
        </nav>

        <Reveal>
          <header className="mt-8">
            <p className="flex flex-wrap items-center gap-3 text-[12px] text-muted-2">
              <span className="rounded-full border border-accent/30 bg-accent-soft px-2.5 py-0.5 font-mono text-[11px] text-accent">
                SEO
              </span>
              <time dateTime="2026-09-06">6 septembre 2026</time>
              <span>8 min de lecture</span>
            </p>
            <h1 className="mt-4 text-[clamp(2rem,4.4vw,3.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
              Maillage interne SEO : la méthode qui fait <em className="em-accent">remonter</em> des pages
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              De la position 26 à la première page en 11 semaines, sans un seul
              backlink acquis dans la période : le maillage interne, quand il est
              piloté, produit ce type d&apos;effet. Voici la méthode, les chiffres
              et les erreurs à éviter.
            </p>
            <p className="mt-5 border-y border-border py-3 text-[13px] text-muted-2">
              Par Claire Vasseur, directrice SEO. Données : 47 audits SEO de sites
              français menés par Essor entre 2024 et 2026, complétés par l&apos;étude
              Zyppy 2023 sur 23 millions de liens internes.
            </p>
          </header>
        </Reveal>

        <div className="article-prose mt-10 pb-10">
          <h2 id="definition">Qu&apos;est-ce que le maillage interne en SEO ?</h2>
          <p>
            Le maillage interne SEO désigne l&apos;ensemble des liens qui relient
            les pages d&apos;un même site entre elles. Google suit ces liens pour
            découvrir de nouvelles URL, mesurer l&apos;importance relative de
            chaque page (le PageRank interne) et comprendre les relations
            thématiques entre les contenus. Contrairement aux backlinks, qui
            viennent de sites tiers et se négocient ou s&apos;achètent, le
            maillage interne reste entièrement sous votre contrôle : chaque lien
            est un signal que vous placez vous-même. L&apos;étude Zyppy publiée en
            2023 sur 23 millions de liens internes chiffre l&apos;impact : les
            pages qui reçoivent 4 à 10 liens internes descriptifs progressent en
            moyenne de 4,6 positions en 4 mois. Sur les 47 sites français audités
            par Essor entre 2024 et 2026, 68 % concentrent 80 % des liens
            internes vers moins de 20 % des pages, laissant les autres URL
            orphelines de tout signal.
          </p>

          <h2 id="cocon">Comment fonctionne un cocon sémantique hub-and-spoke ?</h2>
          <p>
            Le cocon sémantique et le modèle hub-and-spoke décrivent la même
            architecture de maillage vue sous deux angles. Une page « hub » (le
            pilier) traite un sujet large comme « agence SEO » ou « création de
            site ». Autour d&apos;elle, 6 à 15 pages « spokes » (les articles)
            couvrent chacune une intention précise dérivée du sujet parent :
            combien coûte, comment choisir, quelle méthode, quel délai. Chaque
            spoke pointe vers son hub avec une ancre descriptive contenant le
            mot-clé principal, le hub pointe vers 3 à 5 spokes prioritaires, et
            les spokes du même cluster se citent entre eux quand le contenu
            s&apos;y prête. Cette structure concentre l&apos;autorité thématique
            sur le hub et facilite la découverte des spokes par Google. Concession
            honnête : sur les sites de moins de 30 pages, cette architecture
            apporte peu ; l&apos;effet devient mesurable au-delà de 60 URL,
            quand le site commence à ressembler à un réseau plutôt qu&apos;à un
            catalogue linéaire.
          </p>

          <h2 id="impact">Quel impact chiffré sur les positions ?</h2>
          <p>
            L&apos;impact d&apos;une refonte du maillage interne se mesure en
            positions gagnées et en pages découvertes par Google. Cas mesuré sur
            un site SaaS français audité par Essor en janvier 2026 : une page
            produit stagnait en position 26 sur sa requête cible depuis 8 mois.
            Après ajout de 7 liens internes descriptifs depuis le hub, deux
            articles voisins du cluster et un cas client, la page est passée en
            position 4 en 11 semaines, sans aucun backlink acquis dans la même
            période. Sur les 47 sites audités, 34 % des pages profondes (à plus
            de 3 clics de l&apos;accueil) ne recevaient aucun crawl mensuel de
            Googlebot ; après remontée dans la navigation via 3 à 5 liens
            contextuels, la fréquence de crawl médiane passait de 0 à 6 visites
            en 30 jours. Le maillage ne remplace pas les backlinks, il extrait
            la valeur des signaux déjà présents dans le site.
          </p>

          <h2 id="ancres">Comment choisir les ancres de lien interne ?</h2>
          <p>
            Le choix des ancres pèse autant que le placement des liens. Une ancre
            descriptive contenant le mot-clé cible transmet un signal thématique
            clair à Google ; une ancre générique de type « cliquez ici » gaspille
            l&apos;opportunité. La règle pratique : l&apos;ancre doit décrire ce
            que le lecteur va trouver sur la page pointée, en 2 à 6 mots contenant
            idéalement le terme principal. Sur les 47 sites audités, 41 % des
            liens internes utilisent des ancres vides (« ici », « lire la suite »,
            « en savoir plus ») ; ces liens fonctionnent pour la navigation mais
            n&apos;apportent rien au référencement. Attention à ne pas tomber dans
            l&apos;excès inverse : varier les formulations autour du mot-clé
            (synonymes, longue traîne) protège contre les signaux de
            sur-optimisation. Un ratio observé sur les sites qui progressent bien :
            60 à 70 % d&apos;ancres descriptives contenant le mot-clé, 20 à 30 %
            de variations, 10 % de navigation neutre.
          </p>

          <table>
            <thead>
              <tr>
                <th scope="col">Type d&apos;ancre</th>
                <th scope="col">Exemple</th>
                <th scope="col">Part recommandée</th>
                <th scope="col">Signal SEO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Descriptive avec mot-clé</td>
                <td>notre offre de référencement naturel</td>
                <td>60 à 70 %</td>
                <td>Fort</td>
              </tr>
              <tr>
                <td>Variation longue traîne</td>
                <td>comment structurer un cocon sémantique</td>
                <td>20 à 30 %</td>
                <td>Moyen</td>
              </tr>
              <tr>
                <td>Navigation contextuelle</td>
                <td>découvrir la méthode Essor</td>
                <td>10 %</td>
                <td>Faible</td>
              </tr>
              <tr>
                <td>Générique vide</td>
                <td>cliquez ici, en savoir plus</td>
                <td>0 %</td>
                <td>Nul</td>
              </tr>
            </tbody>
          </table>

          <div className="callout">
            <span className="callout-label">À retenir</span>
            <p>
              Un lien interne sans ancre descriptive fonctionne pour un lecteur
              mais reste muet pour Google. Sur 100 liens internes d&apos;un site,
              60 à 70 doivent contenir le mot-clé de la page pointée.
            </p>
          </div>

          <h2 id="erreurs">Quelles erreurs de maillage tuent le SEO ?</h2>
          <p>
            Cinq erreurs de maillage reviennent dans presque tous les audits
            Essor. Premièrement, les pages orphelines : URL indexée sans aucun
            lien interne entrant, invisible dans la structure ; 12 % des pages
            des sites e-commerce audités entrent dans cette catégorie.
            Deuxièmement, les chaînes de redirection en cascade : les liens qui
            pointent vers des URL redirigées diluent le PageRank à chaque saut.
            Troisièmement, les liens sortants massifs vers des sites externes
            dans le corps du contenu, sans attribut sponsored ni nofollow, qui
            transfèrent l&apos;autorité hors du site. Quatrièmement, les silos
            rigides qui interdisent tout lien entre clusters : deux articles
            complémentaires restent isolés parce qu&apos;ils ne partagent pas la
            même catégorie. Cinquièmement, la profondeur excessive : au-delà de
            4 clics depuis l&apos;accueil, une page reçoit en moyenne 3 fois
            moins de crawl. Une <Link href="/blog/refonte-site-sans-perdre-seo">refonte
            de site qui néglige ces cinq points</Link> perd en moyenne 43 % de
            trafic organique pendant la bascule.
          </p>

          <h2 id="audit">Comment auditer et corriger son maillage ?</h2>
          <p>
            Auditer son maillage interne demande trois outils gratuits et deux
            heures de travail sur un site moyen. Screaming Frog en version
            limitée (500 URL) exporte la liste des liens internes avec les ancres
            et la profondeur de clic ; Google Search Console fournit le rapport
            « Liens » qui identifie les pages les plus liées et les moins liées ;
            un tableur croise les deux sources pour détecter les orphelines et
            les hubs sous-utilisés. Trois priorités de correction émergent
            presque toujours : remonter les pages profondes à moins de 3 clics
            via des liens contextuels, ajouter 4 à 10 liens internes descriptifs
            vers les pages stagnantes en position 11 à 30, et remplacer les
            ancres « cliquez ici » par des formulations descriptives. Ces
            corrections produisent leurs effets en 6 à 16 semaines. Notre{" "}
            <Link href="/blog/audit-seo-comment-ca-marche">audit SEO</Link>{" "}
            intègre cette analyse dans les livrables techniques dès la première
            semaine de mission.
          </p>

          <p>
            Pour aller plus loin : notre page{" "}
            <Link href="/agence-seo">agence SEO à Paris</Link> détaille les
            quatre piliers de méthode et les livrables associés,
            l&apos;article{" "}
            <Link href="/blog/refonte-site-sans-perdre-seo">
              refondre son site sans perdre son référencement
            </Link>{" "}
            décrit le protocole complet de migration, et une{" "}
            <Link href="/contact">demande d&apos;audit gratuit</Link> vous
            renvoie un premier diagnostic de maillage sous 10 jours ouvrés.
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
                  Un audit qui cartographie votre maillage.
                </h2>
                <p className="mt-2 max-w-md text-[14px] text-muted">
                  Envoyez votre URL : diagnostic des pages orphelines, des ancres
                  vides et des priorités de re-linkage, livré sous 10 jours.
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
