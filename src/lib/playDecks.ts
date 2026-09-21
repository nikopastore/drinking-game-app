export interface PlayCard {
  id: string;
  title: string;
  rule: string;
  kicker?: string;
}

export type PassThePhoneSlug = "kings-cup" | "never-have-i-ever" | "most-likely-to";

const KINGS_RANKS: Array<{ rank: string; title: string; rule: string }> = [
  { rank: "A", title: "Waterfall", rule: "Everyone drinks in a chain. Nobody stops until the person before them stops." },
  { rank: "2", title: "You", rule: "Point at someone. They drink." },
  { rank: "3", title: "Me", rule: "You drink." },
  { rank: "4", title: "Floor", rule: "Last person to touch the floor drinks." },
  { rank: "5", title: "Guys", rule: "Guys drink." },
  { rank: "6", title: "Chicks", rule: "Girls drink." },
  { rank: "7", title: "Heaven", rule: "Last person to raise a hand drinks." },
  { rank: "8", title: "Mate", rule: "Pick a drinking buddy for the rest of the game." },
  { rank: "9", title: "Rhyme", rule: "Say a word. Go around rhyming until someone fails. They drink." },
  { rank: "10", title: "Categories", rule: "Name a category. Go around until someone fails. They drink." },
  { rank: "J", title: "Never Have I Ever", rule: "Quick round. First person to lose all five fingers drinks." },
  { rank: "Q", title: "Questions", rule: "Ask someone a question. They ask someone else. First to fail drinks." },
  { rank: "K", title: "King", rule: "Pour a little into the King's Cup and make a rule. The fourth King drinks the cup." },
];

const SUITS = ["spades", "hearts", "diamonds", "clubs"];

const NEVER_HAVE_I_EVER_PROMPTS: Array<[string, string]> = [
  ["gone skinny dipping", "sent a text to the wrong person"],
  ["cried during a kids' movie", "pretended to know a song"],
  ["fallen asleep at a party", "re-gifted a present"],
  ["stalked an ex's new partner", "lied about my age"],
  ["danced on a table", "eaten food off the floor"],
  ["ghosted someone", "been kicked out of a bar or venue"],
  ["forgotten someone's name mid-conversation", "used a fake name"],
  ["sung karaoke sober", "tripped in public and played it off"],
  ["gone a full day without my phone", "replied 'on my way' while still at home"],
  ["had a crush on a friend's sibling", "laughed at the wrong moment"],
  ["missed a flight or a bus", "worn the same outfit two days in a row"],
  ["blamed a fart on someone else", "practiced a conversation in the mirror"],
];

export const NEVER_HAVE_I_EVER: PlayCard[] = NEVER_HAVE_I_EVER_PROMPTS.flatMap(
  ([first, second], index) =>
    [first, second].map((prompt, side) => ({
      id: `nhie-${index}-${side}`,
      title: `Never have I ever ${prompt}.`,
      rule: "Anyone who has done it drinks. If nobody drinks, the reader drinks.",
      kicker: "Pass the phone",
    }))
);

export const MOST_LIKELY_TO: PlayCard[] = [
  "become famous and hate it",
  "forget a friend's birthday",
  "survive on a desert island",
  "text an ex at midnight",
  "cry at a commercial",
  "win the lottery and lose the ticket",
  "start a fight over board-game rules",
  "be late to their own party",
  "adopt the most pets",
  "go viral for something embarrassing",
  "move to another country on a whim",
  "fall asleep first tonight",
  "become the group parent",
  "get lost in their own city",
  "host the next party",
].map((prompt, index) => ({
  id: `mlt-${index}`,
  title: `Most likely to ${prompt}`,
  rule: "Count 1, 2, 3 and point together. Most fingers drinks. Ties drink too.",
  kicker: "Point on three",
}));

export function isPassThePhoneSlug(slug: string): slug is PassThePhoneSlug {
  return slug === "kings-cup" || slug === "never-have-i-ever" || slug === "most-likely-to";
}

export function shuffleCards<T>(cards: T[], random: () => number = Math.random): T[] {
  const next = [...cards];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

export function buildKingsDeck(random: () => number = Math.random): PlayCard[] {
  const deck = KINGS_RANKS.flatMap((card) =>
    SUITS.map((suit) => ({
      id: `${card.rank}-${suit}`,
      title: card.rank,
      rule: card.rule,
      kicker: card.title,
    }))
  );
  return shuffleCards(deck, random);
}

export function buildPromptDeck(slug: PassThePhoneSlug, random: () => number = Math.random): PlayCard[] {
  if (slug === "kings-cup") return buildKingsDeck(random);
  const source = slug === "never-have-i-ever" ? NEVER_HAVE_I_EVER : MOST_LIKELY_TO;
  return shuffleCards(source, random);
}
