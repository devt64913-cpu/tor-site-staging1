import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { IconWorld, IconDroplet, IconTrash, IconBolt } from "@tabler/icons-react";

export default function Sustainability() {
  const initiatives = [
    {
      title: "Carbon Reduction",
      description: "Committed to reducing carbon emissions by 50% by 2030 through process optimization and renewable energy integration.",
      progress: 35,
      icon: <IconWorld className="w-8 h-8" />,
    },
    {
      title: "Water Conservation",
      description: "Advanced water recycling and treatment systems reduce water consumption by 60% while maintaining operational efficiency.",
      progress: 60,
      icon: <IconDroplet className="w-8 h-8" />,
    },
    {
      title: "Waste Reduction",
      description: "Zero-waste initiatives and circular economy principles minimize waste generation and maximize resource recovery.",
      progress: 75,
      icon: <IconTrash className="w-8 h-8" />,
    },
    {
      title: "Renewable Energy",
      description: "Investing in solar and wind energy to power operations, targeting 30% renewable energy by 2025.",
      progress: 20,
      icon: <IconBolt className="w-8 h-8" />,
    },
  ];

  const goals = [
    {
      year: "2025",
      title: "30% Renewable Energy",
      description: "Power 30% of operations with renewable energy sources.",
    },
    {
      year: "2030",
      title: "50% Carbon Reduction",
      description: "Reduce carbon emissions by 50% compared to 2020 baseline.",
    },
    {
      year: "2035",
      title: "Net Zero Operations",
      description: "Achieve net-zero carbon emissions across all operations.",
    },
    {
      year: "2040",
      title: "100% Circular Economy",
      description: "Implement full circular economy principles with zero waste.",
    },
  ];

  return (
    <>
      <Hero
        title="Sustainability"
        subtitle="Our Commitment to the Planet"
        description="Building a sustainable future through responsible operations and environmental stewardship."
      />

      <Section
        title="Our Sustainability Initiatives"
        description="Comprehensive programs driving environmental excellence"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {initiatives.map((initiative, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white border-l-4 border-primary-500 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4 text-primary-600">
                {initiative.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{initiative.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{initiative.description}</p>
              <div className="mb-2">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-semibold text-primary-600">{initiative.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-primary-500 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${initiative.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Our Sustainability Goals"
        description="Ambitious targets for a sustainable future"
        className="bg-surface-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="p-5 rounded-xl bg-white border-t-4 border-tor-teal-500 shadow-sm text-center"
            >
              <div className="text-primary-500 font-bold text-2xl mb-2">{goal.year}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{goal.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{goal.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Environmental Performance">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-primary-50 border border-primary-200 text-center">
            <div className="text-5xl font-bold text-primary-600 mb-2">35%</div>
            <h3 className="text-lg font-semibold mb-2">Carbon Reduction</h3>
            <p className="text-gray-600 text-sm">Achieved since 2020</p>
          </div>
          <div className="p-6 rounded-xl bg-tor-teal-50 border border-tor-teal-200 text-center">
            <div className="text-5xl font-bold text-tor-teal-600 mb-2">60%</div>
            <h3 className="text-lg font-semibold mb-2">Water Savings</h3>
            <p className="text-gray-600 text-sm">Through recycling programs</p>
          </div>
          <div className="p-6 rounded-xl bg-tor-amber-50 border border-tor-amber-500/30 text-center">
            <div className="text-5xl font-bold text-tor-amber-500 mb-2">95%</div>
            <h3 className="text-lg font-semibold mb-2">Waste Recovery</h3>
            <p className="text-gray-600 text-sm">Materials recycled or reused</p>
          </div>
        </div>
      </Section>

      <Section
        title="Environmental Certifications"
        description="Recognized for our environmental commitment"
        className="bg-primary-50"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "ISO 14001",
              "Green Business",
              "Carbon Trust",
              "EcoVadis",
            ].map((cert, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-white border border-primary-200 shadow-sm text-center"
              >
                <div className="w-16 h-16 bg-primary-50 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-600">{cert.split(" ")[0][0]}</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">{cert}</h3>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        title="Our Commitment"
        description="Sustainability is at the heart of everything we do"
        className="bg-primary-500 text-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-primary-100 mb-6 leading-relaxed">
            At TOR Refinery, sustainability is not just a goal—it's a fundamental part of our business strategy. 
            We are committed to operating responsibly, minimizing our environmental impact, and contributing to 
            a sustainable energy future for generations to come.
          </p>
          <p className="text-lg text-primary-100">
            Through continuous innovation, investment in clean technologies, and collaboration with stakeholders, 
            we are building a more sustainable future while maintaining our commitment to operational excellence.
          </p>
        </div>
      </Section>
    </>
  );
}

