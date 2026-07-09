"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useReveal } from "./use-reveal";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, isVisible } = useReveal();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
      animate={
        isVisible
          ? {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
            }
          : {}
      }
      className={`motion-reduce:transition-none motion-reduce:transform-none ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
}
