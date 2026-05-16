@echo off
setlocal
cd /d "%~dp0"

echo.
set "SSH_KEY=%USERPROFILE%\.ssh\id_ed25519_hostinger"

echo ==== 1. scp vps-setup.sh -> deploy@187.124.246.154 ====
scp -i "%SSH_KEY%" -o IdentitiesOnly=yes vps-setup.sh deploy@187.124.246.154:/tmp/vps-setup-pickit.sh
if errorlevel 1 (
  echo SCP FAILED
  pause
  exit /b 1
)

echo.
echo ==== 2. Run setup on VPS ====
echo (Sudo will prompt for password — type it in this window when asked.)
ssh -t -i "%SSH_KEY%" -o IdentitiesOnly=yes deploy@187.124.246.154 "bash /tmp/vps-setup-pickit.sh"

echo.
echo ==== Done ====
pause
