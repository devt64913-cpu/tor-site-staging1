"use client";

import { IconSettings } from "@tabler/icons-react";
import React from "react";
import OdometerCount from "@/components/OdometerCount";
import { useBreakpointDigitMetrics } from "@/components/useBreakpointDigitMetrics";

export default function CDU() {
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
            <IconSettings color="#004A77" size={iconSize} stroke={1.5} />
          </div>
          <OdometerCount end={45000} metrics={m} duration={2.2} />
        </div>
        <p className="text-center text-[10px] font-semibold leading-tight text-primary-950 sm:ml-12 sm:text-xs md:ml-14 lg:text-base min-[1440px]:text-sm">
          Barrels per stream day
        </p>
        <p className="text-center text-[10px] font-semibold leading-tight text-primary-950 sm:ml-12 sm:text-xs md:ml-14 lg:text-base min-[1440px]:text-sm">
          CDU Capacity
        </p>
      </div>

      <div className="h-32 w-0.5 shrink-0 self-center bg-black" aria-hidden />
    </div>
  );
}
