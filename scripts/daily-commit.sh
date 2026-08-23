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

KEY="$HOME/.config/gcloud/indexing-bot-key.json"
SITEURL="https://www.agence-essor.fr"

alert() { osascript -e "display notification \"$1\" with title \"Essor blog\" sound name \"Basso\"" >/dev/null 2>&1; }
info()  { osascript -e "display notification \"$1\" with title \"Essor blog\"" >/dev/null 2>&1; }
fail()  { echo "$1"; print -r -- "$1" > "$FLAG"; alert "$2"; }
push()  { git push origin main || { sleep 15; git push origin main; }; }

# Auto-indexation : pousse à Google les articles ajoutés/modifiés dans le dernier commit.
index_new_articles() {
  [ -f "$KEY" ] || { echo "indexing: pas de clé, skip"; return; }
  local slugs token code s
  slugs=$(git diff --name-only --diff-filter=AM HEAD~1 HEAD -- 'app/blog/*/page.tsx' 2>/dev/null \
          | sed -n 's#^app/blog/\([^/]*\)/page.tsx$#\1#p')
  [ -z "$slugs" ] && { echo "indexing: aucun nouvel article"; return; }
  gcloud auth activate-service-account --key-file="$KEY" >/dev/null 2>&1
  token=$(gcloud auth print-access-token --scopes=https://www.googleapis.com/auth/indexing 2>/dev/null)
  if [ -n "$token" ]; then
    for s in ${(f)slugs}; do
      code=$(curl -s -o /dev/null -w '%{http_code}' -X POST \
        "https://indexing.googleapis.com/v3/urlNotifications:publish" \
        -H "Authorization: Bearer $token" -H "Content-Type: application/json" \
        -d "{\"url\":\"$SITEURL/blog/$s\",\"type\":\"URL_UPDATED\"}")
      echo "indexing: $s -> $code"
    done
  else
    echo "indexing: pas de token"
  fi
  gcloud config set account nbrahim75010@gmail.com >/dev/null 2>&1
}

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
          index_new_articles
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
