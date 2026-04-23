import Image from "next/image";

export default function SustainabilityPolicySection() {
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
          className="mx-auto flex max-w-6xl flex-col items-center gap-2 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-2 md:gap-3"
        >
          <button
            type="button"
            role="tab"
            aria-selected
            className="min-h-[48px] w-auto max-w-full shrink-0 rounded-lg bg-[#004A77] px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-colors duration-200 sm:min-h-0 sm:px-5 sm:text-base"
          >
            Environmental Policy
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={false}
            className="min-h-[48px] w-auto max-w-full shrink-0 rounded-lg px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/15 sm:min-h-0 sm:px-5 sm:text-base"
          >
            Human Safety Policy
          </button>
        </div>
      </div>

      <div className="relative mt-12 h-136 w-full px-0">
        <div className="absolute h-136 w-full overflow-hidden rounded-bl-[20rem] rounded-tr-[20rem]">
          <Image
            src="/images/sustainability/tree.png"
            alt="Tree on grassy field"
            fill
            className="absolute object-fill"
            priority
          />
        </div>

        <div className="absolute h-136 w-full rounded-br-[20rem] rounded-tl-[20rem] bg-primary-500/35" />

        <div className="flex h-full w-full items-center justify-center">
          <div className="inset-0 relative w-[50%] overflow-hidden rounded-[2.15rem] bg-primary-950/60 px-6 py-5 text-white shadow-[0_14px_30px_rgba(0,0,0,0.18)] backdrop-blur-[1.5px] sm:px-8 sm:py-7 md:px-10 md:py-8">
            <h2 className="text-xl font-extrabold text-[#14b6e8] sm:text-[2.15rem] sm:leading-tight">
              Environmental <span className="text-white">Policy Statement</span>
            </h2>
            <p className="mt-4 text-xs font-semibold leading-relaxed text-white sm:text-[1.02rem] sm:leading-[1.45]">
              The Mission of Tema Oil Refinery (TOR) Limited is to provide clean energy products
              to power Ghana&apos;s economic growth in an environmentally sustainable manner.
            </p>
            <p className="mt-4 text-xs font-semibold leading-relaxed text-white/95 sm:text-[1.02rem] sm:leading-[1.45]">
              TOR is committed to implementing pollution prevention and mitigation measures aimed
              at avoidance, minimisation, restoration and offset as it refines crude oil into
              clean energy products and other related operations.
            </p>
            <p className="mt-4 text-xs font-semibold leading-relaxed text-white/95 sm:text-[1.02rem] sm:leading-[1.45]">
              TOR shall strive to continually improve on its environmental performance and ensure
              compliance with all applicable legal and regulatory requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
