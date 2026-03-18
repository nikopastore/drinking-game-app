import { Metadata } from "next";
import { AutoFaqExtractor, FaqSchemaProvider } from "@/components/seo";

export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FaqSchemaProvider>
      {children}
      <AutoFaqExtractor />
    </FaqSchemaProvider>
  );
}
