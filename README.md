# TinyTrip

A calm, step-by-step guide for first-time parents planning their first trip with a baby (0–2 years).
Built with [Astro](https://docs.astro.build) as a static site; deploys to Netlify.

The project brief lives in Google Drive (`My Drive/TinyTrip/TINYTRIP_BRIEF.md`). The original single-file
prototype is `My Drive/TinyTrip/tinytrip-v2.html`.

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start the dev server at `localhost:4321`    |
| `npm run build`   | Build the site to `./dist/`                 |
| `npm run preview` | Preview the production build locally        |

## Structure

```text
src/
  data/        Content as JSON (ages, packing, guides, destinations, sleep, meltdown).
               Stepping stone to Supabase — edit content here, not in the pages.
  layouts/     Base.astro: <head>, nav, footer with the "not medical advice" note
  pages/       One file per route: / /ready /pack /destinations /guides /sleep /meltdown
  styles/      global.css: colour tokens and shared components
CONTENT_REVIEW.md  Health/safety claims still to verify before launch
```

## Content rules

- No made-up numbers: no user counts, ratings or scores until there is real data behind them.
- Any health, safety or travel-rule claim gets `"needsReview": true` in its JSON until it has a source.
  See `CONTENT_REVIEW.md`.
- Tone: warm, non-judgmental, "knowledgeable friend".
