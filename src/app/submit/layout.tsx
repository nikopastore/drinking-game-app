import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Submit a Drinking Game",
  description: "Sign in to submit a drinking game for review by the SipWiki community.",
  alternates: { canonical: "/submit" },
};

export default function SubmitLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
