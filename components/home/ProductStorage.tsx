"use client";

import { IconDatabase } from "@tabler/icons-react";
import React from "react";
import OdometerCount from "@/components/OdometerCount";
import { useBreakpointDigitMetrics } from "@/components/useBreakpointDigitMetrics";

export default function ProductStorage() {
  const m = useBreakpointDigitMetrics();
  const iconSize = Math.round(m.px);

  return (
    <div className="flex shrink-0 items-center gap-6 sm:gap-8 md:gap-12">
      <div className="flex min-w-0 flex-col gap-0.5 sm:gap-1">
        <div className="flex items-center gap-2 sm:gap-3">
          <div
            className="flex shrink-0 items-center justify-center"
            style={{ width: m.px, height: m.px }}
            aria-hidden
          >
            <IconDatabase color="#004A77" size={iconSize} stroke={1.5} />
          </div>
          <OdometerCount end={262265} metrics={m} duration={2.45} />
        </div>
        <p className="text-center text-[10px] font-semibold leading-tight text-primary-950 sm:text-xs md:text-sm lg:text-base min-[1440px]:text-sm">
          White Product Storage
        </p>
        <p className="text-center text-[10px] font-semibold leading-tight text-primary-950 sm:text-xs md:text-sm lg:text-base min-[1440px]:text-sm">
          MT
        </p>
      </div>

      <div className="h-32 w-0.5 shrink-0 self-center bg-black" aria-hidden />
    </div>
  );
}
