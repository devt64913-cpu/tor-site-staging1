"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Carousel from "@/components/Carousel";
import { IconCheck, IconWorld, IconBook, IconSettings, IconFlame, IconDatabase, IconTank, IconUsers, IconChevronDown } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { url } from "@/utils/url";
import CountUp from "@/components/CountUp";

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
        primaryAction={{ label: "Learn More", href: "/about" }}
        secondaryAction={{ label: "What We Do", href: "/what-we-do" }}
      />

      {/* Managing Director's Message Section */}
      <Section
        title="Message from the Managing Director"
        className="bg-white"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="border-l-4 border-primary-500 bg-surface-50 rounded-r-xl p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
              {/* Director Photo/Info */}
              <div className="flex-shrink-0 text-center md:text-left">
                <div className="w-40 h-40 md:w-48 md:h-48 bg-primary-100 rounded-full mx-auto md:mx-0 mb-4 flex items-center justify-center overflow-hidden relative">
                  {/* MD Image - Update src with actual image URL when available */}
                  {/* If image URL is found, uncomment and update the Image component below */}
                  <Image
                    src={`${url}/images/tor_md.jpeg`}
                    alt="Mr. Edmund Kombat, Managing Director"
                    width={192}
                    height={192}
                    className="rounded-full object-cover w-full h-full"
                  />
                  {/* <span className="text-4xl font-bold text-primary-600">
                    EK
                  </span> */}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Mr. Edmund Kombat</h3>
                <p className="text-primary-500 font-semibold mb-2">Managing Director</p>
                <p className="text-sm text-gray-600">Tema Oil Refinery</p>
              </div>

              {/* Message Content */}
              <div className="flex-1">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Welcome to Tema Oil Refinery. For over six decades we have been refining crude oil at the heart of Ghana&apos;s energy sector, 
                    consistently delivering quality petroleum products including Aviation Turbine Kerosene (ATK) and premix fuel for Ghana&apos;s fishing sector.
                  </p>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Our commitment to innovation, sustainability, and operational excellence has positioned us as a trusted leader 
                    in the energy sector. We take pride in our facilities, our dedicated team, 
                    and our unwavering focus on safety and environmental stewardship.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    As we look to the future, we remain dedicated to ranking among the sub-region&apos;s most productive refineries through 
                    cutting-edge technology, sustainable practices, and a deep commitment to creating value for Ghana and our stakeholders. 
                    Thank you for your interest in Tema Oil Refinery.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-gray-600 italic">— Mr. Edmund Kombat, Managing Director</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Features Section */}
      <Section
        title="Why Choose TOR"
        description="We combine cutting-edge technology with decades of expertise to deliver exceptional results."
        className="bg-surface-50"
      >
        <motion.div
          className="space-y-6 mb-12 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.div
            variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.5 }}
            className="flex gap-6 items-start p-6 rounded-xl bg-white border-l-4 border-primary-500 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 shrink-0 bg-primary-100 rounded-lg flex items-center justify-center">
              <IconCheck className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Operational Excellence</h3>
              <p className="text-gray-600">
                State-of-the-art facilities and processes ensuring the highest quality standards in every operation.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.5 }}
            className="flex gap-6 items-start p-6 rounded-xl bg-white border-l-4 border-tor-teal-500 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 shrink-0 bg-tor-teal-100 rounded-lg flex items-center justify-center">
              <IconWorld className="w-6 h-6 text-tor-teal-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sustainability Focus</h3>
              <p className="text-gray-600">
                Committed to environmental responsibility and sustainable practices for a better future.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.5 }}
            className="flex gap-6 items-start p-6 rounded-xl bg-white border-l-4 border-tor-amber-500 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 shrink-0 bg-tor-amber-100 rounded-lg flex items-center justify-center">
              <IconBook className="w-6 h-6 text-tor-amber-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation & Technology</h3>
              <p className="text-gray-600">
                Leveraging the latest technologies and innovative solutions to stay ahead of the curve.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Capacity Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.h3
            className="text-2xl font-bold text-gray-900 text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Production & Storage Capacity
          </motion.h3>
          <Carousel
            autoPlay
            continuousScroll
            scrollSpeed={0.7}
            showArrows={false}
            showDots={false}
            loop
          >
            <div className="text-center p-6 rounded-xl bg-primary-50/80 border border-primary-200 h-full flex flex-col">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <IconSettings className="w-8 h-8 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-primary-600 mb-2">45,000</div>
              <div className="text-sm text-gray-600 font-medium mb-1">BPSD</div>
              <div className="text-sm text-gray-700 font-semibold">CDU Capacity</div>
              <p className="text-xs text-gray-500 mt-1">Crude Distillation Unit</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-tor-teal-50 border border-tor-teal-200 h-full flex flex-col">
              <div className="w-16 h-16 bg-tor-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <IconFlame className="w-8 h-8 text-tor-teal-600" />
              </div>
              <div className="text-3xl font-bold text-tor-teal-600 mb-2">14,000</div>
              <div className="text-sm text-gray-600 font-medium mb-1">BPSD</div>
              <div className="text-sm text-gray-700 font-semibold">RFCC Capacity</div>
              <p className="text-xs text-gray-500 mt-1">Residue Fluid Catalytic Cracking</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-primary-50/80 border border-primary-200 h-full flex flex-col">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <IconDatabase className="w-8 h-8 text-primary-600" />
              </div>
              <div className="text-2xl font-bold text-primary-600 mb-2">262,652</div>
              <div className="text-sm text-gray-600 font-medium mb-1">MT</div>
              <div className="text-sm text-gray-700 font-semibold">White Product Storage</div>
            </div>

            <div className="text-center p-6 rounded-xl bg-tor-teal-50 border border-tor-teal-200 h-full flex flex-col">
              <div className="w-16 h-16 bg-tor-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <IconTank className="w-8 h-8 text-tor-teal-600" />
              </div>
              <div className="text-2xl font-bold text-tor-teal-600 mb-2">1,925,348</div>
              <div className="text-sm text-gray-600 font-medium mb-1">BBL</div>
              <div className="text-sm text-gray-700 font-semibold">Crude Storage</div>
            </div>
          </Carousel>
        </motion.div>
      </Section>

      {/* Stats Section */}
      <Section title="Our Impact in Numbers">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <motion.div
            className="text-center min-h-[100px]"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">
              <CountUp end={60} suffix="+" duration={2.2} />
            </div>
            <div className="text-gray-600 font-medium">Years Refining</div>
          </motion.div>
          <motion.div
            className="text-center min-h-[100px]"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-4xl md:text-5xl font-bold text-tor-teal-600 mb-2">
              <CountUp end={500} suffix="K+" duration={2.2} />
            </div>
            <div className="text-gray-600 font-medium">Barrels Per Day</div>
          </motion.div>
          <motion.div
            className="text-center min-h-[100px]"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">
              <CountUp end={1000} suffix="+" duration={2.2} />
            </div>
            <div className="text-gray-600 font-medium">Employees</div>
          </motion.div>
          <motion.div
            className="text-center min-h-[100px]"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-4xl md:text-5xl font-bold text-tor-amber-500 mb-2">
              <CountUp end={99.9} suffix="%" decimals={1} duration={2.2} />
            </div>
            <div className="text-gray-600 font-medium">Safety Record</div>
          </motion.div>
        </motion.div>
      </Section>

      {/* FAQ Section */}
      <Section
        title="Frequently Asked Questions"
        description="Quick answers to common questions about TOR Refinery and our operations."
        className="bg-white"
      >
        <motion.div
          className="max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
        >
          <div className="space-y-2">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4 }}
                  className="rounded-xl border border-gray-200 overflow-hidden bg-gray-50/50 hover:bg-gray-50 transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded-xl"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                  >
                    <span className="pr-4">{faq.question}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary-100 text-primary-600"
                    >
                      <IconChevronDown className="w-5 h-5" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        role="region"
                        aria-labelledby={`faq-question-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ height: { duration: 0.35, ease: "easeInOut" }, opacity: { duration: 0.25 } }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-200/80">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Section>

      {/* CTA Section */}
      <Section
        title="Ready to Partner With Us?"
        description="Discover how TOR Refinery can meet your energy needs with excellence and reliability."
        className="bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <IconUsers className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold">Let&apos;s Build Something Great Together</h3>
            </div>
            <p className="text-lg text-primary-100 mb-8 leading-relaxed">
              Partner with TOR Refinery and experience the difference that comes with working with an industry leader. 
              We offer reliable supply, competitive pricing, and exceptional service to meet all your energy needs.
            </p>
            <Button href="/what-we-do" variant="secondary" size="lg">
              Explore What We Do
            </Button>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
