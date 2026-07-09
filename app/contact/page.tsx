import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { HeroSpotlight } from "@/components/animations/hero-spotlight";
import { Reveal } from "@/components/animations/reveal";
import { DoubleBezelCard, CardGlow } from "@/components/marketing/double-bezel-card";
import { ContactForm } from "@/components/contact/contact-form";
import { SITE } from "@/lib/site";

export const metadata = generatePageMetadata({
  title: "Contact : demander un audit gratuit | Sillage",
  description:
    "Demandez un audit SEO, Google Ads ou de citabilité IA. Réponse sous 48 h ouvrées, premier livrable sous 10 jours. Sillage, 14 rue du Sentier, Paris 2e",
  path: "/contact",
  titleAbsolute: true,
});

export default function ContactPage() {
  return (
    <article>
      <JsonLd
        schemas={[
          breadcrumbSchema([
            { name: "Accueil", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />

      <nav aria-label="Fil d'Ariane" className="mx-auto max-w-7xl px-4 pt-6 md:px-8 md:pt-10 lg:px-12">
        <ol className="flex flex-wrap items-center gap-2 text-[12.5px] text-muted-2">
          <li><Link href="/" className="transition-colors hover:text-text">Accueil</Link></li>
          <li aria-hidden>/</li>
          <li aria-current="page" className="text-muted">Contact</li>
        </ol>
      </nav>

      <HeroSpotlight>
        <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-24 pt-8 md:grid-cols-[1fr_1.3fr] md:px-8 md:pt-12 lg:px-12">
          <div>
            <Reveal>
              <h1 className="text-[clamp(2.2rem,4.6vw,3.5rem)] font-extrabold leading-[1.04] tracking-[-0.03em]">
                Dites-nous où vous voulez être <em className="em-accent">trouvé</em>.
              </h1>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
                Une URL et trois lignes de contexte suffisent. Réponse sous 48 h
                ouvrées. Si un audit se justifie, premier livrable sous 10 jours.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <DoubleBezelCard className="relative mt-8 overflow-hidden">
                <CardGlow position="bottom-left" />
                <div className="relative space-y-3 text-[14px] text-muted">
                  <p>
                    <strong className="text-text">Sillage</strong>
                    <br />
                    {SITE.street}, {SITE.zip} {SITE.city}
                  </p>
                  <p>
                    <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-accent">{SITE.email}</a>
                    <br />
                    <a href={`tel:${SITE.phone}`} className="transition-colors hover:text-accent">{SITE.phoneDisplay}</a>
                  </p>
                  <p className="text-[12.5px] text-muted-2">Du lundi au vendredi, 9 h à 18 h 30.</p>
                </div>
              </DoubleBezelCard>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="rounded-3xl border border-border bg-bg-2 p-6 md:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </HeroSpotlight>
    </article>
  );
}
