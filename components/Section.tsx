"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  id?: string;
}

export default function Section({
  children,
  className = "",
  containerClassName = "",
  title,
  subtitle,
  description,
  id
}: SectionProps) {
  return (
    <section id={id} className={`py-16 lg:py-24 ${className}`}>
      <div className={`container mx-auto px-4 lg:px-8 ${containerClassName}`}>
        {(title || subtitle || description) && (
          <motion.div
            className="text-center max-w-4xl mx-auto mb-12 lg:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            {subtitle && (
              <motion.p
                className="text-primary-500 font-semibold text-sm uppercase tracking-wider mb-2"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
              >
                {subtitle}
              </motion.p>
            )}
            {title && (
              <motion.h2
                className={`text-2xl md:text-xl lg:text-3xl font-black mb-4 text-primary-900`}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6 }}
              >
                {title}
              </motion.h2>
            )}
            {description && (
              <motion.p
                className={`text-lg leading-relaxed ${className.includes('text-white') ? 'text-white' : 'text-gray-600'}`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5 }}
              >
                {description}
              </motion.p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
