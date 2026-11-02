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
| `npm run check`   | Type-check pages and scripts                |

## Structure

```text
src/
  data/        Content as JSON (ages, packing, countdown, ask, worries, guides, destinations, sleep, meltdown).
               Stepping stone to Supabase — edit content here, not in the pages.
  layouts/     Base.astro: <head>, nav, footer with the "not medical advice" note
  pages/       One file per route: / /ready /plan /pack /ask /travel-day /sleep /meltdown /destinations /guides /thanks
  lib/         trip.ts: saved trip (age, mode, length, date, time zones, bedtime), share links, packing-list rules
  styles/      global.css: colour tokens and shared components
CONTENT_REVIEW.md  Health/safety claims still to verify before launch
```

## Content rules

- No made-up numbers: no user counts, ratings or scores until there is real data behind them.
- Any health, safety or travel-rule claim gets `"needsReview": true` in its JSON until it has a source.
  See `CONTENT_REVIEW.md`.
- Tone: warm, non-judgmental, "knowledgeable friend".

## Personalised packing list

Items in `src/data/packing.json` can carry:

- `show`: only list the item for these `ages` / `modes` / `lengths` (if the parent hasn't said, it's shown).
- `variants`: alternative `name` / `note` / `priority` when the trip matches `when` (first match wins).

The trip is saved in the browser (`tinytrip:trip:v1`) from the home form, the readiness page or the trip panel
on the packing list.

## Countdown, sharing and feedback

- **Countdown** (`/plan`): each task in `src/data/countdown.json` has `days` (how many days before travel to do
  it), and an optional `show.modes` and `link`. The page can export the open tasks as a calendar file (.ics).
- **Share links**: `shareLink()` in `trip.ts` puts the trip in the URL (`?age=&mode=&length=&date=&from=&to=&bed=`)
  plus ticked items (`packed=`, `done=`). Opening the link saves the trip and adds those ticks on the new device.
- **Feedback box**: on every page (turn off with `<Base feedback={false}>`). It's a Netlify Form called
  `feedback`. Submissions appear in the Netlify dashboard under Forms once form detection is enabled for the site.
