import Link from "next/link";
import { NAV_SERVICES, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-2">
      {/* Bandeau AI-readable */}
      <div className="border-b border-border/60">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4 md:px-8 lg:px-12">
          <p className="text-[13px] text-muted-2">
            Ce site est lisible par les moteurs IA. Résumé structuré pour les LLM :
          </p>
          <a
            href="/llms.txt"
            className="font-mono text-[12px] text-muted transition-colors hover:text-accent"
          >
            /llms.txt →
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 lg:px-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-baseline text-xl font-extrabold tracking-tight">
              essor
              <span aria-hidden className="ml-1 size-2 rounded-full bg-accent" />
            </Link>
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-muted">
              Agence d&apos;acquisition basée à Paris, au service de clients partout
              en France. SEO, Google Ads, création de sites et d&apos;applications,
              visibilité dans les moteurs IA.
            </p>
            <p className="mt-4 text-[13px] text-muted-2">
              {SITE.street}, {SITE.zip} {SITE.city}
              <br />
              <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-accent">
                {SITE.email}
              </a>
              <br />
              <a href={`tel:${SITE.phone}`} className="transition-colors hover:text-accent">
                {SITE.phoneDisplay}
              </a>
            </p>
          </div>

          <nav aria-label="Services">
            <p className="text-[11.5px] text-muted-2">services</p>
            <ul className="mt-3 space-y-2.5">
              {NAV_SERVICES.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-[14px] text-muted transition-colors hover:text-text">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Agence">
            <p className="text-[11.5px] text-muted-2">agence</p>
            <ul className="mt-3 space-y-2.5">
              <li><Link href="/a-propos" className="text-[14px] text-muted transition-colors hover:text-text">Méthode &amp; équipe</Link></li>
              <li><Link href="/blog" className="text-[14px] text-muted transition-colors hover:text-text">Blog</Link></li>
              <li><Link href="/contact" className="text-[14px] text-muted transition-colors hover:text-text">Contact</Link></li>
            </ul>
          </nav>

          <nav aria-label="Ressources">
            <p className="text-[11.5px] text-muted-2">ressources</p>
            <ul className="mt-3 space-y-2.5">
              <li><Link href="/contact" className="text-[14px] text-muted transition-colors hover:text-text">Audit gratuit</Link></li>
              <li><a href="/sitemap.xml" className="text-[14px] text-muted transition-colors hover:text-text">Plan du site</a></li>
              <li><Link href="/mentions-legales" className="text-[14px] text-muted transition-colors hover:text-text">Mentions légales</Link></li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
          <p className="text-[12.5px] text-muted-2">
            © {new Date().getFullYear()} Essor. Paris, France.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/company/agence-essor" rel="noopener" className="text-[12.5px] text-muted-2 transition-colors hover:text-text">LinkedIn</a>
            <a href="https://x.com/essor_agence" rel="noopener" className="text-[12.5px] text-muted-2 transition-colors hover:text-text">X</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
