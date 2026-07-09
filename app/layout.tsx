import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Fraunces, JetBrains_Mono } from "next/font/google";
import { Nav } from "@/components/marketing/nav";
import { NavMobile } from "@/components/marketing/nav-mobile";
import { Footer } from "@/components/marketing/footer";
import { StickyMobileCTA } from "@/components/marketing/sticky-mobile-cta";
import { SearchPalette } from "@/components/marketing/search-palette";
import { SITE } from "@/lib/site";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400"],
  variable: "--font-fraunces",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.brand}, agence SEO, SEA & visibilité IA à Paris`,
    template: `%s | ${SITE.brand}`,
  },
  description:
    "Agence d'acquisition à Paris : référencement naturel, Google Ads, création de sites rapides et visibilité dans ChatGPT, Perplexity et les AI Overviews.",
  openGraph: { type: "website", siteName: SITE.brand, locale: "fr_FR" },
  twitter: { card: "summary_large_image", site: SITE.twitterHandle },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${bricolage.variable} ${fraunces.variable} ${jetbrains.variable}`}
    >
      <body className="antialiased">
        <a
          href="#contenu"
          className="absolute -left-full top-0 z-50 rounded-br-lg bg-accent px-4 py-2 text-sm font-bold text-bg focus:left-0"
        >
          Aller au contenu
        </a>
        <NavMobile />
        <Nav />
        <main id="contenu" className="md:pt-16">{children}</main>
        <Footer />
        <StickyMobileCTA />
        <SearchPalette />
      </body>
    </html>
  );
}
