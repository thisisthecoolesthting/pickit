@echo off
setlocal
cd /d "%~dp0"
echo.
echo ==== 1. Astro build ====
call npm run build
if errorlevel 1 (
  echo.
  echo BUILD FAILED
  pause
  exit /b 1
)

echo.
echo ==== 2. Git status ====
git status --short

echo.
echo ==== 3. Commit ====
git add -A
git commit -m "feat(pickit): 100 questions + cheesy sticker styling"

echo.
echo ==== 4. Push to GitHub ====
git push origin main
if errorlevel 1 (
  echo.
  echo PUSH FAILED
  pause
  exit /b 1
)

echo.
echo ==== Done ====
echo Local build + push complete.
echo Next: SSH to VPS and run bash /tmp/vps-setup.sh after scp'ing it.
echo.
pause
