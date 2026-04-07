import Link from "next/link";
import { IconBrandLinkedin, IconBrandTwitter, IconMapPin } from "@tabler/icons-react";
import Logo from "@/components/Logo";
import Image from "next/image";



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

  const height = "h-[40rem]";

  return (
    <footer className={`bg-gray-900 text-gray-300 rounded-tl-[60px] rounded-tr-[60px] relative ${height} overflow-hidden`}>

      <Image
      width={100}
      height={100}
      alt=""
      src="/images/footer-image.jpg"
      className={`${height} w-full object-cover absolute`}
       />

       <div className={`absolute ${height} w-full bg-black/70`} />
      <div className={`container px-4 lg:px-16 py-12 w-[170%] pt-32 ${height} absolute bg-green-500`}>
        

        {/* <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} TOR Refinery. All rights reserved.</p>
        </div> */}
      </div>
    </footer>
  );
}

