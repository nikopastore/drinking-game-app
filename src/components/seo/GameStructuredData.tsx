import { Game } from "@/types";
import {
  combineSchemas,
  generateGameHowToSchema,
  generateGameSchema,
} from "@/lib/schema";

type GameStructuredDataProps = {
  game: Game;
  url: string;
  imageUrl?: string;
  datePublished?: string;
  dateModified?: string;
  faqJsonLd?: Record<string, unknown> | null;
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

  const graphSchema = combineSchemas([gameSchema, howToSchema]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }}
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
