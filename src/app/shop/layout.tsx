import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Party Essentials Shop",
  description: "Browse curated party essentials and game-night gear from SipWiki.",
  alternates: { canonical: "/shop" },
};

export default function ShopLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
