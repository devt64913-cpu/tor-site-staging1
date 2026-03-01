"use client";

import Hero from "@/components/Hero";
import Section from "@/components/Section";

export default function About() {
  return (
    <>
      <Hero
        title="About Tema Oil Refinery"
        subtitle="Who We Are"
        description="Ghana's premier crude oil refinery and the nation's first value-added investment after the Akosombo Dam."
      />

      {/* Who We Are Section */}
      <Section
        title="Who We Are"
        description="Refining crude since 1963"
        className="bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Tema Oil Refinery (TOR) was founded on December 12, 1960 as the Ghanaian Italian Petroleum Company (GHAIP). 
              Commissioned in September 1963, it became 100% government-owned in 1977 and was renamed Tema Oil Refinery Limited in 1991. 
              Located in the Heavy Industrial Area of Tema, 24 kilometres from Accra, TOR is linked to the Port of Tema by pipelines and is among the first refineries in Africa.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              TOR is renowned for producing high-quality petroleum products, including the exclusive production of Aviation Turbine Kerosene (ATK) 
              and premix fuel for Ghana's fishing sector. Our primary business is refining crude oil to produce refined petroleum products for Ghana's economic development. 
              We process light and low-sulfur crudes such as Bonny Light and Brass River from Nigeria, and Palanca Blend from Angola, as well as crude from Equatorial Guinea, Cameroon, and Gabon.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our current goal is to rank among the sub-region's most productive refineries. We emphasize excellence, innovation, and long-term sustainability 
              while prioritizing safety, technical expertise, industry synergy, and operational excellence.
            </p>
          </div>
        </div>
      </Section>

      {/* Our Strategy Section */}
      <Section
        title="Our Strategy"
        description="Maximizing value creation through strategic excellence"
        className="bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              Resting on our core competences and years of experience in rendering differentiated services to players 
              along the energy sector value chain with an agile and strategic approach to maximize value creation and 
              shareholder wealth.
            </p>
          </div>
        </div>
      </Section>

      <Section
        title="Our Leadership"
        description="Experienced professionals driving our success"
        className="bg-surface-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-white border-t-4 border-primary-500 shadow-sm">
            <div className="w-20 h-20 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-600">JD</span>
            </div>
            <h3 className="text-xl font-bold text-center mb-1">John Davis</h3>
            <p className="text-primary-500 text-center text-sm font-medium mb-3">Chief Executive Officer</p>
            <p className="text-gray-600 text-center text-sm">
              With over 30 years of experience in the energy sector, John leads TOR Refinery with a vision for sustainable growth.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border-t-4 border-tor-teal-500 shadow-sm">
            <div className="w-20 h-20 bg-tor-teal-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-tor-teal-600">SM</span>
            </div>
            <h3 className="text-xl font-bold text-center mb-1">Sarah Martinez</h3>
            <p className="text-tor-teal-600 text-center text-sm font-medium mb-3">Chief Operating Officer</p>
            <p className="text-gray-600 text-center text-sm">
              Sarah brings extensive operational expertise and a commitment to excellence in refining operations.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border-t-4 border-tor-amber-500 shadow-sm">
            <div className="w-20 h-20 bg-tor-amber-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-tor-amber-500">RW</span>
            </div>
            <h3 className="text-xl font-bold text-center mb-1">Robert Wilson</h3>
            <p className="text-tor-amber-500 text-center text-sm font-medium mb-3">Chief Technology Officer</p>
            <p className="text-gray-600 text-center text-sm">
              Robert drives innovation and technology adoption to keep TOR at the forefront of the industry.
            </p>
          </div>
        </div>
      </Section>

    </>
  );
}

