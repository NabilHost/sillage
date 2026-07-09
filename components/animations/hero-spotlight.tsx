"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Spotlight radial qui suit le curseur derrière le hero.
 * L'accent est hardcodé dans le gradient (les CSS vars ne fonctionnent pas
 * dans les positions radial).
 */
export function HeroSpotlight({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const handleMove = (e: React.MouseEvent) => {
    const target = e.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    target.style.setProperty("--x", `${e.clientX - rect.left}px`);
    target.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <section
      onMouseMove={handleMove}
      className={cn("relative overflow-hidden", className)}
      style={{
        backgroundImage:
          "radial-gradient(600px circle at var(--x, 50%) var(--y, 20%), rgba(255,107,53,0.07), transparent 40%)",
      }}
    >
      {children}
    </section>
  );
}
