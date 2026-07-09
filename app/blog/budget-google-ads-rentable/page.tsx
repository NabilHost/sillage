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
import { CplBarChart } from "@/components/viz/cpl-bar-chart";

export const metadata = generatePageMetadata({
  title: "Quel budget Google Ads pour être rentable ? Le calcul | Sillage",
  description:
    "Budget Google Ads minimum : la formule (CPC × 100 clics × taux de conversion), les CPC réels par secteur en France 2026, et le seuil sous lequel ne pas déléguer",
  path: "/blog/budget-google-ads-rentable",
  titleAbsolute: true,
  ogType: "article",
});

const FAQ_PLAIN = [
  {
    q: "Quel budget Google Ads minimum pour commencer ?",
    a: "Comptez au moins 100 clics par cycle de décision pour obtenir des données exploitables. Avec un CPC moyen de 2 € en B2C, cela donne environ 1 000 € par mois de budget média ; en B2B où les CPC atteignent 4 à 8 €, comptez 1 500 à 2 500 €. En dessous, les campagnes n'accumulent jamais assez de signal pour que les enchères automatiques apprennent.",
  },
  {
    q: "À partir de quel budget déléguer à une agence ?",
    a: "À partir d'environ 2 000 € par mois de budget média. En dessous, des honoraires de gestion de 1 200 € représenteraient 60 % de la dépense : mieux vaut un paramétrage initial en une fois que vous pilotez ensuite vous-même. C'est ce que nous proposons dans ce cas.",
  },
  {
    q: "Faut-il payer l'agence au pourcentage du budget ?",
    a: "Nous le déconseillons : facturer 15 % du budget dépensé récompense l'agence qui dépense plus, pas celle qui dépense mieux. Un compte optimisé qui passe de 10 000 à 6 000 € par mois pour le même volume de leads ferait baisser la rémunération de l'agence au pourcentage : le conflit d'intérêts est structurel. Les honoraires fixes alignent les intérêts.",
  },
  {
    q: "Combien de temps avant que les campagnes soient rentables ?",
    a: "Avec un tracking propre dès le départ : 4 à 8 semaines pour atteindre le régime de croisière sur le Search, davantage pour PMax qui a besoin de volume de conversion. Le premier mois sert à acheter des données, pas de la rentabilité immédiate. Un compte repris avec un historique sain converge plus vite qu'un compte neuf.",
  },
];

export default function ArticlePage() {
  return (
    <article>
      <JsonLd
        schemas={[
          articleSchema({
            path: "/blog/budget-google-ads-rentable",
            headline: "Quel budget Google Ads pour être rentable ? La méthode de calcul",
            description:
              "La formule du budget minimum, les CPC réels par secteur en France 2026, et le seuil en dessous duquel il ne faut pas déléguer la gestion.",
            datePublished: "2026-06-25",
          }),
          personSchema(),
          organizationSchema(),
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: "Budget Google Ads rentable", path: "/blog/budget-google-ads-rentable" },
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
            <li aria-current="page" className="text-muted">Budget Google Ads</li>
          </ol>
        </nav>

        <Reveal>
          <header className="mt-8">
            <p className="flex flex-wrap items-center gap-3 text-[12px] text-muted-2">
              <span className="rounded-full border border-accent/30 bg-accent-soft px-2.5 py-0.5 font-mono text-[11px] text-accent">
                Google Ads
              </span>
              <time dateTime="2026-06-25">25 juin 2026</time>
              <span>7 min de lecture</span>
            </p>
            <h1 className="mt-4 text-[clamp(2rem,4.4vw,3.2rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
              Quel budget Google Ads pour être <em className="em-accent">rentable</em> ?
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              La question n&apos;a pas de réponse universelle, mais elle a une formule.
              La voici, avec les CPC réels par secteur et le seuil en dessous duquel
              déléguer est une erreur.
            </p>
            <p className="mt-5 border-y border-border py-3 text-[13px] text-muted-2">
              Par Nabil Brahim, directeur de Sillage. 10 ans de gestion Google Ads,
              plus de 5 M€ générés pour nos clients. Données CPC : comptes gérés,
              premier semestre 2026.
            </p>
          </header>
        </Reveal>

        <div className="article-prose mt-10 pb-10">
          <h2 id="formule">Comment calculer son budget minimum ?</h2>
          <p>
            Le budget Google Ads minimum se calcule à partir de trois nombres que vous
            possédez déjà. Premier nombre : le CPC moyen de votre secteur, entre 1 et
            8 € en France selon la concurrence. Deuxième nombre : le volume de clics
            nécessaire pour apprendre, environ 100 clics par ensemble d&apos;annonces
            et par cycle avant de pouvoir juger. Troisième nombre : votre taux de
            conversion attendu, généralement 2 à 5 % sur un site correct. La formule :
            budget mensuel minimum = CPC × 100 clics × nombre d&apos;ensembles
            d&apos;annonces actifs. Un artisan local à 1,50 € de CPC avec deux
            ensembles démarre à 300 € par mois ; un éditeur SaaS B2B à 6 € de CPC avec
            quatre ensembles a besoin de 2 400 €. En dessous de ce seuil, les enchères
            automatiques n&apos;accumulent jamais assez de conversions pour sortir de
            leur phase d&apos;apprentissage.
          </p>

          <div className="callout">
            <span className="callout-label">Formule</span>
            <p>Budget minimum mensuel = CPC secteur × 100 clics × ensembles d&apos;annonces actifs.</p>
          </div>

          <h2 id="cpc">Quels sont les CPC réels par secteur en 2026 ?</h2>
          <p>
            Les CPC français varient du simple au quintuple selon le secteur, et les
            moyennes publiées par les outils sous-estiment souvent les requêtes
            réellement transactionnelles. Sur les comptes que nous gérons, au premier
            semestre 2026 : l&apos;e-commerce généraliste paie 0,80 à 1,80 € le clic
            Shopping, l&apos;artisanat et les services locaux 1,20 à 2,50 € sur le
            Search, la formation professionnelle 3 à 6 €, le logiciel B2B 4 à 8 €, et
            les secteurs juridique ou assurance dépassent régulièrement 10 € sur les
            requêtes de fond de tunnel. Ces écarts changent tout au calcul de
            rentabilité : un lead à 43 € est excellent en B2B industriel et
            catastrophique pour un panier moyen de 60 €. D&apos;où la règle : le CPC ne
            se juge jamais seul, toujours rapporté à la valeur client.
          </p>

          <table>
            <thead>
              <tr>
                <th scope="col">Secteur</th>
                <th scope="col">CPC constaté</th>
                <th scope="col">Levier dominant</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>E-commerce généraliste</td><td>0,80 à 1,80 €</td><td>Shopping / PMax</td></tr>
              <tr><td>Services locaux, artisanat</td><td>1,20 à 2,50 €</td><td>Search local</td></tr>
              <tr><td>Formation professionnelle</td><td>3 à 6 €</td><td>Search + remarketing</td></tr>
              <tr><td>Logiciel B2B</td><td>4 à 8 €</td><td>Search + Microsoft Ads</td></tr>
              <tr><td>Juridique, assurance</td><td>8 à 15 €</td><td>Search fond de tunnel</td></tr>
            </tbody>
          </table>

          <h2 id="fuites">Où part le budget quand un compte fuit ?</h2>
          <p>
            Sur les comptes que nous reprenons, 25 à 50 % du budget part dans quatre
            fuites récurrentes. Les requêtes larges non exclues : sans liste
            d&apos;exclusions entretenue, le mode large achète des clics sans rapport
            avec l&apos;offre. Les conversions comptées en double : un formulaire
            mesuré à la fois par la balise Google et par l&apos;import CRM fausse les
            enchères automatiques, qui optimisent alors sur un mensonge. La
            cannibalisation de la marque : PMax qui capte les recherches de votre
            propre nom achète des clients déjà acquis. Le Display par défaut : des
            emplacements d&apos;applications mobiles cliqués par erreur. La correction
            de ces quatre fuites explique l&apos;essentiel du résultat ci-dessous,
            obtenu à budget constant sur une mission industrie.
          </p>

          <figure className="my-8 rounded-2xl border border-border bg-bg-2 p-6">
            <CplBarChart />
          </figure>

          <h2 id="deleguer">Gérer soi-même ou déléguer ?</h2>
          <p>
            Le critère est arithmétique : les honoraires de gestion doivent rester
            sous 30 % de la valeur qu&apos;ils créent. En dessous de 2 000 € de budget
            média mensuel, des honoraires de 1 200 € représentent 60 % de la dépense
            publicitaire : aucune optimisation ne rattrape ce ratio, et nous refusons
            ces missions au profit d&apos;un paramétrage initial en une fois, que vous
            pilotez ensuite. Au-delà de 2 000 €, la question devient le coût
            d&apos;opportunité : les quatre fuites décrites plus haut coûtent
            typiquement 500 à 2 500 € par mois sur un compte non suivi, davantage que
            des honoraires fixes. Reste le modèle de facturation :{" "}
            <Link href="/agence-sea">notre position</Link> est constante, honoraires
            fixes et jamais de pourcentage du budget, parce que facturer au pourcentage
            récompense l&apos;agence qui dépense plus, pas celle qui dépense mieux.
          </p>

          <h2 id="repartition">Comment répartir le budget entre Search, Shopping et PMax ?</h2>
          <p>
            La répartition dépend du modèle, mais une règle tient sur tous nos
            comptes : sécuriser d&apos;abord la demande existante, explorer ensuite.
            Pour un e-commerce, cela donne 20 à 30 % sur le Search de marque et les
            requêtes produit exactes, 40 à 50 % sur Shopping et PMax alimentés par un
            flux propre, le reste en tests contrôlés. Pour du B2B et de la génération
            de leads, 60 à 70 % vont au Search sur les requêtes de fond de tunnel, 15 à
            20 % au remarketing, et Microsoft Ads récupère les campagnes rentables
            dupliquées à moindre CPC. Deux garde-fous valent pour tous : PMax ne doit
            jamais capter les recherches de votre propre marque sans exclusion
            explicite, et aucun levier d&apos;exploration ne mérite plus de 20 % du
            budget tant que le socle n&apos;a pas atteint son objectif de marge.
          </p>

          <p>
            Pour aller plus loin : notre page{" "}
            <Link href="/agence-sea">agence SEA</Link> détaille la reprise de compte,
            l&apos;article{" "}
            <Link href="/blog/cout-agence-seo-2026">combien coûte une agence SEO</Link>{" "}
            couvre le canal organique, et{" "}
            <Link href="/blog/ai-overviews-impact-seo">notre étude AI Overviews</Link>{" "}
            mesure le nouveau paysage des SERP.
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
                  Vos fuites, chiffrées en euros par mois.
                </h2>
                <p className="mt-2 max-w-md text-[14px] text-muted">
                  Audit de compte offert à partir de 2 000 € de budget média mensuel.
                </p>
              </div>
              <MagneticButton href="/contact">Faire auditer mon compte</MagneticButton>
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
