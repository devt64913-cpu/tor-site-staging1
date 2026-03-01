"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { IconShoppingCart, IconCalendar, IconPackage, IconMail, IconPhone, IconBuilding, IconCheck } from "@tabler/icons-react";
import { motion } from "framer-motion";
import MailLink from "@/components/MailLink";
import PhoneLink from "@/components/PhoneLink";
import { useIsMobile } from "@/hooks/useIsMobile";

interface ProcurementItem {
  id: string;
  itemName: string;
  description: string;
  category: string;
  quantity: string;
  deadline: string;
  contactEmail: string;
  contactPhone: string;
  companyName: string;
  status: "active" | "closed";
  datePosted: string;
}

export default function Procurement() {
  const isMobile = useIsMobile();
  const [items] = useState<ProcurementItem[]>([
    {
      id: "1",
      itemName: "Industrial Pumps",
      description: "High-capacity industrial pumps for refinery operations. Must meet safety and environmental standards.",
      category: "Equipment",
      quantity: "10 units",
      deadline: "2024-12-31",
      contactEmail: "gmts@torghana.gov.gh",
      contactPhone: "057 973 3300",
      companyName: "TOR Refinery",
      status: "active",
      datePosted: "2024-01-15"
    },
    {
      id: "2",
      itemName: "Safety Equipment & PPE",
      description: "Personal Protective Equipment including helmets, safety glasses, fire-resistant clothing, and safety boots.",
      category: "Safety Equipment",
      quantity: "500 sets",
      deadline: "2024-11-30",
      contactEmail: "gmts@torghana.gov.gh",
      contactPhone: "057 973 3300",
      companyName: "TOR Refinery",
      status: "active",
      datePosted: "2024-01-10"
    }
  ]);

  const activeItems = items.filter(item => item.status === "active");

  return (
    <>
      <Hero
        title="Procurement Opportunities"
        subtitle="TOR Refinery"
        description="Explore current procurement needs and submit your proposals to partner with us."
        primaryAction={{ label: "View Opportunities", href: "#procurement-items" }}
        secondaryAction={{ label: "Contact Us", href: "/investor-contacts" }}
      />

      {/* Procurement Items Listing */}
      <Section
        id="procurement-items"
        title="Active Procurement Requests"
        description="Browse current procurement opportunities and submit your proposals"
        className="bg-gray-50"
      >
        {activeItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {activeItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="h-full flex flex-col p-6 rounded-xl bg-white border-l-4 border-primary-500 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <IconPackage className="w-5 h-5 text-primary-500" />
                        <span className="text-sm font-semibold text-primary-500 bg-primary-50 px-3 py-1 rounded-full">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.itemName}</h3>
                    </div>
                    <span className="text-xs font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full whitespace-nowrap">
                      Active
                    </span>
                  </div>

                  <p className="text-gray-600 mb-6 flex-1 leading-relaxed">{item.description}</p>

                  <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                    <div className="flex items-center gap-3 text-sm">
                      <IconPackage className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-700"><strong>Quantity:</strong> {item.quantity}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <IconCalendar className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-700"><strong>Deadline:</strong> {new Date(item.deadline).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <IconBuilding className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-700"><strong>Posted:</strong> {new Date(item.datePosted).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-gray-900">Contact Information</h4>
                    <div className="flex items-center gap-3 text-sm">
                      <IconMail className="w-4 h-4 text-primary-500" />
                      <MailLink
                        email={item.contactEmail}
                        subject={`Proposal inquiry - ${item.itemName}`}
                        className="text-primary-600 hover:text-primary-700 hover:underline"
                      >
                        {item.contactEmail}
                      </MailLink>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <IconPhone className="w-4 h-4 text-primary-500" />
                      <PhoneLink phone={item.contactPhone} className="text-primary-600 hover:text-primary-700 hover:underline">
                        {item.contactPhone}
                      </PhoneLink>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-auto">
                    <Button
                      href={`/procurement/submit-proposal?itemId=${item.id}`}
                      className="flex-1"
                    >
                      Send Proposal
                    </Button>
                    {isMobile ? (
                    <a
                      href={`tel:${item.contactPhone.replace(/\s/g, "")}`}
                      className="font-semibold rounded-lg transition-all duration-200 inline-flex items-center justify-center border-2 border-primary-500 text-primary-500 hover:bg-primary-50 px-6 py-3 text-base flex-shrink-0"
                    >
                      <IconPhone className="w-5 h-5" />
                    </a>
                  ) : (
                    <span className="font-semibold rounded-lg inline-flex items-center justify-center border-2 border-gray-300 text-gray-500 px-6 py-3 text-base flex-shrink-0 cursor-default">
                      <IconPhone className="w-5 h-5" />
                    </span>
                  )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center p-12 rounded-xl bg-surface-50 border-2 border-primary-200 max-w-2xl mx-auto">
            <IconShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">No Active Requests</h3>
            <p className="text-gray-600">There are currently no active procurement requests. Check back soon for new opportunities.</p>
          </div>
        )}
      </Section>

      {/* Information Section */}
      <Section
        title="Procurement Guidelines"
        description="Important information for vendors and suppliers"
        className="bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl bg-surface-50 border-l-4 border-primary-500 shadow-sm">
              <IconCheck className="w-10 h-10 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Submission Process</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <IconCheck className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                  <span>Review procurement requirements carefully</span>
                </li>
                <li className="flex items-start gap-2">
                  <IconCheck className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                  <span>Prepare detailed proposal documents</span>
                </li>
                <li className="flex items-start gap-2">
                  <IconCheck className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                  <span>Contact via email or phone for submission</span>
                </li>
                <li className="flex items-start gap-2">
                  <IconCheck className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                  <span>Include company credentials and references</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-surface-50 border-l-4 border-tor-teal-500 shadow-sm">
              <IconShoppingCart className="w-10 h-10 text-tor-teal-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Requirements</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <IconCheck className="w-5 h-5 text-tor-teal-500 shrink-0 mt-0.5" />
                  <span>Valid business registration</span>
                </li>
                <li className="flex items-start gap-2">
                  <IconCheck className="w-5 h-5 text-tor-teal-500 shrink-0 mt-0.5" />
                  <span>Quality certifications and standards</span>
                </li>
                <li className="flex items-start gap-2">
                  <IconCheck className="w-5 h-5 text-tor-teal-500 shrink-0 mt-0.5" />
                  <span>Compliance with safety regulations</span>
                </li>
                <li className="flex items-start gap-2">
                  <IconCheck className="w-5 h-5 text-tor-teal-500 shrink-0 mt-0.5" />
                  <span>Competitive pricing and delivery terms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

