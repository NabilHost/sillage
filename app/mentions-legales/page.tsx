import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";

export const metadata = generatePageMetadata({
  title: "Mentions légales",
  description: "Mentions légales du site agence-essor.fr : éditeur, hébergeur, données personnelles.",
  path: "/mentions-legales",
  noindex: true,
});

export default function MentionsLegalesPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-20 md:px-8 md:py-28 lg:px-12">
      <nav aria-label="Fil d'Ariane">
        <ol className="flex flex-wrap items-center gap-2 text-[12.5px] text-muted-2">
          <li><Link href="/" className="transition-colors hover:text-text">Accueil</Link></li>
          <li aria-hidden>/</li>
          <li aria-current="page" className="text-muted">Mentions légales</li>
        </ol>
      </nav>

      <h1 className="mt-8 text-4xl font-extrabold tracking-tight">Mentions légales</h1>

      <div className="article-prose mt-10">
        <h2>Éditeur du site</h2>
        <p>
          Essor Agence SAS, capital de 10 000 €, RCS Paris 000 000 000.
          <br />
          Siège social : 14 rue du Sentier, 75002 Paris.
          <br />
          Directeur de la publication : Nabil Brahim.
          <br />
          Contact : bonjour@agence-essor.fr, 01 45 00 00 00.
        </p>
        <h2>Hébergement</h2>
        <p>
          Site hébergé par [votre hébergeur, ex. Vercel Inc., 440 N Barranca Ave #4133,
          Covina, CA 91723, USA].
        </p>
        <h2>Données personnelles</h2>
        <p>
          Les données transmises via le formulaire de contact servent uniquement à
          traiter votre demande. Elles ne sont ni cédées ni utilisées à des fins de
          prospection sans votre accord. Conformément au RGPD, vous pouvez exercer vos
          droits d&apos;accès, de rectification et de suppression en écrivant à
          bonjour@agence-essor.fr.
        </p>
        <h2>Cookies</h2>
        <p>
          Ce site n&apos;utilise aucun cookie publicitaire. La mesure d&apos;audience,
          si activée, repose sur une solution exemptée de consentement au sens des
          recommandations de la CNIL (Plausible).
        </p>
        <p>
          <em>Document à compléter avec vos informations légales réelles avant mise en production.</em>
        </p>
      </div>
    </article>
  );
}
