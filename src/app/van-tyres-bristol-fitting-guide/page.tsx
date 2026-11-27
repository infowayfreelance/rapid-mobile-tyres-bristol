import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";

const SITE_URL = "https://rapid-tyres.com";
const PAGE_URL = SITE_URL + "/van-tyres-bristol-fitting-guide";
const TITLE = "Van Tyres in Bristol: Load Ratings and Mobile Fitting";
const HEADLINE = "Van Tyres in Bristol: Why They're Different and How Mobile Fitting Works";
const DESCRIPTION = "Van tyres in Bristol need the right load rating. Check the handbook for C-marked or reinforced tyres and see how fitting works at a depot, site or home.";
const FEATURED_IMAGE_PATH = "/van-tyres-bristol-fitting-guide-featured.webp";
const FEATURED_IMAGE = SITE_URL + FEATURED_IMAGE_PATH;
const FEATURED_ALT = "Mobile fitter attending a panel van in Bristol";
const PUBLICATION_DATE = "2026-11-27";

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
    question: "Can I put car tyres on a van?",
    answer:
      "Only if the vehicle manufacturer approves them for that van. Some smaller vans can use passenger tyres. Check the handbook or placard for the approved tyre type, size, load index and speed rating.",
    source: {
      label: "Goodyear UK",
      url: "https://www.goodyear.eu/en_gb/consumer/learn/van-tyres-vs-car-tyres.html",
    },
  },
  {
    question: "What does the C on a van tyre mean?",
    answer:
      "A C after the rim size identifies a tyre designed for light commercial vehicles. Read the load index and speed symbol as well, since the same tyre size can come in different specifications.",
    source: {
      label: "btmauk.com",
      url: "https://btmauk.com/wp-content/uploads/2021/08/BTMA-Tyre-Management-VANS-Leaflet-v2-August-2021.pdf",
    },
  },
  {
    question: "Do van tyres need a higher load rating?",
    answer:
      "Many vans need tyres rated to carry heavier loads than typical car tyres. Use the load rating your vehicle manufacturer specifies for the van and wheel position.",
    source: {
      label: "MICHELIN",
      url: "https://www.michelin.co.uk/auto/advice/van/reinforced-tyres-utility-vehicles",
    },
  },
  {
    question: "Can van tyres be fitted at the roadside or at a depot in Bristol?",
    answer:
      "Yes, if the fitter can reach the van and work safely away from traffic. Give the exact location and describe the space around the wheel before booking.",
  },
  {
    question: "How do I find the correct van tyre size?",
    answer:
      "Check the tyre placard or the handbook for the approved size. Compare it with the full code on the affected tyre if you can read it safely, and tell the fitter about any difference.",
  },
  {
    question: "Can a puncture in a van tyre be repaired?",
    answer:
      "Sometimes. A fitter needs to inspect where the puncture is and check the condition of the tyre. Tell them if the van has been driven with the tyre flat or losing pressure.",
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
  mainEntity: faqs.map(({ question, answer, source }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: source ? `${answer} <a href="${source.url}">${source.label}</a>` : answer,
    },
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

export default function VanTyresBristolFittingGuidePage() {
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
        <PageHero title={HEADLINE} breadcrumb="Home / Blog / Van Tyres in Bristol" />
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
              <p>If you need van tyres in Bristol, start with the vehicle handbook or tyre placard. The replacement needs the right size, load index and speed rating for your van. Many vans take C-marked commercial tyres because they are designed to carry heavier loads. <a href="https://btmauk.com/wp-content/uploads/2021/08/BTMA-Tyre-Management-VANS-Leaflet-v2-August-2021.pdf">btmauk.com</a></p>

              <p>Some smaller vans can use passenger tyres or reinforced tyres marked XL if the manufacturer approves them. If you can read the markings safely, note the full code from the tyre you&#x27;re replacing. Check it against the handbook before you order. <a href="https://www.goodyear.eu/en_gb/consumer/learn/van-tyres-vs-car-tyres.html">Goodyear UK</a></p>

              <p>A mobile fitter can come to your depot, job site, home or a suitable roadside location in Bristol. When you call, give the van&#x27;s make and model, tyre size and exact location. Say which wheel needs attention and whether the van is carrying a load.</p>

              <h2>Why are van tyres specified differently?</h2>

              <p>A van tyre must handle the vehicle&#x27;s approved load. Commercial tyres have a reinforced structure for that work. Two tyres can have the same size markings and fit the same rim while having different load ratings. <a href="https://btmauk.com/wp-content/uploads/2021/08/BTMA-Tyre-Management-VANS-Leaflet-v2-August-2021.pdf">British Tyre Manufacturers’ Association van tyre guide</a></p>

              <p>Think about a van that goes out empty to collect supplies and comes back with them stacked in the rear. The weight on the tyres changes during that trip. The tyre specification still applies when the van is empty in the yard.</p>

              <p>A work van may still carry tools and equipment with no boxes in the back. If you&#x27;re working out what to tell the fitter, describe what is actually in the van. Mention fixed shelving or equipment and what you&#x27;re carrying today.</p>

              <p>If two people share a van, keep the approved tyre details with the vehicle records. That gives whoever makes the next booking something to check against when a tyre wears out, even when they usually carry different loads.</p>

              <h2>Load rating, C markings and the vehicle placard</h2>

              <p>The load index is the number code for the weight a tyre is rated to carry. The speed symbol is a separate part of the code. When replacing a tyre, check the van&#x27;s approved specification, including the tyre type the manufacturer calls for. <a href="https://btmauk.com/wp-content/uploads/2021/08/BTMA-Tyre-Management-VANS-Leaflet-v2-August-2021.pdf">btmauk.com</a></p>

              <p>A C after the rim size identifies a tyre for light commercial vehicles. XL means extra load. Some smaller vans can use XL tyres if the manufacturer specifies them. <a href="https://www.michelin.co.uk/auto/advice/van/reinforced-tyres-utility-vehicles">MICHELIN</a></p>

              <p>If the handbook calls for C-marked tyres, give that detail when you ring.</p>

              <p>You may see two load indexes separated by a slash on a commercial tyre. They refer to single and twin wheel fitments. If your van has twin rear wheels, mention that and read out both numbers as printed. <a href="https://www.goodyear.eu/en_gb/consumer/learn/van-tyres-vs-car-tyres.html">Goodyear UK</a></p>

              <p>Look for the tyre information label, often called the placard. If it shows more than one approved size or pressure setting, check which entry applies to your van. Pay attention to the front and rear positions and any instructions for a loaded vehicle.</p>

              <p>If the van is second-hand and the tyre already on it differs from the handbook, tell the fitter about both. Share the sidewall code and the approved specification so the fitter can check the difference before bringing a replacement.</p>

              <figure>
                <Image
                  src="/van-tyre-sidewall-load-marking.webp"
                  alt="Sidewall of a commercial van tyre"
                  width={1200}
                  height={800}
                  sizes="(min-width: 896px) 736px, 100vw"
                />
              </figure>

              <h2>What to check on the sidewall</h2>

              <p>Copy the full code from the affected tyre, including any C or XL marking, the load index and the speed symbol. The short size on an old receipt can leave out details the fitter needs to identify the right replacement.</p>

              <p>Read the markings on the affected wheel if you can reach it safely. If you&#x27;ve only been able to read a front tyre and the problem is at the rear, say so. Ask the fitter to check the rear specification before the visit.</p>

              <p>A clear photo can help if the lettering is dirty or you are unsure which characters belong to the code. Take it while the van is safely parked and you can stand clear of traffic.</p>

              <p>Our <Link href="/how-to-read-your-tyre-sidewall-markings">guide to tyre sidewall markings</Link> shows which parts to look for. If the code runs around the curve of the tyre and you can&#x27;t capture it in one photo, take two overlapping shots so the fitter can read the whole line.</p>

              <p>For a van shared across jobs, keep a photo of the vehicle&#x27;s tyre label with the booking details. Add the wheel position when you save a photo of a tyre. If someone reports a problem at the rear, you&#x27;ll know what the photo actually shows.</p>

              <p>If you can&#x27;t safely see the full code, give the make, model and anything you can read from the handbook or placard. Say which parts you could confirm. Let the fitter check the tyre if reaching it would put you close to traffic.</p>

              <h2>Common van tyre problems</h2>

              <p>Tell the fitter whether you found a puncture, saw a pressure warning or noticed wear. Where the problem appears and whether it has happened before can help the fitter decide what needs checking.</p>

              <h3>Punctures</h3>

              <p>A fitter needs to inspect the tyre before deciding whether a puncture can be repaired. Tell them where you spotted the damage, whether the tyre went flat and whether the van was driven after it began losing air.</p>

              <p>If you found the van flat in the depot at the start of a shift, say that when you call. A driver who heard a noise during a delivery can report what happened before the van stopped.</p>

              <p>Read our <Link href="/can-a-tyre-puncture-be-repaired-bristol">guide to when a tyre puncture can be repaired</Link>.</p>

              <h3>Pressure loss</h3>

              <p>If a pressure warning comes back, note which tyre it refers to if the display identifies it. If you&#x27;ve already taken a reading while the van was safely parked, share the reading and when you took it. Keep the reading to hand when you call.</p>

              <p>When you check cold tyre pressures in a safe place, use the vehicle&#x27;s recommended setting for the wheel position and load. Our <Link href="/tyre-pressure-warning-light-bristol">tyre pressure warning light guide</Link> explains what to do when the warning comes on. <a href="https://btmauk.com/wp-content/uploads/2021/08/BTMA-Tyre-Management-VANS-Leaflet-v2-August-2021.pdf">btmauk.com</a></p>

              <h3>Uneven wear</h3>

              <p>Look at the tread in a safe place before setting off. If one edge looks more worn than the rest, remember which tyre it was and which edge you saw. That gives the fitter a clearer starting point than saying the tyres look worn. <a href="https://btmauk.com/wp-content/uploads/2021/08/BTMA-Tyre-Management-VANS-Leaflet-v2-August-2021.pdf">btmauk.com</a></p>

              <p>If a driver reports wear at the end of a shift, make a note before the van changes hands. Pass it to whoever is booking the check. Our <Link href="/the-dangers-of-worn-tyres-dont-compromise-your-safety-call-rapid-mobile-tyres">guide to worn tyres</Link> explains tread checks and why wear matters.</p>

              <figure>
                <Image
                  src="/driver-checking-van-tyre-tread.webp"
                  alt="Van driver checking tyre tread before a job"
                  width={1200}
                  height={800}
                  sizes="(min-width: 896px) 736px, 100vw"
                />
              </figure>

              <h2>Where can you have van tyres fitted in Bristol?</h2>

              <p>A mobile visit can work at a depot, job site, home or suitable roadside location. The fitter needs room to reach the affected wheel and work clear of moving vehicles. Explain where the van is currently parked when you arrange the visit.</p>

              <h3>At a depot or job site</h3>

              <p>Give the fitter the entrance they should use, especially if the address takes visitors to a different gate. At a shared yard, give the unit or bay and say who can let the fitter in.</p>

              <p>If the van sits next to a loading area, tell the fitter what else uses that space. Ask whoever manages the site where fitting can take place. If the affected wheel faces a wall or a busy lane, mention that before the visit.</p>

              <p>If you&#x27;re working at a site you don&#x27;t usually visit, check the parking and access details with your site contact. Give the fitter a reference they can see from the entrance, such as a bay number or the name on the unit.</p>

              <figure>
                <Image
                  src="/van-tyre-fitted-at-depot.webp"
                  alt="Van tyre being fitted at a depot"
                  width={1200}
                  height={800}
                  sizes="(min-width: 896px) 736px, 100vw"
                />
              </figure>

              <h3>At home</h3>

              <p>If the van is on a driveway, explain how much room there is on the side that needs work. Mention a sloping drive or a wheel close to a wall. See <Link href="/tyre-replacement-at-home-bristol">tyre replacement at home in Bristol</Link> for visit details.</p>

              <p>A mobile fitting lets you arrange a replacement where the van is parked, provided the site is suitable. If you&#x27;re deciding how to get the work done, compare <Link href="/mobile-tyre-fitting-vs-garage-bristol">mobile tyre fitting and a garage visit</Link> before you book.</p>

              <h3>At the roadside</h3>

              <p>A lay-by or parking area may give enough space for a visit, depending on its layout and how close it is to traffic. Describe the spot before the fitter comes out. A van outside the lane can still be too close to passing traffic.</p>

              <p>Keep clear of traffic and follow the breakdown guidance if you&#x27;re stranded. Never inspect or change a tyre on a live carriageway or motorway hard shoulder. <a href="https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287">Highway Code guidance on breakdowns and incidents</a></p>

              <p>Once you&#x27;re somewhere safe, use the <Link href="/emergency-mobile-tyre-fitting-bristol">emergency mobile tyre fitting page</Link> if you need urgent help with the tyre. Explain where the van has stopped and what room there is around it.</p>

              <h2>What to tell Rapid Mobile Tyres when you call</h2>

              <p>Start with the van&#x27;s make and model, the tyre size and the location. If someone else is meeting the fitter, check that they know which wheel has the problem and can give access to the van.</p>

              <ul>
                <li><strong>The vehicle and the wheel.</strong> Say which corner needs attention and mention twin rear wheels if fitted. If there seems to be a problem on more than one wheel, describe each one.</li>
                <li><strong>The full tyre marking.</strong> Give the size, C or XL marking if present, load index and speed symbol. Say where you got the details, whether that&#x27;s the affected tyre, the placard or the handbook.</li>
                <li><strong>What happened.</strong> Explain whether the tyre is flat, losing pressure or worn. Mention any visible damage and whether you noticed it while parked or during a journey.</li>
                <li><strong>What&#x27;s in the van.</strong> Say whether the van is empty or carrying goods, tools or fixed equipment. Share anything about the load that affects how the fitter can access the van.</li>
                <li><strong>How to reach it.</strong> Give the postcode and the exact parking spot, or a nearby landmark if there is no street number. Let the fitter know about a gate, height restriction or narrow entrance.</li>
              </ul>

              <p>For a planned replacement, pass on the approved specification when you have it to hand. If one driver found the problem and another is making the call, ask the first driver which wheel it was and what they saw.</p>

              <p>If the van belongs to your employer or a hire company, check who can authorise a tyre change before you book. Have their contact details ready if someone else needs to approve the work.</p>

              <p>Rapid Mobile Tyres confirms tyre availability when you call. At the visit, the fitter installs the correct load-rated replacement, tightens the wheel to the manufacturer&#x27;s torque specification and checks the tyre pressures. Mention anything that changed since booking, such as a different parking spot.</p>

              <h2>Frequently asked questions</h2>
              {faqs.map(({ question, answer, source }) => (
                <div key={question}>
                  <h3>{question}</h3>
                  <p>
                    {answer}
                    {source && (
                      <>
                        {" "}
                        <a href={source.url}>{source.label}</a>
                      </>
                    )}
                  </p>
                </div>
              ))}

              <h2>Need van tyres in Bristol?</h2>

              <p>Call Rapid Mobile Tyres on <strong><a href="tel:+447494247246">07494 247246</a></strong> with your van details, the tyre marking and where you&#x27;re parked. See <Link href="/mobile-van-tyre-fitting-bristol">mobile van tyre fitting Bristol</Link>, check <Link href="/areas-we-cover">the areas we cover</Link> or use our <Link href="/contact">contact page</Link> to arrange a visit.</p>
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
