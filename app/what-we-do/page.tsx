import type { Metadata } from "next";
import WhatWeDo from "@/components/whatwedo/WhatWeDo";

export const metadata: Metadata = {
  title: "What We Do | Tema Oil Refinery (TOR)",
  description:
    "Operations, capabilities, and services at Tema Oil Refinery—crude processing, refined products, ATK, premix fuel, and support services for Ghana.",
};

export default function Page() {
  return <WhatWeDo />;
}
