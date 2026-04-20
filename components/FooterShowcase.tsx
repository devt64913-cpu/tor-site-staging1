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
    <footer className="bg-[#004A77] pb-10 pt-12 text-white lg:pt-14">
      <div className="mx-6 rounded-t-[2.5rem] bg-[#004A77] sm:mx-10 lg:mx-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1fr] lg:gap-16 xl:gap-24">
          <div>
            <Link href="/" className="inline-flex items-center gap-4">
              <Image
                src="/images/logo.png"
                alt="Tema Oil Refinery logo"
                width={74}
                height={42}
                className="h-auto w-[74px]"
              />
              <span className="text-2xl font-semibold leading-none tracking-tight">
                Tema Oil Refinery
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-base leading-snug text-white/95">
              Established in 1963 and being the first stellar refinery in Africa.
            </p>
            <div className="mt-5 flex items-center gap-4">
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="text-white/95 transition-colors hover:text-cyan-200"
                >
                  <item.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">Company</h3>
            <ul className="mt-4 space-y-3 text-base text-white/95">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="transition-colors hover:text-cyan-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">Operations</h3>
            <ul className="mt-4 space-y-3 text-base text-white/95">
              {OPERATIONS_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="transition-colors hover:text-cyan-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">Resources</h3>
            <ul className="mt-4 space-y-3 text-base text-white/95">
              {RESOURCES_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="transition-colors hover:text-cyan-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center gap-3 border-t border-white/20 pt-6 text-center text-sm text-white/95 sm:text-base">
          <IconCircleLetterC className="h-5 w-5" />
          <span>{year} Tema Oil Refinery. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
