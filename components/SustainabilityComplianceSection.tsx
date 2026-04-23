const COMPLIANCE_FRAMEWORK = [
  {
    title: "Resource Efficiency",
    body: "Using raw materials and utilities effectively",
    color: "text-sky-900",
  },
  {
    title: "Environmental Standards",
    body: "Adhering to air, water, and noise regulations",
    color: "text-sky-900",
  },
  {
    title: "Waste Management",
    body: "Handling hazardous and non-hazardous waste responsibly",
    color: "text-sky-900",
  },
  {
    title: "Containment Systems",
    body: "Protecting against hazardous material leaks",
    color: "text-sky-900",
  },
  {
    title: "Legal Compliance",
    body: "Meeting all HSE legal and administrative requirements",
    color: "text-sky-900",
  },
  {
    title: "Standard Procedures",
    body: "Following established operating procedures",
    color: "text-sky-900",
  },
  {
    title: "Emergency Preparedness",
    body: "Having effective emergency response systems",
    color: "text-sky-900",
  },
  {
    title: "Personnel Training",
    body: "Ensuring competence through training and re-training",
    color: "text-sky-900",
  },
] as const;

export default function SustainabilityComplianceSection() {
  return (
    <section className="mb-16 mt-6 bg-white py-4 sm:py-5">
      <div className="relative h-280 w-full">
        <div className="absolute h-280 w-full bg-primary-500/30">
          <div className="absolute h-280 w-full rounded-br-[30rem] rounded-tl-[30rem] bg-primary-500 px-24 pt-10">
            <div className="h-248 w-full rounded-[2.5rem] bg-primary-500 px-6 py-8 text-white sm:px-8 sm:py-10">
              <h3 className="text-center text-2xl font-extrabold tracking-tight text-primary-50 sm:text-4xl">
                Environmental and Safety Compliance
              </h3>
              <p className="mx-auto mt-3 max-w-3xl text-center text-sm text-primary-50/95 sm:text-base">
                Each control pillar is interconnected to keep operations compliant, safe, and
                environmentally responsible.
              </p>

              <div className="mt-7 grid grid-cols-1 gap-3 lg:grid-cols-2 xl:hidden">
                {COMPLIANCE_FRAMEWORK.map((item, index) => (
                  <article
                    key={item.title}
                    className="rounded-xl border border-sky-200/80 bg-sky-50/95 p-3"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <h4 className={`text-base font-bold ${item.color}`}>{item.title}</h4>
                      <span className="h-2.5 w-2.5 rounded-full bg-sky-300" />
                    </div>
                    <p className="mt-1.5 text-sm text-sky-900/80">{item.body}</p>
                    <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-primary-700/70">
                      Step {String(index + 1).padStart(2, "0")}
                    </p>
                  </article>
                ))}
              </div>

              <div className="mt-6 hidden xl:grid xl:grid-cols-[1fr_auto_1fr] xl:items-center xl:gap-8">
                <div className="space-y-4">
                  {COMPLIANCE_FRAMEWORK.slice(0, 4).map((item, index) => (
                    <article
                      key={item.title}
                      className="rounded-xl border border-sky-200/80 bg-sky-50/95 p-3 shadow-[0_8px_20px_rgba(0,0,0,0.08)]"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <h4 className={`text-base font-bold leading-tight ${item.color}`}>
                          {item.title}
                        </h4>
                        <span className="text-[11px] font-semibold text-primary-700/70">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <p className="mt-1.5 text-sm leading-snug text-sky-900/80">{item.body}</p>
                    </article>
                  ))}
                </div>

                <div className="relative h-96 w-96">
                  <div className="absolute inset-0 rounded-full border-[3px] border-primary-100/85" />
                  <div className="absolute inset-22 rounded-full border border-primary-100 bg-white/95 backdrop-blur-sm">
                    <div className="flex h-full items-center justify-center px-6 text-center text-sm font-semibold uppercase tracking-[0.09em] text-primary-900">
                      Compliance
                      <br />
                      Control Loop
                    </div>
                  </div>
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary-100 bg-primary-50 px-3 py-1 text-[11px] font-bold text-primary-900">
                    01
                  </div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full border-2 border-primary-100 bg-primary-50 px-3 py-1 text-[11px] font-bold text-primary-900">
                    03
                  </div>
                  <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 rounded-full border-2 border-primary-100 bg-primary-50 px-3 py-1 text-[11px] font-bold text-primary-900">
                    05
                  </div>
                  <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary-100 bg-primary-50 px-3 py-1 text-[11px] font-bold text-primary-900">
                    07
                  </div>
                </div>

                <div className="space-y-4">
                  {COMPLIANCE_FRAMEWORK.slice(4, 8).map((item, index) => (
                    <article
                      key={item.title}
                      className="rounded-xl border border-sky-200/80 bg-sky-50/95 p-3 shadow-[0_8px_20px_rgba(0,0,0,0.08)]"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <h4 className={`text-base font-bold leading-tight ${item.color}`}>
                          {item.title}
                        </h4>
                        <span className="text-[11px] font-semibold text-primary-700/70">
                          {String(index + 5).padStart(2, "0")}
                        </span>
                      </div>
                      <p className="mt-1.5 text-sm leading-snug text-sky-900/80">{item.body}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
