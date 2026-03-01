"use client";

import { useCallback, useEffect, useState } from "react";
import { Children } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  loop?: boolean;
  /** CSS flex-basis for each slide. When undefined and not continuousScroll, uses responsive 1/2/3 per view. */
  slideBasis?: string;
  /** Continuous one-direction scroll (no back-and-forth). When true, content is duplicated and scrolls seamlessly. */
  continuousScroll?: boolean;
  /** Pixels to scroll per frame when continuousScroll is true. Default 0.8. */
  scrollSpeed?: number;
  /** Use responsive slides (1 on mobile, 2 on md, 3 on lg). Default true for non-continuous carousels. */
  responsiveSlides?: boolean;
}

export default function Carousel({
  children,
  className = "",
  autoPlay = false,
  autoPlayInterval = 5000,
  showArrows = true,
  showDots = true,
  loop = true,
  slideBasis,
  continuousScroll = false,
  scrollSpeed = 0.8,
  responsiveSlides = true,
}: CarouselProps) {
  const items = Children.toArray(children).flat().filter(Boolean);

  const plugins = continuousScroll
    ? [AutoScroll({ speed: scrollSpeed, direction: "forward", playOnInit: true, stopOnInteraction: false })]
    : autoPlay
      ? [Autoplay({ delay: autoPlayInterval, stopOnInteraction: false })]
      : [];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      duration: 25,
    },
    plugins
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  if (items.length === 0) return null;

  const useResponsive = responsiveSlides && slideBasis === undefined;
  const slideStyle = useResponsive ? undefined : { flexBasis: slideBasis ?? "100%", width: slideBasis ?? "100%" };
  const displayItems = continuousScroll ? [...items, ...items] : items;

  return (
    <div className={`relative carousel-wrapper ${className}`}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div
          className="flex touch-pan-y items-stretch"
          style={{ width: "100%", gap: "var(--carousel-gap)" }}
        >
          {displayItems.map((item, i) => (
            <div
              key={i}
              className={`min-w-0 shrink-0 grow-0 flex flex-col ${useResponsive ? "carousel-slide-responsive" : ""}`}
              style={slideStyle}
            >
              <div className="h-full flex flex-col">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      {!continuousScroll && showArrows && items.length > 1 && (
        <>
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous slide"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center text-gray-800 transition-all hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
          >
            <IconChevronLeft className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next slide"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center text-gray-800 transition-all hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
          >
            <IconChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {!continuousScroll && showDots && items.length > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === selectedIndex ? "bg-primary-500 w-8" : "w-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
