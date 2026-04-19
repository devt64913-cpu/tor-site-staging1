"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import type { EmblaCarouselType } from "embla-carousel";
import { motion } from "framer-motion";
import Carousel from "@/components/Carousel";
import { IconArrowRight } from "@tabler/icons-react";

const HERO_IMAGE = {
  src: "/images/whatwedo/our-business.png",
  alt: "Tema Oil Refinery operations and process facilities",
} as const;

const HERO_HEADLINES = [
  "We refine crude oil into products that power Ghana's economy.",
  "From crude distillation to RFCC—integrated processing across our units.",
  "Quality fuels for transport, industry, aviation, and Ghana's fishing sector.",
  "Operational excellence across the Tema refinery site, linked to the Port of Tema.",
] as const;

const TIMELINE = [
  { text: "Crude receipt, storage, and preparation for refining." },
  { text: "Distillation, conversion, and treatment in CDU and RFCC units." },
  { text: "Quality assurance, laboratory testing, and certification." },
  { text: "Storage, loading, and distribution to customers nationwide." },
] as const;

const SEGMENT_COUNT = TIMELINE.length;
const SEGMENT_PERCENT = 100 / SEGMENT_COUNT;

export default function WhatWeDoHero() {
  const emblaRef = useRef<EmblaCarouselType | undefined>(undefined);
  const [emblaReady, setEmblaReady] = useState(false);
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [autoAdvancePaused, setAutoAdvancePaused] = useState(false);

  const handleSlideChange = useCallback((index: number) => {
    setActiveTimeline(index);
  }, []);

  const goToSlideForMilestone = (milestoneIndex: number) => {
    emblaRef.current?.scrollTo(milestoneIndex);
    setActiveTimeline(milestoneIndex);
  };

  const handleProgressTrackClick = (event: MouseEvent<HTMLDivElement>) => {
    setAutoAdvancePaused(true);
    const rect = event.currentTarget.getBoundingClientRect();
    const relativeX = event.clientX - rect.left;
    const ratio = rect.width > 0 ? relativeX / rect.width : 0;
    const clampedRatio = Math.min(Math.max(ratio, 0), 0.999999);
    const targetIndex = Math.floor(clampedRatio * SEGMENT_COUNT);
    goToSlideForMilestone(targetIndex);
  };

  useEffect(() => {
    if (!emblaReady || autoAdvancePaused) return;
    const id = window.setInterval(() => {
      setActiveTimeline((t) => {
        const next = (t + 1) % SEGMENT_COUNT;
        queueMicrotask(() => {
          emblaRef.current?.scrollTo(next);
        });
        return next;
      });
    }, 6500);
    return () => window.clearInterval(id);
  }, [emblaReady, autoAdvancePaused]);

  return (
    <section className="relative mb-0 w-full pt-16 lg:mb-0 lg:pt-20">
      <div className="relative min-h-[min(78vh,760px)] w-full overflow-hidden bg-primary-950">
        <Carousel
          className="absolute inset-0 h-full min-h-[min(78vh,760px)]"
          responsiveSlides={false}
          slideBasis="100%"
          slideClassName="!w-full !min-w-full !max-w-full h-full"
          innerClassName="!gap-0 h-full"
          autoPlay={false}
          loop
          showArrows={false}
          showDots={false}
          onApiReady={(api) => {
            emblaRef.current = api;
            setEmblaReady(true);
          }}
          onSlideChange={handleSlideChange}
        >
          {HERO_HEADLINES.map((_, i) => (
            <div
              key={i}
              className="relative h-[min(78vh,760px)] w-full"
            >
              <Image
                src={HERO_IMAGE.src}
                alt={HERO_IMAGE.alt}
                fill
                className="object-cover"
                sizes="100vw"
                priority={i === 0}
              />
            </div>
          ))}
        </Carousel>

        <div
          className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/55 via-black/25 to-black/15"
          aria-hidden
        />

        <div className="absolute inset-0 z-20 flex min-h-[min(78vh,760px)] flex-col justify-between px-4 pb-24 pt-24 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <div className="pointer-events-none flex flex-1 flex-col items-start justify-center">
            <motion.h1
              key={activeTimeline}
              aria-live="polite"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="pointer-events-auto max-w-4xl text-left text-3xl font-bold leading-tight tracking-tight text-white drop-shadow-sm sm:text-4xl md:text-5xl lg:max-w-5xl lg:text-6xl"
            >
              {HERO_HEADLINES[activeTimeline]}
            </motion.h1>
            <Link
              href="#what-we-do-tabs"
              className="pointer-events-auto mt-8 inline-flex items-center gap-2 self-start rounded-lg bg-primary-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition hover:bg-primary-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Learn More
              <IconArrowRight className="h-5 w-5" aria-hidden />
            </Link>
          </div>

          <div className="pointer-events-auto w-full min-w-0">
            <div
              className="relative mb-5 h-1.5 w-full overflow-hidden rounded-full bg-white/90 shadow-[inset_0_1px_2px_rgba(0,0,0,0.12)]"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={SEGMENT_COUNT - 1}
              aria-valuenow={activeTimeline}
              aria-label="Operations progress"
              onClick={handleProgressTrackClick}
              onKeyDown={(event) => {
                if (event.key === "ArrowRight") {
                  event.preventDefault();
                  setAutoAdvancePaused(true);
                  goToSlideForMilestone((activeTimeline + 1) % SEGMENT_COUNT);
                }
                if (event.key === "ArrowLeft") {
                  event.preventDefault();
                  setAutoAdvancePaused(true);
                  goToSlideForMilestone(
                    (activeTimeline - 1 + SEGMENT_COUNT) % SEGMENT_COUNT
                  );
                }
              }}
              tabIndex={0}
            >
              <div
                className="pointer-events-none absolute inset-0 z-[1] flex"
                aria-hidden
              >
                {Array.from({ length: SEGMENT_COUNT }).map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 border-r border-black/[0.08] last:border-r-0"
                  />
                ))}
              </div>
              <motion.div
                className="absolute top-0 z-[2] h-full rounded-full bg-primary-500 shadow-[0_0_14px_rgba(5,171,231,0.45)]"
                style={{ width: `${SEGMENT_PERCENT}%` }}
                animate={{ left: `${activeTimeline * SEGMENT_PERCENT}%` }}
                transition={{ type: "spring", stiffness: 320, damping: 34 }}
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3">
              {TIMELINE.map((item, i) => {
                const isActive = activeTimeline === i;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goToSlideForMilestone(i)}
                    className={`text-left text-xs leading-snug transition-colors sm:text-[11px] md:text-xs lg:text-sm ${
                      isActive
                        ? "font-medium text-white"
                        : "text-white/75 hover:text-white"
                    }`}
                  >
                    {item.text}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
