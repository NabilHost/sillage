#!/bin/zsh
# Commit "heartbeat" quotidien (00:00) — ne touche PAS au working tree.
export PATH="/opt/homebrew/bin:/usr/bin:/bin:/usr/sbin:/sbin:$PATH"
REPO="$HOME/Workspace/web/sillage"
cd "$REPO" || exit 1
LOG="$REPO/scripts/daily-commit.log"
{
  echo "=== $(date) ==="
  git commit --allow-empty -m "chore: commit quotidien ($(date +%Y-%m-%d))"
  git push origin main
} >> "$LOG" 2>&1
