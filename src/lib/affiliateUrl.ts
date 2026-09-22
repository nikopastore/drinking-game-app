const ASSOCIATE_TAG = "sipwiki-20";

/** Add the SipWiki Amazon tag when the URL is Amazon and does not already have one. */
export function withAssociateTag(url: string): string {
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return url;
  }

  const host = parsed.hostname.replace(/^www\./, "");
  const isAmazon = host === "amazon.com" || host.endsWith(".amazon.com") || host === "amzn.to" || host === "a.co";
  if (!isAmazon) return url;
  if (host === "amzn.to" || host === "a.co") return url;
  if (parsed.searchParams.get("tag")) return url;

  parsed.searchParams.set("tag", ASSOCIATE_TAG);
  return parsed.toString();
}
