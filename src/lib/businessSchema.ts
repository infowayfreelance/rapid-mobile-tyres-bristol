import { siteConfig } from "@/lib/data";

export const BUSINESS_ID = "https://rapid-tyres.com/#business";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: siteConfig.name,
  url: "https://rapid-tyres.com",
  telephone: "+447494247246",
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ryeleaze, Shirehampton",
    addressLocality: "Bristol",
    postalCode: "BS11 9FN",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.4882,
    longitude: -2.6866,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  priceRange: "££",
  currenciesAccepted: "GBP",
  paymentAccepted: "Cash, Credit Card, Debit Card",
  areaServed: [
    "Bristol",
    "Bath",
    "Bridgwater",
    "Newport",
    "Chepstow",
    "Weston-super-Mare",
    "Gloucester",
    "Magor",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Mobile Tyre & Roadside Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile Tyre Fitting",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Emergency Mobile Tyre Fitting",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Jump Start",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Fuel Delivery",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Van Tyre Fitting",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SUV Tyre Fitting",
        },
      },
    ],
  },
  sameAs: ["https://www.facebook.com/rapidmobiletyresltd"],
  image: "https://rapid-tyres.com/rapid-mobile-tyres-open-graph.webp",
  // Matches the Google rating and review count already shown on the
  // homepage (src/components/Hero.tsx) — not a separate/invented figure.
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "324",
    bestRating: "5",
  },
};
