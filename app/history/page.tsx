import Hero from "@/components/Hero";
import Section from "@/components/Section";

export default function History() {
  const milestones = [
    {
      year: "1960",
      title: "GHAIP Founded",
      description: "The Ghanaian Italian Petroleum Company (GHAIP) was incorporated on December 12, 1960 as a private limited liability company, with Italian interests (ANIC and AGIP) as major shareholders.",
    },
    {
      year: "1963",
      title: "Commissioning",
      description: "The refinery was commissioned on September 28, 1963 as a hydroskimming plant with an initial capacity of 28,000 barrels per stream day. Ghana emerged as one of Africa's six largest refineries.",
    },
    {
      year: "1971",
      title: "Government Partnership",
      description: "The Government of Ghana acquired 50% ownership of GHAIP, marking the beginning of state participation in the refinery.",
    },
    {
      year: "1977",
      title: "Full Ghanaian Ownership",
      description: "In April 1977, the Government of Ghana purchased all remaining shares from Italy's ENI Group, making the refinery 100% Ghanaian-owned.",
    },
    {
      year: "1991",
      title: "Renamed TOR",
      description: "The company was renamed Tema Oil Refinery (TOR) Limited, reflecting its identity as Ghana's premier crude oil refinery.",
    },
    {
      year: "1996–1997",
      title: "CDU Revamp",
      description: "The Crude Distillation Unit (CDU) was revamped from 28,000 to 45,000 barrels per stream day as part of expansion and modernization.",
    },
    {
      year: "2002",
      title: "RFCC Commissioned",
      description: "The Residue Fluid Catalytic Cracking (RFCC) unit with 14,000 barrels per stream day capacity was commissioned, converting residual fuel oil into higher-value LPG and gasoline.",
    },
    {
      year: "Today",
      title: "Refining Crude Since 1963",
      description: "TOR continues to power Ghana's economic growth with quality energy products, aiming to rank among the sub-region's most productive refineries.",
    },
  ];

  return (
    <>
      <Hero
        title="Our History"
        subtitle="Refining Crude Since 1963"
        description="From GHAIP to Tema Oil Refinery—Ghana's first value-added investment after the Akosombo Dam."
      />

      <Section title="Our Journey Through Time">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start">
                  <div className="absolute left-6 w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="ml-20 flex-1">
                    <div className="p-5 rounded-xl bg-white border-l-4 border-primary-500 shadow-sm hover:shadow-md transition-shadow">
                      <span className="text-primary-500 font-bold text-lg">{milestone.year}</span>
                      <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="Key Achievements"
        className="bg-surface-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-white border-t-4 border-primary-500 shadow-sm text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">60+</div>
            <h3 className="text-xl font-bold mb-2">Years of Refining</h3>
            <p className="text-gray-600">Refining crude since 1963—among the first refineries in Africa.</p>
          </div>
          <div className="p-6 rounded-xl bg-white border-t-4 border-tor-teal-500 shadow-sm text-center">
            <div className="text-4xl font-bold text-tor-teal-600 mb-2">45,000</div>
            <h3 className="text-xl font-bold mb-2">BPSD CDU Capacity</h3>
            <p className="text-gray-600">Crude Distillation Unit capacity after revamp (barrels per stream day).</p>
          </div>
          <div className="p-6 rounded-xl bg-white border-t-4 border-tor-amber-500 shadow-sm text-center">
            <div className="text-4xl font-bold text-tor-amber-500 mb-2">14,000</div>
            <h3 className="text-xl font-bold mb-2">BPSD RFCC Capacity</h3>
            <p className="text-gray-600">Residue Fluid Catalytic Cracking unit for LPG and gasoline production.</p>
          </div>
        </div>
      </Section>
    </>
  );
}
