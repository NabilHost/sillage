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

## Après ça (côté agent code / moi)
- Une fois la propriété Search Console vérifiée sous le compte Google, on pourra suivre
  impressions / clics / positions et piloter l'indexation.
- Mettre à jour le **NAP réel** (`lib/site.ts` : `street`, `zip`, `phone`) puis créer la
  **fiche Google Business Profile** (levier du référencement local Paris, cf. `SEO-MAP.md`).
