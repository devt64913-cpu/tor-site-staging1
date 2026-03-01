"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Image from "next/image";
import { IconChevronRight } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { url } from "@/utils/url";
import Carousel from "@/components/Carousel";
import Lightbox from "@/components/Lightbox";

export default function News() {
  const newsItems = [
    {
      date: "March 15, 2024",
      category: "Sustainability",
      title: "TOR Refinery Achieves 35% Carbon Reduction Milestone",
      description: "We're proud to announce that we've successfully reduced our carbon emissions by 35% compared to our 2020 baseline, exceeding our interim target.",
      image: "🌱",
    },
    {
      date: "February 28, 2024",
      category: "Operations",
      title: "New Advanced Processing Unit Goes Online",
      description: "Our state-of-the-art processing unit has commenced operations, increasing production capacity by 20% while improving efficiency.",
      image: "⚙️",
    },
    {
      date: "February 10, 2024",
      category: "Awards",
      title: "TOR Receives Safety Excellence Award",
      description: "Recognized for outstanding safety performance with zero lost-time incidents for the third consecutive year.",
      image: "🏆",
    },
    {
      date: "January 22, 2024",
      category: "Partnerships",
      title: "Strategic Partnership for Renewable Energy",
      description: "Announcing a new partnership to develop renewable energy solutions and further reduce our environmental footprint.",
      image: "🤝",
    },
    {
      date: "December 15, 2023",
      category: "Community",
      title: "Community Investment Program Launched",
      description: "Launching a $5 million community investment program to support local education, healthcare, and infrastructure projects.",
      image: "💙",
    },
    {
      date: "November 30, 2023",
      category: "Technology",
      title: "AI-Powered Operations Center Opens",
      description: "Our new AI-powered operations center enables real-time monitoring and optimization of all refining processes.",
      image: "🤖",
    },
  ];

  const upcomingEvents = [
    {
      date: "April 20, 2024",
      title: "Annual Sustainability Report Release",
      location: "Virtual Event",
      type: "Webinar",
    },
    {
      date: "May 15, 2024",
      title: "Industry Safety Conference",
      location: "Houston, TX",
      type: "Conference",
    },
    {
      date: "June 10, 2024",
      title: "Investor Day 2024",
      location: "New York, NY",
      type: "Investor Event",
    },
    {
      date: "July 5, 2024",
      title: "Community Open House",
      location: "Refinery Site",
      type: "Community Event",
    },
  ];

  const departmentsAndDivisions = [
    { name: "Production Division", departments: ["Crude Distillation Unit (CDU)", "Residue Fluid Catalytic Cracking (RFCC)", "Utilities", "Wastewater Treatment Unit (WWTU)"] },
    { name: "Maintenance Division", departments: ["Instrumentation & Welding Services (IWS)", "Mechanical", "Electrical", "Maintenance Planning", "Civil Works"] },
    { name: "Technical Services Division", departments: ["Projects", "Technical Stores", "Inspection"] },
    { name: "Commerce Division", departments: ["Exports/Imports", "Movement of Products (MOP)", "Distribution", "IT, Monitoring & Control", "Refinery Optimization", "Business Development & Trading", "Quality Control"] },
    { name: "Finance Division", departments: ["Management Accounts", "Payroll", "Treasury", "Financial Accounts"] },
    { name: "Human Resource & Administration", departments: ["Human Resources", "Training & Development", "Information Management", "Estates", "General Services"] },
    { name: "Health, Safety, Security, Environment & Insurance", departments: ["Health Services", "Safety", "Environment", "Security", "Insurance"] },
    { name: "Legal, Procurement, Public Affairs & SIRD", departments: ["Legal", "Procurement", "Public Affairs", "SIRD"] },
    { name: "Internal Audit", departments: ["Internal Audit"] },
  ];

  const galleryItems = [
    { image: `/images/tor60.webp`, title: "TOR @60 Celebration", description: "Celebrating 60 years of refining" },
    { image: `/images/mayday.webp`, title: "May Day 2024", description: "May Day at TOR" },
    { image: `/images/tor_board.webp`, title: "Maiden Visit by the New TOR Board of Directors", description: "Board of Directors visit" },
    { image: `${url}/images/hero.jpg`, title: "Tema Mayor Ebi Bright Pays Courtesy Call on Management of TOR", description: "Courtesy call by Tema Mayor" },
    { image: `/images/energy_minister.jpg`, title: "Energy Minister Visits TOR", description: "Energy Minister visit" },
    { image: `/images/bost.jpg`, title: "BOST Executives Pay a Visit to TOR", description: "BOST executives visit" },
  ];

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <Hero
        title="News & Events"
        subtitle="Stay Updated"
        description="Latest news, updates, and events from TOR Refinery."
      />

      <Section
        title="Latest News"
        description="Stay informed about our latest developments and achievements"
      >
        <Carousel autoPlay continuousScroll scrollSpeed={0.7} showArrows={false} showDots={false} loop>
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-surface-50 border-l-4 border-primary-500 shadow-sm"
            >
              <div className="text-5xl mb-4">{item.image}</div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold text-primary-500 uppercase tracking-wider">
                  {item.category}
                </span>
                <span className="text-xs text-gray-500">{item.date}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </Carousel>
      </Section>

      {/* Departments and Divisions */}
      <Section
        title="Departments and Divisions"
        description="Our organizational structure at Tema Oil Refinery"
        className="bg-surface-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departmentsAndDivisions.map((division, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="p-5 rounded-xl bg-white border-l-4 border-tor-teal-500 shadow-sm"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">{division.name}</h3>
              <ul className="space-y-1.5 text-sm text-gray-600">
                {division.departments.map((dept, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-tor-teal-500 mt-1">•</span>
                    <span>{dept}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Our Gallery – from torghana.gov.gh/life-at-tor/#gallery */}
      <Section
        title="Our Gallery"
        description="Media gallery from Life at TOR"
        className="bg-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                type="button"
                onClick={() => setLightboxIndex(index)}
                className="w-full text-left bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 h-full group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
              >
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                      <p className="text-sm text-white/90">{item.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
        {lightboxIndex !== null && (
          <Lightbox
            isOpen={true}
            onClose={() => setLightboxIndex(null)}
            src={galleryItems[lightboxIndex].image}
            alt={galleryItems[lightboxIndex].title}
            title={galleryItems[lightboxIndex].title}
            description={galleryItems[lightboxIndex].description}
          />
        )}
      </Section>

      <Section
        title="Upcoming Events"
        description="Join us at these upcoming events"
        className="bg-white"
      >
        <ul className="space-y-4 max-w-3xl mx-auto">
          {upcomingEvents.map((event, index) => (
            <li
              key={index}
              className="p-5 rounded-xl bg-surface-50 border-l-4 border-primary-500 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
            >
              <div>
                <div className="text-primary-500 font-bold text-lg">{event.date}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">{event.type}</div>
                <h3 className="text-xl font-bold text-gray-900 mt-1">{event.title}</h3>
              </div>
              <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold shrink-0">
                {event.location}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        title="Press Releases"
        description="Official announcements and press releases"
      >
        <ul className="max-w-4xl mx-auto space-y-4">
          {[
            {
              date: "March 1, 2024",
              title: "TOR Refinery Reports Strong Q4 2023 Results",
              summary: "Record production levels and improved operational efficiency drive strong financial performance.",
            },
            {
              date: "January 15, 2024",
              title: "New Environmental Initiatives Announced",
              summary: "Comprehensive plan to accelerate carbon reduction and enhance environmental performance.",
            },
            {
              date: "December 1, 2023",
              title: "Leadership Changes at TOR Refinery",
              summary: "New appointments strengthen executive team and position company for future growth.",
            },
          ].map((release, index) => (
            <li
              key={index}
              className="flex items-start gap-4 p-5 rounded-xl bg-white border border-gray-200 hover:border-primary-200 hover:shadow-md transition-all"
            >
              <div className="flex-1 min-w-0">
                <div className="text-sm text-gray-500 mb-1">{release.date}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{release.title}</h3>
                <p className="text-gray-600">{release.summary}</p>
              </div>
              <IconChevronRight className="w-6 h-6 text-primary-500 shrink-0 mt-1" />
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}

