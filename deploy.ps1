# deploy.ps1 — local build + push for pickit.kids
# Right-click this file in File Explorer → "Run with PowerShell".
# (Or: powershell -ExecutionPolicy Bypass -File deploy.ps1)

$ErrorActionPreference = 'Stop'
$here = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $here

function Section($t) { Write-Host ""; Write-Host "==== $t ====" -ForegroundColor Cyan }
function OK($t)      { Write-Host "  ok: $t" -ForegroundColor Green }
function Warn($t)    { Write-Host "  !!  $t" -ForegroundColor Yellow }
function Fail($t)    { Write-Host "  XX  $t" -ForegroundColor Red; Read-Host "Press Enter to close"; exit 1 }

Section "1. Node modules"
if (-not (Test-Path "node_modules\.package-lock.json") -and -not (Test-Path "node_modules\astro")) {
  Write-Host "  installing..."
  npm install --no-audit --no-fund
  if ($LASTEXITCODE -ne 0) { Fail "npm install failed" }
}
OK "node_modules present"

Section "2. Astro build"
npm run build
if ($LASTEXITCODE -ne 0) { Fail "astro build failed — fix the error above and re-run" }
OK "dist/ generated"

Section "3. Git status"
$status = git status --short
if ([string]::IsNullOrWhiteSpace($status)) {
  Warn "nothing to commit — repo clean"
} else {
  $status | Write-Host
}

Section "4. Commit"
git add -A
if ([string]::IsNullOrWhiteSpace($status)) {
  Write-Host "  (skipped — nothing staged)"
} else {
  git commit -m "feat(pickit): 100-question pool + cheesy sticker styling layer"
  if ($LASTEXITCODE -ne 0) { Fail "git commit failed" }
  OK "committed"
}

Section "5. Push to GitHub"
git push origin main
if ($LASTEXITCODE -ne 0) { Fail "git push failed — check creds / network" }
OK "pushed to origin/main"

Section "Done"
Write-Host "Local build + push complete." -ForegroundColor Green
Write-Host ""
Write-Host "Next:" -ForegroundColor Cyan
Write-Host "  1. SSH to VPS and run the VPS setup script (see vps-setup.sh in this folder)."
Write-Host "  2. Point pickit.kids DNS A record at 187.124.246.154 in your registrar."
Write-Host ""
Read-Host "Press Enter to close"
