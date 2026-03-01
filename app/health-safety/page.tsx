import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { IconCheck } from "@tabler/icons-react";

export default function HealthSafety() {
  const managementResponsibilities = [
    "Employ risk management approach suitable for our risk exposures to improve on our workplace Health and Safety.",
    "Comply with applicable legislation, regulations and relevant industry standards.",
    "Provide the expertise and resources needed to maintain a safe and healthy working environment for employees, contractors, visitors and communities in which we operate.",
    "Consider appropriate Health and Safety requirements when selecting contractors and require adoption of sound Health and Safety management practices.",
    "Empower all employees by providing information, instruction, training and supervision to enable them perform their roles safely.",
    "Involve and encourage employees to actively participate in all Health and Safety matters and consult with them on ways to minimize workplace hazards.",
    "Maintain a system of health surveillance for all employees.",
    "Implement a Health and Safety management system based on internationally recognized standards and assess its effectiveness every two years through periodic audits and reviews of our Process Safety Management system.",
    "Develop Health and Safety objectives based on a comprehensive strategic plan and measure performance and compliance at regular intervals with the intention for continual improvement of the systems.",
  ];

  const employeeResponsibilities = [
    "Take reasonable care of their own Health and Safety and fellow colleagues who may be affected by their acts or omissions.",
    "Report all hazards, accidents and incidents.",
    "Not misuse or interfere with Health and Safety provisions.",
  ];

  return (
    <>
      <Hero
        title="Health & Safety Policy"
        subtitle="Tema Oil Refinery"
        description="Our commitment to the protection of our employees, customers, contractors, visitors and the communities in which we operate."
      />

      <Section
        title="Policy Statement"
        description="Our commitment to Health and Safety"
        className="bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <div className="rounded-xl bg-gradient-to-br from-primary-50 to-tor-teal-50 border-2 border-primary-200 p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Tema Oil Refinery endeavours to conduct its operations in a manner which ensures the protection of its employees, customers, contractors, visitors and communities in which it operates.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                We recognize Safety as first within our Core Values and our aim is to develop Health and Safety objectives which are integral to the success of the business. We recognize that this commitment will only be achieved with positive leadership, the provision of essential and adequate resources and continued pursuit of best practice in Health and Safety.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ultimate responsibility for Health and Safety rests with the Managing Director and Executive Management team.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="Management Will (Responsibilities)"
        description="Leadership commitments to Health and Safety"
        className="bg-gray-50"
      >
        <div className="max-w-4xl mx-auto">
          <ul className="space-y-4">
            {managementResponsibilities.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <IconCheck className="w-6 h-6 text-primary-500 mt-0.5 shrink-0" />
                <span className="text-gray-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              <strong>Line Managers</strong> have responsibility for the Health and Safety of those working within their areas of operation and those who may be affected by their activities.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The <strong>Health and Safety</strong> outfit will develop the appropriate annual Safety plans for continual improvement, will be available to advise on particular Health and Safety matters and monitor the effectiveness of the Process Safety Management system.
            </p>
          </div>
        </div>
      </Section>

      <Section
        title="Employees Will (Responsibilities)"
        description="Employee commitments to Health and Safety"
        className="bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <ul className="space-y-4">
            {employeeResponsibilities.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <IconCheck className="w-6 h-6 text-primary-500 mt-0.5 shrink-0" />
                <span className="text-gray-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
