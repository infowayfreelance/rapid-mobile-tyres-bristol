BROWSER RULE (Hamza): don't paste prompts/text/links by script (no JS injection, clipboard script or fill command); only paste or type like a human; leave a 30–60 second gap between actions; move the cursor along random human-like paths, not straight lines.

MODE: AUTOMATED (Hamza 12 Nov + 16 Nov: local build/test first, then PR base main, merge when green, deploy live, verify live). Automatic Vercel preview on a feature-branch PR is fine; do NOT change Vercel settings or promote a preview yourself. Merge and deploy live without waiting for Hamza.

Repo: infowayfreelance/rapid-mobile-tyres-bristol
Branch from main: onpage-mobile-tyre-fitting-bradley-stoke
PR base: main

Page ONLY: https://rapid-tyres.com/mobile-tyre-fitting-bradley-stoke
Scope: copy, metadata, JSON-LD, internal links. No design, layout or image changes. Same FAQ fix as Gloucestershire / Weston-super-Mare / Bridgwater / /mobile-tyre-fitting.

Brand: phone 07494 247246 only. No "Ltd". AggregateRating stays exactly 5.0 / 324 (add "@id": "https://rapid-tyres.com/#business" to AutoRepair, nothing else). No motorhome/caravan/ADAS/run-flat/locking-nut/EV claims, no £ prices, no arrival time other than 45–60 minutes. Don't touch the homepage or any other page.

Full Day-6 brief follows next. Implement every section: title (add brand + BS32) and meta (113→149) + OG, Almondsbury Interchange / Highway Code paragraph, new H2 "Puncture Repair or Replacement in Bradley Stoke?", BS32/BS34 coverage sentence, Aztec West workplace line and van link, render all 11 existing FAQ answers in the HTML + 4 new FAQs (15), FAQPage 15 + BreadcrumbList + Service, internal links. Push, PR base=main, merge when green, deploy live.

Report back: live URL, PR number, merge SHA, and the brief's verify checklist.

========== FULL DAY-6 BRIEF ==========

BROWSER RULE (Hamza): don't paste prompts/text/links by script (no JS injection, clipboard script or fill command); only paste or type like a human; leave a 30–60 second gap between actions; move the cursor along random human-like paths, not straight lines.

# On-page brief: rapid-tyres.com/mobile-tyre-fitting-bradley-stoke (Day 6, 24 Nov 2026)

**For:** ChatGPT, in the rapid-tyres.com "Website work" chat. **MODE: AUTOMATED** (Hamza 12 Nov + 16 Nov): local build and test first, then PR base main, merge when green, deploy live, verify live yourself. No Vercel settings changes. Merge and deploy live without waiting for Hamza. **Report back: live URL, PR number, merge SHA** and the verify checklist (section 7).
**Repo:** infowayfreelance/rapid-mobile-tyres-bristol · branch from main: `onpage-mobile-tyre-fitting-bradley-stoke` · PR base: main.
**Scope:** copy, metadata, JSON-LD and internal links on this page only. **No design, layout or image changes.** Use the page's existing components and classes. White-hat only.
**Page:** https://rapid-tyres.com/mobile-tyre-fitting-bradley-stoke
**Status in queue:** row #6, not done (first on-page pass). No brand in the title, 113-char meta with no phone, area names or arrival time, **11 FAQ questions but only the first answer is in the raw HTML** (the other 10 sit only in the client accordion data; 11 `aria-expanded` buttons, 1 open), no FAQPage schema, no BreadcrumbList, no page-level Service, and the AutoRepair block has no `@id`. Same template problem fixed on Gloucestershire (Day 2), Weston-super-Mare (Day 3), Bridgwater (Day 4) and /mobile-tyre-fitting (Day 5): reuse that pattern.

## Brand rules (Rapid, Hamza 12 + 17 Nov)
- Phone **07494 247246 / tel:+447494247246 only.** Don't add or change any other number (the Google Business Profile's other number stays off the site).
- **No "Ltd" and no registered-company information** anywhere in our copy or schema.
- **AggregateRating stays exactly 5.0 / 324** in the existing AutoRepair block. Don't change it, don't add review markup, don't invent reviews, don't put a rating in the title or meta.
- **No motorhome, caravan or ADAS claims** in our copy (one Google review in the widget mentions a motorhome; leave the widget alone, but don't write about motorhomes). Also no run-flat, locking-wheel-nut or EV-specific claims, and **no £ prices**.
- No arrival time other than the existing "45–60 minutes" wording (a competitor claims 30–45 min; don't match it).
- Services business: write for Bradley Stoke drivers at home, at work or on the A38/M5 who need a tyre fitted now.

## Why this page (GSC first)
- GSC (16 Nov export, Web, 3 months 15 Aug–14 Nov 2026, `/workspace/gsc-onpage-2026-11-16/rapid-tyres.com/Pages.csv`; slash variants merged): **/mobile-tyre-fitting-bradley-stoke: 15 clicks, 1,112 impressions, avg pos ~24.6** (no-slash URL 15 clicks / 1,003 impr / pos 23.3; slash URL 0 / 109 / 36.7). Page 3: it gets clicks but does **not** rank well (not pos ≤8), so it is safe to edit; the URL and H1 stay. It's the next "not done" area page after /mobile-tyre-fitting (Day 5).
- Related queries (Queries.csv; query→page mapping inferred): "tyres bradley stoke" 16 impr pos 11.4 · "mobile tyre fitting almondsbury" 664 impr pos 7.8 and "tyres almondsbury" 436 pos 6.1 (these belong to /mobile-tyre-fitting-almondsbury, which ranks; **don't target Almondsbury as the main term here**, just link to it). The Bradley Stoke page needs the BS32 / Stoke Gifford / Patchway / Filton terms that competitors use.
- Live page (24 Nov fetch): 2,298 words, 13 H2s, 11 FAQ questions (1 answer server-rendered), AutoRepair (AggregateRating 5.0/324, no `@id`) + Service inside OfferCatalog + WebSite, 47 internal links, phone 07494 247246 only. "Tyre Brands We Stock" appears **once** (good, no dedupe needed). Extract: `/workspace/onpage-daily/2026-11-24/competitors/_own-pages/rapid_tyres_com_mobile_tyre_fitting_bradley_stoke.txt`.

## Competitors checked (web search "mobile tyre fitting Bradley Stoke" and "24 hour mobile tyre fitter Bradley Stoke BS32", UK, 24 Nov 2026)
| Competitor | Title (chars) | Words | Schema | What they have that we don't |
|---|---|---|---|---|
| [Tyre Expert – Bradley Stoke](https://tyre-expertltd.co.uk/locations/bristol/bradley-stoke/) | Mobile Tyre Fitting Bradley Stoke, Bristol \| 24/7 (49) | 1,065 | AutoRepair, BreadcrumbList, WebPage, AggregateRating | **"Bradley Stoke at a glance" box: BS32 postcode, M4/M5 Almondsbury Interchange, Willow Brook Centre, Aztec West**; puncture repair "to BS AU 159"; 3-step "how it works"; nearby areas Patchway, Filton, Stoke Gifford; "How much will it cost?" FAQ (their price/arrival/RAC claims are theirs, don't copy) |
| [Amor's Tyres and Servicing – Bradley Stoke](https://amorstyresandservicing.co.uk/locations/bradley-stoke) | Mobile Tyres & Servicing in Bradley Stoke \| Amor's Tyres and Servicing (70) | 708 | AutoRepair, Service, OfferCatalog, **FAQPage (4)**, BreadcrumbList | Local detail (Willow Brook Centre, Aztec West, Stoke Gifford, Little Stoke, BS32); **"Can you fit tyres at my office at Aztec West?"** (check with site management); M4/M5 at Almondsbury FAQ that sends motorway drivers to safety first; puncture repair card; phone in the meta |
| [The Mobile Tyre Fitter – Bristol](https://themobiletyrefitter.co.uk/mobile-tyre-fitting-bristol/) | Mobile Tyre Fitting Bristol \| 24/7 Emergency Help (49) | 2,240 | none | Bristol hub that names Bradley Stoke; repair-or-replace content and a 5-step "flat tyre to back on the road" process |
Not readable today: tigertyres.co.uk/towns/bradley-stoke (503 maintenance page), jetyres.co.uk (403). Extracts: `/workspace/onpage-daily/2026-11-24/competitors/rapid/`. (Competitor claims are theirs; **don't copy them**.)

**Gap summary:** our page is already deeper than every competitor (2,298 words vs 708–2,240), so this is not a "write more" job. The gaps are (1) a weak snippet: no brand, no phone, no arrival time, no neighbouring areas in a 113-char meta, (2) 10 of 11 FAQ answers missing from the raw HTML, so no FAQPage (Amor's has one), (3) no breadcrumb, no page-level Service and no `@id` on AutoRepair, (4) **no BS32/BS34 postcodes and no Aztec West / Almondsbury Interchange / Willow Brook detail**, which both local competitors use, (5) **no puncture-repair-or-replace content** (both local competitors list puncture repair), and (6) no motorway safety source on the A38/M5 section.

## 1. Title, meta, H1
| Element | Current | New |
|---|---|---|
| Title | Mobile Tyre Fitting Bradley Stoke \| 24/7 Tyre Service (53) | **Mobile Tyre Fitting Bradley Stoke, BS32 \| 24/7 \| Rapid** (54) |
| Meta description | Mobile tyre fitting in Bradley Stoke for flat or damaged tyres. Get convenient tyre replacement at your location. (113) | **24/7 mobile tyre fitting in Bradley Stoke, Stoke Gifford, Patchway and Filton, at home, work or roadside. Usual arrival 45–60 min. Call 07494 247246.** (149) |
| H1 | Mobile Tyre Fitting in Bradley Stoke | No change |
Also set og:title and og:description to the same text. The "45–60 min" figure is already on the page ("Usual arrival time" stat and the existing "How quickly…" FAQ). Stoke Gifford, Patchway and Filton are already in the page's area chips.

## 2. New and edited sections (existing section components; keep all current sections)

### 2a. Edit "Mobile Tyre Assistance Near the A38 and M5 Junction 16"
After the paragraph that ends "…particularly in the business park areas where roads can be less familiar.", add:
"The M4/M5 Almondsbury Interchange sits just beside Junction 16, close to Aztec West and the northern edge of Bradley Stoke. If you are on the motorway itself, get yourself and any passengers to a place of safety first and follow the [Highway Code guidance on breakdowns](https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287). When you call, tell us which motorway and carriageway you are on, the nearest junction and the number on the nearest marker post or driver location sign."
Also link the words **"roadside safety guidance"** in the existing FAQ "Can you help with a flat tyre near the A38 or M5?" to the same Highway Code page (link only; the answer text stays as it is). External link: `rel="noopener"`, new tab. Source for the interchange: [Almondsbury Interchange – Wikipedia](https://en.wikipedia.org/wiki/Almondsbury_Interchange) (M5 J15 / M4 J20, beside M5 J16 and the A38, close to Aztec West and Bradley Stoke).

### 2b. Insert after "Replacement Tyres for Bradley Stoke Drivers" (before "Tyre Brands We Stock")
**H2: Puncture Repair or Replacement in Bradley Stoke?**

A flat tyre doesn't always mean a new one. If a nail or screw has gone into the middle part of the tread and you stopped before driving on the tyre while flat, it may be repairable. In the UK, repairs follow British Standard BS AU 159, which keeps repairs to the central area of the tread. A cut or bulge in the sidewall, damage near the shoulder, or a tyre that has been driven on while flat has to be replaced.

Worn tyres are different: the legal minimum tread depth for a car is 1.6 mm across the central three-quarters of the tread and around the whole circumference (see the [Highway Code, Annex 6](https://www.gov.uk/guidance/the-highway-code/annex-6-vehicle-maintenance-safety-and-security)). If yours is close to that, a planned replacement on your driveway or at work in Bradley Stoke saves an emergency later.

Tell us where the damage is when you call, or send a photo, and we'll say whether a [puncture repair](/flat-tyre-puncture-repair) is likely or whether you need a new tyre fitted. Not sure what the numbers on the sidewall mean? Our guide to [reading your tyre sidewall markings](/how-to-read-your-tyre-sidewall-markings) explains them.

*(Keep this text different from the Bridgwater and /mobile-tyre-fitting wording; don't paste those sections here.)*

### 2c. Edit "Covering Bradley Stoke and Nearby North Bristol Areas"
Keep the existing text, chips and the "provide your postcode" caveat. After the first sentence, add:
"Bradley Stoke itself is in the BS32 postcode district, along with Almondsbury and Aztec West, while Patchway, Little Stoke, Filton and Stoke Gifford are in BS34. Whether you're parked near the Willow Brook Centre, on an estate off Bradley Stoke Way or at a business park to the north of the town, give us the postcode and we'll confirm coverage."
Source for the postcode districts: [BS postcode area – Wikipedia](https://en.wikipedia.org/wiki/BS_postcode_area); Willow Brook Centre and the business parks: [Bradley Stoke – Wikipedia](https://en.wikipedia.org/wiki/Bradley_Stoke). **No new chips.** In the same section, link the existing chip/word **"Almondsbury"** to [/mobile-tyre-fitting-almondsbury](/mobile-tyre-fitting-almondsbury) if the chip component supports a link; otherwise add one sentence at the end: "Closer to the M5? See our [Almondsbury mobile tyre fitting](/mobile-tyre-fitting-almondsbury) page."

### 2d. Workplace card (for the Aztec West / business park searches)
In the "Tyre Replacement at Your Workplace" card, after "…replace the tyre while the vehicle is parked.", add: "If you work at Aztec West or another business park, check that the site is happy for work to be done in its car park before the technician arrives." In the "Mobile Van Tyre Fitting" card under "Mobile Tyres for Cars, Vans and SUVs", after "…providing the full tyre specification when calling is useful.", add: "See our [mobile van tyre fitting](/mobile-van-tyre-fitting-bristol) page for tradespeople and small fleets." (No fleet-account or contract claims.)

## 3. FAQs: server-render every answer, then add 4 questions
**Critical:** in the raw HTML only the first answer ("Do you provide 24 hour…") is rendered; the other 10 answers are only in the client accordion data. **Render all answers in the HTML** (same accordion component; answers present even when a panel is collapsed; `aria-expanded` can still start as false), exactly as done on Gloucestershire, Weston-super-Mare, Bridgwater and /mobile-tyre-fitting. Do not reword the existing 11 answers. They are (verbatim from the live page data):

1. **Do you provide 24 hour mobile tyre fitting in Bradley Stoke?** Yes. Our 24 hour mobile tyre fitting in Bradley Stoke is available day and night, subject to technician availability and the required tyre being in stock.
2. **How quickly can a mobile tyre fitter reach Bradley Stoke?** Our usual arrival time is around 45–60 minutes. Actual arrival times depend on traffic, your exact location and technician availability.
3. **Can you replace a tyre at my home in Bradley Stoke?** Yes. Tyre replacement in Bradley Stoke can be carried out at suitable residential locations where there is enough safe space for the technician to work.
4. **Can you attend a business park or commercial address?** Yes. Our mobile tyre service can attend business parks and commercial premises in Bradley Stoke where there is a safe and suitable working area around the vehicle.
5. **Can you help with a flat tyre near the A38 or M5?** We provide roadside tyre assistance near Bradley Stoke for vehicles in a safe and accessible position. If you are stopped somewhere hazardous, follow appropriate roadside safety guidance first before requesting assistance.
6. **Do you provide mobile car tyre fitting in Bradley Stoke?** Yes. Mobile car tyre fitting is available for many common vehicle and tyre sizes in Bradley Stoke. Providing the tyre dimensions when calling helps us check the correct replacement.
7. **Can you replace van tyres in Bradley Stoke?** Yes. Our mobile van tyre fitting in Bradley Stoke covers suitable light commercial vehicles. Providing the current tyre size and load rating helps us identify an appropriate option.
8. **Do you fit tyres to SUVs and 4x4s in Bradley Stoke?** Yes. We provide SUV and 4x4 tyre fitting for suitable sizes and vehicle specifications, subject to tyre availability.
9. **Can I arrange mobile tyre replacement without an emergency?** Yes. Mobile tyre replacement in Bradley Stoke can be arranged for planned tyre changes as well as punctures and emergency callouts.
10. **Do you cover Almondsbury and Filton from Bradley Stoke?** Our wider service area includes nearby locations such as Almondsbury and Filton. These locations also have dedicated service-area coverage on the Rapid Mobile Tyres website.
11. **What information should I provide when I call?** Please provide your vehicle make and model, full tyre size, the tyre problem and your exact location in Bradley Stoke, including a postcode or road name to help us reach you quickly.

Add these 4 visible questions to the end of the same block (exact text):

12. **Can you repair a puncture instead of fitting a new tyre?** Sometimes. A repair may be possible when a small nail or screw has gone into the central part of the tread and the tyre has not been driven on while flat. UK repairs follow British Standard BS AU 159, which does not allow repairs to the sidewall or shoulder. Tell us where the damage is when you call and we'll say whether a repair or a replacement tyre is the likely answer.
13. **Which postcodes around Bradley Stoke do you cover?** Bradley Stoke is in the BS32 postcode district, which also takes in Almondsbury and Aztec West. Patchway, Little Stoke, Filton and Stoke Gifford are in BS34. Give us your full postcode when you call so we can confirm coverage and technician availability for your exact address.
14. **Can you fit a tyre in my work car park at Aztec West?** Yes, where there is a safe, level space around the vehicle and the site allows work in its car park. It's worth checking with your site or building management before the technician arrives.
15. **How much does mobile tyre fitting cost in Bradley Stoke?** The price depends on your tyre size, load index and speed rating, the brand and how many tyres you need. Call 07494 247246 with the size from the sidewall or your registration and we'll confirm availability and the price before anyone sets off.

**FAQ markup pattern (answers in the server HTML, panels may stay visually collapsed; keep the existing accordion classes; shown here with the 4 new Q&As):**
```html
<section id="faq">
  <details>
    <summary><h3>Can you repair a puncture instead of fitting a new tyre?</h3></summary>
    <p>Sometimes. A repair may be possible when a small nail or screw has gone into the central part of the tread and the tyre has not been driven on while flat. UK repairs follow British Standard BS AU 159, which does not allow repairs to the sidewall or shoulder. Tell us where the damage is when you call and we&#x27;ll say whether a repair or a replacement tyre is the likely answer.</p>
  </details>
  <details>
    <summary><h3>Which postcodes around Bradley Stoke do you cover?</h3></summary>
    <p>Bradley Stoke is in the BS32 postcode district, which also takes in Almondsbury and Aztec West. Patchway, Little Stoke, Filton and Stoke Gifford are in BS34. Give us your full postcode when you call so we can confirm coverage and technician availability for your exact address.</p>
  </details>
  <details>
    <summary><h3>Can you fit a tyre in my work car park at Aztec West?</h3></summary>
    <p>Yes, where there is a safe, level space around the vehicle and the site allows work in its car park. It&#x27;s worth checking with your site or building management before the technician arrives.</p>
  </details>
  <details>
    <summary><h3>How much does mobile tyre fitting cost in Bradley Stoke?</h3></summary>
    <p>The price depends on your tyre size, load index and speed rating, the brand and how many tyres you need. Call 07494 247246 with the size from the sidewall or your registration and we&#x27;ll confirm availability and the price before anyone sets off.</p>
  </details>
</section>
```

## 4. Schema (JSON-LD), this page only
**FAQPage**: all 15 visible Q&As, exactly as shown on the page:
```json
{
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "@id": "https://rapid-tyres.com/mobile-tyre-fitting-bradley-stoke#faq",
 "mainEntity": [
  {
   "@type": "Question",
   "name": "Do you provide 24 hour mobile tyre fitting in Bradley Stoke?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "Yes. Our 24 hour mobile tyre fitting in Bradley Stoke is available day and night, subject to technician availability and the required tyre being in stock."
   }
  },
  {
   "@type": "Question",
   "name": "How quickly can a mobile tyre fitter reach Bradley Stoke?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "Our usual arrival time is around 45–60 minutes. Actual arrival times depend on traffic, your exact location and technician availability."
   }
  },
  {
   "@type": "Question",
   "name": "Can you replace a tyre at my home in Bradley Stoke?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "Yes. Tyre replacement in Bradley Stoke can be carried out at suitable residential locations where there is enough safe space for the technician to work."
   }
  },
  {
   "@type": "Question",
   "name": "Can you attend a business park or commercial address?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "Yes. Our mobile tyre service can attend business parks and commercial premises in Bradley Stoke where there is a safe and suitable working area around the vehicle."
   }
  },
  {
   "@type": "Question",
   "name": "Can you help with a flat tyre near the A38 or M5?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "We provide roadside tyre assistance near Bradley Stoke for vehicles in a safe and accessible position. If you are stopped somewhere hazardous, follow appropriate roadside safety guidance first before requesting assistance."
   }
  },
  {
   "@type": "Question",
   "name": "Do you provide mobile car tyre fitting in Bradley Stoke?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "Yes. Mobile car tyre fitting is available for many common vehicle and tyre sizes in Bradley Stoke. Providing the tyre dimensions when calling helps us check the correct replacement."
   }
  },
  {
   "@type": "Question",
   "name": "Can you replace van tyres in Bradley Stoke?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "Yes. Our mobile van tyre fitting in Bradley Stoke covers suitable light commercial vehicles. Providing the current tyre size and load rating helps us identify an appropriate option."
   }
  },
  {
   "@type": "Question",
   "name": "Do you fit tyres to SUVs and 4x4s in Bradley Stoke?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "Yes. We provide SUV and 4x4 tyre fitting for suitable sizes and vehicle specifications, subject to tyre availability."
   }
  },
  {
   "@type": "Question",
   "name": "Can I arrange mobile tyre replacement without an emergency?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "Yes. Mobile tyre replacement in Bradley Stoke can be arranged for planned tyre changes as well as punctures and emergency callouts."
   }
  },
  {
   "@type": "Question",
   "name": "Do you cover Almondsbury and Filton from Bradley Stoke?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "Our wider service area includes nearby locations such as Almondsbury and Filton. These locations also have dedicated service-area coverage on the Rapid Mobile Tyres website."
   }
  },
  {
   "@type": "Question",
   "name": "What information should I provide when I call?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "Please provide your vehicle make and model, full tyre size, the tyre problem and your exact location in Bradley Stoke, including a postcode or road name to help us reach you quickly."
   }
  },
  {
   "@type": "Question",
   "name": "Can you repair a puncture instead of fitting a new tyre?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "Sometimes. A repair may be possible when a small nail or screw has gone into the central part of the tread and the tyre has not been driven on while flat. UK repairs follow British Standard BS AU 159, which does not allow repairs to the sidewall or shoulder. Tell us where the damage is when you call and we'll say whether a repair or a replacement tyre is the likely answer."
   }
  },
  {
   "@type": "Question",
   "name": "Which postcodes around Bradley Stoke do you cover?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "Bradley Stoke is in the BS32 postcode district, which also takes in Almondsbury and Aztec West. Patchway, Little Stoke, Filton and Stoke Gifford are in BS34. Give us your full postcode when you call so we can confirm coverage and technician availability for your exact address."
   }
  },
  {
   "@type": "Question",
   "name": "Can you fit a tyre in my work car park at Aztec West?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "Yes, where there is a safe, level space around the vehicle and the site allows work in its car park. It's worth checking with your site or building management before the technician arrives."
   }
  },
  {
   "@type": "Question",
   "name": "How much does mobile tyre fitting cost in Bradley Stoke?",
   "acceptedAnswer": {
    "@type": "Answer",
    "text": "The price depends on your tyre size, load index and speed rating, the brand and how many tyres you need. Call 07494 247246 with the size from the sidewall or your registration and we'll confirm availability and the price before anyone sets off."
   }
  }
 ]
}
```

**BreadcrumbList:**
```json
{
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 "itemListElement": [
  {
   "@type": "ListItem",
   "position": 1,
   "name": "Home",
   "item": "https://rapid-tyres.com"
  },
  {
   "@type": "ListItem",
   "position": 2,
   "name": "Areas We Cover",
   "item": "https://rapid-tyres.com/areas-we-cover"
  },
  {
   "@type": "ListItem",
   "position": 3,
   "name": "Mobile Tyre Fitting Bradley Stoke",
   "item": "https://rapid-tyres.com/mobile-tyre-fitting-bradley-stoke"
  }
 ]
}
```

**Service** (new page-level block; this page has none today apart from the OfferCatalog names). On this page the AutoRepair entity has **no `@id` yet**: add `"@id": "https://rapid-tyres.com/#business"` to it (same as the live Gloucestershire page) so `provider` resolves:
```json
{
 "@context": "https://schema.org",
 "@type": "Service",
 "@id": "https://rapid-tyres.com/mobile-tyre-fitting-bradley-stoke#service",
 "name": "Mobile Tyre Fitting in Bradley Stoke",
 "serviceType": "Mobile tyre fitting",
 "url": "https://rapid-tyres.com/mobile-tyre-fitting-bradley-stoke",
 "areaServed": [
  {
   "@type": "City",
   "name": "Bradley Stoke"
  },
  {
   "@type": "Place",
   "name": "Stoke Gifford"
  },
  {
   "@type": "Place",
   "name": "Patchway"
  },
  {
   "@type": "Place",
   "name": "Little Stoke"
  },
  {
   "@type": "Place",
   "name": "Filton"
  },
  {
   "@type": "Place",
   "name": "Almondsbury"
  },
  {
   "@type": "AdministrativeArea",
   "name": "South Gloucestershire"
  }
 ],
 "provider": {
  "@id": "https://rapid-tyres.com/#business"
 }
}
```

**AggregateRating must stay exactly 5.0 / 324** (Hamza, 17 Nov). Don't touch the AutoRepair block otherwise (leave priceRange, address, geo and hours as they are). No "Ltd" in any `name` or `legalName`.

## 5. Internal links to add (body copy, natural anchors)
- "puncture repair" → /flat-tyre-puncture-repair (section 2b)
- "reading your tyre sidewall markings" → /how-to-read-your-tyre-sidewall-markings (section 2b)
- "Almondsbury" / "Almondsbury mobile tyre fitting" → /mobile-tyre-fitting-almondsbury (section 2c)
- "mobile van tyre fitting" → /mobile-van-tyre-fitting-bristol (section 2d)
- External: [Highway Code – breakdowns and incidents](https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287) and [Highway Code – Annex 6](https://www.gov.uk/guidance/the-highway-code/annex-6-vehicle-maintenance-safety-and-security).
- Leave all existing links as they are. All internal targets are in the live sitemap and returned 200 on 24 Nov; both GOV.UK links returned 200.

## 6. Do NOT touch
- Layout, design, images, the hero stats ("24/7", "45–60 min", "Cars, Vans & SUVs", "5★"), the Google reviews widget and its review text, "Tyre Brands We Stock".
- Phone: only 07494 247246. No "Ltd", no company info, no motorhome/caravan/ADAS, run-flat, locking-wheel-nut or EV claims, no £ prices, no new arrival time, no "RAC approved", "fixed price" or similar claims copied from competitors.
- H1 and URL `/mobile-tyre-fitting-bradley-stoke`. No redirects.
- Don't touch other pages: the homepage (rank-well-leave), /mobile-tyre-fitting (Day 5), /mobile-tyre-fitting-bridgewater (Day 4), /mobile-tyre-fitting-weston-super-mare (Day 3), /mobile-tyre-fitting-gloucestershire (Day 2), /mobile-tyre-fitting-bath (Day 1), /mobile-tyre-fitting-almondsbury, /fuel-delivery, /mobile-tyre-fitting-chew-magna, the blog posts.

## 7. Verify after deploy (report back)
1. Live URL returns 200 with a self-referencing canonical. Report the **live URL, PR number and merge SHA**.
2. Rendered `<title>`, meta description and og tags match section 1 exactly; H1 unchanged and still the only H1.
3. The new H2 "Puncture Repair or Replacement in Bradley Stoke?", the Almondsbury Interchange paragraph, the BS32/BS34 sentence and the Aztec West workplace line are visible; exactly one H2 "Tyre Brands We Stock".
4. **All 15 FAQ answers are in the raw HTML**: `curl -s https://rapid-tyres.com/mobile-tyre-fitting-bradley-stoke | grep -c "BS AU 159"` ≥ 2 (section + FAQ) and grep finds "Actual arrival times depend on traffic" and "Patchway, Little Stoke, Filton and Stoke Gifford are in BS34".
5. Rich Results Test: valid FAQPage (15 Qs), BreadcrumbList and Service; AutoRepair has `@id` `https://rapid-tyres.com/#business`; AggregateRating still 5.0 / 324.
6. `grep` our own copy (excluding the review widget): "07494 247246" present; no "Ltd", "£", "motorhome", "caravan" or "ADAS".
7. The 4 new internal links and both Highway Code links resolve with 200.
