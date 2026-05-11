import { Game } from "@/types";
import {
  combineSchemas,
  generateGameHowToSchema,
  generateGameSchema,
  generateWebPageSchema,
} from "@/lib/schema";

type GameStructuredDataProps = {
  game: Game;
  url: string;
  imageUrl?: string;
  datePublished?: string;
  dateModified?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  faqJsonLd?: any;
};

const defaultAuthor = {
  name: "SipWiki Editorial Team",
  url: "https://sipwiki.app/about",
  logoUrl: "https://sipwiki.app/icon-512.png",
  type: "Organization" as const,
};

export function GameStructuredData({
  game,
  url,
  imageUrl,
  datePublished,
  dateModified,
  faqJsonLd,
}: GameStructuredDataProps) {
  const gameSchema = generateGameSchema({
    game,
    url,
    imageUrl,
    author: defaultAuthor,
    datePublished,
    dateModified,
  });

  const howToSchema = generateGameHowToSchema({
    game,
    url,
    imageUrl,
    author: defaultAuthor,
    datePublished,
    dateModified,
  });

  // WebPage schema for SEO
  const webPageSchema = generateWebPageSchema({
    url,
    name: game.name,
    description: game.description,
  });

  const graphSchema = combineSchemas([gameSchema, howToSchema]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      {faqJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      ) : null}
    </>
  );
}
