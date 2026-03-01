import Link from "next/link";
import { IconBrandLinkedin, IconBrandTwitter, IconMapPin } from "@tabler/icons-react";
import Logo from "@/components/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { href: "/about", label: "About Us" },
      { href: "/history", label: "Our History" },
      { href: "/mission", label: "Mission & Values" },
    ],
    operations: [
      { href: "/what-we-do", label: "What We Do" },
      { href: "/sustainability", label: "Sustainability" },
      { href: "/health-safety", label: "Health & Safety" },
    ],
    resources: [
      { href: "/news", label: "News & Events" },
      { href: "/investors", label: "Investors" },
      { href: "/investor-contacts", label: "Investor Contacts" },
    ],
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Logo showText={true} className="mb-4" />
            <p className="text-sm text-gray-400 mb-4">
              Refining crude since 1963. Ghana&apos;s premier crude oil refinery—quality energy products to power Ghana&apos;s economic growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <IconBrandLinkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <span className="sr-only">Twitter</span>
                <IconBrandTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Operations Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Operations</h3>
            <ul className="space-y-2">
              {footerLinks.operations.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location Map */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <IconMapPin className="w-5 h-5 text-primary-500" />
              Our Location
            </h3>
            <div className="space-y-3 mb-4">
            <p className="text-sm text-gray-400">
              Tema Oil Refinery Limited<br />
              Heavy Industrial Area, Valco Road, Tema
            </p>
            </div>
            <div className="w-full h-48 rounded-lg overflow-hidden border border-gray-700">
              <iframe
                src="https://www.google.com/maps?q=5.6733,0.00562&hl=en&z=14&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="TOR Refinery Location"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} TOR Refinery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

