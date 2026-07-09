"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useReveal } from "./use-reveal";

/**
 * Enfants qui apparaissent en cascade (delay incrémental 0.08s).
 * Usage : <Stagger><StaggerItem>…</StaggerItem>…</Stagger>
 */
export function Stagger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { ref, isVisible } = useReveal();
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.08 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
        },
      }}
      className={`motion-reduce:transition-none motion-reduce:transform-none ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
}
