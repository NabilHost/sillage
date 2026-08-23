#!/bin/zsh
# Re-check ponctuel de l'indexation des URLs pinguées via l'Indexing API (~48h après).
# Inspecte chaque URL via GSC urlInspection, écrit un rapport, notifie macOS,
# puis se désinstalle du launchd (one-shot).
export PATH="/opt/homebrew/bin:/usr/bin:/bin:/usr/sbin:/sbin:$PATH"
QP="corkflow-seo-24136"
REPORT="$HOME/Workspace/web/sillage/scripts/seo-reports/index-recheck-$(date +%Y%m%d).txt"
mkdir -p "$(dirname "$REPORT")"
TOKEN=$(gcloud auth application-default print-access-token 2>/dev/null)

URLS=(
  "sc-domain:corkflow.fr|https://www.corkflow.fr/tapis-yoga-liege/tapis-yoga-liege-premium"
  "sc-domain:corkflow.fr|https://www.corkflow.fr/tapis-yoga-liege/tapis-yoga-liege-voyage"
  "sc-domain:corkflow.fr|https://www.corkflow.fr/tapis-yoga-liege/tapis-yoga-liege-classique"
  "sc-domain:corkflow.fr|https://www.corkflow.fr/accessoires-yoga-liege"
  "sc-domain:corkflow.fr|https://www.corkflow.fr/meditation-yoga"
  "sc-domain:corkflow.fr|https://www.corkflow.fr/blog/comment-choisir-tapis-yoga"
  "sc-domain:agence-essor.fr|https://www.agence-essor.fr/blog/seo-local-pme-artisans"
)

inspect() { # $1=property $2=url  -> "VERDICT|coverage"
  curl -s "https://searchconsole.googleapis.com/v1/urlInspection/index:inspect" \
    -H "Authorization: Bearer $TOKEN" -H "x-goog-user-project: $QP" -H "Content-Type: application/json" \
    -d "{\"inspectionUrl\":\"$2\",\"siteUrl\":\"$1\",\"languageCode\":\"fr\"}" \
  | python3 -c "import sys,json;r=json.load(sys.stdin).get('inspectionResult',{}).get('indexStatusResult',{});print('%s|%s'%(r.get('verdict','?'),r.get('coverageState','?')))" 2>/dev/null
}

indexed=0; total=0
{
  echo "=== Re-check indexation $(date) ==="
  for entry in $URLS; do
    prop="${entry%%|*}"; url="${entry#*|}"
    res=$(inspect "$prop" "$url"); verdict="${res%%|*}"; cov="${res#*|}"
    total=$((total+1))
    [ "$verdict" = "PASS" ] && indexed=$((indexed+1))
    printf ' [%s] %s\n        %s\n' "$verdict" "$url" "$cov"
    sleep 0.3
  done
  echo "--- $indexed/$total indexées ---"
} | tee "$REPORT"

osascript -e "display notification \"$indexed/$total URLs indexées. Détails: scripts/seo-reports/\" with title \"Essor · re-check indexation\"" >/dev/null 2>&1

# One-shot : se désinstaller pour ne plus se relancer.
launchctl bootout "gui/$(id -u)/com.essor.index-recheck" 2>/dev/null
rm -f "$HOME/Library/LaunchAgents/com.essor.index-recheck.plist"
