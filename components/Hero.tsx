"use client";

import Image from "next/image";
import Button from "./Button";
import { motion, useScroll, useTransform } from "framer-motion";
import { url } from "@/utils/url";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
}

export default function Hero({
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
}: HeroProps) {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 600], [0, 120]);

  return (
    <section className="relative text-white lg:h-[850px] w-full overflow-hidden">
      {/* Background Image with parallax */}
      <motion.div className="absolute inset-0 h-full" style={{ y: backgroundY }}>
        <Image
          src={`/images/hero.png`}
          alt="TOR Refinery"
          fill
          className="object-cover h-full"
          priority
          quality={100}
        />
        {/* <div className="absolute inset-0 bg-gradient-to-br from-primary-900/60 via-primary-800/50 to-primary-700/60" /> */}
      </motion.div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white font-black text-4xl md:text-5xl lg:text-7xl tracking-tight leading-tight">
          Ghana's Premier Oil Refinery
      </div>

      
    </section>
  );
}

