import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
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
  metadataBase: new URL("https://hj-advokatbyra.se"),
  title: {
    default: "HJ Advokatbyrå | Affärsjuridisk rådgivning",
    template: "%s | HJ Advokatbyrå",
  },
  description:
    "HJ Advokatbyrå erbjuder affärsjuridisk rådgivning inom bolagsrätt, transaktioner, tvistlösning och kommersiella avtal.",
  openGraph: {
    title: "HJ Advokatbyrå",
    description:
      "Affärsjuridisk rådgivning för bolag, ägare och ledningar.",
    locale: "sv_SE",
    siteName: "HJ Advokatbyrå",
    type: "website",
  },
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
