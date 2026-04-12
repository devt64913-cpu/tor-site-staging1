import { redirect } from "next/navigation";

/** @deprecated Use `/whoweare` */
export default function AboutRedirect() {
  redirect("/whoweare");
}
