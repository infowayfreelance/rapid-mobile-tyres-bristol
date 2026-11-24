import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";

const SITE_URL = "https://rapid-tyres.com";
const PAGE_URL = SITE_URL + "/tyre-checks-before-a-long-journey-bristol";
const TITLE = "Tyre Checks Before a Long Journey | Bristol Winter Checklist";
const HEADLINE = "Tyre Checks Before a Long Winter Journey: A Bristol Driver's Checklist";
const DESCRIPTION = "Driving home for Christmas or heading up the M5? Check pressures, tread, damage and your spare before you go, and know what to do if a tyre fails.";
const FEATURED_IMAGE_PATH = "/tyre-checks-before-long-journey-bristol-featured.webp";
const FEATURED_IMAGE = SITE_URL + FEATURED_IMAGE_PATH;
const FEATURED_ALT = "Driver checking tyre pressure on a loaded car before a winter journey";
const PUBLICATION_DATE = "2026-11-24";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "article",
    publishedTime: PUBLICATION_DATE,
    modifiedTime: PUBLICATION_DATE,
    images: [{ url: FEATURED_IMAGE, width: 1200, height: 630, alt: FEATURED_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: FEATURED_IMAGE, alt: FEATURED_ALT }],
  },
};

const faqs = [
  {
    question: "What tyre checks should I do before a long journey?",
    answer:
      "Check pressure, tread and damage on all four tyres, and check the spare or sealant kit as well. Confirm you have the jack, wheel brace and locking wheel nut key. Do it cold, in daylight if possible.",
  },
  {
    question: "Should I use the full-load tyre pressure for a long trip?",
    answer:
      "Yes, if the car is heavily loaded. Use the loaded figures in your handbook or on the door frame. National Highways says you may need higher pressure with extra luggage or passengers.",
  },
  {
    question: "Does cold weather lower tyre pressure?",
    answer:
      "Yes. Air contracts as it cools, so pressures read lower on a cold morning. Check them before you drive and top up to the figure for your load.",
  },
  {
    question: "Is it safe to start a long journey with a bulge in the tyre?",
    answer:
      "No. A bulge means the tyre's structure is damaged, and it could fail at speed, so do not drive on it. Get it replaced before you travel.",
  },
  {
    question: "How do I check my spare tyre before a trip?",
    answer:
      "Lift the boot floor and check the spare's pressure, condition and age. Space-saver spares often need a higher pressure than road tyres. Check the jack, wheel brace and locking wheel nut key as well.",
  },
  {
    question: "What should I do if my TPMS light comes on during the journey?",
    answer:
      "Slow down and find a safe place to stop. Check the pressures with a gauge, and look for damage. Do not carry on with a flat or very soft tyre.",
  },
];

const organisation = {
  "@type": "Organization",
  name: "Rapid Mobile Tyres",
  url: SITE_URL + "/",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: HEADLINE,
  description: DESCRIPTION,
  image: FEATURED_IMAGE,
  author: organisation,
  publisher: organisation,
  datePublished: PUBLICATION_DATE,
  dateModified: PUBLICATION_DATE,
  mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
  url: PAGE_URL,
  inLanguage: "en-GB",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
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
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL + "/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: SITE_URL + "/blog" },
    { "@type": "ListItem", position: 3, name: HEADLINE, item: PAGE_URL },
  ],
};

export default function TyreChecksBeforeALongJourneyBristolPage() {
  return (
    <>
      {[articleSchema, faqSchema, breadcrumbSchema].map((schema) => (
        <script
          key={schema["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
        />
      ))}
      <Header />
      <main className="flex-1">
        <PageHero title={HEADLINE} breadcrumb="Home / Blog / Tyre Checks Before a Long Journey" />
        <section className="bg-zinc-50 py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-6 sm:px-10">
            <figure className="relative mb-8 aspect-[1200/630] overflow-hidden rounded-2xl ring-1 ring-zinc-200">
              <Image
                src={FEATURED_IMAGE_PATH}
                alt={FEATURED_ALT}
                fill
                preload
                sizes="(min-width: 896px) 816px, (min-width: 640px) calc(100vw - 80px), calc(100vw - 48px)"
                className="object-cover"
              />
            </figure>
            <article className="article-content rounded-2xl bg-white p-6 shadow-sm ring-1 ring-zinc-100 sm:p-10">
              <p>A cold-morning start, a packed boot and a long run up the M5 is a bad moment to find a soft tyre. Winter turns small tyre faults into roadside problems.</p>

              <p>These tyre checks before a long journey take about ten minutes on your driveway. They cover pressures, tread, damage and your spare, and what to do if something is wrong.</p>

              <p><strong>The short answer:</strong> check all four tyres cold, with pressures set for your loaded car. Measure tread in three places on each tyre.</p>

              <p>Look for bulges, cuts and cracking. Then confirm the spare or sealant kit, jack and locking wheel nut key are in the car.</p>

              <h2>Quick checklist: the 6 tyre checks before a long journey</h2>

              <ol>
                <li><strong>Pressure.</strong> Check every tyre cold and set it to the figure for your load.</li>
                <li><strong>Tread.</strong> Measure each tyre across the tread in three places.</li>
                <li><strong>Damage.</strong> Look for bulges, cuts, cracking and anything stuck in the rubber.</li>
                <li><strong>Valves and caps.</strong> Make sure each valve cap is on and nothing is hissing.</li>
                <li><strong>Spare or kit.</strong> Check the spare&apos;s pressure and condition, or the sealant kit&apos;s expiry date.</li>
                <li><strong>Tools.</strong> Find the jack, wheel brace and locking wheel nut key.</li>
              </ol>

              <p>Do these in daylight if you can. A torch helps on dark winter mornings, but it will not replace a proper look at the sidewalls.</p>

              <h2>Pressures for a loaded car (and why to check them cold)</h2>

              <p>Set your pressures for the weight you will carry, not for an empty car. National Highways says you may need higher pressure when you have more luggage or passengers than usual, in its <a href="https://nationalhighways.co.uk/road-safety/trip/">T.R.I.P. advice for drivers</a>.</p>

              <p>Your handbook is the best source. Many cars also list pressures inside the driver&apos;s door frame or on the fuel flap. Look for the figures marked for a heavier load.</p>

              <p>Check pressures cold. That means before you drive, or after only a short trip. Tyres warm up as they roll, which pushes the reading up and can hide a soft tyre.</p>

              <p>Cold weather matters here too. Air contracts as the temperature drops, so a tyre that was fine in October can read low on a frosty morning in December.</p>

              <p>If you only have a hand gauge, use it on all four tyres, then compare the readings with each other. One tyre sitting noticeably lower than the rest points to a slow leak. Mention it to a fitter before you leave.</p>

              <p>If your TPMS warning light is on, do not ignore it before a long trip. Our guide to the <Link href="/tyre-pressure-warning-light-bristol">tyre pressure warning light in Bristol</Link> explains what the light means and what to do next.</p>

              <h2>Tread: check it in three places on every tyre</h2>

              <p>Measure the tread across each tyre in three places: the inner edge, the middle and the outer edge. Uneven wear can hide on one side, so a single reading is not enough.</p>

              <p>A tread depth gauge is the most accurate tool. A 20p coin works as a quick guide. If the outer band of the coin is hidden when you push it into the groove, the tread is above the legal minimum at that spot.</p>

              <p>The legal minimum is 1.6mm across the central three-quarters of the tyre. Our article on <Link href="/the-dangers-of-worn-tyres-dont-compromise-your-safety-call-rapid-mobile-tyres">the dangers of worn tyres</Link> covers the law and the 20p test in full.</p>

              <p>A tyre can be legal and still be a poor choice for a long winter drive. Wet roads need grip, and grip falls as the tread wears. If a tyre is close to the limit, replace it before the trip, not after it.</p>

              <figure>
                <Image src="/tyre-tread-depth-gauge-check.webp" alt="Tread depth gauge measuring the main groove of a car tyre" width={1200} height={800} sizes="(min-width: 896px) 736px, 100vw" />
              </figure>

              <h2>Damage that means &quot;don&apos;t set off&quot;</h2>

              <p>Some damage means the tyre should not be driven on at all. Walk around the car and look closely at each tyre, including the inner sidewall that you cannot see from a standing position.</p>

              <p>Turn the steering to one side, or roll the car forward a little, to see more of each front tyre. Then run a gloved hand over the sidewall to feel for lumps.</p>

              <p>Do not set off if you find any of these:</p>

              <ul>
                <li><strong>A bulge or bubble</strong> on the sidewall or tread.</li>
                <li><strong>Exposed cords or fabric</strong> showing through the rubber.</li>
                <li><strong>A deep cut</strong> that reaches below the surface layer.</li>
                <li><strong>A nail, screw or other object</strong> stuck in the tyre.</li>
                <li><strong>Deep cracking</strong> across the sidewall.</li>
              </ul>

              <p>A bulge means the tyre&apos;s internal structure has been damaged, often by a kerb or pothole. The tyre can fail without warning at speed. If you see one, read our page on <Link href="/emergency-mobile-tyre-fitting-bristol">emergency mobile tyre fitting in Bristol</Link>.</p>

              <p>Cracking is a sign of age as well as use. National Highways advises checking tyre age, spare included. The date code is on the sidewall, and our guide to <Link href="/how-to-read-your-tyre-sidewall-markings">reading your tyre sidewall markings</Link> shows where to find it.</p>

              <figure>
                <Image src="/tyre-sidewall-bulge-close-up.webp" alt="Bulge on a car tyre sidewall, a sign the tyre should not be driven on" width={1200} height={800} sizes="(min-width: 896px) 736px, 100vw" />
              </figure>

              <h2>Spare wheel, sealant kit, run-flats and the locking wheel nut key</h2>

              <p>Check the spare as carefully as the four tyres on the road. A flat spare is no help when you need it, and an old or damaged one can fail the moment it takes load.</p>

              <p>Lift the boot floor and look at the spare&apos;s pressure, condition and age. Space-saver spares usually need a higher pressure than normal tyres, so check the figure printed on the wheel or in the handbook.</p>

              <p>Space-saver spares also come with limits on speed and distance. Our guide on <Link href="/how-long-can-you-drive-on-a-spare-tyre-uk-safety-rules-explained">how long you can drive on a spare tyre in the UK</Link> explains them.</p>

              <p>Many newer cars carry a sealant kit instead of a spare. Check that the sealant bottle is in date and the compressor works. Sealant is a short-term fix, not a repair.</p>

              <p>If your car has run-flat tyres, it may carry no spare at all. Check your handbook for the speed and distance limits that apply after a puncture.</p>

              <p>Finally, find the locking wheel nut key. If you have locking nuts and cannot find the key, you cannot remove the wheel, and neither can a fitter. Check the glovebox and boot before you leave.</p>

              <figure>
                <Image src="/spare-wheel-boot-floor-check.webp" alt="Space-saver spare wheel and jack under a car boot floor" width={1200} height={800} sizes="(min-width: 896px) 736px, 100vw" />
              </figure>

              <h2>Extra winter checks for cold, wet or icy roads</h2>

              <p>Winter roads punish tyres that are low on pressure or tread. Start by checking the forecast.</p>

              <p>The Highway Code, rule 228, says to check for warnings of ice or snow and not to drive in those conditions unless your journey is essential. Read the full <a href="https://www.gov.uk/guidance/the-highway-code/driving-in-adverse-weather-conditions-226-to-237">icy and snowy weather rules</a>.</p>

              <p>Pack for a delay. A torch, warm clothing, a charged phone and a high-visibility vest are sensible. They matter most if you end up waiting at the roadside.</p>

              <p>Check your tyres in daylight after a frosty night. Wipe off any grit or ice so you can see the tread surface and the sidewalls clearly.</p>

              <p>Think about the grip you will need. If you drive long distances in cold weather often, our guide to <Link href="/winter-tyres-bristol">winter tyres in Bristol</Link> explains how winter and all-season tyres differ.</p>

              <p>On icy roads, drive slowly and brake gently. Rule 231 advises smooth, gentle inputs. Tyres in good condition give you the best chance of keeping control.</p>

              <h2>Found a problem before you leave? Your options in Bristol</h2>

              <p>Do not drive off hoping the tyre will hold. A fault found on the driveway costs you far less than one found on the motorway.</p>

              <p>Start with the simple fixes. If the pressure is low, inflate the tyre and recheck it after a short while. If it drops again, the tyre has a leak.</p>

              <p>If you find a nail or screw, do not pull it out. Leave it in place and get the tyre looked at. Our <Link href="/flat-tyre-puncture-repair">flat tyre and puncture repair</Link> page explains when a repair is possible.</p>

              <p>If the tyre is bulging, cut, cracked or too worn, it needs replacing. Rapid Mobile Tyres can fit tyres at your home, workplace or a suitable roadside location, 24 hours a day. See our <Link href="/tyre-replacement-at-home-bristol">tyre replacement at home in Bristol</Link> page.</p>

              <p>After fitting, we torque the wheel nuts to the manufacturer&apos;s specification and check the pressures. Check our <Link href="/areas-we-cover">areas we cover</Link> page to confirm we reach you.</p>

              <h2>If a tyre fails on the motorway: what to do first</h2>

              <p>Stay calm, hold the steering wheel firmly and ease off the accelerator. Do not brake hard or swerve. Let the car slow down gradually while you steer in a straight line.</p>

              <p>Switch on your hazard lights. If you can, leave the carriageway at the next exit or pull into a service area.</p>

              <p>If you cannot, move into the left lane and pull into an emergency area or onto a hard shoulder if you can. Stop as far to the left as possible, with your wheels turned to the left. <a href="https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287">Highway Code rule 277</a> sets out these steps.</p>

              <p>Once you have stopped in one of those places, leave the car by the side furthest from traffic, if it is safe and possible to do so, and help your passengers do the same. Wait well away from the carriageway, behind a safety barrier if there is one. Never stand between the car and oncoming traffic.</p>

              <p>If you cannot reach a place of relative safety and cannot get out safely, stay in your vehicle with your seat belts and hazard warning lights on, and call 999 or use the SOS button. Do not try to change a wheel next to fast traffic.</p>

              <p>Our step-by-step guide on <Link href="/what-to-do-when-you-get-a-flat-tyre-in-bristol-step-by-step-guide">what to do when you get a flat tyre in Bristol</Link> covers the full process.</p>
              <h2>Frequently asked questions</h2>
              {faqs.map(({ question, answer }) => (
                <div key={question}>
                  <h3>{question}</h3>
                  <p>{answer}</p>
                </div>
              ))}
              <h2>Need a tyre sorted before your trip?</h2>

              <p>If your checks turn up a worn, damaged or leaking tyre, get it sorted before you leave. Rapid Mobile Tyres covers Bristol 24 hours a day, with fitting at your home, workplace or a suitable roadside spot.</p>

              <p>Call <strong><a href="tel:+447494247246">07494 247246</a></strong> or use our <Link href="/contact">contact page</Link> to tell us what you have found.</p>
            </article>
            <p className="mt-8 text-center">
              <Link href="/blog" className="text-sm font-semibold text-orange-600 hover:underline">
                ← Back to all articles
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <style>{`
        .article-content h2 { margin: 2rem 0 1rem; font-size: 1.5rem; line-height: 1.3; font-weight: 750; color: #18181b; }
        .article-content h3 { margin: 1.5rem 0 .6rem; font-size: 1.15rem; font-weight: 700; color: #18181b; }
        .article-content p { margin: 1rem 0; line-height: 1.8; color: #52525b; }
        .article-content a { color: #ea580c; text-decoration: underline; text-underline-offset: 3px; }
        .article-content figure { margin: 1.25rem 0 1.5rem; }
        .article-content figure img { display: block; width: 100%; height: auto; border-radius: .8rem; }
        .article-content ul, .article-content ol { margin: 1rem 0; padding-left: 1.5rem; line-height: 1.8; color: #52525b; }
        .article-content ul { list-style: disc; }
        .article-content ol { list-style: decimal; }
        .article-content strong { color: #27272a; font-weight: 700; }
      `}</style>
    </>
  );
}
