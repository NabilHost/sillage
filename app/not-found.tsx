import Link from "next/link";
import { MagneticButton } from "@/components/animations/magnetic-button";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-start px-4 py-28 md:px-8 md:py-40 lg:px-12">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-3 text-[clamp(2.2rem,5vw,3.8rem)] font-extrabold leading-[1.04] tracking-[-0.03em]">
        Page <em className="em-accent">introuvable</em>.
      </h1>
      <p className="mt-4 max-w-md text-lg text-muted">
        Ironique pour une agence de référencement, on vous l&apos;accorde. Le contenu a
        peut-être été déplacé.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <MagneticButton href="/">Retour à l&apos;accueil</MagneticButton>
        <Link
          href="/contact"
          className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-[13px] font-bold text-muted transition-colors hover:border-accent/40 hover:text-text"
        >
          Signaler le lien cassé
        </Link>
      </div>
    </div>
  );
}
