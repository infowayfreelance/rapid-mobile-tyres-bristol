import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/data";

const highlights = [
  "24/7 Emergency Tyre Assistance",
  "On-the-Spot Tyre Fitting and Repairs",
  "Fast Response, Minimal Downtime",
  "Affordable Mobile Tyre Solutions",
  "Expert Technicians at Your Service",
];

const googleReviewsUrl =
  "https://www.google.com/search?q=rapid+mobile+tyre+bristol&rlz=1C1AJCO_enPK1193PK1193&oq=rapid+mobile+tyre+bristol&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgWGB4yCAgCEAAYFhgeMgYIAxBFGDsyBggEEEUYPDIGCAUQRRg8MgYIBhBFGDzSAQg5NTY1ajBqN6gCALACAA&sourceid=chrome&source=chrome.ob&ie=UTF-8#";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white text-zinc-950"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-orange-600/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-red-600/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl gap-3 px-4 pt-3 pb-4 sm:gap-6 sm:px-10 sm:pt-6 sm:pb-20 lg:grid-cols-2 lg:grid-rows-[1fr_auto_auto_1fr] lg:gap-x-12 lg:gap-y-0 lg:py-28">
        <a
          href={googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Read 324 Google reviews for Rapid Mobile Tyres Bristol"
          className="group inline-flex flex-col gap-0.5 justify-self-start rounded-xl border border-zinc-200 bg-white px-2.5 py-1.5 shadow-sm transition hover:border-orange-300 hover:shadow-md sm:gap-2 sm:px-4 sm:py-3 lg:col-start-1 lg:row-start-2 lg:mb-5"
        >
          <span className="text-[11px]/4 font-extrabold uppercase tracking-[0.12em] text-zinc-900 sm:text-sm">
            {siteConfig.name}
          </span>
          <span className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs/4 sm:text-sm">
            <span className="font-bold" aria-label="Google">
              <span className="text-blue-500">G</span>
              <span className="text-red-500">o</span>
              <span className="text-yellow-500">o</span>
              <span className="text-blue-500">g</span>
              <span className="text-green-500">l</span>
              <span className="text-red-500">e</span>
            </span>
            <span className="font-extrabold text-zinc-900">5.0</span>
            <span
              aria-hidden="true"
              className="tracking-tight text-yellow-400"
            >
              ★★★★★
            </span>
            <span className="font-semibold text-zinc-600 underline decoration-zinc-300 underline-offset-2 transition group-hover:text-orange-600">
              324 Google reviews
            </span>
          </span>
        </a>

        <div className="relative mx-auto w-full max-w-lg lg:col-start-2 lg:row-span-4 lg:row-start-1 lg:self-center">
          <div className="relative overflow-hidden rounded-3xl border border-zinc-200 shadow-2xl">
            <Image
              src="/rapid-mobile-tyres-bristol-range-rover-hero.webp"
              alt="Grey Range Rover beside the Rapid Mobile Tyres Bristol van during a tyre change"
              title="Rapid Mobile Tyres Bristol fitting a Range Rover tyre"
              aria-describedby="home-hero-image-description"
              width={1206}
              height={899}
              sizes="(max-width: 543px) calc(100vw - 32px), 512px"
              className="h-[clamp(8.25rem,22svh,11rem)] w-full object-cover object-[center_42%] sm:h-auto"
              preload
            />
            <p id="home-hero-image-description" className="sr-only">
              The Range Rover is raised on a jack, with a replacement tyre ready beside the front wheel.
            </p>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-zinc-200 bg-white px-6 py-4 shadow-xl sm:block">
            <p className="text-2xl font-bold text-orange-500">45-60 min</p>
            <p className="text-xs text-zinc-500">Average arrival time</p>
          </div>
        </div>

        <div className="lg:col-start-1 lg:row-start-3">
          <h1 className="text-2xl/7 font-bold tracking-tight text-balance min-[400px]:text-[1.75rem]/8 sm:text-5xl">
            24/7 Mobile Tyre Fitting &amp; Replacement In Bristol
          </h1>

          <p className="mt-2 max-w-xl text-sm/5 text-zinc-600 sm:mt-6 sm:text-lg/8">
            <strong>Mobile tyre fitting and replacement in Bristol</strong> with
            45–60 minute arrival for roadside tyre changes. Fast, reliable
            mobile tyre fitting that comes straight to you, anywhere in Bristol
            and the surrounding areas.
          </p>

          <div id="home-contact-actions" className="mt-4 grid grid-cols-1 gap-3 sm:hidden">
            <a
              href="tel:+447494247246"
              className="flex min-h-14 items-center justify-center rounded-xl bg-orange-700 px-3 py-2 text-center text-base font-bold text-white transition-colors hover:bg-orange-800"
            >
              Call now
            </a>
            <a
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-14 items-center justify-center rounded-xl bg-[#137142] px-3 py-2 text-center text-base font-bold text-white transition-colors hover:bg-[#0d5832]"
            >
              WhatsApp
            </a>
          </div>

          <div className="mt-8 hidden gap-4 sm:flex">
            <a
              href="tel:+447494247246"
              className="flex h-12 items-center justify-center gap-2 rounded-full bg-orange-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-orange-500"
            >
              Emergency Call: 07494 247246
            </a>
            <Link
              href="/services"
              className="flex h-12 items-center justify-center rounded-full border border-zinc-300 px-6 text-sm font-semibold text-zinc-700 transition-colors hover:border-zinc-400 hover:bg-zinc-50"
            >
              Our Services
            </Link>
          </div>

          <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1.5 sm:mt-10 sm:gap-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-1 text-[13px]/4 text-zinc-700 sm:gap-2 sm:text-sm">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  className="mt-0.5 size-3 shrink-0 text-orange-500 sm:size-4"
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

          <Link href="/services" className="mt-2 inline-flex min-h-11 items-center text-sm font-semibold text-orange-800 underline underline-offset-4 sm:hidden">
            Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
