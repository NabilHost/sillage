"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS, NAV_SERVICES } from "@/lib/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/** Header mobile sticky (backdrop-blur obligatoire) + menu fullscreen. */
export function NavMobile() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="sticky top-0 z-40 flex items-center justify-between border-b border-border/50 bg-bg/80 px-4 py-3.5 backdrop-blur-xl md:hidden">
        <Link href="/" className="flex items-baseline text-lg font-extrabold tracking-tight">
          essor
          <span aria-hidden className="ml-1 size-2 rounded-full bg-accent" />
        </Link>
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          className="rounded-full border border-border px-3.5 py-1.5 text-[13px] font-semibold"
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-bg md:hidden">
          <div className="flex items-center justify-between border-b border-border/50 px-4 py-3.5">
            <Link href="/" onClick={() => setOpen(false)} className="flex items-baseline text-lg font-extrabold tracking-tight">
              essor
              <span aria-hidden className="ml-1 size-2 rounded-full bg-accent" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full border border-border px-3.5 py-1.5 text-[13px] font-semibold"
            >
              Fermer
            </button>
          </div>

          <nav aria-label="Navigation mobile" className="flex-1 overflow-y-auto px-4 py-6">
            <Accordion defaultValue="services">
              <AccordionItem value="services" className="border-b border-border">
                <AccordionTrigger className="flex items-center justify-between py-4 text-left text-lg font-semibold aria-expanded:[&>span]:rotate-45">
                  Services
                  <span aria-hidden className="text-accent transition-transform duration-300">+</span>
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  {NAV_SERVICES.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-3 py-3 transition-colors hover:bg-white/[0.04]"
                    >
                      <span className="block text-[15px] font-semibold">{s.label}</span>
                      <span className="mt-0.5 block text-[13px] text-muted-2">{s.desc}</span>
                    </Link>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-border py-4 text-lg font-semibold"
              >
                {l.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-6 flex items-center justify-center gap-2 rounded-full bg-accent py-3.5 text-[15px] font-bold text-bg"
            >
              Audit gratuit <span aria-hidden>↗</span>
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
