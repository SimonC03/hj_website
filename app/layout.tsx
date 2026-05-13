import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { createPageMetadata, siteUrl } from "@/app/lib/seo";
import { cookiebot, firm, siteAssets, siteMetadata } from "@/app/data/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-hj-sans",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-hj-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  ...createPageMetadata({
    title: siteMetadata.homeTitle,
    description: siteMetadata.homeDescription,
    path: "/",
    keywords: siteMetadata.homeKeywords,
  }),
  metadataBase: new URL(siteUrl),
  applicationName: firm.displayName,
  manifest: "/site.webmanifest",
  title: {
    default: siteMetadata.homeTitle,
    template: `%s | ${firm.displayName}`,
  },
  icons: {
    icon: [
      { url: siteAssets.icons.faviconSvg, type: "image/svg+xml" },
      { url: siteAssets.icons.faviconPng, sizes: "96x96", type: "image/png" },
    ],
    shortcut: [{ url: siteAssets.icons.faviconIco }],
    apple: [
      { url: siteAssets.icons.appleTouchIcon, sizes: "180x180", type: "image/png" },
    ],
  },
  appleWebApp: {
    capable: true,
    title: firm.displayName,
    statusBarStyle: "default",
  },
  authors: [{ name: firm.displayName, url: siteUrl }],
  creator: firm.displayName,
  publisher: firm.displayName,
  category: "Juridiska tjänster",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sv"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script
          id={cookiebot.id}
          src={cookiebot.src}
          data-cbid={cookiebot.cbid}
          data-blockingmode={cookiebot.blockingMode}
          strategy="beforeInteractive"
          type="text/javascript"
        />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
