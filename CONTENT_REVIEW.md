# Content review list

Health, safety and travel-rule claims that must be checked against an authoritative source
(e.g. NHS, AAP, CDC, IATA / airline policies, government passport offices) and ideally reviewed by a
health professional before public launch.

Each item is marked `"needsReview": true` in `src/data/*.json`, which shows a "Being reviewed" tag on the site.
When a claim is verified: add the source, fix the wording if needed, and set `needsReview` to `false`.

## Is baby ready? (`src/data/ages.json`)
- [ ] Newborns under 6 weeks "not recommended for long-haul flights"; paediatricians advise waiting 6–8 weeks for air travel
- [ ] "Short car trips (1–2 hours) are perfectly safe from day one" (car-seat time limits for newborns?)
- [ ] "Most airlines allow infants from 2 weeks old"
- [ ] 3–6 months: "babies often sleep well with engine white noise"; "bassinet eligibility on most airlines"
- [ ] "Lap infant fares apply until 24 months on most airlines"

## Packing list (`src/data/packing.json`)
- [ ] "Many standard policies exclude babies under 8 weeks" (travel insurance)
- [ ] Passport "takes 4–6 weeks to process" (varies by country — consider linking per-country)
- [ ] Vaccination records "required on arrival" by some destinations
- [ ] "Bring 30% more formula than you think"
- [ ] Infant paracetamol "bring 2 bottles"; dosage note (minimum age / weight; medicine rules abroad)
- [ ] "Ear thermometers are fastest" (NHS guidance on thermometer types for under-1s)
- [ ] Oral rehydration sachets — age suitability
- [ ] Familiar sleep sack/swaddle (safe-sleep guidance on swaddling once rolling)
- [ ] "Most airlines let you take the stroller to the gate" (flight variant)
- [ ] Feed / drink during take-off and landing helps with ear pressure (flight item, and toddler variant)
- [ ] Swaddle: "stop once baby shows signs of rolling" (0–3 month variant)
- [ ] Sun: "shade is the best protection for young babies"; sun cream age guidance
- [ ] Road trips: "stop at least every 2 hours" out of the car seat
- [ ] Airline infant rules item (lap fares, bassinets, minimum age vary by airline)
- [ ] Paracetamol variant for 0–3 months: "shouldn't be given medicine without advice"

## Is baby ready? — flight note
- [ ] Newborn + flight: "talk to your GP or health visitor first; many airlines have a minimum age"

## Guides (`src/data/guides.json`)
- [ ] Ear pressure: feed during take-off and landing
- [ ] "Most babies sleep more than usual due to engine noise"
- [ ] "Formula available globally" (brands/stages differ; some countries restrict import)

## Meltdown guide (`src/data/meltdown.json`)
- [ ] Co-regulation claim (step 2). Original prototype said babies "read your cortisol level directly" and
      "language processing shuts down" — softened to plain-language versions; confirm the softened wording.

## Sleep (`src/data/sleep.json`)
- [ ] East/west bedtime pre-shift tips and light-exposure advice for infants
- [ ] Sample 6–12 month schedule (two naps, ~7pm bedtime) as a "typical" pattern

## Destinations (`src/data/destinations.json`)
- [ ] All tags (e.g. "World-class hospitals", "Nursing rooms common") need a source or should be reworded as
      parent-reported. Fabricated 0–100 scores were removed; decide on a credible rating method first.
