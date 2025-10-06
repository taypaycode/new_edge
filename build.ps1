# Path: build.ps1
# Purpose: Build script for Windows PowerShell to compile TypeScript and prepare the extension

Write-Host "Building Edge Feed Enhancer..." -ForegroundColor Cyan

# Check if node_modules exists
if (-not (Test-Path "node_modules")) {
    Write-Host "Installing dependencies..." -ForegroundColor Yellow
    npm install
}

# Compile TypeScript
Write-Host "Compiling TypeScript..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "Build successful!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Cyan
    Write-Host "1. Open Edge and navigate to edge://extensions/" -ForegroundColor White
    Write-Host "2. Enable 'Developer mode'" -ForegroundColor White
    Write-Host "3. Click 'Load unpacked'" -ForegroundColor White
    Write-Host "4. Select this folder: $PWD" -ForegroundColor White
} else {
    Write-Host "Build failed! Please check the errors above." -ForegroundColor Red
    exit 1
}

