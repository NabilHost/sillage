/** Injecte un ou plusieurs schemas JSON-LD, rendus côté serveur. */
export function JsonLd({ schemas }: { schemas: object[] }) {
  return (
    <>
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </>
  );
}
