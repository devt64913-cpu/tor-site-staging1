"use client";

import SlotCounter from "react-slot-counter";
import type { DigitMetrics } from "@/components/useBreakpointDigitMetrics";

interface OdometerCountProps {
  end: number;
  metrics: DigitMetrics;
  /** Animation length in seconds (library default ~0.7) */
  duration?: number;
  /** Delay between each digit column */
  stagger?: number;
  className?: string;
}

/**
 * Slot-machine style counter via [react-slot-counter](https://www.npmjs.com/package/react-slot-counter).
 * `metrics` keeps digit size aligned with the icon box in parent components.
 */
export default function OdometerCount({
  end,
  metrics,
  duration = 2.2,
  stagger = 0.07,
  className = "",
}: OdometerCountProps) {
  const formatted = end.toLocaleString("en-US");
  const { px } = metrics;

  return (
    <div
      className={`inline-flex shrink-0 items-center leading-none whitespace-nowrap ${className}`}
      style={{
        fontSize: px,
        minHeight: px,
        lineHeight: 1,
      }}
    >
      <SlotCounter
        value={formatted}
        duration={duration}
        delay={stagger}
        direction="bottom-up"
        useMonospaceWidth
        animateOnVisible={{
          triggerOnce: true,
          rootMargin: "0px 0px -12% 0px",
        }}
        autoAnimationStart
        containerClassName="font-semibold tabular-nums text-primary-950 !leading-none whitespace-nowrap"
        charClassName="!text-[1em]"
        separatorClassName="!text-[1em] text-primary-950"
        numberClassName="!text-[1em]"
      />
    </div>
  );
}
