import { describe, expect, it } from "vitest";
import { sendWelcomeEmail, welcomeEmailHtml, welcomeEmailText, welcomeSupplies } from "./welcomeEmail";

describe("welcome email", () => {
  it("lists the party planner and tagged product links", () => {
    const supplies = welcomeSupplies();
    expect(supplies.length).toBeGreaterThan(5);
    const html = welcomeEmailHtml(supplies);
    const text = welcomeEmailText(supplies);
    expect(html).toContain("https://sipwiki.app/party-planner");
    expect(text).toContain("https://sipwiki.app/party-planner");
    for (const item of supplies) {
      expect(item.url).toContain("/dp/");
      expect(item.url).toContain("tag=sipwiki-20");
      expect(html).toContain(item.url);
    }
  });

  it("does not send when Resend is not configured", async () => {
    const previousKey = process.env.RESEND_API_KEY;
    const previousFrom = process.env.RESEND_FROM_EMAIL;
    delete process.env.RESEND_API_KEY;
    delete process.env.RESEND_FROM_EMAIL;
    await expect(sendWelcomeEmail("host@example.com")).resolves.toBe(false);
    if (previousKey === undefined) delete process.env.RESEND_API_KEY;
    else process.env.RESEND_API_KEY = previousKey;
    if (previousFrom === undefined) delete process.env.RESEND_FROM_EMAIL;
    else process.env.RESEND_FROM_EMAIL = previousFrom;
  });
});
