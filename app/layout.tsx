import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { createPageMetadata, siteUrl } from "@/app/lib/seo";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
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

const homeTitle = "HandelsJuristerna | Juristbyrå i Göteborg";
const homeDescription =
  "Sveriges största studentdrivna juristbyrå. HandelsJuristerna erbjuder juridisk rådgivning för företag, organisationer och privatpersoner i Göteborg.";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: homeTitle,
    description: homeDescription,
    path: "/",
    keywords: [
      "jurist Göteborg",
      "juridisk hjälp Göteborg",
      "juridiska tjänster",
    ],
  }),
  metadataBase: new URL(siteUrl),
  applicationName: "HandelsJuristerna",
  manifest: "/site.webmanifest",
  title: {
    default: homeTitle,
    template: "%s | HandelsJuristerna",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: [{ url: "/favicon.ico" }],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  appleWebApp: {
    capable: true,
    title: "HandelsJuristerna",
    statusBarStyle: "default",
  },
  authors: [{ name: "HandelsJuristerna", url: siteUrl }],
  creator: "HandelsJuristerna",
  publisher: "HandelsJuristerna",
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
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
