"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV_LINKS, NAV_SERVICES } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Nav desktop : pill flottante avec backdrop blur, dropdown Services contrôlé.
 * usePathname watcher + onClick sur chaque lien pour fermer le menu
 * (indispensable quand l'URL cible = URL actuelle).
 */
export function Nav() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => setServicesOpen(false), [pathname]);

  useEffect(() => {
    const onDown = (e: PointerEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setServicesOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setServicesOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const closeMenu = () => setServicesOpen(false);

  return (
    <div className="fixed inset-x-0 top-4 z-40 hidden justify-center md:flex">
      <div ref={containerRef} className="relative">
        <nav
          aria-label="Navigation principale"
          className="flex items-center gap-1 rounded-full border border-border bg-bg-2/70 py-2 pl-5 pr-2 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_10px_40px_rgba(0,0,0,0.5)]"
        >
          <Link href="/" onClick={closeMenu} className="mr-3 flex items-baseline text-[17px] font-extrabold tracking-tight">
            essor
            <span aria-hidden className="ml-1 size-2 rounded-full bg-accent" />
          </Link>

          <button
            type="button"
            aria-expanded={servicesOpen}
            onClick={() => setServicesOpen((v) => !v)}
            className={cn(
              "flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[13px] font-semibold transition-colors duration-300",
              servicesOpen ? "bg-white/[0.06] text-text" : "text-muted hover:text-text"
            )}
          >
            Services
            <span
              aria-hidden
              className={cn("text-[10px] transition-transform duration-300", servicesOpen && "rotate-180")}
            >
              ▾
            </span>
          </button>

          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={closeMenu}
              aria-current={pathname === l.href ? "page" : undefined}
              className={cn(
                "rounded-full px-3.5 py-1.5 text-[13px] font-semibold transition-colors duration-300",
                pathname === l.href ? "bg-white/[0.06] text-text" : "text-muted hover:text-text"
              )}
            >
              {l.label}
            </Link>
          ))}

          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent("open-search-palette"))}
            className="ml-1 flex items-center gap-1.5 rounded-full border border-border bg-white/[0.04] px-2.5 py-1.5 font-mono text-[11.5px] text-muted transition-colors hover:border-accent/40"
          >
            <kbd className="font-mono">⌘K</kbd>
            <span className="hidden lg:inline">Rechercher</span>
          </button>

          <Link
            href="/contact"
            onClick={closeMenu}
            className="ml-1 flex items-center gap-2 rounded-full bg-accent py-2 pl-4 pr-2 text-[13px] font-bold text-bg transition-colors hover:bg-accent-deep"
          >
            Audit gratuit
            <span aria-hidden className="flex size-[26px] items-center justify-center rounded-full bg-bg font-mono text-xs text-accent">
              ↗
            </span>
          </Link>
        </nav>

        {/* Dropdown Services */}
        <div
          className={cn(
            "absolute left-1/2 top-[calc(100%+10px)] w-[640px] -translate-x-1/2 rounded-3xl border border-border bg-bg-2/95 p-2 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
            servicesOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0"
          )}
        >
          <div className="grid grid-cols-2 gap-1.5">
            {NAV_SERVICES.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                onClick={closeMenu}
                className="group rounded-2xl p-4 transition-colors hover:bg-white/[0.04]"
              >
                <p className="text-[14px] font-semibold text-text group-hover:text-accent">
                  {s.label}
                </p>
                <p className="mt-1 text-[12.5px] leading-snug text-muted-2">{s.desc}</p>
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            onClick={closeMenu}
            className="group mt-1.5 flex items-center justify-between rounded-2xl border border-accent/20 bg-accent-soft p-4 transition-colors hover:border-accent/40"
          >
            <div>
              <p className="text-[14px] font-semibold text-accent">Audit gratuit</p>
              <p className="mt-0.5 text-[12.5px] text-muted">
                État des lieux chiffré et trois priorités, sous 10 jours.
              </p>
            </div>
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
