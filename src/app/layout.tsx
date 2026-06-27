import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import MobileStickyFooter from "@/components/MobileStickyFooter";
import SplashScreen from "@/components/SplashScreen";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://industrialbearingchaincentre.in"),
  title: {
    default: "Industrial Bearing & Chain Centre | Bearings, Chains & Belts — Hubballi",
    template: "%s | Industrial Bearing & Chain Centre",
  },
  description:
    "Leading supplier of industrial bearings, V-belts, roller chains, sprockets, conveyor belts & rice mill spares in Hubballi, Karnataka. Genuine SKF, FAG, NTN, Fenner, Rolon brands. GSTIN: 29BRWPA5389N1ZO.",
  keywords: [
    "industrial bearings hubballi",
    "SKF bearings hubli",
    "V-belt supplier Karnataka",
    "roller chain sprockets hubballi",
    "conveyor belt supplier Karnataka",
    "rice mill spare parts hubli",
    "Fenner Poly-F belts",
    "chain pulley block hubballi",
    "crusher spares hubli",
    "industrial bearing chain centre",
    "IBCC hubballi",
    "bearing supplier gokul road",
    "bearing supplier hubli",
    "industrial spare parts hubli",
    "bearing supplier Karnataka",
    "Fenner belt dealer Hubballi",
    "SKF bearing dealer Hubballi",
    "roller chain dealer Karnataka",
    "rice mill spares Karnataka",
    "stone crusher spares Hubballi",
    "conveyor belt dealer hubli",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Industrial Bearing & Chain Centre",
    title: "Industrial Bearing & Chain Centre | Hubballi",
    description:
      "Established 2016. Genuine industrial bearings, chains, belts & spare parts. Serving Karnataka industries. Call: 7349049883.",
    images: [{ url: "/images/plant home page.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Bearing & Chain Centre | Hubballi, Karnataka",
    description:
      "Genuine SKF, FAG, NTN, Fenner bearings, chains & belts. Plot #29, Industrial Area, Gokul Road, Hubballi.",
  },
  robots: { index: true, follow: true },
  authors: [{ name: "Industrial Bearing & Chain Centre" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#0B3D91" />
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Hubballi" />
        <meta name="geo.position" content="15.355334;75.1118741" />
        <meta name="ICBM" content="15.355334, 75.1118741" />
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Industrial Bearing & Chain Centre",
              "alternateName": "IBCC Hubballi",
              "description": "Authorised stockist of SKF, FAG, NTN, Fenner, Rolon bearings, V-belts, roller chains, sprockets, conveyor belts and industrial spare parts in Hubballi, Karnataka.",
              "url": "https://www.industrialbearingchaincentre.in",
              "telephone": ["+917349049883", "+918147027162"],
              "email": "industrialbearing.hubli@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Plot #29, Industrial Area, 2nd Gate, Gokul Road",
                "addressLocality": "Hubballi",
                "addressRegion": "Karnataka",
                "postalCode": "580030",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 15.355334,
                "longitude": 75.1118741
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
                  "opens": "09:30",
                  "closes": "19:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Sunday",
                  "opens": "10:00",
                  "closes": "14:00"
                }
              ],
              "priceRange": "₹₹",
              "currenciesAccepted": "INR",
              "paymentAccepted": "Cash, UPI, Bank Transfer",
              "areaServed": "Karnataka",
              "foundingDate": "2016",
              "taxID": "29BRWPA5389N1ZO",
              "sameAs": [
                "https://maps.app.goo.gl/o3DX6i8Z5LVCr9Q9A"
              ],
              "logo": "https://www.industrialbearingchaincentre.in/favicon.png",
              "image": "https://www.industrialbearingchaincentre.in/images/plant home page.png"
            })
          }}
        />
        {/* Organization Schema for Logo & Brand Authority */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Industrial Bearing & Chain Centre",
              "url": "https://www.industrialbearingchaincentre.in",
              "logo": "https://www.industrialbearingchaincentre.in/favicon.png",
              "image": "https://www.industrialbearingchaincentre.in/favicon.png"
            })
          }}
        />
      </head>
      <body className="font-sans antialiased pb-16 md:pb-0">
        <SplashScreen />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <MobileStickyFooter />
      </body>
    </html>
  );
}
