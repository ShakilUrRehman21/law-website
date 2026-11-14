@echo off
title Sarfaraz Law - setup
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is not installed. Download the LTS version from https://nodejs.org and run this again.
  pause
  exit /b 1
)

echo Installing packages...
call npm install
if errorlevel 1 goto :fail
echo.
echo Done. Double-click dev.bat to start the site.
pause
exit /b 0

:fail
echo.
echo Something went wrong. Read the messages above.
pause
exit /b 1
