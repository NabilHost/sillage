"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

/**
 * Nombre animé au scroll.
 * Rejoue à chaque navigation (usePathname) et au retour BFCache (pageshow),
 * sinon le compteur reste bloqué à sa dernière valeur via le bouton back.
 */
export function Counter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1800,
  className,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const [runId, setRunId] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const onPageShow = () => setRunId((n) => n + 1);
    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
  }, []);

  useEffect(() => {
    setDisplay(0);
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let started = false;

    const animate = () => {
      if (started) return;
      started = true;
      const t0 = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - t0) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 4); /* easeOutQuart */
        setDisplay(value * eased);
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    if (!("IntersectionObserver" in window)) {
      animate();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            animate();
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration, pathname, runId]);

  const formatted = new Intl.NumberFormat("fr-FR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(display);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
