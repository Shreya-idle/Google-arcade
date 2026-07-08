# Google Cloud Arcade 2026 — Facilitator Website

A modern landing page for the **Google Cloud Arcade 2026 Facilitator Program**, built with React + Vite + Tailwind CSS.

Hosted by **Mayank Sharma** & **Shreya Agrawal**.

## Quick Start

```bash
cd gca-website
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

Deploy the `dist/` folder to Vercel, Netlify, GitHub Pages, or any static host.

## Customize Links & Content

Edit `src/data/content.ts`:

| Field | Description |
|-------|-------------|
| `lumaUrl` | Luma event registration link |
| `referralCode` | Your facilitator referral code |
| `whatsappChannel` | WhatsApp channel URL |
| `whatsappGroup` | WhatsApp group URL |

Facilitator names, bios, and all programme content are also in this file.

## Sections

- **Hero** — Countdown to registration + Luma CTA
- **About** — Programme overview and value proposition
- **Facilitators** — Mayank Sharma & Shreya Agrawal profiles
- **Timeline** — Key dates (Jul 13 – Sep 14, 2026)
- **Setup Guide** — Mandatory pre-enrolment steps from the handbook
- **Points System** — Games, badges, and bonus milestones
- **Milestones** — M1 through Ultimate + prize tiers
- **FAQ & Strategy** — Common questions and winning tips
- **Resources** — Official Google Cloud Arcade links

## Tech Stack

- [React 19](https://react.dev/)
- [Vite 8](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) icons

## Reference

Content sourced from the **GCA Facilitator Handbook 2026** and the [Luma event page](https://luma.com/5avnzhw7).
