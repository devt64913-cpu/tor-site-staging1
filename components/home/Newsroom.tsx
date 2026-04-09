"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { IconChevronRight } from "@tabler/icons-react";

const newsItems = [
  { id: "a", date: "March 12, 2026", title: "TOR Conference on crude refinement.", href: "/news" },
  { id: "b", date: "March 12, 2026", title: "TOR Conference on crude refinement.", href: "/news" },
  { id: "c", date: "March 12, 2026", title: "TOR Conference on crude refinement.", href: "/news" },
  { id: "d", date: "March 12, 2026", title: "TOR Conference on crude refinement.", href: "/news" },
  { id: "e", date: "March 12, 2026", title: "TOR Conference on crude refinement.", href: "/news" },
];

const CARD_BASIS =
  "min-w-0 shrink-0 grow-0 basis-[min(76vw,288px)] sm:basis-[300px] lg:basis-[308px]";

export default function Newsroom() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    containScroll: "trimSnaps",
    dragFree: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (i: number) => emblaApi?.scrollTo(i),
    [emblaApi]
  );
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section
      className="overflow-x-clip bg-white py-16 md:py-20 lg:py-[5.5rem]"
      aria-labelledby="newsroom-heading"
    >
      {/* lg: heading and carousel share one row — tops aligned (items-start); pagination only under carousel */}
      <div className="flex flex-col gap-10 px-5 sm:px-6 lg:gap-x-10 lg:px-0 xl:gap-x-14 2xl:gap-x-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-x-10 xl:gap-x-14 2xl:gap-x-16">
          <header className="shrink-0 lg:max-w-[300px] lg:pl-[max(1.25rem,calc((100vw-80rem)/2+1rem))] lg:pr-2 lg:pt-1">
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

          <div className="min-w-0 flex-1 lg:min-h-0 lg:pr-0">
            <div className="overflow-hidden lg:pl-0" ref={emblaRef}>
            <div className="flex items-center gap-[0.875rem] sm:gap-4 lg:gap-[1.125rem]">
              {newsItems.map((item, index) => {
                const focused = selectedIndex === index;
                return (
                  <div key={item.id} className={CARD_BASIS}>
                    <article
                      className={`group flex h-full flex-col overflow-hidden rounded-[1.125rem] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04] transition-[min-height] duration-300 sm:rounded-3xl ${
                        focused
                          ? "min-h-[432px] sm:min-h-[472px] lg:min-h-[488px]"
                          : "min-h-[292px] sm:min-h-[308px] lg:min-h-[316px]"
                      }`}
                    >
                      <div
                        className={`relative w-full shrink-0 overflow-hidden ${
                          focused
                            ? "aspect-[5/4] min-h-[188px] sm:min-h-[220px]"
                            : "aspect-[16/11] min-h-[118px] sm:min-h-[128px]"
                        }`}
                      >
                        <Image
                          src="/images/integrity.png"
                          alt="TOR news"
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 640px) 76vw, 308px"
                          priority={index === 0}
                        />
                      </div>
                      <div
                        className={`flex min-h-0 flex-1 flex-col justify-between gap-2.5 px-4 pb-4 pt-3 transition-colors duration-300 group-hover:bg-primary-950 sm:gap-3 sm:px-[1.125rem] sm:pb-[1.125rem] sm:pt-3.5 ${
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
                  </div>
                );
              })}
            </div>
          </div>
          </div>
        </div>

        <nav
          className="mt-9 flex w-full items-center justify-center sm:mt-10 lg:mt-2 lg:grid lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)] lg:gap-x-10 lg:px-0 xl:gap-x-14 2xl:gap-x-16"
          aria-label="News carousel"
        >
          <div className="hidden lg:block lg:pl-[max(1.25rem,calc((100vw-80rem)/2+1rem))]" aria-hidden />
          <div className="flex min-w-0 items-center justify-center gap-3 sm:gap-4 lg:justify-start lg:pr-[max(1.25rem,calc((100vw-80rem)/2+1rem))]">
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
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary-950/25 bg-white text-primary-950 shadow-sm transition hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
            >
              <IconChevronRight className="h-4 w-4" />
            </button>
          </div>
        </nav>
      </div>
    </section>
  );
}
