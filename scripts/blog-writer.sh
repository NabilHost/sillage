#!/bin/zsh
export PATH="/opt/homebrew/bin:/usr/bin:/bin:/usr/sbin:/sbin:$PATH"
REPO="$HOME/Workspace/web/sillage"
cd "$REPO" || exit 1
LOG="$REPO/scripts/blog-writer.log"
LAST=$(python3 -c "import json;d=json.load(open('content/topics.json'));ts=d if isinstance(d,list) else d.get('topics',[]);ds=[t.get('published') for t in ts if t.get('status')=='done' and t.get('published')];print(max(ds) if ds else '2000-01-01')")
DAYS=$(python3 -c "import datetime;print((datetime.date.today()-datetime.date.fromisoformat('$LAST')).days)")
{
  echo "=== $(date) === dernier: $LAST ($DAYS j)"
  if [ "${DAYS:-0}" -lt 3 ]; then echo "cadence <3 jours -> skip"; else
    rm -f .git/index.lock .git/HEAD.lock 2>/dev/null
    claude -p "$(cat "$REPO/scripts/blog-writer-prompt.txt")" --permission-mode bypassPermissions --max-budget-usd 5
    echo "--- fin $(date) ---"
  fi
} >> "$LOG" 2>&1
