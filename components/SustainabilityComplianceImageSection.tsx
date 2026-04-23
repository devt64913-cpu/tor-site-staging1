import Image from "next/image";

export default function SustainabilityComplianceImageSection() {
  return (
    <section className="mb-16 mt-6 bg-white py-4 sm:py-5">
      <div className="relative h-280 w-full">
        <div className="absolute h-280 w-full bg-primary-500/30">
          <div className="absolute h-280 w-full rounded-br-[30rem] rounded-tl-[30rem] bg-primary-500 px-24 pt-10">
            <Image
              src="/images/sustainability/environment.png"
              alt="Environmental and safety compliance framework"
              width={100}
              height={100}
              className="h-248 w-full object-fill"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
