import { WithContext, Article, FAQPage, Question } from "schema-dts";

export interface ArticleSchemaOptions {
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
  author?: {
    name: string;
    url?: string;
  };
  publishDate: string;
  modifiedDate?: string;
  keywords?: string[];
}

/**
 * Generate Article schema for guide/blog pages
 * Optimized for E-E-A-T signals and AI citations
 */
export function generateArticleSchema(
  options: ArticleSchemaOptions
): WithContext<Article> {
  const {
    title,
    description,
    url,
    imageUrl,
    author,
    publishDate,
    modifiedDate,
    keywords,
  } = options;

  const schema: WithContext<Article> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: imageUrl || "https://sipwiki.app/og-image.png",
    url: url,
    datePublished: publishDate,
    dateModified: modifiedDate || publishDate,
    author: {
      "@type": "Organization",
      name: author?.name || "SipWiki Editorial Team",
      url: author?.url || "https://sipwiki.app/about",
    },
    publisher: {
      "@type": "Organization",
      name: "SipWiki",
      url: "https://sipwiki.app",
      logo: {
        "@type": "ImageObject",
        url: "https://sipwiki.app/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  // Add keywords if provided
  if (keywords && keywords.length > 0) {
    schema.keywords = keywords.join(", ");
  }

  return schema;
}

interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSchemaOptions {
  faqs: FAQItem[];
  url: string;
}

/**
 * Generate FAQPage schema for pages with Q&A sections
 * Great for People Also Ask optimization
 */
export function generateFAQSchema(
  options: FAQSchemaOptions
): WithContext<FAQPage> {
  const { faqs, url } = options;

  const schema: WithContext<FAQPage> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question" as const,
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: faq.answer,
      },
    })),
  };

  return schema;
}

/**
 * Generate BreadcrumbList schema for navigation
 * Helps Google understand site structure
 */
export function generateBreadcrumbSchema(
  breadcrumbs: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

/**
 * Generate WebPage schema with speakable content for voice search
 * Optimized for Google Assistant and voice assistants
 */
export function generateWebPageSchema(options: {
  url: string;
  name: string;
  description: string;
  speakableSelector?: string[];
}) {
  const { url, name, description, speakableSelector } = options;

  const schema: any = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: url,
    name: name,
    description: description,
  };

  // Add speakable content for voice search
  if (speakableSelector && speakableSelector.length > 0) {
    schema.speakable = {
      "@type": "SpeakableSpecification",
      cssSelector: speakableSelector,
    };
  }

  return schema;
}
