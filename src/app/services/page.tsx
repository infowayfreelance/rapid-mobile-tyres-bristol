import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TyreBrands from "@/components/TyreBrands";
import Faq from "@/components/Faq";
import { BUSINESS_ID } from "@/lib/businessSchema";

const SITE_URL = "https://rapid-tyres.com";
const PAGE_URL = SITE_URL + "/services";
const TITLE = "Mobile Tyre Services Bristol 24/7 | Rapid Mobile Tyres";
const DESCRIPTION =
  "Mobile tyre services in Bristol, 24/7: tyre fitting, puncture repair, emergency callouts, jump starts and fuel delivery to you. Call 07494 247246.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    images: [{ url: "/rapid-mobile-tyres-open-graph.webp" }],
    type: "website",
  },
};

const allServices = [
  {
    title: "Mobile Tyre Fitting",
    tagline: "Flat tyre? We come to you.",
    description: (
      <>
        <Link href="/flat-tyre-puncture-repair" className="relative z-10 text-orange-600 hover:underline">
          Puncture repairs
        </Link>
        , full replacements, and tyre pressure checks — wherever you are. Home, work, or roadside
        across Bristol, 24/7.
      </>
    ),
    href: "/mobile-tyre-fitting",
    image: "/mobile-tyre-fitting-technician-bristol.webp",
    badge: "Most popular",
  },
  {
    title: "Car Tyre Fitting",
    tagline: "Home, work, or roadside.",
    description:
      "Mobile car tyre fitting for hatchbacks, saloons, estates, and city cars — fitted at your location once we've confirmed the right tyre for your car.",
    href: "/mobile-car-tyre-fitting-bristol",
    image: "/mobile-car-tyre-fitting-bmw-i3-bristol.webp",
    badge: null,
  },
  {
    title: "SUV Tyre Fitting",
    tagline: "All makes and models.",
    description:
      "Specialist mobile tyre fitting for SUVs, crossovers, and 4x4s — with the right equipment and stock for larger tyre sizes.",
    href: "/suv-tyre-fitting-bristol",
    image: "/suv-tyre-fitting-volkswagen-tiguan-bristol.webp",
    badge: null,
  },
  {
    title: "Van Tyre Fitting",
    tagline: "Keep your fleet moving.",
    description:
      "Heavy-load van tyres for better fuel efficiency, traction, and long-lasting performance — fitted at your premises or the roadside.",
    href: "/mobile-van-tyre-fitting-bristol",
    image: "/van-tyre-fitting-road-service-bristol.webp",
    badge: null,
  },
  {
    title: "Emergency Tyre Fitting",
    tagline: "Urgent callout, 45–60 min response.",
    description:
      "Blowout on the motorway, pothole burst, or late-night flat? We respond 24/7 and fit the right tyre wherever you are in Bristol, where it's safe to work.",
    href: "/emergency-mobile-tyre-fitting-bristol",
    image: "/rapid-mobile-tyres-fleet-service-vans-bristol.webp",
    badge: "24/7",
  },
  {
    title: "Tyre Replacement at Home",
    tagline: "On your driveway, your schedule.",
    description:
      "New tyres fitted on your driveway — scheduled or same day. No garage visit, no disruption to your day.",
    href: "/tyre-replacement-at-home-bristol",
    image: "/tyre-replacement-at-home-technician-bristol.webp",
    badge: null,
  },
  {
    title: "Jump Start",
    tagline: "Dead battery? No problem.",
    description:
      "Stranded with a flat battery? Our technicians arrive with full jump-start equipment and usually get your engine running again within 45–60 minutes, depending on your location.",
    href: "/jumpstarts",
    image: "/jump-start-service-dead-battery-bristol.webp",
    badge: null,
  },
  {
    title: "Fuel Delivery",
    tagline: "Run out? We bring fuel to you.",
    description:
      "Out of petrol or diesel? We deliver enough fuel to get you safely to the nearest station — wherever you're stranded.",
    href: "/fuel-delivery",
    image: "/emergency-fuel-delivery-service-bristol.webp",
    badge: null,
  },
];

const faqs = [
  {
    question: "Is mobile tyre fitting safe on the roadside?",
    answer:
      "Yes, professional mobile tyre fitters are trained to work safely on the roadside using warning signs, hazard lights, and safety equipment to protect both you and your vehicle.",
  },
  {
    question: "How long does a mobile tyre fitting take?",
    answer:
      "Most single tyre replacements take 20-30 minutes once we arrive. We confirm your tyre size and check availability before we set off, so the right tyre is on the van when we get to you.",
  },
  {
    question: "How quickly can you get to me?",
    answer:
      "Our usual arrival time is around 45-60 minutes across our service area including Bristol, Bath, Newport, and Weston-Super-Mare, depending on your location, traffic, technician availability and tyre availability. For exact ETAs call us directly on 07494 247246.",
  },
  {
    question: "How do I find the tyre size for my vehicle?",
    answer:
      "You can find your tyre size printed on the sidewall of your current tyre (e.g., 205/55 R16), in your vehicle manual, or sometimes on a sticker inside the driver-side door.",
  },
  {
    question: "Can I book mobile tyre fitting for a company fleet or van?",
    answer:
      "Yes. We fit tyres on vans and business vehicles at your premises, depot or a safe roadside location. Call 07494 247246 with the tyre size and how many vehicles need tyres, and see our mobile van tyre fitting page for more detail.",
    answerContent: (
      <>
        Yes. We fit tyres on vans and business vehicles at your premises, depot or a safe roadside location. Call 07494 247246 with the tyre size and how many vehicles need tyres, and see our <Link href="/mobile-van-tyre-fitting-bristol" className="text-orange-600 hover:underline">mobile van tyre fitting</Link> page for more detail.
      </>
    ),
  },
  {
    question: "Are mobile tyre fitters available on weekends and holidays?",
    answer:
      "Yes, we operate 7 days a week including bank holidays. Whether it's a Sunday evening or a bank holiday, call us on 07494 247246 and we'll usually be with you within 45-60 minutes, depending on your location and technician availability.",
  },
  {
    question: "Do you come to my home or workplace?",
    answer:
      "Yes — we come to wherever your vehicle is. Home driveway, office car park, or roadside breakdown, as long as there is a safe place for the technician to work.",
  },
  {
    question: "What tyre brands do you stock?",
    answer:
      "We stock a full range from premium brands such as Michelin, Continental, Pirelli and Bridgestone, through to quality budget options. Tell us your vehicle and budget when you call and we'll recommend the right tyre.",
  },
  {
    question: "Do you cover emergency callouts?",
    answer:
      "Yes, emergency callouts are our speciality. We also offer jump start and fuel delivery services so one call covers most roadside emergencies. Available 24/7 — call 07494 247246.",
  },
  {
    question: "Can a puncture be repaired, or do I need a new tyre?",
    answer:
      "It depends where the damage is. A small nail or screw in the central part of the tread can sometimes be repaired if the tyre hasn't been driven on while flat. Damage to the sidewall or shoulder, a cut or bulge, or a tyre that has run flat needs replacing. Tell us where the damage is when you call and we'll say whether puncture repair or a new tyre is the likely answer.",
    answerContent: (
      <>
        It depends where the damage is. A small nail or screw in the central part of the tread can sometimes be repaired if the tyre hasn&apos;t been driven on while flat. Damage to the sidewall or shoulder, a cut or bulge, or a tyre that has run flat needs replacing. Tell us where the damage is when you call and we&apos;ll say whether <Link href="/flat-tyre-puncture-repair" className="text-orange-600 hover:underline">puncture repair</Link> or a new tyre is the likely answer.
      </>
    ),
  },
  {
    question: "What is the legal minimum tread depth in the UK?",
    answer:
      "For cars, the Highway Code says tyres must have a tread depth of at least 1.6 mm across the central three-quarters of the tread and around the entire circumference. See Annex 6 of the Highway Code. If your tyres are close to that, it is worth replacing them before they become a problem.",
    answerContent: (
      <>
        For cars, the Highway Code says tyres must have a tread depth of at least 1.6 mm across the central three-quarters of the tread and around the entire circumference. See <a href="https://www.gov.uk/guidance/the-highway-code/annex-6-vehicle-maintenance-safety-and-security" target="_blank" rel="noopener" className="text-orange-600 hover:underline">Annex 6 of the Highway Code</a>. If your tyres are close to that, it is worth replacing them before they become a problem.
      </>
    ),
  },
  {
    question: "Which service should I book if my car won't start?",
    answer:
      "If the battery is flat, book a jump start. If you've run out of petrol or diesel, book fuel delivery. If a tyre is flat or damaged, book emergency tyre fitting. Not sure? Call 07494 247246, describe what happened and we'll tell you which service fits.",
    answerContent: (
      <>
        If the battery is flat, book a <Link href="/jumpstarts" className="text-orange-600 hover:underline">jump start</Link>. If you&apos;ve run out of petrol or diesel, book <Link href="/fuel-delivery" className="text-orange-600 hover:underline">fuel delivery</Link>. If a tyre is flat or damaged, book <Link href="/emergency-mobile-tyre-fitting-bristol" className="text-orange-600 hover:underline">emergency tyre fitting</Link>. Not sure? Call 07494 247246, describe what happened and we&apos;ll tell you which service fits.
      </>
    ),
  },
  {
    question: "What should I tell you when I call?",
    answer:
      "Your exact location or postcode, your tyre size from the sidewall (or your registration), which tyre is damaged, and whether the vehicle is at home, at work or at the roadside. On a motorway, give your direction of travel and the nearest marker post or junction.",
  },
  {
    question: "Which areas do your mobile tyre services cover?",
    answer:
      "We cover Bristol and surrounding areas, including Bath, Newport, Weston-super-Mare, Chepstow, Gloucestershire, Bridgwater and Magor. See all the areas we serve or call 07494 247246 with your postcode to confirm coverage for your address.",
    answerContent: (
      <>
        We cover Bristol and surrounding areas, including Bath, Newport, Weston-super-Mare, Chepstow, Gloucestershire, Bridgwater and Magor. See <Link href="/areas-we-cover" className="text-orange-600 hover:underline">all the areas we serve</Link> or call 07494 247246 with your postcode to confirm coverage for your address.
      </>
    ),
  },
  {
    question: "How much do your mobile tyre services cost?",
    answer:
      "The price depends on the service, your tyre size, load index and speed rating, the brand and how many tyres you need. Call 07494 247246 with your tyre size or registration and we'll confirm availability and the price before anyone sets off.",
  },
];

const schemaServices = [
  ...allServices.slice(0, 6),
  { title: "Flat Tyre and Puncture Repair", href: "/flat-tyre-puncture-repair" },
  ...allServices.slice(6),
];

const serviceListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": PAGE_URL + "#services",
  name: "Mobile tyre and roadside services in Bristol",
  itemListElement: schemaServices.map(({ title, href }, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: title,
      url: SITE_URL + href,
      provider: { "@id": BUSINESS_ID },
      areaServed: { "@type": "City", name: "Bristol" },
    },
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": PAGE_URL + "#faq",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: PAGE_URL },
  ],
};

function ServiceInfoSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">{title}</h2>
        <div className="mt-4 space-y-4 text-zinc-600">{children}</div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      {[serviceListSchema, faqSchema, breadcrumbSchema].map((schema) => (
        <script
          key={schema["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
        />
      ))}
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-zinc-950 text-zinc-50">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-orange-600/15 blur-3xl"
          />
          <div className="relative mx-auto max-w-4xl px-6 py-24 text-center sm:px-10 sm:py-32">
            <p className="inline-flex items-center rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.15em] text-orange-500">
              Mobile Roadside Assistance
            </p>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Mobile Tyre Services in Bristol, Delivered to Your Door
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Whether you need a tyre fitted, a battery jump-started, or an emergency fuel top-up —
              our fully-equipped mobile units come straight to you, anywhere in Bristol and beyond,
              24 hours a day.
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-zinc-500">
              See why{" "}
              <Link href="/" className="text-orange-400 hover:underline">
                Rapid Mobile Tyres
              </Link>{" "}
              is Bristol&apos;s trusted 24/7 mobile tyre and roadside team.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="tel:+447494247246"
                className="flex h-12 items-center justify-center gap-2 rounded-full bg-orange-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
              >
                Call 07494 247246
              </a>
              <Link
                href="/contact"
                className="flex h-12 items-center justify-center rounded-full border border-zinc-700 px-6 text-sm font-semibold text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-900"
              >
                Request a Callback
              </Link>
            </div>
          </div>
        </section>

        {/* All services — unified 8-card grid */}
        <section id="services" className="bg-zinc-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">
                What we offer
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                Our Services
              </h2>
              <p className="mt-4 text-zinc-600">
                From emergency roadside callouts to planned home driveway fitting — one call covers
                everything.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {allServices.map((service) => (
                <div
                  key={service.title}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-xl"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {service.badge && (
                      <span className="absolute top-4 left-4 rounded-full bg-orange-600 px-3 py-1 text-xs font-semibold text-white">
                        {service.badge}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-semibold text-orange-600">{service.tagline}</p>
                    <h3 className="mt-1 text-lg font-bold text-zinc-950">{service.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-6 text-zinc-600">{service.description}</p>
                    <Link
                      href={service.href}
                      aria-label={`Learn more about ${service.title}`}
                      className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-orange-600 group-hover:gap-2 transition-all after:absolute after:inset-0 focus-visible:after:ring-2 focus-visible:after:ring-inset focus-visible:after:ring-orange-600"
                    >
                      Learn more
                      <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden>
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceInfoSection title="Which Mobile Tyre Service Do You Need?">
          <ul className="list-disc space-y-3 pl-5">
            <li><strong>Flat or damaged tyre and you can&apos;t drive on:</strong> <Link href="/emergency-mobile-tyre-fitting-bristol" className="text-orange-600 hover:underline">emergency tyre fitting</Link>, 24 hours a day.</li>
            <li><strong>A nail or screw in the tread:</strong> <Link href="/flat-tyre-puncture-repair" className="text-orange-600 hover:underline">flat tyre and puncture repair</Link>, if the damage can be safely repaired.</li>
            <li><strong>Worn tyres you want replaced at home:</strong> <Link href="/tyre-replacement-at-home-bristol" className="text-orange-600 hover:underline">tyre replacement at home</Link>, on your driveway at a time that suits you.</li>
            <li><strong>A car, SUV or van:</strong> <Link href="/mobile-car-tyre-fitting-bristol" className="text-orange-600 hover:underline">car tyre fitting</Link>, <Link href="/suv-tyre-fitting-bristol" className="text-orange-600 hover:underline">SUV tyre fitting</Link> or <Link href="/mobile-van-tyre-fitting-bristol" className="text-orange-600 hover:underline">van tyre fitting</Link>.</li>
            <li><strong>Engine won&apos;t start:</strong> a <Link href="/jumpstarts" className="text-orange-600 hover:underline">jump start</Link> for a flat battery.</li>
            <li><strong>Out of petrol or diesel:</strong> <Link href="/fuel-delivery" className="text-orange-600 hover:underline">fuel delivery</Link> to get you to the nearest station.</li>
          </ul>
          <p>If you&apos;re not sure, call 07494 247246 and describe what happened. We&apos;ll tell you which service fits.</p>
        </ServiceInfoSection>

        <ServiceInfoSection title="How Our Mobile Tyre Service Works">
          <ol className="list-decimal space-y-3 pl-5">
            <li><strong>Call us on 07494 247246.</strong> Tell us where the vehicle is, your tyre size from the sidewall (or your registration) and what&apos;s wrong.</li>
            <li><strong>We confirm the tyre and the price.</strong> We check the right tyre for your vehicle and confirm availability and the price before anyone sets off.</li>
            <li><strong>We fit it where you are.</strong> At home, at work or at a safe roadside spot. Our usual arrival time is around 45–60 minutes, depending on your location, traffic and technician availability.</li>
          </ol>
        </ServiceInfoSection>

        {/* Coverage banner */}
        <section className="relative overflow-hidden bg-zinc-950 py-20 text-zinc-50 sm:py-28">
          <div className="absolute inset-0">
            <Image
              src="/rapid-mobile-tyres-fleet-service-vans-bristol.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-zinc-950/60" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-500">
                24/7 coverage
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Bristol and Beyond — We Come to You
              </h2>
              <p className="mt-4 max-w-md text-zinc-400">
                Fully-equipped mobile units covering Bristol, Bath, Newport, Weston-Super-Mare,
                Chepstow, Gloucestershire, and the surrounding areas. Day or night, weekday or
                weekend. Not sure if we cover your street? Call 07494 247246 with your postcode.
              </p>
              <Link
                href="/areas-we-cover"
                className="mt-8 inline-flex h-12 items-center justify-center rounded-full border border-zinc-600 px-6 text-sm font-semibold text-zinc-200 transition-colors hover:border-zinc-400 hover:bg-zinc-900"
              >
                See all areas
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {["Bristol", "Bath", "Newport", "Weston-Super-Mare", "Chepstow", "Gloucestershire", "Bridgwater", "Magor"].map(
                (area) => (
                  <div
                    key={area}
                    className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-3 text-sm font-medium text-zinc-300"
                  >
                    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 shrink-0 text-orange-500" aria-hidden>
                      <path
                        d="M10 18s6-5.3 6-10a6 6 0 10-12 0c0 4.7 6 10 6 10z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                      <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.6" />
                    </svg>
                    {area}
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        <ServiceInfoSection title="Puncture Repair or a New Tyre?">
          <p>A flat tyre doesn&apos;t always mean a new one. A small nail or screw in the central part of the tread can sometimes be repaired, as long as the tyre hasn&apos;t been driven on while flat. Damage to the sidewall or shoulder, a cut or a bulge, or a tyre that has run flat needs replacing. Tell us where the damage is when you call and we&apos;ll say whether a <Link href="/flat-tyre-puncture-repair" className="text-orange-600 hover:underline">puncture repair</Link> or a replacement is the likely answer. Not sure what the sidewall numbers mean? Read our guide to <Link href="/how-to-read-your-tyre-sidewall-markings" className="text-orange-600 hover:underline">reading your tyre sidewall markings</Link>.</p>
        </ServiceInfoSection>

        <ServiceInfoSection title="When Should You Replace Your Tyres?">
          <p>For cars, the Highway Code says tyres must have at least 1.6 mm of tread across the central three-quarters of the tread and around the entire circumference (<a href="https://www.gov.uk/guidance/the-highway-code/annex-6-vehicle-maintenance-safety-and-security" target="_blank" rel="noopener" className="text-orange-600 hover:underline">Highway Code, Annex 6</a>). Replace a tyre sooner if you see cuts, bulges or cracking in the sidewall, or if it keeps losing pressure. We can fit new tyres on your driveway or at work before a worn tyre turns into a roadside problem.</p>
        </ServiceInfoSection>

        <TyreBrands />

        <div id="faq">
          <Faq items={faqs} renderAllAnswers />
        </div>

        {/* CTA */}
        <section className="bg-zinc-950 py-20 text-zinc-50 sm:py-28">
          <div className="mx-auto max-w-3xl px-6 text-center sm:px-10">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Need help on the road today?
            </h2>
            <p className="mt-4 text-zinc-400">
              One call covers tyres, jump starts, and fuel delivery — 24 hours a day, 7 days a week,
              anywhere in Bristol and the surrounding areas.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="tel:+447494247246"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-orange-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-orange-500 sm:w-auto"
              >
                Call 07494 247246
              </a>
              <Link
                href="/contact"
                className="flex h-12 w-full items-center justify-center rounded-full border border-zinc-700 px-6 text-sm font-semibold text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-900 sm:w-auto"
              >
                Request a Callback
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
