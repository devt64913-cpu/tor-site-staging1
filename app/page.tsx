"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { IconCheck, IconWorld, IconBook, IconSettings, IconFlame, IconDatabase, IconTank, IconUsers, IconChevronDown } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { url } from "@/utils/url";
import CountUp from "@/components/CountUp";
import CDU from "@/components/home/CDU";
import RFCC from "@/components/home/RFCC";
import ProductStorage from "@/components/home/ProductStorage";
import CrudeStorage from "@/components/home/CrudeStorage";
import OurCommitment from "@/components/home/OurCommitment";
import Newsroom from "@/components/home/Newsroom";

const faqs = [
  {
    question: "What products does TOR produce?",
    answer: "TOR produces LPG, light and heavy naphtha, illuminating kerosene, Aviation Turbine Kerosene (ATK), diesel, residual fuel oil, and premix fuel for Ghana's fishing sector. The RFCC unit produces fuel gas, LPG, gasoline (94 RON), light cycle oil, heavy cycle oil, and clarified oil.",
  },
  {
    question: "How can I become a supplier or partner?",
    answer: "We welcome inquiries from qualified suppliers and partners. Explore current procurement opportunities on our Procurement page and submit a proposal. For general partnership inquiries, use the form on our Investor Contacts page.",
  },
  {
    question: "What are TOR's operating hours?",
    answer: "Our offices at Heavy Industrial Area, Valco Road, Tema are open Monday to Friday from 8:00 a.m. to 3:30 p.m.",
  },
  {
    question: "Where is Tema Oil Refinery located?",
    answer: "TOR is located in the Heavy Industrial Area, Valco Road, Tema, 24 kilometres from Accra. Our mailing address is P.O. Box CO 599, Tema, Ghana. The refinery is linked to the Port of Tema by pipelines.",
  },
  {
    question: "What crude oils does TOR process?",
    answer: "We process light and low-sulfur crude oils including Bonny Light and Brass River from Nigeria, Palanca Blend from Angola, and crude from Equatorial Guinea, Cameroon, and Gabon.",
  },
];

export default function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <>
      <Hero
        title="Refining Crude Since 1963"
        subtitle="Tema Oil Refinery"
        description="Ghana's premier crude oil refinery. We provide quality energy products and services to power Ghana's economic growth in an environmentally sustainable manner."
        primaryAction={{ label: "Learn More", href: "/whoweare" }}
        secondaryAction={{ label: "What We Do", href: "/what-we-do" }}
      />

      <Section
        title="Our Production And Storage Capacity"
        className="text-primary"
      >
        <div className="flex items-center justify-evenly">

          <CDU />
          <RFCC />
          <ProductStorage />
          <CrudeStorage />
        </div>

      </Section>

      {/* Managing Director — title fully visible first; MD block (z-10) scrolls up and covers sticky title */}
      <Section
        // title="Message from the Managing Director"
        className="bg-white pt-0"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative isolate">
            {/* No overlap on first paint — card sits below with mt. Sticky + z-0 so the z-10 card can pass over it while scrolling. */}
            <div className="sticky top-16 z-0 bg-white lg:top-20">
              <p className="text-center text-3xl font-black uppercase text-primary-500 sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px]">
                Tor Wel
                <span className="text-primary-950">comes you</span>
              </p>
            </div>

            <div className="relative z-10 mt-6 bg-primary-200 sm:mt-16">
              <div
                className="max-h-[min(75vh,40rem)] overflow-y-auto overscroll-y-auto scroll-smooth touch-pan-y sm:max-h-[min(78vh,44rem)] lg:max-h-[min(82vh,48rem)] [scrollbar-gutter:stable]"
                tabIndex={0}
                aria-label="Managing Director message"
              >
                <div className="flex flex-col bg-primary-950 pt-6 text-white sm:pt-8 md:pt-10 lg:flex-row lg:rounded-tr-[240px] lg:rounded-bl-[240px] xl:rounded-tr-[300px] xl:rounded-bl-[300px] rounded-tr-[72px] rounded-bl-[72px] sm:rounded-tr-[120px] sm:rounded-bl-[120px] md:rounded-tr-[180px] md:rounded-bl-[180px] shadow-[0_-12px_40px_-8px_rgba(0,0,0,0.15)]">
                  <div className="min-w-0 flex-1 px-4 pb-6 sm:px-6 sm:pb-8 md:px-10 md:pb-10 lg:px-12 lg:pb-12 xl:pl-16 xl:pr-8 2xl:pl-24 2xl:pr-10">
                    <p className="text-xl font-black uppercase sm:text-2xl md:text-3xl lg:text-2xl xl:text-[25px]">
                      MANAGING DIREC
                      <span className="text-primary-500">TOR&apos;S MESSSAGE</span>
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-white sm:mt-5 sm:text-sm md:mt-6 xl:text-base">
                      It is a new and dynamic time at TOR Ltd., one driven by a bold strategy aimed at maximizing the potential and utilization of existing assets to enhance efficiency, productivity, and ultimately increase profitability. <br /><br />

                      The company has a clear vision to effectively sweat its assets and progressively transitioned into the core of complete refining operations. <br /> <br />

                      TOR has evolved remarkably over the years, and we are committed to transitioning the refinery&apos;s viability and sustainability through the sweating of the assets. <br /> <br />

                      Key initiatives include improving operations and maintenance of assets, upgrading assets with new technologies, exploring new prospects and markets, and implementing a 24/7 shift system at the refinery&apos;s loading gantry among other measures to augment operational efficiency and sustainability.
                    </p>

                    <div className="mt-6 sm:mt-8 sm:ml-4 md:ml-8 lg:ml-12 xl:ml-16">
                      <p className="text-lg font-bold text-white sm:text-xl md:text-2xl lg:text-3xl xl:text-[32px]">
                        EDMOND KOMBAT, ESQ
                      </p>
                      <p className="mt-1 text-base font-bold leading-tight text-primary-500 sm:text-lg sm:ml-4 md:ml-6 md:text-xl lg:ml-7 lg:text-2xl xl:text-[24px]">
                        Managing Director - TOR
                      </p>
                    </div>
                  </div>

                  <div className="relative h-56 w-full shrink-0 sm:h-64 md:h-72 lg:h-auto lg:min-h-[280px] lg:w-[42%] xl:w-[50%]">
                    <Image
                      src="/images/tor_md.png"
                      alt="Managing Director"
                      fill
                      className="object-cover object-top lg:object-center"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <OurCommitment />

      <Newsroom />
      

      

      

      
    </>
  );
}
