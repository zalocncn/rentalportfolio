# How to Push Your Code to GitHub

## Step 1: Install Git

1. Go to: https://git-scm.com/download/win
2. Download and install Git for Windows
3. During installation, make sure to check "Add Git to PATH"
4. Restart your computer or terminal after installation

## Step 2: Push Your Code

After Git is installed, you have two options:

### Option A: Use the Script (Easiest)
1. Open PowerShell in this folder
2. Run: `.\push-to-git.ps1`

### Option B: Manual Steps
1. Open PowerShell in this folder
2. Run these commands one by one:

```powershell
git init
git add .
git commit -m "Update property management platform"
git remote add origin https://github.com/zalocncn/RE.git
git branch -M main
git push -u origin main
```

## If You Get Authentication Errors

GitHub requires authentication. You can either:

1. **Use a Personal Access Token** (Recommended):
   - Go to GitHub.com → Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Generate a new token with "repo" permissions
   - Use the token as your password when pushing

2. **Use GitHub Desktop** (Easier for beginners):
   - Download: https://desktop.github.com/
   - Clone your repository
   - Make changes and push through the GUI

## Need Help?

If you run into issues, the error messages will usually tell you what's wrong. Common issues:
- "Git is not recognized" → Git is not installed or not in PATH
- "Authentication failed" → You need to set up authentication (see above)
- "Repository not found" → Check the repository URL is correct
