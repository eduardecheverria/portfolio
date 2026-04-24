# Eduardo // Netrunner Portfolio

Cyberpunk-themed developer portfolio built with React + TypeScript + Vite.
Bilingual (EN/ES) with persistent locale preference.

## Stack

- **React 18** + **TypeScript** (strict)
- **Vite** — fast dev server, optimized builds
- **CSS Modules** — scoped styles, no runtime overhead
- **Custom i18n hook** — lightweight, no bloat from i18next

## Setup

```bash
pnpm install
pnpm dev      # http://localhost:5173
pnpm build    # production build
pnpm preview  # preview built output
```

## Structure

```
src/
├── components/     # UI components (each with its own .module.css)
├── hooks/          # useI18n, useClock, useScrollReveal
├── i18n/           # translations (en, es) + types
├── data/           # portfolio content (skills, missions, quests)
├── types/          # shared TS types
└── styles/         # globals + design tokens
```

## Adding a new mission

Edit `src/data/missions.ts` and add a translation key in both
`src/i18n/en.ts` and `src/i18n/es.ts`. Types will catch any
missing keys at compile time.

## Why no i18next?

For ~50 strings and 2 locales, a custom hook is faster, simpler,
and ships ~30kb less to the client. If we add a 3rd locale or
plurals, swap it in.
