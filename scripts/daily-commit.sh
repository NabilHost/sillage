#!/bin/zsh
# Publication auto quotidienne (00:00), depuis la machine (réseau + identifiants réels).
# - S'il y a du nouveau (ex. article écrit par la routine Cowork) : commit + push + deploy Vercel.
# - Sinon : commit "heartbeat" vide + push (garde le commit quotidien, pas de deploy inutile).
# Robustesse :
# - retire les verrous git périmés que le sandbox de la routine laisse traîner (il ne peut pas
#   les supprimer lui-même) — sinon `git add` échoue et l'article n'est jamais commité.
# - réessaie le push une fois en cas d'incident réseau.
export PATH="/opt/homebrew/bin:/usr/bin:/bin:/usr/sbin:/sbin:$PATH"
REPO="$HOME/Workspace/web/sillage"
cd "$REPO" || exit 1
LOG="$REPO/scripts/daily-commit.log"
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
    push && vercel --prod --yes --scope nabilhosts-projects
  fi
  echo "--- fin $(date) ---"
} >> "$LOG" 2>&1
