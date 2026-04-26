import Image from "next/image";

const TIMELINE_ITEMS: string[] = [];

const CONTACT_FIELDS = [
  "First Name",
  "Last Name",
  "E-mail",
  "Institution",
  "Job Position / Title",
  "Telephone",
  "Date",
  "Additional Information",
] as const;

export default function Investors() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden pt-16 lg:pt-20">
        <div className="relative min-h-[62vh] w-full">
          <Image
            src="/images/whatwedo/hands.png"
            alt="Investors page hero background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />

          <div className="relative z-10 mx-auto flex min-h-[62vh] w-full max-w-7xl flex-col justify-center px-4 py-12 sm:px-6 lg:px-8">
            <h1 className="max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Powering Ghana&apos;s Future Through Bold Investments and Transformative Projects.
            </h1>
            <button
              type="button"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-md bg-primary-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-400 sm:text-base"
            >
              Learn More <span aria-hidden>→</span>
            </button>
          </div>
        </div>

        {TIMELINE_ITEMS.length > 0 && (
          <div className="absolute bottom-0 z-20 w-full border-t border-white/35 bg-black/45">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 py-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
              {TIMELINE_ITEMS.map((item, index) => (
                <p key={index} className="text-xs font-semibold leading-snug text-white/95">
                  {item}
                </p>
              ))}
            </div>
          </div>
        )}
      </section>

      <div className="w-full bg-primary-500">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-1 px-2 py-1 sm:gap-2 sm:px-4">
          <button className="rounded-sm px-4 py-2 text-xs font-semibold text-white hover:bg-primary-600 sm:text-sm">
            Overview
          </button>
          <button className="rounded-sm px-4 py-2 text-xs font-semibold text-white hover:bg-primary-600 sm:text-sm">
            Project &amp; Investments
          </button>
          <button className="rounded-sm bg-primary-900 px-4 py-2 text-xs font-semibold text-white sm:text-sm">
            Investor Contact
          </button>
        </div>
      </div>

      <section className="bg-primary-500/95 px-2 py-6 sm:px-4 sm:py-8">
        <div className="mx-auto w-full max-w-7xl overflow-hidden rounded-4xl border border-white/30 bg-primary-900/95 shadow-lg sm:rounded-[2.5rem]">
          <div className="rounded-t-4xl bg-white px-4 py-3 sm:rounded-t-[2.5rem] sm:px-6">
            <div className="flex items-center gap-3">
              <Image src="/images/logo.png" alt="TOR Logo" width={56} height={56} className="h-12 w-auto" />
              <div>
                <h2 className="text-lg font-bold text-primary-900 sm:text-2xl">Investor Contact</h2>
                <p className="text-xs font-medium text-primary-900/90 sm:text-sm">
                  Please complete the form below and a member of our team will be in touch within
                  12-24 hours.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/images/man-working.jpg"
              alt="Investor contact background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary-900/65" />

            <form className="relative z-10 grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 sm:gap-5 sm:p-6 lg:p-8">
              {CONTACT_FIELDS.map((field) => (
                <label
                  key={field}
                  className={`flex flex-col gap-2 text-sm font-bold text-white ${
                    field === "Additional Information" ? "sm:col-span-1" : ""
                  }`}
                >
                  {field}
                  {field === "Additional Information" ? (
                    <textarea className="h-28 rounded-sm border border-white/70 bg-white px-3 py-2 text-sm text-primary-900 outline-none focus:ring-2 focus:ring-primary-400" />
                  ) : (
                    <input
                      className="h-11 rounded-sm border border-white/70 bg-white px-3 text-sm text-primary-900 outline-none focus:ring-2 focus:ring-primary-400"
                      placeholder={field === "Date" ? "dd-mm-yy" : ""}
                    />
                  )}
                </label>
              ))}

              <div className="sm:col-span-2 mt-2 flex items-center justify-center gap-4">
                <button
                  type="button"
                  className="min-w-28 rounded-full bg-white px-6 py-2 text-sm font-bold text-red-600 transition hover:bg-white/90"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="min-w-28 rounded-full bg-primary-500 px-6 py-2 text-sm font-bold text-white transition hover:bg-primary-400"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
