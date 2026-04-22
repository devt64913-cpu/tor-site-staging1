"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AboutUsHero from "@/components/about/AboutUsHero";

const TABS = [
  { id: "about" as const, label: "About Us" },
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

const ABOUT_CONTENT_IMAGE_FRAME =
  "relative mx-auto aspect-[3/2] w-full max-w-2xl overflow-hidden rounded-xl bg-black/20 shadow-xl";

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

const HISTORY_MILESTONES = [
  {
    year: "1960",
    title: "GHAIP Founded",
    description:
      "The Ghanaian Italian Petroleum Company (GHAIP) was incorporated on December 12, 1960 as a private limited liability company.",
  },
  {
    year: "1963",
    title: "Commissioning",
    description:
      "The refinery was commissioned in September 1963 as a hydroskimming plant and became one of Africa's notable refineries.",
  },
  {
    year: "1977",
    title: "Full Ghanaian Ownership",
    description:
      "The Government of Ghana acquired all remaining shares, making the refinery 100% Ghanaian-owned.",
  },
  {
    year: "1996-2002",
    title: "Expansion and Modernization",
    description:
      "The CDU was revamped and the RFCC unit was commissioned to improve product yield and support national demand.",
  },
  {
    year: "Today",
    title: "Serving Ghana's Energy Needs",
    description:
      "TOR continues improving reliability, storage, and technical operations to support long-term energy security.",
  },
] as const;

/** GHAIP era, commissioning, and early TOR — archival photography. */
const HISTORY_HISTORIC_IMAGES = [
  {
    src: "/images/agreement.png",
    alt: "Historical signing ceremony establishing Tema Oil Refinery",
  },
  {
    src: "/images/history.png",
    alt: "Official visit at Tema Oil Refinery facilities during commissioning era",
  },
  {
    src: "/images/history/history1.jpg",
    alt: "Official visit at Tema Oil Refinery facilities during commissioning era",
  },
] as const;

/** Recent TOR operations, facilities, and people — contemporary photography. */
const HISTORY_CURRENT_IMAGES = [
  {
    src: "/images/whoweare/image4.jpg",
    alt: "Present-day leadership and operations at Tema Oil Refinery",
  },
  {
    src: "/images/whoweare/image2.jpg",
    alt: "Contemporary view of Tema Oil Refinery facilities",
  },
  {
    src: "/images/whoweare/image3.jpg",
    alt: "Modern TOR site and activities",
  },
] as const;

const HISTORY_STAGGER_CONTAINER = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.06 },
  },
} as const;

const HISTORY_STAGGER_ITEM = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: "easeOut" as const },
  },
} as const;

type HistoryCarouselImage = { readonly src: string; readonly alt: string };

function HistoryCardCarousel({
  images,
  slide,
  onSlideChange,
  ariaLabelPrefix,
}: {
  images: readonly HistoryCarouselImage[];
  slide: number;
  onSlideChange: (next: number) => void;
  ariaLabelPrefix: string;
}) {
  const goPrev = () =>
    onSlideChange(slide === 0 ? images.length - 1 : slide - 1);
  const goNext = () =>
    onSlideChange(slide === images.length - 1 ? 0 : slide + 1);

  const navBtn =
    "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#004A77]/20 bg-white text-xl font-bold text-[#004A77] shadow-md transition hover:bg-primary-50 hover:shadow-lg sm:h-12 sm:w-12";

  return (
    <div
      className="mx-auto w-full max-w-4xl px-4 sm:px-6"
      aria-roledescription="carousel"
    >
      <div className="flex items-stretch gap-2 sm:gap-4 md:items-center">
        <button
          type="button"
          aria-label={`${ariaLabelPrefix}: previous`}
          onClick={goPrev}
          className={navBtn}
        >
          &#8249;
        </button>

        <article className="min-w-0 flex-1 overflow-hidden rounded-2xl border border-neutral-200/90 bg-white shadow-[0_8px_30px_rgba(0,74,119,0.12)] ring-1 ring-black/5">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100 sm:aspect-[5/3]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={slide}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.38, ease: "easeOut" }}
              >
                <Image
                  src={images[slide].src}
                  alt={images[slide].alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 896px) 100vw, 896px"
                  priority={false}
                />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="border-t border-neutral-100 bg-neutral-50/80 px-4 py-3 text-center">
            <p className="text-xs font-medium text-[#004A77] sm:text-sm">
              {slide + 1} / {images.length}
            </p>
          </div>
        </article>

        <button
          type="button"
          aria-label={`${ariaLabelPrefix}: next`}
          onClick={goNext}
          className={navBtn}
        >
          &#8250;
        </button>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {images.map((_, index) => {
          const active = index === slide;
          return (
            <button
              key={`${ariaLabelPrefix}-dot-${index}`}
              type="button"
              aria-label={`${ariaLabelPrefix}: slide ${index + 1} of ${images.length}`}
              aria-current={active ? "true" : undefined}
              onClick={() => onSlideChange(index)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                active
                  ? "scale-110 bg-[#004A77]"
                  : "bg-neutral-300 hover:bg-neutral-400"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default function AboutUs() {
  const [tab, setTab] = useState<(typeof TABS)[number]["id"]>("about");
  const [historicSlide, setHistoricSlide] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

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

                <motion.div
                  className="mt-14 flex flex-col gap-4"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.12 }}
                  variants={HISTORY_STAGGER_CONTAINER}
                >
                  <motion.h3
                    variants={HISTORY_STAGGER_ITEM}
                    className="text-center text-2xl font-bold tracking-tight text-white sm:text-3xl"
                  >
                    Our History
                  </motion.h3>
                  {HISTORY_MILESTONES.map((milestone) => (
                    <motion.article
                      key={`${milestone.year}-${milestone.title}`}
                      variants={HISTORY_STAGGER_ITEM}
                      className="rounded-xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur-sm"
                    >
                      <p className="text-sm font-semibold tracking-wide text-primary-200">
                        {milestone.year}
                      </p>
                      <h4 className="mt-1 text-lg font-bold">{milestone.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-white/95 sm:text-base">
                        {milestone.description}
                      </p>
                    </motion.article>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* History: historic vs current — two carousels */}
            <div className="w-full bg-surface-50 pt-0 pb-10 sm:pb-12 lg:pb-14">
              <motion.div
                className="mx-auto max-w-4xl px-5 pt-8 pb-6 text-center sm:px-8"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <h3 className="text-xl font-bold tracking-tight text-[#004A77] sm:text-2xl">
                  Historic TOR
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-700 sm:text-base">
                  Archival photographs from GHAIP, commissioning, and TOR&apos;s early
                  years—the foundation of Ghana&apos;s first major refinery after the
                  Akosombo Dam.
                </p>
              </motion.div>
              <HistoryCardCarousel
                images={HISTORY_HISTORIC_IMAGES}
                slide={historicSlide}
                onSlideChange={setHistoricSlide}
                ariaLabelPrefix="Historic TOR carousel"
              />

              <motion.div
                className="mx-auto max-w-4xl px-5 pt-12 pb-6 text-center sm:px-8"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
              >
                <h3 className="text-xl font-bold tracking-tight text-[#004A77] sm:text-2xl">
                  TOR today
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-700 sm:text-base">
                  Contemporary views of the refinery—operations, facilities, and
                  people shaping TOR&apos;s role in Ghana&apos;s energy supply today.
                </p>
              </motion.div>
              <HistoryCardCarousel
                images={HISTORY_CURRENT_IMAGES}
                slide={currentSlide}
                onSlideChange={setCurrentSlide}
                ariaLabelPrefix="Current TOR carousel"
              />
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
                  <div className={ABOUT_CONTENT_IMAGE_FRAME}>
                    <Image
                      src="/images/man-working.jpg"
                      alt="TOR mission in action"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-14 mt-24">
                  <div className={ABOUT_CONTENT_IMAGE_FRAME}>
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
