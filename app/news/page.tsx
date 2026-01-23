"use client";

import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Image from "next/image";
import { IconChevronRight } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { url } from "@/utils/url";

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <Card key={index} hover>
              <div className="text-5xl mb-4">{item.image}</div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold text-primary-500 uppercase tracking-wider">
                  {item.category}
                </span>
                <span className="text-xs text-gray-500">{item.date}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Gallery Section */}
      <Section
        title="Our Gallery"
        description="A visual journey through our operations and facilities"
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              image: `${url}/images/hero.jpg`,
              title: "Refinery Operations",
              description: "State-of-the-art refining facilities"
            },
            {
              image: `${url}/images/tank-service.webp`,
              title: "Storage Facilities",
              description: "Advanced storage tank systems"
            },
            {
              image: `${url}/images/images.jpeg`,
              title: "Operations Center",
              description: "Modern control and monitoring systems"
            },
            {
              image: `${url}/images/hero.jpg`,
              title: "Production Unit",
              description: "High-capacity processing units"
            },
            {
              image: `${url}/images/tank-service.webp`,
              title: "Quality Control",
              description: "Laboratory and testing facilities"
            },
            {
              image: `${url}/images/images.jpeg`,
              title: "Safety Systems",
              description: "Advanced safety infrastructure"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 h-full group cursor-pointer">
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
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section
        title="Upcoming Events"
        description="Join us at these upcoming events"
        className="bg-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingEvents.map((event, index) => (
            <Card key={index} hover>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-primary-500 font-bold text-lg mb-1">{event.date}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{event.type}</div>
                </div>
                <div className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold">
                  {event.location}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        title="Press Releases"
        description="Official announcements and press releases"
      >
        <div className="max-w-4xl mx-auto space-y-6">
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
            <Card key={index} hover>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="text-sm text-gray-500 mb-2">{release.date}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{release.title}</h3>
                  <p className="text-gray-600">{release.summary}</p>
                </div>
                <IconChevronRight className="w-6 h-6 text-primary-500 ml-4 flex-shrink-0" />
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        title="Media Inquiries"
        description="Contact our media relations team"
        className="bg-primary-500 text-white"
      >
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xl text-primary-100 mb-8">
            For media inquiries, press releases, or interview requests, please contact our 
            communications team.
          </p>
          <div className="space-y-4 text-left bg-white/10 rounded-lg p-6 backdrop-blur-sm">
            <div>
              <h3 className="font-semibold mb-1">Media Relations</h3>
              <p className="text-primary-100">media@torrefinery.com</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Phone</h3>
              <p className="text-primary-100">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

