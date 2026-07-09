"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

/**
 * Observe l'élément et déclenche l'animation quand il entre dans le viewport.
 * Le watcher usePathname() reset l'état à chaque navigation Next.js,
 * sinon les animations ne rejouent jamais quand on revient sur une page.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsVisible(false);

    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: "-40px 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [pathname]);

  return { ref, isVisible };
}
