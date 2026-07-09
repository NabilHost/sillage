"use client";

import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Perspective tilt au hover. Rotation max 6deg par axe, désactivé sous 768px.
 * Le parent doit avoir [perspective:1200px].
 */
export function TiltCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current || window.innerWidth < 768) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.setProperty("--tx", `${x * 6}deg`);
    ref.current.style.setProperty("--ty", `${-y * 6}deg`);
  };

  const handleLeave = () => {
    if (!ref.current) return;
    ref.current.style.setProperty("--tx", "0deg");
    ref.current.style.setProperty("--ty", "0deg");
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn(
        "transition-transform duration-300 hover:-translate-y-1 motion-reduce:transform-none",
        className
      )}
      style={{
        transform: "rotateY(var(--tx, 0deg)) rotateX(var(--ty, 0deg))",
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  );
}
