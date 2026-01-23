"use client";

import Image from "next/image";
import Button from "./Button";
import { motion } from "framer-motion";
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
  return (
    <section className="relative text-white py-40 lg:py-56 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={`${url}/images/hero.jpg`}
          alt="TOR Refinery"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/60 via-primary-800/50 to-primary-700/60"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {subtitle && (
              <motion.p
                className="text-primary-100 text-lg font-medium mb-4"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6 }}
              >
                {subtitle}
              </motion.p>
            )}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.7 }}
            >
              {title}
            </motion.h1>
            {description && (
              <motion.p
                className="text-xl text-primary-100 mb-8 leading-relaxed max-w-2xl"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {description}
              </motion.p>
            )}
            {(primaryAction || secondaryAction) && (
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {primaryAction && (
                  <Button href={primaryAction.href} variant="secondary" size="lg">
                    {primaryAction.label}
                  </Button>
                )}
                {secondaryAction && (
                  <Button href={secondaryAction.href} variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white/20">
                    {secondaryAction.label}
                  </Button>
                )}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

