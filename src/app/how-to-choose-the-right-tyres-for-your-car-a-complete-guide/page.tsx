import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/data";

const PAGE_URL =
  "https://rapid-tyres.com/how-to-choose-the-right-tyres-for-your-car-a-complete-guide";
const OG_IMAGE = "https://rapid-tyres.com/customer-choosing-tyres-with-fitter-shop.webp";
const TITLE = "How to Choose the Right Tyres for Your Car | Rapid";
const DESCRIPTION =
  "A complete guide to choosing the right tyres for your car — size, load index, season, the tyre label and what to tell your mobile fitter.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "article",
    images: [
      {
        url: OG_IMAGE,
        width: 1672,
        height: 941,
        alt: "Customer choosing a tyre with a fitter at a tyre shop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

const fourStepsTable = [
  { step: "1. Size and specification", decide: "Size, load index, speed rating", where: "Door sticker, handbook, sidewall" },
  { step: "2. Season", decide: "Summer, all-season or winter", where: "Your weather and the 3PMSF symbol" },
  { step: "3. Label grades", decide: "Wet grip, fuel efficiency, noise", where: "The tyre label" },
  { step: "4. Brand range", decide: "Which maker and which range", where: "Independent tests and your fitter" },
];

const sidewallMarkings = [
  { marking: "Width", example: "205", meaning: "Tyre width in millimetres" },
  { marking: "Aspect ratio", example: "55", meaning: "Sidewall height as a percentage of the width" },
  { marking: "Construction", example: "R", meaning: "Radial, the standard for almost all car tyres" },
  { marking: "Rim diameter", example: "16", meaning: "Wheel size in inches" },
  { marking: "Load index", example: "91", meaning: "A code for the most weight one tyre can carry" },
  { marking: "Speed rating", example: "V", meaning: "A code for the most speed the tyre can sustain" },
];

const loadIndexTable = [
  { index: "91", weight: "615 kg" },
  { index: "94", weight: "670 kg" },
  { index: "97", weight: "730 kg" },
  { index: "98", weight: "750 kg" },
];

const speedRatingTable = [
  { rating: "T", speed: "118 mph" },
  { rating: "H", speed: "130 mph" },
  { rating: "V", speed: "149 mph" },
  { rating: "W", speed: "168 mph" },
  { rating: "Y", speed: "186 mph" },
];

const seasonTable = [
  { type: "Summer", best: "Mild, dry and wet roads", tradeoff: "Weaker in cold and snow" },
  { type: "All-season", best: "Year-round UK driving", tradeoff: "A compromise at both extremes" },
  { type: "Winter", best: "Regular cold, snow or ice", tradeoff: "Little gain in mild spells" },
];

const labelItems = [
  { item: "Fuel efficiency", measures: "Rolling resistance" },
  { item: "Wet grip", measures: "Braking on wet roads" },
  { item: "External noise", measures: "Noise outside the car, in decibels" },
  { item: "Snow pictogram", measures: "Tested grip in severe snow" },
  { item: "Ice pictogram", measures: "Tested grip on ice, car tyres only" },
];

const compareTable = [
  { what: "Grip and braking", where: "Label wet grip grade and independent tests" },
  { what: "Efficiency", where: "Label fuel efficiency grade" },
  { what: "Noise", where: "Label decibel figure" },
  { what: "Longevity", where: "Independent tests that show wear" },
  { what: "Handling and comfort", where: "Independent tests" },
];

const checklistItems = [
  { title: "Specification", body: "Read the size from the door sticker or handbook." },
  { title: "Ratings", body: "Keep the load index and speed rating at or above your car maker's figures." },
  { title: "Season", body: "Pick summer, all-season or winter to match your driving." },
  { title: "Label", body: "Compare the wet grip, fuel efficiency and noise grades." },
  {
    title: "Age",
    body: "Read the last four digits of the DOT code. For age and matching pairs, read emergency tyres 24/7.",
  },
  { title: "Tread", body: "Check the depth before you decide how many tyres to replace." },
];

const tellFitterTable = [
  { detail: "Tyre size", why: "It avoids a wrong fit", answer: "Rapid asks for it and confirms it on the call" },
  { detail: "Brand or range", why: "It sets the model", answer: "You choose on the call" },
  { detail: "Season", why: "It sets the rubber type", answer: "Rapid fits winter or all-season tyres if you ask" },
  {
    detail: "Matching tyre",
    why: "It affects wear",
    answer: "The technician checks the tread and advises on a pair",
  },
  { detail: "Warning light", why: "It shows pressure loss", answer: "The technician resets it after a fit" },
  { detail: "Record", why: "It lists what you bought", answer: "You receive an invoice with the tyre details" },
];

const faqs = [
  {
    question: "Where do I find my tyre size?",
    answer:
      "Read it on the tyre sidewall. Michelin says the approved sizes also sit on the driver's door sticker, in the handbook and sometimes inside the fuel filler flap.",
  },
  {
    question: "Can I fit a higher speed rating?",
    answer:
      "Usually yes, never a lower one. Michelin says higher ratings can reduce tread life and ride comfort, so check your handbook first.",
  },
  {
    question: "Are all-season tyres enough for the UK?",
    answer:
      "They suit mild year-round driving. The RAC calls them a compromise and says winter tyres perform best below 7°C. Look for the 3PMSF symbol if you want snow grip.",
  },
  {
    question: "Do I need EV-specific tyres?",
    answer:
      "No. According to What Car?, any roadworthy tyre matching the original size, load and speed rating is legal. Heavy electric cars may need HL tyres.",
  },
  {
    question: "What does the tyre label tell me?",
    answer:
      "It grades fuel efficiency, wet grip and external noise. Government guidance says Great Britain and Northern Ireland use different scales.",
  },
  {
    question: "Does Rapid fit tyres at home?",
    answer:
      "Yes. Rapid fits at your home, workplace or roadside, 24 hours a day, and you choose the brand or range on the call.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "How to Choose the Right Tyres for Your Car: A Complete Guide",
  description: DESCRIPTION,
  image: OG_IMAGE,
  dateModified: "2026-10-28",
  author: { "@type": "Organization", name: siteConfig.name },
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    logo: { "@type": "ImageObject", url: "https://rapid-tyres.com/rapid-mobile-tyres-open-graph.webp" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function ChooseRightTyresPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
      <Header />
      <main className="flex-1">
        <PageHero
          title="How to Choose the Right Tyres for Your Car: A Complete Guide"
          breadcrumb="Home / Blog / How to Choose the Right Tyres for Your Car"
          subtitle="Size, load index, season, the tyre label and what to tell your mobile fitter."
        />

        <section className="bg-zinc-50 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 sm:px-10">
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
              <p className="leading-7 text-zinc-600">
                You search for new tyres and meet a wall of numbers, letters and brand names. Pick
                the wrong size or rating and you fit a tyre your car cannot safely use.
              </p>
              <p className="mt-4 leading-7 text-zinc-600">
                This guide shows how to choose the right tyres for your car in a clear order. It
                covers the sidewall code, the season, the tyre label and what to tell your fitter
                at Rapid Mobile Tyres.
              </p>
            </div>

            <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-zinc-100">
              <Image
                src="/customer-choosing-tyres-with-fitter-shop.webp"
                alt="Customer choosing a tyre with a fitter at a tyre shop"
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
                preload
              />
            </div>

            <div className="mt-6 space-y-6">
              {/* four steps */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  How to Choose the Right Tyres for Your Car in Four Steps
                </h2>
                <p className="leading-7 text-zinc-600">
                  Start with the tyres your car maker approves, then pick a season, check the tyre
                  label and compare brand ranges.
                </p>
                <div className="mt-5 overflow-x-auto rounded-xl ring-1 ring-zinc-100">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-zinc-100 text-xs font-semibold uppercase tracking-wide text-zinc-600">
                      <tr>
                        <th className="px-4 py-2">Step</th>
                        <th className="px-4 py-2">What you decide</th>
                        <th className="px-4 py-2">Where to look</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                      {fourStepsTable.map((row) => (
                        <tr key={row.step} className="odd:bg-zinc-50 align-top">
                          <td className="px-4 py-2 font-semibold text-zinc-900">{row.step}</td>
                          <td className="px-4 py-2 text-zinc-600">{row.decide}</td>
                          <td className="px-4 py-2 text-zinc-600">{row.where}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-5 leading-7 text-zinc-600">
                  Your car fixes step 1. Steps 2 to 4 are your choices.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Rapid Mobile Tyres fits the tyres you choose at your home, workplace or roadside,
                  24 hours a day, 7 days a week. Read more about{" "}
                  <Link href="/mobile-tyre-fitting" className="text-orange-500 hover:underline">
                    mobile tyre fitting
                  </Link>
                  .
                </p>
              </div>

              {/* size and spec */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path
                      fillRule="evenodd"
                      d="M2 4.25A2.25 2.25 0 014.25 2h11.5A2.25 2.25 0 0118 4.25v11.5A2.25 2.25 0 0115.75 18H4.25A2.25 2.25 0 012 15.75V4.25zM5 6a1 1 0 000 2h10a1 1 0 100-2H5zm0 4a1 1 0 100 2h10a1 1 0 100-2H5zm0 4a1 1 0 100 2h5a1 1 0 100-2H5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  How Do You Find Your Tyre Size and Specification?
                </h2>
                <p className="leading-7 text-zinc-600">
                  The size sits on the tyre sidewall, and the approved sizes for your car sit on
                  the driver&apos;s door sticker, in the handbook and sometimes inside the fuel
                  filler flap.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Michelin lists those three places in its tyre size guidance (February 2026).
                  Match the new tyre to the approved figures, not to a guess.
                </p>
                <div className="mt-5 overflow-x-auto rounded-xl ring-1 ring-zinc-100">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-zinc-100 text-xs font-semibold uppercase tracking-wide text-zinc-600">
                      <tr>
                        <th className="px-4 py-2">Marking</th>
                        <th className="px-4 py-2">Example</th>
                        <th className="px-4 py-2">What it means</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                      {sidewallMarkings.map((row) => (
                        <tr key={row.marking} className="odd:bg-zinc-50 align-top">
                          <td className="px-4 py-2 font-semibold text-zinc-900">{row.marking}</td>
                          <td className="px-4 py-2 text-zinc-600">{row.example}</td>
                          <td className="px-4 py-2 text-zinc-600">{row.meaning}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-5 leading-7 text-zinc-600">
                  Pirelli says the sidewall also shows a maximum pressure in psi. That figure is
                  not the pressure your car needs, which sits in the handbook or on the driver&apos;s
                  door. Running at the maximum can wear the tyre faster and upset braking and
                  handling.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Look for the E mark too. Pirelli says UK tyres carry an E followed by a country
                  number, E11 for the UK, under the Motor Vehicle Tyres (Safety) Regulations 1994.
                  Raised wear indicators in the grooves show when the tread is too low. The guide
                  to{" "}
                  <Link
                    href="/how-to-read-your-tyre-sidewall-markings"
                    className="text-orange-500 hover:underline"
                  >
                    tyre sidewall markings
                  </Link>{" "}
                  covers every symbol in detail.
                </p>
                <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-zinc-100">
                  <Image
                    src="/driver-reading-car-handbook-tyre-info.webp"
                    alt="Driver reading the tyre information section of a car handbook"
                    fill
                    sizes="(min-width: 768px) 672px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* load index speed rating */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  What Do Load Index and Speed Rating Mean?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Load index is a code for the most weight one tyre can carry, and speed rating is
                  a code for the most speed it can sustain. Never fit a lower figure than your car
                  maker lists.
                </p>
                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <div className="overflow-hidden rounded-xl ring-1 ring-zinc-100">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-zinc-100 text-xs font-semibold uppercase tracking-wide text-zinc-600">
                        <tr>
                          <th className="px-4 py-2">Load index</th>
                          <th className="px-4 py-2">Most weight per tyre</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-100">
                        {loadIndexTable.map((row) => (
                          <tr key={row.index} className="odd:bg-zinc-50">
                            <td className="px-4 py-2 font-semibold text-zinc-900">{row.index}</td>
                            <td className="px-4 py-2 text-zinc-600">{row.weight}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="overflow-hidden rounded-xl ring-1 ring-zinc-100">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-zinc-100 text-xs font-semibold uppercase tracking-wide text-zinc-600">
                        <tr>
                          <th className="px-4 py-2">Speed rating</th>
                          <th className="px-4 py-2">Most speed</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-100">
                        {speedRatingTable.map((row) => (
                          <tr key={row.rating} className="odd:bg-zinc-50">
                            <td className="px-4 py-2 font-semibold text-zinc-900">{row.rating}</td>
                            <td className="px-4 py-2 text-zinc-600">{row.speed}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <p className="mt-5 leading-7 text-zinc-600">
                  The rating describes the tyre, not the speed limit. Michelin says summer tyres
                  may carry a higher load index or speed rating than specified, never a lower one.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Higher ratings are not automatically better. Michelin says they can reduce tread
                  life and ride comfort (3 September 2025).
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Michelin also says an original-equipment (OE) marking is not required when the
                  size, speed rating and load index match your original tyres.
                </p>
              </div>

              {/* different size */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  Can You Fit a Different Tyre Size?
                </h2>
                <p className="leading-7 text-zinc-600">
                  You can fit a different size only if your car maker approves it.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Michelin (February 2026) says to choose from the approved sizes and to resize
                  all four tyres together, not one axle. A wheel diameter change also needs new
                  rims. The speedometer reads wrongly if the overall diameter changes.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Michelin warns that a non-approved size can create safety risks, and that a tyre
                  that is too wide may stick out past the bodywork. Ask your insurer before you
                  change size.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Rapid asks for your tyre size and confirms it on the call, so read it from the
                  sidewall before you ring.
                </p>
              </div>

              {/* season */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.415l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  Which Season Is Right: Summer, Winter or All-Season?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Summer tyres suit mild weather, winter tyres suit cold weather below about 7°C,
                  and all-season tyres sit between them.
                </p>
                <div className="mt-5 overflow-hidden rounded-xl ring-1 ring-zinc-100">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-zinc-100 text-xs font-semibold uppercase tracking-wide text-zinc-600">
                      <tr>
                        <th className="px-4 py-2">Type</th>
                        <th className="px-4 py-2">Best for</th>
                        <th className="px-4 py-2">Trade-off</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                      {seasonTable.map((row) => (
                        <tr key={row.type} className="odd:bg-zinc-50 align-top">
                          <td className="px-4 py-2 font-semibold text-zinc-900">{row.type}</td>
                          <td className="px-4 py-2 text-zinc-600">{row.best}</td>
                          <td className="px-4 py-2 text-zinc-600">{row.tradeoff}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-5 leading-7 text-zinc-600">
                  The RAC says winter tyres are not mandatory in the UK and perform best below
                  7°C. It describes all-season tyres as a compromise (2 September 2025).
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  TyreSafe testing, reported by the RAC, found summer tyres stopped slightly
                  shorter at 20°C. At 5°C, winter tyres stopped about 5 metres shorter.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  The two winter symbols mean different things, Michelin says. M+S is a
                  self-declared marking with no certified test, while 3PMSF needs a laboratory test
                  on snow. A 3PMSF tyre also carries M+S.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  If you want snow grip from an all-season tyre, look for the 3PMSF symbol on the
                  sidewall. Rapid says it fits winter or all-season tyres if you ask. For more on
                  weather and car design, read{" "}
                  <Link
                    href="/how-climate-change-is-changing-car-design"
                    className="text-orange-500 hover:underline"
                  >
                    how climate change is changing car design
                  </Link>
                  .
                </p>
                <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-zinc-100">
                  <Image
                    src="/summer-vs-winter-tyre-tread-comparison.webp"
                    alt="Summer tyre tread pattern next to a winter tyre tread pattern"
                    fill
                    sizes="(min-width: 768px) 672px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* tyre label */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  How Do You Read the Tyre Label?
                </h2>
                <p className="leading-7 text-zinc-600">
                  The tyre label grades fuel efficiency, wet grip and external noise, and it adds a
                  pictogram for snow or ice grip where a tyre qualifies.
                </p>
                <div className="mt-5 overflow-hidden rounded-xl ring-1 ring-zinc-100">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-zinc-100 text-xs font-semibold uppercase tracking-wide text-zinc-600">
                      <tr>
                        <th className="px-4 py-2">Label item</th>
                        <th className="px-4 py-2">What it measures</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                      {labelItems.map((row) => (
                        <tr key={row.item} className="odd:bg-zinc-50">
                          <td className="px-4 py-2 font-semibold text-zinc-900">{row.item}</td>
                          <td className="px-4 py-2 text-zinc-600">{row.measures}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-5 leading-7 text-zinc-600">
                  The European Commission says the label has a new design from 1 May 2021. It moved
                  from seven classes to five and removed the two lowest grades from the market
                  (page updated March 2024).
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  A QR code on the EU label links to the tyre&apos;s entry in the EPREL product
                  database, where you can read the label and information sheet. Only car tyres that
                  pass the ISO 19447 test may show the ice pictogram.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Great Britain and Northern Ireland differ. Government guidance (updated 5 October
                  2023) says Great Britain grades fuel efficiency and wet grip from A to G and
                  shows noise only in decibels. Northern Ireland grades them A to E and grades
                  noise A to C.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Continental says ice-pictogram tyres target very severe climates and may
                  underperform on wet grip, handling and wear in milder conditions.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Michelin warns the label covers only a few criteria and tests new tyres. It
                  cannot show how a tyre performs as it wears.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  The label rates noise outside the car. For tyres built to cut noise inside the
                  cabin, read what{" "}
                  <Link href="/what-are-silent-tyres" className="text-orange-500 hover:underline">
                    silent tyres
                  </Link>{" "}
                  are.
                </p>
              </div>

              {/* premium mid entry */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  Premium, Mid-Range or Entry-Level: How Do You Compare?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Compare tyre ranges on the six criteria Michelin lists: grip, longevity, energy
                  efficiency, handling, comfort and noise, and durability.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Improving one criterion often weakens another, Michelin says, so choose by how
                  and where you drive. A tier tells you less than a test result for the exact
                  range.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Specialist magazines and professional bodies test tyres every year on different
                  surfaces. They check braking, handling, rolling resistance and noise. Michelin
                  advises judging a tyre across its whole life, because wet braking can fall as the
                  tread wears.
                </p>
                <div className="mt-5 overflow-hidden rounded-xl ring-1 ring-zinc-100">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-zinc-100 text-xs font-semibold uppercase tracking-wide text-zinc-600">
                      <tr>
                        <th className="px-4 py-2">What to compare</th>
                        <th className="px-4 py-2">Where to look</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                      {compareTable.map((row) => (
                        <tr key={row.what} className="odd:bg-zinc-50">
                          <td className="px-4 py-2 font-semibold text-zinc-900">{row.what}</td>
                          <td className="px-4 py-2 text-zinc-600">{row.where}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-5 leading-7 text-zinc-600">
                  Rapid&apos;s site lists Michelin, Continental, Pirelli, Bridgestone, Goodyear and
                  Dunlop. Rapid says you can choose the brand or range on the call.
                </p>
              </div>

              {/* EV SUV run-flat */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path
                      fillRule="evenodd"
                      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  Which Tyres Suit Electric Cars, SUVs and Run-Flat Cars?
                </h2>
                <p className="leading-7 text-zinc-600">
                  These cars need tyres that match the specification your car maker lists,
                  including the load rating.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  According to What Car?, any roadworthy tyre matching the original size, load and
                  speed rating is legal to fit on an electric car. Continental recommends
                  like-for-like replacement.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Michelin (updated 24 October 2025) says HL tyres carry an HL prefix and share the
                  standard size and pressure, but they carry more load than standard or XL tyres.
                  If your car wears HL tyres, Michelin says to replace them with HL tyres.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Pirelli says manufacturers advise against repairing run-flat tyres, so a puncture
                  usually means a new tyre.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Rapid says it holds every tyre size, including run-flat, specialist and EV-rated
                  tyres. See{" "}
                  <Link href="/mobile-car-tyre-fitting-bristol" className="text-orange-500 hover:underline">
                    SUV tyre fitting
                  </Link>{" "}
                  for larger vehicles.
                </p>
              </div>

              {/* checklist */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  What Should You Check Before You Buy?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Check six things before you order: specification, ratings, season, label, age and
                  tread.
                </p>
                <div className="mt-5 space-y-4">
                  {checklistItems.map((item) => (
                    <div key={item.title}>
                      <h3 className="font-semibold text-zinc-900">{item.title}</h3>
                      <p className="mt-1 leading-7 text-zinc-600">{item.body}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-5 leading-7 text-zinc-600">
                  Pirelli says the 1.6mm legal minimum applies across the central three-quarters of
                  the tread and around the full circumference of the tyre.
                </p>
                <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-zinc-100">
                  <Image
                    src="/checking-tyre-sidewall-on-car-driveway.webp"
                    alt="Checking a car tyre sidewall and condition on a home driveway"
                    fill
                    sizes="(min-width: 768px) 672px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* what to tell fitter */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path d="M2 3.5A1.5 1.5 0 013.5 2h13A1.5 1.5 0 0118 3.5v10a1.5 1.5 0 01-1.5 1.5H9.621a1.5 1.5 0 00-1.06.44l-2.122 2.12a.5.5 0 01-.854-.353V15.5a.5.5 0 00-.5-.5h-2A1.5 1.5 0 011 13.5v-10z" />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  What Should You Tell a Mobile Tyre Fitter?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Tell the fitter where you are, your car, the size on the sidewall, and the season
                  and brand range you prefer.
                </p>
                <div className="mt-5 overflow-x-auto rounded-xl ring-1 ring-zinc-100">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-zinc-100 text-xs font-semibold uppercase tracking-wide text-zinc-600">
                      <tr>
                        <th className="px-4 py-2">Detail</th>
                        <th className="px-4 py-2">Why it matters</th>
                        <th className="px-4 py-2">What Rapid says</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                      {tellFitterTable.map((row) => (
                        <tr key={row.detail} className="odd:bg-zinc-50 align-top">
                          <td className="px-4 py-2 font-semibold text-zinc-900">{row.detail}</td>
                          <td className="px-4 py-2 text-zinc-600">{row.why}</td>
                          <td className="px-4 py-2 text-zinc-600">{row.answer}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-5 leading-7 text-zinc-600">
                  If you lost the locking wheel nut key, Rapid says its technician can remove the
                  nut on site.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Rapid says most single car tyre replacements take 20 to 30 minutes from arrival.
                  The technician tightens the wheel nuts to specification and checks all four tyre
                  pressures. Read more about{" "}
                  <Link href="/tyre-replacement-at-home-bristol" className="text-orange-500 hover:underline">
                    tyre replacement at home
                  </Link>{" "}
                  and{" "}
                  <Link href="/mobile-car-tyre-fitting-bristol" className="text-orange-500 hover:underline">
                    mobile car tyre fitting
                  </Link>
                  .
                </p>
              </div>

              {/* how rapid helps */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  How Does Rapid Help You Choose and Fit Tyres in Bristol?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Rapid fits tyres at your home, workplace or roadside across Bristol and the
                  surrounding area, 24 hours a day, including bank holidays.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Rapid says its technician usually arrives in 45 to 60 minutes, and the same
                  window applies at night. Traffic, technician availability, tyre availability and
                  location can change it, so ask for a live arrival time.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Rapid covers Bristol, Bath, Newport, Weston-super-Mare and Chepstow. Check the{" "}
                  <Link href="/areas-we-cover" className="text-orange-500 hover:underline">
                    areas Rapid covers
                  </Link>{" "}
                  for your town.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  The base is at {siteConfig.address}. Rapid takes cash or online transfer.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Searching for mobile tyre fitting near me? Call or WhatsApp{" "}
                  <a href={siteConfig.phoneHref} className="text-orange-500 hover:underline">
                    {siteConfig.phone}
                  </a>
                  , email{" "}
                  <a href={`mailto:${siteConfig.email}`} className="text-orange-500 hover:underline">
                    {siteConfig.email}
                  </a>
                  , or use the{" "}
                  <Link href="/contact" className="text-orange-500 hover:underline">
                    contact page
                  </Link>
                  .
                </p>
              </div>

              {/* FAQ */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <h2 className="mb-5 text-xl font-bold text-zinc-900">
                  FAQs About Choosing the Right Tyres
                </h2>
                <div className="divide-y divide-zinc-200">
                  {faqs.map((faq) => (
                    <div key={faq.question} className="py-4 first:pt-0 last:pb-0">
                      <p className="font-semibold text-zinc-900">{faq.question}</p>
                      <p className="mt-2 leading-7 text-zinc-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-zinc-900 p-8 text-center text-zinc-50 ring-1 ring-zinc-800 sm:p-10">
              <h2 className="text-2xl font-bold tracking-tight">Ready to Choose Your Tyres?</h2>
              <p className="mx-auto mt-3 max-w-xl text-zinc-300">
                Rapid Mobile Tyres fits the tyres you choose at your home, workplace or the
                roadside, 24/7 across Bristol and the surrounding area.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={siteConfig.phoneHref}
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-orange-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-orange-500 sm:w-auto"
                >
                  Call {siteConfig.phone}
                </a>
                <Link
                  href="/contact"
                  className="flex h-12 w-full items-center justify-center rounded-full border border-zinc-700 px-6 text-sm font-semibold text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-800 sm:w-auto"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link href="/blog" className="text-sm font-semibold text-orange-600 hover:underline">
                ← Back to all articles
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
