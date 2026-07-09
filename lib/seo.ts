import type { Metadata } from "next";
import { SITE } from "./site";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  titleAbsolute?: boolean;
  noindex?: boolean;
  ogType?: "website" | "article";
};

/** Toutes les métadonnées passent par ce helper. */
export function generatePageMetadata({
  title,
  description,
  path,
  titleAbsolute = false,
  noindex = false,
  ogType = "website",
}: PageMeta): Metadata {
  const url = `${SITE.url}${path}`;
  return {
    title: titleAbsolute ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    robots: noindex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.brand,
      locale: "fr_FR",
      type: ogType,
    },
    twitter: {
      card: "summary_large_image",
      site: SITE.twitterHandle,
      title,
      description,
    },
  };
}
