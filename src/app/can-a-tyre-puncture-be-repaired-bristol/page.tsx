import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";

const SITE_URL = "https://rapid-tyres.com";
const PAGE_URL = SITE_URL + "/can-a-tyre-puncture-be-repaired-bristol";
const TITLE = "Can a Tyre Puncture Be Repaired? Bristol Driver’s Guide";
const HEADLINE = "Can a Tyre Puncture Be Repaired? A Bristol Driver’s Guide";
const DESCRIPTION = "Puncture repair depends on where the hole is, its size, sidewall damage and whether you drove flat. Get your tyre checked at home or work in Bristol.";
const FEATURED_IMAGE_PATH = "/can-a-tyre-puncture-be-repaired-featured.webp";
const FEATURED_IMAGE = SITE_URL + FEATURED_IMAGE_PATH;
const FEATURED_ALT = "Screw stuck in the tread of a car tyre";
const PUBLICATION_DATE = "2026-11-26";

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
    question: "Can a puncture near the edge of the tread be repaired?",
    answer:
      "Only if it falls within the central repair area and the tyre passes inspection. A fitter can check where the damage sits. A hole outside that area is unsuitable for a standard minor repair.",
  },
  {
    question: "Can a sidewall puncture be repaired?",
    answer:
      "A puncture through the sidewall normally means replacing the tyre. Leave the car parked and arrange an inspection if you’re unsure whether the damage is on the sidewall or shoulder.",
  },
  {
    question: "Is it safe to drive with a nail in my tyre?",
    answer:
      "Get the tyre checked before driving on it. A nail can stay in place while air leaks around it. Leave it where it is and arrange help if the tyre is losing air or looks damaged.",
  },
  {
    question: "Can a tyre that was driven on flat be repaired?",
    answer:
      "A fitter needs to inspect the inside of the tyre to find out. If driving on it flat damaged the sidewall or inner lining, the tyre needs replacing even if the original hole is small.",
  },
  {
    question: "Is a tyre sealant or plug a permanent repair?",
    answer:
      "Liquid sealant and a plug inserted from outside the mounted tyre do not count as permanent repairs. A professional may use a repair that fills the hole and seals the inner lining after checking the tyre off the wheel.",
  },
  {
    question: "Can a mobile fitter repair a puncture at my home or work in Bristol?",
    answer:
      "Yes, if the fitter finds the puncture is suitable and there’s safe access and room to work. Tell us where the car is parked and what damage you can see.",
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

export default function CanATyrePunctureBeRepairedBristolPage() {
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
        <PageHero title={HEADLINE} breadcrumb="Home / Blog / Can a Tyre Puncture Be Repaired?" />
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
              <p>Yes, a tyre puncture can often be repaired if the hole is small, it sits in the central part of the tread and the rest of the tyre is sound. A puncture in the sidewall or outside the repairable part of the tread will normally mean a new tyre.</p>

              <p>If you drove on the tyre while it was flat or very low, tell the fitter. The outside can look fine while the inside is damaged. Leave any nail or screw in place and get the tyre checked before driving on it.</p>

              <p>If your car is already somewhere safe in Bristol, a mobile fitter can check it at home or work. They’ll inspect the tyre and explain whether a repair or replacement is suitable.</p>

              <h2>Short answer: When can a puncture be repaired?</h2>

              <p>A small hole in the central tread is a candidate for repair. A sidewall puncture, damage outside the repair area or damage from driving on a flat tyre usually means replacement. A fitter makes the decision after inspecting the tyre off the wheel. <a href="https://btmauk.com/advice-about-tyres/tyre-industry-professionals/">btmauk.com</a></p>

              <p>Two cars can pick up similar screws and get different answers. One driver spots the screw before the tyre loses much air. The other drives with the tyre nearly flat. The first tyre may be repairable, while the second could have damage inside even if the holes look alike.</p>

              <p>If you found the nail on your driveway, leave the car there while you arrange an inspection. Tell the fitter how you found it, whether the tyre was flat and whether you drove after noticing the problem. Those details help them decide what to check first.</p>

              <h2>What decides whether to repair or replace?</h2>

              <p>A fitter looks at where the object went in, the size of the damage and the condition of the whole tyre. The British Tyre Manufacturers’ Association (BTMA) summarises the guidance for minor repairs to car and light van tyres under BS AU 159. <a href="https://btmauk.com/advice-about-tyres/tyre-industry-professionals/">Read the BTMA’s tyre repair guidance</a>.</p>

              <ul>
                <li><strong>Location.</strong> The puncture must fall within the central repair area. A hole can be in the tread and still be too close to the edge.</li>
                <li><strong>Size.</strong> The BTMA’s table gives a maximum diameter of 6 mm at the base of the injury after preparation. The visible screw head gives no reliable measure of the hole beneath it.</li>
                <li><strong>Condition.</strong> Cuts that reach the casing, damage to the part that seals against the wheel and deterioration inside the tyre can rule out repair. The fitter also checks the remaining tread. Our <Link href="/the-dangers-of-worn-tyres-dont-compromise-your-safety-call-rapid-mobile-tyres">guide to worn tyres</Link> explains the tread rules.</li>
                <li><strong>Previous repairs.</strong> An old repair does not automatically rule out a new one. The fitter checks where it sits and what kind of repair it was. Overlapping patches or an unsuitable previous repair can prevent a minor repair. <a href="https://btmauk.com/advice-about-tyres/tyre-industry-professionals/">btmauk.com</a></li>
              </ul>

              <p>A puncture and an old patch can be in different places on the tread but still sit close enough for the patches to overlap inside. If you know the tyre has been repaired before, mention it. The fitter can check the old patch when the tyre comes off.</p>

              <p>The fitter removes the tyre from the wheel to look at it inside and out. This is where they can check what a photo from the driveway cannot show, such as the condition of the inner lining or damage where the tyre meets the rim. <a href="https://btmauk.com/advice-about-tyres/tyre-industry-professionals/">btmauk.com</a></p>

              <h2>Where is the repairable area of the tread?</h2>

              <p>The repairable area is a band through the middle of the tread, known as area T. Its width depends on the tyre’s nominal section width, so the same distance from the outer edge might give a different answer on a different tyre. <a href="https://btmauk.com/advice-about-tyres/tyre-industry-professionals/">btmauk.com</a></p>

              <p>Imagine the tread as a strip running around the tyre. The middle of that strip is where a minor repair may be possible. The outer rows of tread blocks sit closer to the rounded shoulder, where the tread curves towards the sidewall.</p>

              <p>It’s worth telling the fitter whether the object looks central or close to the edge. Leave the measurement to them. Grooves can make the centre hard to judge by eye, and a screw that enters at an angle may leave damage away from the spot you see.</p>

              <p>If the fitter asks for the tyre size, read the markings from the sidewall only if you can reach it safely. Send the full size as printed. Our guide to <Link href="/how-to-read-your-tyre-sidewall-markings">reading your tyre sidewall markings</Link> shows where to find it.</p>

              <figure>
                <Image
                  src="/tyre-repairable-area-tread.webp"
                  alt="Fitter pointing to the central tread area of a tyre"
                  width={1200}
                  height={800}
                  sizes="(min-width: 896px) 736px, 100vw"
                />
              </figure>

              <h2>What about sidewall and shoulder damage?</h2>

              <p>A hole through the sidewall falls outside the area for a standard minor puncture repair. The same applies to a hole in the shoulder outside area T. For a driver deciding whether to book a patch or a new tyre, damage in either place usually means asking about replacement. <a href="https://btmauk.com/advice-about-tyres/tyre-industry-professionals/">btmauk.com</a></p>

              <p>The sidewall bends as it takes the car’s weight. A split, bulge or puncture there needs a professional assessment, even if the tyre has kept its shape while parked. A bulge or exposed cords are reasons to leave the car parked and get help. <a href="https://btmauk.com/advice-about-tyres/tyre-industry-professionals/">btmauk.com</a></p>

              <p>Sometimes the reason for the damage matters as much as what you see. If the pressure started dropping after a sharp impact, tell the fitter about the impact and where it happened. Our guide to <Link href="/pothole-tyre-damage-bristol">pothole tyre damage in Bristol</Link> covers what to look for separately.</p>

              <figure>
                <Image
                  src="/tyre-sidewall-puncture-damage.webp"
                  alt="Puncture damage on a tyre sidewall that cannot be repaired"
                  width={1200}
                  height={800}
                  sizes="(min-width: 896px) 736px, 100vw"
                />
              </figure>

              <h2>Why driving on a flat tyre can rule out repair</h2>

              <p>A tyre loses the support of its air when it goes flat. As the wheel turns under the car’s weight, the sidewall bends much further than usual. That can damage the tyre from the inside even when the original puncture is tiny. <a href="https://btmauk.com/advice-about-tyres/tyre-industry-professionals/">btmauk.com</a></p>

              <p>Adding air can make the tyre round again without fixing that damage. A fitter checks the inside for signs of wear or damage from low pressure. If they find damage from driving while deflated, the tyre needs replacing even if the hole sits in the middle of the tread. <a href="https://btmauk.com/advice-about-tyres/tyre-industry-professionals/">btmauk.com</a></p>

              <p>Tell the fitter if the car felt heavy to steer, you heard the tyre flapping or you noticed it looked flat before you stopped. If you only discovered the flat after parking, say that too. Give the sequence as you remember it and let the inspection settle the question.</p>

              <h2>Is sealant or a plug kit a permanent repair?</h2>

              <p>A sealant kit is a temporary measure. A plug pushed into a tyre from outside while it’s still on the wheel also leaves the inside unchecked. The BTMA does not treat liquid sealant or an externally applied plug in a fitted tyre as an acceptable permanent repair. <a href="https://btmauk.com/advice-about-tyres/tyre-industry-professionals/">btmauk.com</a></p>

              <p>A proper minor repair starts with removing the tyre and checking it. If it’s suitable, the repair fills the hole and seals the inner lining. The fitter chooses the materials and method for the damage they actually find. <a href="https://btmauk.com/advice-about-tyres/tyre-industry-professionals/">btmauk.com</a></p>

              <p>If the warning light goes out after you use sealant, you still need the tyre looked at. Tell the fitter whether you used the car’s kit or a plug. A tyre that holds air afterwards can still have damage from the puncture or from being driven underinflated.</p>

              <p>If your car came with a sealant kit, use it only as the handbook directs and only when you’re safely parked away from traffic. Follow the handbook’s limits and tell the fitter if you’ve used it. <a href="https://www.fordservicecontent.com/Ford_Content/Catalog/owner_information/2KF012720AH_202511_enGBR.pdf">fordservicecontent.com</a> If you’ve already fitted a spare, check our guide to <Link href="/how-long-can-you-drive-on-a-spare-tyre-uk-safety-rules-explained">how long you can drive on a spare tyre</Link>.</p>

              <h2>How to spot a slow puncture</h2>

              <p>The main clue is one tyre losing pressure again after you’ve brought it to the correct figure. You might see a warning light, notice that the same tyre looks low before work or spot a nail in the tread while the car is parked.</p>

              <p>If the car is somewhere safe and the tyre has no obvious damage, record its cold pressure and compare it with the vehicle’s recommended figure for that wheel. Note which tyre is affected and whether it has needed air more than once. Share that with the fitter.</p>

              <p>Pressure loss alone does not tell you where the air is escaping. A fitter can check whether the leak is through the tread or somewhere else, such as the valve. Our <Link href="/tyre-pressure-warning-light-bristol">tyre pressure warning light guide</Link> explains what the dashboard warning can tell you.</p>

              <h2>What to do if you’ve picked up a nail or screw</h2>

              <p>If you can see a nail or screw in the tyre, leave it in place and arrange an inspection. Pulling it out can let air escape faster. A tyre that looks inflated can still have a leak, so get advice before setting off. <a href="https://www.fordservicecontent.com/Ford_Content/Catalog/owner_information/2KF012720AH_202511_enGBR.pdf">fordservicecontent.com</a></p>

              <ol>
                <li><strong>Put your safety first.</strong> Only look at the tyre when the car is safely parked away from moving traffic. Never check or change it on a live carriageway or motorway hard shoulder. <a href="https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287">GOV.UK</a></li>
                <li><strong>Say what you noticed.</strong> Tell the fitter where the object is, whether the tyre has lost air and whether you drove while it was low. Take a photo only if you can do so safely.</li>
                <li><strong>Leave a visibly damaged tyre alone.</strong> If it’s flat or has a cut, bulge or exposed cords, keep the car parked and arrange help. Leave the checks that need the car lifted to a professional.</li>
              </ol>

              <p>If the tyre goes flat during a journey, get to a place of relative safety. For advice on what to do next, read <Link href="/what-to-do-when-you-get-a-flat-tyre-in-bristol-step-by-step-guide">what to do when you get a flat tyre in Bristol</Link>.</p>

              <h2>Can a mobile fitter check the tyre where your car is?</h2>

              <p>If the car is on your driveway or in a work car park with suitable access and space to work, ask Rapid Mobile Tyres about a visit. A fitter can inspect the tyre where the car is parked and explain if a repair is suitable or if you’ll need a replacement. <Link href="/flat-tyre-puncture-repair">Ask about mobile puncture repair in Bristol</Link>.</p>

              <p>Give the postcode, vehicle details and tyre size if you can read it safely. Say which wheel is affected and whether you’ve used sealant or driven with the tyre flat. If the car is behind a gate or in a staff car park, tell us how the fitter can reach it.</p>

              <p>Keep the car where it is if moving it would mean driving on a flat or damaged tyre. If the space is tight or the ground is uneven, describe it when you call so we can discuss where the work can safely take place.</p>

              <p>If the inspection rules out a repair, ask about <Link href="/tyre-replacement-at-home-bristol">tyre replacement at home in Bristol</Link>. Giving the tyre size when you call helps us check availability in case the fitter finds that a new tyre is needed.</p>

              <figure>
                <Image
                  src="/mobile-fitter-inspecting-tyre-inside.webp"
                  alt="Mobile tyre fitter inspecting the inside of a punctured tyre"
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

              <h2>Got a puncture in Bristol?</h2>

              <p>Call Rapid Mobile Tyres on <strong><a href="tel:+447494247246">07494 247246</a></strong> with your location, tyre size and what you’ve noticed. Ask about <Link href="/emergency-mobile-tyre-fitting-bristol">emergency mobile tyre fitting in Bristol</Link>, check <Link href="/areas-we-cover">where we fit tyres</Link> or use our <Link href="/contact">contact page</Link> to arrange an inspection.</p>
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
