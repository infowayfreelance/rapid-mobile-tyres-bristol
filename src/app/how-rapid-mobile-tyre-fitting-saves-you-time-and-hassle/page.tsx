import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/data";

const PAGE_URL =
  "https://rapid-tyres.com/how-rapid-mobile-tyre-fitting-saves-you-time-and-hassle";
const OG_IMAGE = "https://rapid-tyres.com/customer-doorstep-watching-mobile-tyre-technician.webp";
const TITLE = "Mobile Tyre Fitting: Save Time and Hassle | Rapid";
const DESCRIPTION =
  "Mobile tyre fitting from Rapid comes to your home, workplace or roadside in Bristol. See how it saves time and what to prepare.";

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
        height: 940,
        alt: "Customer watching a mobile tyre technician work on her car from the doorstep",
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

const timeStages = [
  { stage: "Getting there", garage: "You drive to the garage", rapid: "The technician drives to you" },
  { stage: "Waiting", garage: "You may wait at the garage", rapid: "You carry on at home or work" },
  {
    stage: "Fitting",
    garage: "Done at the garage",
    rapid: "Done on your driveway, at work or at the roadside",
  },
  { stage: "Getting home", garage: "You drive back", rapid: "You drive away when the job is done" },
];

const hassleBenefits = [
  {
    title: "No towing",
    body: "Rapid says you need no towing and no garage waiting room, and you need no recovery truck for a roadside flat.",
  },
  {
    title: "Any hour",
    body: "Rapid offers same-day and emergency slots 24 hours a day, including weekends and bank holidays.",
  },
  {
    title: "Right tyre on the van",
    body: "The technician arrives with the right tyres already loaded, and Rapid confirms availability before setting off.",
  },
  {
    title: "Checks on site",
    body: "Rapid says its technicians torque the wheel nuts to the manufacturer's specification and check all four tyre pressures before leaving.",
  },
  {
    title: "Worn tyres spotted",
    body: "Rapid carries out on-site tread checks and replaces worn tyres where your car is parked.",
  },
  {
    title: "Choice of brands",
    body: "Rapid lists Michelin, Continental, Pirelli, Bridgestone, Goodyear and Dunlop among the tyres it fits.",
  },
];

const bookingSteps = [
  {
    title: "Call with your details",
    body: "Give your location, the tyre size printed on the sidewall (for example 205/55 R16), and a short description of the problem.",
  },
  {
    title: "Get an ETA",
    body: "Rapid says it confirms availability and an estimated arrival time straight away.",
  },
  {
    title: "The van comes to you",
    body: "A fully equipped unit heads to your driveway, workplace car park or the roadside.",
  },
  {
    title: "The technician fits and checks the tyre",
    body: "The technician removes the old tyre, fits the replacement, torques the wheel nuts and checks all four pressures.",
  },
];

const prepItems = [
  { title: "Tyre size", body: "Read it from the sidewall before you call." },
  { title: "Location", body: "Give a full address, or a precise roadside spot." },
  {
    title: "Space",
    body: "Kwik Fit and Blackcircles both say the fitter needs enough safe room, and Kwik Fit asks for a level surface.",
  },
  {
    title: "Locking wheel nut key",
    body: "Kwik Fit says a fitter may need it, so find it before the van arrives.",
  },
  {
    title: "Photos",
    body: "A December 2019 UK forum thread suggests taking your own photos of the wheels before work starts, which protects you and the fitter if a dispute follows.",
  },
  {
    title: "Arrival window",
    body: "The same thread reports one fitter arriving about an hour early, so confirm the window and keep your phone close.",
  },
];

const betterChoiceTable = [
  { situation: "Busy schedule, no time to visit a garage", choice: "Mobile" },
  { situation: "Flat tyre and the car is unsafe to drive", choice: "Mobile" },
  { situation: "Fitting at home or at work", choice: "Mobile" },
  { situation: "Wheel alignment needed", choice: "Garage" },
  { situation: "Damaged wheels or a stubborn locking nut", choice: "Garage" },
];

const faqs = [
  {
    question: "How long does mobile tyre fitting take?",
    answer:
      "About 30 minutes per tyre, according to Blackcircles. Rapid says most single car tyre replacements take 20 to 30 minutes from arrival, and its van usually arrives within 45 to 60 minutes.",
  },
  {
    question: "What do I need to tell Rapid when I book?",
    answer:
      "Give your location, the tyre size printed on the sidewall, and a short description of the problem. Rapid then confirms availability and an estimated arrival time.",
  },
  {
    question: "Is mobile tyre fitting as good as a garage?",
    answer:
      "Yes, for most everyday jobs. Start Rescue concludes that fitting a tyre is straightforward either way, so both options should produce a correctly fitted tyre. A garage suits alignment work.",
  },
  {
    question: "Can you fit tyres at night or on a Sunday?",
    answer: "Yes. Rapid is available 24 hours a day, 7 days a week, including weekends and bank holidays.",
  },
  {
    question: "Can Rapid fit SUV and van tyres?",
    answer:
      "Yes. Rapid's pages cover passenger cars, SUVs, crossovers and light commercial vans, and it confirms stock before it sets off.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "How Rapid Mobile Tyre Fitting Saves You Time and Hassle",
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

export default function MobileTyreFittingSavesTimePage() {
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
          title="How Rapid Mobile Tyre Fitting Saves You Time and Hassle"
          breadcrumb="Home / Blog / How Rapid Mobile Tyre Fitting Saves You Time and Hassle"
          subtitle="How mobile tyre fitting saves time and hassle in Bristol, and what to prepare on the day."
        />

        <section className="bg-zinc-50 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 sm:px-10">
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
              <p className="leading-7 text-zinc-600">
                A flat tyre turns a normal day upside down. Garage trips, waiting rooms and a car
                you cannot safely drive all eat your time.
              </p>
              <p className="mt-4 leading-7 text-zinc-600">
                Mobile tyre fitting removes most of that. This guide shows how Rapid Mobile Tyres
                saves you time and hassle in Bristol, and what to prepare and check on the day.
              </p>
            </div>

            <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-zinc-100">
              <Image
                src="/customer-doorstep-watching-mobile-tyre-technician.webp"
                alt="Customer watching a mobile tyre technician work on her car from the doorstep"
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
                  What Is Mobile Tyre Fitting?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Mobile tyre fitting is a service where a technician brings the tyres and
                  equipment to you and fits them where your vehicle is parked.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Rapid Mobile Tyres runs a 24/7 mobile tyre fitting service at your home,
                  workplace or the roadside across Bristol and the surrounding area. The van
                  arrives fully equipped, so the job happens on your driveway instead of in a
                  garage.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Read more about{" "}
                  <Link href="/mobile-tyre-fitting" className="text-orange-500 hover:underline">
                    Rapid&apos;s mobile tyre fitting service
                  </Link>
                  , or call a mobile tyre fitter directly on{" "}
                  <a href={siteConfig.phoneHref} className="text-orange-500 hover:underline">
                    {siteConfig.phone}
                  </a>
                  .
                </p>
              </div>

              {/* save time */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  How Does Mobile Tyre Fitting Save You Time?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Mobile tyre fitting saves you time by removing the trip to a garage and the wait
                  once you get there.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Rapid says its van usually arrives within 45 to 60 minutes of your call,
                  depending on traffic, technician availability, tyre availability and location.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  The fitting itself takes about the same time anywhere. Rapid&apos;s car tyre page
                  says most single car tyre replacements take 20 to 30 minutes from arrival, and
                  Blackcircles, a UK tyre retailer, puts fitting at about 30 minutes per tyre.
                </p>
                <div className="mt-5 overflow-x-auto rounded-xl ring-1 ring-zinc-100">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-zinc-100 text-xs font-semibold uppercase tracking-wide text-zinc-600">
                      <tr>
                        <th className="px-4 py-2">Stage</th>
                        <th className="px-4 py-2">Garage visit</th>
                        <th className="px-4 py-2">Rapid visit</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                      {timeStages.map((row) => (
                        <tr key={row.stage} className="odd:bg-zinc-50 align-top">
                          <td className="px-4 py-2 font-semibold text-zinc-900">{row.stage}</td>
                          <td className="px-4 py-2 text-zinc-600">{row.garage}</td>
                          <td className="px-4 py-2 text-zinc-600">{row.rapid}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-5 leading-7 text-zinc-600">
                  The time you save is the travel and the waiting, not the fitting itself.
                </p>
                <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-zinc-100">
                  <Image
                    src="/mobile-tyre-fitter-workplace-carpark-office-view.webp"
                    alt="Mobile tyre technician fitting a tyre in a workplace car park, seen through an office window"
                    fill
                    sizes="(min-width: 768px) 672px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* save hassle */}
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
                  How Does Mobile Tyre Fitting Save You Hassle?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Mobile tyre fitting saves hassle because your car stays where it is and the
                  technician handles the job around you.
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-600">
                  {hassleBenefits.map((item) => (
                    <li key={item.title}>
                      <strong className="text-zinc-900">{item.title}:</strong> {item.body}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 leading-7 text-zinc-600">
                  The same service covers car tyres,{" "}
                  <Link href="/mobile-car-tyre-fitting-bristol" className="text-orange-500 hover:underline">
                    SUV and 4x4 tyres
                  </Link>{" "}
                  and van tyres. Check your tread before you call, because the legal minimum is
                  1.6mm, the Motor Ombudsman says (June 2026).
                </p>
              </div>

              {/* booking steps */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path d="M2 3.5A1.5 1.5 0 013.5 2h13A1.5 1.5 0 0118 3.5v10a1.5 1.5 0 01-1.5 1.5H9.621a1.5 1.5 0 00-1.06.44l-2.122 2.12a.5.5 0 01-.854-.353V15.5a.5.5 0 00-.5-.5h-2A1.5 1.5 0 011 13.5v-10z" />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  How Does a Rapid Booking Work, Step by Step?
                </h2>
                <p className="leading-7 text-zinc-600">
                  A Rapid booking takes four steps, from your first call to driving away on a
                  fitted tyre.
                </p>
                <ol className="mt-5 space-y-3">
                  {bookingSteps.map((step, i) => (
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
                  You can{" "}
                  <Link href="/contact" className="text-orange-500 hover:underline">
                    book tyre fitting at home
                  </Link>{" "}
                  for a fixed time or for as soon as possible. Rapid also offers scheduled and
                  same-day slots.
                </p>
                <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-zinc-100">
                  <Image
                    src="/mobile-tyre-fitter-roadside-toolbox-rural-road.webp"
                    alt="Mobile tyre fitter setting up a toolbox beside a car on a rural road"
                    fill
                    sizes="(min-width: 768px) 672px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* what to prepare */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  What Should You Prepare Before the Technician Arrives?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Have your tyre size, your location and a safe, level space ready, so the
                  technician can start as soon as the van arrives.
                </p>
                <div className="mt-5 space-y-4">
                  {prepItems.map((item) => (
                    <div key={item.title}>
                      <h3 className="font-semibold text-zinc-900">{item.title}</h3>
                      <p className="mt-1 leading-7 text-zinc-600">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* what to check after */}
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
                  What Should You Check After the Fitting?
                </h2>
                <p className="leading-7 text-zinc-600">
                  After fitting, check your wheel nuts after about 30 miles, check your tyre
                  pressures, and tell the fitter about any vibration.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Continental says to recheck wheel nuts after about 30 miles (50 kilometres) on
                  new tyres. Driving loads, vibration and temperature changes can shift the nuts,
                  and grit can give a false torque reading at fitting.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Loose nuts raise a small risk of a wheel coming off, Continental says. Ask your
                  fitter whether they offer that recheck.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Check your pressures against the vehicle maker&apos;s figure, as the Highway Code
                  advises. Rapid&apos;s technicians check all four pressures before leaving, so a
                  quick tyre pressure check at home confirms the job.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  If the warning light stays on after you correct the pressures, the system may
                  need a reset, Blackcircles says (June 2026). The method varies by vehicle, so
                  check the handbook.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Drivers who felt vibration at motorway speed after a mobile fitting are described
                  in the same December 2019 forum thread. If you feel it, go back to the fitter
                  and say so.
                </p>
              </div>

              {/* mobile vs garage */}
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
                  When Is Mobile Tyre Fitting the Better Choice?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Mobile tyre fitting suits most everyday tyre jobs, while a garage suits jobs that
                  need extra workshop equipment.
                </p>
                <div className="mt-5 overflow-hidden rounded-xl ring-1 ring-zinc-100">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-zinc-100 text-xs font-semibold uppercase tracking-wide text-zinc-600">
                      <tr>
                        <th className="px-4 py-2">Situation</th>
                        <th className="px-4 py-2">Better choice</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                      {betterChoiceTable.map((row) => (
                        <tr key={row.situation} className="odd:bg-zinc-50">
                          <td className="px-4 py-2 text-zinc-600">{row.situation}</td>
                          <td className="px-4 py-2 font-semibold text-zinc-900">{row.choice}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-5 leading-7 text-zinc-600">
                  Fame Magazine (August 2026) says a mobile visit usually cannot include full wheel
                  alignment, so that needs a separate garage visit. It adds that fitting standards
                  should not be lower when an experienced technician does the job.
                </p>
              </div>

              {/* flat tyre now */}
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
                  What If You Have a Flat Tyre and Need Help Now?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Move to a safe place first, then call for help.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  The Highway Code, rule 274, says to move the vehicle off the road if you can and
                  to use hazard warning lights if it still blocks traffic. Do not stand between
                  your vehicle and oncoming traffic.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  On a motorway, rule 275 says to leave at the next exit or service area if you
                  can. Otherwise stop on the hard shoulder, wait well away from the carriageway,
                  and do not attempt even simple repairs.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Rapid offers{" "}
                  <Link
                    href="/emergency-mobile-tyre-fitting-bristol"
                    className="text-orange-500 hover:underline"
                  >
                    emergency tyre fitting
                  </Link>{" "}
                  24 hours a day, with a usual arrival of 45 to 60 minutes. If you are not sure
                  whether a puncture needs a new tyre, read the guide to{" "}
                  <Link
                    href="/mobile-tyre-repair-services-convenience-at-your-doorstep"
                    className="text-orange-500 hover:underline"
                  >
                    mobile tyre repair
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
                  Where Does Rapid Mobile Tyres Cover?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Rapid Mobile Tyres covers Bristol and the surrounding area, including Bath,
                  Newport, Weston-super-Mare, Bradley Stoke and Avonmouth.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  The base is at {siteConfig.address}. Check the{" "}
                  <Link href="/areas-we-cover" className="text-orange-500 hover:underline">
                    areas Rapid covers
                  </Link>{" "}
                  for your town.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Searching for mobile tyre fitting near me? Call or WhatsApp{" "}
                  <a href={siteConfig.phoneHref} className="text-orange-500 hover:underline">
                    {siteConfig.phone}
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
                  FAQs About Mobile Tyre Fitting
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
                Save Time with Mobile Tyre Fitting in Bristol
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-zinc-300">
                Rapid Mobile Tyres comes to your home, workplace or the roadside, 24 hours a day,
                with a usual arrival of 45 to 60 minutes.
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
