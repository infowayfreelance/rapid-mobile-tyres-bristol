import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/data";

const PAGE_URL = "https://rapid-tyres.com/how-to-read-your-tyre-sidewall-markings";
const OG_IMAGE = "https://rapid-tyres.com/tyre-sidewall-markings-numbered-diagram.webp";
const TITLE = "How to Read Tyre Sidewall Markings | Rapid Mobile Tyres";
const DESCRIPTION =
  "Decode every tyre sidewall marking — size, load index, speed rating, XL, run-flat, DOT date code and more — with this clear, numbered UK guide.";

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
        width: 1262,
        height: 1246,
        alt: "Numbered diagram of a tyre sidewall showing 22 common markings",
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

const quickGuide = [
  { n: 1, label: "Tyre brand", meaning: "Who made the tyre" },
  { n: 2, label: "Tyre model", meaning: "The tyre range or pattern" },
  { n: 3, label: "Tyre width", meaning: "For example, 205 mm" },
  { n: 4, label: "Aspect ratio", meaning: "Sidewall height vs. width" },
  { n: 5, label: "R", meaning: "Radial construction" },
  { n: 6, label: "Wheel size", meaning: "For example, 16 inches" },
  { n: 7, label: "Load index", meaning: "Load the tyre can carry" },
  { n: 8, label: "Speed rating", meaning: "The tyre's speed capability" },
  { n: 9, label: "XL", meaning: "Extra Load tyre" },
  { n: 10, label: "Tubeless", meaning: "No separate inner tube" },
  { n: 11, label: "Maximum load", meaning: "Maximum tyre load allowed" },
  { n: 12, label: "Maximum pressure", meaning: "Tyre limit, not daily pressure" },
  { n: 13, label: "E-mark", meaning: "An approval marking" },
  { n: 14, label: "Run-flat marking", meaning: "Tyre with run-flat construction" },
  { n: 15, label: "OE marking", meaning: "Approved for a vehicle manufacturer" },
  { n: 16, label: "3PMSF", meaning: "Tested snow-performance symbol" },
  { n: 17, label: "M+S", meaning: "Mud and Snow marking" },
  { n: 18, label: "Inside", meaning: "Side that faces the car" },
  { n: 19, label: "Outside", meaning: "Side that faces away from the car" },
  { n: 20, label: "Rotation arrow", meaning: "Correct direction to fit" },
  { n: 21, label: "TWI", meaning: "Tread wear indicator location" },
  { n: 22, label: "DOT / date code", meaning: "Manufacturing date and age" },
];

const sizeCodeParts = [
  { code: "205", meaning: "Tyre width in mm" },
  { code: "55", meaning: "Sidewall height as a percentage of width" },
  { code: "R", meaning: "Radial construction" },
  { code: "16", meaning: "Wheel diameter in inches" },
  { code: "91", meaning: "Load index" },
  { code: "V", meaning: "Speed rating" },
];

const sameSizeDifferences = [
  "Load indexes",
  "Speed ratings",
  "XL ratings",
  "Run-flat construction",
  "OE approvals",
  "Seasonal ratings (M+S / 3PMSF)",
];

const readingOrder = [
  { step: "Find the tyre size", example: "205/55 R16" },
  { step: "Find load and speed rating", example: "91V" },
  { step: "Look for special construction", example: "XL, run-flat, OE markings" },
  { step: "Check fitting instructions", example: "Rotation, Inside, Outside" },
  { step: "Check tyre age", example: "Four-digit date code" },
  { step: "Check the physical tyre", example: "Cracks, bulges, cuts, uneven wear" },
];

const commonMistakes = [
  "Reading only the wheel size",
  "Thinking 55 means 55 mm",
  "Thinking 91 means 91 kg",
  "Treating the speed rating as a recommended driving speed",
  "Thinking XL means extra large",
  "Using the maximum pressure as everyday pressure",
  "Ignoring Inside and Outside markings",
  "Ignoring the rotation arrow",
  "Assuming M+S and 3PMSF mean the same thing",
  "Forgetting to check run-flat or OE markings",
];

const checklistItems = [
  "Full size — e.g. 205/55 R16",
  "Load index — e.g. 91",
  "Speed rating — e.g. V",
  "XL, if required",
  "Run-flat marking, if fitted",
  "OE code, if relevant",
  "Inside / Outside, if asymmetric",
  "Rotation arrow, if directional",
  "Manufacturing date, for age",
];

const faqs = [
  {
    question: "What is the most important information on a tyre sidewall?",
    answer:
      "For buying a replacement, start with the full tyre size, load index, and speed rating. Then check for XL, run-flat, or OE markings if they apply.",
  },
  {
    question: "What does 205/55 R16 91V mean?",
    answer:
      "205 is the tyre width in mm, 55 is the aspect ratio, R means radial construction, 16 is the wheel diameter in inches, 91 is the load index, and V is the speed rating.",
  },
  {
    question: "Can two tyres with the same size still be different?",
    answer:
      "Yes. They can have different load indexes, speed ratings, construction, seasonal ratings, and special features such as XL or run-flat.",
  },
  {
    question: "Is the maximum pressure printed on the tyre my correct everyday pressure?",
    answer:
      "Usually not. Use the pressure recommended by your vehicle manufacturer, found on the door pillar, fuel flap, or in the handbook.",
  },
  {
    question: "How do I check when my tyre was made?",
    answer:
      "Look for the four-digit DOT date code. For example, 3625 means week 36 of 2025.",
  },
  {
    question: "What does XL mean on a tyre?",
    answer: "XL means Extra Load. It does not mean the tyre is physically bigger.",
  },
  {
    question: "What is the difference between M+S and 3PMSF?",
    answer:
      "M+S means Mud and Snow and is a general marking. 3PMSF (the mountain and snowflake symbol) shows the tyre has passed a standardised snow-performance test.",
  },
  {
    question: "What if I cannot understand one of the markings?",
    answer:
      "Take a clear photo of the sidewall and ask a tyre professional. It is always better to check than to guess.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "How to Read Your Tyre Sidewall Markings",
  description: DESCRIPTION,
  image: OG_IMAGE,
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

export default function TyreSidewallMarkingsPage() {
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
          title="How to Read Your Tyre Sidewall Markings"
          breadcrumb="Home / Blog / How to Read Your Tyre Sidewall Markings"
          subtitle="A clear, numbered guide to every marking on your tyre — size, load index, speed rating, age code and more."
        />

        <section className="bg-zinc-50 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 sm:px-10">
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
              <p className="leading-7 text-zinc-600">
                Look at the side of your tyre and you will see numbers, letters, arrows, and small
                symbols going all the way around it. At first, tyre sidewall markings can look
                confusing. But you do not need to understand every tiny code to use them properly.
              </p>
              <p className="mt-4 leading-7 text-zinc-600">
                The diagram below gives you a numbered map of the common markings — use it as a
                quick reference. This guide goes one step further, explaining what those markings
                actually help you do: from choosing the correct replacement tyre to checking tyre
                age, pressure, fitting direction, and special features.
              </p>
            </div>

            <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-100 sm:p-8">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                  <path
                    fillRule="evenodd"
                    d="M2 4.25A2.25 2.25 0 014.25 2h11.5A2.25 2.25 0 0118 4.25v11.5A2.25 2.25 0 0115.75 18H4.25A2.25 2.25 0 012 15.75V4.25zM5 6a1 1 0 000 2h10a1 1 0 100-2H5zm0 4a1 1 0 100 2h10a1 1 0 100-2H5zm0 4a1 1 0 100 2h5a1 1 0 100-2H5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h2 className="mb-3 text-xl font-bold text-zinc-900">
                Quick Guide to the Numbered Markings
              </h2>
              <p className="leading-7 text-zinc-600">
                Use the numbered picture alongside the list to find each marking. You do not need
                to memorise all 22 — the important part is knowing which ones matter for the job
                you are trying to do.
              </p>

              <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:items-start">
                <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-xl ring-1 ring-zinc-100 lg:sticky lg:top-24">
                  <Image
                    src="/tyre-sidewall-markings-numbered-diagram.webp"
                    alt="Numbered diagram of a Michelin tyre sidewall showing 22 common markings"
                    fill
                    sizes="(min-width: 1024px) 480px, (min-width: 768px) 672px, 100vw"
                    className="object-contain"
                    preload
                  />
                </div>

                <div className="space-y-3">
                  {quickGuide.map((item) => (
                    <div key={item.n} className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
                        {item.n}
                      </span>
                      <p className="text-sm leading-6 text-zinc-600">
                        <span className="font-semibold text-zinc-900">{item.label}</span> —{" "}
                        {item.meaning}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-6">
              {/* most important code */}
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
                  Start With the Most Important Code: 205/55 R16 91V
                </h2>
                <p className="leading-7 text-zinc-600">
                  If you are buying a replacement tyre, start here. This full code is much more
                  useful than simply saying &quot;I need a 16-inch tyre&quot; — many different
                  tyres can fit 16-inch wheels.
                </p>
                <div className="mt-5 overflow-hidden rounded-xl ring-1 ring-zinc-100">
                  <table className="w-full text-left text-sm">
                    <tbody className="divide-y divide-zinc-100">
                      {sizeCodeParts.map((part) => (
                        <tr key={part.code} className="odd:bg-zinc-50">
                          <td className="px-4 py-2 font-semibold text-zinc-900">{part.code}</td>
                          <td className="px-4 py-2 text-zinc-600">{part.meaning}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* what to tell a fitter */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path d="M2 3.5A1.5 1.5 0 013.5 2h13A1.5 1.5 0 0118 3.5v10a1.5 1.5 0 01-1.5 1.5H9.621a1.5 1.5 0 00-1.06.44l-2.122 2.12a.5.5 0 01-.854-.353V15.5a.5.5 0 00-.5-.5h-2A1.5 1.5 0 011 13.5v-10z" />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  What Information Should You Give a Tyre Fitter?
                </h2>
                <p className="leading-7 text-zinc-600">
                  If you need a replacement tyre, take a clear photo of the sidewall or write down
                  the full code — for example, <strong>205/55 R16 91V XL</strong>. Also tell the
                  fitter if you can see XL, run-flat markings, an OE marking, Inside / Outside, or
                  a rotation arrow. This gives much more useful information than the wheel size
                  alone.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  For mobile replacement, Rapid Mobile Tyres offers{" "}
                  <Link href="/mobile-tyre-fitting" className="text-orange-500 hover:underline">
                    mobile tyre fitting
                  </Link>{" "}
                  across Bristol and the South West.
                </p>
              </div>

              {/* same size different tyre, with sports car wheel image */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.94 6.94a.75.75 0 11-1.06-1.06 3.5 3.5 0 114.95 4.95.75.75 0 01-1.06-1.06 2 2 0 10-2.83-2.83zM10 15a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  Can Two Tyres Have the Same Size but Still Be Different?
                </h2>
                <p className="leading-7 text-zinc-600">
                  Yes — and this is one of the most important things many basic tyre guides do not
                  explain clearly. Two tyres can both say <strong>205/55 R16</strong> but still
                  have different:
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  {sameSizeDifferences.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="mt-4 leading-7 text-zinc-600">
                  For example, <strong>205/55 R16 91V</strong> and{" "}
                  <strong>205/55 R16 94W XL</strong> are not exactly the same specification. That
                  is why you should read the whole tyre code, not only the first three numbers —
                  especially on higher-performance cars, which are often more sensitive to the
                  correct load and speed rating.
                </p>
                <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-zinc-100">
                  <Image
                    src="/sports-car-alloy-wheel-tyre-sidewall-closeup.webp"
                    alt="Close-up of a performance car's alloy wheel and tyre sidewall"
                    fill
                    sizes="(min-width: 768px) 672px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* load index / speed rating / XL */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path d="M3 3.5A1.5 1.5 0 014.5 2h11A1.5 1.5 0 0117 3.5v13a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 013 16.5v-13zM6 6a1 1 0 000 2h8a1 1 0 100-2H6zm0 4a1 1 0 100 2h4a1 1 0 100-2H6z" />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  Load Index, Speed Rating, and Why XL Doesn&apos;t Mean Extra Large
                </h2>
                <h3 className="font-semibold text-zinc-900">Load Index</h3>
                <p className="mt-1 leading-7 text-zinc-600">
                  In <strong>205/55 R16 91V</strong>, the number <strong>91</strong> is the load
                  index. It does not mean 91 kg — it matches a value in a standard load table. For
                  example, load index 91 corresponds to 615 kg per tyre under the relevant
                  conditions. Do not fit a tyre with a load capacity below what your vehicle
                  requires, and do not automatically change specification without checking.
                </p>
                <h3 className="mt-4 font-semibold text-zinc-900">Speed Rating</h3>
                <p className="mt-1 leading-7 text-zinc-600">
                  The letter after the load index — <strong>V</strong> in this example — is the
                  speed rating. It does not mean you should drive at the maximum speed connected
                  with that rating. It tells you the tyre&apos;s tested speed capability, and your
                  replacement tyre should meet the requirements for your vehicle.
                </p>
                <h3 className="mt-4 font-semibold text-zinc-900">XL — Extra Load, Not Extra Large</h3>
                <p className="mt-1 leading-7 text-zinc-600">
                  XL means <strong>Extra Load</strong>. It does not mean the tyre is physically
                  bigger — an XL tyre is designed to carry a higher load than a standard version of
                  the same size. So <strong>205/55 R16 91V</strong> and{" "}
                  <strong>205/55 R16 94V XL</strong> may look very similar but have different load
                  capabilities.
                </p>
              </div>

              {/* age, DOT, E-mark */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  Checking Tyre Age: DOT Codes and E-Marks
                </h2>
                <p className="leading-7 text-zinc-600">
                  Look for a four-digit date code, often after the letters DOT. For example,{" "}
                  <strong>3625</strong> means the 36th week of 2025. Tyre age matters because a
                  tyre can still have tread but show signs of ageing — cracking, hard rubber,
                  splits, or unusual surface changes. Do not judge a tyre only by tread depth; its
                  age and physical condition matter too.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  You may also see an <strong>E</strong> inside a circle followed by numbers — an
                  approval marking, with the number identifying the country that granted it. For
                  most drivers, there is no need to decode the full approval number; the main point
                  is that it is an approval marking rather than part of the tyre size.
                </p>
              </div>

              {/* max pressure warning */}
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
                  Maximum Pressure Is Not Your Normal Tyre Pressure
                </h2>
                <p className="leading-7 text-zinc-600">
                  This is one of the most important safety points on the whole sidewall. A tyre may
                  show <strong>MAX PRESS</strong> followed by a value — that is a tyre limit, not
                  normally the pressure you should use every day.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Look for the vehicle manufacturer&apos;s recommended pressure instead — usually
                  found inside the driver&apos;s door, on the door pillar, inside the fuel flap, or
                  in the owner&apos;s handbook. The correct pressure may also change depending on
                  vehicle load, so do not simply inflate to the maximum number printed on the
                  sidewall.
                </p>
              </div>

              {/* TWI, inside/outside, rotation */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path d="M10.75 2.75a.75.75 0 00-1.5 0V4.5h-1a.75.75 0 000 1.5h1v1.75a.75.75 0 001.5 0V6h1a.75.75 0 000-1.5h-1V2.75zM4.75 10a.75.75 0 01.75.75v5.5a.75.75 0 01-1.5 0v-5.5a.75.75 0 01.75-.75zm10.5 0a.75.75 0 01.75.75v5.5a.75.75 0 01-1.5 0v-5.5a.75.75 0 01.75-.75zm-5.25 2a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5a.75.75 0 01.75-.75z" />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  Tread Wear, Fitting Direction, and Inside / Outside
                </h2>
                <h3 className="font-semibold text-zinc-900">TWI — Tread Wear Indicator</h3>
                <p className="mt-1 leading-7 text-zinc-600">
                  Find the TWI mark on the sidewall, then look across the tread at the same
                  position — you should see a raised wear bar inside the main groove, which helps
                  you see how far the tyre has worn. For cars and light vans in the UK, the legal
                  minimum tread depth is generally 1.6 mm across the central three-quarters of the
                  tyre and around its full circumference.
                </p>
                <h3 className="mt-4 font-semibold text-zinc-900">Inside and Outside</h3>
                <p className="mt-1 leading-7 text-zinc-600">
                  Some tyres are asymmetric and marked INSIDE and OUTSIDE, meaning the two sides of
                  the tread do different jobs. OUTSIDE should face away from the vehicle; INSIDE
                  should face toward it. A tyre can be the correct size and still be fitted
                  incorrectly if these markings are ignored.
                </p>
                <h3 className="mt-4 font-semibold text-zinc-900">Rotation Arrow</h3>
                <p className="mt-1 leading-7 text-zinc-600">
                  Directional tyres have an arrow showing the correct rotation direction — the
                  tread pattern is designed to move that way, especially for moving water through
                  the tread. If you see a rotation arrow, check it after any tyre fitting.
                </p>
              </div>

              {/* M+S vs 3PMSF, run-flat, OE */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path
                      fillRule="evenodd"
                      d="M10 2a6 6 0 00-6 6c0 4.5 6 10 6 10s6-5.5 6-10a6 6 0 00-6-6zm0 8a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  M+S, 3PMSF, Run-Flat, and OE Markings
                </h2>
                <p className="leading-7 text-zinc-600">
                  <strong>M+S</strong> means Mud and Snow and is commonly seen on all-season and
                  winter-type tyres. The <strong>3PMSF</strong> mountain-and-snowflake symbol shows
                  the tyre has passed a standardised snow-performance test, so it gives stronger
                  evidence of tested snow performance than M+S alone.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Run-flat tyres may be marked RFT, ROF, SSR, or ZP depending on the manufacturer.
                  A run-flat tyre and a standard tyre can share the same basic size but are not
                  identical — if your car is set up for run-flat tyres, check the manufacturer&apos;s
                  recommendations before changing tyre type.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Some tyres also carry an OE (Original Equipment) code developed or approved for a
                  particular vehicle manufacturer — for example AO (Audi), MO (Mercedes-Benz), a
                  star (BMW), or N0/N1/N2 (Porsche). Not every car needs an OE-marked tyre, but the
                  marking can matter on certain vehicles, so check its meaning before replacing a
                  tyre that carries one.
                </p>
              </div>

              {/* reading order */}
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
                  A Better Way to Read a Tyre: Follow This Order
                </h2>
                <p className="leading-7 text-zinc-600">
                  Instead of trying to read every small symbol at once, work through the sidewall
                  in this order:
                </p>
                <ol className="mt-5 space-y-3">
                  {readingOrder.map((item, i) => (
                    <li key={item.step} className="flex items-start gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-extrabold text-white">
                        {i + 1}
                      </span>
                      <p className="text-sm leading-6 text-zinc-600">
                        <span className="font-semibold text-zinc-900">{item.step}</span> —{" "}
                        {item.example}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* common mistakes, with flat tyre image */}
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
                  The Most Common Sidewall Reading Mistakes
                </h2>
                <p className="leading-7 text-zinc-600">
                  Understanding these mistakes is often more useful than memorising every code:
                </p>
                <ul className="mt-3 grid gap-x-8 gap-y-1 pl-5 leading-7 text-zinc-600 sm:grid-cols-2">
                  {commonMistakes.map((item) => (
                    <li key={item} className="list-disc">
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 leading-7 text-zinc-600">
                  A tyre that has gone flat or suffered sudden damage often shows exactly why these
                  checks matter — a correct replacement needs the full code, not just a rough size.
                  If you are stuck on the road with a tyre like this,{" "}
                  <Link
                    href="/emergency-mobile-tyre-fitting-bristol"
                    className="text-orange-500 hover:underline"
                  >
                    emergency mobile tyre fitting
                  </Link>{" "}
                  can come to you.
                </p>
                <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-zinc-100">
                  <Image
                    src="/flat-deflated-car-tyre-driveway.webp"
                    alt="Flat, deflated car tyre on a driveway"
                    fill
                    sizes="(min-width: 768px) 672px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* checklist */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5" aria-hidden>
                    <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                  </svg>
                </div>
                <h2 className="mb-3 text-xl font-bold text-zinc-900">
                  Quick Replacement Tyre Checklist
                </h2>
                <p className="leading-7 text-zinc-600">
                  Before ordering a new tyre, check and note down:
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-5 leading-7 text-zinc-600">
                  {checklistItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="mt-4 leading-7 text-zinc-600">
                  Then check the actual tyre condition for low tread, cracks, cuts, bulges, uneven
                  wear, or pressure loss. If anything looks wrong, have it checked — do not assume
                  a tyre is safe just because it fits the wheel. Rapid Mobile Tyres can also carry
                  out a{" "}
                  <Link href="/tyre-replacement-at-home-bristol" className="text-orange-500 hover:underline">
                    tyre replacement at home
                  </Link>{" "}
                  once you know the correct specification.
                </p>
              </div>

              {/* FAQ */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <h2 className="mb-5 text-xl font-bold text-zinc-900">Frequently Asked Questions</h2>
                <div className="divide-y divide-zinc-200">
                  {faqs.map((faq) => (
                    <div key={faq.question} className="py-4 first:pt-0 last:pb-0">
                      <p className="font-semibold text-zinc-900">{faq.question}</p>
                      <p className="mt-2 leading-7 text-zinc-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* conclusion */}
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-100">
                <h2 className="mb-3 text-xl font-bold text-zinc-900">Final Takeaway</h2>
                <p className="leading-7 text-zinc-600">
                  You do not need to memorise every tyre sidewall marking. Start with the ones that
                  help you make a real decision: what size is the tyre, what load and speed rating
                  does it need, is it XL, run-flat, directional, asymmetric or OE-specific, how old
                  is it, and is it still in safe physical condition?
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Once you can answer those questions, the sidewall becomes genuinely useful
                  instead of just looking like a ring of random numbers — and the numbered diagram
                  above can work as your quick reference whenever you need to identify a less
                  common marking.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-zinc-900 p-8 text-center text-zinc-50 ring-1 ring-zinc-800 sm:p-10">
              <h2 className="text-2xl font-bold tracking-tight">Not Sure Which Tyre You Need?</h2>
              <p className="mx-auto mt-3 max-w-xl text-zinc-300">
                Send us a photo of your sidewall and we&apos;ll confirm the correct replacement,
                then fit it at your home, workplace or the roadside — 24/7 across Bristol and the
                surrounding areas.
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
