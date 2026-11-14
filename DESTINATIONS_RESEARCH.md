# Destinations research (November 2026)

Notes behind `/destinations` ("Five easy first trips with a baby"). The page content lives in
`src/data/destinations.json`; each claim lists its source ids from `src/data/sources.json`.

## What matters for a first trip with a baby (0–2)

Drawn from parent forums and blogs (Peanut, Mumsnet, family-travel blogs) and the factors scored by the LateRooms
index. Parents raise the same things again and again:

1. **Travel time.** Short flight and quick airport transfer. Small time difference, so naps and bedtime don't move.
2. **Pram-friendliness.** Step-free transport, flat streets, few cobbles. Cobbles and hills come up most as
   regrets (Lisbon, Florence and Rome are named).
3. **Space to stop.** Parks for pram naps and for new walkers; playgrounds; cafés with high chairs.
4. **Things for under-5s.** Zoos, aquariums and dedicated baby/toddler play areas, not big-kid attractions.
5. **Health and rules.** Familiar healthcare access (GHIC in the EU), simple entry rules, no special vaccines.
6. **Season.** Heat in southern Europe in summer; short dark days in the north in winter; local festivals
   (Valencia's Fallas fireworks).

## How the five were picked

Start: the [LateRooms Family Breaks Index](https://www.laterooms.com/blog/easiest-european-city-breaks-with-young-kids/)
(reported by [Euronews, 16 March 2026](https://www.euronews.com/2026/03/16/travelling-with-young-kids-these-are-europes-easiest-city-breaks-for-families)).
It ranks European city breaks for babies, toddlers and young children on flight times from UK airports, airport
transfer time, walkability and accessibility, child-friendly attractions and family accommodation. It does not
publish weights or data sources, so it's a starting point, not proof.

Top 10: Copenhagen, Berlin, Barcelona, Florence, Amsterdam, Valencia, Basel, Kraków, Prague, Vienna.

Each candidate was then checked for step-free transport (operator pages), free travel for small children, parks and
under-5 attractions, and seasonal problems.

| City | Flight (index) | Airport to centre (index) | Step-free transport (operator) | Small children free (operator) | Picked? |
|---|---|---|---|---|---|
| Copenhagen | just under 2h | ~15 min metro | every metro station has a lift (Visit Copenhagen; Metro reserves lifts for prams) | 2 under-12s per adult | Yes |
| Berlin | just over 2h | ~30 min train | 86% of U-Bahn stations (BVG) | under 6 | Yes |
| Barcelona | just over 2h | ~25 min train | 153 of 165 metro stations (TMB / city council) | under 4 (TMB FAQ) | No: overlaps with Valencia, busier |
| Florence | ~2½h | ~20 min tram | not checked | not checked | No: cobbles, per parents |
| Amsterdam | just over 1h 20m | ~17 min train | pushchairs free, marked spaces (GVB) | up to and including 3 | Yes (also Eurostar) |
| Valencia | ~2h 35m | ~20 min metro | metro accessibility work ongoing (FGV); flat 9 km Turia park | not confirmed (temporary schemes) | Yes |
| Vienna | ~2½h | ~16 min CAT | all U-Bahn stations step-free (Wiener Linien) | under 6, to end of that school year | Yes |

Long-haul (Tokyo topped [Radical Storage's kid-friendly index](https://radicalstorage.com/travel/kid-friendly-cities/);
Singapore often recommended) was left out of this first list: long flights and big time shifts make a harder first
trip. Worth a separate "bigger trips" page later.

## Key findings by city

**Copenhagen.** Index #1. Prams free on metro, buses and trains when there's space; marked pram places. Up to two
under-12s free per adult ticket. Playgrounds everywhere (the King's Garden dragon playground; the Tower playground in
Fælledparken). Experimentarium's Miniverset is for ages 1–5. Lift outages are listed on the metro status page
(Christianshavn's lift was out for maintenance when checked).

**Vienna.** All U-Bahn stations step-free (Wiener Linien: 109 station buildings, 291 lifts). Children free on
Wiener Linien until the end of the school year they turn 6. ZOOM Ocean play area for ages 0–6 (some listings say from
8 months; booking needed). Schönbrunn zoo and gardens. TravelHealthPro: tick-bite precautions for everyone; TBE
vaccine only for higher-risk activities (hiking, camping, forests).

**Amsterdam.** Shortest flight; Eurostar direct from London, under-4s free on a lap (one per adult; passports
needed). GVB: pushchairs free, marked areas on trams and buses; children up to and including 3 free. Cobbles in
older streets (Frommer's). From 1 January 2027 GVB says 4–11s travel free nationwide with a paying adult (Dutch-only
source, not on the page yet).

**Valencia.** Turia Garden ~9 km through the city on the old riverbed; Gulliver Park (70 m climbable figure);
Bioparc; Oceanogràfic; beaches. Fallas 1–19 March: mascletà daily at 2pm in Plaza del Ayuntamiento; The Local reports
up to 120 dB and the city calling it a health hazard for babies (no primary measurement found). Hot July–August.
Metrovalencia child-fare rules were temporary/extended in 2026; not stated on the page.

**Berlin.** Index #2 (200+ family attractions). 86% of U-Bahn stations step-free (BVG; older BVG figure 81% in
2022); lifts can be out. Under-6s free. Tiergarten and Tempelhofer Feld are flat and huge; Prenzlauer Berg cafés
with play corners (parent blog).

## For all five (GOV.UK, checked November 2026)

- EU Entry/Exit System: fingerprints and photo at first entry; children aged 11 or younger aren't fingerprinted but
  may be photographed. ETIAS not mentioned on the FCDO Spain page, so not yet required.
- UK passports: issued less than 10 years before arrival, and valid 3 months after leaving the Schengen area.
- GHIC covers state healthcare; still need travel insurance.
- All five are one hour ahead of the UK.

## Photos

All from Wikimedia Commons under CC0, CC BY or CC BY-SA licences; author, licence and file page are in
`src/data/photo-credits.json` and shown under each photo. Files are in `src/assets/destinations/` and are resized
by Astro at build time.

## Gaps and things to re-check

- Re-check fares, lifts and Fallas dates before each season; they change.
- The LateRooms index doesn't publish its method in detail.
- Blog and forum points are opinions, labelled as such on the page.
- Would benefit from real parents' trip reports for each city (ask in the feedback survey).
