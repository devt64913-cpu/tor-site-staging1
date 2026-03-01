"use client";

import Hero from "@/components/Hero";
import Section from "@/components/Section";
import MailLink from "@/components/MailLink";
import PhoneLink from "@/components/PhoneLink";
import { IconFileText, IconMail, IconMapPin, IconPhone, IconClock } from "@tabler/icons-react";

export default function InvestorContacts() {
  const contactMethods = [
    {
      title: "General Manager, Technical Services",
      description: "For technical and general inquiries",
      email: "gmts@torghana.gov.gh",
      phone: "057 973 3300",
      icon: <IconFileText className="w-8 h-8" />,
    },
    {
      title: "Alternative Contact",
      description: "For general questions and information requests",
      email: "gmts@torghana.gov.gh",
      phone: "057 973 3198",
      icon: <IconMail className="w-8 h-8" />,
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
        description="Ways to reach us"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white border-l-4 border-primary-500 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4 text-primary-600">
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
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Office Location"
        description="Visit us at Tema"
      >
        <div className="max-w-4xl mx-auto p-6 rounded-xl bg-surface-50 border-2 border-primary-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tema Oil Refinery Limited</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start">
                  <IconMapPin className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Address</div>
                    <div>Heavy Industrial Area, Valco Road</div>
                    <div>Tema, Ghana</div>
                    <div>P.O. Box CO 599, Tema</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <IconPhone className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div>057 973 3300 / 057 973 3198</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <IconMail className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div>gmts@torghana.gov.gh</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <IconClock className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Office Hours</div>
                    <div>Monday – Friday: 8:00 a.m. – 3:30 p.m.</div>
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
        </div>
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

