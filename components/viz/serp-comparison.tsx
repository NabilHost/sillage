/**
 * Comparaison SERP classique vs AI Overview : deux mockups côte à côte.
 * Décoratif mais fidèle, montre ce que « être cité » veut dire.
 */
function FakeLine({ w, strong = false }: { w: string; strong?: boolean }) {
  return (
    <div
      className={`h-1.5 rounded-full ${strong ? "bg-white/25" : "bg-white/10"}`}
      style={{ width: w }}
    />
  );
}

export function SerpComparison() {
  return (
    <figure className="m-0 grid gap-3 sm:grid-cols-2" role="img" aria-label="Comparaison entre une page de résultats classique et une réponse IA citant Essor">
      {/* SERP classique */}
      <div className="rounded-2xl border border-border bg-bg-3 p-4">
        <p className="mb-3 font-mono text-[10.5px] text-muted-2">recherche classique</p>
        <div className="space-y-3.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="space-y-1.5">
              <FakeLine w={i === 0 ? "70%" : "62%"} strong />
              <FakeLine w="88%" />
              <FakeLine w="54%" />
            </div>
          ))}
        </div>
        <p className="mt-3.5 text-[11px] text-muted-2">10 liens, l&apos;internaute compare.</p>
      </div>

      {/* AI Overview */}
      <div className="rounded-2xl border border-accent/25 bg-bg-3 p-4">
        <p className="mb-3 flex items-center gap-1.5 font-mono text-[10.5px] text-accent">
          <span aria-hidden className="size-1 rounded-full bg-accent motion-safe:animate-pulse" />
          réponse IA
        </p>
        <div className="space-y-1.5">
          <FakeLine w="92%" />
          <FakeLine w="85%" />
          <FakeLine w="88%" />
          <FakeLine w="46%" />
        </div>
        <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent-soft px-2.5 py-1">
          <span className="font-mono text-[10.5px] text-accent">↗ essoragence.fr</span>
        </div>
        <p className="mt-3 text-[11px] text-muted-2">Une réponse, une source citée.</p>
      </div>
    </figure>
  );
}
