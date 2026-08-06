#!/bin/zsh
# Publication auto quotidienne (00:00), depuis la machine (réseau + identifiants réels).
# - Rien de neuf        -> commit "heartbeat" vide + push (garde le commit du jour, pas de deploy).
# - Nouveau contenu     -> commit + push TOUJOURS (le travail est sauvé sur GitHub), puis build :
#       build OK    -> deploy Vercel (article en ligne)
#       build cassé -> pas de deploy, log clair (la prod garde la dernière version saine)
# Robustesse : retire les verrous git périmés laissés par le sandbox de la routine, et
# réessaie le push une fois en cas d'incident réseau.
# NB : deploy via la CLI Vercel car l'intégration Git n'est pas branchée (un push seul ne publie pas).
export PATH="/opt/homebrew/bin:/usr/bin:/bin:/usr/sbin:/sbin:$PATH"
REPO="$HOME/Workspace/web/sillage"
cd "$REPO" || exit 1
LOG="$REPO/scripts/daily-commit.log"
BUILDLOG="$REPO/scripts/last-build.log"
DATE=$(date +%Y-%m-%d)
push() { git push origin main || { sleep 15; git push origin main; }; }
{
  echo "=== $(date) ==="
  rm -f .git/index.lock .git/HEAD.lock .git/refs/heads/main.lock 2>/dev/null
  git add -A
  if git diff --cached --quiet; then
    git commit --allow-empty -m "chore: commit quotidien ($DATE)"
    push
  else
    git commit -m "content: publication auto ($DATE)"
    push
    if npm run build > "$BUILDLOG" 2>&1; then
      vercel --prod --yes --scope nabilhosts-projects && echo "PUBLIE OK ($DATE)"
    else
      echo "BUILD ECHOUE ($DATE) : commit poussé sur GitHub mais NON déployé. Détails -> scripts/last-build.log"
    fi
  fi
  echo "--- fin $(date) ---"
} >> "$LOG" 2>&1
