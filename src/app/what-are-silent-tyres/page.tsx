import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/data";

const PAGE_URL = "https://rapid-tyres.com/what-are-silent-tyres";
const OG_IMAGE = "https://rapid-tyres.com/standard-vs-foam-lined-silent-tyre-comparison.webp";
const TITLE = "What Are Silent Tyres? Benefits & Drawbacks";
const DESCRIPTION =
  "What are silent tyres? Learn how foam-lined tyres cut cabin noise, who they suit, what they cost and how punctures are repaired.";

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
        alt: "A standard tyre next to a foam-lined silent tyre cut in cross-section",
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

const brandTable = [
  { brand: "Continental", name: "ContiSilent" },
  { brand: "Michelin", name: "Acoustic" },
  { brand: "Pirelli", name: "NCS (Pirelli Noise Cancelling System)" },
  { brand: "Goodyear", name: "SoundComfort, often shown as SCT" },
  { brand: "Dunlop", name: "NST" },
  { brand: "Hankook", name: "Sound Absorber" },
  { brand: "Bridgestone", name: "B-Silent" },
  { brand: "Kumho", name: "K-Silent" },
];

const claimsTable = [
  {
    brand: "Continental",
    claim: "Up to 9 dB(A) less of the rolling noise heard as annoying inside the car",
    basis: "Varies with vehicle, speed and road surface; no test detail",
  },
  {
    brand: "Goodyear",
    claim: "Up to 50%, or up to 60% (4 dBA), less interior noise",
    basis: "Internal road tests, 2011 to 2021, in Luxembourg on VW, Audi and Ford models",
  },
  {
    brand: "Michelin",
    claim: "About 20% less perceived cabin noise",
    basis: "Measured in 2020 on a 245/45 R19 tyre fitted to a KIA Cadenza, 170 to 230 Hz range",
  },
  {
    brand: "Pirelli",
    claim: "2 to 3 dB, described as half the perceived noise; up to 25% in a 2019 press release",
    basis: "No test method given for either figure",
  },
];

const checklistSteps = [
  {
    title: "Name the technology",
    body: "Ask for the exact model and its foam name, such as ContiSilent or Acoustic.",
  },
  {
    title: "Check the size",
    body: "Foam models do not cover every size, and Michelin Acoustic tyres start as original equipment.",
  },
  {
    title: "Read the label for outside noise only",
    body: "UK retailers treat a figure in the high 60s dB as quiet, but the label says nothing about the cabin.",
  },
  {
    title: "Ask about repairs",
    body: "Check whether your fitter repairs foam-lined tyres and what they advise on sealant.",
  },
  {
    title: "Fix the cheap causes first",
    body: "Check cold pressures against the maker's figure, as the Highway Code advises, and replace tyres below the 1.6mm legal limit.",
  },
  {
    title: "Compare prices",
    body: "Get quotes for foam-lined and standard versions, then decide whether a quieter cabin justifies the difference.",
  },
];

const faqs = [
  {
    question: "Do silent tyres really work?",
    answer:
      "Yes, they reduce cavity drone, but the gain varies by car and road. Brands claim from 2 dB to 9 dB(A), and a February 2022 trade test measured a 1.7 dBA fall in overall cabin noise on polished asphalt.",
  },
  {
    question: "Are silent tyres more expensive?",
    answer:
      "Usually, yes. Kwik Fit puts them at upwards of 15% more than standard tyres (May 2025), so ask for quotes on both versions of your size.",
  },
  {
    question: "Can silent tyres be repaired?",
    answer:
      "Often, yes. Goodyear says SoundComfort tyres are repairable, but the standard limits apply and the fitter must inspect inside the tyre. Tell your fitter about the foam first.",
  },
  {
    question: "Are silent tyres only for electric cars?",
    answer:
      "No. Kwik Fit says they often appear on electric, luxury and long-distance vehicles, but UK listings include everyday models such as the Continental PremiumContact 6 and Goodyear EfficientGrip Performance 2.",
  },
  {
    question: "Do silent tyres affect grip or wear?",
    answer:
      "Continental says ContiSilent does not change braking, handling or mileage. Halfords warns that quiet tyres in general often use softer compounds, which can affect grip and wear, so compare wet-grip and wear data for your model.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "What Are Silent Tyres? A Plain-English UK Guide",
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

export default function SilentTyresPage() {
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
          title="What Are Silent Tyres? A Plain-English UK Guide"
          breadcrumb="Home / Blog / What Are Silent Tyres?"
          subtitle="How foam-lined tyres cut cabin noise, who they suit, what they cost, and how punctures get repaired."
        />

        <section className="bg-zinc-50 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 sm:px-10">
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
              <p className="leading-7 text-zinc-600">
                You fit new tyres, yet the motorway drone stays. In a quiet car, that constant hum
                is hard to ignore. It also makes calls and conversations harder.
              </p>
              <p className="mt-4 leading-7 text-zinc-600">
                So, what are silent tyres? This guide explains how foam-lined tyres work, how much
                quieter they really are, and what to ask before you buy or repair a set.
              </p>
            </div>

            <div className="relative mt-6 aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-zinc-100">
              <Image
                src="/driver-hands-on-steering-wheel-motorway.webp"
                alt="Driver's hands on the steering wheel on a UK motorway"
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
                preload
              />
            </div>

            <div className="mt-6 space-y-6">
              {/* what are silent tyres */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM8.5 16a1.5 1.5 0 003 0h-3z" />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">What Are Silent Tyres?</h2>
                <p className="leading-7 text-zinc-600">
                  Silent tyres are tyres with a ring of polyurethane foam bonded inside the tread,
                  which absorbs noise from the air inside the tyre.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Brands also call them noise-cancelling tyres, noiseless tyres or quiet tyres.
                  Each maker uses its own name, such as ContiSilent, Michelin Acoustic Technology
                  or Pirelli Noise Cancelling System.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  You cannot see the foam from outside, because it sits on the inner surface of the
                  tyre. Many of these tyres also use tuned tread patterns and rubber compounds to
                  cut noise further.
                </p>
                <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-zinc-100">
                  <Image
                    src="/alloy-wheel-foam-lined-silent-tyre-closeup.webp"
                    alt="Close-up of an alloy wheel fitted with a foam-lined silent tyre"
                    fill
                    sizes="(min-width: 768px) 672px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* how they work */}
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
                <h2 className="mb-3 text-xl font-bold text-zinc-900">How Do Silent Tyres Work?</h2>
                <p className="leading-7 text-zinc-600">
                  Silent tyres work by using foam to absorb vibrating air inside the tyre before
                  that vibration reaches the wheel and the cabin.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  As a tyre rolls, the air in its cavity resonates. Goodyear says that vibration
                  passes into the vehicle&apos;s structure, and Michelin compares the cavity to a
                  drum.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  The foam soaks up that resonance. Continental says it stops vibration travelling
                  from the tyre through the wheel and axle into the cabin.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Continental also says ContiSilent fits all commonly available rims and mounts
                  like any standard tyre. Mobile tyre fitting therefore follows the usual steps for
                  those tyres.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Tread design adds to tyre noise reduction. Michelin varies the width of its tread
                  blocks so no single repeating frequency builds up and creates noise.
                </p>
                <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-zinc-100">
                  <Image
                    src="/technician-inspecting-foam-lined-silent-tyre.webp"
                    alt="Technician inspecting the foam lining inside a silent tyre"
                    fill
                    sizes="(min-width: 768px) 672px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* which noise is fixed */}
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
                  Which Noise Do Silent Tyres Actually Fix?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Silent tyres mainly fix cavity drone, the low hum from the air inside the tyre,
                  not every sound a tyre makes.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Road surface, tread pattern and tyre width still shape what you hear. Foam cannot
                  change the road under your wheels.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  A February 2022 trade test in Tire Technology International shows the limit. On a
                  luxury saloon, foam cut the main cavity tone by nearly 10 dBA on polished
                  asphalt. Overall cabin noise fell only from 66.5 to 64.8 dBA.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  On new asphalt, the cabin level with foam rose to 70.5 dBA. One test on one car
                  cannot speak for every vehicle, but it shows the road surface still matters.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  The tyre label cannot show any of this. Michelin states that the decibel value on
                  the label measures exterior noise, not cabin noise.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  That means the label alone cannot tell you whether a tyre has foam. Ask for the
                  technology by name instead.
                </p>
              </div>

              {/* brands and how to spot */}
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
                  Which Brands Make Noise-Cancelling Tyres, and How Do You Spot Them?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Continental, Michelin, Pirelli, Goodyear, Dunlop, Hankook, Bridgestone and Kumho
                  all sell foam-lined tyres, each under its own name.
                </p>
                <div className="mt-5 overflow-hidden rounded-xl ring-1 ring-zinc-100">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-zinc-100 text-xs font-semibold uppercase tracking-wide text-zinc-600">
                      <tr>
                        <th className="px-4 py-2">Brand</th>
                        <th className="px-4 py-2">Name or tag to look for in UK listings</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                      {brandTable.map((row) => (
                        <tr key={row.brand} className="odd:bg-zinc-50">
                          <td className="px-4 py-2 font-semibold text-zinc-900">{row.brand}</td>
                          <td className="px-4 py-2 text-zinc-600">{row.name}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-5 leading-7 text-zinc-600">
                  Names in listings are the quickest check. Compare the full model name against
                  this table before you order.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Michelin says it designs its Acoustic tyres exclusively as original equipment,
                  developed with vehicle makers. It does not say whether replacement tyres carry
                  the same foam, so ask your dealer to confirm.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Pirelli&apos;s 2019 press release advises buying tyres with PNCS markings made
                  for your car to keep the benefit.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Silent tyres come in SUV sizes too. UK listings include the Michelin Primacy 4
                  SUV Acoustic and the Continental SportContact 5 SUV ContiSilent. Check the exact
                  size with whoever handles your{" "}
                  <Link href="/mobile-car-tyre-fitting-bristol" className="text-orange-500 hover:underline">
                    SUV tyre fitting
                  </Link>
                  .
                </p>
              </div>

              {/* how much quieter */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path d="M10.75 10.818v2.614A3.13 3.13 0 0011.888 13c.482-.315.612-.648.612-.875 0-.227-.13-.56-.612-.875a3.13 3.13 0 00-1.138-.432zM8.33 8.62c.053.055.115.11.184.164.208.16.46.284.736.363V6.603a2.45 2.45 0 00-.35.13c-.14.065-.27.143-.386.233-.377.292-.514.627-.514.909 0 .184.058.39.202.591.036.051.08.102.128.153z" />
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v2.541a2.9 2.9 0 01-.837-.313 1 1 0 10-.996 1.736c.504.287 1.153.504 1.833.588V16a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 14.766 14 13.991 14 13c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 10.092V7.551c.264.07.49.172.669.291a1 1 0 00.662-1.887 3.13 3.13 0 00-1.331-.433V5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  How Much Quieter Are Silent Tyres?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Brands claim anything from 2 dB to 9 dB(A), or 20% to 60%, but each figure comes
                  from a different test.
                </p>
                <div className="mt-5 overflow-hidden rounded-xl ring-1 ring-zinc-100">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-zinc-100 text-xs font-semibold uppercase tracking-wide text-zinc-600">
                      <tr>
                        <th className="px-4 py-2">Brand</th>
                        <th className="px-4 py-2">Claim</th>
                        <th className="px-4 py-2">Test basis stated</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                      {claimsTable.map((row) => (
                        <tr key={row.brand} className="odd:bg-zinc-50 align-top">
                          <td className="px-4 py-2 font-semibold text-zinc-900">{row.brand}</td>
                          <td className="px-4 py-2 text-zinc-600">{row.claim}</td>
                          <td className="px-4 py-2 text-zinc-600">{row.basis}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-5 leading-7 text-zinc-600">
                  Percentages and decibels do not convert neatly. Continental&apos;s guide says the
                  ear hears every 10 dB drop as half the sound.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  On that rule of thumb, a 2 to 3 dB cut falls well short of half. That is why
                  every claim needs its test conditions beside it.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Treat each figure as a best case on one car. Continental and Goodyear both say
                  your result depends on the vehicle, its speed and the road.
                </p>
              </div>

              {/* worth the cost */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path d="M10.75 10.818v2.614A3.13 3.13 0 0011.888 13c.482-.315.612-.648.612-.875 0-.227-.13-.56-.612-.875a3.13 3.13 0 00-1.138-.432zM8.33 8.62c.053.055.115.11.184.164.208.16.46.284.736.363V6.603a2.45 2.45 0 00-.35.13c-.14.065-.27.143-.386.233-.377.292-.514.627-.514.909 0 .184.058.39.202.591.036.051.08.102.128.153z" />
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v2.541a2.9 2.9 0 01-.837-.313 1 1 0 10-.996 1.736c.504.287 1.153.504 1.833.588V16a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 14.766 14 13.991 14 13c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 10.092V7.551c.264.07.49.172.669.291a1 1 0 00.662-1.887 3.13 3.13 0 00-1.331-.433V5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  Are Silent Tyres Worth the Extra Cost?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Silent tyres suit drivers who cover motorway miles or drive electric, but they
                  usually cost more and come in fewer options.
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-600">
                  <li>
                    <strong className="text-zinc-900">Cost:</strong> Kwik Fit puts them at upwards
                    of 15% more than standard tyres (May 2025).
                  </li>
                  <li>
                    <strong className="text-zinc-900">Choice:</strong> Kwik Fit notes they may not
                    suit every car or come in a wide range of options.
                  </li>
                  <li>
                    <strong className="text-zinc-900">Electric cars:</strong> Kwik Fit says the
                    need for quieter tyres has grown with EVs, because tyre noise stands out
                    without an engine roar. That makes silent tyres for EVs a natural fit.
                  </li>
                  <li>
                    <strong className="text-zinc-900">Comfort:</strong> Michelin says the foam
                    makes hands-free calls clearer and eases driver fatigue on long journeys.
                  </li>
                  <li>
                    <strong className="text-zinc-900">Performance:</strong> Continental says
                    ContiSilent does not change braking, handling, mileage, load or speed
                    capability.
                  </li>
                </ul>
                <p className="mt-4 leading-7 text-zinc-600">
                  Where both versions exist, ask for a quote on each. Then compare the two prices,
                  whether you buy at a garage or book{" "}
                  <Link href="/tyre-replacement-at-home-bristol" className="text-orange-500 hover:underline">
                    tyre replacement at home
                  </Link>
                  .
                </p>
              </div>

              {/* repair */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path
                      fillRule="evenodd"
                      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  Can You Repair a Silent Tyre After a Puncture?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Often yes, but the foam adds extra steps to the repair.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Goodyear states that SoundComfort tyres are repairable. Michelin&apos;s and
                  Pirelli&apos;s technology pages give no repair guidance.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  The usual limits still apply. UK retailers say you can repair only punctures in
                  the central three-quarters of the tread, under 6mm across, and V-rated or faster
                  tyres take one repair.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  A February 2022 trade article adds that foam scuffs if you drive on a deflated
                  tyre. It says crumbs can then block the valve.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  A December 2021 thread on a Tesla owners&apos; forum reports that some shops
                  refuse foam-lined tyres, while others cut out a small foam section around the
                  puncture. That is one forum&apos;s report, so ask your fitter before you need
                  one.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Avoid canned sealant unless the tyre maker approves it. Slime, as quoted by The
                  Autopian, says foam absorbs the sealant before it reaches the puncture, and the
                  tyre may need replacing.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Some foam tyres carry a factory sealant layer instead, such as ContiSeal
                  ContiSilent, Goodyear SealTech and Pirelli Seal Inside models in UK listings.
                  That differs from a can of sealant in the boot.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Run-flat tyres are a separate case. UK retailers say you cannot repair a
                  punctured run-flat.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Tell the fitter your tyre has foam before the wheel comes off. If the tyre is
                  beyond repair,{" "}
                  <Link
                    href="/emergency-mobile-tyre-fitting-bristol"
                    className="text-orange-500 hover:underline"
                  >
                    emergency mobile tyre fitting
                  </Link>{" "}
                  can bring a replacement to you.
                </p>
              </div>

              {/* checklist */}
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
                  How to Choose Silent Tyres: A Six-Point Checklist
                </h2>
                <p className="leading-7 text-zinc-600">
                  Choose silent tyres by checking six things, whether you use a garage or{" "}
                  <Link href="/mobile-car-tyre-fitting-bristol" className="text-orange-500 hover:underline">
                    mobile car tyre fitting
                  </Link>
                  .
                </p>
                <div className="mt-5 space-y-4">
                  {checklistSteps.map((step, i) => (
                    <div key={step.title}>
                      <h3 className="font-semibold text-zinc-900">
                        {i + 1}. {step.title}
                      </h3>
                      <p className="mt-1 leading-7 text-zinc-600">{step.body}</p>
                    </div>
                  ))}
                </div>
                <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-zinc-100">
                  <Image
                    src="/standard-vs-foam-lined-silent-tyre-comparison.webp"
                    alt="A standard tyre next to a foam-lined silent tyre cut in cross-section"
                    fill
                    sizes="(min-width: 768px) 672px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* FAQ */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <h2 className="mb-5 text-xl font-bold text-zinc-900">FAQs About Silent Tyres</h2>
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
              <h2 className="text-2xl font-bold tracking-tight">Need Tyres Fitted in Bristol?</h2>
              <p className="mx-auto mt-3 max-w-xl text-zinc-300">
                Rapid Mobile Tyres fits car, SUV and van tyres at your home or workplace across
                Bristol and the surrounding area, 24 hours a day. Check the{" "}
                <Link href="/areas-we-cover" className="text-orange-400 underline underline-offset-2 hover:text-orange-300">
                  areas we cover
                </Link>{" "}
                or browse our{" "}
                <Link href="/services" className="text-orange-400 underline underline-offset-2 hover:text-orange-300">
                  services
                </Link>
                .
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
              <p className="mt-4 text-sm text-zinc-400">
                For more advice, read the{" "}
                <Link href="/blog" className="text-orange-400 hover:underline">
                  tyre blog
                </Link>
                .
              </p>
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
