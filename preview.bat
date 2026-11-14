@echo off
title Sarfaraz Law - preview production build
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is not installed. Download the LTS version from https://nodejs.org and run this again.
  pause
  exit /b 1
)

if not exist node_modules (
  echo Installing packages first...
  call npm install
  if errorlevel 1 goto :fail
)

echo Building...
call npm run build
if errorlevel 1 goto :fail
echo.
echo Serving the production build at http://localhost:4173
echo Close this window or press Ctrl+C to stop.
start "" http://localhost:4173
call npm run preview
if errorlevel 1 goto :fail
exit /b 0

:fail
echo.
echo Something went wrong. Read the messages above.
pause
exit /b 1
