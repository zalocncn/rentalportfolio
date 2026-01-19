# Script to help install Python on Windows
# This script will open the Python download page for you

Write-Host "Python Installation Helper" -ForegroundColor Green
Write-Host "========================" -ForegroundColor Green
Write-Host ""

# Check if Python is already installed
$pythonInstalled = $false
try {
    $pythonVersion = python --version 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Python is already installed!" -ForegroundColor Green
        Write-Host "Version: $pythonVersion" -ForegroundColor Green
        $pythonInstalled = $true
    }
} catch {
    # Python not found
}

if (-not $pythonInstalled) {
    Write-Host "Python is not installed." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "To install Python:" -ForegroundColor Cyan
    Write-Host "1. I'll open the Python download page for you" -ForegroundColor White
    Write-Host "2. Download and run the installer" -ForegroundColor White
    Write-Host "3. IMPORTANT: Check 'Add Python to PATH' during installation" -ForegroundColor Yellow
    Write-Host "4. After installation, restart your terminal" -ForegroundColor White
    Write-Host ""
    
    $response = Read-Host "Open Python download page in browser? (Y/N)"
    if ($response -eq 'Y' -or $response -eq 'y') {
        Start-Process "https://www.python.org/downloads/"
        Write-Host ""
        Write-Host "Download page opened! After installing Python, restart this terminal." -ForegroundColor Green
    } else {
        Write-Host ""
        Write-Host "You can download Python from: https://www.python.org/downloads/" -ForegroundColor Cyan
    }
} else {
    Write-Host ""
    Write-Host "Python is ready to use!" -ForegroundColor Green
}

Write-Host ""
Write-Host "Press any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
