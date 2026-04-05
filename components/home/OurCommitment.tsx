"use client";

import Image from "next/image";

const commitments = [
  {
    title: "Safety",
    description:
      "We put safety first in every operation—protecting our people, our communities, and our facilities through rigorous standards, training, and a culture of vigilance.",
  },
  {
    title: "Integrity",
    description:
      "We act with honesty and accountability in all we do, building trust with stakeholders through transparent practices and ethical decision-making.",
  },
  {
    title: "Excellence",
    description:
      "We pursue the highest standards in refining, maintenance, and service—continuously improving so we deliver quality products and reliable performance.",
  },
  {
    title: "Teamwork",
    description:
      "We succeed together: collaboration across departments and with partners ensures resilient operations and shared goals for Ghana’s energy future.",
  },
  {
    title: "Competence",
    description:
      "We invest in skills, technology, and expertise so our teams can operate complex assets safely and efficiently in a demanding industry.",
  },
  {
    title: "Respect For Environment",
    description:
      "TOR recognizes the vital significance of being environmentally conscious. To ensure that its activities are in line with the principles that promote the environment for present and future generations, the refinery is deeply committed to sustainable practices and environmental stewardship.",
  },
  {
    title: "Innovation",
    description:
      "We embrace new technologies and smarter ways of working—upgrading processes, improving efficiency, and adapting so TOR remains competitive and ready for the future of energy.",
  },
];

function CommitmentCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="group relative mx-auto aspect-[3/4] w-full max-w-[min(100%,280px)] overflow-hidden rounded-lg shadow-lg sm:max-w-none">
      <Image
        src="/images/integrity.png"
        alt=""
        fill
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        sizes="(max-width: 640px) 280px, (max-width: 1280px) 45vw, 22vw"
      />
      {/* Natural state: light black band under the image so the bottom title reads clearly */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[9] h-[45%] bg-gradient-to-t from-black/55 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-0"
        aria-hidden
      />

      {/* Black overlay on hover: slides up from the bottom */}
      <div
        className="pointer-events-none absolute inset-0 z-[8] bg-black/65 translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0"
        aria-hidden
      />

      {/* Default: title at bottom */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-5 transition-opacity duration-300 group-hover:pointer-events-none group-hover:opacity-0 md:p-6">
        <h3 className="inline-block border-b-2 border-[#00AEEF] pb-1 text-lg font-bold text-white md:text-xl">
          {title}
        </h3>
      </div>

      {/* Hover: title top + description */}
      <div className="pointer-events-none absolute inset-0 z-20 flex flex-col p-5 opacity-0 transition-opacity duration-300 group-hover:pointer-events-auto group-hover:opacity-100 md:p-6">
        <h3 className="shrink-0 border-b-2 border-[#00AEEF] pb-1 text-lg font-bold text-white md:text-xl">
          {title}
        </h3>
        <p className="flex flex-1 items-center text-center text-sm leading-relaxed text-white md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function OurCommitment() {
  return (
    <section className="relative isolate min-h-[560px] overflow-hidden py-16 md:min-h-[640px] md:py-24">
      <Image
        src="/images/our-commitment-image.png"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      <div
        className="absolute inset-0 bg-[#004A77]/[0.34]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8 lg:max-w-7xl xl:max-w-[min(100%,1200px)] 2xl:max-w-[1280px]">
        <h2 className="mb-8 text-center text-2xl font-bold tracking-tight text-white sm:mb-10 sm:text-3xl md:mb-12 md:text-4xl">
          Our Commitment
        </h2>

        <div className="mx-auto flex w-full flex-col gap-4 sm:gap-6 xl:gap-8">
          {/* Row 1: 1 col → 2 cols (sm) → 4 cols (xl+) */}
          <div className="grid w-full grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 sm:justify-items-stretch sm:gap-5 md:gap-6 xl:grid-cols-4">
            {commitments.slice(0, 4).map((item) => (
              <CommitmentCard key={item.title} title={item.title} description={item.description} />
            ))}
          </div>
          {/* Row 2: 1 col → 2 cols → centered 3 cols on xl+ */}
          <div className="grid w-full grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 sm:justify-items-stretch sm:gap-5 md:gap-6 xl:mx-auto xl:max-w-[calc(75%-1.125rem)] xl:grid-cols-3">
            {commitments.slice(4, 7).map((item, index) =>
              index === 2 ? (
                <div
                  key={item.title}
                  className="flex w-full justify-center sm:col-span-2 xl:col-span-1"
                >
                  <div className="w-full max-w-[min(100%,280px)] sm:max-w-[calc(50%-0.625rem)] xl:max-w-none">
                    <CommitmentCard title={item.title} description={item.description} />
                  </div>
                </div>
              ) : (
                <CommitmentCard key={item.title} title={item.title} description={item.description} />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
