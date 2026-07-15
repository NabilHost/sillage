"use client";

import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_SERVICES } from "@/lib/site";

const PAGES = [
  { label: "Accueil", href: "/" },
  { label: "Méthode & équipe", href: "/a-propos" },
  { label: "Contact / Audit gratuit", href: "/contact" },
];

const ARTICLES = [
  { label: "Refondre son site sans perdre son référencement", href: "/blog/refonte-site-sans-perdre-seo" },
  { label: "Optimiser sa fiche Google Business Profile", href: "/blog/optimiser-fiche-google-business" },
  { label: "Comment être cité par ChatGPT ?", href: "/blog/etre-cite-par-chatgpt" },
  { label: "Combien de temps pour des résultats SEO ?", href: "/blog/combien-de-temps-seo-resultats" },
  { label: "SEO ou SEA : que choisir ?", href: "/blog/seo-ou-sea-que-choisir" },
  { label: "Combien coûte une agence SEO en 2026 ?", href: "/blog/cout-agence-seo-2026" },
  { label: "Quel budget Google Ads pour être rentable ?", href: "/blog/budget-google-ads-rentable" },
  { label: "AI Overviews : 6 mois de données", href: "/blog/ai-overviews-impact-seo" },
];

/** Palette ⌘K : ouverte par raccourci ou CustomEvent "open-search-palette". */
export function SearchPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-search-palette", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-search-palette", onOpen);
    };
  }, []);

  const go = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 pt-[18vh] backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div onClick={(e) => e.stopPropagation()} className="w-full max-w-lg px-4">
        <Command
          label="Rechercher sur le site"
          className="overflow-hidden rounded-2xl border border-border bg-bg-2/95 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl"
        >
          <Command.Input
            autoFocus
            placeholder="Rechercher une page, un service, un article…"
            className="w-full border-b border-border bg-transparent px-5 py-4 font-mono text-sm text-text outline-none placeholder:text-muted-2"
          />
          <Command.List className="max-h-[320px] overflow-y-auto p-2">
            <Command.Empty className="px-4 py-8 text-center text-sm text-muted-2">
              Aucun résultat.
            </Command.Empty>

            <Command.Group heading="Services" className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:text-muted-2">
              {NAV_SERVICES.map((s) => (
                <Command.Item
                  key={s.href}
                  value={s.label}
                  onSelect={() => go(s.href)}
                  className="cursor-pointer rounded-lg px-3 py-2.5 text-sm text-muted data-[selected=true]:bg-white/[0.06] data-[selected=true]:text-text"
                >
                  {s.label}
                </Command.Item>
              ))}
            </Command.Group>

            <Command.Group heading="Pages" className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:text-muted-2">
              {PAGES.map((p) => (
                <Command.Item
                  key={p.href}
                  value={p.label}
                  onSelect={() => go(p.href)}
                  className="cursor-pointer rounded-lg px-3 py-2.5 text-sm text-muted data-[selected=true]:bg-white/[0.06] data-[selected=true]:text-text"
                >
                  {p.label}
                </Command.Item>
              ))}
            </Command.Group>

            <Command.Group heading="Articles" className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:text-muted-2">
              {ARTICLES.map((a) => (
                <Command.Item
                  key={a.href}
                  value={a.label}
                  onSelect={() => go(a.href)}
                  className="cursor-pointer rounded-lg px-3 py-2.5 text-sm text-muted data-[selected=true]:bg-white/[0.06] data-[selected=true]:text-text"
                >
                  {a.label}
                </Command.Item>
              ))}
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  );
}
