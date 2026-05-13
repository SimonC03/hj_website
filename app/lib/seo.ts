import type { Metadata } from "next";
import { firm, siteAssets, siteMetadata } from "@/app/data/site";

export const siteUrl = firm.url;

const siteName = firm.displayName;

const defaultKeywords = siteMetadata.defaultKeywords;

const defaultImage = {
  url: siteAssets.icons.defaultOpenGraph,
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
