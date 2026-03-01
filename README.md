# UltraTechHub

A modern, multilingual digital agency website built with Next.js 16, featuring a 3D Spline background, smooth animations, and an interactive custom cursor.

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 16.1.6 | App Router, SSR |
| React | 19.2.3 | UI Framework |
| TypeScript | ^5 | Type Safety |
| Tailwind CSS | ^4 | Styling |
| next-intl | ^4.8.3 | Internationalization |
| Spline | ^4.1.0 | 3D Background Model |
| Cormorant Garamond | — | Preloader Font |
| Outfit / Manrope | — | UI Fonts |

---

## Features

- **3D Interactive Background** — Spline model loads after preloader completes
- **Preloader** — Animated loading screen with counter (0–100%) and progress line
- **Custom Cursor** — Dot + trailing ring with `mix-blend-mode: difference`
- **Multilingual** — 5 languages supported via next-intl
- **Responsive** — Mobile-first design with burger menu
- **Stack Slider** — Infinite marquee of tech logos
- **Smooth Animations** — Typewriter effect, marquee, cursor lerp

---

## Supported Languages

| Code | Language |
|---|---|
| `en` | English (default) |
| `de` | Deutsch |
| `sv` | Svenska |
| `fr` | Français |
| `fi` | Suomi |

---

## Project Structure

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx            # Locale layout (Preloader, Header, CustomCursor)
│   │   └── page.tsx              # Home page
│   ├── globals.css               # Global styles
│   └── layout.tsx                # Root layout (fonts)
├── components/
│   ├── header/
│   │   └── Header.tsx            # Navbar with mobile menu
│   ├── hero/
│   │   ├── HeroSection.tsx       # Hero section
│   │   ├── SplineBackground.tsx  # 3D model (loads after preloader)
│   │   └── TypewriterWord.tsx    # Typewriter animation
│   ├── CustomCursor.tsx          # Custom cursor with ring effect
│   ├── LanguageSwitcher.tsx      # Language dropdown / mobile cycler
│   ├── LangSetter.tsx            # Sets locale in store
│   ├── Preloader.tsx             # Loading screen
│   ├── Preloader.module.css      # Preloader styles
│   ├── StackSlider.tsx           # Tech logo marquee
│   └── ContactButton.tsx         # Contact CTA button
├── i18n/
│   ├── routing.ts                # Locale routing config
│   ├── request.ts                # Server-side locale resolver
│   └── navigation.ts             # Typed navigation hooks
└── middleware.ts                  # next-intl middleware

messages/
├── en.json
├── de.json
├── sv.json
├── fr.json
└── fi.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm / pnpm / yarn

### Installation

```bash
git clone https://github.com/your-username/ultratechhub.git
cd ultratechhub
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

## Adding a New Language

1. Add the locale code to `src/i18n/routing.ts`:
```ts
locales: ['en', 'de', 'sv', 'fr', 'fi', 'xx'],
```

2. Update the type in `src/i18n/request.ts`:
```ts
locale as 'en' | 'de' | 'sv' | 'fr' | 'fi' | 'xx'
```

3. Add the language entry in `src/components/LanguageSwitcher.tsx`:
```ts
{ code: 'xx', label: 'Language Name', flag: '🏳️' },
```

4. Create the translations file `messages/xx.json` using `en.json` as reference.

---

## Environment

No environment variables required for local development.
