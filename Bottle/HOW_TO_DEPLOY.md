# How to Deploy Your Website

Since you don't have the necessary tools installed (Node.js and Firebase CLI), you need to follow these steps to put your website online.

### 1. Install Node.js
Download and install the "LTS" version from: [https://nodejs.org/](https://nodejs.org/)

### 2. Install Firebase Tools
Open your terminal (PowerShell or Command Prompt) and run:
```bash
npm install -g firebase-tools
```

### 3. Login to Google
Run this command and follow the browser prompt to login with the account that owns the `bottlecraft-eb37e` project:
```bash
firebase login
```

### 4. Deploy!
Make sure you are in the `d:/Bottle` folder, then run:
```bash
firebase deploy
```

Once finished, it will give you a URL (like `https://bottlecraft-eb37e.web.app`) where your site is live!
