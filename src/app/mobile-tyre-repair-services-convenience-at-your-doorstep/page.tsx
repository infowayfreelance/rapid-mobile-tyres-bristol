import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/data";

const PAGE_URL =
  "https://rapid-tyres.com/mobile-tyre-repair-services-convenience-at-your-doorstep";
const OG_IMAGE = "https://rapid-tyres.com/technician-fitting-plug-patch-tyre-repair.webp";
const TITLE = "Mobile Tyre Repair: How It Works & When to Call";
const DESCRIPTION =
  "Mobile tyre repair brings a technician to your door. See how it works, which punctures are repairable and what to do while you wait.";

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
        alt: "Technician fitting a combined plug and patch repair inside a tyre",
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

const warningSigns = [
  "The car pulls to one side.",
  "The steering vibrates.",
  "The tyre pressure warning light comes on.",
  "The steering feels heavier or less responsive.",
];

const repairSteps = [
  {
    title: "Assess the puncture",
    body: "The technician checks where the hole sits and how large it is against the repair limits.",
  },
  {
    title: "Remove the wheel and tyre",
    body: "The tyre comes off the wheel so the inner surface is visible.",
  },
  {
    title: "Inspect the inside",
    body: "The technician looks for under-inflation marks, stress or debris that the outside hides.",
  },
  {
    title: "Repair the hole",
    body: "A combined plug and patch fills the hole and seals the inner liner.",
  },
  {
    title: "Refit and check pressure",
    body: "Pirelli advises confirming that pressure matches the manufacturer's figure after a repair.",
  },
];

const methodTable = [
  {
    method: "String or plug only",
    from: "Outside",
    removed: "No",
    verdict: "Temporary fix only; Blackcircles says a plug alone does not comply with BS AU 159",
  },
  {
    method: "Patch",
    from: "Inside",
    removed: "Yes",
    verdict: "Seals the inner liner",
  },
  {
    method: "Combined plug and patch",
    from: "Inside",
    removed: "Yes",
    verdict: "The recommended long-term option",
  },
];

const repairableTable = [
  { situation: "Puncture in the central tread, up to 6mm", repairable: "Usually yes" },
  { situation: "Puncture in the shoulder or sidewall", repairable: "No" },
  { situation: "Cords showing, a bulge, or a cut reaching the carcass", repairable: "No" },
  { situation: "A previous faulty repair", repairable: "No" },
  { situation: "Run-flat tyre", repairable: "No; manufacturers advise against it" },
  { situation: "Tread below 1.6mm", repairable: "Replace the tyre" },
];

const bookingQuestions = [
  {
    title: "Can you show me the puncture and the repair?",
    body: "Green Flag, citing Continental's Steve Howat, recommends asking this.",
  },
  {
    title: "Will you take the tyre off the wheel?",
    body: "A repair without removal cannot include an inside inspection.",
  },
  {
    title: "Does the repair follow BS AU 159G?",
    body: "Ask for a plain yes or no.",
  },
  {
    title: "Will you check the valve and rim too?",
    body: "A UK forum thread from August 2026 notes that a slow leak can come from a damaged rim or valve, not only the tyre.",
  },
  {
    title: "Can you repair my tyre type, such as run-flat or foam-lined?",
    body: "Forum members in August 2026 said foam-lined tyres need removal and inspection before repair.",
  },
];

const faqs = [
  {
    question: "Can a technician repair a puncture at home or at the roadside?",
    answer:
      "Often, yes. A small puncture in the central tread is repairable wherever the technician can safely remove and inspect the tyre. The Highway Code says never to attempt repairs on a motorway hard shoulder.",
  },
  {
    question: "Is mobile tyre repair as good as a garage repair?",
    answer:
      "It can be, because the repair method matters more than the location. Start Rescue concludes that both options should produce a correctly fitted tyre. Check that the fitter removes the tyre and follows BS AU 159G.",
  },
  {
    question: "Can you repair a run-flat tyre?",
    answer:
      "Generally no. Pirelli says manufacturers advise against it because the reinforced sidewall can hide damage, and Just Tyres does not repair run-flat tyres.",
  },
  {
    question: "Is a plug or sealant safe?",
    answer:
      "Only as a temporary measure. BSI's scope for BS AU 159G excludes temporary external plugs and liquid sealants, so get the tyre inspected and properly repaired or replaced soon.",
  },
  {
    question: "What if my tyre is beyond repair?",
    answer:
      "It needs replacing. Tyre replacement at home brings a new tyre to your door, so you do not need to drive on the damaged one.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Mobile Tyre Repair Services: Convenience at Your Doorstep",
  description: DESCRIPTION,
  image: OG_IMAGE,
  dateModified: "2026-10-26",
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

export default function MobileTyreRepairPage() {
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
          title="Mobile Tyre Repair Services: Convenience at Your Doorstep"
          breadcrumb="Home / Blog / Mobile Tyre Repair Services: Convenience at Your Doorstep"
          subtitle="How mobile tyre repair works, which punctures are repairable, and what to do while you wait."
        />

        <section className="bg-zinc-50 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 sm:px-10">
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
              <p className="leading-7 text-zinc-600">
                A flat tyre rarely arrives at a good moment. Driving to a garage means rolling on
                damaged rubber, and waiting for recovery wastes your day.
              </p>
              <p className="mt-4 leading-7 text-zinc-600">
                Mobile tyre repair solves this by sending a technician to you. This guide explains
                how it works, which punctures a technician can fix, and what to do while you wait.
              </p>
            </div>

            <div className="relative mt-6 aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-zinc-100">
              <Image
                src="/driver-standing-by-flat-tyre-roadside.webp"
                alt="Driver standing beside a car with a flat tyre at the roadside"
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
                  What Is Mobile Tyre Repair?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Mobile tyre repair is a service where a technician drives to your home, workplace
                  or roadside and repairs a punctured tyre there, where it is safe to do so.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  You may also see it called mobile puncture repair or on-site tyre puncture
                  repair. It suits slow punctures, nails or screws in the tread, and flats that
                  leave the car undriveable.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  If the tyre is beyond repair, the visit becomes a replacement, as with{" "}
                  <Link href="/mobile-tyre-fitting" className="text-orange-500 hover:underline">
                    mobile tyre fitting
                  </Link>
                  .
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
                  What Are the Benefits of Mobile Tyre Repair?
                </h2>
                <p className="leading-7 text-zinc-600">
                  The main benefit of mobile tyre repair is that you skip the trip to a garage and
                  carry on with your day.
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-600">
                  <li>
                    <strong className="text-zinc-900">No towing:</strong> Start Rescue says a
                    mobile visit avoids a tow when damage is too serious to drive on (May 2024).
                  </li>
                  <li>
                    <strong className="text-zinc-900">No waiting room:</strong> The technician
                    comes to you, so you stay at home or at work.
                  </li>
                  <li>
                    <strong className="text-zinc-900">Help away from home:</strong> You avoid
                    searching for an unfamiliar garage.
                  </li>
                </ul>
                <p className="mt-4 leading-7 text-zinc-600">
                  Mobile repair has limits too. Start Rescue lists varying fitter experience and
                  extra time to source specialist tyres as the main downsides.
                </p>
              </div>

              {/* when to call */}
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
                  When Should You Call for Mobile Tyre Repair?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Call for mobile tyre repair as soon as you spot a puncture, a flat tyre or the
                  signs of a slow leak. WhoCanFixMyCar lists four warning signs of a slow puncture:
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  {warningSigns.map((sign) => (
                    <li key={sign}>{sign}</li>
                  ))}
                </ul>
                <p className="mt-4 leading-7 text-zinc-600">
                  Pirelli lists a pressure drop of more than 25% as a sign that the tyre is damaged
                  or needs inflating. A nail or screw in the tread is another reason to call.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Avoid driving on a flat tyre while you wait. Green Flag warns that a long drive
                  on a flat can damage the structure beyond repair.
                </p>
                <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-zinc-100">
                  <Image
                    src="/screw-puncture-in-tyre-tread-closeup.webp"
                    alt="Close-up of a screw embedded in a car tyre tread"
                    fill
                    sizes="(min-width: 768px) 672px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* how it works step by step */}
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
                  How Does Mobile Tyre Repair Work, Step by Step?
                </h2>
                <p className="leading-7 text-zinc-600">
                  A proper repair follows the same steps as a garage repair, with the tyre removed
                  from the wheel so the technician can check the inside.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Pirelli UK says damage needs careful assessment, because technicians cannot
                  repair every puncture. A typical mobile tyre repair runs in five steps.
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
                  A repair that skips step two cannot include step three. Blackcircles, a UK tyre
                  retailer, says only a professional combined repair includes an internal check for
                  damage the outside hides.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Members of a UK driving forum in August 2026 describe the same sequence. They
                  cite BS AU 159 as the reason the tyre must leave the rim for inspection.
                </p>
                <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-zinc-100">
                  <Image
                    src="/technician-fitting-plug-patch-tyre-repair.webp"
                    alt="Technician fitting a combined plug and patch repair inside a tyre"
                    fill
                    sizes="(min-width: 768px) 672px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* plug patch combined */}
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
                  Plug, Patch or Combined: Which Repair Is Acceptable?
                </h2>
                <p className="leading-7 text-zinc-600">
                  A combined plug and patch repair, fitted from inside the tyre, is the method to
                  ask for.
                </p>
                <div className="mt-5 overflow-x-auto rounded-xl ring-1 ring-zinc-100">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-zinc-100 text-xs font-semibold uppercase tracking-wide text-zinc-600">
                      <tr>
                        <th className="px-4 py-2">Method</th>
                        <th className="px-4 py-2">Fitted from</th>
                        <th className="px-4 py-2">Tyre off the wheel?</th>
                        <th className="px-4 py-2">Verdict</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                      {methodTable.map((row) => (
                        <tr key={row.method} className="odd:bg-zinc-50 align-top">
                          <td className="px-4 py-2 font-semibold text-zinc-900">{row.method}</td>
                          <td className="px-4 py-2 text-zinc-600">{row.from}</td>
                          <td className="px-4 py-2 text-zinc-600">{row.removed}</td>
                          <td className="px-4 py-2 text-zinc-600">{row.verdict}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-5 leading-7 text-zinc-600">
                  DIY kits belong in the temporary group. WhoCanFixMyCar calls them a short-term
                  fix and advises avoiding string repairs, because nobody checks the inside.
                </p>
              </div>

              {/* can every puncture be repaired */}
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
                  Can a Technician Repair Every Puncture?
                </h2>
                <p className="leading-7 text-zinc-600">
                  No. Technicians can repair only small punctures in the central tread, and several
                  kinds of damage mean a new tyre.
                </p>
                <div className="mt-5 overflow-hidden rounded-xl ring-1 ring-zinc-100">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-zinc-100 text-xs font-semibold uppercase tracking-wide text-zinc-600">
                      <tr>
                        <th className="px-4 py-2">Situation</th>
                        <th className="px-4 py-2">Repairable?</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                      {repairableTable.map((row) => (
                        <tr key={row.situation} className="odd:bg-zinc-50">
                          <td className="px-4 py-2 text-zinc-600">{row.situation}</td>
                          <td className="px-4 py-2 font-semibold text-zinc-900">
                            {row.repairable}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-5 leading-7 text-zinc-600">
                  Pirelli UK and Just Tyres (February 2024) set these limits. They draw the
                  repairable zone differently, though. Pirelli says 60 to 70% of the tread width,
                  while Just Tyres says the central three-quarters.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  The technician&apos;s repair chart settles it for your tyre. Check your tread
                  before you call, because the legal minimum is 1.6mm across the central
                  three-quarters and around the whole circumference, the Motor Ombudsman says
                  (June 2026).
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Run-flat tyres can travel up to 50 miles at up to 50mph after a puncture, Pirelli
                  says. The reinforced sidewall can hide damage, so run-flat tyre repair is
                  generally off the table.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  The same limits apply to car tyre, SUV tyre and van tyre repairs.
                </p>
              </div>

              {/* BS AU 159 */}
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
                  What Is BS AU 159, and Why Does It Matter?
                </h2>
                <p className="leading-7 text-zinc-600">
                  BS AU 159 is the British Standard for repairing tyres on vehicles used on public
                  roads, and it defines what a safe repair looks like.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  The British Standards Institution lists the current edition as BS AU
                  159G:2013, published on 30 November 2013 and still current. It covers inspection,
                  performance criteria, repair materials and marking.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Its scope excludes temporary external plugs, liquid sealants, sealant gel tyres
                  and T-type temporary spare tyres. Treat a plug-only fix or a can of sealant as a
                  stopgap to reach a fitter.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Pirelli says the standard also sets the number of repairs, the size limit and the
                  location limit. Ask the fitter whether the repair follows BS AU 159G, and ask to
                  see the puncture and the finished repair, as Green Flag suggests.
                </p>
              </div>

              {/* while you wait */}
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
                  What Should You Do While You Wait for the Technician?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Get yourself and your car to a safe place first, because the Highway Code puts
                  safety ahead of the repair.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  On any road, rule 274 says to move the vehicle off the road if you can. Use
                  hazard warning lights if it still obstructs traffic, and do not stand between
                  your vehicle and oncoming traffic.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Place a warning triangle at least 45 metres behind the vehicle, but never on a
                  motorway. Wear fluorescent clothing by day and reflective clothing at night.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  On a motorway, rule 275 says to leave at the next exit or service area if you
                  can. Otherwise stop on the hard shoulder as far left as possible, with your
                  wheels turned left.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Leave by the left-hand door and wait well away from the carriageway. The code
                  says not to put yourself in danger by attempting even simple repairs.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Walk to an emergency telephone on your side, which connects directly to the
                  police. Where there is no hard shoulder, rule 277 says to switch on your hazard
                  lights and leave the vehicle only when you can get clear.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  For a flat on an ordinary road,{" "}
                  <Link
                    href="/emergency-mobile-tyre-fitting-bristol"
                    className="text-orange-500 hover:underline"
                  >
                    emergency mobile tyre fitting
                  </Link>{" "}
                  can bring a technician to your location.
                </p>
              </div>

              {/* questions to ask */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path d="M2 3.5A1.5 1.5 0 013.5 2h13A1.5 1.5 0 0118 3.5v10a1.5 1.5 0 01-1.5 1.5H9.621a1.5 1.5 0 00-1.06.44l-2.122 2.12a.5.5 0 01-.854-.353V15.5a.5.5 0 00-.5-.5h-2A1.5 1.5 0 011 13.5v-10z" />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  What Should You Ask Before You Book Mobile Tyre Repair?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Ask five questions before work starts, and expect clear answers.
                </p>
                <div className="mt-5 space-y-4">
                  {bookingQuestions.map((q, i) => (
                    <div key={q.title}>
                      <h3 className="font-semibold text-zinc-900">
                        {i + 1}. {q.title}
                      </h3>
                      <p className="mt-1 leading-7 text-zinc-600">{q.body}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 leading-7 text-zinc-600">
                  The guide to{" "}
                  <Link href="/what-are-silent-tyres" className="text-orange-500 hover:underline">
                    silent tyres
                  </Link>{" "}
                  explains foam-lined models in more detail.
                </p>
              </div>

              {/* FAQ */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <h2 className="mb-5 text-xl font-bold text-zinc-900">
                  FAQs About Mobile Tyre Repair
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

              {/* at home service photo */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-zinc-100">
                <Image
                  src="/technician-tyre-repair-home-driveway-jack.webp"
                  alt="Mobile technician repairing a tyre on a home driveway"
                  fill
                  sizes="(min-width: 768px) 768px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-zinc-900 p-8 text-center text-zinc-50 ring-1 ring-zinc-800 sm:p-10">
              <h2 className="text-2xl font-bold tracking-tight">
                Need a Mobile Tyre Repair Near You in Bristol?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-zinc-300">
                Rapid Mobile Tyres serves Bristol and the surrounding area 24 hours a day, at your
                home, workplace or roadside. Fitters usually arrive in 45 to 60 minutes, depending
                on traffic, technician, tyre availability and location. Check the{" "}
                <Link href="/areas-we-cover" className="text-orange-400 underline underline-offset-2 hover:text-orange-300">
                  areas we cover
                </Link>{" "}
                first.
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
