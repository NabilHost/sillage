"use client";

import { useMemo } from "react";

/**
 * Sparkline SVG : path dessiné au mount via stroke-dasharray,
 * aire sous la courbe en gradient accent, courbe monotone croissante.
 */
export function SparklineLive({ className }: { className?: string }) {
  const { linePath, areaPath } = useMemo(() => {
    const points = [8, 14, 12, 22, 26, 24, 34, 40, 44, 52];
    const w = 200;
    const h = 60;
    const step = w / (points.length - 1);
    const coords = points.map((p, i) => [i * step, h - (p / 56) * h] as const);
    const line = coords.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
    const area = `${line} L${w},${h} L0,${h} Z`;
    return { linePath: line, areaPath: area };
  }, []);

  return (
    <svg
      viewBox="0 0 200 60"
      role="img"
      aria-label="Courbe de croissance du trafic organique"
      className={className}
    >
      <title>Croissance du trafic organique</title>
      <defs>
        <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FF6B35" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill="url(#sparkFill)" />
      <path
        d={linePath}
        fill="none"
        stroke="#FF6B35"
        strokeWidth="2"
        strokeDasharray="500"
        strokeDashoffset="500"
        style={{ animation: "sparklineDraw 2s cubic-bezier(0.16,1,0.3,1) forwards" }}
      />
    </svg>
  );
}
