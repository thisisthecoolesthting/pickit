#!/bin/bash
# vps-setup.sh — idempotent VPS provisioning for pickit.kids
# Run on the VPS as the `deploy` user:
#   scp vps-setup.sh deploy@187.124.246.154:/tmp/
#   ssh deploy@187.124.246.154 'bash /tmp/vps-setup.sh'
# Will prompt for sudo password when editing Caddyfile / reloading caddy.

set -euo pipefail

REPO_URL="https://github.com/thisisthecoolesthting/pickit.git"
SITE_DIR="$HOME/pickit"
DEPLOY_BIN="$HOME/bin/deploy-pickit.sh"
LOG_FILE="$HOME/deploy-pickit.log"
CADDY_FILE="/etc/caddy/Caddyfile"

say() { echo ""; echo "==== $1 ===="; }

say "1. Clone repo (if missing)"
if [ ! -d "$SITE_DIR/.git" ]; then
  git clone "$REPO_URL" "$SITE_DIR"
  echo "  cloned to $SITE_DIR"
else
  cd "$SITE_DIR" && git fetch --quiet origin main && git reset --hard origin/main
  echo "  repo updated"
fi

say "2. First build"
cd "$SITE_DIR"
npm install --no-audit --no-fund --silent
npm run build
echo "  dist/ built"

say "3. Per-site deploy script"
mkdir -p "$HOME/bin"
cat > "$DEPLOY_BIN" <<'EOF'
#!/bin/bash
set -euo pipefail
cd "$HOME/pickit"
git fetch --quiet origin main
LOCAL=$(git rev-parse HEAD)
REMOTE=$(git rev-parse origin/main)
if [ "$LOCAL" = "$REMOTE" ]; then exit 0; fi
git reset --hard origin/main
npm install --no-audit --no-fund --silent
npm run build
echo "[$(date -Iseconds)] Deployed $(git rev-parse --short HEAD)" >> "$HOME/deploy-pickit.log"
EOF
chmod +x "$DEPLOY_BIN"
echo "  wrote $DEPLOY_BIN"

say "4. Cron entry"
CRON_LINE="* * * * * $DEPLOY_BIN >> $LOG_FILE 2>&1"
if crontab -l 2>/dev/null | grep -qF "$DEPLOY_BIN"; then
  echo "  cron line already present"
else
  ( crontab -l 2>/dev/null; echo "$CRON_LINE" ) | crontab -
  echo "  cron line added"
fi

say "5. Caddy site block"
if sudo grep -q "pickit.kids" "$CADDY_FILE"; then
  echo "  Caddyfile already mentions pickit.kids — leaving as-is"
else
  sudo tee -a "$CADDY_FILE" > /dev/null <<'EOF'

pickit.kids, www.pickit.kids {
    root * /home/deploy/pickit/dist
    file_server
    encode zstd gzip

    @www host www.pickit.kids
    redir @www https://pickit.kids{uri} permanent

    header {
        Strict-Transport-Security "max-age=31536000; includeSubDomains"
        X-Content-Type-Options "nosniff"
        Referrer-Policy "strict-origin-when-cross-origin"
        Permissions-Policy "interest-cohort=()"
        X-Frame-Options "SAMEORIGIN"
    }

    @static path *.css *.js *.png *.jpg *.jpeg *.webp *.svg *.woff2 *.ico
    header @static Cache-Control "public, max-age=31536000, immutable"

    @html path *.html
    header @html Cache-Control "public, max-age=300, must-revalidate"

    log {
        output file /var/log/caddy/pickit.log
        format json
    }
}
EOF
  echo "  appended pickit.kids block"
fi

say "6. Reload Caddy"
sudo systemctl reload caddy
echo "  caddy reloaded"

echo ""
echo "VPS setup complete."
echo "Once DNS for pickit.kids -> $(curl -s ifconfig.me 2>/dev/null || echo 'VPS IP') resolves,"
echo "Caddy will auto-issue a Let's Encrypt cert on the first request (30-90s)."
