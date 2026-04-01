"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { IconMenu2, IconX, IconChevronDown, IconPhone } from "@tabler/icons-react";
import Logo from "@/components/Logo";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWhoWeAreOpen, setIsWhoWeAreOpen] = useState(false);
  const [isMobileWhoWeAreOpen, setIsMobileWhoWeAreOpen] = useState(false);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const dropdownRefXL = useRef<HTMLDivElement>(null);
  const dropdownRefLG = useRef<HTMLDivElement>(null);
  const moreMenuRefXL = useRef<HTMLDivElement>(null);
  const moreMenuRefLG = useRef<HTMLDivElement>(null);

  const whoWeAreLinks = [
    { href: "/about", label: "About Us" },
    { href: "/history", label: "Our History" },
    { href: "/mission", label: "Mission & Values" },
  ];

  // Check if any "Who We Are" link is active
  const isWhoWeAreActive = whoWeAreLinks.some(link => pathname === link.href);

  const navLinks = [
    { href: "/what-we-do", label: "What We Do" },
    { href: "/sustainability", label: "Sustainability" },
    // { href: "/health-safety", label: "Health & Safety" },
    // { href: "/news", label: "News & Events" },
    { href: "/investors", label: "Investors" },
    // { href: "/procurement", label: "Procurement" },
  ];

  // Check if any nav link is active
  const isNavLinkActive = navLinks.some(link => pathname === link.href);
  const isMoreMenuActive = navLinks.slice(3).some(link => pathname === link.href);

  // Split nav links based on screen size:
  // - XL screens: Show first 4, rest in "More" menu
  // - LG screens: Show first 2, rest in "More" menu
  const visibleNavLinksXL = navLinks.slice(0, 4);
  const moreNavLinksXL = navLinks.slice(4);
  const visibleNavLinksLG = navLinks.slice(0, 2);
  const moreNavLinksLG = navLinks.slice(2);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      
      // Check Who We Are dropdowns
      if (isWhoWeAreOpen) {
        const isClickInsideXL = dropdownRefXL.current?.contains(target);
        const isClickInsideLG = dropdownRefLG.current?.contains(target);
        if (!isClickInsideXL && !isClickInsideLG) {
          setIsWhoWeAreOpen(false);
        }
      }
      
      // Check More menu dropdowns
      if (isMoreMenuOpen) {
        const isClickInsideXL = moreMenuRefXL.current?.contains(target);
        const isClickInsideLG = moreMenuRefLG.current?.contains(target);
        if (!isClickInsideXL && !isClickInsideLG) {
          setIsMoreMenuOpen(false);
        }
      }
    };

    if (isWhoWeAreOpen || isMoreMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isWhoWeAreOpen, isMoreMenuOpen]);

  // Handle scroll to show/hide navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar at the top
      if (currentScrollY < 10) {
        setIsVisible(true);
      } 
      // Hide when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } 
      // Show when scrolling up
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm border-b border-gray-100 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20 min-w-0">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation - XL screens (1280px and above) */}
          <div className="hidden xl:flex items-center gap-4 flex-wrap">
            <Link
              href="/"
              className={`px-2 py-2 text-sm font-medium transition-colors duration-200 relative group whitespace-nowrap ${
                pathname === "/" 
                  ? "text-primary-500" 
                  : "text-gray-800 hover:text-primary-500"
              }`}
            >
              Home
              <span className={`absolute bottom-0 left-0 h-0.5 bg-primary-500 transition-all duration-200 ${
                pathname === "/" ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </Link>

            {/* Who We Are Dropdown */}
            <div className="relative" ref={dropdownRefXL}>
              <button
                onClick={() => setIsWhoWeAreOpen(!isWhoWeAreOpen)}
                onMouseEnter={() => setIsWhoWeAreOpen(true)}
                className={`flex items-center gap-1 px-2 py-2 text-sm font-medium transition-colors duration-200 relative group whitespace-nowrap ${
                  isWhoWeAreActive 
                    ? "text-primary-500" 
                    : "text-gray-800 hover:text-primary-500"
                }`}
              >
                Who We Are
                {/* <IconChevronDown className={`w-4 h-4 transition-transform duration-200 ${isWhoWeAreOpen ? 'rotate-180' : ''}`} />
                <span className={`absolute bottom-0 left-0 h-0.5 bg-primary-500 transition-all duration-200 ${
                  isWhoWeAreActive ? "w-full" : "w-0 group-hover:w-full"
                }`}></span> */}
              </button>

              {/* {isWhoWeAreOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-3 animate-in fade-in slide-in-from-top-2 duration-200 z-50"
                  onMouseLeave={() => setIsWhoWeAreOpen(false)}
                >
                  <div className="flex flex-col gap-2">
                    {whoWeAreLinks.map((link) => {
                      const isActive = pathname === link.href;
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setIsWhoWeAreOpen(false)}
                          className={`block px-5 py-3.5 text-sm transition-all duration-150 relative group mx-2 rounded-lg ${
                            isActive 
                              ? "text-primary-500 bg-primary-50 font-semibold" 
                              : "text-gray-700 hover:text-primary-500 hover:bg-primary-50"
                          }`}
                        >
                          <span className="relative z-10">{link.label}</span>
                          <span className={`absolute left-0 top-0 h-full bg-primary-50 transition-all duration-200 rounded-lg ${
                            isActive ? "w-full" : "w-0 group-hover:w-full"
                          }`}></span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )} */}
            </div>

            {/* Visible Nav Links for XL - Show first 4 */}
            {visibleNavLinksXL.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-2 py-2 text-sm font-medium transition-colors duration-200 relative group whitespace-nowrap ${
                    isActive 
                      ? "text-primary-500" 
                      : "text-gray-800 hover:text-primary-500"
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-primary-500 transition-all duration-200 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
                </Link>
              );
            })}

            {/* More Menu for XL - Show remaining items */}
            {moreNavLinksXL.length > 0 && (
              <div className="relative" ref={moreMenuRefXL}>
                <button
                  onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
                  onMouseEnter={() => setIsMoreMenuOpen(true)}
                  className={`flex items-center gap-1 px-2 py-2 text-sm font-medium transition-colors duration-200 relative group whitespace-nowrap ${
                    isMoreMenuActive
                      ? "text-primary-500"
                      : "text-gray-800 hover:text-primary-500"
                  }`}
                >
                  More
                  <IconChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMoreMenuOpen ? 'rotate-180' : ''}`} />
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-primary-500 transition-all duration-200 ${
                    isMoreMenuActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
                </button>

                {isMoreMenuOpen && (
                  <div 
                    className="absolute top-full right-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-3 animate-in fade-in slide-in-from-top-2 duration-200 z-50"
                    onMouseLeave={() => setIsMoreMenuOpen(false)}
                  >
                    <div className="flex flex-col gap-2">
                      {moreNavLinksXL.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMoreMenuOpen(false)}
                            className={`block px-5 py-3.5 text-sm transition-all duration-150 relative group mx-2 rounded-lg ${
                              isActive 
                                ? "text-primary-500 bg-primary-50 font-semibold" 
                                : "text-gray-700 hover:text-primary-500 hover:bg-primary-50"
                            }`}
                          >
                            <span className="relative z-10">{link.label}</span>
                            <span className={`absolute left-0 top-0 h-full bg-primary-50 transition-all duration-200 rounded-lg ${
                              isActive ? "w-full" : "w-0 group-hover:w-full"
                            }`}></span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}

            <Link
              href="/investor-contacts"
              className={`ml-2 px-4 py-3 text-sm font-semibold rounded-lg transition-all duration-200 
                 hover:shadow-md hover:scale-105 whitespace-nowrap flex ${
                pathname === "/investor-contacts"
                  ? "text-white bg-primary-600"
                  : "text-white bg-primary-500 hover:bg-primary-600"
              }`}
            >
              
              Contact Us
              <IconPhone className="w-5 h-5 ml-2" />
            </Link>
          </div>

          {/* Tablet/Medium Navigation - Reduced menu (1024px and below) */}
          <div className="hidden lg:flex xl:hidden items-center gap-4">
            <Link
              href="/"
              className={`px-2 py-2 text-sm font-medium transition-colors duration-200 relative group ${
                pathname === "/" 
                  ? "text-primary-500" 
                  : "text-gray-800 hover:text-primary-500"
              }`}
            >
              Home
              <span className={`absolute bottom-0 left-0 h-0.5 bg-primary-500 transition-all duration-200 ${
                pathname === "/" ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </Link>

            {/* Who We Are Dropdown for LG */}
            <div className="relative" ref={dropdownRefLG}>
              <button
                onClick={() => setIsWhoWeAreOpen(!isWhoWeAreOpen)}
                onMouseEnter={() => setIsWhoWeAreOpen(true)}
                className={`flex items-center gap-1 px-2 py-2 text-sm font-medium transition-colors duration-200 relative group whitespace-nowrap ${
                  isWhoWeAreActive 
                    ? "text-primary-500" 
                    : "text-gray-800 hover:text-primary-500"
                }`}
              >
                Who We Are
                <IconChevronDown className={`w-4 h-4 transition-transform duration-200 ${isWhoWeAreOpen ? 'rotate-180' : ''}`} />
                <span className={`absolute bottom-0 left-0 h-0.5 bg-primary-500 transition-all duration-200 ${
                  isWhoWeAreActive ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </button>

              {isWhoWeAreOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-3 animate-in fade-in slide-in-from-top-2 duration-200 z-50"
                  onMouseLeave={() => setIsWhoWeAreOpen(false)}
                >
                  <div className="flex flex-col gap-2">
                    {whoWeAreLinks.map((link) => {
                      const isActive = pathname === link.href;
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setIsWhoWeAreOpen(false)}
                          className={`block px-5 py-3.5 text-sm transition-all duration-150 relative group mx-2 rounded-lg ${
                            isActive 
                              ? "text-primary-500 bg-primary-50 font-semibold" 
                              : "text-gray-700 hover:text-primary-500 hover:bg-primary-50"
                          }`}
                        >
                          <span className="relative z-10">{link.label}</span>
                          <span className={`absolute left-0 top-0 h-full bg-primary-50 transition-all duration-200 rounded-lg ${
                            isActive ? "w-full" : "w-0 group-hover:w-full"
                          }`}></span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Visible Nav Links for LG - Show first 2 */}
            {visibleNavLinksLG.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-2 py-2 text-sm font-medium transition-colors duration-200 relative group whitespace-nowrap ${
                    isActive 
                      ? "text-primary-500" 
                      : "text-gray-800 hover:text-primary-500"
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-primary-500 transition-all duration-200 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
                </Link>
              );
            })}

            {/* More Menu for LG */}
            {moreNavLinksLG.length > 0 && (
              <div className="relative" ref={moreMenuRefLG}>
                <button
                  onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
                  onMouseEnter={() => setIsMoreMenuOpen(true)}
                  className={`flex items-center gap-1 px-2 py-2 text-sm font-medium transition-colors duration-200 relative group whitespace-nowrap ${
                    isMoreMenuActive
                      ? "text-primary-500"
                      : "text-gray-800 hover:text-primary-500"
                  }`}
                >
                  More
                  <IconChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMoreMenuOpen ? 'rotate-180' : ''}`} />
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-primary-500 transition-all duration-200 ${
                    isMoreMenuActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
                </button>

                {isMoreMenuOpen && (
                  <div 
                    className="absolute top-full right-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-3 animate-in fade-in slide-in-from-top-2 duration-200 z-50"
                    onMouseLeave={() => setIsMoreMenuOpen(false)}
                  >
                    <div className="flex flex-col gap-2">
                      {moreNavLinksLG.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMoreMenuOpen(false)}
                            className={`block px-5 py-3.5 text-sm transition-all duration-150 relative group mx-2 rounded-lg ${
                              isActive 
                                ? "text-primary-500 bg-primary-50 font-semibold" 
                                : "text-gray-700 hover:text-primary-500 hover:bg-primary-50"
                            }`}
                          >
                            <span className="relative z-10">{link.label}</span>
                            <span className={`absolute left-0 top-0 h-full bg-primary-50 transition-all duration-200 rounded-lg ${
                              isActive ? "w-full" : "w-0 group-hover:w-full"
                            }`}></span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}

            <Link
              href="/investor-contacts"
              className={`ml-2 px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 shadow-sm hover:shadow-md hover:scale-105 whitespace-nowrap ${
                pathname === "/investor-contacts"
                  ? "text-white bg-primary-600"
                  : "text-white bg-primary-500 hover:bg-primary-600"
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <IconX className="w-6 h-6" />
            ) : (
              <IconMenu2 className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <div className="flex flex-col py-2">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-3 text-base font-medium transition-colors duration-200 ${
                  pathname === "/"
                    ? "text-primary-500 bg-primary-50 font-semibold"
                    : "text-gray-800 hover:text-primary-500 hover:bg-primary-50"
                }`}
              >
                Home
              </Link>

              {/* Mobile Who We Are Dropdown */}
              <div className="border-b border-gray-100">
                <button
                  onClick={() => setIsMobileWhoWeAreOpen(!isMobileWhoWeAreOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-gray-800 hover:text-primary-500 hover:bg-primary-50 transition-colors duration-200"
                >
                  Who We Are
                  <IconChevronDown className={`w-5 h-5 transition-transform duration-200 ${isMobileWhoWeAreOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileWhoWeAreOpen && (
                  <div className="bg-gray-50 border-t border-gray-100">
                    {whoWeAreLinks.map((link) => {
                      const isActive = pathname === link.href;
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsMobileWhoWeAreOpen(false);
                          }}
                          className={`block px-8 py-2.5 text-sm transition-colors duration-200 ${
                            isActive
                              ? "text-primary-500 bg-white font-semibold"
                              : "text-gray-700 hover:text-primary-500 hover:bg-white"
                          }`}
                        >
                          {link.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Other Mobile Links */}
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-3 text-base font-medium transition-colors duration-200 border-b border-gray-100 ${
                      isActive
                        ? "text-primary-500 bg-primary-50 font-semibold"
                        : "text-gray-800 hover:text-primary-500 hover:bg-primary-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <Link
                href="/investor-contacts"
                onClick={() => setIsMenuOpen(false)}
                className={`mx-4 mt-4 mb-2 px-5 py-3 text-base font-semibold rounded-lg transition-colors duration-200 text-center shadow-sm flex items-center justify-center ${
                  pathname === "/investor-contacts"
                    ? "text-white bg-primary-600"
                    : "text-white bg-primary-500 hover:bg-primary-600"
                }`}
              >

                <IconPhone className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
