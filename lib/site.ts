/** Configuration centrale. Remplacez url par le domaine définitif avant prod. */

export const SITE = {
  url: "https://www.agence-essor.fr",
  brand: "Essor",
  slogan: "Visible sur Google, cité par les IA",
  twitterHandle: "@essor_agence",
  email: "bonjour@agence-essor.fr",
  phone: "+33145000000",
  phoneDisplay: "01 45 00 00 00",
  street: "14 rue du Sentier",
  city: "Paris",
  zip: "75002",
} as const;

export const NAV_SERVICES = [
  {
    href: "/agence-seo",
    label: "Référencement naturel",
    desc: "Technique, contenu, autorité. Le canal qui reste.",
  },
  {
    href: "/agence-sea",
    label: "Google Ads",
    desc: "Campagnes pilotées à la marge, pas au clic.",
  },
  {
    href: "/creation-site-web",
    label: "Création de sites et d'applications",
    desc: "Sites et applications web, livrés prêts à référencer.",
  },
  {
    href: "/referencement-ia-geo",
    label: "Visibilité IA (GEO)",
    desc: "Être cité par ChatGPT, Perplexity et les AI Overviews.",
  },
] as const;

export const NAV_LINKS = [
  { href: "/a-propos", label: "Méthode" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;
