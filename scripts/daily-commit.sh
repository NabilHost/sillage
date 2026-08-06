#!/bin/zsh
# Publication auto quotidienne (00:00), depuis la machine (réseau + identifiants réels).
# - S'il y a du nouveau (ex. article écrit par la routine Cowork) : commit + push + deploy Vercel.
# - Sinon : commit "heartbeat" vide + push (garde le commit quotidien, pas de deploy inutile).
# NB : on déploie via la CLI Vercel car l'intégration Git n'est pas branchée ; un push seul
#      ne met rien en ligne.
export PATH="/opt/homebrew/bin:/usr/bin:/bin:/usr/sbin:/sbin:$PATH"
REPO="$HOME/Workspace/web/sillage"
cd "$REPO" || exit 1
LOG="$REPO/scripts/daily-commit.log"
DATE=$(date +%Y-%m-%d)
{
  echo "=== $(date) ==="
  git add -A
  if git diff --cached --quiet; then
    git commit --allow-empty -m "chore: commit quotidien ($DATE)"
    git push origin main
  else
    git commit -m "content: publication auto ($DATE)"
    git push origin main && vercel --prod --yes --scope nabilhosts-projects
  fi
  echo "--- fin $(date) ---"
} >> "$LOG" 2>&1
