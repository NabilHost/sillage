"use client";

import Link from "next/link";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Bouton avec effet magnétique (facteur 0.3, reset au mouseLeave).
 * Icône flèche dans un cercle contrasté, padding asymétrique.
 */
export function MagneticButton({
  href,
  children,
  variant = "solid",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current || window.innerWidth < 768) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * 0.3;
    const y = (e.clientY - r.top - r.height / 2) * 0.3;
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0, 0)";
  };

  return (
    <Link
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full py-2.5 pl-5 pr-2.5 text-[13px] font-bold transition-colors motion-reduce:transform-none",
        variant === "solid"
          ? "bg-accent text-bg hover:bg-accent-deep"
          : "border border-border bg-white/[0.03] text-text hover:border-accent/40",
        className
      )}
      style={{ transition: "transform 200ms cubic-bezier(0.16, 1, 0.3, 1), background-color 200ms, border-color 200ms" }}
    >
      {children}
      <span
        aria-hidden
        className={cn(
          "flex size-[30px] items-center justify-center rounded-full font-mono text-sm",
          variant === "solid" ? "bg-bg text-accent" : "bg-accent text-bg"
        )}
      >
        ↗
      </span>
    </Link>
  );
}
