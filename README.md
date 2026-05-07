# Kairō — MVP Demo

> A voice-first personal AI that turns 5 minutes of daily speech into a permanently queryable memory of your life. Built on RAG. Privacy-first by design.

This is the Phase 1 hosted demo — a full interactive concept walkthrough with realistic mock data. Backend (Whisper + ChromaDB + Ollama) ships in Phase 3.

**Live demo:** _(your Vercel URL will go here after deploy)_

---

## What's inside

- **Home / Dashboard** — streak tracker, day-3 recall, weekly digest preview
- **Voice journal** — simulated recording with live transcript and auto domain tagging
- **Ask memory** — RAG-style answers grounded in cited memories
- **Timeline** — chronological memory browser with domain filters
- **iOS preview** — interactive iPhone frame with 6 tappable mobile screens, plus wireframe gallery and Q4 2026 roadmap
- **Pricing** — Free / Pro / Power freemium tiers
- **Light & dark themes** — toggle in the sidebar, preference saved to localStorage

Built for the UC New Venture Championship Spring 2026.

---

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deploy to Vercel (5 minutes)

The fastest path from this folder to a live URL.

### Option A — via Vercel CLI

```bash
npm install -g vercel
vercel
```

Answer the prompts (accept defaults). You'll get a live URL in ~60 seconds.

### Option B — via GitHub + Vercel dashboard

1. Create a new GitHub repo: `kairo-mvp`
2. From this folder:
   ```bash
   git init
   git add .
   git commit -m "Kairō MVP demo"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/kairo-mvp.git
   git push -u origin main
   ```
3. Go to [vercel.com/new](https://vercel.com/new), import the repo, click Deploy.
4. Done. Vercel auto-detects Next.js. Every push to `main` redeploys.

### Custom domain (optional)

In the Vercel project → Settings → Domains. Point your domain (e.g. `kairo.app`) at Vercel. Free SSL included.

---

## Tech stack

- **Next.js 14** (App Router)
- **Tailwind CSS** (dark amber/gold theme)
- **Lucide icons**
- **DM Serif Display + DM Sans** typography
- TypeScript

---

## What's mocked vs. real

| Feature | Status |
|---|---|
| UI / navigation / animations | Real |
| Dashboard, timeline, pricing | Real (mock data) |
| Voice recording | **Simulated** (timer + pre-scripted transcript) |
| RAG answers | **Pre-scripted** (keyed to suggested questions) |
| Auth, persistence, real LLM | Phase 3 |

This is intentional. Phase 1 ships the *experience* so judges, advisors, and beta testers can feel what the product does in 60 seconds.

---

## Roadmap

- **Phase 2** — Real voice capture (Web Speech API), localStorage persistence, real entries
- **Phase 3** — FastAPI backend, Whisper transcription, ChromaDB vectors, Ollama local LLM
- **Phase 4** — Mobile app (React Native), Day-3 push notifications, weekly digest generation

---

## Author

**Achyuth Narayan Shanku**
MS Information Systems, University of Cincinnati (Dec 2026)
1st place · 84.51° Retail Analytics Case Competition 2026
2nd place · Nucor Business Technology Hackathon 2026

---

*Kairō: the right moment, remembered.*
