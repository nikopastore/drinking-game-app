import { getAffiliateLink } from "@/config/monetizationConfig";
import { withAssociateTag } from "@/lib/affiliateUrl";

export interface SupplyLink {
  label: string;
  url: string;
  detail: string;
}

export function partySupplyLinks(quantities: {
  cups: number;
  beerCases: number;
  ice: number;
}): SupplyLink[] {
  const cups = getAffiliateLink("cups");
  const cards = getAffiliateLink("cards");

  const links: SupplyLink[] = [];
  if (cups) {
    links.push({
      label: cups.label,
      url: withAssociateTag(cups.url),
      detail: `${quantities.cups} cups`,
    });
  }
  if (cards) {
    links.push({
      label: cards.label,
      url: withAssociateTag(cards.url),
      detail: "One deck",
    });
  }
  links.push({
    label: "Party ice",
    url: withAssociateTag("https://www.amazon.com/s?k=party+ice"),
    detail: `${quantities.ice} lb`,
  });
  return links;
}

export function partyPlanShareText(input: {
  guests: number;
  beerCases: number;
  liquorBottles: number;
  cups: number;
  ice: number;
  games: string[];
  supplies: SupplyLink[];
}): string {
  const games = input.games.length > 0 ? input.games.join(", ") : "whatever the group picks";
  const supplies = input.supplies.map((item) => `${item.detail}: ${item.url}`).join("\n");
  return [
    `SipWiki party plan for ${input.guests} people`,
    `${input.beerCases} cases of beer`,
    `${input.liquorBottles} bottles of liquor`,
    `${input.cups} cups`,
    `${input.ice} lb of ice`,
    `Games: ${games}`,
    supplies,
  ].join("\n");
}
