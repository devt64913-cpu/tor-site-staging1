"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import type { EmblaCarouselType } from "embla-carousel";
import { IconArrowRight } from "@tabler/icons-react";
import Carousel from "@/components/Carousel";

const newsItems = [
  {
    id: "a",
    date: "February 27, 2026",
    title:
      "TOR’s Return to Operations Acknowledged in State of the Nation Address",
    href: "/news",
    image: "/images/news/SONA-2026.jpeg",
  },
  {
    id: "b",
    date: "December 28, 2025",
    title: "Update on Operations",
    href: "/news",
    image: "/images/news/flare.webp",
  },
  {
    id: "c",
    date: "March 12, 2026",
    title:
      "Energy Minister Reaffirms Government’s Support To TOR’S Recovery",
    href: "/news",
    image: "/images/news/minister.webp",
  },
  {
    id: "d",
    date: "October 12, 2025",
    title: "TOR in Brief – October 2025 Edition",
    href: "/news",
    image: "/images/news/image1.jpeg",
  },
  {
    id: "e",
    date: "August 26, 2025",
    title: "TOR Unviels Enterprise Risk Management Framework",
    href: "/news",
    image: "/images/news/board.jpg",
  },
  {
    id: "f",
    date: "August 5, 2025",
    title: "We Welcome Our Board Of Directors",
    href: "/news",
    image: "/images/news/board-of-directors.jpg",
  },
];

/** Slide width + gap (margin-right) for Embla loop spacing */
const SLIDE_BASIS =
  "basis-[min(78vw,280px)] sm:basis-[300px] md:basis-[320px] lg:basis-[340px] mr-3 sm:mr-4 md:mr-5";

/** Viewport cap so slide row overflows on ultra-wide layouts (Embla can scroll). */
const CAROUSEL_VIEWPORT_MAX = "max-w-[min(100%,88rem)]";

const EMBLA_OPTIONS = {
  containScroll: "keepSnaps" as const,
  loop: true,
  align: "start" as const,
  slidesToScroll: 1,
  dragFree: false,
  skipSnaps: false,
  duration: 40,
};

export default function Newsroom() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const emblaApiRef = useRef<EmblaCarouselType | undefined>(undefined);

  const scrollTo = useCallback((i: number) => {
    emblaApiRef.current?.scrollTo(i);
  }, []);
  const scrollNext = useCallback(() => {
    emblaApiRef.current?.scrollNext();
  }, []);

  const carouselSlides = newsItems.map((item, index) => {
    const focused = selectedIndex === index;
    return (
      <article
        key={item.id}
        className={`flex h-full w-full flex-col overflow-hidden rounded-lg bg-white shadow-[0_1px_4px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.06] transition-all duration-500 ease-out sm:rounded-xl ${
          focused
            ? "z-20 min-h-[360px] scale-100 sm:min-h-[400px] lg:min-h-[420px]"
            : "z-0 min-h-[260px] scale-[0.88] sm:min-h-[280px] sm:scale-[0.9]"
        }`}
      >
        <div
          className="relative min-h-0 w-full shrink-0 overflow-hidden bg-neutral-200 [flex:2_1_0%]"
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover object-center"
            sizes="(max-width: 640px) 78vw, 360px"
            priority={index === 0}
          />
        </div>
        <div
          className={`flex min-h-0 flex-col justify-between px-4 pb-4 pt-3 sm:px-5 sm:pb-5 sm:pt-4 ${
            focused
              ? "[flex:3_1_0%] bg-primary-950"
              : "[flex:3_1_0%] bg-primary-500"
          }`}
        >
          <time
            className={`font-normal text-white/95 ${
              focused ? "text-[11px] sm:text-xs" : "text-[10px] sm:text-[11px]"
            }`}
            dateTime={item.date}
          >
            {item.date}
          </time>
          <h3
            className={`mt-2 font-bold leading-snug text-white ${
              focused
                ? "line-clamp-3 text-[0.9375rem] sm:text-base lg:text-lg"
                : "line-clamp-3 text-[0.8125rem] leading-tight sm:text-[0.875rem]"
            }`}
          >
            {item.title}
          </h3>
          <Link
            href={item.href}
            className={`mt-auto pt-3 font-medium text-white hover:text-white/90 ${
              focused ? "text-[11px] sm:text-xs" : "text-[10px] sm:text-[11px]"
            }`}
          >
            → Read more
          </Link>
        </div>
      </article>
    );
  });

  return (
    <section
      className="overflow-x-clip bg-white py-16 md:py-20 lg:py-[5.5rem]"
      aria-labelledby="newsroom-heading"
    >
      <div className="flex flex-col gap-10 px-5 sm:px-6 lg:flex-row lg:items-stretch lg:gap-x-10 lg:pl-[max(1.25rem,calc((100vw-80rem)/2+1rem))] lg:pr-0 xl:gap-x-14 2xl:gap-x-16">
        <header className="flex shrink-0 flex-col justify-center lg:w-[min(100%,300px)] lg:max-w-[450px] xl:w-[min(130%,380px)]">
          <p className="text-[0.8125rem] font-bold uppercase leading-none tracking-[0.14em] text-primary-950">
            TOR Newsroom
          </p>
          <h2
            id="newsroom-heading"
            className="mt-4 text-[2.375rem] font-black leading-[0.98] tracking-tight text-primary-950 sm:text-[2.75rem] lg:text-[3.125rem] lg:leading-[0.98]"
          >
            <span className="block">Latest Updates</span>
            <span className="block">at TOR</span>
          </h2>
        </header>

        <div className="min-w-0 flex-1 lg:min-h-0 lg:pr-0">
          <Carousel
            className={`min-w-0 w-full ${CAROUSEL_VIEWPORT_MAX}`}
            showArrows={false}
            showDots={false}
            responsiveSlides={false}
            slideClassName={SLIDE_BASIS}
            innerClassName="items-center gap-0 py-1 pl-0 pr-1 sm:pr-2 lg:pr-4"
            emblaOptions={EMBLA_OPTIONS}
            onSlideChange={setSelectedIndex}
            onApiReady={(api) => {
              emblaApiRef.current = api;
            }}
          >
            {carouselSlides}
          </Carousel>

          <nav
            className="relative z-10 mt-8 flex items-center justify-center gap-4 sm:mt-10 lg:mt-10 lg:justify-start"
            aria-label="News carousel"
          >
            <div className="flex items-center gap-2 sm:gap-2.5" role="tablist">
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
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black bg-white text-primary-950 shadow-sm transition hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
            >
              <IconArrowRight className="h-6 w-6 text-black" />
            </button>
          </nav>
        </div>
      </div>
    </section>
  );
}
