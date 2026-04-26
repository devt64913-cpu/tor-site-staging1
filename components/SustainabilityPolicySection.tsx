"use client";

import { useState } from "react";
import Image from "next/image";

const POLICY_CONTENT = {
  environmental: {
    titleStart: "Environmental",
    titleHighlight: "Policy Statement",
    paragraphs: [
      "The Mission of Tema Oil Refinery (TOR) Limited is to provide clean energy products to power Ghana's economic growth in an environmentally sustainable manner.",
      "TOR is committed to implementing pollution prevention and mitigation measures aimed at avoidance, minimisation, restoration and offset as it refines crude oil into clean energy products and other related operations.",
      "TOR shall strive to continually improve on its environmental performance and ensure compliance with all applicable legal and regulatory requirements.",
    ],
  },
  humanSafety: {
    titleStart: "Human Safety",
    titleHighlight: "Policy Statement",
    paragraphs: [
      "Tema Oil Refinery endeavours to conduct its operations in a manner which ensures the protection of its employees, customers, contractors, visitors and communities in which it operates.",
      "We recognize Safety as first within our Core Values and our aim is to develop Health and Safety objectives which are integral to the success of the business.",
      "We recognize that this commitment will only be achieved with positive leadership, the provision of essential and adequate resources and continued pursuit of best practice in Health and Safety.",
      "Ultimate responsibility for Health and Safety rests with the Managing Director and Executive Management team.",
    ],
  },
} as const;

export default function SustainabilityPolicySection() {
  const [activeTab, setActiveTab] = useState<"environmental" | "humanSafety">(
    "environmental",
  );
  const activePolicy = POLICY_CONTENT[activeTab];

  return (
    <section
      id="sustainability-tabs"
      className="mt-0 scroll-mt-20 bg-white"
      aria-label="Sustainability sections"
    >
      <div className="w-full bg-primary-400 px-4 py-3 sm:px-6 lg:px-8">
        <div
          role="tablist"
          aria-orientation="horizontal"
          className="mx-auto flex w-full max-w-6xl flex-col items-stretch gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-2 md:gap-3"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "environmental"}
            onClick={() => setActiveTab("environmental")}
            className={`min-h-[48px] w-full max-w-full shrink-0 rounded-lg px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors duration-200 sm:min-h-0 sm:w-auto sm:px-5 sm:text-base ${
              activeTab === "environmental"
                ? "bg-[#004A77] shadow-sm"
                : "hover:bg-white/15"
            }`}
          >
            Environmental Policy
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "humanSafety"}
            onClick={() => setActiveTab("humanSafety")}
            className={`min-h-[48px] w-full max-w-full shrink-0 rounded-lg px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors duration-200 sm:min-h-0 sm:w-auto sm:px-5 sm:text-base ${
              activeTab === "humanSafety" ? "bg-[#004A77] shadow-sm" : "hover:bg-white/15"
            }`}
          >
            Human Safety Policy
          </button>
        </div>
      </div>

      <div className="relative mt-8 min-h-[580px] w-full overflow-hidden px-3 sm:mt-10 sm:min-h-[620px] sm:px-4 md:min-h-[680px] lg:min-h-[720px] lg:px-0">
        <div className="absolute inset-0 overflow-hidden rounded-bl-[6rem] rounded-tr-[6rem] sm:rounded-bl-[10rem] sm:rounded-tr-[10rem] lg:rounded-bl-[20rem] lg:rounded-tr-[20rem]">
          <Image
            src="/images/sustainability/tree.png"
            alt="Tree on grassy field"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="absolute inset-0 rounded-br-[6rem] rounded-tl-[6rem] bg-primary-500/35 sm:rounded-br-[10rem] sm:rounded-tl-[10rem] lg:rounded-br-[20rem] lg:rounded-tl-[20rem]" />

        <div className="relative flex min-h-[inherit] w-full items-center justify-center px-3 py-8 sm:px-6 sm:py-10 md:px-8">
          <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-primary-950/65 px-5 py-6 text-white shadow-[0_14px_30px_rgba(0,0,0,0.18)] backdrop-blur-[1.5px] sm:rounded-4xl sm:px-8 sm:py-7 md:px-10 md:py-8 lg:max-w-3xl xl:max-w-4xl">
            <h2 className="text-xl font-extrabold text-[#14b6e8] sm:text-3xl sm:leading-tight md:text-[2.15rem]">
              {activePolicy.titleStart} <span className="text-white">{activePolicy.titleHighlight}</span>
            </h2>
            {activePolicy.paragraphs.map((paragraph, index) => (
              <p
                key={`${activeTab}-${index}`}
                className={`text-sm font-semibold leading-relaxed sm:text-base sm:leading-[1.45] ${
                  index === 0 ? "mt-4 text-white" : "mt-4 text-white/95"
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
