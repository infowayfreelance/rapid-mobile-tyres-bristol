import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/data";

const PAGE_URL =
  "https://rapid-tyres.com/urgently-need-a-new-tyre-call-rapid-mobile-tyres-24-hour-emergency-mobile-tyres";
const OG_IMAGE = "https://rapid-tyres.com/technician-walking-to-van-night-carpark-rain.webp";
const TITLE = "Urgently Need a New Tyre? 24 Hour Emergency Mobile Tyres Bristol";
const DESCRIPTION =
  "Urgently need a new tyre? See which faults cannot wait, what the MOT manual calls dangerous, and how Rapid brings 24 hour emergency mobile tyres to you in Bristol.";

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
        width: 1448,
        height: 1086,
        alt: "Mobile tyre technician walking to a fully stocked van at night in the rain",
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

const faultGroupTable = [
  {
    group: "Replace now",
    examples: "Bulge, lump, tear, exposed cords, lifted tread",
    action: "Do not drive; call a fitter to you",
  },
  {
    group: "Replace soon",
    examples: "Deep cut, many scratches, cracks, tread near the limit",
    action: "Get it checked the same day",
  },
  {
    group: "Check",
    examples: "Shallow scuff, low pressure",
    action: "Inflate to the handbook figure, then watch it",
  },
];

const motDefectTable = [
  {
    fault: "Bulge, lump or tear",
    category: "Dangerous",
    detail: "Separation or partial structural failure, including lifted tread rubber or exposed or damaged cords",
  },
  {
    fault: "Cut reaching ply or cord",
    category: "Major",
    detail: "Cord visible without touching the tyre, or a cut over 25mm that shows cords when opened",
  },
  {
    fault: "Tread below the legal depth",
    category: "Dangerous",
    detail: "Under 1.6mm across the central three-quarters of the tread and around the circumference",
  },
  {
    fault: "Damaged or misaligned valve",
    category: "Dangerous",
    detail: "Only where it is likely to cause sudden deflation",
  },
  {
    fault: "Tyre badly seated on the rim",
    category: "Major",
    detail: "The tyre does not sit correctly on the wheel",
  },
  {
    fault: "Different sizes or structures on one axle",
    category: "Major",
    detail: "For example, radial and cross-ply tyres on the same axle",
  },
  {
    fault: "Obviously under-inflated",
    category: "Minor",
    detail: "The only pressure-related tyre defect in the manual",
  },
];

const twoMinuteCheckTable = [
  { check: "Sidewalls", how: "Look at the outer and inner sidewall with a torch", fails: "Any bulge, lump or tear" },
  { check: "Cords", how: "Look for fabric or cord showing", fails: "Any exposed cord" },
  {
    check: "Cuts",
    how: "Measure the cut with a ruler",
    fails: "Over 25mm (or 10% of section width, if greater) and showing cords when opened",
  },
  { check: "Tread", how: "Push a 20p coin into the main grooves", fails: "Under 1.6mm" },
  { check: "Valve", how: "Look for a bent or damaged valve", fails: "A valve likely to cause sudden deflation" },
];

const driveOrCallTable = [
  { seen: "Bulge, cords or lifted tread", drive: "No", move: "Call a fitter to your location" },
  { seen: "Flat tyre", drive: "No", move: "Stop safely and call a fitter" },
  {
    seen: "Deep cut or deep scratch",
    drive: "Not until a professional says it is safe",
    move: "Ask a fitter to look",
  },
  { seen: "Low pressure, no damage", drive: "Only as far as an air pump", move: "Inflate to the handbook figure" },
];

const firstHourSteps = [
  { title: "Call", body: `Call or WhatsApp ${siteConfig.phone}. You call Rapid directly.` },
  { title: "Choose", body: "Rapid asks for your tyre size, and you choose the brand or range on the call." },
  { title: "Fit", body: "Rapid says most single car tyre replacements take 20 to 30 minutes from arrival." },
  { title: "Finish", body: "The technician tightens the wheel nuts to specification and checks all four tyre pressures." },
];

const tellTheFitterTable = [
  { detail: "Location", say: "Road name, nearest junction or a landmark" },
  { detail: "Tyre size", say: "The figures on the sidewall, for example 205/55 R16" },
  { detail: "The fault", say: "Bulge, cut, exposed cord, flat or slow leak" },
  { detail: "Where it is", say: "Which wheel, and whether it is safe to stand" },
  { detail: "Locking nut key", say: "Whether you have it" },
];

const faqs = [
  {
    question: "Can I drive with a bulge in my tyre?",
    answer:
      "No. Michelin advises an urgent professional check because a bulge can lead to sudden pressure loss. Call a fitter to your location instead of driving.",
  },
  {
    question: "Can you repair a bulge or sidewall cut?",
    answer:
      "No. Michelin says you cannot repair sidewall punctures or cuts, and a bulge means damage to the carcass ply. The tyre needs replacing.",
  },
  {
    question: "Will a damaged tyre fail the MOT?",
    answer:
      "Yes. The MOT manual rates a bulge, lump or exposed cord as dangerous and a cut reaching the cords as major. Either one fails the test.",
  },
  {
    question: "Can I get a new tyre at night?",
    answer:
      "Yes. Rapid works 24 hours a day, 7 days a week, including bank holidays, with the same usual 45 to 60 minute arrival window.",
  },
  {
    question: "Can a mobile fitter work on a motorway?",
    answer:
      "Rapid says yes, it fits tyres on motorways too. Get safe first, and read the guide to emergency tyre fitting for who to call first.",
  },
  {
    question: "Do I need one tyre or two?",
    answer:
      "One tyre often suffices if the matching tyre has similar tread. Rapid says the technician checks the tread and advises on a pair.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Urgently Need a New Tyre? 24 Hour Emergency Mobile Tyres in Bristol",
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

export default function UrgentlyNeedANewTyrePage() {
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
          title="Urgently Need a New Tyre? 24 Hour Emergency Mobile Tyres in Bristol"
          breadcrumb="Home / Blog / Urgently Need a New Tyre?"
          subtitle="Which faults cannot wait, what the MOT manual calls dangerous, and how Rapid brings a new tyre to you, day or night."
        />

        <section className="bg-zinc-50 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 sm:px-10">
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
              <p className="leading-7 text-zinc-600">
                A tyre does not have to be flat to be dangerous. A bulge, a deep cut or a bald patch
                can fail without warning, and you may only notice when the car already feels wrong.
              </p>
              <p className="mt-4 leading-7 text-zinc-600">
                If you urgently need a new tyre, this guide shows which faults cannot wait, what the
                MOT manual calls dangerous, and how Rapid Mobile Tyres brings 24 hour emergency
                mobile tyres to you in Bristol.
              </p>
            </div>

            <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-zinc-100">
              <Image
                src="/technician-walking-to-van-night-carpark-rain.webp"
                alt="Mobile tyre technician walking to a fully stocked van at night in the rain"
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
                preload
              />
            </div>

            <div className="mt-6 space-y-6">
              {/* when do you urgently need */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path
                      fillRule="evenodd"
                      d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.63-1.516 2.63H3.72c-1.347 0-2.189-1.463-1.515-2.63L8.485 2.495zM10 6a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 6zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  When Do You Urgently Need a New Tyre?
                </h2>
                <p className="leading-7 text-zinc-600">
                  You urgently need a new tyre when it has structural damage: a bulge, a lump, a
                  tear, exposed cords or a deep cut.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Use the table below to sort the fault. Anything in the first row means you stop
                  driving and call a fitter.
                </p>
                <div className="mt-5 overflow-x-auto rounded-xl ring-1 ring-zinc-100">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-zinc-100 text-xs font-semibold uppercase tracking-wide text-zinc-600">
                      <tr>
                        <th className="px-4 py-2">Group</th>
                        <th className="px-4 py-2">Examples</th>
                        <th className="px-4 py-2">What to do</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                      {faultGroupTable.map((row) => (
                        <tr key={row.group} className="odd:bg-zinc-50 align-top">
                          <td className="px-4 py-2 font-semibold text-zinc-900">{row.group}</td>
                          <td className="px-4 py-2 text-zinc-600">{row.examples}</td>
                          <td className="px-4 py-2 text-zinc-600">{row.action}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-5 leading-7 text-zinc-600">
                  Michelin calls a bulge one of the most alarming signals and advises an urgent
                  professional check. It says a bulge means damage to the carcass ply under the
                  rubber, which can lead to sudden pressure loss (page updated 8 September 2026).
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Michelin also says a deep cut can damage the carcass ply, so you must replace the
                  tyre. Cracks signal ageing, and a professional should examine many or deep
                  scratches.
                </p>
              </div>

              {/* mot dangerous */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  What Does the MOT Manual Call Dangerous?
                </h2>
                <p className="leading-7 text-zinc-600">
                  The MOT manual treats a bulge, lump, tear or exposed cord as a dangerous defect,
                  and it treats a cut that reaches the cords as a major defect.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  The manual&apos;s defect categories define a dangerous defect as a direct and
                  immediate risk to road safety, and a major defect as one that may affect safety or
                  put other road users at risk. Either one fails the test (manual updated 1 June
                  2026).
                </p>
                <div className="mt-5 overflow-x-auto rounded-xl ring-1 ring-zinc-100">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-zinc-100 text-xs font-semibold uppercase tracking-wide text-zinc-600">
                      <tr>
                        <th className="px-4 py-2">Tyre fault</th>
                        <th className="px-4 py-2">MOT category</th>
                        <th className="px-4 py-2">What the manual says</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                      {motDefectTable.map((row) => (
                        <tr key={row.fault} className="odd:bg-zinc-50 align-top">
                          <td className="px-4 py-2 font-semibold text-zinc-900">{row.fault}</td>
                          <td className="px-4 py-2 text-zinc-600">{row.category}</td>
                          <td className="px-4 py-2 text-zinc-600">{row.detail}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-5 leading-7 text-zinc-600">
                  The manual&apos;s cut limit is 25mm or 10% of the section width, whichever is
                  greater. A tester applies it on the day, so treat any cut near cord depth as a
                  reason to call a fitter.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  These categories come from section 5.2.3 of the MOT inspection manual for cars.
                  The manual does not say whether you may drive a failed car, so do not treat a fail
                  as a green light.
                </p>
              </div>

              {/* two minute check */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path
                      fillRule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  How Do You Check a Tyre in Two Minutes?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Look at both sidewalls, the tread and the valve with a torch, and check the tyre
                  again after you roll the car forward.
                </p>
                <div className="mt-5 overflow-x-auto rounded-xl ring-1 ring-zinc-100">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-zinc-100 text-xs font-semibold uppercase tracking-wide text-zinc-600">
                      <tr>
                        <th className="px-4 py-2">Check</th>
                        <th className="px-4 py-2">How</th>
                        <th className="px-4 py-2">What fails</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                      {twoMinuteCheckTable.map((row) => (
                        <tr key={row.check} className="odd:bg-zinc-50 align-top">
                          <td className="px-4 py-2 font-semibold text-zinc-900">{row.check}</td>
                          <td className="px-4 py-2 text-zinc-600">{row.how}</td>
                          <td className="px-4 py-2 text-zinc-600">{row.fails}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-5 leading-7 text-zinc-600">
                  Roll the car forward a little and look again. A public UK forum thread from 2017
                  describes a bulge that showed only at certain wheel positions.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Michelin says a bulge can form on the inner sidewall, so it may not show from the
                  outside. Abnormal vibration is a common symptom.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Check pressures when the tyres are cold, the Highway Code says, because warm
                  tyres can give misleading readings. It also says to check weekly and before a
                  journey.
                </p>
                <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-zinc-100">
                  <Image
                    src="/car-wheel-tyre-closeup-driveway-inspection.webp"
                    alt="Close-up of a car wheel and tyre on a driveway during a sidewall inspection"
                    fill
                    sizes="(min-width: 768px) 672px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* drive or call */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM8.5 16a1.5 1.5 0 003 0h-3z" />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  Can You Drive to a Garage, or Should a Fitter Come to You?
                </h2>
                <p className="leading-7 text-zinc-600">
                  A fitter should come to you when the tyre shows a bulge, cords or lifted tread,
                  because driving risks a sudden failure.
                </p>
                <div className="mt-5 overflow-x-auto rounded-xl ring-1 ring-zinc-100">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-zinc-100 text-xs font-semibold uppercase tracking-wide text-zinc-600">
                      <tr>
                        <th className="px-4 py-2">What you see</th>
                        <th className="px-4 py-2">Drive on it?</th>
                        <th className="px-4 py-2">Best move</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                      {driveOrCallTable.map((row) => (
                        <tr key={row.seen} className="odd:bg-zinc-50 align-top">
                          <td className="px-4 py-2 font-semibold text-zinc-900">{row.seen}</td>
                          <td className="px-4 py-2 text-zinc-600">{row.drive}</td>
                          <td className="px-4 py-2 text-zinc-600">{row.move}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-5 leading-7 text-zinc-600">
                  The Highway Code covers a burst tyre. Keep control, grip the steering wheel firmly
                  and let the vehicle roll to a stop at the roadside, it says in Annex 6 (updated 22
                  October 2025).
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  For a flat, stop as soon as it is safe. Change the tyre only if you can do so
                  without risk to yourself or others, and otherwise call a breakdown service.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Michelin says you cannot repair a sidewall puncture or cut, because the sidewall
                  needs its flexibility. A technician may repair a small puncture in the tread, as
                  the guide to{" "}
                  <Link href="/flat-tyre-puncture-repair" className="text-orange-500 hover:underline">
                    flat tyre puncture repair
                  </Link>{" "}
                  explains.
                </p>
              </div>

              {/* first hour */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  What Happens in the First Hour After You Call Rapid?
                </h2>
                <p className="leading-7 text-zinc-600">
                  You tell Rapid where you are and what you see, a technician drives to you, and the
                  new tyre goes on where the car stands.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Rapid Mobile Tyres runs 24 hours a day, 7 days a week, including bank holidays.
                  Rapid says its technician usually arrives in 45 to 60 minutes, and the same window
                  applies at night.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Traffic, technician availability, tyre availability and location can change that,
                  so ask for a live arrival time. Read more about{" "}
                  <Link
                    href="/emergency-tyre-fitting-getting-back-on-the-road-quickly"
                    className="text-orange-500 hover:underline"
                  >
                    emergency mobile tyre fitting
                  </Link>
                  .
                </p>
                <ol className="mt-5 space-y-3">
                  {firstHourSteps.map((step, i) => (
                    <li key={step.title} className="flex items-start gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-extrabold text-white">
                        {i + 1}
                      </span>
                      <p className="text-sm leading-6 text-zinc-600">
                        <span className="font-semibold text-zinc-900">{step.title}.</span>{" "}
                        {step.body}
                      </p>
                    </li>
                  ))}
                </ol>
                <p className="mt-5 leading-7 text-zinc-600">
                  An emergency fit includes wheel balancing, a new valve and removal of the old
                  tyre, Rapid confirms. Rapid also resets the tyre pressure warning light and gives
                  you an invoice with the tyre details.
                </p>
                <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-zinc-100">
                  <Image
                    src="/technician-selecting-socket-tool-van-drawer.webp"
                    alt="Mobile tyre technician selecting a socket from the tool drawer in the van"
                    fill
                    sizes="(min-width: 768px) 672px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* what to tell the fitter */}
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
                  What Should You Tell the Fitter?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Tell the fitter where you are and exactly what you see, using words such as bulge,
                  cord, cut or flat.
                </p>
                <div className="mt-5 overflow-x-auto rounded-xl ring-1 ring-zinc-100">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-zinc-100 text-xs font-semibold uppercase tracking-wide text-zinc-600">
                      <tr>
                        <th className="px-4 py-2">Detail</th>
                        <th className="px-4 py-2">What to say</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                      {tellTheFitterTable.map((row) => (
                        <tr key={row.detail} className="odd:bg-zinc-50 align-top">
                          <td className="px-4 py-2 font-semibold text-zinc-900">{row.detail}</td>
                          <td className="px-4 py-2 text-zinc-600">{row.say}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-5 leading-7 text-zinc-600">
                  If the key is missing, Rapid says its technician can remove a locking wheel nut on
                  site. For a full call script, read the guide to{" "}
                  <Link
                    href="/emergency-tyre-fitting-getting-back-on-the-road-quickly"
                    className="text-orange-500 hover:underline"
                  >
                    emergency tyre fitting
                  </Link>
                  .
                </p>
              </div>

              {/* one tyre or pair */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path d="M10.75 10.818v2.614A3.13 3.13 0 0011.888 13c.482-.315.612-.648.612-.875 0-.227-.13-.56-.612-.875a3.13 3.13 0 00-1.138-.432zM8.33 8.62c.053.055.115.11.184.164.208.16.46.284.736.363V6.603a2.45 2.45 0 00-.35.13c-.14.065-.27.143-.386.233-.377.292-.514.627-.514.909 0 .184.058.39.202.592.037.051.08.102.128.152z" />
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13.25a.75.75 0 00-1.5 0v.3c-.345.054-.677.153-.98.3-.584.284-1.084.698-1.384 1.3-.3.6-.413 1.3-.413 2v.025c0 .7.113 1.4.413 2 .3.6.8 1.014 1.384 1.3.303.147.635.246.98.3v2.6a3.13 3.13 0 01-1.138-.432c-.482-.315-.612-.648-.612-.875a.75.75 0 00-1.5 0c0 .89.577 1.59 1.3 2.03.398.244.846.4 1.3.456v.296a.75.75 0 001.5 0v-.296a4.63 4.63 0 001.3-.456c.723-.44 1.3-1.14 1.3-2.03s-.577-1.59-1.3-2.03a4.63 4.63 0 00-1.3-.456V7.473c.26.05.504.13.73.237.482.315.612.648.612.875a.75.75 0 001.5 0c0-.89-.577-1.59-1.3-2.03a4.63 4.63 0 00-1.3-.456v-.3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  Do You Need One New Tyre or a Pair?
                </h2>
                <p className="leading-7 text-zinc-600">
                  One tyre often does the job when the matching tyre has similar tread, and a pair
                  is better when the gap is large.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Rapid says the technician checks the tread on the matching tyre and advises on a
                  pair. Read more about the new tyre Rapid fits in{" "}
                  <Link href="/emergency-tyres-24-7" className="text-orange-500 hover:underline">
                    emergency tyres 24/7
                  </Link>
                  .
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Size and structure matter too. The MOT manual rates different sizes, or different
                  structures such as radial and cross-ply, on one axle as a major defect.
                </p>
              </div>

              {/* which tyres */}
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
                  Which 24 Hour Emergency Mobile Tyres Does Rapid Fit?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Rapid fits new tyres for cars, SUVs and vans, and says it holds every tyre size,
                  including run-flat, specialist and EV-rated tyres.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Rapid&apos;s site lists Michelin, Continental, Pirelli, Bridgestone, Goodyear and
                  Dunlop. Rapid says every emergency tyre is new, and it fits winter or all-season
                  tyres if you ask.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  See{" "}
                  <Link href="/mobile-car-tyre-fitting-bristol" className="text-orange-500 hover:underline">
                    mobile car tyre fitting
                  </Link>{" "}
                  and SUV tyre fitting for vehicle details. Rapid also covers{" "}
                  <Link href="/mobile-tyre-fitting" className="text-orange-500 hover:underline">
                    mobile tyre fitting
                  </Link>{" "}
                  in general.
                </p>
                <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-zinc-100">
                  <Image
                    src="/new-spare-wheel-tyre-van-floor.webp"
                    alt="New replacement wheel and tyre resting on the floor of the mobile tyre van"
                    fill
                    sizes="(min-width: 768px) 672px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* how rapid helps */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  How Does Rapid Help with an Urgent Tyre in Bristol?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Rapid fits tyres at your home, workplace or roadside across Bristol and the
                  surrounding area, 24 hours a day, including motorways.
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
                  Searching for emergency mobile tyres near me? Call or WhatsApp{" "}
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
                  FAQs About an Urgent New Tyre
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
              <h2 className="text-2xl font-bold tracking-tight">Urgently Need a New Tyre?</h2>
              <p className="mx-auto mt-3 max-w-xl text-zinc-300">
                Rapid Mobile Tyres fits new tyres at your home, workplace or the roadside, 24/7
                across Bristol and the surrounding area.
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
