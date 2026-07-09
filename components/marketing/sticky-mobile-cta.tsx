"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/** CTA flottant bas d'écran, mobile uniquement, apparaît après 600px de scroll. */
export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname === "/contact") return null;

  return (
    <div
      className={`fixed inset-x-4 bottom-4 z-30 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <Link
        href="/contact"
        className="flex items-center justify-center gap-2 rounded-full bg-accent py-3.5 text-[15px] font-bold text-bg shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
      >
        Demander l&apos;audit gratuit <span aria-hidden>↗</span>
      </Link>
    </div>
  );
}
