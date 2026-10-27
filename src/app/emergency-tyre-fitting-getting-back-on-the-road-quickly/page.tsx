import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/data";

const PAGE_URL =
  "https://rapid-tyres.com/emergency-tyre-fitting-getting-back-on-the-road-quickly";
const OG_IMAGE = "https://rapid-tyres.com/technician-inspecting-flat-tyre-rural-road.webp";
const TITLE = "Emergency Tyre Fitting: Get Back on the Road Fast";
const DESCRIPTION =
  "Emergency tyre fitting in Bristol, 24/7. Learn what to do after a flat or blowout, who to call and how Rapid gets you moving again.";

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
        alt: "Mobile tyre technician inspecting a flat tyre beside the van on a rural road",
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

const whoToCallTable = [
  {
    where: "Stuck in a live lane and unable to get out safely",
    first: "999, and ask for the police",
    then: "Stay in the car with your seatbelt and hazard lights on",
  },
  {
    where: "Hard shoulder or emergency area on a motorway",
    first: "National Highways on 0300 123 5000",
    then: "Call Rapid or your breakdown cover for the tyre",
  },
  {
    where: "Ordinary road, parked safely",
    first: `Rapid on ${siteConfig.phone}`,
    then: "Wait somewhere safe, away from traffic",
  },
  {
    where: "Home or workplace",
    first: `Rapid on ${siteConfig.phone}`,
    then: "Ask for a live arrival time",
  },
];

const whatToTellFitter = [
  {
    title: "Location",
    body: "Give the road name, the nearest junction or landmark, or the marker post code on a motorway.",
  },
  {
    title: "Tyre size",
    body: "Read it from the sidewall, for example 205/55 R16.",
  },
  {
    title: "The fault",
    body: "Say whether the tyre is flat, losing air slowly or burst, and whether you used sealant.",
  },
  {
    title: "Locking wheel nut key",
    body: "Say whether you have it. Rapid says its technician can remove a locking wheel nut if the key is missing.",
  },
  {
    title: "Spare and vehicle",
    body: "Mention your make and model, and whether the car carries a spare.",
  },
];

const arrivalSteps = [
  {
    title: "Check the scene",
    body: "The technician works at the roadside, at your home or at your workplace from a fully equipped mobile workshop.",
  },
  {
    title: "Inspect the tyre",
    body: "The technician looks for sidewall damage or pothole impact and decides whether to repair the tyre.",
  },
  {
    title: "Fit the replacement",
    body: "If the tyre is beyond repair, the technician replaces it on site. Rapid confirms an emergency fit includes wheel balancing, a new valve and removal of the old tyre.",
  },
  {
    title: "Torque and check",
    body: "The technician tightens the wheel nuts to the manufacturer's specification and checks the tyre pressures before leaving.",
  },
];

const repairOrReplaceTable = [
  { damage: "Small puncture in the central tread, up to 6mm", outcome: "Often repairable" },
  { damage: "Sidewall or shoulder damage", outcome: "Replace" },
  { damage: "Burst tyre or cords showing", outcome: "Replace" },
  { damage: "Tyre driven flat for some distance", outcome: "Usually replace" },
  { damage: "Run-flat tyre", outcome: "Replace" },
];

const emergenciesCovered = [
  "Roadside flat tyre",
  "Motorway blowout",
  "Pothole damage",
  "Slow puncture at home or work",
  "Late-night tyre failure",
  "Tyre pressure warning light",
];

const faqs = [
  {
    question: "How fast can an emergency tyre fitter arrive?",
    answer:
      "Rapid's technician usually arrives within 45 to 60 minutes, day or night. Traffic, technician availability, tyre availability and location can change that, so ask for a live arrival time when you call.",
  },
  {
    question: "Can you fit a tyre on a motorway?",
    answer:
      "Rapid says its technicians attend motorway verges and dual carriageways. On a motorway, get safe, call National Highways on 0300 123 5000 first, and never attempt repairs yourself.",
  },
  {
    question: "What if you have no spare or lost the locking nut key?",
    answer:
      "You need no spare, because Rapid fits a replacement from the van. If the key is missing, Rapid says the technician can remove the locking wheel nut on site.",
  },
  {
    question: "Can you drive to a garage on a flat tyre?",
    answer:
      "No. Pirelli says never to continue driving on a flat tyre. Run-flat tyres are the exception, within 50 miles at no more than 50 mph.",
  },
  {
    question: "Do you cover nights, weekends and bank holidays?",
    answer: "Yes. Rapid works 24 hours a day, 7 days a week, including bank holidays.",
  },
  {
    question: "How do you pay Rapid?",
    answer: "Rapid takes cash or online transfer.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Emergency Tyre Fitting: Getting Back on the Road Quickly",
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

export default function EmergencyTyreFittingPage() {
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
          title="Emergency Tyre Fitting: Getting Back on the Road Quickly"
          breadcrumb="Home / Blog / Emergency Tyre Fitting: Getting Back on the Road Quickly"
          subtitle="What to do in the first minutes, who to call, and how Rapid gets you moving again in Bristol."
        />

        <section className="bg-zinc-50 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 sm:px-10">
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
              <p className="leading-7 text-zinc-600">
                A flat or burst tyre stops your day on the spot. You may be on a dark road, a busy
                dual carriageway or your own driveway, with no spare and no easy way home.
              </p>
              <p className="mt-4 leading-7 text-zinc-600">
                Emergency tyre fitting brings a technician and a new tyre to you. This guide shows
                what to do in the first minutes, who to call, and how Rapid Mobile Tyres gets you
                moving again in Bristol.
              </p>
            </div>

            <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-zinc-100">
              <Image
                src="/technician-inspecting-flat-tyre-rural-road.webp"
                alt="Mobile tyre technician inspecting a flat tyre beside the van on a rural road"
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
                  What Is Emergency Tyre Fitting?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Emergency tyre fitting is a call-out service where a technician drives to your
                  stuck vehicle and repairs or replaces the damaged tyre on the spot.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Rapid Mobile Tyres runs emergency tyre fitting 24 hours a day, 7 days a week,
                  including bank holidays. The mobile workshop reaches you at the roadside, at home
                  or at work, so you need no towing and no garage queue.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Rapid says its technician usually arrives in 45 to 60 minutes, depending on
                  traffic and location. Read more about{" "}
                  <Link
                    href="/emergency-mobile-tyre-fitting-bristol"
                    className="text-orange-500 hover:underline"
                  >
                    emergency mobile tyre fitting
                  </Link>
                  , or about{" "}
                  <Link href="/mobile-tyre-fitting" className="text-orange-500 hover:underline">
                    mobile tyre fitting
                  </Link>{" "}
                  in general.
                </p>
              </div>

              {/* first five minutes */}
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
                  What Should You Do in the First Five Minutes?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Get yourself and your passengers to safety first, because a tyre is easy to
                  replace and you are not.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  If a tyre bursts while you drive, hold the wheel steady and ease off the
                  accelerator. Blackcircles advises against hard braking and sharp steering, so let
                  the car slow and run straight before you pull over.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Move off the carriageway if you can and switch on your hazard lights. Keep
                  passengers well away from passing traffic, and do not change a tyre yourself on a
                  motorway, as Green Flag advises.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  If you cannot reach a hard shoulder, rule 277 of the Highway Code says to switch
                  on your hazard lights and place no warning device on the carriageway. Leave the
                  vehicle only when you can get fully clear of the road.
                </p>
                <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-zinc-100">
                  <Image
                    src="/driver-waiting-beside-car-roadside-van.webp"
                    alt="Driver standing safely beside his car while a mobile tyre van arrives"
                    fill
                    sizes="(min-width: 768px) 672px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* who to call */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path d="M2 3.5A1.5 1.5 0 013.5 2h13A1.5 1.5 0 0118 3.5v10a1.5 1.5 0 01-1.5 1.5H9.621a1.5 1.5 0 00-1.06.44l-2.122 2.12a.5.5 0 01-.854-.353V15.5a.5.5 0 00-.5-.5h-2A1.5 1.5 0 011 13.5v-10z" />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  Who Should You Call First?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Call the police or National Highways first if you are in a live lane or on a
                  motorway, then call Rapid once you are somewhere safe.
                </p>
                <div className="mt-5 overflow-x-auto rounded-xl ring-1 ring-zinc-100">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-zinc-100 text-xs font-semibold uppercase tracking-wide text-zinc-600">
                      <tr>
                        <th className="px-4 py-2">Where you are</th>
                        <th className="px-4 py-2">Call first</th>
                        <th className="px-4 py-2">Then</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                      {whoToCallTable.map((row) => (
                        <tr key={row.where} className="odd:bg-zinc-50 align-top">
                          <td className="px-4 py-2 text-zinc-600">{row.where}</td>
                          <td className="px-4 py-2 font-semibold text-zinc-900">{row.first}</td>
                          <td className="px-4 py-2 text-zinc-600">{row.then}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-5 leading-7 text-zinc-600">
                  On a motorway, the Highway Code says to leave at the next exit or service area if
                  you can. Otherwise stop on the hard shoulder as far left as possible, with your
                  wheels turned left.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  National Highways asks you to leave a motorway emergency area only after you
                  speak to them, because they may close a lane or warn traffic.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Give your location from the code on the nearest marker post or driver location
                  sign, or press the eCall SOS button if your car has one. Tell the operator if you
                  are disabled, older or travelling alone.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Drivers who are deaf or hard of hearing can register for the 999 text service
                  before they travel, National Highways says.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Rapid says its technicians also attend motorway verges and dual carriageways. On
                  a motorway, follow National Highways first, and call Rapid for the tyre once you
                  are safe.
                </p>
              </div>

              {/* what to tell fitter */}
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
                  What Should You Tell the Fitter When You Call?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Give the fitter your exact location, a short description of the problem and your
                  vehicle details. Rapid asks for your location and a brief description of the
                  problem. The team then confirms your tyre size and sends the nearest available
                  technician.
                </p>
                <div className="mt-5 space-y-4">
                  {whatToTellFitter.map((item) => (
                    <div key={item.title}>
                      <h3 className="font-semibold text-zinc-900">{item.title}</h3>
                      <p className="mt-1 leading-7 text-zinc-600">{item.body}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-5 leading-7 text-zinc-600">
                  A UK forum thread from December 2019 reports a fitter arriving about an hour
                  early after a call from ten minutes away. Keep your phone close and stay ready,
                  even when you have an arrival window.
                </p>
              </div>

              {/* can you drive on flat */}
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
                  Can You Drive on a Flat Tyre to a Garage?
                </h2>
                <p className="leading-7 text-zinc-600">
                  No. Driving on a flat tyre can wreck the sidewall and damage the wheel, which
                  turns a repairable puncture into a replacement.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Pirelli says never to continue driving with a flat tyre, because it raises the
                  risk of skidding and damages the wheel.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Run-flat tyres are the exception. Pirelli says they can travel up to 50 miles at
                  no more than 50 mph, so check your handbook before you drive anywhere.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Sealant and inflation kits are a stopgap. Kwik Fit says foam or sealant typically
                  lasts 50 to 100 miles, and the tyre needs a proper repair or replacement, ideally
                  the same day.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Green Flag says not to use a kit when the rim shows damage, the hole is over 4mm
                  or the damage is on the sidewall. Tell the fitter if you used sealant.
                </p>
                <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-zinc-100">
                  <Image
                    src="/flat-tyre-screw-puncture-closeup.webp"
                    alt="Close-up of a flat car tyre with a screw puncture"
                    fill
                    sizes="(min-width: 768px) 672px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* when technician arrives */}
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
                  What Happens When the Rapid Technician Arrives?
                </h2>
                <p className="leading-7 text-zinc-600">
                  The technician checks the damage, repairs or replaces the tyre where you are, and
                  leaves the car ready to drive.
                </p>
                <ol className="mt-5 space-y-3">
                  {arrivalSteps.map((step, i) => (
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
                  Rapid says most single car tyre replacements take 20 to 30 minutes from arrival.
                  The vans carry stock, and Rapid says it holds every tyre size, including run-flat
                  and specialist tyres.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  The same service covers car tyres,{" "}
                  <Link href="/mobile-car-tyre-fitting-bristol" className="text-orange-500 hover:underline">
                    SUV and 4x4 tyres
                  </Link>{" "}
                  and van tyres.
                </p>
                <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-zinc-100">
                  <Image
                    src="/mobile-tyre-van-interior-tyre-rack-toolbox.webp"
                    alt="Inside a mobile tyre fitting van, showing the tyre rack and toolbox"
                    fill
                    sizes="(min-width: 768px) 672px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* repair vs replace */}
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
                  Does the Tyre Need Repairing or Replacing?
                </h2>
                <p className="leading-7 text-zinc-600">
                  A technician can repair only a small puncture in the central tread, and most
                  other damage needs a new tyre.
                </p>
                <div className="mt-5 overflow-hidden rounded-xl ring-1 ring-zinc-100">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-zinc-100 text-xs font-semibold uppercase tracking-wide text-zinc-600">
                      <tr>
                        <th className="px-4 py-2">Damage</th>
                        <th className="px-4 py-2">Usual outcome</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                      {repairOrReplaceTable.map((row) => (
                        <tr key={row.damage} className="odd:bg-zinc-50">
                          <td className="px-4 py-2 text-zinc-600">{row.damage}</td>
                          <td className="px-4 py-2 font-semibold text-zinc-900">{row.outcome}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-5 leading-7 text-zinc-600">
                  Pirelli UK and Just Tyres (February 2024) set the central tread and 6mm limits.
                  Driving on a flat usually damages the inside of the tyre, which rules out a
                  repair.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Rapid&apos;s technician makes the final call on site. Read the full guide to{" "}
                  <Link
                    href="/mobile-tyre-repair-services-convenience-at-your-doorstep"
                    className="text-orange-500 hover:underline"
                  >
                    mobile tyre repair
                  </Link>{" "}
                  for how a proper repair works.
                </p>
              </div>

              {/* check after */}
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
                  What Should You Check After an Emergency Fit?
                </h2>
                <p className="leading-7 text-zinc-600">
                  After an emergency fit, check your tyre pressures, recheck the wheel nuts after
                  about 30 miles, and watch the warning light.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Continental says to recheck wheel nuts after about 30 miles (50 kilometres) on
                  newly fitted wheels. Ask your fitter whether they offer that recheck.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Pirelli says pressure monitoring systems typically warn you when pressure drops
                  more than 25% below normal. If the light stays on after the fit, ask your fitter
                  to check.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  For a longer checklist, read{" "}
                  <Link
                    href="/how-rapid-mobile-tyre-fitting-saves-you-time-and-hassle"
                    className="text-orange-500 hover:underline"
                  >
                    how mobile tyre fitting saves time and hassle
                  </Link>
                  .
                </p>
              </div>

              {/* which emergencies */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  Which Emergencies Does Rapid Cover?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Rapid covers any tyre emergency a technician can fix on site, from a roadside
                  flat to a pothole blowout.
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  {emergenciesCovered.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="mt-4 leading-7 text-zinc-600">
                  You can also book{" "}
                  <Link href="/tyre-replacement-at-home-bristol" className="text-orange-500 hover:underline">
                    tyre replacement at home
                  </Link>{" "}
                  for a slow puncture. If the problem is a flat battery, Rapid also offers{" "}
                  <Link href="/jumpstarts" className="text-orange-500 hover:underline">
                    jump starts
                  </Link>
                  .
                </p>
              </div>

              {/* coverage */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path
                      fillRule="evenodd"
                      d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  Where Does Rapid Cover, and How Do You Call?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Rapid covers Bristol and the surrounding area, including Bath, Newport,
                  Weston-super-Mare and Chepstow. Check the{" "}
                  <Link href="/areas-we-cover" className="text-orange-500 hover:underline">
                    areas Rapid covers
                  </Link>{" "}
                  for your town.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  The base is at {siteConfig.address}. Rapid takes cash or online transfer.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Searching for emergency tyre fitting near me? Call or WhatsApp{" "}
                  <a href={siteConfig.phoneHref} className="text-orange-500 hover:underline">
                    {siteConfig.phone}
                  </a>
                  , or email{" "}
                  <a href={`mailto:${siteConfig.email}`} className="text-orange-500 hover:underline">
                    {siteConfig.email}
                  </a>
                  .
                </p>
              </div>

              {/* FAQ */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <h2 className="mb-5 text-xl font-bold text-zinc-900">
                  FAQs About Emergency Tyre Fitting
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
                Stuck with a Flat Tyre in Bristol?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-zinc-300">
                Rapid Mobile Tyres offers 24/7 emergency tyre fitting at the roadside, at home or
                at work, with a usual arrival of 45 to 60 minutes.
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
