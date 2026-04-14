"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { EmblaCarouselType } from "embla-carousel";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight, IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import Carousel from "@/components/Carousel";

const newsItems = [
  { id: "a", date: "February 27, 2026", title: "TOR’s Return to Operations Acknowledged in State of the Nation Address", href: "/news", image: "/images/news/SONA-2026.jpeg"},
  { id: "b", date: "December 28, 2025", title: "Update on Operations", href: "/news", image: "/images/news/flare.webp" },
  { id: "c", date: "March 12, 2026", title: "Energy Minister Reaffirms Government’s Support To TOR’S Recovery", href: "/news", image: "/images/news/minister.webp" },
  { id: "d", date: "October 12, 2025", title: "TOR in Brief – October 2025 Edition", href: "/news", image: "/images/news/image1.jpeg" },
  { id: "e", date: "August 26, 2025", title: "TOR Unviels Enterprise Risk Management Framework", href: "/news", image: "/images/news/board.jpg" },
  { id: "f", date: "August 5, 2025", title: "We Welcome Our Board Of Directors", href: "/news", image: "/images/news/board-of-directors.jpg" },
  
];

/** Margin between slides (not flex gap) so Embla’s loop keeps even spacing at the last → first wrap. */
const CARD_BASIS =
  "basis-[min(76vw,288px)] sm:basis-[300px] lg:basis-[308px] mr-[0.875rem] sm:mr-4 lg:mr-[1.125rem]";

export default function Newsroom() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaApi, setEmblaApi] = useState<EmblaCarouselType | undefined>();
  const [nextHasBeenPressed, setNextHasBeenPressed] = useState(false);

  const scrollTo = useCallback(
    (i: number) => emblaApi?.scrollTo(i),
    [emblaApi]
  );
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  /** First "next": expand to full width first, then advance after layout can settle. */
  const FIRST_EXPAND_THEN_SCROLL_MS = 520;

  const scrollNext = useCallback(() => {
    if (!nextHasBeenPressed) {
      setNextHasBeenPressed(true);
      window.setTimeout(() => {
        emblaApi?.scrollNext();
      }, FIRST_EXPAND_THEN_SCROLL_MS);
      return;
    }
    emblaApi?.scrollNext();
  }, [emblaApi, nextHasBeenPressed]);

  const isExpanded = nextHasBeenPressed;

  useEffect(() => {
    if (!emblaApi || !isExpanded) return;
    // Re-init after expand motion + delayed first scroll so slide widths measure correctly
    const t = window.setTimeout(() => {
      emblaApi.reInit();
    }, FIRST_EXPAND_THEN_SCROLL_MS + 400);
    return () => window.clearTimeout(t);
  }, [emblaApi, isExpanded]);

  const carouselSlides = newsItems.map((item, index) => {
    const focused = selectedIndex === index;
    return (
      <article
        key={item.id}
        className={`group relative flex h-full flex-col overflow-hidden rounded-[1.125rem] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04] transition-all duration-300 ease-out sm:rounded-3xl ${
          focused
            ? "z-20 min-h-[352px] scale-[1.05] shadow-[0_12px_40px_rgba(0,0,0,0.14)] ring-black/8 sm:min-h-[384px] lg:min-h-[400px]"
            : "z-0 min-h-[148px] scale-[0.96] sm:min-h-[156px] lg:min-h-[162px]"
        }`}
      >
        <div
          className={`relative w-full shrink-0 overflow-hidden ${
            focused
              ? "aspect-[5/4] min-h-[148px] sm:min-h-[172px]"
              : "aspect-[16/11] min-h-[60px] sm:min-h-[72px]"
          }`}
        >
          <Image
            src={item.image}
            alt="TOR news"
            fill
            className="object-cover object-center"
            sizes="(max-width: 640px) 76vw, 308px"
            priority={index === 0}
          />
        </div>
        <div
          className={`flex min-h-0 flex-1 flex-col justify-between gap-2 px-4 pb-3 pt-2.5 transition-colors duration-300 group-hover:bg-primary-950 sm:gap-2.5 sm:px-[1.125rem] sm:pb-3.5 sm:pt-3 ${
            focused ? "bg-primary-950" : "bg-primary-500"
          }`}
        >
          <time className="text-[11px] font-medium leading-tight text-white sm:text-xs">
            {item.date}
          </time>
          <p className="line-clamp-3 text-[0.8125rem] font-bold leading-snug text-white sm:text-[0.9375rem]">
            {item.title}
          </p>
          <Link
            href={item.href}
            className="mt-1 text-[11px] font-medium text-white underline-offset-2 hover:underline sm:text-xs"
          >
            → Read more
          </Link>
        </div>
      </article>
    );
  });

  const carouselMotionAnimate = useMemo(
    () =>
      isExpanded
        ? { scale: [0.94, 1], opacity: [0.9, 1] }
        : { scale: 1, opacity: 1 },
    [isExpanded]
  );

  const carousel = (
    <Carousel
      className={isExpanded ? "min-w-0 w-full" : "min-w-0 lg:pl-0"}
      showArrows={false}
      showDots={false}
      responsiveSlides={false}
      slideClassName={CARD_BASIS}
      innerClassName="items-center gap-0 py-2 sm:py-3 lg:py-4"
      emblaOptions={{ containScroll: false, loop: true, align: "start" }}
      onSlideChange={setSelectedIndex}
      onApiReady={setEmblaApi}
    >
      {carouselSlides}
    </Carousel>
  );

  return (
    <section
      className={`bg-white transition-[padding] duration-300 ease-out overflow-x-clip ${
        isExpanded ? "py-8 md:py-10 lg:py-12" : "py-16 md:py-20 lg:py-[5.5rem]"
      }`}
      aria-labelledby="newsroom-heading"
    >
      <div
        className={
          isExpanded
            ? "flex w-full max-w-none flex-col gap-6 md:gap-8"
            : "flex flex-col gap-10 px-5 sm:px-6 lg:gap-x-10 lg:pl-[max(1.25rem,calc((100vw-80rem)/2+1rem))] lg:pr-0 xl:gap-x-14 2xl:gap-x-16 "
        }
      >
        <div
          className={
            isExpanded
              ? "flex w-full flex-col gap-6"
              : "flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-x-10 xl:gap-x-14 2xl:gap-x-16 "
          }
        >
          {isExpanded ? (
            <h2 id="newsroom-heading" className="sr-only">
              Latest at TOR
            </h2>
          ) : (
            <header className="flex h-[30rem] flex-col items-center justify-center">
              <p className="text-[0.8125rem] font-bold uppercase leading-none tracking-[0.14em] text-primary-950">
                Newsroom
              </p>
              <h2
                id="newsroom-heading"
                className="mt-4 max-w-[11ch] text-[2.375rem] font-black leading-[0.98] tracking-tight text-primary-950 sm:text-[2.75rem] lg:text-[3.125rem] lg:leading-[0.98]"
              >
                <span className="block">Latest at</span>
                <span className="block">TOR</span>
              </h2>
            </header>
          )}

          <div
            className={
              isExpanded
                ? "min-w-0 w-full"
                : "min-w-0 flex-1 lg:min-h-0 lg:pr-0"
            }
          >
            <motion.div
              layout
              initial={false}
              className={`min-w-0 w-full ${isExpanded ? "px-4 sm:px-5 md:px-6" : ""}`}
              animate={carouselMotionAnimate}
              transition={{
                layout: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1],
                opacity: { duration: 0.45 },
              }}
              style={{ transformOrigin: "center top" }}
            >
              {carousel}
            </motion.div>
          </div>
        </div>

        <nav
          className={
            isExpanded
              ? "mt-6 flex w-full items-center justify-center px-4 sm:px-5 md:px-6 sm:mt-8"
              : "mt-9 flex w-full items-center justify-center sm:mt-10 lg:mt-2 lg:grid lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)] lg:gap-x-10 lg:px-0 xl:gap-x-14 2xl:gap-x-16"
          }
          aria-label="News carousel"
        >
          {!isExpanded && (
            <div className="hidden lg:block lg:pl-[max(1.25rem,calc((100vw-80rem)/2+1rem))]" aria-hidden />
          )}
          <div
            className={
              isExpanded
                ? "flex min-w-0 items-center justify-center gap-3 sm:gap-4"
                : "flex min-w-0 items-center justify-center gap-3 sm:gap-4 lg:justify-start lg:pr-[max(1.25rem,calc((100vw-80rem)/2+1rem))]"
            }
          >
            {nextHasBeenPressed ? (
              <button
                type="button"
                onClick={scrollPrev}
                aria-label="Previous slide"
                className="cursor-pointer flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black bg-white text-primary-950 shadow-sm transition hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
              >
                <IconArrowLeft className="h-6 w-6 text-black" />
              </button>
            ) : (
              <span className="h-9 w-9 shrink-0" aria-hidden />
            )}
            <div
              className="flex items-center gap-2 sm:gap-2.5"
              role="tablist"
              aria-label="Slides"
            >
              {newsItems.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={i === selectedIndex}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => scrollTo(i)}
                  className={`shrink-0 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                    i === selectedIndex
                      ? "h-2.5 w-10 bg-primary-950 sm:w-11"
                      : "h-2 w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next slide"
              className="cursor-pointer flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black bg-white text-primary-950 shadow-sm transition hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
            >
              <IconArrowRight className="h-6 w-6 text-black" />
            </button>
          </div>
        </nav>
      </div>
    </section>
  );
}
