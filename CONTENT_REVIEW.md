# Content review list

Health, safety and travel-rule claims on TinyTrip, with the draft wording now on the site and the official
source each one is based on. Sources live in `src/data/sources.json` and appear on the site as
"From: NHS ↗" links under each claim.

**Status:** all items below were redrafted on 2 Nov 2026 from official pages (checked that day). They still
carry `"needsReview": true`, which shows a quiet "Still being double-checked" note on the site.

**To approve an item:** read the wording and the linked source. Ideally also ask a health visitor or
paediatric nurse to read the health items. Then set `"needsReview": false` on it and tick it here.

Rules change, so re-check airline and government pages every few months. UK sources come first because the
site is written for UK parents; a "Not in the UK?" note is added where rules differ by country.

## Is baby ready? (`src/data/ages.json`)

- [ ] **0–6 weeks, flying:** "the American Academy of Pediatrics says it's generally safe once a healthy baby is at
  least 7 days old, but suggests waiting until 2–3 months if you can." Source: [AAP, Flying with baby](https://www.healthychildren.org/English/safety-prevention/on-the-go/Pages/Flying-with-Baby.aspx).
  *Replaces the unsourced "paediatricians advise waiting 6–8 weeks".*
- [ ] **0–6 weeks, airline minimum ages:** British Airways from 48 hours (recommends one week); easyJet from 14
  days; premature babies may need medical clearance. Sources: [BA](https://www.britishairways.com/content/information/family-travel/tickets-and-travel-documents),
  [easyJet](https://www.easyjet.com/en/help/boarding-and-flying/flying-with-children), [Aer Lingus](https://www.aerlingus.com/prepare/travelling-with-children/booking-information/).
  *Replaces "most airlines allow infants from 2 weeks".*
- [ ] **0–6 weeks, car trips:** "The Lullaby Trust suggests avoiding long drives with very young babies, and stopping
  for regular breaks." Source: [Lullaby Trust, Car seats](https://www.lullabytrust.org.uk/baby-safety/baby-product-information/car-seats/).
  *Replaces "short car trips are perfectly safe from day one".*
- [ ] **6 weeks–3 months:** healthy babies can usually fly; check with GP if born early or unwell; feeding or a dummy
  can help ear pressure. Sources: AAP (above), [CDC Yellow Book](https://www.cdc.gov/yellow-book/hcp/family-travel/traveling-safely-with-infants-and-children.html).
- [ ] **3–6 months, bassinets:** limited; BA carrycots are for babies up to 6 months and 8kg. Source:
  [BA, Family seating](https://www.britishairways.com/content/information/family-travel/seating).
  *Removed: "babies often sleep well with engine white noise" (no source).*
- [ ] **6–12 months, lap travel:** lap travel until the 2nd birthday; own seat from then on if they turn 2 mid-trip.
  Sources: BA (tickets page), easyJet.
- [ ] **2 years + (new):** general tips only; "From age 2 they need their own seat on a plane." Sources: easyJet, BA (tickets page).

## Travelling with more than one (`src/data/multi.json`, packing `lap-rule`, ask `air-multi`) (new)

- [ ] **Lap babies:** "Each adult can only hold one baby on their lap on a plane. With two under-2s, you'll need a second
  adult or a seat for one of them." Sources: [BA, Family seating](https://www.britishairways.com/content/information/family-travel/seating), easyJet.
  Same claim appears on the packing list (flights, 2+ children, youngest under 2) and in Questions to ask.
- Other multi-child tips (labelled bags, double stroller, jobs for siblings, nap planning) are practical, not rule-based.

## Packing list (`src/data/packing.json`)

- [ ] **Insurance:** baby named on the policy; covers treatment and getting home; GHIC/EHIC isn't a substitute.
  Source: [GOV.UK, Foreign travel insurance](https://www.gov.uk/guidance/foreign-travel-insurance).
  *Removed: "many policies exclude babies under 8 weeks" (no source found).*
- [ ] **Passport:** babies need their own; allow up to 3 weeks. Sources: [GOV.UK, Child passport](https://www.gov.uk/get-a-child-passport),
  [HM Passport Office](https://www.gov.uk/government/organisations/hm-passport-office/about-our-services). *Was "4–6 weeks".*
- [ ] **Vaccination record:** some countries ask for proof (e.g. yellow fever). Source: [NaTHNaC TravelHealthPro](https://travelhealthpro.org.uk/countries).
- [ ] **Formula:** enough for the journey plus extra for delays; brand may not be sold abroad; UK hand-luggage
  allowance. Sources: [GOV.UK, Baby food and milk](https://www.gov.uk/hand-luggage-restrictions/baby-food-and-baby-milk), CDC.
  *Removed: "bring 30% more" (no source).*
- [ ] **Bottles:** sterilise until 12 months; microwave steam bags; follow pack instructions. Source:
  [NHS, Bottle feeding advice](https://www.nhs.uk/conditions/baby/breastfeeding-and-bottle-feeding/bottle-feeding/advice/).
- [ ] **Take-off feed:** sucking/swallowing (and chewing for toddlers) can help ear pressure. Sources: AAP, CDC.
- [ ] **Swaddle:** stop once baby shows signs of rolling. Source: [Lullaby Trust, Swaddling](https://www.lullabytrust.org.uk/baby-safety/baby-product-information/swaddling/).
- [ ] **Paracetamol:** most children over 2 months; 2–3 months only if over 4kg and born after 37 weeks. Source:
  [NHS, Paracetamol for children](https://www.nhs.uk/medicines/paracetamol-for-children/). *Removed: "bring 2 bottles".*
- [ ] **Thermometer:** digital, under the armpit for under-5s. Source: [NHS, Taking your baby's temperature](https://www.nhs.uk/conditions/baby/health/how-to-take-your-babys-temperature/).
  *Was "ear thermometers are fastest"; the NHS warns they can mislead in babies.*
- [ ] **Rehydration sachets:** a pharmacist can recommend them; get advice straight away for a baby under 12 months
  (UK: call 111). Source: [NHS, Diarrhoea and vomiting](https://www.nhs.uk/symptoms/diarrhoea-and-vomiting/).
- [ ] **Sun:** keep babies under 6 months out of direct strong sunlight. Source: [NHS, Sun safety](https://www.nhs.uk/live-well/seasonal-health/sunscreen-and-sun-safety/).
- [ ] **Airline infant rules:** BA from 48 hours, easyJet from 14 days, Ryanair from 8 days. Sources: BA, easyJet,
  [Ryanair](https://help.ryanair.com/hc/en-gb/articles/12891532701457-What-are-the-rules-for-travelling-with-infants-0-2).
- [ ] **Car breaks:** regular breaks on long drives; flat sleep space on arrival. Source: Lullaby Trust (car seats).
  *Removed the fixed "every 2 hours": the Lullaby Trust says there's no published evidence for a set limit.*
- [ ] **Stroller (flights):** ask at check-in; BA returns slimline pushchairs to the aircraft door at some airports.
  Source: [BA, Pushchairs](https://www.britishairways.com/content/information/family-travel/baggage).
  *Was "most airlines let you take it to the gate".*

## Guides (`src/data/guides.json`)

- [ ] **Flying, ears:** feed/bottle/dummy at take-off and landing; descent often trickier. Sources: AAP, CDC.
- [ ] **Flying, seats:** bassinets at bulkhead rows on long-haul; no babies in or next to exit rows. Sources: BA, Aer Lingus.
- [ ] **Flying, lap or own seat (new):** the AAP says a baby is safest in their own seat in an approved car seat. Source: AAP.
- [ ] **Flying, crew:** services vary; Ryanair says it doesn't warm bottles. Source: Ryanair.
  *Was "ask for hot water, most will help".*
- [ ] **Flying, tip:** AAP says to "feel free to ignore the stares". *Removed: "most babies sleep more than usual
  due to engine noise" (no source).*
- Packing and hotel guides removed on 2026-11-05 (the "rule of three" had no source; the rest repeated the
  packing list and the questions-to-ask page). The formula advice lives on in the packing list's formula item.

## Meltdown guide (`src/data/meltdown.json`)

- [ ] **Step 2:** stay calm to comfort baby; it's OK to put baby down safely and take a few minutes; never shake a
  baby. Source: [ICON, Babies cry, you can cope](https://iconcope.org/). *Replaces the co-regulation wording.*

## Sleep (`src/data/sleep.json`)

- [ ] **Time-zone tips:** shift bedtime a few days before; daylight on arrival; short trips can stay on home time.
  Labelled as general jet-lag advice with little research on babies. Sources: [NHS 111 Wales, Jet lag](https://111.wales.nhs.uk/encyclopaedia/j/article/jetlag),
  [CDC, Jet lag](https://www.cdc.gov/yellow-book/hcp/travel-air-sea/jet-lag-disorder.html).
- [ ] **Example day (6–12 months):** now labelled "one example"; 1–3 naps at 6–9 months; calm, predictable bedtime
  routine. Sources: [NHS Wirral leaflet](https://www.wchc.nhs.uk/wp-content/uploads/2019/12/SaferSleep_6-12months.pdf),
  [NHS, Sleep and young children](https://www.nhs.uk/baby/health/sleep-and-young-children/).

## Countdown (`src/data/countdown.json`)

- [ ] **Passport:** up to 3 weeks (HM Passport Office). **Insurance:** as packing list (GOV.UK). **GP chat:** links to TravelHealthPro.

## Questions to ask (`src/data/ask.json`)

- [ ] **Airline seats:** babies can't sit in or next to exit rows. Sources: Aer Lingus, BA.
  *Removed the oxygen-mask reason: no airline page we checked confirms it.*
- [ ] **Airline milk:** UK allows enough for the journey, over 100ml, screened at security. Source: GOV.UK.
- [ ] **Car hire:** Enterprise and Avis say staff can't fit seats. Sources: [Enterprise](https://www.enterprise.co.uk/en/car-hire-faqs/france-products/car-seat-hire.html),
  [Avis](https://www.avis.com/en/legal-documents/rental-terms).

## Travel-day planner (`src/pages/travel-day.astro`)

- [ ] Take-off/landing feed tip and bedtime routine. Sources: AAP, CDC, NHS (sleep).
- Feed times come from the parent's own interval; the page doesn't recommend one.

## Not yet drafted

- **Destinations:** page removed on 2026-11-05. Bring it back only with a sourced way to describe places
  (see the brief's open decisions).
