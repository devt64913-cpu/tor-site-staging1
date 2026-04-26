import Image from "next/image";

export default function SustainabilityComplianceImageSection() {
  return (
    <section className="mb-16 mt-6 bg-white py-4 sm:py-5">
      <div className="relative h-120 w-full sm:h-160 lg:h-220 xl:h-280">
        <div className="absolute inset-0 bg-primary-500/30">
          <div className="absolute inset-0 rounded-br-[8rem] rounded-tl-[8rem] bg-primary-500 px-3 pt-3 sm:rounded-br-[16rem] sm:rounded-tl-[16rem] sm:px-8 sm:pt-6 lg:rounded-br-[30rem] lg:rounded-tl-[30rem] lg:px-16 lg:pt-8 xl:px-24 xl:pt-10">
            <Image
              src="/images/sustainability/environment.png"
              alt="Environmental and safety compliance framework"
              width={100}
              height={100}
              className="h-full w-full rounded-3xl object-cover sm:rounded-[2.5rem]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
