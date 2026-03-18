"use client";

import { useEffect } from "react";
import { useFaqSchema } from "./FaqSchemaProvider";

function normalizeText(value: string | null | undefined): string {
  return (value || "").replace(/\s+/g, " ").trim();
}

function collectAnswerText(nodes: Element[]): string {
  const parts: string[] = [];

  nodes.forEach((node) => {
    if (node.tagName === "P") {
      const text = normalizeText(node.textContent);
      if (text) parts.push(text);
    }

    if (node.tagName === "UL" || node.tagName === "OL") {
      const items = Array.from(node.querySelectorAll("li"))
        .map((li) => normalizeText(li.textContent))
        .filter(Boolean);
      if (items.length) parts.push(items.join(" "));
    }
  });

  return parts.join(" ");
}

export function AutoFaqExtractor() {
  const faqSchema = useFaqSchema();

  useEffect(() => {
    if (!faqSchema) return;

    const headings = Array.from(document.querySelectorAll("h2, h3"));
    const faqHeadings = headings.filter((heading) =>
      normalizeText(heading.textContent).toLowerCase().startsWith("faq")
    );

    faqHeadings.forEach((faqHeading) => {
      const faqLevel = parseInt(faqHeading.tagName.slice(1), 10);
      let current = faqHeading.nextElementSibling;

      while (current) {
        const tag = current.tagName;
        const level = tag.startsWith("H") ? parseInt(tag.slice(1), 10) : null;

        if (level && level <= faqLevel) {
          break;
        }

        if (tag === "H3" || tag === "H4") {
          const question = normalizeText(current.textContent);
          const answerNodes: Element[] = [];
          let answerCursor = current.nextElementSibling;

          while (answerCursor) {
            const answerTag = answerCursor.tagName;
            const answerLevel = answerTag.startsWith("H")
              ? parseInt(answerTag.slice(1), 10)
              : null;

            if (answerLevel && (answerTag === "H3" || answerTag === "H4" || answerLevel <= faqLevel)) {
              break;
            }

            answerNodes.push(answerCursor);
            answerCursor = answerCursor.nextElementSibling;
          }

          const answer = collectAnswerText(answerNodes);
          if (question && answer) {
            faqSchema.registerFaq({ question, answer });
          }

          current = answerCursor;
          continue;
        }

        current = current.nextElementSibling;
      }
    });
  }, [faqSchema]);

  return null;
}
