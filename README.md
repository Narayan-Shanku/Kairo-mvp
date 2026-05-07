<div align="center">

# Kairō

### Your second memory. Voice-first. Privately yours.

*Speak for 5 minutes a day. Build a mind that never forgets.*

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-d4a017?style=flat-square)](#license)
[![Fork friendly](https://img.shields.io/badge/Fork-friendly-22c55e?style=flat-square&logo=github)](#fork-and-make-it-yours)

[**Live demo →**](#) · [**What is this?**](#what-is-this) · [**Run it yourself**](#run-it-yourself) · [**Fork & customize**](#fork-and-make-it-yours)

</div>

---

## You already know this feeling

You figured something out last Tuesday. A small thing — why your mornings have been sharper, what made that conversation go differently, the reason that decision actually worked. It felt important when it happened.

It's gone now.

The result stuck. The *reasoning behind it* didn't. So next month, when the same problem comes back, you start from zero. You re-learn the same lesson, or you don't — and you make the same mistake.

That's the forgetting curve. Everyone has it. Notes apps don't fix it because writing is slow. ChatGPT doesn't fix it because it knows the public internet, not you.

**Kairō does fix it.**

---

## What is this?

Kairō is a voice-first personal AI that turns 5 minutes of daily speech into a permanently queryable memory of your own life.

You speak. The app transcribes you. Your words get stored privately and embedded into a searchable index. Later — days, weeks, months from now — you ask a question in plain language, and Kairō answers it using *your own past words*, with citations to the exact moments you said them.

> **You ask:** "Why does my standup feel smoother lately?"
>
> **Kairō answers:** Two threads in your memory point at the same answer. On May 5 you wrote that prepping standup updates the night before makes them faster. Earlier in April you flagged that morning ambiguity costs you the first hour. Same root cause, both times — front-loading clarity.
>
> *Sources: Mon, May 5 · Mon, Apr 28 · Fri, Apr 25*

The metaphor: your biological brain is **RAM** — fast, fluid, but lossy. Kairō is **ROM** — permanent, queryable, yours.

---

## What's in this repo

This repo contains the **interactive concept demo** — a polished walkthrough of every Kairō screen, built with realistic mock data so anyone can experience the product in 60 seconds without waiting on backend infrastructure.

It's a complete Next.js web app you can clone, run, and deploy in minutes. Perfect if you want to:

- See what a privacy-first voice-AI product could look and feel like
- Fork it as a starting point for your own journaling or memory app
- Use the design system (light/dark themes, amber/gold accents, mobile preview) for inspiration
- Learn how to structure a Next.js 14 + Tailwind app with multiple polished routes

### What you can click through

| Page | What it does |
|---|---|
| **Home** | Daily dashboard — 7-day streak tracker, "memory from 3 days ago" recall card, weekly digest |
| **Voice journal** | Tap-to-record interface with live transcript and auto-detected topic tags |
| **Ask memory** | Ask questions about your own past in plain language, with sourced answers |
| **Timeline** | Browse every memory chronologically, filter by life domain |
| **iOS preview** | Interactive iPhone with 6 tappable mobile screens + annotated wireframes |
| **Pricing** | Three-tier freemium model (Free / Pro / Power) |

Everything is interactive. Every page works on mobile. There's a light/dark theme toggle in the sidebar.

---

## How it works

The full Kairō pipeline (planned for the next phase):

```
Your voice  →  Whisper (transcribe)  →  ChromaDB (vector store)
                                              ↓
                            Your question  →  RAG retrieval
                                              ↓
                                  Local LLM via Ollama
                                              ↓
                                Answer + source citations
```

**Why local-first?** Because journals contain the most personal data anyone produces — health questions, relationship doubts, career decisions, half-formed thoughts. Sending that to a cloud LLM is unacceptable. Kairō is designed so your voice never has to leave your device.

---

## What's real vs. what's coming

This is honest scaffolding, not a finished product. Here's the truth:

| Feature | Status |
|---|---|
| UI, navigation, animations, theming | ✅ Real and production-quality |
| All page layouts, mock memories, design system | ✅ Real |
| iOS preview & wireframe gallery | ✅ Real |
| Voice recording | 🟡 Simulated (timer + pre-scripted transcript) |
| AI answers | 🟡 Pre-scripted (keyed to suggested questions) |
| Real audio capture, Whisper transcription, RAG retrieval | 🔴 Coming next |

The scaffolding is intentional. You can show the experience to anyone in 60 seconds and they'll get it — without needing to build the entire backend first.

---

## Run it yourself

You'll have it running on your laptop in 3 minutes.

### What you need

- A computer (Mac, Windows, or Linux)
- [Node.js 18 or higher](https://nodejs.org/) — download the LTS version if you don't have it
- A terminal (Terminal on Mac, PowerShell on Windows)

### Step 1 — Get the code

If you don't have Git installed yet, [grab it here](https://git-scm.com/downloads). Then in your terminal:

```bash
git clone https://github.com/YOUR_USERNAME/kairo-mvp.git
cd kairo-mvp
```

*Don't have Git? You can also click the green "Code" button at the top of this repo on GitHub, choose "Download ZIP," unzip it, and `cd` into the folder.*

### Step 2 — Install dependencies

```bash
npm install
```

This downloads everything Kairō needs to run (Next.js, React, Tailwind, etc.). Takes about 60 seconds the first time.

### Step 3 — Start the dev server

```bash
npm run dev
```

You'll see something like:

```
✓ Ready in 2.3s
○ Local:   http://localhost:3000
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser. That's it. You're running Kairō locally.

The app hot-reloads as you edit any file, so feel free to tinker. Press `Ctrl+C` in the terminal to stop the server.

---

## Deploy your own copy to the internet

If you want a public URL you can share, [Vercel](https://vercel.com) hosts Next.js apps for free.

### The 60-second path

```bash
npm install -g vercel
vercel login
vercel
```

Accept all the default prompts. Vercel will build and deploy your app, and give you a live URL like `kairo-mvp-yourname.vercel.app` in about a minute.

### The proper path (auto-deploys on every push)

1. Push your code to GitHub (`git push origin main`)
2. Go to [vercel.com/new](https://vercel.com/new)
3. Click **Import** next to your repo
4. Don't change any settings — Vercel detects Next.js automatically
5. Click **Deploy**

Now every time you `git push`, Vercel auto-deploys the new version. Free SSL, free CDN, free forever for personal projects.

### Want a custom domain?

Buy one from [Namecheap](https://namecheap.com), [Porkbun](https://porkbun.com), or [Cloudflare](https://cloudflare.com) (most domains are under $15/year). Then in your Vercel project → **Settings** → **Domains**, add it. Vercel handles SSL automatically.

---

## Fork and make it yours

This repo is MIT-licensed and explicitly built to be forked. If you want to use it as the foundation for your own project, here's where to start:

### Quick personalization (10 minutes)

| What to change | Where it lives |
|---|---|
| Brand name "Kairō" → your project name | `app/components/Sidebar.tsx`, `app/layout.tsx` (page title), `README.md` |
| Sample memories | `app/lib/data.ts` — replace the `memories` array |
| Pre-scripted AI answers | `app/lib/data.ts` — edit the `recallAnswers` object |
| Pricing tiers | `app/pricing/page.tsx` |
| Color theme (currently amber/gold) | `app/globals.css` — change `--amber-glow`, `--amber-deep`, `--amber-soft` |
| Fonts | `app/layout.tsx` — swap `DM_Serif_Display` and `DM_Sans` for any [Google Font](https://fonts.google.com/) |
| Sidebar avatar/name | `app/components/Sidebar.tsx` |

### Deeper customization

- **Add a new page**: Create a new folder under `app/` with a `page.tsx` file. Add a nav link in `app/components/Sidebar.tsx`.
- **New domain categories**: Edit the `Domain` type and `domainColors` in `app/lib/data.ts`.
- **New mobile screens**: Add to `app/components/MobileScreens.tsx`, then register the screen in `app/mobile/page.tsx`.
- **Wire up real voice**: The browser's [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) is the easiest starting point. Replace the simulated logic in `app/journal/page.tsx`.
- **Wire up a real LLM**: Set up an API route under `app/api/`, send the user's question + retrieved context to your favorite model (OpenAI, Anthropic, Ollama), and stream the response back.

### Ideas for forks

- A **dream journal** with morning voice capture and pattern detection
- A **fitness journal** that connects to wearable data
- A **language learning log** where you practice and review
- A **research notebook** for academics tracking literature and ideas
- A **therapy companion** with explicit privacy guarantees

If you build something cool, open an issue and tell me — I'd love to see it.

---

## Project structure

```
kairo-mvp/
├── app/
│   ├── components/
│   │   ├── Sidebar.tsx          ← Main navigation
│   │   ├── ThemeProvider.tsx    ← Light/dark theme logic
│   │   ├── ThemeToggle.tsx
│   │   ├── DomainTag.tsx        ← Color-coded life-domain tags
│   │   ├── PhoneFrame.tsx       ← Realistic iPhone shell
│   │   ├── MobileScreens.tsx    ← All 6 iOS app screens
│   │   └── WireframeGallery.tsx ← Annotated wireframes
│   ├── lib/
│   │   └── data.ts              ← All mock data lives here
│   ├── journal/page.tsx         ← Voice journal route
│   ├── recall/page.tsx          ← Ask-memory route
│   ├── timeline/page.tsx        ← Memory browser route
│   ├── mobile/page.tsx          ← iOS preview route
│   ├── pricing/page.tsx         ← Pricing route
│   ├── globals.css              ← Theme variables
│   ├── layout.tsx               ← Root layout + fonts
│   └── page.tsx                 ← Home dashboard
├── tailwind.config.js           ← Maps theme vars to Tailwind classes
├── package.json
└── README.md
```

---

## Tech stack

- **[Next.js 14](https://nextjs.org/)** with App Router
- **[TypeScript](https://www.typescriptlang.org/)** for full type safety
- **[Tailwind CSS](https://tailwindcss.com/)** — CSS variables drive the light/dark theme system
- **[Lucide React](https://lucide.dev/)** for icons
- **[DM Serif Display](https://fonts.google.com/specimen/DM+Serif+Display) + [DM Sans](https://fonts.google.com/specimen/DM+Sans)** typography pairing

No state management library, no UI kit, no analytics SDK. Everything is hand-built and easy to read.

---

## What's coming next

This is the concept demo. The next versions add real functionality:

- **Real voice capture** — browser-based recording via the Web Speech API, with `localStorage` persistence so your entries survive page refreshes
- **RAG backend** — a FastAPI service running Whisper for transcription, ChromaDB with hybrid search (semantic + keyword) for retrieval, and Ollama for fully local LLM answers
- **iOS app** — React Native build with day-3 push notifications, weekly digest alerts, Apple Watch quick-capture, and iCloud-encrypted sync

If any of those interest you, watch this repo or open an issue.

---

## FAQ

**Is the demo collecting any of my data?**
No. There's no backend, no analytics, no tracking. Everything runs in your browser. The "memories" you see on the timeline are hardcoded sample data.

**Can I use this commercially?**
Yes — it's MIT licensed. Fork it, ship it, sell it. You don't owe me anything. A friendly heads-up email is appreciated but not required.

**Why "Kairō"?**
It's from the Greek *kairós* (καιρός) — the right moment, the opportune time. The name reflects the product's purpose: surfacing the right memory at the right moment.

**Will the real version be open source?**
Some of it, yes. The frontend, design system, and core RAG logic will stay open. Specific product features and infrastructure may not be.

**I'm not a developer. Can I still use Kairō?**
Right now, no — this is a code repository, not a downloadable app. The actual consumer version is in development. You can play with the [live demo](#) to see how it'll feel.

---

## Contributing

Issues and pull requests welcome. If you have ideas for new screens, design improvements, accessibility fixes, or just want to clean up some code — please do.

If you're forking this for your own project, no need to contribute back. Just go build something good.

---

## License

MIT — see [LICENSE](LICENSE) for the full text. Short version: do whatever you want with this code, as long as the original license notice stays in your copy.

---

<div align="center">

*Kairō — the right moment, remembered.*

⭐ If this helped you, consider starring the repo so others can find it.

</div>
