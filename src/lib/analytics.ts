export const ANALYTICS_EVENTS = ["play_started", "affiliate_click", "email_submit"] as const;

export type AnalyticsEventName = (typeof ANALYTICS_EVENTS)[number];

/** Fire-and-forget. No email, name, or user id. */
export function trackEvent(name: AnalyticsEventName, slug?: string): void {
  if (typeof window === "undefined") return;

  const body = JSON.stringify({
    name,
    slug,
    path: window.location.pathname,
  });

  void fetch("/api/events", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => {
    // Analytics must never block the night.
  });
}
