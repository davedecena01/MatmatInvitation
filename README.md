# Matteo's Grand Adventure 🏴‍☠️

A private, mobile-first invitation website for **Matteo Pacis' Baptism & 1st Birthday**
(August 11, 2026 — Sta. Mesa, Manila), styled as a One Piece–inspired anime pirate
adventure. Fully static: React + Vite + TypeScript, CSS Modules, zero backend.

> The site is fully functional **before** any photos/artwork exist — every missing
> asset renders as a themed parchment placeholder card automatically.

## Quick start

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build → dist/
npm run preview  # preview the production build
```

## ✏️ Replace the placeholder content

**All text, names, links, and paths live in one file:**
[`src/config/invitationConfig.ts`](src/config/invitationConfig.ts).
Search it for `Placeholder` and `REPLACE_WITH` — nothing content-related is
hard-coded in components.

| What | Where |
|---|---|
| Baby name, headline, taglines | `baby`, `hero` in the config |
| Church / reception details & times | `ceremony`, `reception` |
| **Google Maps links** (both) | `ceremony.mapUrl`, `reception.mapUrl` |
| **RSVP Google Form link** | `rsvp.formUrl` |
| GCash name & number | `giftGuide.gcash` |
| Parents / grandparents / ninongs / ninangs | `crew` |
| Reminders wording | `reminders.items` |
| Gallery captions | `gallery.items` |

### 🖼 Replace the placeholder assets

Drop files into `public/` using these **exact filenames** — no code changes needed:

| Asset | Path |
|---|---|
| Hero artwork (16:9, "Luffy-inspired captain + baby" concept) | `public/images/hero-luffy-baby-placeholder.png` |
| Gallery photos (4:5) | `public/images/gallery/gallery-01.png` … `gallery-05.png` |
| GCash QR (square) | `public/images/gcash-qr-placeholder.png` |
| Background music (optional) | `public/audio/adventure-theme.mp3` |

- Generation prompts for the artwork are in [`image-prompts.md`](image-prompts.md).
- **Audio**: no track is shipped (copyright). Add your own legally-usable MP3 and the
  "Play Adventure Music" button appears automatically; while the file is missing the
  button is hidden. To remove music entirely, set `audio.enabled = false` in the
  config (or delete `AudioToggle` from `App.tsx`).

## 🎨 Theming

Colors, fonts, shadows, and spacing are CSS variables in
[`src/styles/theme.css`](src/styles/theme.css). Fonts (Luckiest Guy, Pirata One,
Nunito) are loaded from Google Fonts in `index.html`.

## 🚀 Deployment

### Vercel (recommended for privacy)

Free Vercel deploys work from a **private** GitHub repo — recommended since this is
a family site with a child's name and a GCash QR.

1. Push this folder to a GitHub repo (private is fine).
2. [vercel.com](https://vercel.com) → **Add New Project** → import the repo.
3. Vercel auto-detects Vite (build `npm run build`, output `dist`). Click **Deploy**.

No configuration needed — the default base path `/` is correct.

### GitHub Pages

⚠️ Free GitHub Pages requires a **public** repository.

1. Push to a GitHub repo named `matteo-invitation`.
2. Repo **Settings → Pages → Source → "GitHub Actions"** (one-time).
3. Push to `main` — the included workflow
   [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds with
   `VITE_BASE=/matteo-invitation/` and deploys automatically.

If you use a different repo name, update `VITE_BASE` in the workflow to
`/<your-repo-name>/`.

Manual alternative (any static host):

```bash
# PowerShell
$env:VITE_BASE = "/matteo-invitation/"; npm run build
# then upload dist/ anywhere
```

## 🔒 Privacy notes

- `<meta name="robots" content="noindex, nofollow">` is set — search engines are
  asked not to index the site.
- Share the URL directly with guests; prefer Vercel + private repo over public
  GitHub Pages.
- Double-check the GCash QR and personal names before deploying publicly.

## Project structure

```
src/
  config/invitationConfig.ts   ← edit ALL content here
  styles/theme.css             ← edit colors/fonts here
  components/                  ← one folder-flat component + CSS Module per section
  components/decor/            ← waves, clouds, sparkles, ship (pure decoration)
  hooks/                       ← countdown, scroll reveal, reduced motion
public/images, public/audio    ← drop real assets here (exact filenames above)
```

Accessibility & performance: semantic sections, keyboard-navigable menu (Escape
closes), alt text everywhere, real buttons/links, lazy-loaded images, fixed aspect
ratios (no layout shift), and all animations respect `prefers-reduced-motion`.
