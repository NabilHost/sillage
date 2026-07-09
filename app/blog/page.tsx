import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { Reveal } from "@/components/animations/reveal";
import { Stagger, StaggerItem } from "@/components/animations/stagger";
import { CardGlow } from "@/components/marketing/double-bezel-card";

export const metadata = generatePageMetadata({
  title: "Blog : SEO, Google Ads et visibilité IA | Sillage",
  description:
    "Analyses fondées sur nos données de mission : SEO, Google Ads, création de sites et citation par les moteurs IA. Pas de contenu de remplissage",
  path: "/blog",
  titleAbsolute: true,
});

const POSTS = [
  {
    href: "/blog/cout-agence-seo-2026",
    category: "SEO",
    date: "2026-07-02",
    dateDisplay: "2 juillet 2026",
    reading: "7 min",
    title: "Combien coûte une agence SEO en 2026 ? Grilles réelles et pièges",
    excerpt:
      "De 800 à 5 000 € HT par mois : la grille pratiquée en France, ce que cachent les écarts, et les cinq questions qui protègent votre budget.",
    wide: true,
  },
  {
    href: "/blog/budget-google-ads-rentable",
    category: "Google Ads",
    date: "2026-06-25",
    dateDisplay: "25 juin 2026",
    reading: "7 min",
    title: "Quel budget Google Ads pour être rentable ? La méthode de calcul",
    excerpt:
      "La formule du budget minimum, les CPC réels par secteur en 2026, et le seuil en dessous duquel il ne faut pas déléguer.",
    wide: false,
  },
  {
    href: "/blog/ai-overviews-impact-seo",
    category: "Visibilité IA",
    date: "2026-06-18",
    dateDisplay: "18 juin 2026",
    reading: "8 min",
    title: "AI Overviews : ce que 6 mois de données changent pour votre SEO",
    excerpt:
      "12 sites suivis depuis l'arrivée des AI Overviews en France. Baisse de clics réelle, pages qui résistent, et ce qui déclenche une citation.",
    wide: false,
  },
];

export default function BlogPage() {
  return (
    <article>
      <JsonLd
        schemas={[
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 pt-6 md:px-8 md:pt-10 lg:px-12">
        <nav aria-label="Fil d'Ariane">
          <ol className="flex flex-wrap items-center gap-2 text-[12.5px] text-muted-2">
            <li><Link href="/" className="transition-colors hover:text-text">Accueil</Link></li>
            <li aria-hidden>/</li>
            <li aria-current="page" className="text-muted">Blog</li>
          </ol>
        </nav>

        <Reveal>
          <h1 className="mt-8 max-w-2xl text-[clamp(2.2rem,4.8vw,3.7rem)] font-extrabold leading-[1.04] tracking-[-0.03em]">
            Des analyses, pas du <em className="em-accent">remplissage</em>.
          </h1>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Ce que nos données de mission nous apprennent sur le SEO, Google Ads et la
            citation par les moteurs IA. Un article quand nous avons quelque chose à
            dire, pas un par semaine pour nourrir un calendrier.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-3.5 pb-24 md:grid-cols-2">
          {POSTS.map((p) => (
            <StaggerItem key={p.href} className={p.wide ? "md:col-span-2" : ""}>
              <Link
                href={p.href}
                className="group relative block overflow-hidden rounded-3xl border border-border bg-bg-2 p-7 transition-colors duration-300 hover:border-accent/30 md:p-9"
              >
                <CardGlow position="top-right" />
                <div className="relative">
                  <p className="flex flex-wrap items-center gap-3 text-[12px] text-muted-2">
                    <span className="rounded-full border border-accent/30 bg-accent-soft px-2.5 py-0.5 font-mono text-[11px] text-accent">
                      {p.category}
                    </span>
                    <time dateTime={p.date}>{p.dateDisplay}</time>
                    <span>{p.reading} de lecture</span>
                  </p>
                  <h2 className="mt-4 max-w-2xl text-2xl font-bold leading-snug tracking-tight transition-colors duration-300 group-hover:text-accent md:text-3xl">
                    {p.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">{p.excerpt}</p>
                  <span
                    aria-hidden
                    className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-muted-2 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-text"
                  >
                    Lire l&apos;article <span>→</span>
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </article>
  );
}
