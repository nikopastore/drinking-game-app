import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drinking Game Spinner",
  description: "Spin the wheel to pick a drinking game for your group and party setup.",
  alternates: { canonical: "/spin" },
};

export default function SpinLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
