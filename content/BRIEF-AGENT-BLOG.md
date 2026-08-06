# Brief agent blog Essor

Ce document dit deux choses : **comment choisir le bon article**, et **quoi vérifier avant de le mettre en ligne**. Il ne remplace pas `content/EDITORIAL-GUIDE.md` et `content/SEO-MAP.md`, il en donne l'ordre d'exécution.

Répartition actuelle des rôles : l'agent réseaux sociaux ne touche plus au blog. Il publie un post par jour ouvré et signale dans son rapport toute actu qui mériterait un article. L'agent blog écrit les articles. Le job `scripts/daily-commit.sh` (launchd, minuit) commite, pousse et déploie.

---

## Partie 1 — Choisir le bon article

### Rythme

Un article par semaine, le lundi. Jamais plus de deux par semaine glissante. Vérifier les dates `published` dans `content/topics.json` avant d'écrire : si un article est sorti dans les 7 derniers jours, on saute.

### Étape 1 : la veille passe avant le backlog

Faire 2 ou 3 recherches sur les 7 derniers jours : Google algorithm update, nouveautés Google Ads, changements AI Overviews, actualité ChatGPT search, SEO news France.

Une actu devient un article seulement si **les 4 critères sont réunis**. Trois sur quatre ne suffisent pas.

| # | Critère | Erreur fréquente |
|---|---|---|
| 1 | Annonce ou changement de moins de 7 jours | Reprendre un core update de mai en août |
| 2 | Impact concret pour une PME ou un e-commerçant français | Publier une actu US sans effet ici |
| 3 | Angle Essor possible : que FAIRE, avec quels chiffres, quelle vérification | Se contenter de paraphraser l'annonce |
| 4 | Pas déjà couvert par un slug existant dans `app/blog/` | Doubler un article au lieu de le mettre à jour |

Si le critère 4 tombe parce qu'un article existe déjà : ne pas écrire, mettre à jour l'article existant et changer son `dateModified`.

Si trend retenue : elle passe devant le backlog, catégorie « Actualité », slug court, date et source de l'info citées en byline.

### Étape 2 : sinon, le backlog

Prendre le **premier** topic `status: "todo"` de `content/topics.json`. L'ordre est la priorité, on ne pioche pas au milieu. Respecter le `keyword`, l'`angle`, l'`author` et les `links` imposés par la fiche.

Backlog restant au 6 août 2026, dans l'ordre :

| Ordre | Slug | Mot-clé | KD | Volume |
|---|---|---|---|---|
| 1 | `performance-max-ou-shopping` | Performance Max ou Shopping | 14 | 320/mois |
| 2 | `core-web-vitals-guide-2026` | Core Web Vitals 2026 | 24 | 720/mois |
| 3 | `seo-local-pme-artisans` | SEO local PME | 17 | 260/mois |
| 4 | `donnees-structurees-seo-guide` | données structurées SEO | 21 | 590/mois |
| 5 | `taux-de-conversion-landing-page` | améliorer taux de conversion landing page | 19 | 410/mois |

Backlog vide et pas de trend : ne rien écrire, proposer 5 nouveaux topics et s'arrêter.

### Étape 3 : le contrôle anti-cannibalisation

À faire **avant** d'écrire une ligne, en lisant `content/SEO-MAP.md`.

- Un article ne vise jamais le mot-clé commercial d'un pilier. « agence SEO PME » appartient au pilier `/agence-seo` ; « combien de temps SEO » appartient au blog.
- Une URL = une intention = un mot-clé. Vérifier que le slug n'existe pas déjà dans `app/blog/`.
- Jamais de page « service + ville ». Google traite ça en doorway page. Le local passe par le schéma `LocalBusiness`, un NAP identique partout et la fiche Google Business Profile.
- Cible : longue traîne KD < 30, intention informationnelle, dans l'un des cinq clusters (SEO, Google Ads, Sites web, Visibilité IA, SEO local).

---

## Partie 2 — Avant de publier

### Le gabarit

Copier la structure de `app/blog/cout-agence-seo-2026/page.tsx`. Fichier à créer : `app/blog/<slug>/page.tsx`.

- **Longueur** : 1 500 à 1 700 mots rédigés.
- **Structure** : breadcrumb → header (badge catégorie, date, temps de lecture, H1, lede chiffré, byline avec la source des données) → 5 à 6 H2 **formulés en questions** → FAQ 4 questions → CTA → retour blog.
- **Chaque H2** est suivi d'un passage autonome de **134 à 167 mots** : sujet explicite dès la première phrase (jamais « ça » ou « il » renvoyant au titre), une donnée chiffrée, aucune référence à une section précédente. C'est ce qui rend le passage citable par une IA.
- **Minimum** : 1 tableau HTML natif de données et 1 `.callout` (« À retenir » ou « Formule »).
- **FAQ** : 4 questions, réponses de 40 à 80 mots, données dans une constante `FAQ_PLAIN` **non exportée** (`page.tsx` n'autorise que les exports Next).
- **Metadata** via `generatePageMetadata` : title ≤ 60 caractères avec `| Essor`, description ≤ 155 caractères sans point final, `ogType: "article"`.
- **Schemas** via `lib/schema.ts` : `articleSchema`, `personSchema`, `organizationSchema`, `breadcrumbSchema`, `faqPageSchema`.
- **Maillage sortant** : 1 pilier minimum avec une ancre descriptive, 1 à 2 articles du même cluster, plus `/contact` ou `/a-propos`.

### Les règles de copy

- **Auteur : toujours Claire Vasseur**, directrice SEO, via un objet `AUTHOR` local. Jamais le défaut Nabil, jamais « l'équipe ».
- Aucun em-dash « — » en séparateur.
- Aucun buzzword : optimiser votre potentiel, booster, révolutionner, incontournable, « dans un monde où ».
- Des chiffres partout, et **une concession honnête par article**.
- Un seul mot en `<em className="em-accent">` dans le H1.
- Apostrophes en `&apos;` dans le JSX.
- L'agence a été fondée en **2024**, jamais 2019. La marque est **Essor** : le mot « Sillage » ne doit apparaître nulle part, c'est l'ancien nom et le dossier a juste gardé son nom.

### Les 5 maillages, tous obligatoires

Un article sans ces cinq mises à jour est invisible, même déployé.

1. `app/blog/page.tsx` : nouvel item **en tête** de `POSTS` avec `wide: true`, et l'ancien `wide: true` repasse à `false`.
2. `app/sitemap.ts` : nouvelle entrée, `priority` 0.65, date du jour.
3. `public/llms.txt` : nouvelle ligne en tête de la section `## Blog`, URL absolue `https://www.agence-essor.fr/blog/<slug>` et résumé chiffré.
4. `components/marketing/search-palette.tsx` : nouvel item en tête de `ARTICLES`.
5. `content/topics.json` : le topic passe en `"done"` avec `"published": "AAAA-MM-JJ"`. Pour un article trend, ne pas toucher au backlog : ajouter une entrée en fin de fichier avec `"status": "done"` et `"trend": true`.

### L'auto-contrôle

À lancer depuis la racine du projet avant de considérer l'article terminé.

```bash
F=app/blog/<slug>/page.tsx

grep -c "—" $F                      # doit renvoyer 0
grep -ci "sillage" $F               # doit renvoyer 0
grep -n "AUTHOR" $F                 # doit contenir Claire Vasseur
grep -o "<h2" $F | wc -l            # 5 ou 6
grep -o 'href="/[^"]*"' $F | sort -u   # comparer a la liste ci-dessous
find app -name page.tsx | sed 's|^app||;s|/page.tsx$||'   # routes existantes
python3 -m json.tool content/topics.json > /dev/null      # JSON valide
npm run build                       # doit passer
```

Chaque `href` interne de l'article doit correspondre à une route réelle. Un lien mort passe le build sans erreur mais casse le maillage.

### La mise en ligne

L'article est déployé par `scripts/daily-commit.sh` à minuit : il commite, pousse sur `github.com/NabilHost/sillage` puis lance `vercel --prod`. L'intégration Git de Vercel n'est pas branchée, **un push seul ne met rien en ligne**.

Deux pièges connus :

- **Ne jamais laisser traîner un `.git/index.lock`.** Le sandbox des agents ne peut pas supprimer de fichiers. Un verrou oublié fait échouer le `git add` du job de minuit, qui retombe alors sur un commit vide : l'article reste invisible sans qu'aucune erreur ne soit visible. C'est ce qui a bloqué l'article du 3 août pendant trois jours. Si un verrou existe, le déplacer (`mv`), pas le supprimer.
- **Vérifier après coup.** Ouvrir `https://www.agence-essor.fr/blog/<slug>` le lendemain. Le blog a affiché pendant trois jours un dernier article daté du 16 juillet alors que le fichier existait en local.

Après mise en ligne : soumettre l'URL dans Search Console, ping IndexNow.
