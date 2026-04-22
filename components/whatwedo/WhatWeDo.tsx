"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  IconFlask,
  IconTank,
  IconTools,
  IconSchool,
} from "@tabler/icons-react";
import WhatWeDoHero from "@/components/whatwedo/WhatWeDoHero";

const TABS = [
  { id: "business" as const, label: "Our business" },
  { id: "products" as const, label: "Our products" },
  { id: "services" as const, label: "Our services" },
] as const;

const TAB_BAR = "bg-primary-400";
const TAB_ACTIVE =
  "bg-[#004A77] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]";

/** Staggered 2-col grid: col1 = Downstream + Importing; col2 = Terminal + Marketing (offset down). */
const BUSINESS_CARDS = [
  {
    title: "Downstream refining",
    description:
      "Tema Oil Refinery (TOR) Ltd. is the nation's first value-added investment after the Akosombo dam. We process crude through integrated distillation and conversion units, delivering LPG, gasoline, diesel, kerosene, and residual products for Ghana's economy.",
  },
  {
    title: "Terminal business",
    description:
      "Storage, loading racks, and port-linked infrastructure at Tema support receipt, blending, and dispatch of crude and refined products—linking the refinery site to the Port of Tema by pipeline for efficient logistics.",
  },
  {
    title: "Importing",
    description:
      "TOR receives crude oil and feedstocks aligned with national supply and tolling arrangements, enabling reliable operations and partnerships across the sector.",
  },
  {
    title: "Marketing",
    description:
      "We supply industry, aviation, fisheries, and retail channels—including exclusive Aviation Turbine Kerosene (ATK) and premix fuel for Ghana's fishing sector.",
  },
] as const;

/** TL & BR large, TR & BL tight — matches design (e.g. 40px / 6px). */
const BUSINESS_IMAGE_CORNERS =
  "rounded-[2.5rem_0.375rem_2.5rem_0.375rem]";

const PRODUCT_TILES = [
  {
    title: "Liquefied Petroleum Gas (LPG)",
    image: "/images/whatwedo/liquified.webp",
    description:
      "The main constituents of LPG produced by Tema Oil Refinery are propane and butane. It is environmentally friendly and used as domestic, commercial, and industrial fuel.",
  },
  {
    title: "Motor Gasoline (Mogas)",
    image: "/images/whatwedo/gasoline.webp",
    description:
      "Produced mainly for motor vehicles with internal combustion engines. TOR supplies single-grade gasoline with Methyl Cyclopentadienyl Manganese Tricarbonyl (MMT) as an octane enhancer.",
  },
  {
    title: "Kerosene",
    image: "/images/whatwedo/kerosine.webp",
    description:
      "A petroleum distillate used for illumination in wick-fed lamps and for cooking in stoves and pressure burners, especially useful for rural communities.",
  },
  {
    title: "Aviation Turbine Kerosene (Jet A1)",
    image: "/images/whatwedo/aviation.webp",
    description:
      "A special grade of kerosene with stringent specifications that is suitable for use in aircraft engines.",
  },
  {
    title: "Gas Oil (Diesel)",
    image: "/images/whatwedo/gas oil.webp",
    description:
      "Commonly referred to as diesel oil, suitable for high-speed diesel engines. TOR gas oil normally contains about 0.15wt% sulphur and a viscosity range of 2.5 centistokes.",
  },
  {
    title: "Premix",
    image: "/images/whatwedo/premix.webp",
    description:
      "A purpose-made fuel for fisher folks using outboard motors. It is a blend of Marine Mix lubricants and gasoline in the ratio 1:29, suitable for two-stroke engines.",
  },
  {
    title: "Cracked Fuels",
    image: "/images/whatwedo/cracked_oil.jpg",
    description:
      "A blend of Light Cycle Oil, Heavy Cycle Oil, and Clarified Oil from the RFCC unit. These are mixed in varying ratios to produce inland diesel oil and inland fuel oil.",
  },
] as const;

const supportServices = [
  {
    title: "Product Quality Analysis",
    icon: IconFlask,
    image: "/images/whatwedo/our-business.png",
    description:
      "Done by the refinery's Quality Control Department, TOR certifies and recertifies third-party products transferred into refinery storage tanks to confirm product integrity before onward handling.",
  },
  {
    title: "Storage Tank Services",
    icon: IconTank,
    image: "/images/whatwedo/our-business.png",
    description:
      "TOR has one of the largest petroleum storage capacities, supporting the safe custody of crude oil, LPG, condensate, naphtha, gasoline premix, kerosene, ATK, gasoil, and fuel oil.",
  },
  {
    title: "Loading Rack Services",
    icon: IconTools,
    image: "/images/whatwedo/our-business.png",
    description:
      "TOR provides loading rack services for Bulk Distribution Companies (BDCs) storing imported products in refinery tanks for onward sale and distribution to Oil Marketing Companies (OMCs).",
  },
  {
    title: "Maintenance Services",
    icon: IconTools,
    image: "/images/whatwedo/our-business.png",
    description:
      "TOR performs a wide range of engineering services, including valve replacement and maintenance, pipe replacement and maintenance, installation, commissioning, instrumentation, and other comprehensive maintenance tasks.",
  },
  {
    title: "Training Services",
    icon: IconSchool,
    image: "/images/whatwedo/our-business.png",
    description:
      "TOR offers commercial training for industry workers in upstream and downstream operations, with prior training delivered for MODEC and National Petroleum Authority personnel.",
  },
];

const SERVICES_ROW_MOTION = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
} as const;

function ProductCard({
  title,
  image,
  description,
}: {
  title: string;
  image: string;
  description: string;
}) {
  return (
    <article className="group relative mx-auto w-full max-w-[36rem] overflow-hidden rounded-lg shadow-lg">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[9] h-[55%] bg-gradient-to-t from-black/65 via-black/35 to-transparent transition-opacity duration-300 group-hover:opacity-0"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-[8] translate-y-full bg-black/70 transition-transform duration-500 ease-out group-hover:translate-y-0"
        aria-hidden
      />

      <div className="absolute inset-x-0 bottom-0 z-10 p-4 transition-opacity duration-300 group-hover:pointer-events-none group-hover:opacity-0 sm:p-5">
        <p className="inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white sm:text-xs">
          <span className="h-px w-7 bg-primary-300" aria-hidden />
          {title}
        </p>
      </div>

      <div className="pointer-events-none absolute inset-0 z-20 flex flex-col p-4 opacity-0 transition-opacity duration-300 group-hover:pointer-events-auto group-hover:opacity-100 sm:p-5">
        <h3 className="shrink-0 border-b-2 border-primary-300 pb-1 text-sm font-bold uppercase tracking-wide text-white sm:text-base">
          {title}
        </h3>
        <p className="mt-3 overflow-y-auto text-sm leading-relaxed text-white/95">
          {description}
        </p>
      </div>
    </article>
  );
}

export default function WhatWeDo() {
  const [tab, setTab] = useState<(typeof TABS)[number]["id"]>("business");

  return (
    <>
      <WhatWeDoHero />

      <section
        id="what-we-do-tabs"
        className="mt-0 scroll-mt-20"
        aria-label="What we do sections"
      >
        <div className={`w-full ${TAB_BAR} px-4 py-3 sm:px-6 lg:px-8`}>
          <div
            role="tablist"
            aria-orientation="horizontal"
            className="mx-auto flex max-w-6xl flex-col items-stretch gap-2 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-2 md:gap-3"
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
                  className={`min-h-[48px] w-auto max-w-full shrink-0 rounded-lg px-5 py-2.5 text-center text-sm font-semibold transition-colors duration-200 sm:min-h-0 sm:px-6 sm:text-base ${
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

        {tab === "business" && (
          <div
            id="panel-business"
            role="tabpanel"
            aria-labelledby="tab-business"
            className="bg-white"
          >
            <div className="mx-auto max-w-[80rem] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
              <h2 className="sr-only">Our business</h2>
              <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-x-8 lg:gap-x-14">
                <div className="flex flex-1 flex-col gap-16 lg:gap-32">
                  {[0, 2].map((i) => {
                    const card = BUSINESS_CARDS[i];
                    return (
                      <article
                        key={card.title}
                        className="flex flex-col text-left"
                      >
                        <div
                          className={`relative aspect-[16/10] w-full overflow-hidden bg-neutral-200 ${BUSINESS_IMAGE_CORNERS}`}
                        >
                          <Image
                            src="/images/whatwedo/our-business.png"
                            alt={`${card.title} at Tema Oil Refinery`}
                            fill
                            className="object-cover object-center"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority={i === 0}
                          />
                        </div>
                        <h3 className="mt-5 text-lg font-bold leading-snug text-[#28A9E0] sm:text-xl">
                          {card.title}
                        </h3>
                        <p className="mt-3 text-[0.9375rem] leading-[1.5] text-[#1D4261] sm:text-base">
                          {card.description}
                        </p>
                      </article>
                    );
                  })}
                </div>
                <div className="flex flex-1 flex-col gap-16 md:mt-0 md:pt-20 lg:gap-32 lg:pt-28">
                  {[1, 3].map((i) => {
                    const card = BUSINESS_CARDS[i];
                    return (
                      <article
                        key={card.title}
                        className="flex flex-col text-left"
                      >
                        <div
                          className={`relative aspect-[16/10] w-full overflow-hidden bg-neutral-200 ${BUSINESS_IMAGE_CORNERS}`}
                        >
                          <Image
                            src="/images/whatwedo/our-business.png"
                            alt={`${card.title} at Tema Oil Refinery`}
                            fill
                            className="object-cover object-center"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                        <h3 className="mt-5 text-lg font-bold leading-snug text-[#28A9E0] sm:text-xl">
                          {card.title}
                        </h3>
                        <p className="mt-3 text-[0.9375rem] leading-[1.5] text-[#1D4261] sm:text-base">
                          {card.description}
                        </p>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {tab === "products" && (
          <div
            id="panel-products"
            role="tabpanel"
            aria-labelledby="tab-products"
            className="bg-white"
          >
            <div className="w-full py-10 sm:py-12 lg:py-14">
              <h2 className="sr-only">Our products</h2>

              <div className="mt-8 mb-16 flex h-auto w-full flex-col lg:mb-24 lg:h-[340px] lg:flex-row">
                <article className="my-0 bg-primary-400 px-7 py-8 text-white sm:px-10 sm:py-10 lg:my-10 lg:w-[47vw] lg:px-10 lg:py-8 xl:px-16 xl:py-10">
                  <h3 className="text-[1.25rem] leading-tight font-semibold tracking-wide sm:text-4xl lg:max-w-3xl lg:text-[1.1rem] xl:text-[1.35rem]">
                    For over 40 years, we&apos;ve discovered, produced and
                    delivered critical energy and products to people around the
                    world.
                  </h3>
                  <p className="mt-5 text-xl leading-snug text-[#123E5D] sm:text-2xl lg:max-w-3xl lg:text-[0.95rem] xl:text-[1.15rem]">
                    We continue to evolve to meet growing global demand for oil,
                    natural gas and refined products and plan to play a leading
                    role in the energy transition.
                  </p>
                </article>

                <article className="relative h-[220px] w-full sm:h-[280px] lg:h-full lg:w-[52vw]">
                  <Image
                    src="/images/whatwedo/oil-tanks.png"
                    alt="Oil tanks representing TOR products portfolio"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 52vw"
                  />
                </article>
              </div>

              <div className="mt-8 grid grid-cols-1 justify-items-center gap-y-8 px-5 sm:grid-cols-2 sm:gap-x-8 sm:px-8 lg:grid-cols-3 lg:gap-x-8 lg:px-12">
                {PRODUCT_TILES.map((product, index) => (
                  <ProductCard
                    key={`${product.title}-${index}`}
                    title={product.title}
                    image={product.image}
                    description={product.description}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "services" && (
          <div
            id="panel-services"
            role="tabpanel"
            aria-labelledby="tab-services"
            className="bg-[#004A77]"
          >
            <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
              <h2 className="sr-only">Our services</h2>
              <div className="grid grid-cols-1 gap-12 lg:gap-16">
                {supportServices.map((service, index) => (
                  <motion.article
                    key={service.title}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={SERVICES_ROW_MOTION}
                    transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.08 }}
                    className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12"
                  >
                    <motion.div
                      className={`relative aspect-[4/3] w-full overflow-hidden rounded-[1.4rem] ${
                        index % 2 === 1 ? "lg:order-2" : ""
                      }`}
                      whileHover={{ scale: 1.015 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </motion.div>

                    <motion.div
                      className={`${index % 2 === 1 ? "lg:order-1" : ""}`}
                      initial={{ opacity: 0, x: 18 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 + index * 0.06 }}
                    >
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white transition-transform duration-300 hover:scale-105">
                        <service.icon className="h-7 w-7 text-[#004A77]" />
                      </div>
                      <h3 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
                        {service.title}
                      </h3>
                      <div className="mt-3 h-px w-20 bg-primary-300" />
                      <p className="mt-4 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
                        {service.description}
                      </p>
                    </motion.div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
