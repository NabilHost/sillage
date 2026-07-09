import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Card double-border : le double bezel + inner padding crée la profondeur.
 * Ne pas supprimer un des deux borders.
 */
export function DoubleBezelCard({
  children,
  className,
  innerClassName,
}: {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <div className={cn("rounded-3xl border border-border bg-white/[0.02] p-1.5", className)}>
      <div className={cn("rounded-[18px] border border-border bg-bg-2 p-5 md:p-6", innerClassName)}>
        {children}
      </div>
    </div>
  );
}

/** Glow accent positionnable derrière le contenu d'une card. */
export function CardGlow({
  position = "top-right",
}: {
  position?: "top-right" | "bottom-left" | "top-left";
}) {
  const pos = {
    "top-right": "-right-12 -top-12",
    "bottom-left": "-left-12 -bottom-12",
    "top-left": "-left-12 -top-12",
  }[position];
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute ${pos} size-44 rounded-full bg-accent/15 blur-3xl`}
    />
  );
}
