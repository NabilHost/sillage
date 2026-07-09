# Sillage — Site agence SEO / SEA / Sites / GEO

Next.js 16 (App Router, Turbopack) + Tailwind CSS v4 (`@theme`) + Framer Motion 12.
Construit selon le socle CLAUDE-STARTER (design system obsidian, animations, SEO/GEO, anti-patterns).

## Démarrer

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
```

Env vars (optionnelles en dev) : `RESEND_API_KEY` (envoi email du formulaire), `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`.

## Design system

- Palette : obsidian `#0A0A0A` / `#111` / `#161616`, accent orange brûlé `#FF6B35`, tokens dans `app/globals.css` (`@theme`).
- Fonts : Bricolage Grotesque (display) + Fraunces italic (emphase, max 3-5 mots/page) + JetBrains Mono (chiffres), via `next/font`.
- Animations (`components/animations/`) : `Reveal` (blur + y, rejoue à chaque navigation), `Stagger`, `Counter` (easeOutQuart + BFCache `pageshow`), `TiltCard` (6° max), `MagneticButton` (facteur 0.3), `HeroSpotlight` (radial suit le curseur), `SparklineLive`.
- Marketing (`components/marketing/`) : nav pill desktop avec dropdown contrôlé, header mobile sticky + menu fullscreen, FAQ accordion (contenu toujours dans le DOM, `+` qui rotate en `×`), `DoubleBezelCard`, marquee références, palette ⌘K (cmdk), sticky mobile CTA.

## SEO / GEO en place

- Métadonnées par page via `lib/seo.ts` (`generatePageMetadata`, titleAbsolute).
- Schemas via `lib/schema.ts` : ProfessionalService (@id stable), Service+Offer, Article+Person (auteur nommé avec sameAs), BreadcrumbList, FAQPage. Injectés en JSON-LD server-side.
- Chaque H2 stratégique est suivi d'un passage autonome de 134-167 mots + callout « À retenir » (citabilité IA).
- `app/robots.ts` : tous les bots IA autorisés (GPTBot, ClaudeBot, PerplexityBot…). `app/sitemap.ts` avec priorités. `public/llms.txt` conforme spec (blockquote, URLs absolues, section Optional).
- Formulaire : React Hook Form + Zod, honeypot `_hp`, API `/api/audit` avec rate-limit 5 req/min/IP, échappement HTML, Resend.
- Headers sécurité (HSTS, CSP, nosniff…) dans `next.config.ts`.

## À personnaliser avant prod

1. `lib/site.ts` : domaine, marque, coordonnées (tout suit : canonicals, sitemap, JSON-LD, llms.txt à aligner).
2. Chiffres, cas clients, équipe : contenus d'exemple plausibles, à remplacer par vos données réelles.
3. `RESEND_API_KEY` + domaine vérifié chez Resend (DKIM/SPF).
4. `app/mentions-legales/page.tsx` : RCS, hébergeur.
5. OG image : ajouter `app/opengraph-image.tsx` (next/og) ou un PNG 1200×630.
6. Post-launch : Search Console + Bing, soumettre sitemap, test 5 URLs sur validator.schema.org, test `curl -A GPTBot` → 200.

## Anti-patterns respectés (§3.2 du starter)

Pas d'em-dash séparateur, pas de triplet font-mono+uppercase+tracking en eyebrow (eyebrows en `text-[11.5px] text-muted-2` lowercase), Fraunces italic ≤ 5 occurrences/page, pas de buzzwords, chiffres partout, concessions honnêtes dans la copy.
