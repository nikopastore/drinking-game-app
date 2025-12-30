import { Metadata } from "next";
import { LiquorCabinetClient } from "./LiquorCabinetClient";

export const metadata: Metadata = {
  title: "Liquor Cabinet - SipWiki",
  description: "Track what's in your liquor cabinet and discover cocktails you can make with your ingredients.",
};

export default function LiquorCabinetPage() {
  return <LiquorCabinetClient />;
}
