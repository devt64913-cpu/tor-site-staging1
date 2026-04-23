import Image from "next/image";
import Link from "next/link";
import {
  IconBrandFacebookFilled,
  IconBrandInstagramFilled,
  IconBrandLinkedinFilled,
  IconBrandTiktokFilled,
  IconBrandXFilled,
  IconCircleLetterC,
} from "@tabler/icons-react";

const COMPANY_LINKS = [
  { href: "/whoweare", label: "About Us" },
  { href: "/whoweare", label: "Our history" },
  { href: "/whoweare", label: "Missions & Values" },
] as const;

const OPERATIONS_LINKS = [
  { href: "/what-we-do", label: "What we do" },
  { href: "/sustainability", label: "Sustainability" },
  { href: "/health-safety", label: "Health & safety" },
] as const;

const RESOURCES_LINKS = [
  { href: "/news", label: "News & Events" },
  { href: "/investors", label: "Investors" },
] as const;

const SOCIAL_LINKS = [
  { href: "#", label: "Facebook", icon: IconBrandFacebookFilled },
  { href: "#", label: "X", icon: IconBrandXFilled },
  { href: "#", label: "Instagram", icon: IconBrandInstagramFilled },
  { href: "#", label: "TikTok", icon: IconBrandTiktokFilled },
  { href: "#", label: "LinkedIn", icon: IconBrandLinkedinFilled },
] as const;

export default function FooterShowcase() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#004A77] pb-8 pt-10 text-white sm:pb-10 sm:pt-12 lg:pb-10 lg:pt-14">
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-8 lg:px-16 2xl:px-0">
        <div className="rounded-t-[2.5rem] bg-[#004A77]">
          <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 md:gap-x-10 md:gap-y-12 lg:flex lg:justify-between">
          {/* <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1fr] lg:gap-16 xl:gap-24"> */}
          <div>
            <Link href="/" className="inline-flex items-center gap-4">
              <Image
                src="/images/logo.png"
                alt="Tema Oil Refinery logo"
                width={110}
                height={62}
                className="h-auto w-[90px] sm:w-[110px]"
              />
            </Link>
          </div>

          <div>
            <h3 className="text-xl font-semibold sm:text-2xl">Company</h3>
            <ul className="mt-4 space-y-2.5 text-white/95 sm:space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-xs transition-colors hover:text-cyan-200 sm:text-[13px]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold sm:text-2xl">Operations</h3>
            <ul className="mt-4 space-y-2.5 text-white/95 sm:space-y-3">
              {OPERATIONS_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-xs transition-colors hover:text-cyan-200 sm:text-[13px]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold sm:text-2xl">Resources</h3>
            <ul className="mt-4 space-y-2.5 text-white/95 sm:space-y-3">
              {RESOURCES_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-xs transition-colors hover:text-cyan-200 sm:text-[13px]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-left lg:text-right">
            <h3 className="text-xl font-semibold leading-none tracking-tight sm:text-2xl">
              Tema Oil Refinery
            </h3>
            <p className="max-w-sm text-xs leading-snug text-white/95 sm:text-[13px] lg:ml-auto mt-6">
              Established in 1963 and being the first stellar refinery in Africa.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3 sm:gap-4 lg:justify-end">
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="text-white/95 transition-colors hover:text-cyan-200"
                >
                  <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
              ))}
            </div>
          </div>


          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 border-t border-white/20 pt-5 text-center text-xs text-white/95 sm:mt-10 sm:gap-3 sm:pt-6 sm:text-sm md:text-base lg:mt-12 lg:gap-3 lg:pt-6 lg:text-base 2xl:mt-14 2xl:pt-7">
            <IconCircleLetterC className="h-4 w-4 sm:h-5 sm:w-5 lg:h-5 lg:w-5" />
            <span>{year} Tema Oil Refinery. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
