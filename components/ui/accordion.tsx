"use client";

import {
  createContext,
  useContext,
  useId,
  useState,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

/**
 * Accordion accessible, contenu TOUJOURS rendu dans le DOM (caché par CSS
 * grid-rows quand fermé) : indexable par les crawlers et les LLM.
 * Ne pas remplacer par du conditional-render.
 */

const AccordionCtx = createContext<{
  open: string | null;
  setOpen: (v: string | null) => void;
}>({ open: null, setOpen: () => {} });

const ItemCtx = createContext<{ value: string; id: string }>({ value: "", id: "" });

export function Accordion({
  children,
  className,
  defaultValue = null,
}: {
  children: ReactNode;
  className?: string;
  defaultValue?: string | null;
}) {
  const [open, setOpen] = useState<string | null>(defaultValue);
  return (
    <AccordionCtx.Provider value={{ open, setOpen }}>
      <div className={className}>{children}</div>
    </AccordionCtx.Provider>
  );
}

export function AccordionItem({
  value,
  children,
  className,
}: {
  value: string;
  children: ReactNode;
  className?: string;
}) {
  const id = useId();
  return (
    <ItemCtx.Provider value={{ value, id }}>
      <div className={className}>{children}</div>
    </ItemCtx.Provider>
  );
}

export function AccordionTrigger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { open, setOpen } = useContext(AccordionCtx);
  const { value, id } = useContext(ItemCtx);
  const expanded = open === value;
  return (
    <button
      type="button"
      aria-expanded={expanded}
      aria-controls={`${id}-content`}
      id={`${id}-trigger`}
      onClick={() => setOpen(expanded ? null : value)}
      className={cn("w-full cursor-pointer", className)}
    >
      {children}
    </button>
  );
}

export function AccordionContent({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { open } = useContext(AccordionCtx);
  const { value, id } = useContext(ItemCtx);
  const expanded = open === value;
  return (
    <div
      role="region"
      id={`${id}-content`}
      aria-labelledby={`${id}-trigger`}
      className="grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
      style={{ gridTemplateRows: expanded ? "1fr" : "0fr" }}
    >
      <div className="overflow-hidden">
        <div className={className}>{children}</div>
      </div>
    </div>
  );
}
