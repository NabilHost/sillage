"use client";

import { useReveal } from "@/components/animations/use-reveal";

/**
 * Bar chart horizontal SVG-free : barres animées en scaleX au scroll.
 * Label à gauche, barre au milieu, valeur mono à droite (min 64px, pas de clipping).
 */
const DATA = [
  { label: "Compte hérité, à la reprise", value: 43, max: 43, dim: true },
  { label: "Mois 3, tracking reconstruit", value: 24, max: 43, dim: false },
  { label: "Mois 6, pilotage à la marge", value: 16, max: 43, dim: false },
];

export function CplBarChart() {
  const { ref, isVisible } = useReveal();

  return (
    <figure ref={ref} className="m-0">
      <div className="space-y-4">
        {DATA.map((d, i) => (
          <div key={d.label} className="grid grid-cols-[minmax(120px,1fr)_2.2fr_64px] items-center gap-4">
            <span className="text-[12.5px] leading-tight text-muted-2">{d.label}</span>
            <div className="h-6 overflow-hidden rounded-md bg-white/[0.04]">
              <div
                className={`h-full origin-left rounded-md ${d.dim ? "bg-accent/35" : "bg-accent"}`}
                style={{
                  width: `${(d.value / d.max) * 100}%`,
                  transform: isVisible ? "scaleX(1)" : "scaleX(0)",
                  transition: `transform 1.1s cubic-bezier(0.16,1,0.3,1) ${i * 0.12}s`,
                }}
              />
            </div>
            <span className="text-right font-mono text-sm text-text">{d.value} €</span>
          </div>
        ))}
      </div>
      <figcaption className="mt-4 text-[12px] text-muted-2">
        Coût par lead qualifié, mission industrie 2025. Source : Google Ads + CRM client.
      </figcaption>
    </figure>
  );
}
