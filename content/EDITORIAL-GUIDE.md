# Guide éditorial Sillage — consommé par la routine quotidienne

## Stratégie mots-clés

Cible : requêtes longue traîne KD < 30, intention informational ou research, dans les 4 clusters de l'agence (SEO, Google Ads, Sites web, Visibilité IA + SEO local). Le backlog priorisé vit dans `content/topics.json`. Règles anti-cannibalisation :

- Un article blog ne vise JAMAIS le keyword transactionnel d'un pillar (« agence SEO PME » = pillar ; « combien de temps SEO » = blog).
- Un seul article par intention par requête. Vérifier les slugs existants dans `app/blog/` avant d'écrire.
- Chaque article link vers : 1 pillar minimum + 1-2 articles du même cluster + /contact ou /a-propos.

## Gabarit d'article (obligatoire, voir les 3 articles existants comme référence)

1. Fichier : `app/blog/<slug>/page.tsx`, copier la structure de `app/blog/cout-agence-seo-2026/page.tsx`.
2. Metadata via `generatePageMetadata` : title ≤ 60 car. avec `| Sillage`, description ≤ 155 car. sans point final, `ogType: "article"`.
3. Schemas : `articleSchema` (author = Nabil par défaut, Claire pour les sujets SEO/technique via objet AUTHOR local) + `personSchema` + `organizationSchema` + `breadcrumbSchema` + `faqPageSchema`.
4. Longueur : **1 500 à 1 700 mots** de contenu rédigé.
5. Structure : breadcrumb → header (badge catégorie, date, temps de lecture, H1 avec 1 mot en `em-accent`, lede chiffré, byline avec source des données) → 5-6 H2 **formulés en questions** → FAQ 4 questions → CTA card → retour blog.
6. Chaque H2 est suivi d'un **passage autonome de 134-167 mots** : sujet explicite en première phrase (jamais « ça/il » référant au titre), une donnée chiffrée, aucune référence à une section précédente.
7. Au moins : 1 tableau HTML natif de données + 1 `.callout` (« À retenir » ou « Formule »).
8. FAQ : 4 questions citables IA, réponses 40-80 mots, data dans `FAQ_PLAIN` (jamais export).
9. Auteurs autorisés : Nabil Brahim (directeur, SEA/stratégie/IA) ou Claire Vasseur (directrice SEO, technique/local). Jamais « l'équipe ».

## Anti-patterns interdits (copie)

Pas d'em-dash « — » séparateur. Pas de buzzwords (optimiser votre potentiel, booster, révolutionner, incontournable). Pas de « Dans un monde où… ». Chiffres partout, une concession honnête par article. Fraunces italic : 1 seul mot dans le H1.

## Mises à jour associées à chaque nouvel article (toutes obligatoires)

- `app/blog/page.tsx` : ajouter en tête de POSTS (le plus récent passe `wide: true`, l'ancien wide repasse à false).
- `app/sitemap.ts` : nouvelle entrée priority 0.65.
- `public/llms.txt` : nouvelle ligne section Blog (URL absolue + résumé chiffré).
- `components/marketing/search-palette.tsx` : ajouter dans ARTICLES.
- `content/topics.json` : passer le topic en "done" avec la date.

## Critères trend (veille quotidienne)

Un sujet d'actualité mérite un article si TOUS ces critères sont réunis :
1. Annonce ou changement < 7 jours (Google, OpenAI, Anthropic, Perplexity, réglementation, étude majeure) qui touche le SEO, Google Ads, les sites web ou la recherche IA.
2. Impact concret pour des PME/e-commerçants français (pas une actu US sans effet ici).
3. Angle Sillage possible : que faut-il FAIRE, avec quels chiffres, quelle vérification.
4. Pas déjà couvert par un article existant (sinon : mettre à jour l'article existant, changer dateModified).

Si trend retenue : l'article trend passe devant le backlog ce jour-là. Slug court, catégorie « Actualité », mention de la date de l'info en byline.

## Publication

La routine écrit les fichiers mais ne déploie pas : relecture humaine puis `npm run build` et déploiement. Après mise en ligne : ping IndexNow / soumettre l'URL dans Search Console.
