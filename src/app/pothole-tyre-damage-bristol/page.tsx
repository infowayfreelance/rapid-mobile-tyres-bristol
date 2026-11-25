import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";

const SITE_URL = "https://rapid-tyres.com";
const PAGE_URL = SITE_URL + "/pothole-tyre-damage-bristol";
const TITLE = "Pothole Tyre Damage in Bristol: What to Check Next";
const HEADLINE = "Hit a Pothole in Bristol? How to Check Your Tyres and When to Get Them Replaced";
const DESCRIPTION = "Hit a pothole in Bristol? Learn how to spot pothole tyre damage, when to stop driving, what may need replacing and how to report the road defect locally.";
const FEATURED_IMAGE_PATH = "/pothole-tyre-damage-bristol-featured.webp";
const FEATURED_IMAGE = SITE_URL + FEATURED_IMAGE_PATH;
const FEATURED_ALT = "Car tyre next to a water-filled pothole on a wet Bristol street";
const PUBLICATION_DATE = "2026-11-25";

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
    question: "Can a pothole damage a tyre without it going flat?",
    answer:
      "Yes, a pothole can damage the cords inside the tyre while it still holds air. A cut or bulge can also be on the inner sidewall. Ask a tyre professional to check the tyre after a heavy impact.",
  },
  {
    question: "Can I drive on a tyre with a bulge after hitting a pothole?",
    answer:
      "No. A bulge points to damage inside the tyre and can give way suddenly. Leave the car parked somewhere safe and arrange a replacement.",
  },
  {
    question: "Can pothole damage to a tyre be repaired?",
    answer:
      "Sometimes. A small puncture in the central tread may be repairable if the tyre passes inspection. A bulge, deep sidewall cut or damage to the tyre's structure means it needs replacing.",
  },
  {
    question: "How long after a pothole can damage show up?",
    answer:
      "It can show up immediately or become apparent over the next few days. Watch for falling tyre pressure or a bulge you did not see before. If any of these signs appears, get the tyre checked before driving on it.",
  },
  {
    question: "How do I report a pothole in Bristol?",
    answer:
      "Use Bristol City Council's road maintenance reporting page. Give the road name, direction of travel and a nearby landmark. Use the council's urgent contact route if the defect is likely to cause injury or an accident.",
  },
  {
    question: "Can a mobile fitter replace a pothole-damaged tyre at home or work?",
    answer:
      "Yes, if there's safe access, space around the car and any required permission to work there. Tell the fitter if you can see rim damage or if the car started pulling after the impact.",
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

export default function PotholeTyreDamageBristolPage() {
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
        <PageHero title={HEADLINE} breadcrumb="Home / Blog / Pothole Tyre Damage in Bristol" />
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
              <p>You hit a water-filled pothole on a Bristol street, hear a sharp thud and wonder whether the tyre will get you home. It might still look fully inflated when you first get out.</p>

              <p>Pothole tyre damage can hide on the inner sidewall or inside the tyre. Start with a few checks once you&apos;re somewhere safe, then decide whether to leave the car parked and get help.</p>

              <p>Look for a bulge or cut in the tyre, a dent or crack in the rim, and any sign the tyre is losing air. If you see any of these, or the steering feels different, leave the car parked. If the tyre needs replacing, a mobile fitter can come to you at home, at work or at a suitable roadside location.</p>

              <h2>What to do straight after hitting a pothole</h2>

              <p>Stop as soon as you can do so safely in a place away from moving traffic. Check the tyres on the side that hit the pothole for a bulge, cut or loss of air. Look at the wheel rims for dents or cracks.</p>

              <p>If you spot damage, the tyre is going soft quickly or the car has become hard to steer, do not carry on with the journey. If the impact was heavy, get the tyre and wheel checked even if the outside looks normal. <a href="https://www.tyresafe.org/about-tyresafe/latest-news/national-pothole-day-tyresafe-urges-road-users-to-check-their-tyres-after-pothole-impacts/">tyresafe.org</a></p>

              <p>Keep your attention on the road until you&apos;re safely parked. Never get out to inspect a tyre on a live carriageway, hard shoulder or motorway verge. If you&apos;re stranded somewhere unsafe, follow the Highway Code&apos;s breakdown guidance and get help before worrying about the tyre. <a href="https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287">GOV.UK</a></p>

              <h2>What a pothole can do to a tyre and wheel</h2>

              <p>A sharp pothole edge can squeeze the tyre against the metal rim as the wheel climbs out of the hole. That impact can damage the cords that give the sidewall its strength even when the rubber on the outside looks intact.</p>

              <p>A rounded lump that pushes out from the sidewall can be a sign those cords have broken. The lump can form on the side facing into the wheel arch as well as the side you see from the pavement. <a href="https://www.michelin.co.uk/auto/advice/change-tyres/damaged-sidewall">MICHELIN</a></p>

              <p>The wheel can take a hit too. If the rim bends where the tyre sits against it, the seal can leak. A tyre with a damaged seal can go soft while the car is parked. <a href="https://www.tyresafe.org/check-wheel-alignment-after-pothole-damage/">tyresafe.org</a></p>

              <p>One pothole can catch both wheels on the same side. A front wheel may take the first hit you hear, but make time to look at the rear tyre and rim as well. Tell the fitter if you felt a second jolt.</p>

              <h2>A safe two-minute tyre check once you have stopped</h2>

              <p>Do these checks only in a safe place such as a driveway or a car park with room to stand clear of passing vehicles. Use daylight or a torch. You can do the first check from outside the car without lifting it.</p>

              <ol>
                <li><strong>Look at the sidewall</strong> for a raised lump, a split or torn rubber. Look towards the inside edge only where you can do so safely from outside the car.</li>
                <li><strong>Look at the tread and shoulder.</strong> Check the part of the tyre that touches the road and the edge where it curves into the sidewall. Look for a fresh gash, loose rubber or something stuck in the tread.</li>
                <li><strong>Check the rim</strong> for a new dent, crack or section that sits out of line where it meets the tyre. A plastic wheel trim can hide part of the metal rim.</li>
                <li><strong>Check pressure</strong> if there is no visible damage. Compare the gauge reading with the vehicle handbook or pressure label. Check the figure for that axle, as front and rear targets can differ.</li>
              </ol>

              <p>Follow <a href="https://www.tyresafe.org/about-tyresafe/latest-news/national-pothole-day-tyresafe-urges-road-users-to-check-their-tyres-after-pothole-impacts/">TyreSafe’s checks after a pothole impact</a> if you&apos;re unsure what to look for. If the inner sidewall is hidden from view or you cannot see past the trim, leave that part of the inspection to a professional.</p>

              <p>Make a note of what you could see from where the car was parked. If you could check the front tyre but could only see part of the rear, mention that when you book an inspection.</p>

              <p>If you find a visibly flat tyre, leave it parked and read our guide to <Link href="/what-to-do-when-you-get-a-flat-tyre-in-bristol-step-by-step-guide">what to do when you get a flat tyre in Bristol</Link> for the next steps.</p>

              <figure>
                <Image
                  src="/checking-tyre-pressure-after-pothole.webp"
                  alt="Driver checking tyre pressure after hitting a pothole"
                  width={1200}
                  height={800}
                  sizes="(min-width: 896px) 736px, 100vw"
                />
              </figure>

              <h2>Pothole tyre damage that means you should stop driving</h2>

              <p>Leave the car parked if you can see a sidewall bulge, exposed cords, a rapid loss of air or a visibly bent or cracked rim. Each of these is enough on its own to stop the journey. <a href="https://www.michelin.co.uk/auto/advice/change-tyres/damaged-sidewall">MICHELIN</a></p>

              <ul>
                <li><strong>A bulge or egg-shaped lump.</strong> A bulge points to damage inside the tyre. The tyre can fail suddenly when you drive, even on a short trip.</li>
                <li><strong>A deep cut or split.</strong> Threads or wire showing through the rubber are a clear sign of serious damage. If you cannot tell how deep a cut goes, leave the car parked and ask a tyre professional to assess it.</li>
                <li><strong>Rapid air loss.</strong> If you hear air escaping or can see the tyre going down, arrange help. Topping it up cannot fix what the impact has damaged.</li>
                <li><strong>A visible dent or crack in the rim.</strong> Have the wheel assessed before fitting a new tyre. The rim may have lost its seal or suffered damage that needs attention first.</li>
              </ul>

              <p>If there&apos;s a mark you&apos;re unsure about, note where it is on the wheel, such as just above the valve. When it&apos;s safe to take a photo from where you&apos;re standing, send the fitter one showing the whole wheel as well as the mark.</p>

              <p>If you already have a temporary spare fitted, check the vehicle handbook before continuing. Our guide explains <Link href="/how-long-can-you-drive-on-a-spare-tyre-uk-safety-rules-explained">how long you can drive on a spare tyre</Link> and where to find the limits for yours.</p>

              <figure>
                <Image
                  src="/tyre-sidewall-bulge-pothole.webp"
                  alt="Bulge on a car tyre sidewall after a pothole impact"
                  width={1200}
                  height={800}
                  sizes="(min-width: 896px) 736px, 100vw"
                />
              </figure>

              <h2>Signs that can appear over the next few days</h2>

              <p>A tyre can lose air slowly after a pothole hit. A bulge can also become easier to see later. If a light impact left no signs of damage, take another look and check the pressure again over the next few days. <a href="https://www.tyresafe.org/check-wheel-alignment-after-pothole-damage/">tyresafe.org</a></p>

              <p>Take readings when the tyres are cold and write them down for each affected wheel. A before-and-after reading from the same tyre gives a fitter more to work with than a comparison between two axles that may use different pressures.</p>

              <p>If the pressure drops again or the warning light keeps coming on, have the tyre and wheel checked. Our <Link href="/tyre-pressure-warning-light-bristol">tyre pressure warning light guide</Link> explains what to do next. Get advice before driving on a tyre that&apos;s losing air.</p>

              <p>Pay attention if the steering wheel starts to shake, the car pulls to one side or the steering wheel sits off-centre. If that happens while you&apos;re driving, stop in a safe place and arrange for a garage to check the steering and suspension. <a href="https://www.tyresafe.org/about-tyresafe/latest-news/national-pothole-day-tyresafe-urges-road-users-to-check-their-tyres-after-pothole-impacts/">tyresafe.org</a></p>

              <p>Tell the garage which side took the hit and when the change started. If you&apos;ve already noticed that the shake happens at a certain speed, mention it when you call. Leave the car parked while you arrange an assessment.</p>

              <h2>Can pothole tyre damage be repaired?</h2>

              <p>A small puncture in the central tread can sometimes be repaired after a professional checks the tyre. A sidewall bulge, a deep sidewall cut or damage to the tyre&apos;s structure means the tyre needs replacing. <a href="https://www.tyresafe.org/tyre-advice/tyre-care-repair/punctures-and-puncture-repairs/">TyreSafe</a></p>

              <p>An impact mark beside a leak gives the fitter a place to start looking. Air might be escaping at the rim, or a sharp object might have punctured the tread. The fitter locates the leak and checks the tyre for other damage before deciding.</p>

              <p>TyreSafe advises checking the tyre&apos;s condition as well as where the puncture sits. Damage caused by driving on a deflated tyre can rule out a repair. See our <Link href="/flat-tyre-puncture-repair">flat tyre and puncture repair service</Link> for more on what a fitter considers. <a href="https://www.tyresafe.org/tyre-advice/tyre-care-repair/punctures-and-puncture-repairs/">TyreSafe</a></p>

              <p>A check after a pothole can also uncover wear or cracking that was already there. For general replacement signs, see <Link href="/safety-first-the-importance-of-timely-tyre-replacements">when to replace your tyres</Link>. Our <Link href="/the-dangers-of-worn-tyres-dont-compromise-your-safety-call-rapid-mobile-tyres">guide to worn tyres</Link> covers legal tread requirements.</p>

              <h2>How to report a pothole in Bristol</h2>

              <p>Use <a href="https://www.bristol.gov.uk/residents/streets-travel/report-a-street-issue/pothole-damaged-road-or-footpath">Bristol City Council’s road maintenance reporting page</a> for a pothole on a road it maintains. The page gives a separate phone route for a defect likely to cause an accident or injury.</p>

              <p>Give the street name and a fixed landmark, such as a shop, house number or side road. Add your direction of travel and say where the pothole sits in the lane. That helps if the road has several defects close together.</p>

              <p>Only take a photo from a safe place. A wider shot that shows the street or a nearby landmark can be more useful for locating it than a close-up of the hole. If a photo would mean stepping into traffic, send the location details alone.</p>

              <p>A Bristol address does not always mean Bristol City Council maintains the road. The council gives separate instructions for motorways and the A4 Bristol Broadway in Avonmouth. If you hit the pothole near the city boundary, check which council covers that stretch. <a href="https://www.bristol.gov.uk/residents/streets-travel/report-a-street-issue/pothole-damaged-road-or-footpath">bristol.gov.uk</a></p>

              <p>If you want to keep a record of the damage, note the date, time, location and which wheels were affected. Save any photos you can take safely, the report reference if you receive one and any inspection notes.</p>

              <p>Record where you hit the pothole and where you first saw the damage. You might hit the pothole on one road and only see the bulge when you park on another. If you decide to make a claim, check <a href="https://www.bristol.gov.uk/residents/streets-travel/report-a-street-issue/make-a-highways-claim-for-injury-or-damage-to-property">Bristol City Council&apos;s highways claims page</a>, which explains that there is no automatic right to compensation.</p>

              <h2>Getting a damaged tyre replaced where you&apos;re parked</h2>

              <p>Rapid Mobile Tyres offers mobile tyre replacement at home, at work or at a suitable roadside location in Bristol. If the car is already somewhere safe with room to work, you can leave it there and ask a fitter to come to you.</p>

              <p>When you get in touch, give the postcode or exact location, the vehicle details and which wheel took the impact. Share the tyre size if you can read it safely.</p>

              <p>Say if the tyre is going down, the rim looks bent or more than one wheel was affected.</p>

              <p>Tell us about access too. If the car is behind a gate or in a shared work car park, explain where it is and check with whoever manages the space. If you cannot see a safe working area, say so when you call.</p>

              <p>You can arrange <Link href="/tyre-replacement-at-home-bristol">tyre replacement at home in Bristol</Link> or ask about <Link href="/emergency-mobile-tyre-fitting-bristol">emergency mobile tyre fitting in Bristol</Link> if the damage leaves you stuck. The mobile service is available 24/7, subject to tyre availability and safe access.</p>

              <p>If you find the damage before the next school run or before leaving work, give the fitter the address where the car is now. The pothole location helps the council. The car&apos;s current location is what matters for a callout.</p>

              <p>After fitting a replacement, the technician tightens the wheel nuts to the vehicle manufacturer&apos;s specification and checks the tyre pressures. If there&apos;s visible wheel damage or the steering changed after the impact, tell us before booking so you can arrange the right help.</p>

              <figure>
                <Image
                  src="/mobile-tyre-fitter-replacing-damaged-tyre.webp"
                  alt="Mobile tyre fitter replacing a pothole-damaged tyre outside a home"
                  width={1200}
                  height={800}
                  sizes="(min-width: 896px) 736px, 100vw"
                />
              </figure>

              <h2>Frequently asked questions</h2>
              {faqs.map(({ question, answer }) => (
                <div key={question}>
                  <h3>{question}</h3>
                  <p>{answer}</p>
                </div>
              ))}

              <h2>Tyre damaged by a pothole?</h2>

              <p>Call Rapid Mobile Tyres on <strong><a href="tel:+447494247246">07494 247246</a></strong> and tell us where you&apos;re parked and what changed after the impact. Check <Link href="/areas-we-cover">where we fit tyres</Link> or use our <Link href="/contact">contact page</Link> if you&apos;re arranging a visit.</p>
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
