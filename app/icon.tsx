import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** Favicon : monogramme « e » + point accent, repris du wordmark Essor. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0A0A0A",
          borderRadius: 14,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#FFFFFF",
        }}
      >
        <span style={{ fontSize: 44, fontWeight: 800, lineHeight: 1, display: "flex" }}>e</span>
        <span
          style={{
            width: 9,
            height: 9,
            borderRadius: 999,
            background: "#FF6B35",
            display: "flex",
            marginLeft: 3,
            marginTop: 20,
          }}
        />
      </div>
    ),
    { ...size },
  );
}
