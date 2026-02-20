"use client";

import { ReactNode, useEffect, useState } from "react";

interface PhoneLinkProps {
  phone: string;
  children?: ReactNode;
  className?: string;
}

const MOBILE_MAX_WIDTH = 768;

export default function PhoneLink({ phone, children, className }: PhoneLinkProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_MAX_WIDTH}px)`);
    const handler = () => setIsMobile(mql.matches);
    setIsMobile(mql.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  if (isMobile) {
    return (
      <a href={`tel:${phone.replace(/\s/g, "")}`} className={className}>
        {children ?? phone}
      </a>
    );
  }

  return <span className={className}>{children ?? phone}</span>;
}
