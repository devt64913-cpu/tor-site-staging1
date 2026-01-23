"use client";

import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Image from "next/image";
import { IconCheck, IconSettings, IconChartBar, IconWorld, IconBulb, IconFlask, IconTank, IconTruck, IconTools, IconSchool } from "@tabler/icons-react";
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
      title: "Production Capacity",
      value: "500,000+",
      unit: "Barrels Per Day",
      description: "Our facilities can process over half a million barrels of crude oil daily.",
    },
    {
      title: "Product Range",
      value: "50+",
      unit: "Product Types",
      description: "We produce a diverse range of petroleum and specialty chemical products.",
    },
    {
      title: "Storage Capacity",
      value: "10M+",
      unit: "Barrels",
      description: "Extensive storage facilities ensure reliable supply and inventory management.",
    },
    {
      title: "Market Reach",
      value: "30+",
      unit: "Countries",
      description: "Our products reach customers across multiple continents and markets.",
    },
  ];

  return (
    <>
      <Hero
        title="What We Do"
        subtitle="Our Operations"
        description="Comprehensive oil refining operations delivering high-quality products to global markets."
      />

      <Section
        title="Our Core Operations"
        description="Excellence in every aspect of oil refining"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {operations.map((operation, index) => (
            <Card key={index} hover>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{operation.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{operation.description}</p>
              <ul className="space-y-2">
                {operation.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <IconCheck className="w-5 h-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        title="Our Capabilities"
        description="Scale and expertise that sets us apart"
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => (
            <Card key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">
                {capability.value}
              </div>
              <div className="text-sm text-primary-600 font-semibold mb-2">{capability.unit}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{capability.title}</h3>
              <p className="text-gray-600 text-sm">{capability.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Our Process">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: "1", title: "Receiving", description: "Crude oil arrives at our facilities" },
              { step: "2", title: "Processing", description: "Advanced refining and conversion" },
              { step: "3", title: "Quality Control", description: "Rigorous testing and validation" },
              { step: "4", title: "Storage", description: "Safe storage in dedicated facilities" },
              { step: "5", title: "Distribution", description: "Efficient delivery to customers" },
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {process.step}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{process.title}</h3>
                  <p className="text-gray-600 text-sm">{process.description}</p>
                </div>
                {index < 4 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary-200 -z-10">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-l-primary-200 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Our Services Section */}
      <Section
        title="Our Services"
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

      <Section
        title="Technology & Innovation"
        description="Leveraging cutting-edge technology for superior results"
        className="bg-primary-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mb-4">
              <IconSettings className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Advanced Automation</h3>
            <p className="text-gray-600">
              State-of-the-art automation systems ensure precision, efficiency, and safety in all operations.
            </p>
          </Card>

          <Card>
            <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mb-4">
              <IconChartBar className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Data Analytics</h3>
            <p className="text-gray-600">
              Real-time data analytics and monitoring optimize performance and predict maintenance needs.
            </p>
          </Card>

          <Card>
            <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mb-4">
              <IconWorld className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Environmental Systems</h3>
            <p className="text-gray-600">
              Advanced environmental control systems minimize emissions and protect the environment.
            </p>
          </Card>
        </div>
      </Section>
    </>
  );
}

