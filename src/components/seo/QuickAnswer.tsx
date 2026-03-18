"use client";

import { useEffect } from "react";
import { CheckCircle2, Info } from "lucide-react";
import { useFaqSchema } from "./FaqSchemaProvider";

interface QuickAnswerProps {
  question: string;
  answer: string;
  /**
   * Optional related facts/tips to display
   */
  tips?: string[];
  /**
   * Link to full detailed guide
   */
  learnMoreUrl?: string;
  /**
   * Icon color theme
   */
  variant?: "default" | "primary" | "success";
}

/**
 * QuickAnswer Component
 *
 * Optimized for:
 * - Google AI Overviews (SGE)
 * - Featured snippets
 * - LLM citations
 * - Voice search
 *
 * Key features:
 * - Concise 40-50 word answers
 * - Clear semantic HTML
 * - Speakable content
 * - High visual prominence
 *
 * Usage:
 * ```tsx
 * <QuickAnswer
 *   question="What are the rules for Kings Cup?"
 *   answer="Kings Cup is a classic card drinking game where players draw cards and follow specific rules. Place an empty cup in the center, fan cards around it, and take turns drawing. Each card (Ace-King) has a unique action like 'Waterfall', 'You', 'Categories', etc."
 *   tips={["4th King drinks the center cup", "Great for 3-8 players"]}
 *   learnMoreUrl="/guides/kings-cup-rules"
 * />
 * ```
 */
export function QuickAnswer({
  question,
  answer,
  tips,
  learnMoreUrl,
  variant = "default",
}: QuickAnswerProps) {
  const faqSchema = useFaqSchema();

  useEffect(() => {
    faqSchema?.registerFaq({ question, answer });
  }, [answer, faqSchema, question]);

  const variantStyles = {
    default: "bg-dark-800 border-dark-700",
    primary: "bg-gradient-to-br from-neon-pink/10 to-neon-blue/10 border-neon-pink/30",
    success: "bg-green-500/10 border-green-500/30",
  };

  return (
    <div
      className={`rounded-xl border p-6 ${variantStyles[variant]}`}
      // Speakable selector for voice search
      data-speakable="true"
      itemScope
      itemType="https://schema.org/Question"
    >
      {/* Question */}
      <div className="mb-4 flex items-start gap-3">
        <Info className="mt-1 h-5 w-5 flex-shrink-0 text-neon-blue" />
        <h2
          className="text-lg font-semibold text-white"
          itemProp="name"
        >
          {question}
        </h2>
      </div>

      {/* Answer - Optimized for AI citations */}
      <div
        itemScope
        itemProp="acceptedAnswer"
        itemType="https://schema.org/Answer"
      >
        <p
          className="text-base leading-relaxed text-gray-300"
          itemProp="text"
          // Speakable content for voice assistants
          data-speakable="true"
        >
          {answer}
        </p>
      </div>

      {/* Optional tips/facts */}
      {tips && tips.length > 0 && (
        <div className="mt-4 space-y-2">
          {tips.map((tip, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-400" />
              <p className="text-sm text-gray-400">{tip}</p>
            </div>
          ))}
        </div>
      )}

      {/* Learn more link */}
      {learnMoreUrl && (
        <div className="mt-4">
          <a
            href={learnMoreUrl}
            className="inline-flex items-center text-sm font-medium text-neon-blue hover:text-neon-pink transition-colors"
          >
            Read full guide →
          </a>
        </div>
      )}
    </div>
  );
}

/**
 * QuickAnswerList Component
 *
 * Display multiple related quick answers
 * Great for "People Also Ask" optimization
 */
interface QuickAnswerListProps {
  title?: string;
  answers: Array<{
    question: string;
    answer: string;
    tips?: string[];
  }>;
}

export function QuickAnswerList({ title, answers }: QuickAnswerListProps) {
  return (
    <div className="space-y-4">
      {title && (
        <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>
      )}
      <div className="space-y-4">
        {answers.map((qa, index) => (
          <QuickAnswer
            key={index}
            question={qa.question}
            answer={qa.answer}
            tips={qa.tips}
            variant="default"
          />
        ))}
      </div>
    </div>
  );
}
