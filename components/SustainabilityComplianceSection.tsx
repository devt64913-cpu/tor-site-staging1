"use client";

import { motion } from "framer-motion";

const COMPLIANCE_FRAMEWORK = [
  {
    title: "Resource Efficiency",
    body: "Using raw materials and utilities effectively",
    color: "text-sky-900",
  },
  {
    title: "Environmental Standards",
    body: "Adhering to air, water, and noise regulations",
    color: "text-sky-900",
  },
  {
    title: "Waste Management",
    body: "Handling hazardous and non-hazardous waste responsibly",
    color: "text-sky-900",
  },
  {
    title: "Containment Systems",
    body: "Protecting against hazardous material leaks",
    color: "text-sky-900",
  },
  {
    title: "Legal Compliance",
    body: "Meeting all HSE legal and administrative requirements",
    color: "text-sky-900",
  },
  {
    title: "Standard Procedures",
    body: "Following established operating procedures",
    color: "text-sky-900",
  },
  {
    title: "Emergency Preparedness",
    body: "Having effective emergency response systems",
    color: "text-sky-900",
  },
  {
    title: "Personnel Training",
    body: "Ensuring competence through training and re-training",
    color: "text-sky-900",
  },
] as const;

export default function SustainabilityComplianceSection() {
  return (
    <section className="mb-16 mt-6 bg-white py-4 sm:py-5">
      <div className="relative w-full">
        <div className="relative bg-primary-500/30">
          <div className="relative rounded-br-[8rem] rounded-tl-[8rem] bg-primary-500 px-3 pb-6 pt-3 sm:rounded-br-[16rem] sm:rounded-tl-[16rem] sm:px-8 sm:pb-8 sm:pt-6 lg:rounded-br-[30rem] lg:rounded-tl-[30rem] lg:px-24 lg:pb-10 lg:pt-10">
            <div className="w-full rounded-3xl px-4 py-6 text-white sm:rounded-[2.5rem] sm:px-6 sm:py-8 lg:px-8 lg:py-10">
              <motion.h3
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-center text-xl font-extrabold tracking-tight text-primary-50 sm:text-3xl lg:text-4xl"
              >
                Environmental and Safety Compliance
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.48, ease: "easeOut", delay: 0.08 }}
                className="mx-auto mb-5 mt-3 max-w-3xl text-center text-sm text-primary-50/95 sm:mb-8 sm:text-base lg:mb-24"
              >
                Each control pillar is interconnected to keep operations compliant, safe, and
                environmentally responsible.
              </motion.p>

              <div className="mt-5 grid grid-cols-1 gap-3 sm:mt-7 lg:grid-cols-2 xl:hidden">
                {COMPLIANCE_FRAMEWORK.map((item, index) => (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.04 }}
                    whileHover={{ y: -3 }}
                    className="rounded-xl border border-sky-200/80 bg-sky-50/95 p-3 transition-shadow duration-200 hover:shadow-[0_10px_20px_rgba(3,74,119,0.15)]"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <h4 className={`text-base font-bold ${item.color}`}>{item.title}</h4>
                      <span className="h-2.5 w-2.5 rounded-full bg-sky-300" />
                    </div>
                    <p className="mt-1.5 text-sm text-sky-900/80">{item.body}</p>
                    <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-primary-700/70">
                      Step {String(index + 1).padStart(2, "0")}
                    </p>
                  </motion.article>
                ))}
              </div>

              <div className="mt-6 hidden xl:grid xl:grid-cols-[1fr_auto_1fr] xl:items-center xl:gap-6 2xl:gap-8">
                <div className="space-y-4">
                  {COMPLIANCE_FRAMEWORK.slice(0, 4).map((item, index) => (
                    <motion.article
                      key={item.title}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.35 }}
                      transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.05 }}
                      whileHover={{ y: -3 }}
                      className="rounded-xl border border-sky-200/80 bg-sky-50/95 p-3 shadow-[0_8px_20px_rgba(0,0,0,0.08)] transition-shadow duration-200 hover:shadow-[0_12px_22px_rgba(3,74,119,0.16)]"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <h4 className={`text-base font-bold leading-tight ${item.color}`}>
                          {item.title}
                        </h4>
                        <span className="text-[11px] font-semibold text-primary-700/70">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <p className="mt-1.5 text-sm leading-snug text-sky-900/80">{item.body}</p>
                    </motion.article>
                  ))}
                </div>

                <motion.div
                  className="relative h-96 w-96"
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full border-[3px] border-primary-100/85"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 24, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
                  />
                  <motion.div
                    className="absolute inset-22 rounded-full border border-primary-100 bg-white/95 backdrop-blur-sm"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 3.2, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
                  >
                    <div className="flex h-full items-center justify-center px-6 text-center text-sm font-semibold uppercase tracking-[0.09em] text-primary-900">
                      Compliance
                      <br />
                      Control Loop
                    </div>
                  </motion.div>
                  <motion.div
                    className="absolute inset-0"
                    initial={{ rotate: 0 }}
                    whileInView={{ rotate: 360 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 3.6, ease: "easeInOut" }}
                  >
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary-100 bg-primary-50 px-3 py-1 text-[11px] font-bold text-primary-900">
                      01
                    </div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full border-2 border-primary-100 bg-primary-50 px-3 py-1 text-[11px] font-bold text-primary-900">
                      03
                    </div>
                    <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 rounded-full border-2 border-primary-100 bg-primary-50 px-3 py-1 text-[11px] font-bold text-primary-900">
                      05
                    </div>
                    <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary-100 bg-primary-50 px-3 py-1 text-[11px] font-bold text-primary-900">
                      07
                    </div>
                  </motion.div>
                </motion.div>

                <div className="space-y-4">
                  {COMPLIANCE_FRAMEWORK.slice(4, 8).map((item, index) => (
                    <motion.article
                      key={item.title}
                      initial={{ opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.35 }}
                      transition={{ duration: 0.35, ease: "easeOut", delay: index * 0.05 }}
                      whileHover={{ y: -3 }}
                      className="rounded-xl border border-sky-200/80 bg-sky-50/95 p-3 shadow-[0_8px_20px_rgba(0,0,0,0.08)] transition-shadow duration-200 hover:shadow-[0_12px_22px_rgba(3,74,119,0.16)]"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <h4 className={`text-base font-bold leading-tight ${item.color}`}>
                          {item.title}
                        </h4>
                        <span className="text-[11px] font-semibold text-primary-700/70">
                          {String(index + 5).padStart(2, "0")}
                        </span>
                      </div>
                      <p className="mt-1.5 text-sm leading-snug text-sky-900/80">{item.body}</p>
                    </motion.article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
