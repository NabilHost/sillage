import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Icône Apple touch : wordmark abrégé « e » + point accent sur obsidienne. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0A0A0A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#FFFFFF",
        }}
      >
        <span style={{ fontSize: 118, fontWeight: 800, lineHeight: 1, display: "flex" }}>e</span>
        <span
          style={{
            width: 24,
            height: 24,
            borderRadius: 999,
            background: "#FF6B35",
            display: "flex",
            marginLeft: 8,
            marginTop: 54,
          }}
        />
      </div>
    ),
    { ...size },
  );
}
