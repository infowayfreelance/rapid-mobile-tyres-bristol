import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/data";

const PAGE_URL = "https://rapid-tyres.com/flat-tyre-puncture-repair";
const OG_IMAGE = "https://rapid-tyres.com/flat-tyre-car-driveway-wide.webp";
const TITLE = "Flat Tyre Puncture Repair: What to Check First";
const DESCRIPTION =
  "Flat tyre puncture repair: learn how to tell a slow puncture from a faulty valve, what not to do and what a proper repair involves.";

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
        alt: "Car with a flat tyre parked on a driveway",
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

const whatYouNoticeTable = [
  { notice: "Tyre is visibly flat", cause: "A puncture, usually", next: "Stop safely and call a fitter" },
  { notice: "Tyre is soft but holds air", cause: "Under-inflation", next: "Inflate to the handbook figure" },
  {
    notice: "Tyre loses air over days",
    cause: "A slow puncture or a leaking valve",
    next: "Find the leak or ask a fitter to test it",
  },
  { notice: "Warning light is on", cause: "Pressure loss", next: "Check all four pressures soon" },
];

const findLeakSteps = [
  { title: "Look", body: "Check the tread and sidewall by eye for sharp objects." },
  {
    title: "Mix",
    body: "If you see nothing, fill a spray bottle with soapy water or an approved leak detector.",
  },
  { title: "Inflate and spray", body: "Inflate the tyre, then spray the whole tyre." },
  { title: "Watch", body: "Bubbles show where the air escapes." },
  { title: "Get it checked", body: "Have a professional inspect any repair." },
];

const dontDoList = [
  {
    title: "Do not drive on a flat tyre",
    body: "Pirelli says it is unsafe, can damage the wheel and other parts, and the tyre may fail.",
  },
  {
    title: "Do not pull out a nail or glass",
    body: "The RAC says removing it may enlarge the hole.",
  },
  {
    title: "Do not inflate above 15psi while searching",
    body: "Pirelli sets that limit for finding the damage.",
  },
  {
    title: "Do not trust a plug-only fix",
    body: "Michelin says a quick plug on the wheel is unreliable and unsafe.",
  },
  {
    title: "Do not treat a sealant kit as a repair",
    body: "The RAC calls it temporary, so stay under the top speed in your handbook and replace the tyre soon.",
  },
  {
    title: "Do not work beside traffic",
    body: "The RAC says never to try a tyre job if your safety is at risk.",
  },
];

const repairSteps = [
  { title: "Find the leak", body: "Rapid's technician tests for the leak and checks the valve." },
  {
    title: "Take the tyre off",
    body: "Michelin describes a proper repair as removing the tyre from the rim and inspecting it inside and out.",
  },
  { title: "Repair it", body: "Michelin says a professional patches the inner liner and fills the hole." },
  { title: "Finish", body: "Rapid says it rebalances the wheel and fits a new valve after a repair." },
];

const faqs = [
  {
    question: "Can you repair a slow puncture?",
    answer:
      "Yes, if the hole is in the central tread and no larger than 6mm. Rapid's technician finds the leak, checks the valve and inspects the inside of the tyre before repairing it.",
  },
  {
    question: "Can I drive on a flat tyre to a garage?",
    answer:
      "No. Pirelli says driving on a flat is unsafe, can damage the wheel and other parts, and the tyre may fail.",
  },
  {
    question: "Does Rapid repair punctures at night?",
    answer:
      "Yes. Rapid repairs punctures 24 hours a day, 7 days a week, with the same usual 45 to 60 minute arrival window.",
  },
  {
    question: "Why is my tyre pressure warning light on?",
    answer:
      "A tyre has lost pressure, or the system has a fault. TyreSafe says to check the pressures soon, and to fix the system if the light returns.",
  },
  {
    question: "Is a pothole the same as a puncture?",
    answer:
      "No. The RAC Pothole Index counts pothole damage to parts such as suspension and wheels, and excludes punctures from nails or screws.",
  },
  {
    question: "Do you replace the valve after a repair?",
    answer: "Yes. Rapid says it rebalances the wheel and fits a new valve after a repair.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Flat Tyre Puncture Repair: What to Check First",
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

export default function FlatTyrePunctureRepairPage() {
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
          title="Flat Tyre Puncture Repair: What to Check First"
          breadcrumb="Home / Blog / Flat Tyre Puncture Repair: What to Check First"
          subtitle="How to tell a slow puncture from a faulty valve, what not to do, and how Rapid repairs punctures."
        />

        <section className="bg-zinc-50 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 sm:px-10">
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
              <p className="leading-7 text-zinc-600">
                Your tyre looks low, but there is no nail in sight. Guess the cause wrong and you
                may drive on a damaged tyre, or wait for a repair you do not need.
              </p>
              <p className="mt-4 leading-7 text-zinc-600">
                Flat tyre puncture repair starts with finding the cause. This guide shows how to
                tell the difference, what not to do, and how Rapid Mobile Tyres repairs punctures
                day or night.
              </p>
            </div>

            <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-zinc-100">
              <Image
                src="/flat-tyre-car-driveway-wide.webp"
                alt="Car with a flat tyre parked on a driveway"
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
                  What Is Flat Tyre Puncture Repair?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Flat tyre puncture repair means finding the leak, then repairing the tyre
                  properly from the inside, or replacing it when the damage is too big.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Rapid Mobile Tyres repairs punctures on site as well as fitting new tyres. It
                  works 24 hours a day, 7 days a week, including bank holidays, and says its
                  technician usually arrives in 45 to 60 minutes.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Rapid says the same window applies at night. Traffic, technician availability,
                  tyre availability and location can change it, so ask for a live arrival time.
                  Read more about{" "}
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

              {/* flat soft slow */}
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
                  Is It a Flat Tyre, a Soft Tyre or a Slow Puncture?
                </h2>
                <p className="leading-7 text-zinc-600">
                  A flat tyre is usually a puncture, a soft tyre is usually under-inflated, and a
                  slow puncture loses air over hours or days.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Michelin says a flat tyre usually comes from a puncture, such as a nail hole or a
                  cut. A soft tyre is typically under-inflated.
                </p>
                <div className="mt-5 overflow-x-auto rounded-xl ring-1 ring-zinc-100">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-zinc-100 text-xs font-semibold uppercase tracking-wide text-zinc-600">
                      <tr>
                        <th className="px-4 py-2">What you notice</th>
                        <th className="px-4 py-2">Likely cause</th>
                        <th className="px-4 py-2">Next step</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                      {whatYouNoticeTable.map((row) => (
                        <tr key={row.notice} className="odd:bg-zinc-50 align-top">
                          <td className="px-4 py-2 font-semibold text-zinc-900">{row.notice}</td>
                          <td className="px-4 py-2 text-zinc-600">{row.cause}</td>
                          <td className="px-4 py-2 text-zinc-600">{row.next}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-5 leading-7 text-zinc-600">
                  Total Car Check (October 2025) lists other signs: the car pulls to one side, the
                  steering feels soft or bouncy, or one corner vibrates.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  For a soft tyre, Michelin says to add air with a gauge until you reach the
                  pressure in the owner&apos;s manual or on the driver&apos;s door sticker.
                  Under-inflation wears the tread shoulders and builds heat that can lead to
                  failure.
                </p>
              </div>

              {/* find the leak */}
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
                  How Do You Find the Leak?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Look for a sharp object first, then use soapy water to find bubbles, and only do
                  it somewhere safe.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Goodyear gives five steps for finding the cause of a flat tyre:
                </p>
                <ol className="mt-5 space-y-3">
                  {findLeakSteps.map((step, i) => (
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
                  Goodyear also lists a faulty valve and a bead sealing fault as causes of slow
                  leaks, so spray the valve too.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Pirelli adds a limit. You may need to inflate a flat tyre partly to find the
                  damage, but only in 5psi steps and never above 15psi.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  If you find a nail or glass, the RAC says to leave it in place, because removing
                  it may enlarge the hole.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  The RAC also says never to try a tyre job if your personal safety is at risk. If
                  you cannot test the tyre safely, call for help.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Rapid says its technician finds the leak with a leak test and checks the tyre
                  valve as part of the job.
                </p>
                <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-zinc-100">
                  <Image
                    src="/screw-puncture-soapy-water-leak-test.webp"
                    alt="Screw puncture in a tyre tread with soapy water bubbling to show the leak"
                    fill
                    sizes="(min-width: 768px) 672px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* warning light */}
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
                  Why Does the Tyre Pressure Warning Light Matter?
                </h2>
                <p className="leading-7 text-zinc-600">
                  The tyre pressure warning light tells you a tyre has lost pressure, and TyreSafe
                  says you need a working system to pass the MOT.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  TyreSafe says the system has been mandatory on all new cars since 2014. If the
                  light comes on, slow down and check the pressures at a garage or service area as
                  soon as possible (undated article).
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Some systems need a manual reset after you reinflate. If the light returns soon
                  after, a sensor or the system itself may be faulty, TyreSafe says.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Rapid says its technician resets the tyre pressure warning light after a fit. Ask
                  for the same check after a repair.
                </p>
              </div>

              {/* pothole vs puncture */}
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
                  Is a Pothole the Same as a Puncture?
                </h2>
                <p className="leading-7 text-zinc-600">
                  No. The RAC counts pothole damage and punctures separately.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  The RAC&apos;s Pothole Index records 26,048 pothole-related breakdowns in 2025,
                  up from 22,703 in 2024, about 15% (page dated 21 October 2026).
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  The index counts damage such as shock absorbers, broken suspension springs and
                  distorted wheels. It excludes punctures, which can come from nails or screws
                  unrelated to road condition.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  After a hard pothole strike, have the tyre and wheel checked, even if the tyre
                  still holds air.
                </p>
              </div>

              {/* what not to do */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  What Should You Not Do with a Flat Tyre?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Do not drive on it, pull out the object, over-inflate it or trust a quick fix.
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-600">
                  {dontDoList.map((item) => (
                    <li key={item.title}>
                      <strong className="text-zinc-900">{item.title}:</strong> {item.body}
                    </li>
                  ))}
                </ul>
              </div>

              {/* can you repair */}
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
                  Can You Repair the Puncture?
                </h2>
                <p className="leading-7 text-zinc-600">
                  A puncture in the central tread up to 6mm is generally repairable, and a
                  puncture on or near the sidewall is not.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Goodyear says a hole over 6mm, or one on or near the sidewall, calls for a new
                  tyre. Michelin adds that you must not have driven on the tyre while flat.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Pirelli says manufacturers advise against repairing run-flat tyres, so they are
                  generally replaced.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Rapid&apos;s technician inspects the inside of the tyre before every repair and
                  makes the final call. For the full limits and the BS AU 159 standard, read the
                  guide to{" "}
                  <Link
                    href="/mobile-tyre-repair-services-convenience-at-your-doorstep"
                    className="text-orange-500 hover:underline"
                  >
                    mobile tyre repair
                  </Link>
                  .
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  If the tyre is beyond repair, Rapid fits a new one. See{" "}
                  <Link href="/tyre-replacement-at-home-bristol" className="text-orange-500 hover:underline">
                    tyre replacement at home
                  </Link>
                  .
                </p>
              </div>

              {/* what happens during repair */}
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
                  What Happens During a Mobile Puncture Repair?
                </h2>
                <p className="leading-7 text-zinc-600">
                  The technician finds the leak, inspects the inside of the tyre, repairs it and
                  rebalances the wheel.
                </p>
                <ol className="mt-5 space-y-3">
                  {repairSteps.map((step, i) => (
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
                  Rapid says it repairs punctures at night as well as by day.
                </p>
                <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-zinc-100">
                  <Image
                    src="/technician-applying-repair-cement-inside-tyre.webp"
                    alt="Technician applying repair cement to the inner liner of a tyre"
                    fill
                    sizes="(min-width: 768px) 672px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* after repair checklist */}
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
                  What Should You Check After a Puncture Repair?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Check the pressure, watch the warning light, and look for any loss of air over
                  the next days.
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-600">
                  <li>
                    <strong className="text-zinc-900">Pressure:</strong> Set all four tyres to the
                    figure in your handbook or on the door sticker, Michelin says.
                  </li>
                  <li>
                    <strong className="text-zinc-900">Warning light:</strong> If it stays on, ask
                    the technician to check.
                  </li>
                  <li>
                    <strong className="text-zinc-900">Air loss:</strong> Pirelli says a pressure
                    drop of more than 25% suggests the tyre has damage or needs attention.
                  </li>
                  <li>
                    <strong className="text-zinc-900">Repair quality:</strong> Pirelli says a tyre
                    repaired to BS AU 159 should match a healthy tyre for durability, load
                    capacity and maximum speed.
                  </li>
                </ul>
                <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-zinc-100">
                  <Image
                    src="/tyre-pressure-gauge-check-after-repair.webp"
                    alt="Checking tyre pressure with a gauge after a puncture repair"
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
                  How Does Rapid Help with Flat Tyre Puncture Repair in Bristol?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Rapid repairs and replaces tyres at your home, workplace or roadside across
                  Bristol and the surrounding area, 24 hours a day.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Rapid covers Bristol, Bath, Newport, Weston-super-Mare and Chepstow. Check the{" "}
                  <Link href="/areas-we-cover" className="text-orange-500 hover:underline">
                    areas Rapid covers
                  </Link>{" "}
                  for your town.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  The service covers car tyres and more. If the tyre is beyond repair, read about{" "}
                  <Link href="/emergency-tyres-24-7" className="text-orange-500 hover:underline">
                    emergency tyres 24/7
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/emergency-tyre-fitting-getting-back-on-the-road-quickly"
                    className="text-orange-500 hover:underline"
                  >
                    what to do in the first minutes of a flat
                  </Link>
                  .
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  The base is at {siteConfig.address}. Rapid takes cash or online transfer.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Searching for puncture repair near me? Call or WhatsApp{" "}
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
                  FAQs About Flat Tyre Puncture Repair
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
              <h2 className="text-2xl font-bold tracking-tight">Spotted a Flat Tyre?</h2>
              <p className="mx-auto mt-3 max-w-xl text-zinc-300">
                Rapid Mobile Tyres repairs and replaces tyres at your home, workplace or the
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
