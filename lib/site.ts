/** Configuration centrale. Remplacez url par le domaine définitif avant prod. */

export const SITE = {
  url: "https://www.agence-essor.fr",
  brand: "Essor",
  slogan: "Visible sur Google, cité par les IA",
  twitterHandle: "@essor_agence",
  email: "contact@agence-essor.fr",
  phone: "+33695972290",
  phoneDisplay: "06 95 97 22 90",
  street: "194 quai de Jemmapes",
  city: "Paris",
  zip: "75010",
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
  { href: "/resultats", label: "Résultats" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;
