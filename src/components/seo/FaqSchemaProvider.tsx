"use client";

import { createContext, useContext, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { generateFAQSchema } from "@/lib/schema";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSchemaContextValue {
  registerFaq: (item: FaqItem) => void;
}

const FaqSchemaContext = createContext<FaqSchemaContextValue | null>(null);

export function useFaqSchema(): FaqSchemaContextValue | null {
  return useContext(FaqSchemaContext);
}

export function FaqSchemaProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [faqs, setFaqs] = useState<FaqItem[]>([]);
  const seen = useRef(new Set<string>());

  const registerFaq = (item: FaqItem) => {
    const key = `${item.question}::${item.answer}`;
    if (seen.current.has(key)) return;
    seen.current.add(key);
    setFaqs((prev) => [...prev, item]);
  };

  const faqJsonLd = useMemo(() => {
    if (!faqs.length) return null;
    return generateFAQSchema({
      faqs,
      url: `https://sipwiki.app${pathname}`,
    });
  }, [faqs, pathname]);

  return (
    <FaqSchemaContext.Provider value={{ registerFaq }}>
      {children}
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
    </FaqSchemaContext.Provider>
  );
}
