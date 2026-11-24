import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeatureGrid from "@/components/FeatureGrid";
import StepList from "@/components/StepList";
import TyreBrands from "@/components/TyreBrands";
import Faq from "@/components/Faq";
import { BUSINESS_ID } from "@/lib/businessSchema";
import { siteConfig, mobileTyreFittingPage } from "@/lib/data";

const SITE_URL = "https://rapid-tyres.com";
const PAGE_URL = SITE_URL + "/mobile-tyre-fitting";
const TITLE = "Mobile Tyre Fitting Service Bristol & South West | Rapid";
const DESCRIPTION =
  "Mobile tyre fitting at home, work or roadside across Bristol and the South West. Cars, vans and SUVs, 24/7. Usual arrival 45–60 min. Call 07494 247246.";
const SOCIAL_IMAGE = "/rapid-mobile-tyres-open-graph.webp";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    images: [{ url: SOCIAL_IMAGE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [SOCIAL_IMAGE],
  },
};

const faqs = [
  {
    question: "How can I schedule a mobile tyre fitting service?",
    answer:
      "Booking is simple — arrange a service online or by phone. Give us your location, tyre size, and preferred time, and we'll take care of the rest.",
  },
  {
    question: "What areas do you provide services in?",
    answer:
      "We cover Bristol and the surrounding South West, including Bath, Bradley Stoke, Avonmouth, Weston-super-Mare, Gloucestershire, Chepstow and Newport. If you're unsure whether you're within our service area, get in touch and we'll confirm whether we can reach you.",
  },
  {
    question: "How quickly do you respond to a call out?",
    answer:
      "Our usual arrival time is around 45-60 minutes, depending on your location, traffic, technician availability and tyre availability.",
  },
  {
    question: "What sorts of payments do you accept?",
    answer:
      "We accept major credit cards, debit cards, and cash, taken at the time of service completion.",
  },
  {
    question: "What should I do if I need a jump start or fuel delivery?",
    answer:
      "Simply call us with your location and a brief description of the problem — we're equipped to handle jump starts and fuel deliveries safely and efficiently.",
  },
  {
    question: "Can you repair a puncture instead of replacing the tyre?",
    answer:
      "Often, yes. If the damage is a small object in the central part of the tread and the tyre hasn't been driven on while flat, a repair to British Standard BS AU 159 may be possible. Damage to the sidewall or shoulder, or a tyre that has been run flat, means it needs replacing.",
  },
  {
    question: "Which vehicles do you fit tyres on?",
    answer:
      "We fit tyres on cars, vans and SUVs at your home, workplace or a suitable roadside spot. Tell us the make, model and tyre size when you call so we can check availability.",
  },
  {
    question: "What do I need to tell you when I call?",
    answer:
      "Your location, your vehicle registration or the tyre size printed on the sidewall (for example 205/55 R16), and whether you need a repair, a replacement or an emergency callout. If you can, tell us how many tyres are affected.",
  },
  {
    question: "How much does mobile tyre fitting cost?",
    answer:
      "The price depends on your tyre size, the brand you choose and how many tyres you need. Call 07494 247246 with the size from the sidewall or your registration and we'll confirm availability and the price for your vehicle before anyone sets off.",
  },
  {
    question: "Do you fit budget as well as premium tyres?",
    answer:
      "Yes. We carry premium brands such as Michelin, Continental, Pirelli, Bridgestone, Goodyear and Dunlop, and quality budget brands such as Nexen, Falken, Avon, Kumho and Nankang, subject to stock in your size.",
  },
  {
    question: "Can you come to my workplace or home address?",
    answer:
      "Yes. We fit tyres on home driveways, office car parks and suitable roadside locations across Bristol and the South West. Give us the address or share your location when you call.",
  },
];

const assistanceQuestion = "What should I do if I need a jump start or fuel delivery?";
const faqItems = faqs.map((item) => {
  if (item.question !== assistanceQuestion) return item;

  const [before, between, after] = item.answer.split(/jump starts|fuel deliveries/);
  return {
    ...item,
    answerContent: (
      <>
        {before}
        <Link href="/jumpstarts" className="text-orange-600 hover:underline">jump starts</Link>
        {between}
        <Link href="/fuel-delivery" className="text-orange-600 hover:underline">fuel deliveries</Link>
        {after}
      </>
    ),
  };
});

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": PAGE_URL + "#faq",
      mainEntity: faqs.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": PAGE_URL + "#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Services", item: SITE_URL + "/services" },
        { "@type": "ListItem", position: 3, name: "Mobile Tyre Fitting", item: PAGE_URL },
      ],
    },
    {
      "@type": "Service",
      "@id": PAGE_URL + "#service",
      name: "Mobile Tyre Fitting in Bristol and the South West",
      serviceType: "Mobile tyre fitting",
      url: PAGE_URL,
      areaServed: [
        { "@type": "City", name: "Bristol" },
        { "@type": "City", name: "Bath" },
        { "@type": "City", name: "Weston-super-Mare" },
        { "@type": "AdministrativeArea", name: "Gloucestershire" },
        { "@type": "City", name: "Newport" },
      ],
      provider: { "@id": BUSINESS_ID },
    },
  ],
};

const gallery = [
  {
    src: "/mobile-tyre-fitting-technician-bristol.webp",
    alt: "Rapid Mobile Tyres technician fitting a tyre at a Bristol location",
    large: true,
  },
  {
    src: "/mobile-car-tyre-fitting-bmw-i3-bristol.webp",
    alt: "Mobile tyre fitting on a BMW i3 in Bristol",
  },
  {
    src: "/suv-tyre-fitting-volkswagen-tiguan-bristol.webp",
    alt: "SUV tyre fitting on a Volkswagen Tiguan in Bristol",
  },
];

function ServiceInfoSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="max-w-2xl space-y-4 text-zinc-600">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">{title}</h2>
          {children}
        </div>
      </div>
    </section>
  );
}

const bodyLink = "text-orange-600 hover:underline";

export default function MobileTyreFittingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema).replace(/</g, "\\u003c") }}
      />
      <Header />
      <main className="flex-1">
        {/* Split hero */}
        <section className="relative overflow-hidden bg-zinc-950 text-zinc-50">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-orange-600/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-red-600/20 blur-3xl"
          />

          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:items-center lg:py-28">
            <div>
              <p className="mb-4 inline-flex items-center rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.15em] text-orange-500">
                24/7 Mobile Tyre Fitting
              </p>

              <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">Mobile Tyre Fitting</h1>

              <p className="mt-3 text-lg font-medium text-zinc-200">
                Flat or worn tyre? Our usual arrival time is around 45–60 minutes, depending on your location, traffic, technician availability and tyre availability.
              </p>

              <p className="mt-4 max-w-xl leading-7 text-zinc-400">{mobileTyreFittingPage.intro}</p>

              <p className="mt-4 max-w-xl text-sm text-zinc-500">
                Part of the{" "}
                <Link href="/" className="text-orange-400 hover:underline">
                  Rapid Mobile Tyres Bristol
                </Link>{" "}
                network of 24/7 roadside and home tyre services.
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {mobileTyreFittingPage.benefits.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-zinc-300">
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      className="mt-0.5 h-4 w-4 shrink-0 text-orange-500"
                      aria-hidden
                    >
                      <path
                        d="M4 10.5l3.5 3.5L16 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="tel:+447494247246"
                  className="flex h-12 items-center justify-center gap-2 rounded-full bg-orange-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
                >
                  Emergency Call: 07494 247246
                </a>
                <Link
                  href="/contact"
                  className="flex h-12 items-center justify-center rounded-full border border-zinc-700 px-6 text-sm font-semibold text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-900"
                >
                  Request a Callback
                </Link>
              </div>

              <p className="mt-6 inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-orange-400">
                {mobileTyreFittingPage.openingHours}
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-lg">
              <div className="relative overflow-hidden rounded-3xl border border-zinc-800 shadow-2xl">
                <Image
                  src="/mobile-tyre-fitting-bristol-hero.webp"
                  alt="Rapid Mobile Tyres technician fitting a tyre in Bristol"
                  width={1600}
                  height={900}
                  className="h-auto w-full"
                  preload
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-zinc-800 bg-zinc-900 px-6 py-4 shadow-xl sm:block">
                <p className="text-2xl font-bold text-orange-500">45-60 min</p>
                <p className="text-xs text-zinc-400">Average arrival time</p>
              </div>
            </div>
          </div>
        </section>

        <FeatureGrid
          eyebrow="What's included"
          title="Our Mobile Tyre Fitting Services"
          intro="Whether you need a quick puncture repair, a full tyre replacement, or a routine check, our expert technicians can handle it all at your preferred location."
          items={[
            ...mobileTyreFittingPage.subServices,
            {
              title: "Puncture Repair",
              description:
                "Small punctures in the central part of the tread can often be repaired on the spot. If the damage is too close to the sidewall, we'll tell you and fit a replacement instead.",
            },
          ]}
          tone="light"
        />

        {/* Photo showcase */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 sm:px-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-orange-600">Gallery</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                Fitted Wherever You Are
              </h2>
              <p className="mt-4 text-zinc-600">
                Home driveways, office car parks, or the roadside — our technicians bring the full workshop
                to you.
              </p>
            </div>

            <div className="mt-14 flex flex-col gap-4 lg:grid lg:h-[560px] lg:grid-cols-2">
              {gallery.map((photo) =>
                photo.large ? (
                  <div
                    key={photo.src}
                    className="relative aspect-video overflow-hidden rounded-2xl border border-zinc-200 lg:aspect-auto lg:h-full"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ) : null,
              )}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:grid-rows-2">
                {gallery
                  .filter((photo) => !photo.large)
                  .map((photo) => (
                    <div
                      key={photo.src}
                      className="relative aspect-video overflow-hidden rounded-2xl border border-zinc-200 lg:aspect-auto lg:h-full"
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>

        <StepList steps={mobileTyreFittingPage.steps} />

        <FeatureGrid
          eyebrow="Why choose us"
          title="Why Choose Our Mobile Tyre Fitting Service?"
          items={mobileTyreFittingPage.whyChoose}
          tone="light"
        />

        <ServiceInfoSection title="Puncture Repair or a New Tyre?">
          <p>
            Not every flat tyre needs replacing. A puncture can often be repaired if the damage is a
            small object in the central part of the tread and the tyre hasn&apos;t been driven on
            while flat. In the UK, tyre repairs follow British Standard BS AU 159, which limits
            repairs to the central area of the tread. Damage to the sidewall or the shoulder of the
            tyre, large cuts, bulges, or a tyre that has been run flat for any distance means it
            needs replacing.
          </p>
          <p>
            Car and light van tyres must also have at least 1.6 mm of tread across the central
            three-quarters of the tread and around the whole circumference (
            <a href="https://www.gov.uk/check-vehicle-safe" className={bodyLink}>
              GOV.UK: check your vehicle is safe to drive
            </a>
            ). If your tyres are close to that limit, replacing them is safer than repairing them.
            Not sure what you&apos;re looking at? Read our guide to{" "}
            <Link href="/what-to-do-when-you-get-a-flat-tyre-in-bristol-step-by-step-guide" className={bodyLink}>
              what to do when you get a flat tyre in Bristol
            </Link>{" "}
            or call us and describe the damage.
          </p>
        </ServiceInfoSection>

        <ServiceInfoSection title="Mobile Tyre Fitting for Cars, Vans and SUVs">
          <p>We fit tyres at your home, workplace or a suitable roadside spot, whichever vehicle you drive:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong>Cars:</strong>{" "}<Link href="/mobile-car-tyre-fitting-bristol" className={bodyLink}>mobile car tyre fitting in Bristol</Link></li>
            <li><strong>Vans:</strong>{" "}<Link href="/mobile-van-tyre-fitting-bristol" className={bodyLink}>mobile van tyre fitting in Bristol</Link></li>
            <li><strong>SUVs:</strong>{" "}<Link href="/suv-tyre-fitting-bristol" className={bodyLink}>SUV tyre fitting in Bristol</Link></li>
            <li><strong>At home:</strong>{" "}<Link href="/tyre-replacement-at-home-bristol" className={bodyLink}>tyre replacement at home in Bristol</Link></li>
            <li><strong>Stranded or in a hurry:</strong>{" "}<Link href="/emergency-mobile-tyre-fitting-bristol" className={bodyLink}>emergency mobile tyre fitting in Bristol</Link></li>
          </ul>
          <p>Tell us the make, model and tyre size when you call, and we&apos;ll check availability for your vehicle.</p>
        </ServiceInfoSection>

        <ServiceInfoSection title="What to Have Ready When You Call">
          <p>A few details help us get the right tyre to you the first time:</p>
          <ol className="list-decimal space-y-2 pl-5">
            <li><strong>Your location:</strong> the address, postcode or a nearby landmark or junction.</li>
            <li>
              <strong>Your tyre size or registration:</strong> the size is printed on the tyre sidewall
              (for example 205/55 R16). Our guide to{" "}
              <Link href="/how-to-read-your-tyre-sidewall-markings" className={bodyLink}>reading your tyre sidewall markings</Link>{" "}
              explains the numbers.
            </li>
            <li><strong>What&apos;s wrong:</strong> a puncture, a worn tyre, or a blowout, and how many tyres are affected.</li>
            <li><strong>Your preferred time</strong>, if it isn&apos;t an emergency.</li>
          </ol>
          <p>
            Then call <strong><a href="tel:+447494247246" className={bodyLink}>07494 247246</a></strong>{" "}
            and we&apos;ll confirm availability and arrival time. Want to know how pricing works
            first? Read our{" "}
            <Link href="/how-much-does-mobile-tyre-fitting-cost-in-bristol-2026-honest-price-guide" className={bodyLink}>
              mobile tyre fitting price guide
            </Link>.
          </p>
        </ServiceInfoSection>

        <ServiceInfoSection title="Where We Fit Tyres">
          <p>
            We cover Bristol and the surrounding South West, with dedicated pages for{" "}
            <Link href="/mobile-tyre-fitting-bath" className={bodyLink}>Bath</Link>,{" "}
            <Link href="/mobile-tyre-fitting-bradley-stoke" className={bodyLink}>Bradley Stoke</Link>,{" "}
            <Link href="/mobile-tyre-fitting-avonmouth" className={bodyLink}>Avonmouth</Link>,{" "}
            <Link href="/mobile-tyre-fitting-brislington" className={bodyLink}>Brislington</Link>,{" "}
            <Link href="/mobile-tyre-fitting-weston-super-mare" className={bodyLink}>Weston-super-Mare</Link>,{" "}
            <Link href="/mobile-tyre-fitting-gloucestershire" className={bodyLink}>Gloucestershire</Link>,{" "}
            <Link href="/mobile-tyre-fitting-chepstow" className={bodyLink}>Chepstow</Link> and{" "}
            <Link href="/mobile-tyre-fitting-newport" className={bodyLink}>Newport</Link>. See the full list on our{" "}
            <Link href="/areas-we-cover" className={bodyLink}>areas we cover</Link>{" "}
            page. If you&apos;re not sure whether we reach you, call and we&apos;ll confirm.
          </p>
        </ServiceInfoSection>

        <TyreBrands />

        <Faq items={faqItems} renderAllAnswers />

        {/* Split CTA */}
        <section className="bg-zinc-950 py-20 text-zinc-50 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready for fast, professional tyre fitting?
              </h2>
              <p className="mt-4 max-w-md text-zinc-400">
                Call now to book a callout. Our usual arrival time is around 45-60 minutes, depending
                on your location, traffic, technician availability and tyre availability, anywhere in
                the South West and surrounding areas.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="tel:+447494247246"
                  className="flex h-12 items-center justify-center gap-2 rounded-full bg-orange-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
                >
                  Call 07494 247246
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex h-12 items-center justify-center rounded-full border border-zinc-700 px-6 text-sm font-semibold text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-900"
                >
                  Email Us
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg overflow-hidden rounded-3xl border border-zinc-800 shadow-2xl">
              <Image
                src="/rapid-mobile-tyres-service-van-bristol.webp"
                alt="Rapid Mobile Tyres 24/7 mobile service van in Bristol"
                width={672}
                height={307}
                className="h-auto w-full"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
