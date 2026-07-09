"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/**
 * FAQ signature : numéro mono accent, trigger + qui rotate en × à l'ouverture.
 * Exporter la data en constant PLAIN dans la page pour le schema FAQPage.
 */
export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <Accordion className="mt-9 border-t border-border">
      {items.map((item, i) => (
        <AccordionItem key={i} value={`q-${i}`} className="border-b border-border">
          <AccordionTrigger className="grid grid-cols-[auto_1fr_auto] items-start gap-4 py-5 text-left aria-expanded:[&>span:last-child]:rotate-45 aria-expanded:[&>span:last-child]:border-accent aria-expanded:[&>span:last-child]:text-accent">
            <span className="font-mono text-xs text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-lg leading-tight font-semibold">{item.q}</span>
            <span
              aria-hidden
              className="flex size-[30px] items-center justify-center rounded-full border border-border text-sm transition-all duration-300"
            >
              +
            </span>
          </AccordionTrigger>
          <AccordionContent className="pr-8 pb-5 pl-8 text-sm leading-relaxed text-muted">
            <p>{item.a}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
