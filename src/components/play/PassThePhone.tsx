"use client";

import { useMemo, useState } from "react";
import { Game } from "@/types";
import { Button } from "@/components/ui";
import { getAffiliateLink } from "@/config/monetizationConfig";
import { withAssociateTag } from "@/lib/affiliateUrl";
import { trackEvent } from "@/lib/analytics";
import { buildPromptDeck, type PassThePhoneSlug, type PlayCard } from "@/lib/playDecks";

interface PassThePhoneProps {
  game: Game;
  slug: PassThePhoneSlug;
}

export function PassThePhone({ game, slug }: PassThePhoneProps) {
  const [deck, setDeck] = useState<PlayCard[]>(() => buildPromptDeck(slug));
  const [index, setIndex] = useState(0);
  const card = deck[index];
  const remaining = Math.max(deck.length - index - 1, 0);

  const supplies = useMemo(() => {
    const seen = new Set<string>();
    return game.materials.flatMap((material) => {
      const link = getAffiliateLink(material);
      if (!link || seen.has(link.url)) return [];
      seen.add(link.url);
      return [{ label: link.label, url: withAssociateTag(link.url) }];
    });
  }, [game.materials]);

  function nextCard() {
    if (index < deck.length - 1) {
      setIndex((current) => current + 1);
      return;
    }
    setDeck(buildPromptDeck(slug));
    setIndex(0);
  }

  async function shareCard() {
    if (!card) return;
    const text = `${game.name}\n${card.title}\n${card.rule}\nPlay on SipWiki`;
    if (navigator.share) {
      try {
        await navigator.share({ title: game.name, text, url: window.location.href });
      } catch {
        // The player dismissed the share sheet.
      }
      return;
    }
    await navigator.clipboard.writeText(text);
  }

  if (!card) return null;

  return (
    <div className="mb-24">
      <p className="mb-3 text-center text-sm font-bold uppercase tracking-[0.2em] text-neon-pink">
        {card.kicker ?? "Pass the phone"}
      </p>
      <div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-dark-800 to-dark-900 px-6 py-10 text-center shadow-[0_24px_80px_rgba(0,0,0,.35)] sm:px-10 sm:py-16">
        <p className="text-5xl font-black tracking-tight text-white sm:text-7xl">{card.title}</p>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300 sm:text-2xl">{card.rule}</p>
        <p className="mt-8 text-sm text-gray-500">
          {remaining} {remaining === 1 ? "card" : "cards"} left in this pass
        </p>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <Button size="lg" onClick={nextCard}>
          {remaining === 0 ? "Shuffle again" : "Next card"}
        </Button>
        <Button size="lg" variant="outline" onClick={shareCard}>
          Share this card
        </Button>
      </div>
      {supplies.length > 0 && (
        <div className="mt-8">
          <p className="mb-3 text-sm font-bold text-white">Grab the supplies</p>
          <div className="flex flex-wrap gap-2">
            {supplies.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="sponsored nofollow noopener noreferrer"
                onClick={() => trackEvent("affiliate_click", game.slug)}
                className="rounded-full border border-white/12 px-4 py-2 text-sm font-semibold text-gray-200 hover:border-neon-pink/50 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
