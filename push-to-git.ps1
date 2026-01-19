# Script to push code to GitHub
# Run this after Git is installed

Write-Host "Setting up Git repository..." -ForegroundColor Green

# Initialize git repository (if not already initialized)
if (-not (Test-Path .git)) {
    git init
    Write-Host "Git repository initialized." -ForegroundColor Green
}

# Add all files
git add .

# Check if remote already exists
$remoteExists = git remote get-url origin 2>$null
if ($LASTEXITCODE -ne 0) {
    # Add remote repository
    git remote add origin https://github.com/zalocncn/RE.git
    Write-Host "Remote repository added." -ForegroundColor Green
} else {
    Write-Host "Remote repository already configured." -ForegroundColor Yellow
}

# Commit changes
Write-Host "Committing changes..." -ForegroundColor Green
git commit -m "Update property management platform: fix validation, update properties page, add address display in review"

# Push to GitHub
Write-Host "Pushing to GitHub..." -ForegroundColor Green
git branch -M main
git push -u origin main

Write-Host "Done! Your code has been pushed to GitHub." -ForegroundColor Green
