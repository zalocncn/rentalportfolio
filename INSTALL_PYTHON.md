# How to Install Python on Windows

## Method 1: Download from Python.org (Recommended)

1. **Download Python:**
   - Go to: https://www.python.org/downloads/
   - Click the big yellow "Download Python" button (it will download the latest version)
   - Or go directly to: https://www.python.org/downloads/windows/

2. **Run the Installer:**
   - Double-click the downloaded `.exe` file
   - **IMPORTANT:** Check the box that says **"Add Python to PATH"** at the bottom of the installer
   - Click "Install Now" (or "Customize installation" if you want to change options)
   - Wait for installation to complete

3. **Verify Installation:**
   - Open a new PowerShell or Command Prompt window
   - Type: `python --version`
   - You should see something like: `Python 3.12.x`

## Method 2: Install via Microsoft Store

1. Open Microsoft Store
2. Search for "Python"
3. Click "Install" on Python 3.12 (or latest version)
4. Wait for installation

## Method 3: Install via Chocolatey (if you have it)

If you have Chocolatey package manager installed:
```powershell
choco install python
```

## After Installation

1. **Restart your terminal/IDE** - Close and reopen PowerShell or Cursor
2. **Verify it works:**
   ```powershell
   python --version
   pip --version
   ```

## Troubleshooting

If `python` command doesn't work after installation:
- Make sure you checked "Add Python to PATH" during installation
- Restart your computer
- Or manually add Python to PATH:
  1. Search for "Environment Variables" in Windows
  2. Edit "Path" variable
  3. Add: `C:\Users\YourUsername\AppData\Local\Programs\Python\Python3xx`
  4. Add: `C:\Users\YourUsername\AppData\Local\Programs\Python\Python3xx\Scripts`

## Need Help?

If you run into issues, the error message will usually tell you what's wrong. Common issues:
- "Python was not found" → Python is not installed or not in PATH
- "pip is not recognized" → Python was installed but pip wasn't included (reinstall and check "pip" option)
