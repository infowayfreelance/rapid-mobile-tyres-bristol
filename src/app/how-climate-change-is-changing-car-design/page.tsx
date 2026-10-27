import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/data";

const PAGE_URL = "https://rapid-tyres.com/how-climate-change-is-changing-car-design";
const OG_IMAGE = "https://rapid-tyres.com/infrared-thermometer-check-electric-car.webp";
const TITLE = "How Climate Change Is Changing Car Design | Rapid";
const DESCRIPTION =
  "How climate change is changing car design: EVs, heat and flood protection, lighter bodies and new tyres. What UK drivers should know.";

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
        alt: "A man uses an infrared thermometer to check an electric car in hot weather",
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

const pressureTable = [
  {
    pressure: "Emissions rules",
    response: "Electric and hybrid power, lighter bodies, smoother shapes",
    notice: "More electric cars on UK roads",
  },
  {
    pressure: "Hotter summers",
    response: "Stronger cooling for the cabin and battery",
    notice: "Electric range drops in extreme heat",
  },
  {
    pressure: "Wetter winters",
    response: "Waterproofed electrical parts and wading limits",
    notice: "A maximum water depth in the handbook",
  },
  {
    pressure: "Tyre wear and pollution",
    response: "Low-resistance, longer-lasting, more recycled tyres",
    notice: "New EV-specific tyres",
  },
];

const tyreMaterialTable = [
  { maker: "Michelin", latest: "Just over 31%", milestone2030: "40%", ambition2050: "100%" },
  { maker: "Continental", latest: "28.1% (2025)", milestone2030: "At least 40%", ambition2050: "100%" },
  { maker: "Bridgestone", latest: "40.0% (2025)", milestone2030: "40% (reached)", ambition2050: "100%" },
];

const checklistItems = [
  {
    title: "Pressures in heat",
    body: "Davanti says to check weekly in hot weather, several hours after driving, because hot tyres give false readings (25 June 2026).",
  },
  {
    title: "Sidewalls",
    body: "Davanti warns that UV can dry rubber and cause cracks, so inspect the sidewalls in a heatwave and park in shade.",
  },
  {
    title: "Tread",
    body: "The legal minimum is 1.6mm, the Motor Ombudsman says (June 2026).",
  },
  {
    title: "Load rating on electric cars",
    body: "Carsa says many need extra-load or high-load tyres. A lower rating can be unsafe and can void the warranty.",
  },
  {
    title: "Smooth driving",
    body: "Move Electric advises gentle acceleration and braking, and Eco mode, to slow tyre wear.",
  },
];

const faqs = [
  {
    question: "Is climate change really changing car design?",
    answer:
      "Yes, mainly through emissions rules and weather. The ZEV mandate pushes electric power, while hotter summers and wetter winters affect cooling, sealing and tyres. Not every change has a single cause.",
  },
  {
    question: "Do electric cars wear tyres faster?",
    answer:
      "Often, yes. Emissions Analytics, cited by Move Electric (March 2026), links each extra 450 kg to about 20% more wear. EV-specific tyres narrow the gap.",
  },
  {
    question: "Are tyres becoming more sustainable?",
    answer:
      "Slowly. Michelin reports just over 31% recycled or renewable material, Continental 28.1% and Bridgestone 40.0%. All three figures are company-reported (The Tyre Lab, July 2026).",
  },
  {
    question: "When does the UK stop selling new petrol and diesel cars?",
    answer:
      "In 2030, with hybrids allowed until 2035, the government announced in April 2025. Check the latest rules before you buy.",
  },
  {
    question: "Can you drive an electric car through floodwater?",
    answer:
      "Follow the handbook's maximum depth and avoid fast-moving water. Tusker says makers waterproof EV components to strict standards, yet it does not recommend driving through floods.",
  },
  {
    question: "Does hot weather damage tyres?",
    answer:
      "It can. Davanti warns that heat raises tyre pressure and UV cracks rubber, so check pressures weekly in a heatwave.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "How Climate Change Is Changing Car Design",
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

export default function ClimateChangeCarDesignPage() {
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
          title="How Climate Change Is Changing Car Design"
          breadcrumb="Home / Blog / How Climate Change Is Changing Car Design"
          subtitle="EVs, heat and flood protection, lighter bodies and new tyres — what UK drivers should know."
        />

        <section className="bg-zinc-50 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 sm:px-10">
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
              <p className="leading-7 text-zinc-600">
                Your next car may look familiar, yet it is built for a different climate. Hotter
                summers, wetter winters and tighter emissions rules are reshaping everything from
                the battery to the tyres.
              </p>
              <p className="mt-4 leading-7 text-zinc-600">
                This guide explains how climate change is changing car design, using UK data. It
                shows what changes for drivers and what to check on your own tyres.
              </p>
            </div>

            <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-zinc-100">
              <Image
                src="/infrared-thermometer-check-electric-car.webp"
                alt="A man uses an infrared thermometer to check an electric car in hot weather"
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
                preload
              />
            </div>

            <div className="mt-6 space-y-6">
              {/* two directions */}
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
                  How Climate Change Is Changing Car Design in the UK
                </h2>
                <p className="leading-7 text-zinc-600">
                  Climate change pushes car design in two directions: cut the emissions that cars
                  cause, and cope with the weather that climate change brings.
                </p>
                <div className="mt-5 overflow-x-auto rounded-xl ring-1 ring-zinc-100">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-zinc-100 text-xs font-semibold uppercase tracking-wide text-zinc-600">
                      <tr>
                        <th className="px-4 py-2">Pressure</th>
                        <th className="px-4 py-2">Design response</th>
                        <th className="px-4 py-2">What drivers notice</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                      {pressureTable.map((row) => (
                        <tr key={row.pressure} className="odd:bg-zinc-50 align-top">
                          <td className="px-4 py-2 font-semibold text-zinc-900">{row.pressure}</td>
                          <td className="px-4 py-2 text-zinc-600">{row.response}</td>
                          <td className="px-4 py-2 text-zinc-600">{row.notice}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-5 leading-7 text-zinc-600">
                  Emissions rules drive the shift to electric power. Heat, floods and tyre wear
                  then decide how well those cars cope in daily use.
                </p>
              </div>

              {/* electric power */}
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
                  Why Are UK Cars Switching to Electric Power?
                </h2>
                <p className="leading-7 text-zinc-600">
                  UK cars are switching to electric power because the ZEV mandate sets rising sales
                  targets and buyers are responding.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  The government confirmed in April 2025 that new petrol and diesel car sales end
                  in 2030, while hybrids can stay on sale until 2035. Carmakers must reach 33%
                  electric sales in 2026, rising to 52% in 2028.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  SMMT says battery electric cars took 26.2% of UK registrations in April 2026 and
                  23.1% across the year to date (5 May 2026). That sits about 10 percentage points
                  short of the 33% target.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Globally, the IEA expects electric cars to make up nearly 30% of new car sales in
                  2026, about 23 million cars (20 May 2026).
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Electric power changes the whole car. Batteries add weight, motors deliver
                  instant torque, and a quiet drivetrain makes tyre noise easier to hear.
                </p>
              </div>

              {/* hotter weather */}
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
                  What Does Hotter Weather Mean for Car Design?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Hotter weather forces carmakers to cool batteries and cabins harder, and it
                  shortens electric range at the extremes.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  The State of the UK Climate 2025 report says 2025 was the UK&apos;s warmest year
                  since the series began in 1884, with the warmest spring and summer on record
                  (Royal Meteorological Society, 15 July 2026).
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Days above 30°C in Greater London more than quadrupled across 2016 to 2025,
                  compared with 1961 to 1990.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Heat cuts range. Recurrent studied 29,716 US electric cars in 2025 and found
                  about 5% range loss at 32°C and 17% to 18% at 37°C. Cabin air conditioning and
                  battery cooling cause most of it.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Pre-cooling the car while you plug it in saves range, Recurrent says, because
                  holding a cool cabin takes far less power than cooling a hot one.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Even paint colour matters. University of Lisbon researchers found a black car
                  parked for over five hours at 36°C warmed nearby air by up to 3.8°C above the
                  asphalt (Euronews, 27 August 2025).
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Black paint reflects 5% to 10% of sunlight, while white reflects 75% to 85%. The
                  researchers suggest lighter paint for fleet vehicles such as taxis and delivery
                  vans.
                </p>
              </div>

              {/* floods and storms */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path d="M10 2a.75.75 0 01.75.75v6.69l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 111.06-1.06l1.72 1.72V2.75A.75.75 0 0110 2zM5.5 14a.75.75 0 000 1.5h9a.75.75 0 000-1.5h-9zM4 17a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 17z" />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  How Do Floods and Storms Change What Cars Must Handle?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Wetter winters mean cars need sealed electrics, reliable wet grip and clear
                  guidance on water depth.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Across 2016 to 2025, the UK&apos;s winter half-year was 3% wetter than 1991 to
                  2020 and 13% wetter than 1961 to 1990, the State of the UK Climate report says.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Rule 227 of the Highway Code says wet-weather stopping distances are at least
                  double the dry ones, because tyres have less grip.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Electric car lessor Tusker says makers waterproof EV components to strict
                  standards, and it tells drivers to follow the maximum water depth in the handbook
                  (October 2025). It does not recommend driving through floods.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Nottinghamshire County Council advises against crossing fast-moving water, and
                  says to test your brakes as soon as you leave standing water.
                </p>
                <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-zinc-100">
                  <Image
                    src="/car-driving-through-wet-road-splash.webp"
                    alt="Car driving through a wet road, splashing water from its tyres"
                    fill
                    sizes="(min-width: 768px) 672px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* lighter aerodynamic */}
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
                  Do Lighter, More Aerodynamic Cars Solve Everything?
                </h2>
                <p className="leading-7 text-zinc-600">
                  No. Lighter materials and smoother shapes help, but electric cars still weigh
                  more than petrol ones, and that weight lands on the tyres.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Kwik Fit says manufacturers are moving from steel towards aluminium and carbon
                  fibre, and adding underbody panels to cut drag (23 March 2025).
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Battery packs weigh roughly 350 to 600 kg, Carsa reports, so electric cars
                  typically weigh 20% to 30% more than comparable petrol cars (30 June 2026).
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Move Electric cites Emissions Analytics: every extra 450 kg of kerb weight adds
                  about 20% more tyre wear (25 March 2026). Michelin says electric cars can wear
                  tyres up to 20% faster.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Both figures come from a secondary report, so treat them as a guide, not a
                  guarantee. EV-specific tyres with stronger sidewalls and tougher rubber narrow
                  the gap.
                </p>
              </div>

              {/* tyres changing */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM8.5 16a1.5 1.5 0 003 0h-3z" />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  How Are Tyres Changing with the Climate?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Tyres are changing in three ways: lower rolling resistance for electric range,
                  more recycled and renewable materials, and lower wear.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Carsa reports independent tests where tyre choice changed real-world electric
                  range by 10% to 16%. Rolling resistance accounts for about 10% of an electric
                  car&apos;s energy use, and a modern low-resistance tyre typically adds 5% to 10%
                  range.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Carsa also says 10% under-inflation raises rolling resistance by 1% to 2%, so
                  correct pressures protect range as well as grip.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  The big makers now report the share of each tyre made from recycled or renewable
                  material.
                </p>
                <div className="mt-5 overflow-x-auto rounded-xl ring-1 ring-zinc-100">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-zinc-100 text-xs font-semibold uppercase tracking-wide text-zinc-600">
                      <tr>
                        <th className="px-4 py-2">Maker</th>
                        <th className="px-4 py-2">Latest share</th>
                        <th className="px-4 py-2">2030 milestone</th>
                        <th className="px-4 py-2">2050 ambition</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                      {tyreMaterialTable.map((row) => (
                        <tr key={row.maker} className="odd:bg-zinc-50">
                          <td className="px-4 py-2 font-semibold text-zinc-900">{row.maker}</td>
                          <td className="px-4 py-2 text-zinc-600">{row.latest}</td>
                          <td className="px-4 py-2 text-zinc-600">{row.milestone2030}</td>
                          <td className="px-4 py-2 text-zinc-600">{row.ambition2050}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-5 leading-7 text-zinc-600">
                  The Tyre Lab (27 July 2026) notes these figures are company-reported and use
                  different scopes. Continental and Bridgestone partly use mass-balance
                  certification, so the shares are not directly comparable.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  In June 2026 the UN&apos;s WP.29 adopted the first binding abrasion limits for
                  car tyres. They apply from 30 June 2028 in countries that adopt them, and UNECE
                  estimates they could cut tyre abrasion by more than 10% (Pew, 7 July 2026).
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Milder winters also push UK drivers towards all-season tyres. GfK data covered by
                  Tyrepress showed UK all-season units up about 6% in the year to March 2024.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Quiet cabins make tyre noise stand out, which is why{" "}
                  <Link href="/what-are-silent-tyres" className="text-orange-500 hover:underline">
                    silent tyres
                  </Link>{" "}
                  appear on more electric cars.
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
                  What Should UK Drivers Check Now?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Check your tyre pressures, tread, load rating and the handbook&apos;s water-depth
                  limit before the weather turns.
                </p>
                <div className="mt-5 space-y-4">
                  {checklistItems.map((item) => (
                    <div key={item.title}>
                      <h3 className="font-semibold text-zinc-900">{item.title}</h3>
                      <p className="mt-1 leading-7 text-zinc-600">{item.body}</p>
                    </div>
                  ))}
                </div>
                <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-zinc-100">
                  <Image
                    src="/technician-inspecting-suv-tyre-driveway.webp"
                    alt="Mobile technician inspecting an SUV tyre on a home driveway"
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
                  How Does Rapid Mobile Tyres Help?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Rapid Mobile Tyres fits tyres at your home, workplace or roadside across Bristol
                  and the surrounding area, 24 hours a day.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Rapid says it fits EV-rated tyres, as well as run-flat and specialist tyres, for
                  cars, SUVs, 4x4s and vans. Its technicians check all four tyre pressures before
                  they leave.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Start with{" "}
                  <Link href="/mobile-tyre-fitting" className="text-orange-500 hover:underline">
                    mobile tyre fitting
                  </Link>
                  . Rapid also covers{" "}
                  <Link href="/mobile-car-tyre-fitting-bristol" className="text-orange-500 hover:underline">
                    car tyres, SUV tyres
                  </Link>{" "}
                  and van tyres, and offers{" "}
                  <Link href="/tyre-replacement-at-home-bristol" className="text-orange-500 hover:underline">
                    tyre replacement at home
                  </Link>
                  .
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  A burst or flat tyre needs{" "}
                  <Link
                    href="/emergency-tyre-fitting-getting-back-on-the-road-quickly"
                    className="text-orange-500 hover:underline"
                  >
                    emergency tyre fitting
                  </Link>
                  , and Rapid says its technician usually arrives in 45 to 60 minutes. Check the{" "}
                  <Link href="/areas-we-cover" className="text-orange-500 hover:underline">
                    areas Rapid covers
                  </Link>
                  .
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Call or WhatsApp{" "}
                  <a href={siteConfig.phoneHref} className="text-orange-500 hover:underline">
                    {siteConfig.phone}
                  </a>
                  , or use the{" "}
                  <Link href="/contact" className="text-orange-500 hover:underline">
                    contact page
                  </Link>
                  .
                </p>
                <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-zinc-100">
                  <Image
                    src="/mobile-tyre-technician-loading-van-driveway.webp"
                    alt="Mobile tyre technician loading a toolbox from the van on a home driveway"
                    fill
                    sizes="(min-width: 768px) 672px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* FAQ */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <h2 className="mb-5 text-xl font-bold text-zinc-900">
                  FAQs About Climate Change and Car Design
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
                Ready for the Next Set of Tyres?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-zinc-300">
                Rapid Mobile Tyres fits EV-rated, run-flat and specialist tyres at your home,
                workplace or the roadside, 24/7 across Bristol and the surrounding area.
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
