"use client";

import Image from "next/image";
import { forwardRef, useCallback, useEffect, useRef, useState } from "react";
import AboutUsHero from "@/components/about/AboutUsHero";

const TABS = [
  { id: "about" as const, label: "About Us" },
  { id: "history" as const, label: "History" },
  { id: "leadership" as const, label: "Executive Leadership" },
  { id: "board" as const, label: "Board of Directors" },
   
] as const;

/** Sub-nav: light cyan bar; active tab = darker navy pill (does not stretch full width) */
const TAB_BAR = "bg-primary-400";
const TAB_ACTIVE =
  "bg-[#004A77] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]";

const CONTENT_BG = "bg-[#004A77]";

/** Shared layout for Executive Leadership & Board tabs: wider column, roomier gaps, taller image frames. */
const ABOUT_PEOPLE_INNER = "mx-auto max-w-7xl";
const ABOUT_PEOPLE_IMAGE_FRAME =
  "relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-black/20 shadow-xl";

const EXECUTIVE_LEADERSHIP = [
  {
    name: "Emmanuella Asamoah",
    title: "General Manager for Production",
    image: "/images/leadership/emmanuella-asamoah.jpg",
  },
  {
    name: "Greselda Addo",
    title: "General Manager for Maintenance",
    image: "/images/leadership/greselda-addo.png",
  },
  {
    name: "Jeremiah Bampoe",
    title: "General Manager for Commerce",
    image: "/images/leadership/jeremiah-bampoe.png",
  },
  {
    name: "Greselda Addo",
    title: "General Manager for Maintenance",
    image: "/images/leadership/greselda-addo.png",
  },
] as const;

/** Full viewport width; used for History tab full-bleed photos. */
const FULL_BLEED_STRIP =
  "relative w-full overflow-hidden h-[min(36vh,280px)] sm:h-[min(38vh,320px)] md:h-[min(40vh,380px)] lg:h-[min(98vh,850px)]";

/** Taller strips for the About tab full-bleed images only. */
const ABOUT_TAB_FULL_BLEED_STRIP =
  "relative h-[950px] w-full overflow-hidden";

const HistoryFullBleedImage = forwardRef<
  HTMLDivElement,
  { src: string; alt: string; className?: string }
>(function HistoryFullBleedImage({ src, alt, className = "" }, ref) {
  return (
    <div ref={ref} className={`w-full bg-surface-50 pt-0 ${className}`}>
      <div className={FULL_BLEED_STRIP}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
    </div>
  );
});

HistoryFullBleedImage.displayName = "HistoryFullBleedImage";

type HistoryEraToggleProps = {
  historyEra: "1963" | "present";
  onSelect1963: () => void;
  onSelectPresent: () => void;
  /** In-flow at top of panel vs slightly stronger chrome when sticky */
  variant?: "panel" | "stickyBar";
};

function HistoryEraTogglePill({
  historyEra,
  onSelect1963,
  onSelectPresent,
  variant = "panel",
}: HistoryEraToggleProps) {
  const shell =
    variant === "stickyBar"
      ? "inline-flex rounded-full bg-white p-1 shadow-md ring-1 ring-black/10"
      : "inline-flex rounded-full bg-white p-1 shadow-md ring-1 ring-black/5";
  return (
    <div className={shell} role="group" aria-label="History era">
      <button
        type="button"
        onClick={onSelect1963}
        className={`min-w-[5.5rem] rounded-full px-6 py-2.5 text-sm font-semibold transition-colors sm:min-w-[6.5rem] sm:px-8 sm:text-base ${
          historyEra === "1963"
            ? "bg-primary-500 text-white shadow-md"
            : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        1963
      </button>
      <button
        type="button"
        onClick={onSelectPresent}
        className={`min-w-[5.5rem] rounded-full px-6 py-2.5 text-sm font-semibold transition-colors sm:min-w-[6.5rem] sm:px-8 sm:text-base ${
          historyEra === "present"
            ? "bg-primary-500 text-white shadow-md"
            : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        Present
      </button>
    </div>
  );
}

export default function AboutUs() {
  const [tab, setTab] = useState<(typeof TABS)[number]["id"]>("about");
  const [historyEra, setHistoryEra] = useState<"1963" | "present">("1963");
  const historyFirstImageRef = useRef<HTMLDivElement>(null);
  const historySecondImageRef = useRef<HTMLDivElement>(null);
  const ignoreScrollSyncUntil = useRef(0);

  /** Scroll position: first image in view → 1963; second image dominant → Present */
  useEffect(() => {
    if (tab !== "history") return;
    const first = historyFirstImageRef.current;
    const second = historySecondImageRef.current;
    if (!first || !second) return;

    const syncEraFromScroll = () => {
      if (Date.now() < ignoreScrollSyncUntil.current) return;
      const r1 = first.getBoundingClientRect();
      const r2 = second.getBoundingClientRect();
      const vh = window.innerHeight;
      // Second image in upper half of viewport → Present; else first image visible → 1963
      if (r2.top < vh * 0.55 && r2.bottom > 80) {
        setHistoryEra((e) => (e === "present" ? e : "present"));
      } else if (r1.top < vh * 0.72 && r1.bottom > 60) {
        setHistoryEra((e) => (e === "1963" ? e : "1963"));
      }
    };

    window.addEventListener("scroll", syncEraFromScroll, { passive: true });
    window.addEventListener("resize", syncEraFromScroll, { passive: true });
    syncEraFromScroll();
    return () => {
      window.removeEventListener("scroll", syncEraFromScroll);
      window.removeEventListener("resize", syncEraFromScroll);
    };
  }, [tab]);

  const scrollToHistorySecondImage = useCallback(() => {
    ignoreScrollSyncUntil.current = Date.now() + 800;
    requestAnimationFrame(() => {
      historySecondImageRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, []);

  const setHistoryEraFromToggle = useCallback(
    (era: "1963" | "present") => {
      ignoreScrollSyncUntil.current = Date.now() + 800;
      setHistoryEra(era);
    },
    []
  );

  return (
    <>
      <AboutUsHero />

      <section
        id="about-us-tabs"
        className="mt-0 scroll-mt-20 "
        aria-label="About us sections"
      >
        {/* Light-blue strip inset from screen; tabs are shrink-wrapped — active pill does not span edge-to-edge */}
        <div className={`w-full ${TAB_BAR} px-4 py-3 sm:px-6 lg:px-8`}>
          <div
            role="tablist"
            aria-orientation="horizontal"
            className="mx-auto flex max-w-6xl flex-col items-center gap-2 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-2 md:gap-3"
          >
            {TABS.map((t) => {
              const selected = tab === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  id={`tab-${t.id}`}
                  aria-controls={`panel-${t.id}`}
                  onClick={() => setTab(t.id)}
                  className={`min-h-[48px] w-auto max-w-full shrink-0 rounded-lg px-4 py-2.5 text-center text-sm font-semibold transition-colors duration-200 sm:min-h-0 sm:px-5 sm:text-base ${
                    selected
                      ? `${TAB_ACTIVE} shadow-sm`
                      : "text-white hover:bg-white/15"
                  }`}
                >
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>

        {tab === "about" && (
          <>
            <div
              id="panel-about"
              role="tabpanel"
              aria-labelledby="tab-about"
              className={`${CONTENT_BG} px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24`}
            >
              <div className="mx-auto max-w-6xl">
                <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  About Us
                </h2>
                <div className="mt-10 space-y-8 text-left text-base leading-relaxed text-white sm:text-lg ">
                  <p>
                    Tema Oil Refinery (TOR) Ltd. is the nation&apos;s first
                    value-added investment after the Akosombo dam and was
                    commissioned in September 1963.
                  </p>
                  <p>
                    TOR is renowned for providing high-quality petroleum products
                    with exclusive production of Aviation Turbine Kerosene (ATK)
                    which is among the best in Africa. Ghana&apos;s fishing sector
                    depends solely on the Refinery as the only producer of premix
                    fuel.
                  </p>
                  <p>
                    Our current goal is to rank among the sub-region&apos;s most
                    productive refineries.
                  </p>
                </div>
              </div>
            </div>

            {/* Agreement photo: full-bleed width, flush under navy panel (no top padding) */}
            <div className="w-full bg-surface-50 pt-0 pb-10 sm:pb-12 lg:pb-14">
              <div className={ABOUT_TAB_FULL_BLEED_STRIP}>
                <Image
                  src="/images/our-commitment/integrity.jpg"
                  alt="Historical signing ceremony establishing Tema Oil Refinery"
                  fill
                  className="object-cover object-center"
                  sizes="100vw"
                  priority={false}
                />
              </div>

              <div className="w-full bg-primary-950">
                <p className="mx-auto max-w-4xl px-5 py-5 text-center text-sm leading-relaxed text-white sm:text-base">
                  This historic moment reflects TOR&apos;s foundation as Ghana&apos;s first
                  value-added investment after the Akosombo Dam, commissioned in 1963.
                  From the beginning, the refinery has focused on providing quality
                  energy products that support national growth and long-term
                  development.
                </p>
              </div>
              

              <div className={ABOUT_TAB_FULL_BLEED_STRIP}>
                <Image
                  src="/images/whoweare/image3.jpg"
                  alt="Historical signing ceremony establishing Tema Oil Refinery"
                  fill
                  className="object-cover object-center"
                  sizes="100vw"
                  priority={false}
                />
              </div>
            </div>

            <div className={`${CONTENT_BG} px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24`}>
              <div className={ABOUT_PEOPLE_INNER}>
                <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-14">
                  <div className="space-y-6 text-left text-base leading-relaxed text-white/95 sm:text-lg">
                    <p className="text-center text-[29px] font-bold text-white">Our Mission</p>
                    <p>
                      To provide quality energy products and services to power Ghana&apos;s
                      economic growth in an environmentally sustainable manner.
                    </p>
                  </div>
                  <div className={ABOUT_PEOPLE_IMAGE_FRAME}>
                    <Image
                      src="/images/man-working.jpg"
                      alt="TOR mission in action"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-14">
                  <div className={ABOUT_PEOPLE_IMAGE_FRAME}>
                    <Image
                      src="/images/man-working1.jpg"
                      alt="TOR vision for the future"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>

                  <div className="space-y-6 text-left text-base leading-relaxed text-white/95 sm:text-lg">
                    <p className="text-center text-[29px] font-bold text-white">Our Vision</p>
                    <p>
                      To be a preeminent refinery, a pride for Ghanaians.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {tab === "history" && (
          <div
            id="panel-history"
            role="tabpanel"
            aria-labelledby="tab-history"
            className={`relative ${CONTENT_BG}`}
          >
            {/*
              Sticky wraps the whole History tab (copy + images) so the toggle
              stays under the fixed header while scrolling, starting in the same
              spot as the design (centered atop the navy block).
            */}
            <div
              className="sticky top-20 z-40 flex justify-center bg-transparent px-5 pt-8 pb-2 sm:px-8 sm:pt-10 sm:pb-2 lg:px-12 lg:pt-12"
            >
              <HistoryEraTogglePill
                variant="stickyBar"
                historyEra={historyEra}
                onSelect1963={() => setHistoryEraFromToggle("1963")}
                onSelectPresent={() => {
                  setHistoryEraFromToggle("present");
                  scrollToHistorySecondImage();
                }}
              />
            </div>

            <div
              className={`${CONTENT_BG} px-5 pb-16 pt-4 sm:px-8 sm:pb-20 sm:pt-5 lg:px-12 lg:pb-24 lg:pt-6`}
            >
              <div className="mx-auto max-w-3xl text-center">
                {historyEra === "1963" ? (
                  <div className="space-y-4 text-white">
                    <p className="text-sm font-normal text-white/90 sm:text-base">
                      1963 – 1965
                    </p>
                    <h3 className="text-2xl font-bold leading-snug sm:text-3xl md:text-4xl">
                      Commissioning of the refinery.
                    </h3>
                    <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/95 sm:text-lg">
                      Commissioned on September 20, 1963 as the Ghanaian Italian
                      Petroleum (GHAIP) Company
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4 text-white">
                    <p className="text-sm font-normal text-white/90 sm:text-base">
                      1996 – Present
                    </p>
                    <h3 className="text-2xl font-bold leading-snug sm:text-3xl md:text-4xl">
                      Modernization and growth.
                    </h3>
                    <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/95 sm:text-lg">
                      From CDU expansion and RFCC commissioning to today, TOR has
                      continued to supply Ghana with refined products while
                      pursuing excellence as one of the sub-region&apos;s leading
                      refineries.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <HistoryFullBleedImage
              ref={historyFirstImageRef}
              src="/images/agreement.png"
              alt="Historical signing ceremony establishing Tema Oil Refinery"
               
            />
            <HistoryFullBleedImage
              ref={historyFirstImageRef}
              src="/images/history.png"
              alt="Official visit at Tema Oil Refinery facilities during commissioning era"
            />

            <HistoryFullBleedImage
              ref={historySecondImageRef}
              src="/images/whoweare/image4.jpg"
              alt="Official visit at Tema Oil Refinery facilities during commissioning era"
            />

            <HistoryFullBleedImage
              ref={historySecondImageRef}
              src="/images/whoweare/image2.jpg"
              alt="Official visit at Tema Oil Refinery facilities during commissioning era"
              className="pb-10 sm:pb-12 lg:pb-14"
            />
          </div>
        )}

        {tab === "leadership" && (
          <div
            id="panel-leadership"
            role="tabpanel"
            aria-labelledby="tab-leadership"
            className={`${CONTENT_BG} px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24`}
          >
            <div className={ABOUT_PEOPLE_INNER}>
              <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Executive Leadership
              </h2>
              <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-14 lg:grid-cols-4 lg:gap-10">
                {EXECUTIVE_LEADERSHIP.map((leader, index) => (
                  <article
                    key={`${leader.name}-${leader.title}-${index}`}
                    className="flex flex-col text-left"
                  >
                    <div className={ABOUT_PEOPLE_IMAGE_FRAME}>
                      <Image
                        src={leader.image}
                        alt={`${leader.name}, ${leader.title}`}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                    <h3 className="mt-4 text-lg font-bold tracking-tight text-white sm:text-xl">
                      {leader.name}
                    </h3>
                    <p className="mt-1.5 text-sm font-medium leading-snug text-primary-200 sm:text-base">
                      {leader.title}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "board" && (
          <div
            id="panel-board"
            role="tabpanel"
            aria-labelledby="tab-board"
            className={`${CONTENT_BG} px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24`}
          >
            <div className={ABOUT_PEOPLE_INNER}>
              <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Board of Directors
              </h2>
              <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-14">
                <div className={ABOUT_PEOPLE_IMAGE_FRAME}>
                  <Image
                    src="/images/tor_board.webp"
                    alt="TOR Board of Directors"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="space-y-6 text-left text-base leading-relaxed text-white/95 sm:text-lg">
                  <p>
                    The Board provides oversight and strategic direction for
                    Tema Oil Refinery, ensuring accountability to shareholders
                    and stakeholders while supporting TOR&apos;s mission to
                    deliver reliable energy products for Ghana.
                  </p>
                  <p>
                    Governance emphasizes transparency, compliance, and
                    long-term sustainability as we pursue our goal of ranking
                    among the sub-region&apos;s most productive refineries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}


      </section>
    </>
  );
}
