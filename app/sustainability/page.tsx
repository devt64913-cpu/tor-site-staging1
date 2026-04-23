"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SustainabilityComplianceImageSection from "@/components/SustainabilityComplianceImageSection";
import SustainabilityComplianceSection from "@/components/SustainabilityComplianceSection";
import SustainabilityPolicySection from "@/components/SustainabilityPolicySection";

const heroEase = [0.16, 1, 0.3, 1] as const;

const heroContentVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2, delayChildren: 0.22 },
  },
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 52, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.82, ease: heroEase },
  },
};

const heroHeadlineVariants = {
  hidden: { opacity: 0, y: 64, x: -28 },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.95, ease: heroEase },
  },
};

const heroPanelVariants = {
  hidden: { opacity: 0, y: 56 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.88, ease: heroEase, delay: 0.55 },
  },
};

const heroPillVariants = {
  hidden: { opacity: 0, scale: 0.82, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.62, ease: heroEase },
  },
};

const bottomGridVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.72 },
  },
};

const bottomCardVariants = {
  hidden: { opacity: 0, y: 36, scale: 0.92 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.62, ease: heroEase },
  },
};

const BOTTOM_ITEMS = [
  {
    title: "Prevention",
    body: "Pollution avoidance and mitigation.",
  },
  {
    title: "Compliance",
    body: "Full legal and regulatory alignment.",
  },
  {
    title: "Efficiency",
    body: "Responsible use of materials and utilities.",
  },
  {
    title: "Readiness",
    body: "Effective emergency response systems.",
  },
] as const;

export default function Sustainability() {
  return (
    <>
      <section className="relative mb-0 w-full pt-16 lg:pt-20">
        <div className="relative min-h-[min(76vh,720px)] w-full overflow-hidden bg-primary-950">
          <motion.div
            className="relative h-[min(76vh,720px)] w-full"
            initial={{ scale: 1.14, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.45, ease: heroEase }}
          >
            <Image
              src="/images/our-commitment/environment.jpg"
              alt="Environmental stewardship at Tema Oil Refinery"
              fill
              className="object-cover object-center"
              priority
            />
          </motion.div>

          <motion.div
            className="pointer-events-none absolute inset-0 z-10 bg-linear-to-br from-[#032c45]/88 via-[#063a58]/58 to-[#0d6b92]/35"
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.15, ease: "easeOut", delay: 0.15 }}
          />

          <div className="absolute inset-0 z-20 flex min-h-[min(76vh,720px)] flex-col justify-between px-4 pb-20 pt-20 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
            <motion.div
              className="pointer-events-none flex flex-1 flex-col items-start justify-center"
              variants={heroContentVariants}
              initial="hidden"
              animate="show"
            >
              <motion.p
                variants={heroPillVariants}
                className="pointer-events-auto mb-4 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/95 sm:text-xs"
              >
                Sustainability at TOR
              </motion.p>
              <motion.h1
                variants={heroHeadlineVariants}
                className="pointer-events-auto max-w-4xl text-left text-3xl font-bold leading-tight tracking-tight text-white drop-shadow-sm sm:text-4xl md:text-5xl lg:max-w-5xl lg:text-[3.4rem]"
              >
                Cleaner energy, safer operations, and measurable environmental accountability.
              </motion.h1>
              <motion.p
                variants={heroItemVariants}
                className="pointer-events-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base"
              >
                We refine with a clear environmental mandate: prevent pollution, improve
                performance continuously, and comply fully with legal and regulatory
                standards across all operations.
              </motion.p>
              <motion.div variants={heroItemVariants} className="pointer-events-auto">
                <Link
                  href="#sustainability-tabs"
                  className="my-8 inline-flex items-center self-start rounded-lg bg-primary-500 px-7 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-primary-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-base"
                >
                  Explore Policy Commitments
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="pointer-events-auto w-full min-w-0"
              variants={heroPanelVariants}
              initial="hidden"
              animate="show"
            >
              <motion.div
                className="mb-4 h-px w-full origin-left bg-white/30"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1.05, ease: heroEase, delay: 0.58 }}
              />
              <motion.div
                className="grid grid-cols-2 gap-3 rounded-xl border border-white/15 bg-black/15 p-3 backdrop-blur-[1px] sm:grid-cols-4 sm:p-4"
                variants={bottomGridVariants}
                initial="hidden"
                animate="show"
              >
                {BOTTOM_ITEMS.map((item) => (
                  <motion.div key={item.title} variants={bottomCardVariants}>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.09em] text-cyan-200 sm:text-[11px]">
                      {item.title}
                    </p>
                    <p className="mt-1 text-[11px] leading-snug text-white/85 sm:text-xs">
                      {item.body}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <SustainabilityPolicySection />
      <SustainabilityComplianceImageSection />
      <SustainabilityComplianceSection />
    </>
  );
}

