"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { IconMenu2, IconX, IconPhone } from "@tabler/icons-react";
import Logo from "@/components/Logo";

const MAIN_NAV = [
  { href: "/", label: "Home" },
  { href: "/whoweare", label: "Who We Are" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/sustainability", label: "Sustainability" },
  { href: "/health-safety", label: "Health & safety" },
  { href: "/news", label: "News & Event" },
  { href: "/investors", label: "Investors" },
] as const;

function NavLink({
  href,
  label,
  onNavigate,
}: {
  href: string;
  label: string;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={`group relative whitespace-nowrap px-1.5 py-2 text-xs font-medium transition-colors duration-200 xl:text-sm ${
        isActive ? "text-primary-500" : "text-gray-800 hover:text-primary-500"
      }`}
    >
      {label}
      <span
        className={`absolute bottom-0 left-0 h-0.5 bg-primary-500 transition-all duration-200 ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const closeMobile = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-sm transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Full-width row (no max-w container) so nav can sit at the viewport’s right edge */}
      <nav className="w-full px-4 sm:px-5 lg:px-8 xl:px-10 2xl:px-12">
        <div className="flex w-full min-w-0 items-center py-3 lg:h-20 lg:py-0">
          <div className="min-w-0 shrink-0">
            <Logo />
          </div>

          <div className="ml-auto mr-4 hidden min-w-0 shrink-0 items-center gap-1.5 sm:mr-5 lg:mr-8 lg:flex xl:gap-2 2xl:mr-10">
            <div className="flex max-w-none flex-wrap items-center justify-end gap-x-1 gap-y-1 sm:gap-x-1.5 md:gap-x-2 xl:gap-x-2.5">
              {MAIN_NAV.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                />
              ))}
            </div>
            <Link
              href="/investor-contacts"
              className={`inline-flex shrink-0 items-center gap-1.5 rounded-lg px-3.5 py-2.5 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:shadow-md ${
                pathname === "/investor-contacts"
                  ? "bg-primary-600"
                  : "bg-primary-500 hover:bg-primary-600"
              }`}
            >
              Contact Us
              <IconPhone className="h-5 w-5 shrink-0" aria-hidden />
            </Link>
          </div>

          <div className="ml-auto mr-4 flex shrink-0 items-center sm:mr-5 lg:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <IconX className="h-6 w-6" />
              ) : (
                <IconMenu2 className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="border-t border-gray-100 pb-4 lg:hidden">
            <div className="flex flex-col pt-2">
              {MAIN_NAV.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobile}
                    className={`border-b border-gray-100 px-2 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-primary-50 font-semibold text-primary-600"
                        : "text-gray-800 hover:bg-primary-50/80 hover:text-primary-600"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/investor-contacts"
                onClick={closeMobile}
                className={`mx-2 mt-4 flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-center text-sm font-semibold text-white shadow-sm ${
                  pathname === "/investor-contacts"
                    ? "bg-primary-600"
                    : "bg-primary-500 hover:bg-primary-600"
                }`}
              >
                <IconPhone className="h-5 w-5 shrink-0" aria-hidden />
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
