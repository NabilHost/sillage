# Mise en ligne — checklist Essor

## 1. Vérifier en local (5 min)

```bash
cd ~/Workspace/web/sillage
npm install
npm run build     # doit se terminer par "✓ Compiled successfully"
npm run dev       # contrôle visuel sur http://localhost:3000
```

## 2. Pousser sur GitHub (5 min)

Le dépôt Git est déjà initialisé avec un premier commit. Créez un repo vide sur github.com (privé, sans README), puis :

```bash
git remote add origin https://github.com/VOTRE_COMPTE/sillage.git
git push -u origin main
```

## 3. Déployer sur Vercel (10 min)

1. vercel.com → Add New → Project → importer le repo `sillage`.
2. Framework détecté automatiquement (Next.js), ne rien changer.
3. Environment Variables : `RESEND_API_KEY` (depuis resend.com, pour le formulaire). Optionnel : `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`.
4. Deploy. Le site est en ligne sur `sillage-xxx.vercel.app`.

## 4. Domaine (15 min + propagation DNS)

1. Achetez le domaine (OVH, Gandi…). Si ce n'est pas `agence-essor.fr`, remplacez `SITE.url` dans `lib/site.ts` ET les URL absolues de `public/llms.txt`, puis commit + push.
2. Vercel → Settings → Domains → ajouter le domaine avec `www.` en principal.
3. Chez le registrar : `A @ → 76.76.21.21` et `CNAME www → cname.vercel-dns.com`.

## 5. Email du formulaire (10 min)

1. resend.com → Domains → ajouter votre domaine → poser les DNS DKIM/SPF indiqués.
2. Vérifiez l'envoi via le formulaire /contact une fois le domaine validé.

## 6. Post-launch SEO/GEO (30 min, dans la semaine)

- [ ] Google Search Console : propriété domaine + soumettre `https://votre-domaine/sitemap.xml`
- [ ] Bing Webmaster Tools : importer depuis Search Console
- [ ] Tester 5 URL sur validator.schema.org (accueil, un pillar, un article)
- [ ] `curl -A "GPTBot" https://votre-domaine/` → doit répondre 200
- [ ] Vérifier `https://votre-domaine/llms.txt` et `/robots.txt`
- [ ] Créer la page LinkedIn entreprise + profil Nabil relié (sameAs des schemas)
- [ ] Remplacer les coordonnées d'exemple : téléphone, adresse, RCS (lib/site.ts + mentions légales)

## 7. Routine blog

La tâche planifiée « sillage-blog-quotidien » écrit un article chaque matin à 7 h 30 dans le projet (l'app Claude doit être ouverte). Pour publier : relire l'article, puis `git add -A && git commit -m "blog: <slug>" && git push` — Vercel redéploie automatiquement.
