import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import FloatingButtons from "@/components/FloatingButtons";
import CookieBanner from "@/components/CookieBanner";
import { siteConfig } from "@/lib/data";

const GTM_ID = "GTM-MXDN8DVC";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rapid-tyres.com"),
  title: "Rapid Mobile Tyres Bristol | 24/7 Emergency Tyre Fitting",
  description:
    "Rapid Mobile Tyres Bristol offers 24/7 emergency tyre fitting, jump starts and fuel delivery across Bristol, with fast 45–60 minute response.",
  openGraph: {
    title: "Rapid Mobile Tyres Bristol | 24/7 Emergency Tyre Fitting",
    description:
      "Rapid Mobile Tyres Bristol offers 24/7 emergency tyre fitting, jump starts and fuel delivery across Bristol, with fast 45–60 minute response.",
    images: [{ url: "/rapid-mobile-tyres-open-graph.webp" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rapid Mobile Tyres Bristol | 24/7 Emergency Tyre Fitting",
    description:
      "Rapid Mobile Tyres Bristol offers 24/7 emergency tyre fitting, jump starts and fuel delivery across Bristol, with fast 45–60 minute response.",
    images: ["/rapid-mobile-tyres-open-graph.webp"],
  },
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: "https://rapid-tyres.com",
};

export default function RootLayout({
  children,
  businessSchema,
}: Readonly<{
  children: React.ReactNode;
  businessSchema: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {businessSchema}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webSiteSchema).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <FloatingButtons />
        <CookieBanner />
      </body>
    </html>
  );
}
