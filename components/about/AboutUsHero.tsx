"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { EmblaCarouselType } from "embla-carousel";
import { motion } from "framer-motion";
import Carousel from "@/components/Carousel";
import { IconArrowRight } from "@tabler/icons-react";

const HERO_IMAGES = [
  { src: "/images/engineer-image.png", alt: "TOR engineer at work" },
  { src: "/images/tor60.webp", alt: "Tema Oil Refinery facilities" },
];

const TIMELINE = [
  {
    text: "The hydroskimming process is commissioned, marking the official start of the operations",
  },
  {
    text: "GHAIP begins operation as a tolling refinery, processing crude oil from multinational oil company for a fee.",
  },
  {
    text: "CDU was revamped from 28000 barrels per stream day to 45000 barrels per stream day.",
  },
  {
    text: "A Residue Fuel Catalytic Cracking(RFCC) Unit of 14000 barrels per stream day was commissioned.",
  },
];

const SEGMENT_COUNT = TIMELINE.length;
const SEGMENT_PERCENT = 100 / SEGMENT_COUNT;

export default function AboutUsHero() {
  const emblaRef = useRef<EmblaCarouselType | undefined>(undefined);
  const [emblaReady, setEmblaReady] = useState(false);
  const [activeTimeline, setActiveTimeline] = useState(0);

  const handleSlideChange = useCallback((index: number) => {
    setActiveTimeline((prev) => {
      const pairStart = index === 0 ? 0 : 2;
      if (prev >= pairStart && prev < pairStart + 2) return prev;
      return pairStart;
    });
  }, []);

  const goToSlideForMilestone = (milestoneIndex: number) => {
    const slide = milestoneIndex < 2 ? 0 : 1;
    emblaRef.current?.scrollTo(slide);
    setActiveTimeline(milestoneIndex);
  };

  useEffect(() => {
    if (!emblaReady) return;
    const id = window.setInterval(() => {
      setActiveTimeline((t) => {
        const next = (t + 1) % SEGMENT_COUNT;
        queueMicrotask(() => {
          emblaRef.current?.scrollTo(Math.floor(next / 2));
        });
        return next;
      });
    }, 6500);
    return () => window.clearInterval(id);
  }, [emblaReady]);

  return (
    <section className="relative mb-8 w-full pt-16 lg:mb-12 lg:pt-20">
      <div className="relative min-h-[min(85vh,820px)] w-full overflow-hidden bg-primary-950">
        <Carousel
          className="absolute inset-0 h-full min-h-[min(85vh,820px)]"
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
          {HERO_IMAGES.map((img) => (
            <div key={img.src} className="relative h-[min(85vh,820px)] w-full">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                priority={img.src === HERO_IMAGES[0].src}
                sizes="100vw"
              />
            </div>
          ))}
        </Carousel>

        <div
          className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-primary-950/95 via-primary-900/50 to-primary-950/30"
          aria-hidden
        />

        <div className="absolute inset-0 z-20 flex min-h-[min(85vh,820px)] flex-col justify-between px-4 pb-6 pt-24 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
          {/* Headline + CTA: left-aligned (timeline below uses same horizontal inset) */}
          <div className="pointer-events-none flex flex-1 flex-col items-start justify-center">
            <h1 className="pointer-events-auto max-w-4xl text-left text-3xl font-bold leading-tight tracking-tight text-white drop-shadow-sm sm:text-4xl md:text-5xl lg:max-w-5xl lg:text-6xl">
              The nation&apos;s first value-added investment after the Akosombo dam.
            </h1>
            <Link
              href="#about-us-tabs"
              className="pointer-events-auto mt-8 inline-flex items-center gap-2 self-start rounded-lg bg-primary-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition hover:bg-primary-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Learn More
              <IconArrowRight className="h-5 w-5" aria-hidden />
            </Link>
          </div>

          {/* Full width within hero padding so the line aligns with headline start and stretches across */}
          <div className="pointer-events-auto w-full min-w-0">
            {/* White track in 4 sections; cyan fill moves to the active section */}
            <div
              className="relative mb-5 h-1.5 w-full overflow-hidden rounded-full bg-white/90 shadow-[inset_0_1px_2px_rgba(0,0,0,0.12)]"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={SEGMENT_COUNT - 1}
              aria-valuenow={activeTimeline}
              aria-label="Timeline progress"
            >
              {/* Four equal sections on the track */}
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
