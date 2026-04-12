import type { Metadata } from "next";
import AboutUs from "@/components/about/AboutUs";

export const metadata: Metadata = {
  title: "Who We Are | Tema Oil Refinery (TOR)",
  description:
    "Tema Oil Refinery (TOR) Ltd.—Ghana's first value-added investment after the Akosombo dam. Learn about our history, leadership, and board.",
};

export default function Page() {
  return <AboutUs />;
}
