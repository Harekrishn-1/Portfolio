# HKP Portfolio

Personal portfolio website — React + Vite + GSAP.

## Setup

```bash
npm install
npm run dev
```

Opens on http://localhost:5173

## Build

```bash
npm run build
```

Output goes to `dist/`. Deploy that folder to Vercel, Netlify or GitHub Pages.

## Deploy — Vercel (recommended, fastest)

1. Push this folder to GitHub as a repo
2. Go to vercel.com → New Project → import the repo
3. Framework preset: Vite (auto-detected)
4. Deploy — done in 2 minutes
5. Add custom domain in Settings → Domains: e.g. `portfolio.harekrishn.me`
   Then in your DNS provider, add a CNAME record: `portfolio` → `cname.vercel-dns.com`

## Deploy — GitHub Pages (also free)

1. `npm run build`
2. Push contents of `dist/` to a `gh-pages` branch, or use the `gh-pages` npm package
3. Settings → Pages → Source: gh-pages branch

## What to update

- `src/components/Home/Home.jsx` — line with `PLACE_YOUR_RESUME_ID` → put your Google Drive resume file ID
- Instagram link in `Home.jsx` and `Contact.jsx` — currently points to instagram.com; update with your handle if you want
- Any project descriptions in `src/components/Projects/Projects.jsx`

## Structure

```
src/
├── App.jsx
├── main.jsx
├── index.css               # global tokens
└── components/
    ├── Nav/
    ├── Home/               # hero + animated terminal
    ├── About/              # bio + skill cards
    ├── Projects/           # CodeSprint + Goals Tracker
    ├── Achievements/       # yoga medals + technical wins
    └── Contact/            # email + socials
```

Palette: `#0a0a0a` (black) + `#39ff88` (neon green). Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (code/labels).
