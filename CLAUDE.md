# CLAUDE.md — Projet Essor (reprise de contexte)

## Ce qu'est ce projet

Site de l'agence **Essor** (agence d'acquisition fictive-en-cours-de-lancement de Nabil Brahim, Paris) : SEO, Google Ads/SEA, création de sites, visibilité IA (GEO). Next.js 16 (App Router, Turbopack) + TypeScript + Tailwind CSS v4 (`@theme` dans `app/globals.css`, PAS de tailwind.config) + Framer Motion 12. Construit selon le socle `~/Workspace/web/helprospect/docs/templates/CLAUDE-STARTER.md` (design system obsidian #0A0A0A / accent orange #FF6B35, fonts Bricolage Grotesque + Fraunces italic + JetBrains Mono via next/font).

Le build local passe (`npm run build`). `npm run dev` fonctionne.

## État actuel — OÙ ON EN EST

- [x] Site complet : home animée, 4 pages pillar services, /a-propos, /contact, /blog + 3 articles, /mentions-legales, 404.
- [x] SEO/GEO : lib/seo.ts + lib/schema.ts (JSON-LD complets), sitemap.ts, robots.ts (bots IA autorisés), public/llms.txt, OG image dynamique, blocs réponse 134-167 mots partout.
- [x] Dépôt GitHub créé : **github.com/NabilHost/sillage** (vide, en Public — à passer en Private dans Settings si souhaité).
- [ ] **PROCHAINE ÉTAPE : pousser le code.** Le repo local a un commit sur `main`. Faire :
  `git remote add origin https://github.com/NabilHost/sillage.git && git add -A && git commit -m "site complet" && git push -u origin main`
  (l'utilisateur est connecté à GitHub dans Chrome ; pour le push terminal, l'authentification GitHub CLI ou le trousseau fera l'affaire — sinon `gh auth login`).
- [ ] Déployer sur **Vercel** (compte : nabilhosts-projects, déjà connecté dans Chrome) : importer le repo, ajouter env `RESEND_API_KEY`, Deploy. Détails complets dans `DEPLOY.md`.
- [ ] Après mise en ligne : checklist post-launch dans `DEPLOY.md` (Search Console, schema validator, curl GPTBot, domaine définitif).
- Le dossier `../sillage-upload/` est une copie temporaire pour un upload web GitHub : **supprimable** dès que le push terminal est fait.

## Conventions NON NÉGOCIABLES (héritées du starter, déjà appliquées partout)

- Copy française : PAS d'em-dash « — » séparateur, pas de buzzwords, chiffres partout, une concession honnête par page, max 1 mot en `<em className="em-accent">` par H1, apostrophes `&apos;` dans le JSX.
- Pas de triplet `font-mono uppercase tracking-[…]` en eyebrow (utiliser `text-[11.5px] text-muted-2`).
- Chaque page : metadata via `generatePageMetadata` (lib/seo.ts), 3-5 schemas JSON-LD via lib/schema.ts, breadcrumb.
- Chaque H2 stratégique : passage autonome de 134-167 mots avec donnée chiffrée (citabilité IA).
- Animations : composants de `components/animations/` uniquement (Reveal, Stagger, Counter, TiltCard, MagneticButton, HeroSpotlight), transform/opacity, ease [0.16,1,0.3,1].
- FAQ : composant `components/marketing/faq.tsx` + data en constante `FAQ_PLAIN` NON exportée + `faqPageSchema`.

## Blog & routine

- Gabarit article : copier `app/blog/cout-agence-seo-2026/page.tsx`. Règles complètes : `content/EDITORIAL-GUIDE.md`. Cible 1500-1700 mots.
- Backlog priorisé de 12 mots-clés KD<30 : `content/topics.json` (statuts todo/done).
- **SEO : lire `content/SEO-MAP.md` avant de créer/modifier une page** (carte mots-clés → pages, règle une-intention-par-URL, anti-cannibalisation, stratégie local vs national). Piliers = requêtes commerciales nationales ; articles = requêtes informationnelles qui pointent vers leur pilier. Jamais de page « service + ville » dupliquée.
- À chaque nouvel article, mettre à jour : blog hub POSTS, sitemap.ts, llms.txt, search-palette ARTICLES, topics.json.
- Une tâche planifiée Cowork « sillage-blog-quotidien » (7h30) écrit un article/jour dans ce dossier ; les fichiers doivent être relus puis commit+push pour être déployés.

## Identité (données actuelles, certaines à confirmer avec Nabil)

Directeur & fondateur : Nabil Brahim (SEA, 10 ans, +5 M€ générés). Équipe fictive d'exemple : Claire Vasseur (SEO), Inès Bellamy (GEO), Thomas Roussel (dev). Coordonnées PLACEHOLDER à remplacer avant prod : téléphone, adresse, RCS (`lib/site.ts`, mentions légales). Domaine cible provisoire : essoragence.fr (changer `SITE.url` dans `lib/site.ts` si autre domaine ; tout suit sauf `public/llms.txt` à aligner à la main). Chiffres des cas clients = exemples plausibles à remplacer par des vrais.
