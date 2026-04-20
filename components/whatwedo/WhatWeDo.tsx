"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  IconFlask,
  IconTank,
  IconTruck,
  IconTools,
  IconSchool,
} from "@tabler/icons-react";
import Section from "@/components/Section";
import WhatWeDoHero from "@/components/whatwedo/WhatWeDoHero";
import { url } from "@/utils/url";

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
  { title: "Liquified Petroleum Gas (LPG)", image: "/images/whatwedo/liquified.webp" },
  { title: "Motor Gasoline", image: "/images/whatwedo/gasoline.webp" },
  { title: "Kerosene", image: "/images/whatwedo/kerosine.webp" },
  { title: "Aviation Turbine Kerosene (ATK)", image: "/images/whatwedo/aviation.webp" },
  // { title: "Diesel", image: "/images/whatwedo/diesel.webp" },
  { title: "Gas Oil (Diesel)", image: "/images/whatwedo/gas oil.webp" },
  { title: "Premix Fuel", image: "/images/whatwedo/premix.webp" },
  { title: "Cracked Fuels", image: "/images/whatwedo/cracked_oil.jpg" },


] as const;

const supportServices = [
  {
    title: "Product Quality Analysis",
    icon: IconFlask,
    image: `${url}/images/hero.jpg`,
    description:
      "Comprehensive laboratory testing and quality assurance services to ensure product excellence and compliance with industry standards.",
  },
  {
    title: "Storage Tanks Services",
    icon: IconTank,
    image: `${url}/images/tank-service.webp`,
    description:
      "Expert storage tank maintenance, inspection, and management services to ensure optimal performance and safety.",
  },
  {
    title: "Loading Rack Services",
    icon: IconTruck,
    image: `${url}/images/hero.jpg`,
    description:
      "Efficient and safe loading rack operations with advanced equipment and trained personnel for seamless product transfer.",
  },
  {
    title: "Maintenance Service",
    icon: IconTools,
    image: `${url}/images/hero.jpg`,
    description:
      "Professional maintenance and repair services to keep your equipment and facilities operating at peak performance.",
  },
  {
    title: "Training Services",
    icon: IconSchool,
    image: `${url}/images/hero.jpg`,
    description:
      "Comprehensive training programs to enhance skills, safety awareness, and operational excellence for your team.",
  },
];

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

              <div className="mt-8 grid grid-cols-1 gap-y-16 px-5 sm:grid-cols-2 sm:gap-x-24 sm:px-8 lg:px-32">
                {PRODUCT_TILES.map((product, index) => (
                  <article key={`${product.title}-${index}`}>
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    </div>
                    <p className="mt-3 inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#0B76A8] sm:text-xs">
                      <span className="h-px w-7 bg-[#0B76A8]" aria-hidden />
                      {product.title}
                    </p>
                  </article>
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
            className="bg-surface-50"
          >
            <Section
              title="Our services"
              description="Comprehensive services to support your operations"
              className="pt-16!"
            >
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {supportServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="group h-full cursor-pointer overflow-hidden rounded-xl border-2 border-transparent bg-white shadow-md transition-all duration-300 hover:border-primary-200 hover:shadow-2xl">
                      <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-primary-500 to-primary-600">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-600/25 to-primary-700/25 transition-all duration-300 group-hover:from-primary-600/20 group-hover:to-primary-700/20">
                          <div className="rounded-full bg-white/20 p-4 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
                            <service.icon className="h-12 w-12 text-white" />
                          </div>
                        </div>
                      </div>
                      <div className="bg-white p-8">
                        <div className="mb-4 flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 transition-colors duration-300 group-hover:bg-primary-200">
                            <service.icon className="h-5 w-5 text-primary-600" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-primary-600">
                            {service.title}
                          </h3>
                        </div>
                        <p className="leading-relaxed text-gray-600">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Section>
          </div>
        )}
      </section>
    </>
  );
}
