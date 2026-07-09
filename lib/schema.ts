import { SITE } from "./site";

const ORG_ID = `${SITE.url}/#organization`;

export const AUTHOR_DEFAULT = {
  name: "Nabil Brahim",
  jobTitle: "Directeur & fondateur, SEA",
  sameAs: ["https://www.linkedin.com/in/nabil-brahim"],
};

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: SITE.brand,
    legalName: "Sillage Agence SAS",
    description:
      "Agence d'acquisition à Paris : référencement naturel (SEO), Google Ads (SEA), création de sites web et visibilité dans les moteurs de recherche IA (GEO).",
    url: `${SITE.url}/`,
    email: SITE.email,
    telephone: SITE.phone,
    foundingDate: "2019-03-01",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.street,
      addressLocality: SITE.city,
      postalCode: SITE.zip,
      addressCountry: "FR",
    },
    geo: { "@type": "GeoCoordinates", latitude: 48.8687, longitude: 2.3474 },
    areaServed: { "@type": "Country", name: "France" },
    knowsAbout: [
      "SEO",
      "SEA",
      "Google Ads",
      "Création de site web",
      "Generative Engine Optimization",
      "Core Web Vitals",
    ],
    sameAs: [
      "https://www.linkedin.com/company/sillage-agence",
      "https://x.com/sillage_agence",
      "https://www.youtube.com/@sillage-agence",
      "https://github.com/sillage-agence",
    ],
  };
}

export function serviceSchema(input: {
  path: string;
  name: string;
  serviceType: string;
  description: string;
  price?: string;
  priceUnit?: string;
}) {
  const url = `${SITE.url}${input.path}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: input.name,
    serviceType: input.serviceType,
    description: input.description,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "France" },
    url,
    ...(input.price
      ? {
          offers: {
            "@type": "Offer",
            priceCurrency: "EUR",
            price: input.price,
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: input.price,
              priceCurrency: "EUR",
              unitText: input.priceUnit ?? "mois, à partir de, HT",
            },
          },
        }
      : {}),
  };
}

export function articleSchema(input: {
  path: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  author?: typeof AUTHOR_DEFAULT;
}) {
  const url = `${SITE.url}${input.path}`;
  const author = input.author ?? AUTHOR_DEFAULT;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: input.headline,
    description: input.description,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    inLanguage: "fr-FR",
    mainEntityOfPage: url,
    author: {
      "@type": "Person",
      name: author.name,
      jobTitle: author.jobTitle,
      sameAs: author.sameAs,
      worksFor: { "@id": ORG_ID },
    },
    publisher: { "@id": ORG_ID },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE.url}${c.path}`,
    })),
  };
}

export function faqPageSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}

export function personSchema(input = AUTHOR_DEFAULT) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: input.name,
    jobTitle: input.jobTitle,
    sameAs: input.sameAs,
    worksFor: { "@id": ORG_ID },
  };
}
