import { getAffiliateLink } from "@/config/monetizationConfig";
import { withAssociateTag } from "@/lib/affiliateUrl";

const PLANNER_URL = "https://sipwiki.app/party-planner";

const SUPPLY_KEYS = [
  "cups",
  "cards",
  "ping pong balls",
  "ice",
  "dice",
  "shot glasses",
  "jenga blocks",
  "marker",
  "duct tape",
  "music speaker",
] as const;

export interface WelcomeSupply {
  label: string;
  url: string;
  price?: string;
}

export function welcomeSupplies(): WelcomeSupply[] {
  return SUPPLY_KEYS.flatMap((key) => {
    const item = getAffiliateLink(key);
    if (!item) return [];
    return [{ label: item.label, url: withAssociateTag(item.url), price: item.price }];
  });
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function welcomeEmailHtml(supplies: WelcomeSupply[] = welcomeSupplies()): string {
  const items = supplies
    .map((item) => {
      const price = item.price ? ` (${escapeHtml(item.price)})` : "";
      return `<li><a href="${escapeHtml(item.url)}">${escapeHtml(item.label)}</a>${price}</li>`;
    })
    .join("");

  return [
    "<p>Here is the SipWiki party planner and the supplies linked from the site.</p>",
    `<p><a href="${PLANNER_URL}">Open the party planner</a></p>`,
    "<p>Supply links:</p>",
    `<ul>${items}</ul>`,
    "<p>Prices are the ones we saw on Amazon and can change.</p>",
  ].join("");
}

export function welcomeEmailText(supplies: WelcomeSupply[] = welcomeSupplies()): string {
  const lines = supplies.map((item) => `${item.label}${item.price ? ` ${item.price}` : ""}: ${item.url}`);
  return [
    "SipWiki party list",
    `Party planner: ${PLANNER_URL}`,
    ...lines,
  ].join("\n");
}

/** Send the welcome note when Resend is configured. Returns false when it is not, or when sending fails. */
export async function sendWelcomeEmail(to: string): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !from) return false;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject: "Your SipWiki party list",
        html: welcomeEmailHtml(),
        text: welcomeEmailText(),
      }),
    });
    return response.ok;
  } catch {
    return false;
  }
}
