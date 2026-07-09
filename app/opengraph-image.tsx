import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Sillage, agence SEO, SEA et visibilité IA à Paris";

/** OG image globale (fallback). Les pages clés peuvent définir la leur. */
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A0A0A",
          color: "#FFFFFF",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          width: "100%",
          height: "100%",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", fontSize: 44, fontWeight: 800 }}>
          <span>sillage</span>
          <span
            style={{
              marginLeft: 8,
              width: 16,
              height: 16,
              borderRadius: 999,
              background: "#FF6B35",
              display: "flex",
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 24, opacity: 0.55, marginBottom: 18, display: "flex" }}>
            Agence d&apos;acquisition, Paris
          </div>
          <div style={{ fontSize: 72, fontWeight: 800, letterSpacing: -2, lineHeight: 1.05, display: "flex", flexDirection: "column" }}>
            <span>Visible sur Google.</span>
            <span style={{ color: "#FF6B35" }}>Cité par les IA.</span>
          </div>
        </div>
        <div style={{ fontSize: 22, opacity: 0.5, display: "flex" }}>sillage-agence.fr</div>
      </div>
    ),
    { ...size }
  );
}
