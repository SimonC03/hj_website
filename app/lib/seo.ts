import type { Metadata } from "next";
import { firm } from "@/app/data/site";

export const siteUrl = "https://handelsjuristerna.se";

const siteName = firm.displayName;

const defaultKeywords = [
  "juristbyrå",
  "juristbyrå Göteborg",
  "juridisk rådgivning",
  "studentdriven juristbyrå",
  "HandelsJuristerna",
  "affärsjuridik",
  "avtalsrätt",
  "bolagsrätt",
];

const defaultImage = {
  url: "/web-app-manifest-512x512.png",
  width: 512,
  height: 512,
  alt: `${siteName} ikon`,
};

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    keywords: [...defaultKeywords, ...keywords],
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName,
      locale: "sv_SE",
      type: "website",
      images: [defaultImage],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: [defaultImage.url],
    },
  };
}
