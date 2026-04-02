import { url } from "@/utils/url";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  showText?: boolean;
  className?: string;
}

export default function Logo({ showText = false, className = "" }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <div className="w-16 h-16 rounded-lg flex items-center justify-center relative overflow-hidden">
        <Image
          // src={`${url}/images/logo.png`}
          src={`/images/logo.png`}
          alt="TOR Refinery Logo"
          width={58}
          height={58}
          className="object-cover"
        />
      </div>
      {showText && (
        <span className="text-xl font-bold text-gray-900 ml-2">TOR Refinery</span>
      )}
    </Link>
  );
}

