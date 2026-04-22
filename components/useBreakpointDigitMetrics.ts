"use client";

import { useEffect, useState } from "react";

export type DigitMetrics = { px: number; col: number; comma: number };

function metricsForWidth(w: number): DigitMetrics {
  let px: number;
  if (w >= 1440) px = 36;
  else if (w >= 1024) px = 42;
  else px = 55;
  /** Column wide enough for tabular digits at this font size (avoids clipping at lg / 1440). */
  const col = Math.max(28, Math.ceil(px * 0.68));
  const comma = Math.max(10, Math.ceil(px * 0.24));
  return { px, col, comma };
}

/** Odometer + icon row: one shared size for icon box and digit strip (lg / 1440px use smaller px). */
export function useBreakpointDigitMetrics(): DigitMetrics {
  const [m, setM] = useState<DigitMetrics>(() =>
    metricsForWidth(
      typeof window !== "undefined" ? window.innerWidth : 768
    )
  );

  useEffect(() => {
    const update = () => setM(metricsForWidth(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return m;
}
