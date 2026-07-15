# SEO-SETUP.md — Mise en ligne + Search Console (à faire exécuter par l'agent Cowork)

> Contexte : site **Essor** (Next.js) déployé sur **Vercel** (équipe `nabilhosts-projects`,
> URL actuelle `sillage-gold.vercel.app`). Domaine cible : **`www.agence-essor.fr`**.
> Sitemap : `https://www.agence-essor.fr/sitemap.xml`. Le SEO technique est déjà en place
> (robots, sitemap, canonical, JSON-LD). Il reste le domaine + Search Console.

Le bloc ci-dessous est le message à copier-coller à l'agent Cowork (navigateur).

---

Tu vas mettre en ligne mon site Essor sur son domaine et le connecter à Google Search
Console. Je suis présent pour saisir mes identifiants (IONOS, Google, Vercel) quand il faut.
Fais les étapes DANS L'ORDRE, et demande-moi confirmation avant tout paiement.

1) DOMAINE (IONOS)
   - Va sur ionos.fr, connecte-toi (je saisis le mot de passe).
   - Achète le domaine **agence-essor.fr** (s'il n'est pas déjà dans mon compte).
     Confirme le prix avec moi AVANT de valider le paiement.

2) CONNEXION À VERCEL
   - Va sur vercel.com, équipe **nabilhosts-projects**, ouvre le projet du site Essor
     (celui déployé sur sillage-gold.vercel.app).
   - Settings → Domains → Add → saisis **www.agence-essor.fr** puis aussi **agence-essor.fr**.
   - Définis **www.agence-essor.fr comme domaine principal** (Set as Primary) et laisse
     Vercel rediriger agence-essor.fr → www.
   - Vercel affiche les enregistrements DNS exacts à créer. NOTE-LES précisément
     (en général : A record `@` → `76.76.21.21` et CNAME `www` → `cname.vercel-dns.com`,
     mais utilise EXACTEMENT ce que Vercel affiche).

3) DNS (retour chez IONOS)
   - IONOS → mon domaine agence-essor.fr → section DNS.
   - Crée exactement les enregistrements que Vercel a demandés à l'étape 2.
   - Reviens sur Vercel et attends que les domaines passent en « Valid Configuration »
     (ça peut prendre quelques minutes à quelques heures).

4) GOOGLE SEARCH CONSOLE
   - Va sur search.google.com/search-console (je me connecte avec mon compte Google).
   - Add property → choisis **Domain** (pas URL prefix) → saisis **agence-essor.fr**.
   - Google donne un enregistrement **TXT** (`google-site-verification=...`).
   - Ajoute ce TXT dans le DNS IONOS (type TXT, hôte `@`), attends la propagation,
     puis clique **Verify** dans Search Console.

5) SITEMAP + INDEXATION
   - Dans Search Console → Sitemaps → soumets : **sitemap.xml**
     (URL complète `https://www.agence-essor.fr/sitemap.xml`).
   - Puis, via l'outil d'inspection d'URL, demande l'indexation de ces pages :
     `/` , `/agence-seo` , `/agence-sea` , `/creation-site-web` ,
     `/referencement-ia-geo` , `/resultats` , `/contact`.

6) BING (bonus rapide)
   - Va sur bing.com/webmasters, connecte-toi, choisis **Importer depuis Google
     Search Console** (le plus rapide) et valide.

Quand tout est fait, donne-moi : le statut des domaines sur Vercel, la confirmation de
vérification Search Console, et le statut de soumission du sitemap.

---

## Fiche Google Business Profile (à faire exécuter par Cowork)

> ⚠️ Prérequis : **vraie adresse + vrai téléphone** (Google vérifie souvent par courrier
> postal). Le NAP doit être IDENTIQUE au site (`lib/site.ts`). Remplacer les placeholders
> ci-dessous par les vraies coordonnées, et les reporter aussi dans `lib/site.ts`.

Bloc à copier-coller à l'agent Cowork :

---

Tu vas créer et optimiser ma fiche Google Business Profile pour mon agence Essor. Je suis
présent pour me connecter. Utilise le MÊME compte Google que ma Search Console.

Infos (NAP) à respecter à l'identique :
- Nom : Essor
- Adresse : [ADRESSE RÉELLE]
- Téléphone : [TÉLÉPHONE RÉEL]
- Site : https://www.agence-essor.fr
- Date d'ouverture : 2024

1) CRÉATION : google.com/business → connexion → Ajouter une entreprise → nom « Essor » →
   catégorie principale « Agence de marketing ».
2) ADRESSE & ZONE : adresse réelle ci-dessus (établissement physique) ; zones desservies
   Paris, Île-de-France, France.
3) CONTACT : téléphone réel, site https://www.agence-essor.fr.
4) VÉRIFICATION : choisir la méthode proposée (courrier / téléphone / vidéo). Si courrier,
   il arrive sous ~5-14 jours avec un code à saisir : me prévenir.
5) OPTIMISATION (même vérif en cours) :
   - Catégories secondaires : Consultant marketing, Agence de publicité, Concepteur de sites Web.
   - Description : « Essor est une agence d'acquisition basée à Paris. Nous aidons les PME,
     e-commerçants et éditeurs SaaS à être visibles là où leurs clients cherchent :
     référencement naturel (SEO), Google Ads, création de sites et d'applications, et
     visibilité dans les moteurs IA (ChatGPT, Perplexity, AI Overviews). Notre méthode est
     publique et chaque recommandation s'accompagne d'un indicateur vérifiable. Audit chiffré
     offert sous 10 jours. Nous intervenons à Paris et partout en France. »
   - Services : Référencement naturel (SEO), Google Ads (SEA), Création de sites et
     d'applications, Visibilité IA (GEO).
   - Horaires + photos (logo Essor, bureau/équipe).

Quand c'est fait : statut de vérification + confirmer que nom/adresse/téléphone matchent le
site au caractère près.

---

## Après ça (côté agent code / moi)
- Une fois la propriété Search Console vérifiée sous le compte Google, on pourra suivre
  impressions / clics / positions et piloter l'indexation.
- Mettre à jour le **NAP réel** (`lib/site.ts` : `street`, `zip`, `phone`) puis créer la
  **fiche Google Business Profile** (levier du référencement local Paris, cf. `SEO-MAP.md`).
