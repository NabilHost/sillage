#!/bin/zsh
# Publication auto quotidienne (00:00), depuis la machine (réseau + identifiants réels).
# - Rien de neuf    -> commit "heartbeat" vide + push (garde le commit du jour, pas de deploy).
# - Nouveau contenu -> commit + push TOUJOURS (travail sauvé sur GitHub), puis build :
#       build OK    -> deploy Vercel (article en ligne)  + notif "publié"
#       build cassé -> pas de deploy, la prod reste saine + ALERTE (notif + fichier Bureau)
# Alertes : notification macOS + fichier ~/Desktop/ESSOR-BLOG-A-CORRIGER.txt à la moindre
#           panne (push, build ou deploy). Le fichier est retiré dès qu'une publication réussit.
# Robustesse : verrous git périmés supprimés avant chaque run ; push réessayé une fois.
export PATH="/opt/homebrew/bin:/usr/bin:/bin:/usr/sbin:/sbin:$PATH"
REPO="$HOME/Workspace/web/sillage"
cd "$REPO" || exit 1
LOG="$REPO/scripts/daily-commit.log"
BUILDLOG="$REPO/scripts/last-build.log"
FLAG="$HOME/Desktop/ESSOR-BLOG-A-CORRIGER.txt"
DATE=$(date +%Y-%m-%d)

alert() { osascript -e "display notification \"$1\" with title \"Essor blog\" sound name \"Basso\"" >/dev/null 2>&1; }
info()  { osascript -e "display notification \"$1\" with title \"Essor blog\"" >/dev/null 2>&1; }
fail()  { echo "$1"; print -r -- "$1" > "$FLAG"; alert "$2"; }
push()  { git push origin main || { sleep 15; git push origin main; }; }

{
  echo "=== $(date) ==="
  rm -f .git/index.lock .git/HEAD.lock .git/refs/heads/main.lock 2>/dev/null
  git add -A
  if git diff --cached --quiet; then
    git commit --allow-empty -m "chore: commit quotidien ($DATE)"
    push
  else
    git commit -m "content: publication auto ($DATE)"
    if push; then
      if npm run build > "$BUILDLOG" 2>&1; then
        if vercel --prod --yes --scope nabilhosts-projects; then
          echo "PUBLIE OK ($DATE)"; rm -f "$FLAG"; info "Article publié ($DATE)"
        else
          fail "DEPLOY ECHOUE ($DATE) - voir scripts/daily-commit.log" "Deploy échoué ($DATE) : article non mis en ligne."
        fi
      else
        fail "BUILD ECHOUE ($DATE) - article poussé sur GitHub, NON déployé. Détails: scripts/last-build.log" "Build échoué ($DATE) : article non publié, à corriger."
      fi
    else
      fail "PUSH ECHOUE ($DATE) - article commité en local seulement." "Push GitHub échoué ($DATE) : article non poussé."
    fi
  fi
  echo "--- fin $(date) ---"
} >> "$LOG" 2>&1
