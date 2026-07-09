/**
 * Défilement infini des secteurs/références. Wordmarks typographiques
 * (pas de faux logos SVG). La liste est doublée pour la boucle continue.
 */
const REFERENCES = [
  "Mobilier Delatour",
  "Nexa RH",
  "Forges de l'Ouest",
  "Maison Orèle",
  "Cabinet Arpège",
  "Volt Cycles",
  "Atelier Brume",
  "Praxo Santé",
];

export function MarqueeLogos() {
  const items = [...REFERENCES, ...REFERENCES];
  return (
    <div
      className="relative overflow-hidden border-y border-border py-5 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
      aria-label="Ils nous font confiance"
    >
      <div className="flex w-max animate-marquee gap-14 motion-reduce:animate-none">
        {items.map((name, i) => (
          <span
            key={i}
            aria-hidden={i >= REFERENCES.length}
            className="whitespace-nowrap font-mono text-sm text-muted-2 transition-colors hover:text-muted"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
