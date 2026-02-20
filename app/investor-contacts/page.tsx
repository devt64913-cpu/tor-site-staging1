"use client";

import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import MailLink from "@/components/MailLink";
import PhoneLink from "@/components/PhoneLink";
import { IconFileText, IconNews, IconMail, IconMapPin, IconPhone, IconClock } from "@tabler/icons-react";

export default function InvestorContacts() {
  const contactMethods = [
    {
      title: "Investor Relations",
      description: "For investor inquiries, financial information, and shareholder services",
      email: "investors@torrefinery.com",
      phone: "+1 (555) 123-4567",
      icon: <IconFileText className="w-8 h-8" />,
    },
    {
      title: "Media Relations",
      description: "For press inquiries, media requests, and communications",
      email: "media@torrefinery.com",
      phone: "+1 (555) 123-4568",
      icon: <IconNews className="w-8 h-8" />,
    },
    {
      title: "General Inquiries",
      description: "For general questions and information requests",
      email: "info@torrefinery.com",
      phone: "+1 (555) 123-4569",
      icon: <IconMail className="w-8 h-8" />,
    },
  ];

  const teamMembers = [
    {
      name: "Jennifer Smith",
      role: "VP, Investor Relations",
      email: "j.smith@torrefinery.com",
      phone: "+1 (555) 123-4567",
    },
    {
      name: "Michael Chen",
      role: "Director, Investor Relations",
      email: "m.chen@torrefinery.com",
      phone: "+1 (555) 123-4568",
    },
    {
      name: "Sarah Johnson",
      role: "Manager, Investor Relations",
      email: "s.johnson@torrefinery.com",
      phone: "+1 (555) 123-4569",
    },
  ];

  return (
    <>
      <Hero
        title="Investor Contacts"
        subtitle="Get in Touch"
        description="Connect with our investor relations team for inquiries, information, and support."
      />

      <Section
        title="Contact Information"
        description="Multiple ways to reach us"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <Card key={index} hover>
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-4 text-primary-600">
                {method.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">{method.description}</p>
              <div className="space-y-3">
                <div>
                  <div className="text-xs text-gray-500 mb-1">Email</div>
                  <MailLink
                    email={method.email}
                    subject={`${method.title} - TOR Refinery`}
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    {method.email}
                  </MailLink>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Phone</div>
                  <PhoneLink phone={method.phone} className="text-primary-600 hover:text-primary-700 font-medium">
                    {method.phone}
                  </PhoneLink>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        title="Investor Relations Team"
        description="Meet our dedicated investor relations professionals"
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} hover>
              <div className="w-24 h-24 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-primary-600">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </span>
              </div>
              <h3 className="text-xl font-bold text-center mb-1">{member.name}</h3>
              <p className="text-primary-500 text-center mb-6 text-sm">{member.role}</p>
              <div className="space-y-2 text-sm">
                <div>
                  <MailLink
                    email={member.email}
                    subject={`Re: ${member.name} - TOR Refinery`}
                    className="text-primary-600 hover:text-primary-700"
                  >
                    {member.email}
                  </MailLink>
                </div>
                <div>
                  <PhoneLink phone={member.phone} className="text-primary-600 hover:text-primary-700">
                    {member.phone}
                  </PhoneLink>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        title="Office Location"
        description="Visit our headquarters"
      >
        <Card className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">TOR Refinery Headquarters</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start">
                  <IconMapPin className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Address</div>
                    <div>Tema, Ghana</div>
                    <div>PO Box 599</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <IconPhone className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div>+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <IconMail className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div>investors@torrefinery.com</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <IconClock className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Business Hours</div>
                    <div>Monday - Friday: 7:30 AM - 4:30 PM GMT</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full h-full min-h-[300px] rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.8900000000005!2d0.0034313!3d5.6733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwNDAnMjMuOSJOIDDCsDAwJzIwLjIiRQ!5e0!3m2!1sen!2sus!4v1678901234567!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '300px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TOR Refinery Location"
              ></iframe>
            </div>
          </div>
        </Card>
      </Section>

      {/* Request Information - form moved to /investor-contacts/request-information */}
      {/* <Section title="Request Information" description="Fill out the form below or contact us directly" className="bg-primary-50">
        <Card className="max-w-2xl mx-auto">
          <form>...</form>
        </Card>
      </Section> */}
    </>
  );
}

