import Link from "next/link";
import { IconBrandFacebook, IconBrandFacebookFilled, IconBrandInstagramFilled, IconBrandLinkedin, IconBrandLinkedinFilled, IconBrandTiktokFilled, IconBrandTwitter, IconBrandX, IconBrandXFilled, IconMapPin } from "@tabler/icons-react";
import Logo from "@/components/Logo";
import Image from "next/image";



export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { href: "/whoweare", label: "About Us" },
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
      // { href: "/investor-contacts", label: "Investor Contacts" },
    ],
  };

  const height = "h-[27rem]";

  return (
    <footer className={`bg-gray-900 text-gray-300 rounded-tl-[60px] rounded-tr-[60px] relative ${height} overflow-hidden`}>

      <Image
        width={100}
        height={100}
        alt=""
        src="/images/footer-image.jpg"
        className={`${height} w-full object-cover absolute`}
      />

      <div className={`absolute ${height} w-full bg-primary-950/60`} />
      <div className={`absolute inset-0 w-full px-4 lg:px-16 py-5 pt-16 ${height} `}>

        <div className="flex flex-row justify-between mx-32 mb-8  ">
          {/* Company Info */}
          <div>
            {/* <Logo showText={true} className="mb-4" /> */}
            <Link href="/" className={`flex flex-col `}>
              <div className=" flex flex-col ">
                <Image
                  // src={`${url}/images/logo.png`}
                  src={`/images/logo.png`}
                  alt="TOR Refinery Logo"
                  width={98}
                  height={98}
                  className="object-cover w-[95%] h-[130px]"
                />
              </div>

              <span className="text-xl font-bold text-white ml-2 mt-8">Tema Oil Refinery</span>

            </Link>

          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-500 transition-colors text-white"
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
                    className="text-sm hover:text-primary-500 transition-colors text-white"
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
                    className="text-sm hover:text-primary-500 transition-colors text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location Map */}
          {/* <div>
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
          </div> */}
        </div>


        <div className="flex justify-between items-center mt-16">

          <div />

          <div className=" text-center text-lg text-white font-medium">
            <p>&copy; {currentYear} Tema Oil Refinery. All rights reserved.</p>
          </div>
          <div>
            <p className="text-sm text-white mb-4 ">
              Established in 1963 and being the first stellar refinery in Africa.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <span className="sr-only">Facebook</span>
                <IconBrandFacebookFilled className="w-7 h-7 text-white" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <span className="sr-only">Twitter</span>
                <IconBrandXFilled className="w-7 h-7 text-white" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <span className="sr-only">Instagram</span>
                <IconBrandInstagramFilled className="w-7 h-7 text-white" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <span className="sr-only">TikTok</span>
                <IconBrandTiktokFilled className="w-7 h-7 text-white" />
              </a>

              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <IconBrandLinkedinFilled className="w-7 h-7 text-white" />
              </a>
            </div>
          </div>
        </div>


      </div>
    </footer>
  );
}

