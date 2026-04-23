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
      <div className="relative flex h-[72px] w-[72px] items-center justify-center overflow-hidden rounded-lg sm:h-[80px] sm:w-[80px]">
        <Image
          src={`/images/logo.png`}
          alt="TOR Refinery Logo"
          fill
          sizes="(max-width: 640px) 72px, 80px"
          className="object-contain"
        />
      </div>
      {showText && (
        <span className="text-xl font-bold text-white ml-2 mt-3">Tema Oil Refinery</span>
      )}
    </Link>
  );
}

