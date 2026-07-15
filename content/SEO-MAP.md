# SEO-MAP.md — Cartographie mots-clés & anti-cannibalisation

> Source de vérité pour le ciblage SEO de Essor. **À lire avant de créer OU modifier
> une page** (pilier, article, page locale). Objectif : une intention par URL, zéro
> cannibalisation, un signal local propre sans se nicher à Paris.
> Complément côté articles : `content/topics.json` (backlog éditorial).

## 1. Principes (non négociables)

1. **Une URL = une intention = un mot-clé principal.** Jamais deux pages sur la même requête.
2. **Piliers = requêtes commerciales nationales** ("agence seo", "création site internet").
   **Articles = requêtes informationnelles** ("comment…", "combien…", "guide…").
3. **Local ≠ pages "service + ville".** Dupliquer un pilier en changeant la ville = *doorway
   page*, pénalisé par Google (réf. Search Essentials → Spam policies → Doorway pages).
   Le local passe par : schéma `LocalBusiness`/`ProfessionalService` + NAP identique partout
   + **Google Business Profile**. Une page locale n'est justifiée que si elle a un contenu
   *unique réel* (adresse, équipe, cas clients locaux, FAQ locale).
4. **Paris n'enferme pas.** Organique national et pack local sont deux systèmes distincts.
   On signale Paris (adresse + geo) ET on déclare `areaServed = France`. Une page peut
   ranker sur "agence seo" ET "agence seo paris" sans page dédiée.

## 2. Carte des pages (mot-clé principal → secondaires)

| URL | Type | Mot-clé principal | Secondaires captés | Intention |
|---|---|---|---|---|
| `/` | Home | marque « Essor » | agence acquisition paris | Marque / national |
| `/agence-seo` | Pilier | **agence seo** (22 k) | agence seo paris (3,6 k), référencement naturel (1,6 k), consultant seo (2,9 k) | Commerciale |
| `/agence-sea` | Pilier | **agence google ads** (880) | agence sea (590), adwords agence (320) | Commerciale |
| `/creation-site-web` | Pilier | **création site internet** (6,6 k) | agence création site (720), conception sites web (880), devis site (590) | Commerciale |
| `/referencement-ia-geo` | Pilier | **référencement ia** (390) | geo référencement (210), référencement chatgpt (210) | Commerciale / hybride |
| `/contact` | LP audit | **audit seo gratuit** | audit seo en ligne (260) | Commerciale (lead) |
| `/a-propos` | Institution | méthode agence (marque) | — | Réassurance |
| `/blog/*` | Satellites | 1 mot-clé par article (voir `topics.json`) | — | Informationnelle |

## 3. Maillage interne (hub & spoke)

- Chaque **article** pointe vers **son pilier** avec une ancre descriptive
  (ex. « notre offre de <u>référencement naturel</u> », pas « cliquez ici »).
- Chaque **pilier** pointe vers 2-3 **articles de soutien** de son cluster.
- Une seule **H1** par page, contenant le mot-clé principal.
- Pas de lien croisé qui met deux pages en concurrence sur la même ancre.

## 4. Local vs national — la règle Essor

- **Titles des piliers = nationaux**, SAUF `/agence-seo` qui garde « à Paris » (il capte
  les deux). On n'ajoute PAS « Paris » aux autres titles → on ne se niche pas.
- **Signal Paris** = schéma `ProfessionalService` (adresse + `geo`) + `areaServed: France`
  + NAP au footer + la phrase « basée à Paris, au service de clients partout en France ».
- **Pour ranker sur « [service] paris »** (levier hors-site, plus fort que le texte) :
  fiche **Google Business Profile** optimisée + avis + citations NAP cohérentes.

## 5. À faire dès que les vraies données existent

- [ ] Remplacer le **NAP placeholder** (`lib/site.ts` : `street`, `zip`, `phone`) par le vrai.
      NAP strictement identique sur le site, la fiche GBP et les annuaires.
- [ ] Créer la **fiche Google Business Profile** (catégorie principale « Agence de marketing »,
      secondaires « Consultant SEO », « Service de publicité »).

## 6. Opportunités identifiées (recherche Google Ads, France)

- **Priorité 1 (gagnable vite)** : cluster IA/GEO (référencement ia/chatgpt/geo), longue
  traîne intention d'achat (audit seo gratuit, refonte site web, devis site), local Paris.
- **Futur — page dédiée à créer** (mot-clé propre, pas de cannibalisation) :
  `/developpement-application` → **développement application mobile** (2 900/mois, faible
  concurrence). À sortir de `/creation-site-web` UNIQUEMENT avec un contenu app spécifique
  (process, stack, cas Tabib / white-label), sinon rester en secondaire du pilier création.

## 7. Checklist avant publication (toute page)

- [ ] Mot-clé principal unique, vérifié contre ce fichier + `topics.json`
- [ ] Intention claire : commerciale → pilier, informationnelle → article
- [ ] 1 seule H1 contenant le mot-clé
- [ ] `title` < 60 car. et `description` < 155 car. avec le mot-clé (via `generatePageMetadata`)
- [ ] Maillage : article → pilier (ancre descriptive) ; pilier → 2-3 articles
- [ ] JSON-LD : `Service` (pilier) ou `Article` + `FAQPage` (blog) via `lib/schema.ts`
- [ ] 1 bloc réponse autonome de 134-167 mots avec une donnée chiffrée (citabilité IA)
