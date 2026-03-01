"use client";

import Hero from "@/components/Hero";
import Section from "@/components/Section";

const projects = [
  {
    tag: "Newly installed",
    title: "Supply and Installation of Direct Fired Crude Oil Heater",
    description: "Crude heater (01-F-61R) installation completed.",
  },
  {
    tag: "Ongoing",
    title: "Supply and Installation 120 tons/hr (NET) Boiler",
    description: "Ongoing installation works for 120T/HR (net) boiler.",
  },
  {
    tag: "Installed",
    title: "Installation of 6.5 MW Steam Turbine Generator and SCADA System",
    description: "6.5 MW generator and condenser installed.",
  },
  {
    tag: "Project",
    title: "Procurement and Installation of 2No. Residue Air Cooler",
    description: "Residue air cooler installation.",
  },
  {
    tag: "Project",
    title: "Supply and Installation of 2No. Desalter Wash Water Pumps",
    description: "Desalter wash water pumps.",
  },
  {
    tag: "Facilities",
    title: "MOP Substation Electrical Facilities",
    description: "Substation electrical facilities for Movement of Products.",
  },
  {
    tag: "Refurbishment",
    title: "Refurbishment of the Quality Control Laboratory",
    description: "Quality Control Laboratory refurbishment.",
  },
];

export default function Investors() {
  return (
    <>
      <Hero
        title="Projects & Investment"
        subtitle="Investors"
        description="Strategic investments and projects driving excellence, sustainability, and economic prosperity."
      />

      <Section
        id="overview"
        title="Overview"
        description="TOR's investment and project overview"
        className="bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed">
            TOR&apos;s investment and project overview underscore its unwavering commitment to excellence, sustainability, and economic prosperity. Through strategic investments, innovative projects, and a steadfast dedication to sustainability, TOR continues to strengthen its position as Ghana&apos;s premier refinery and a key player in the sub-region.
          </p>
        </div>
      </Section>

      <Section
        title="Projects & Investment"
        description="Current and recent capital projects and installations"
        className="bg-surface-50"
      >
        <ul className="space-y-4 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <li
              key={index}
              className="flex flex-col sm:flex-row sm:items-center gap-3 p-5 rounded-xl bg-white border-l-4 border-primary-500 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-xs font-semibold text-primary-500 uppercase tracking-wider shrink-0">
                {project.tag}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
                <p className="text-gray-600 text-sm mt-0.5">{project.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
