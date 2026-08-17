#!/bin/zsh
# Suivi SEO hebdomadaire (lecture seule) : interroge Google Search Console via gcloud ADC,
# écrit un rapport daté dans scripts/seo-reports/ et envoie une notification macOS de synthèse.
# Aucune écriture sur le site, aucune action autonome : uniquement de la lecture GSC.
export PATH="/opt/homebrew/bin:/usr/bin:/bin:/usr/sbin:/sbin:$PATH"
REPO="$HOME/Workspace/web/sillage"
cd "$REPO" || exit 1
OUT="$REPO/scripts/seo-reports"; mkdir -p "$OUT"
DATE=$(date +%Y-%m-%d)
REPORT="$OUT/seo-$DATE.txt"
PROJ="corkflow-seo-24136"
SITE="sc-domain%3Aagence-essor.fr"

TOKEN=$(gcloud auth application-default print-access-token 2>/dev/null)
if [ -z "$TOKEN" ]; then
  osascript -e 'display notification "Auth Google expirée : relance gcloud auth application-default login" with title "SEO Essor" sound name "Basso"' 2>/dev/null
  exit 1
fi

Q() { curl -s -H "Authorization: Bearer $TOKEN" -H "x-goog-user-project: $PROJ" -H "Content-Type: application/json" \
  -X POST "https://www.googleapis.com/webmasters/v3/sites/$SITE/searchAnalytics/query" -d "$1"; }

# GSC a ~3 jours de latence : "semaine" = J-10 -> J-3, "semaine précédente" = J-17 -> J-10
S1=$(date -v-10d +%Y-%m-%d); E1=$(date -v-3d +%Y-%m-%d)
S0=$(date -v-17d +%Y-%m-%d); E0=$(date -v-10d +%Y-%m-%d)

{
  echo "# Rapport SEO Essor - $DATE"
  echo ""
  echo "## Semaine ($S1 -> $E1)"
  Q "{\"startDate\":\"$S1\",\"endDate\":\"$E1\"}" | python3 -c "import sys,json;r=json.load(sys.stdin).get('rows',[]);r=r[0] if r else {};print(f\"  clics {int(r.get('clicks',0))} | impressions {int(r.get('impressions',0))} | position moy {r.get('position',0):.1f}\")"
  echo ""
  echo "## Semaine précédente ($S0 -> $E0)"
  Q "{\"startDate\":\"$S0\",\"endDate\":\"$E0\"}" | python3 -c "import sys,json;r=json.load(sys.stdin).get('rows',[]);r=r[0] if r else {};print(f\"  clics {int(r.get('clicks',0))} | impressions {int(r.get('impressions',0))} | position moy {r.get('position',0):.1f}\")"
  echo ""
  echo "## Top requetes"
  Q "{\"startDate\":\"$S1\",\"endDate\":\"$E1\",\"dimensions\":[\"query\"],\"rowLimit\":20}" | python3 -c "import sys,json
rows=json.load(sys.stdin).get('rows',[])
[print(f\"  {x['keys'][0][:46]:46} pos {x['position']:.0f}  impr {int(x['impressions'])}  clics {int(x['clicks'])}\") for x in rows] or print('  (aucune)')"
  echo ""
  echo "## Top pages"
  Q "{\"startDate\":\"$S1\",\"endDate\":\"$E1\",\"dimensions\":[\"page\"],\"rowLimit\":20}" | python3 -c "import sys,json
rows=json.load(sys.stdin).get('rows',[])
[print(f\"  {x['keys'][0].replace('https://www.agence-essor.fr','')[:42]:42} pos {x['position']:.0f}  impr {int(x['impressions'])}\") for x in rows] or print('  (aucune)')"
} > "$REPORT" 2>&1

SUM=$(grep -A1 "^## Semaine (" "$REPORT" | grep "clics" | head -1 | sed 's/^  //')
osascript -e "display notification \"$SUM\" with title \"SEO Essor - rapport hebdo pret\"" 2>/dev/null
echo "$REPORT"
