@echo off
title Sarfaraz Law - build
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

echo Building the production site into the dist folder...
call npm run build
if errorlevel 1 goto :fail
echo.
echo Build finished. Files are in the dist folder.
pause
exit /b 0

:fail
echo.
echo Something went wrong. Read the messages above.
pause
exit /b 1
