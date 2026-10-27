import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/data";

const PAGE_URL = "https://rapid-tyres.com/the-benefits-of-24-hour-mobile-tyre-fitting-services";
const OG_IMAGE = "https://rapid-tyres.com/technician-inspecting-flat-tyre-night-driveway.webp";
const TITLE = "Benefits of 24 Hour Mobile Tyre Fitting Services";
const DESCRIPTION =
  "24 hour mobile tyre fitting brings a fitter to you day or night. See the benefits, the UK tyre data and what to ask before you call.";

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
        alt: "Mobile tyre technician inspecting a flat tyre on a home driveway at night",
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

const garageVsMobileTable = [
  { situation: "Where the work happens", garage: "At the garage", mobile: "At your home, workplace or roadside" },
  { situation: "When you can book", garage: "In the garage's opening hours", mobile: "Any hour, including bank holidays" },
  { situation: "A damaged tyre", garage: "You drive or tow the car in", mobile: "The technician comes to the car" },
  { situation: "Where you wait", garage: "At the garage", mobile: "Where you already are" },
];

const benefits = [
  {
    title: "Help at any hour",
    body: "Rapid takes calls and sends a technician 24/7, including bank holidays. You call Rapid directly on " + siteConfig.phone + ".",
  },
  {
    title: "No driving on a damaged tyre",
    body: "The fitter comes to the car, so you do not have to drive a flat or damaged tyre to a garage. Rapid fits on site, with no towing.",
  },
  {
    title: "Fitting where you are",
    body: "Rapid fits at home, at work and by the roadside. Rapid also says it fits tyres on motorways, which makes it a full roadside tyre fitting service.",
  },
  {
    title: "A quick finish",
    body: "Rapid says most single car tyre replacements take 20 to 30 minutes from arrival. The technician tightens the wheel nuts to specification and checks all four tyre pressures.",
  },
  {
    title: "Every size in one visit",
    body: "Rapid says it holds every tyre size, including run-flat, specialist and EV-rated tyres, so you avoid a second trip.",
  },
  {
    title: "A lost key is not a dead end",
    body: "Rapid says its technician can remove a locking wheel nut on site if you lose the key.",
  },
];

const whoBenefits = [
  "Drivers stuck at night or on bank holidays, when out-of-hours tyre fitting is the only option.",
  "Shift workers whose days do not match garage hours.",
  "Drivers with no spare, because Rapid fits a replacement from the van.",
  "Van drivers who need to keep working. Rapid covers van tyres.",
  "Car, SUV and EV owners. Rapid fits car tyres, 4x4 tyres and EV-rated tyres.",
];

const askTable = [
  { question: "Is it open 24/7, bank holidays too?", why: "It confirms cover when garages are shut", answer: "Yes, 24/7 including bank holidays" },
  { question: "What is the live arrival time?", why: "It sets your real wait", answer: "Usually 45 to 60 minutes, day or night" },
  { question: "Do you hold my tyre size?", why: "It avoids a second visit", answer: "Rapid says it holds every size" },
  { question: "What does the fit include?", why: "It shows what you get", answer: "Balancing, new valve and old-tyre removal" },
  { question: "Can you cope with a lost locking nut key?", why: "It saves a long delay", answer: "Yes, the technician removes it on site" },
  { question: "Who answers the phone?", why: "It shows how fast you reach help", answer: "You call Rapid directly" },
  { question: "How do I pay?", why: "It avoids surprises at the door", answer: "Cash or online transfer" },
];

const faqs = [
  {
    question: "Is 24 hour mobile tyre fitting really available at night?",
    answer: `Yes. Rapid works 24 hours a day, 7 days a week, and you call Rapid directly on ${siteConfig.phone}.`,
  },
  {
    question: "How fast can a 24 hour mobile tyre fitter arrive?",
    answer:
      "Rapid's technician usually arrives within 45 to 60 minutes, at night and on bank holidays. Traffic, technician availability, tyre availability and location can change that, so ask for a live arrival time.",
  },
  {
    question: "Do you fit tyres on bank holidays?",
    answer: "Yes. Rapid works through bank holidays with the same usual arrival time.",
  },
  {
    question: "Can a mobile fitter work on a motorway?",
    answer:
      "Rapid says yes, it fits tyres on motorways as well. Get safe first and call National Highways on 0300 123 5000, or 999 if you are stuck in a live lane, then call Rapid. Never attempt repairs yourself.",
  },
  {
    question: "Do I need a spare or a locking nut key?",
    answer:
      "You need no spare, because Rapid fits a replacement from the van. If the key is missing, Rapid says the technician can remove the locking wheel nut on site.",
  },
  {
    question: "Do you stock EV and run-flat tyres?",
    answer: "Yes. Rapid says it holds every tyre size, including EV-rated, run-flat and specialist tyres.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "The Benefits of 24 Hour Mobile Tyre Fitting Services",
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

export default function TwentyFourHourMobileTyreFittingPage() {
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
          title="The Benefits of 24 Hour Mobile Tyre Fitting Services"
          breadcrumb="Home / Blog / The Benefits of 24 Hour Mobile Tyre Fitting Services"
          subtitle="Why tyre problems strike at the worst times, the benefits of a 24/7 fitter, and what to ask before you call."
        />

        <section className="bg-zinc-50 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 sm:px-10">
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
              <p className="leading-7 text-zinc-600">
                A tyre does not fail at 10am on a weekday. It goes flat at midnight, on a Sunday or
                on a bank holiday, when every garage is shut and your car cannot move.
              </p>
              <p className="mt-4 leading-7 text-zinc-600">
                24 hour mobile tyre fitting sends a technician to you at any hour. This guide
                covers the benefits, the UK data behind them, and what to ask before you call
                Rapid Mobile Tyres.
              </p>
            </div>

            <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-zinc-100">
              <Image
                src="/technician-inspecting-flat-tyre-night-driveway.webp"
                alt="Mobile tyre technician inspecting a flat tyre on a home driveway at night"
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
                preload
              />
            </div>

            <div className="mt-6 space-y-6">
              {/* what is it */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM8.5 16a1.5 1.5 0 003 0h-3z" />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  What Is 24 Hour Mobile Tyre Fitting?
                </h2>
                <p className="leading-7 text-zinc-600">
                  24 hour mobile tyre fitting is a service where a technician drives a fully
                  equipped workshop to your car at any time and fits the tyre where it stands.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Rapid Mobile Tyres runs this service 24 hours a day, 7 days a week, including
                  bank holidays. Rapid says its technician usually arrives in 45 to 60 minutes, and
                  the same timing applies at night and on bank holidays.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Traffic, technician availability, tyre availability and location can change that
                  window, so ask for a live arrival time when you call. Read more about{" "}
                  <Link href="/mobile-tyre-fitting" className="text-orange-500 hover:underline">
                    mobile tyre fitting
                  </Link>{" "}
                  in general.
                </p>
                <div className="mt-5 overflow-x-auto rounded-xl ring-1 ring-zinc-100">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-zinc-100 text-xs font-semibold uppercase tracking-wide text-zinc-600">
                      <tr>
                        <th className="px-4 py-2">Situation</th>
                        <th className="px-4 py-2">Garage visit</th>
                        <th className="px-4 py-2">24 hour mobile fitter</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                      {garageVsMobileTable.map((row) => (
                        <tr key={row.situation} className="odd:bg-zinc-50 align-top">
                          <td className="px-4 py-2 font-semibold text-zinc-900">{row.situation}</td>
                          <td className="px-4 py-2 text-zinc-600">{row.garage}</td>
                          <td className="px-4 py-2 text-zinc-600">{row.mobile}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-zinc-100">
                  <Image
                    src="/tyre-strapped-in-van-night-callout.webp"
                    alt="Spare tyre strapped securely inside a mobile fitting van at night"
                    fill
                    sizes="(min-width: 768px) 672px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* worst times */}
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
                  Why Do Tyre Problems Happen at the Worst Times?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Tyre faults follow no schedule, and they are the most common diagnosed cause of
                  breakdowns on National Highways roads.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  National Highways says tyres caused over 53,000 breakdowns on motorways and major
                  A-roads in 2024, about 19% of the total (National Highways, 1 October 2025).
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  A cinch analysis of National Highways data, obtained by freedom of information
                  request, counted 16,943 faulty-tyre breakdowns in winter 2023/24, or 18.6% of the
                  total. That was up from 15,083 the winter before (Bodyshop Magazine, 7 February
                  2025).
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Those figures count breakdowns by cause and month, not by hour. Nobody can
                  promise that tyres fail more often at night, but the data shows they fail often,
                  and a breakdown never checks the garage&apos;s opening times.
                </p>
              </div>

              {/* benefits */}
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
                  What Are the Main Benefits of 24 Hour Mobile Tyre Fitting?
                </h2>
                <p className="leading-7 text-zinc-600">
                  The main benefit is help at the moment you need it, at the place you are, with
                  no towing.
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-600">
                  {benefits.map((item) => (
                    <li key={item.title}>
                      <strong className="text-zinc-900">{item.title}:</strong> {item.body}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 leading-7 text-zinc-600">
                  An emergency tyre fitting also includes wheel balancing, a new valve and removal
                  of the old tyre, Rapid confirms. See the full{" "}
                  <Link
                    href="/emergency-mobile-tyre-fitting-bristol"
                    className="text-orange-500 hover:underline"
                  >
                    emergency mobile tyre fitting
                  </Link>{" "}
                  service.
                </p>
              </div>

              {/* safer at night */}
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
                  Is It Safer to Wait for a Fitter at Night?
                </h2>
                <p className="leading-7 text-zinc-600">
                  It is safer when you stop out of the traffic, stay visible and wait away from
                  your vehicle.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  On an ordinary road, rule 274 of the Highway Code tells you to move the vehicle
                  off the road if you can. Switch on your hazard lights if it blocks traffic, and
                  keep your side lights on in the dark.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  The rule also says to wear reflective clothing at night or in poor visibility. Do
                  not stand between your vehicle and oncoming traffic, or where you would block
                  other drivers&apos; view of your lights.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  If you carry a warning triangle, place it at least 45 metres behind the vehicle
                  on the same side of the road. Never use one on a motorway.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  On a motorway, National Highways uses three steps: Go left, Get safe, Get help.
                  Stop as far left as you can with your wheels turned left, and switch on your
                  hazard lights.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  If you can leave the vehicle safely, wait behind a barrier and away from the
                  carriageway. If you cannot, stay inside with your seatbelt and hazard lights on,
                  and call 999. National Highways says not to go back to the vehicle, even in the
                  dark.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Rapid says its technicians also fit on motorways. On a motorway, speak to
                  National Highways on 0300 123 5000 first, because it asks you not to leave an
                  emergency area until you have, then call Rapid for the tyre.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Fitting happens at the scene, so mobile tyre fitting at night suits you best when
                  you are somewhere safe to wait.
                </p>
              </div>

              {/* darker months */}
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
                  Why Are the Darker Months So Busy for Tyre Trouble?
                </h2>
                <p className="leading-7 text-zinc-600">
                  National Highways links its autumn tyre-check campaign to colder temperatures,
                  darker evenings and wetter weather (1 October 2025).
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Rule 227 of the Highway Code says stopping distances on wet roads are at least
                  double those on dry roads.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Worn tyres make that worse. TyreSafe reports Halfords and Cardiff University
                  research from October 2023, which found a worn tyre adds about 27 metres to the
                  stopping distance at 70mph.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  The Department for Transport recorded 201 people killed or seriously injured in
                  incidents linked to defective tyres in 2025, up 19% on 2024 (reported by
                  TyreSafe, July 2026 data).
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  A fitter who works through the night lets you replace a damaged tyre before you
                  drive on it, not after.
                </p>
              </div>

              {/* who benefits */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003z" />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  Who Gets the Most from a 24/7 Mobile Tyre Fitter?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Anyone who cannot easily reach a garage in opening hours gets the most from a
                  24/7 mobile tyre fitter.
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  {whoBenefits.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-zinc-100">
                  <Image
                    src="/mobile-tyre-van-workplace-carpark-sunset.webp"
                    alt="Mobile tyre van at a workplace car park at sunset, seen through an office window"
                    fill
                    sizes="(min-width: 768px) 672px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* what to ask */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path d="M2 3.5A1.5 1.5 0 013.5 2h13A1.5 1.5 0 0118 3.5v10a1.5 1.5 0 01-1.5 1.5H9.621a1.5 1.5 0 00-1.06.44l-2.122 2.12a.5.5 0 01-.854-.353V15.5a.5.5 0 00-.5-.5h-2A1.5 1.5 0 011 13.5v-10z" />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  What Should You Ask a 24 Hour Tyre Fitter Before You Call?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Ask whether the service is genuinely 24/7, what the live arrival time is,
                  whether the fitter holds your size, and what the visit includes.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Use the table below as a checklist. The third column shows what Rapid says, so
                  you can compare any fitter against it.
                </p>
                <div className="mt-5 overflow-x-auto rounded-xl ring-1 ring-zinc-100">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-zinc-100 text-xs font-semibold uppercase tracking-wide text-zinc-600">
                      <tr>
                        <th className="px-4 py-2">Question</th>
                        <th className="px-4 py-2">Why it matters</th>
                        <th className="px-4 py-2">Rapid&apos;s answer</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                      {askTable.map((row) => (
                        <tr key={row.question} className="odd:bg-zinc-50 align-top">
                          <td className="px-4 py-2 font-semibold text-zinc-900">{row.question}</td>
                          <td className="px-4 py-2 text-zinc-600">{row.why}</td>
                          <td className="px-4 py-2 text-zinc-600">{row.answer}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-5 leading-7 text-zinc-600">
                  Have your location, vehicle, tyre size and locking nut key to hand when you call.
                  Read the sidewall for the size, for example 205/55 R16. For a full call script,
                  read the{" "}
                  <Link
                    href="/emergency-tyre-fitting-getting-back-on-the-road-quickly"
                    className="text-orange-500 hover:underline"
                  >
                    emergency tyre fitting guide
                  </Link>
                  .
                </p>
              </div>

              {/* what a fitter cannot do */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  What Can a 24 Hour Mobile Fitter Not Do?
                </h2>
                <p className="leading-7 text-zinc-600">
                  A 24 hour fitter cannot remove the wait, change the traffic, or replace your own
                  tyre checks.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  The arrival window is an estimate. Rapid says traffic, technician availability,
                  tyre availability and location can change it.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  The technician also makes the final call on repairs. Pirelli UK and Just Tyres
                  (February 2024) limit repairs to small punctures in the central tread, so
                  sidewall damage needs a new tyre.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  For how a proper repair works, read the guide to{" "}
                  <Link
                    href="/mobile-tyre-repair-services-convenience-at-your-doorstep"
                    className="text-orange-500 hover:underline"
                  >
                    mobile tyre repair
                  </Link>
                  .
                </p>
              </div>

              {/* avoid call out */}
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
                  How Can You Avoid Needing an Emergency Call-Out?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Check your tread depth, tyre pressures and tyre condition before you travel,
                  because National Highways says it takes only a few minutes.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Forgetfulness is the top reason drivers give for skipping tyre checks, National
                  Highways says. A repeating reminder on your phone fixes that.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  The legal minimum tread depth is 1.6mm (Motor Ombudsman, June 2026), yet only 39%
                  of drivers know it, an RAC and Online95 survey of 1,775 drivers found in
                  September 2024.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Over a fifth of drivers who broke down on long motorway trips thought proper
                  checks could have prevented it, National Highways says.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  A check cannot prevent every puncture, which is why a night-time fitter still
                  matters.
                </p>
                <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-zinc-100">
                  <Image
                    src="/tyre-tread-depth-gauge-check-driveway.webp"
                    alt="Checking tyre tread depth with a gauge on a home driveway"
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
                  How Does Rapid Mobile Tyres Help Day and Night?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Rapid Mobile Tyres fits tyres at your home, workplace or roadside across Bristol
                  and the surrounding area, 24 hours a day.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Rapid covers Bristol, Bath, Newport, Weston-super-Mare and Chepstow. Check the{" "}
                  <Link href="/areas-we-cover" className="text-orange-500 hover:underline">
                    areas Rapid covers
                  </Link>{" "}
                  for your town.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  The base is at {siteConfig.address}. Rapid takes cash or online transfer. Read{" "}
                  <Link
                    href="/how-rapid-mobile-tyre-fitting-saves-you-time-and-hassle"
                    className="text-orange-500 hover:underline"
                  >
                    how mobile tyre fitting saves time and hassle
                  </Link>
                  .
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Searching for 24 hour mobile tyre fitting near me? Call or WhatsApp{" "}
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
                  FAQs About 24 Hour Mobile Tyre Fitting
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
              <h2 className="text-2xl font-bold tracking-tight">
                Need a Tyre Fitted, Day or Night?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-zinc-300">
                Rapid Mobile Tyres fits car, SUV and van tyres at your home, workplace or the
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
