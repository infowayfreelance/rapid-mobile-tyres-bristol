import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/data";

const PAGE_URL = "https://rapid-tyres.com/emergency-tyres-24-7";
const OG_IMAGE = "https://rapid-tyres.com/woman-checking-car-boot-night-car-park.webp";
const TITLE = "Emergency Tyres 24/7: What You Get and Check";
const DESCRIPTION =
  "Emergency tyres 24/7: learn why many cars have no spare, how the right tyre is matched and aged, and what to ask before you call.";

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
        alt: "Woman checking her car boot for a spare wheel at night in a car park",
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

const whenNewTyreTable = [
  { situation: "Ripped sidewall", kit: "Kit unlikely to work", tyre: "Technician fits a new tyre" },
  { situation: "Hole over 4mm in the tread", kit: "Kit unlikely to work", tyre: "Technician fits a new tyre" },
  { situation: "Nail in the tread", kit: "May hold for a short drive", tyre: "Technician decides on site" },
  { situation: "No spare and no kit", kit: "Nothing to fit", tyre: "Technician fits a new tyre from the van" },
];

const whichTyreReplaced = [
  { matching: "Similar tread to the new tyre", advice: "Replace the one tyre" },
  { matching: "Much lower tread", advice: "Replace both tyres on the axle" },
  { matching: "Only two new tyres in total", advice: "Fit them on the rear axle" },
  { matching: "Four-wheel-drive car", advice: "Follow the manufacturer's advice" },
];

const coverOptionsTable = [
  { option: "RAC patrol", gets: "A multi-fit spare wheel fitted to your car", best: "You have cover and a spare will do" },
  { option: "Garage", gets: "A new tyre during opening hours", best: "The car can reach the garage safely" },
  { option: "24/7 mobile fitter", gets: "A new tyre fitted where the car stands", best: "You have no spare, or the damage is too big" },
];

const tellFitter = [
  { title: "Location", body: "Give the road name, the nearest junction or a landmark." },
  { title: "Tyre size", body: "Read it from the sidewall, for example 205/55 R16." },
  {
    title: "The damage",
    body: "Say whether the tyre is flat, burst or losing air, and whether you used sealant.",
  },
  {
    title: "Locking wheel nut key",
    body: "Say whether you have it. Rapid says its technician can remove a locking wheel nut on site.",
  },
];

const askTable = [
  { question: "Is the tyre new?", answer: "Yes, every emergency tyre is new" },
  { question: "Can I choose the brand?", answer: "Yes, on the call" },
  { question: "Can you fit winter or all-season tyres?", answer: "Yes, if you ask" },
  { question: "Will you check the matching tyre and advise on a pair?", answer: "Yes" },
  { question: "Will you reset the tyre pressure warning light?", answer: "Yes" },
  { question: "Do I get a record of the tyre details?", answer: "Yes, an invoice with the tyre details" },
  { question: "What does the fit include?", answer: "Balancing, a new valve and old-tyre removal" },
];

const faqs = [
  {
    question: "Are emergency tyres available at night?",
    answer: `Yes. Rapid works 24 hours a day, 7 days a week, including bank holidays, and you call Rapid directly on ${siteConfig.phone}.`,
  },
  {
    question: "What if my car has no spare wheel?",
    answer:
      "You need no spare. Rapid fits a new tyre from the van, and the RAC found only about 2.6% of 313 new models carry a spare as standard (November 2023).",
  },
  {
    question: "Can a sealant kit get me home?",
    answer:
      "Sometimes, for a small puncture in the tread. The RAC says a kit is unlikely to work on a ripped sidewall, a hole over 4mm or a damaged wheel (August 2020).",
  },
  {
    question: "Will the new tyre match my other tyres?",
    answer:
      "Rapid says the technician checks the tread on the matching tyre and advises on a pair. Michelin says tyres on one axle should ideally be the same model.",
  },
  {
    question: "How can I check how old my new tyre is?",
    answer:
      "Read the last four digits of the DOT code on the sidewall. The first two give the week and the last two give the year, Pirelli says.",
  },
  {
    question: "Do you fit EV and run-flat tyres?",
    answer: "Yes. Rapid says it holds every tyre size, including EV-rated, run-flat and specialist tyres.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Emergency Tyres 24/7: What You Get and What to Check",
  description: DESCRIPTION,
  image: OG_IMAGE,
  dateModified: "2026-10-27",
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

export default function EmergencyTyres247Page() {
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
          title="Emergency Tyres 24/7: What You Get and What to Check"
          breadcrumb="Home / Blog / Emergency Tyres 24/7: What You Get and What to Check"
          subtitle="Why many cars have no spare, how the right tyre is matched and aged, and what to ask before you call."
        />

        <section className="bg-zinc-50 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 sm:px-10">
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
              <p className="leading-7 text-zinc-600">
                A flat tyre at 2am is bad enough. Then you open the boot and find no spare wheel,
                only a sealant kit that cannot fix the damage.
              </p>
              <p className="mt-4 leading-7 text-zinc-600">
                Emergency tyres 24/7 means a fitter brings the right tyre to you at any hour. This
                guide explains why that matters, how Rapid matches the tyre and checks its age,
                and what to ask Rapid Mobile Tyres before you call.
              </p>
            </div>

            <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-zinc-100">
              <Image
                src="/woman-checking-car-boot-night-car-park.webp"
                alt="Woman checking her car boot for a spare wheel at night in a car park"
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
                preload
              />
            </div>

            <div className="mt-6 space-y-6">
              {/* what are emergency tyres 24/7 */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM8.5 16a1.5 1.5 0 003 0h-3z" />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  What Are Emergency Tyres 24/7?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Emergency tyres 24/7 is a call-out service where a technician brings a new tyre
                  to your car at any hour and fits it where the car stands.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Rapid Mobile Tyres runs the service 24 hours a day, 7 days a week, including bank
                  holidays. Rapid says its technician usually arrives in 45 to 60 minutes, and
                  mobile tyre fitting at night or on a bank holiday follows the same timing.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Rapid fits at your home, workplace or roadside, and says it also fits on
                  motorways. Traffic, technician availability, tyre availability and location can
                  change the window, so ask for a live arrival time. Read more about{" "}
                  <Link href="/mobile-tyre-fitting" className="text-orange-500 hover:underline">
                    mobile tyre fitting
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/emergency-mobile-tyre-fitting-bristol"
                    className="text-orange-500 hover:underline"
                  >
                    emergency mobile tyre fitting
                  </Link>
                  .
                </p>
              </div>

              {/* when new tyre vs kit */}
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
                  When Does an Emergency Need a New Tyre, Not a Spare or a Kit?
                </h2>
                <p className="leading-7 text-zinc-600">
                  A new tyre is the fix when the damage is too big for a sealant kit, or when you
                  have no spare to fit.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  A repair kit is unlikely to work on a ripped sidewall, a hole over 4mm in the
                  tread, or a damaged wheel, the RAC says (26 August 2020).
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  It also says to leave any nail or glass in the tyre, because removing it may
                  enlarge the hole.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  The RAC calls a kit repair temporary. Drive to the nearest garage or tyre fitter,
                  stay under the top speed in your handbook, and replace the tyre and sealant as
                  soon as possible.
                </p>
                <div className="mt-5 overflow-x-auto rounded-xl ring-1 ring-zinc-100">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-zinc-100 text-xs font-semibold uppercase tracking-wide text-zinc-600">
                      <tr>
                        <th className="px-4 py-2">Situation</th>
                        <th className="px-4 py-2">A kit or spare</th>
                        <th className="px-4 py-2">An emergency tyre</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                      {whenNewTyreTable.map((row) => (
                        <tr key={row.situation} className="odd:bg-zinc-50 align-top">
                          <td className="px-4 py-2 font-semibold text-zinc-900">{row.situation}</td>
                          <td className="px-4 py-2 text-zinc-600">{row.kit}</td>
                          <td className="px-4 py-2 text-zinc-600">{row.tyre}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* no spare wheel */}
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
                  Why Do So Many Drivers Have No Spare Wheel?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Most new cars no longer come with a spare wheel, so a flat often leaves you with
                  nothing to fit.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  The RAC reviewed 313 new models from 28 brands and found only eight with a spare
                  as standard, about 2.6% (20 November 2023). It says a spare can add up to 20kg,
                  and electric cars rarely have room for one.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  RAC patrols attended nearly 200,000 jobs in 2022 where a driver had a puncture
                  and no spare. That compares with around 165,000 in 2018.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  The AA says more than half of the punctured-tyre vehicles it attended in 2023 had
                  no spare. A poll of 11,959 AA members in January 2024 found 82% would prefer a
                  spare wheel to an inflation kit.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Check your own boot today. Know whether your car carries a spare, a space-saver,
                  a sealant kit or nothing.
                </p>
                <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-zinc-100">
                  <Image
                    src="/car-boot-sealant-kit-no-spare-wheel.webp"
                    alt="Car boot showing a sealant repair kit in the spare wheel well, with no spare wheel"
                    fill
                    sizes="(min-width: 768px) 672px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* which tyre */}
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
                  Which Tyre Will a 24/7 Fitter Put On?
                </h2>
                <p className="leading-7 text-zinc-600">
                  A 24/7 fitter matches the new tyre to your car&apos;s size and specification,
                  then checks it against the tyre on the other side of the axle.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Rapid asks for your tyre size and confirms it on the call. Rapid says it holds
                  every tyre size, including run-flat, specialist and EV-rated tyres, and that
                  every emergency tyre is new.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Rapid&apos;s site lists Michelin, Continental, Pirelli, Bridgestone, Goodyear and
                  Dunlop. Rapid says you can choose the brand or range on the call, and that it can
                  fit winter or all-season tyres on an emergency call-out if you ask.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Michelin says mixing brands, tread patterns, tread depths or seasons on one axle
                  is generally prohibited, and the tyres should ideally be the same model (February
                  2026). The exception is a short drive on a spare after a puncture.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Michelin explains why: tyres of different diameter can upset the stability system
                  and tyre pressure monitoring, and can pull the car to one side.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Four-wheel-drive cars need extra care, Michelin says, because mismatched tyres
                  can disrupt the differential. Follow the manufacturer&apos;s tyre advice.
                </p>
                <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-zinc-100">
                  <Image
                    src="/new-tyre-stock-mobile-fitting-van.webp"
                    alt="New tyre standing ready on the shelf inside a mobile fitting van"
                    fill
                    sizes="(min-width: 768px) 672px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* one or two tyres */}
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
                  Should You Replace One Tyre or Two?
                </h2>
                <p className="leading-7 text-zinc-600">
                  One tyre often suffices when the matching tyre has similar tread, and a pair is
                  better when the gap is large.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  After a puncture, Michelin says a mechanic usually replaces only the flat tyre if
                  tread depths are similar. If they differ a lot, the mechanic will likely
                  recommend replacing both.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Rapid says the technician checks the tread on the matching tyre and advises
                  whether to fit a pair.
                </p>
                <div className="mt-5 overflow-hidden rounded-xl ring-1 ring-zinc-100">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-zinc-100 text-xs font-semibold uppercase tracking-wide text-zinc-600">
                      <tr>
                        <th className="px-4 py-2">Matching tyre</th>
                        <th className="px-4 py-2">Usual advice</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                      {whichTyreReplaced.map((row) => (
                        <tr key={row.matching} className="odd:bg-zinc-50">
                          <td className="px-4 py-2 text-zinc-600">{row.matching}</td>
                          <td className="px-4 py-2 font-semibold text-zinc-900">{row.advice}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-5 leading-7 text-zinc-600">
                  Michelin generally recommends the rear axle for two new tyres, because deeper
                  tread there helps handling, wet grip and water clearance.
                </p>
                <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-zinc-100">
                  <Image
                    src="/two-tyres-tread-comparison-van.webp"
                    alt="Two tyres with different tread patterns standing side by side next to a mobile fitting van"
                    fill
                    sizes="(min-width: 768px) 672px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* tyre age */}
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
                  How Old Is the Emergency Tyre Rapid Fits?
                </h2>
                <p className="leading-7 text-zinc-600">
                  The DOT code on the sidewall shows when the tyre was made, so you can check its
                  age before the fitter starts.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Pirelli says the last four digits give the date. The first two are the week and
                  the last two are the year, so 0517 means the fifth week of 2017.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  The code often sits in a raised rubber oval. Manufacturers only need to stamp the
                  full code on one sidewall, so check the other side if you see only
                  &quot;DOT&quot;.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Pirelli says tyres have no single expiry date. Age-related weakening eventually
                  affects every tyre, so judge age alongside use and storage.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Ask the technician to point out the code before the tyre goes on. The guide to{" "}
                  <Link
                    href="/how-to-read-your-tyre-sidewall-markings"
                    className="text-orange-500 hover:underline"
                  >
                    tyre sidewall markings
                  </Link>{" "}
                  covers the DOT code and more.
                </p>
              </div>

              {/* breakdown cover vs garage vs mobile */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path
                      fillRule="evenodd"
                      d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 100 2h4a1 1 0 100-2H8zm0-4a1 1 0 100 2h4a1 1 0 100-2H8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  Breakdown Cover, Garage or a 24/7 Mobile Fitter?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Breakdown cover can get you moving on a spare, a garage suits a car you can still
                  drive, and a 24/7 mobile fitter brings a new tyre to the spot.
                </p>
                <div className="mt-5 overflow-x-auto rounded-xl ring-1 ring-zinc-100">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-zinc-100 text-xs font-semibold uppercase tracking-wide text-zinc-600">
                      <tr>
                        <th className="px-4 py-2">Option</th>
                        <th className="px-4 py-2">What you usually get</th>
                        <th className="px-4 py-2">Best when</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                      {coverOptionsTable.map((row) => (
                        <tr key={row.option} className="odd:bg-zinc-50 align-top">
                          <td className="px-4 py-2 font-semibold text-zinc-900">{row.option}</td>
                          <td className="px-4 py-2 text-zinc-600">{row.gets}</td>
                          <td className="px-4 py-2 text-zinc-600">{row.best}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-5 leading-7 text-zinc-600">
                  RAC patrols carry a multi-fit spare wheel they can fit after a puncture, the RAC
                  says. A spare is temporary, and Michelin says to replace it with a proper tyre as
                  soon as possible.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  For who to call first on a motorway or in a live lane, read the{" "}
                  <Link
                    href="/emergency-tyre-fitting-getting-back-on-the-road-quickly"
                    className="text-orange-500 hover:underline"
                  >
                    emergency tyre fitting guide
                  </Link>
                  . To weigh the benefits of night cover, read the{" "}
                  <Link
                    href="/the-benefits-of-24-hour-mobile-tyre-fitting-services"
                    className="text-orange-500 hover:underline"
                  >
                    24 hour mobile tyre fitting guide
                  </Link>
                  .
                </p>
              </div>

              {/* what to tell/ask */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path d="M2 3.5A1.5 1.5 0 013.5 2h13A1.5 1.5 0 0118 3.5v10a1.5 1.5 0 01-1.5 1.5H9.621a1.5 1.5 0 00-1.06.44l-2.122 2.12a.5.5 0 01-.854-.353V15.5a.5.5 0 00-.5-.5h-2A1.5 1.5 0 011 13.5v-10z" />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  What Should You Tell and Ask the Fitter?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Tell the fitter where you are and what tyre you need, then ask about the tyre
                  itself.
                </p>
                <div className="mt-5 space-y-4">
                  {tellFitter.map((item) => (
                    <div key={item.title}>
                      <h3 className="font-semibold text-zinc-900">{item.title}</h3>
                      <p className="mt-1 leading-7 text-zinc-600">{item.body}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-5 leading-7 text-zinc-600">
                  Use this table to question any 24/7 mobile tyre fitter. The right-hand column
                  shows what Rapid says.
                </p>
                <div className="mt-5 overflow-x-auto rounded-xl ring-1 ring-zinc-100">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-zinc-100 text-xs font-semibold uppercase tracking-wide text-zinc-600">
                      <tr>
                        <th className="px-4 py-2">Question</th>
                        <th className="px-4 py-2">Rapid&apos;s answer</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                      {askTable.map((row) => (
                        <tr key={row.question} className="odd:bg-zinc-50">
                          <td className="px-4 py-2 text-zinc-600">{row.question}</td>
                          <td className="px-4 py-2 font-semibold text-zinc-900">{row.answer}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* how rapid supplies */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  How Does Rapid Supply Emergency Tyres 24/7 in Bristol?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Rapid fits tyres at your home, workplace or roadside across Bristol and the
                  surrounding area, 24 hours a day.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Rapid covers Bristol, Bath, Newport, Weston-super-Mare and Chepstow. Check the{" "}
                  <Link href="/areas-we-cover" className="text-orange-500 hover:underline">
                    areas Rapid covers
                  </Link>{" "}
                  for your town.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  The service covers car tyres and van tyres, and you can book{" "}
                  <Link href="/tyre-replacement-at-home-bristol" className="text-orange-500 hover:underline">
                    tyre replacement at home
                  </Link>{" "}
                  for a slow puncture. Rapid also offers{" "}
                  <Link href="/jumpstarts" className="text-orange-500 hover:underline">
                    jump starts
                  </Link>{" "}
                  and{" "}
                  <Link href="/fuel-delivery" className="text-orange-500 hover:underline">
                    fuel delivery
                  </Link>
                  .
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  The base is at {siteConfig.address}. Rapid takes cash or online transfer.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Searching for emergency tyres 24/7 near me? Call or WhatsApp{" "}
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
                  FAQs About Emergency Tyres 24/7
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
              <h2 className="text-2xl font-bold tracking-tight">No Spare? No Problem.</h2>
              <p className="mx-auto mt-3 max-w-xl text-zinc-300">
                Rapid Mobile Tyres fits new emergency tyres at your home, workplace or the
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
