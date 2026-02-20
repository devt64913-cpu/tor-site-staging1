"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { IconCheck, IconWorld, IconBook, IconSettings, IconFlame, IconDatabase, IconTank, IconPhone, IconMail, IconMapPin, IconClock, IconUsers, IconChevronDown } from "@tabler/icons-react";
import MailLink from "@/components/MailLink";
import PhoneLink from "@/components/PhoneLink";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { url } from "@/utils/url";

const faqs = [
  {
    question: "What products does TOR Refinery produce?",
    answer: "TOR Refinery produces a wide range of petroleum products including gasoline, diesel, jet fuel, liquefied petroleum gas (LPG), and specialty chemicals. Our facilities are equipped to process various grades of crude oil into high-quality products that meet international standards.",
  },
  {
    question: "How can I become a supplier or partner?",
    answer: "We welcome inquiries from qualified suppliers and partners. You can explore current procurement opportunities on our Procurement page and submit a proposal for specific items. For general partnership inquiries, please use our Contact Us form or reach out to our investor relations team through the Investor Contacts page.",
  },
  {
    question: "What are TOR Refinery's operating hours?",
    answer: "Our headquarters in Tema, Ghana is open Monday through Friday from 7:30 AM to 4:30 PM GMT. For urgent matters outside these hours, please email us and we will respond as soon as possible.",
  },
  {
    question: "Where is TOR Refinery located?",
    answer: "TOR Refinery is headquartered in Tema, Ghana (PO Box 599). Our strategic location supports efficient supply chain operations and allows us to serve regional and international markets. You can view our exact location on the map available on our Investor Contacts page.",
  },
  {
    question: "How does TOR Refinery approach sustainability?",
    answer: "Sustainability is at the core of our operations. We are committed to reducing our environmental footprint through improved efficiency, emissions reduction programs, and investment in cleaner technologies. We have set measurable targets and report on our progress in line with industry best practices.",
  },
];

export default function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  return (
    <>
      <Hero
        title="Leading the Future of Oil Refining"
        subtitle="TOR Refinery"
        description="We are committed to excellence in oil refining, delivering high-quality products while prioritizing sustainability, safety, and innovation in everything we do."
        primaryAction={{ label: "Learn More", href: "/about" }}
        secondaryAction={{ label: "Our Services", href: "/services" }}
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
          >
            <Card className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
              {/* Director Photo/Info */}
              <div className="flex-shrink-0 text-center md:text-left">
                <div className="w-32 h-32 bg-primary-100 rounded-full mx-auto md:mx-0 mb-4 flex items-center justify-center overflow-hidden relative">
                  {/* MD Image - Update src with actual image URL when available */}
                  {/* If image URL is found, uncomment and update the Image component below */}
                  <Image
                    src={`${url}/images/tor_md.jpeg`}
                    alt="Mr. Edmund Kombat, Managing Director"
                    width={128}
                    height={128}
                    className="rounded-full object-cover w-full h-full"
                  />
                  {/* <span className="text-4xl font-bold text-primary-600">
                    EK
                  </span> */}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">Mr. Edmund Kombat</h3>
                <p className="text-primary-500 font-semibold mb-2">Managing Director</p>
                <p className="text-sm text-gray-600">TOR Refinery</p>
              </div>

              {/* Message Content */}
              <div className="flex-1">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Welcome to TOR Refinery. For over five decades, we have been at the forefront of the oil refining industry, 
                    consistently delivering excellence in every aspect of our operations.
                  </p>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Our commitment to innovation, sustainability, and operational excellence has positioned us as a trusted leader 
                    in the energy sector. We take pride in our state-of-the-art facilities, our dedicated team of professionals, 
                    and our unwavering focus on safety and environmental stewardship.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    As we look to the future, we remain dedicated to transforming the energy landscape through cutting-edge technology, 
                    sustainable practices, and a deep commitment to creating value for our stakeholders, employees, and the communities 
                    we serve. Thank you for your interest in TOR Refinery.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-gray-600 italic">— Mr. Edmund Kombat, Managing Director</p>
                </div>
              </div>
            </div>
          </Card>
          </motion.div>
        </div>
      </Section>

      {/* Features Section */}
      <Section
        title="Why Choose TOR Refinery"
        description="We combine cutting-edge technology with decades of expertise to deliver exceptional results."
        className="bg-gray-50"
      >
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
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
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
          >
            <Card hover>
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <IconCheck className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Operational Excellence</h3>
              <p className="text-gray-600">
                State-of-the-art facilities and processes ensuring the highest quality standards in every operation.
              </p>
            </Card>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
          >
            <Card hover>
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <IconWorld className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sustainability Focus</h3>
              <p className="text-gray-600">
                Committed to environmental responsibility and sustainable practices for a better future.
              </p>
            </Card>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
          >
            <Card hover>
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <IconBook className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation & Technology</h3>
              <p className="text-gray-600">
                Leveraging the latest technologies and innovative solutions to stay ahead of the curve.
              </p>
            </Card>
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
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <Card className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <IconSettings className="w-8 h-8 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-primary-500 mb-2">45,000</div>
                <div className="text-sm text-gray-600 font-medium mb-1">BPSD</div>
                <div className="text-sm text-gray-700 font-semibold">CDU Capacity</div>
              </Card>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <Card className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <IconFlame className="w-8 h-8 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-primary-500 mb-2">14,000</div>
                <div className="text-sm text-gray-600 font-medium mb-1">BPSD</div>
                <div className="text-sm text-gray-700 font-semibold">RFCC Capacity</div>
              </Card>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <Card className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <IconDatabase className="w-8 h-8 text-primary-600" />
                </div>
                <div className="text-2xl font-bold text-primary-500 mb-2">262,652</div>
                <div className="text-sm text-gray-600 font-medium mb-1">MT</div>
                <div className="text-sm text-gray-700 font-semibold">White Product Storage</div>
              </Card>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <Card className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <IconTank className="w-8 h-8 text-primary-600" />
                </div>
                <div className="text-2xl font-bold text-primary-500 mb-2">1,925,348</div>
                <div className="text-sm text-gray-600 font-medium mb-1">BBL</div>
                <div className="text-sm text-gray-700 font-semibold">Crude Storage</div>
              </Card>
            </motion.div>
          </motion.div>
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
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.div
            className="text-center"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="text-4xl md:text-5xl font-bold text-primary-500 mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring", delay: 0.1 }}
            >
              50+
            </motion.div>
            <div className="text-gray-600 font-medium">Years of Experience</div>
          </motion.div>
          <motion.div
            className="text-center"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="text-4xl md:text-5xl font-bold text-primary-500 mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring", delay: 0.2 }}
            >
              500K+
            </motion.div>
            <div className="text-gray-600 font-medium">Barrels Per Day</div>
          </motion.div>
          <motion.div
            className="text-center"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="text-4xl md:text-5xl font-bold text-primary-500 mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring", delay: 0.3 }}
            >
              1000+
            </motion.div>
            <div className="text-gray-600 font-medium">Employees</div>
          </motion.div>
          <motion.div
            className="text-center"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="text-4xl md:text-5xl font-bold text-primary-500 mb-2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring", delay: 0.4 }}
            >
              99.9%
            </motion.div>
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
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
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
            {/* Left Side - Content */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 }
              }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <IconUsers className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold">Let's Build Something Great Together</h3>
              </div>
              <p className="text-lg text-primary-100 mb-8 leading-relaxed">
                Partner with TOR Refinery and experience the difference that comes with working with an industry leader. 
                We offer reliable supply, competitive pricing, and exceptional service to meet all your energy needs.
              </p>
              
              <motion.div
                className="space-y-4 mb-8"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.15
                    }
                  }
                }}
              >
                <motion.div
                  className="flex items-start gap-3"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <IconCheck className="w-6 h-6 text-primary-200 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Reliable Supply Chain</h4>
                    <p className="text-primary-100 text-sm">Consistent delivery and inventory management</p>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-start gap-3"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <IconCheck className="w-6 h-6 text-primary-200 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Competitive Pricing</h4>
                    <p className="text-primary-100 text-sm">Market-leading rates with flexible payment terms</p>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-start gap-3"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <IconCheck className="w-6 h-6 text-primary-200 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Expert Support</h4>
                    <p className="text-primary-100 text-sm">Dedicated account management and technical assistance</p>
                  </div>
                </motion.div>
              </motion.div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/services" variant="secondary" size="lg" className="w-full">
                  Explore Our Services
                </Button>
                {/* <Button href="/investor-contacts" variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white/20">
                  Get in Touch
                </Button> */}
              </div>
            </motion.div>

            {/* Right Side - Contact Info */}
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 }
              }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconPhone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <PhoneLink phone="+1 (555) 123-4567" className="text-primary-100 hover:text-white transition-colors">
                      +1 (555) 123-4567
                    </PhoneLink>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconMail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <MailLink
                      email="info@torrefinery.com"
                      subject="Inquiry - TOR Refinery Website"
                      className="text-primary-100 hover:text-white transition-colors"
                    >
                      info@torrefinery.com
                    </MailLink>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconMapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-primary-100 text-sm">
                      Tema, Ghana
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconClock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Business Hours</h4>
                    <p className="text-primary-100 text-sm">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <Button href="/investor-contacts/request-information" variant="secondary" size="lg" className="w-full">
                  Contact Us Now
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
