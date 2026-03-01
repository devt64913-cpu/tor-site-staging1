"use client";

import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Image from "next/image";
import Carousel from "@/components/Carousel";
import { IconCheck, IconFlask, IconTank, IconTruck, IconTools, IconSchool } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { url } from "@/utils/url";

export default function WhatWeDo() {
  const operations = [
    {
      title: "Crude Oil Processing",
      description: "We process various grades of crude oil through our advanced refining units, converting raw materials into high-quality petroleum products.",
      features: ["Multiple crude oil grades", "Advanced distillation", "Quality assurance"],
    },
    {
      title: "Product Refinement",
      description: "Our state-of-the-art facilities produce a wide range of refined products including gasoline, diesel, jet fuel, and specialty chemicals.",
      features: ["Gasoline production", "Diesel fuel", "Aviation fuels", "Specialty products"],
    },
    {
      title: "Quality Control",
      description: "Rigorous testing and quality control measures ensure all products meet or exceed industry standards and customer specifications.",
      features: ["Laboratory testing", "Quality certification", "Continuous monitoring"],
    },
    {
      title: "Distribution & Logistics",
      description: "Efficient supply chain management ensures timely delivery of products to customers across regional and international markets.",
      features: ["Pipeline networks", "Storage facilities", "Transportation", "Supply chain optimization"],
    },
  ];

  const capabilities = [
    {
      title: "CDU Capacity",
      value: "45,000",
      unit: "BPSD",
      description: "Crude Distillation Unit capacity (barrels per stream day) after revamp.",
    },
    {
      title: "RFCC Capacity",
      value: "14,000",
      unit: "BPSD",
      description: "Residue Fluid Catalytic Cracking unit for LPG and gasoline production.",
    },
    {
      title: "Crude Processing",
      value: "2M+",
      unit: "MT annually",
      description: "We can process over 2 million metric tonnes of crude oil per year.",
    },
    {
      title: "Site Area",
      value: "440,000",
      unit: "m²",
      description: "Refinery site linked to the Port of Tema by pipelines for crude and products.",
    },
  ];

  const products = [
    { title: "LPG", description: "Liquefied petroleum gas for domestic, commercial and industrial use.", features: ["Bulk supply", "Storage", "Trading"], icon: "🔥" },
    { title: "Aviation Turbine Kerosene (ATK)", description: "Exclusive producer of ATK for Ghana's aviation sector.", features: ["Jet A-1", "Aviation standards", "Quality certified"], icon: "✈️" },
    { title: "Premix Fuel", description: "Premix fuel for Ghana's fishing sector.", features: ["Fishing industry", "Dedicated supply"], icon: "⛵" },
    { title: "Gasoline", description: "Gasoline (94 RON) from our RFCC unit alongside naphtha-based production.", features: ["Premium grade", "CDU & RFCC"], icon: "⛽" },
    { title: "Diesel / Gas Oil", description: "Diesel and gas-oil for transportation and industry.", features: ["Ultra-low sulfur", "Bulk supply"], icon: "🚛" },
    { title: "Kerosene & Residual Oil", description: "Illuminating and cooking kerosene; residual fuel oil.", features: ["Kerosene", "Residual fuel", "Industrial"], icon: "🛢️" },
  ];

  return (
    <>
      <Hero
        title="What We Do"
        subtitle="Operations & Services"
        description="Refining crude oil to produce quality petroleum products for Ghana's economic development. We are the exclusive producer of Aviation Turbine Kerosene (ATK) and premix fuel for Ghana's fishing sector."
      />

      <Section
        title="Our Core Operations"
        description="Excellence in every aspect of oil refining"
      >
        <Carousel autoPlay continuousScroll scrollSpeed={0.7} showArrows={false} showDots={false} loop>
          {operations.map((operation, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white border-l-4 border-primary-500 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{operation.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed flex-1">{operation.description}</p>
              <ul className="space-y-2">
                {operation.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <IconCheck className="w-5 h-5 text-primary-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Carousel>
      </Section>

      <Section
        title="Our Capabilities"
        description="Scale and expertise that sets us apart"
        className="bg-surface-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-white border border-primary-200 shadow-sm"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                {capability.value}
              </div>
              <div className="text-sm text-primary-600 font-semibold mb-2">{capability.unit}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{capability.title}</h3>
              <p className="text-gray-600 text-sm">{capability.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Our Process">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-5 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 0.1,
                },
              },
              hidden: {},
            }}
          >
            {[
              { step: "1", title: "Receiving", description: "Crude oil arrives at our facilities" },
              { step: "2", title: "Processing", description: "Advanced refining and conversion" },
              { step: "3", title: "Quality Control", description: "Rigorous testing and validation" },
              { step: "4", title: "Storage", description: "Safe storage in dedicated facilities" },
              { step: "5", title: "Distribution", description: "Efficient delivery to customers" },
            ].map((process, index) => (
              <motion.div
                key={index}
                className="relative"
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 260,
                      damping: 22,
                    },
                  },
                }}
              >
                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 10px 40px -10px rgba(5, 171, 231, 0.5)",
                    }}
                  >
                    {process.step}
                  </motion.div>
                  <h3 className="font-bold text-lg mb-2">{process.title}</h3>
                  <p className="text-gray-600 text-sm">{process.description}</p>
                </motion.div>
                {index < 4 && (
                  <motion.div
                    className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary-200 -z-10 origin-left"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + index * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-l-primary-200 border-t-4 border-t-transparent border-b-4 border-b-transparent" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      <Section
        title="Our Product Portfolio"
        description="Quality products for every application"
        className="bg-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white border-l-4 border-tor-teal-500 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-5xl mb-4">{product.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
              <ul className="space-y-2 mb-6">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <IconCheck className="w-5 h-5 text-tor-teal-500 mr-2 mt-0.5 shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button href="/investor-contacts" variant="outline" size="sm" className="w-full">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </Section>

      {/* Operational & Support Services */}
      <Section
        title="Operational & Support Services"
        description="Comprehensive services to support your operations"
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Product Quality Analysis",
              icon: IconFlask,
              image: `${url}/images/hero.jpg`,
              description: "Comprehensive laboratory testing and quality assurance services to ensure product excellence and compliance with industry standards."
            },
            {
              title: "Storage Tanks Services",
              icon: IconTank,
              image: `${url}/images/tank-service.webp`,
              description: "Expert storage tank maintenance, inspection, and management services to ensure optimal performance and safety."
            },
            {
              title: "Loading Rack Services",
              icon: IconTruck,
              image: `${url}/images/hero.jpg`,
              description: "Efficient and safe loading rack operations with advanced equipment and trained personnel for seamless product transfer."
            },
            {
              title: "Maintenance Service",
              icon: IconTools,
              image: `${url}/images/hero.jpg`,
              description: "Professional maintenance and repair services to keep your equipment and facilities operating at peak performance."
            },
            {
              title: "Training Services",
              icon: IconSchool,
              image: `${url}/images/hero.jpg`,
              description: "Comprehensive training programs to enhance skills, safety awareness, and operational excellence for your team."
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 h-full group cursor-pointer border-2 border-transparent hover:border-primary-200 overflow-hidden">
                {/* Image Rectangle */}
                <div className="relative w-full h-56 bg-gradient-to-br from-primary-500 to-primary-600 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-600/25 to-primary-700/25 group-hover:from-primary-600/20 group-hover:to-primary-700/20 transition-all duration-300 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                      <service.icon className="w-12 h-12 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Text Content */}
                <div className="p-8 bg-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300">
                      <service.icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}

