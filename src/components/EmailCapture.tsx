"use client";

import { useState } from "react";
import { Mail, Gift, CheckCircle2 } from "lucide-react";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/client";
import { trackEvent } from "@/lib/analytics";

interface EmailCaptureProps {
  source: string;
}

interface SubscribeResponse {
  ok?: boolean;
  already?: boolean;
  emailed?: boolean;
  error?: string;
}

export function EmailCapture({ source }: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const saveOnDevice = async (address: string) => {
    if (!isSupabaseConfigured()) return false;
    const supabase = createClient();
    const { error } = await supabase.from("email_subscribers").insert({
      email: address,
      source,
      lead_magnet: "party-tips",
      page_path: window.location.pathname,
    });
    if (!error) return "saved";
    if (error.code === "23505") return "already";
    return false;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setMessage("");

    const address = email.trim().toLowerCase();
    if (!address) {
      setStatus("error");
      setMessage("Please enter a valid email.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: address,
          source,
          pagePath: window.location.pathname,
        }),
      });

      if (response.ok) {
        const data = (await response.json()) as SubscribeResponse;
        setStatus("success");
        trackEvent("email_submit", source);
        setEmail("");
        if (data.already) {
          setMessage("You're already on the list.");
        } else if (data.emailed) {
          setMessage("Check your inbox for the party planner and supply links.");
        } else {
          setMessage("You're on the list. Open the party planner for tonight's shopping list.");
        }
        return;
      }

      if (response.status !== 404 && response.status !== 503) {
        setStatus("error");
        setMessage("Something went wrong. Please try again.");
        return;
      }
    } catch {
      // The static mobile build has no API route. Fall through to a direct insert.
    }

    const saved = await saveOnDevice(address);
    if (saved) {
      setStatus("success");
      if (saved === "saved") trackEvent("email_submit", source);
      setEmail("");
      setMessage(
        saved === "already"
          ? "You're already on the list."
          : "You're on the list. Open the party planner for tonight's shopping list."
      );
      return;
    }

    setStatus("error");
    setMessage("Email signups are temporarily unavailable.");
  };

  return (
    <div className="my-10 rounded-2xl border border-neon-pink/30 bg-gradient-to-r from-neon-pink/10 via-dark-800 to-neon-purple/10 p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-2 text-neon-pink">
            <Gift className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Party tips</span>
          </div>
          <h3 className="mt-2 text-xl font-bold text-white">
            Get the party list by email
          </h3>
          <p className="mt-2 text-gray-300">
            Join the list and we will send the party planner plus the supply links.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-3">
          <label className="sr-only" htmlFor="email-capture">
            Email address
          </label>
          <div className="flex items-center gap-2 rounded-full border border-dark-600 bg-dark-900 px-4 py-2">
            <Mail className="h-4 w-4 text-gray-500" />
            <input
              id="email-capture"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              className="w-full bg-transparent text-sm text-white placeholder:text-gray-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-neon-pink px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-neon-pink/80 disabled:cursor-not-allowed disabled:opacity-60"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Joining..." : "Join the list"}
          </button>
          <p className="text-xs text-gray-500">No spam. Unsubscribe anytime.</p>
        </form>
      </div>

      {message && (
        <div className="mt-4 flex items-center gap-2 text-sm text-gray-300">
          {status === "success" ? (
            <CheckCircle2 className="h-4 w-4 text-green-400" />
          ) : (
            <span className="h-4 w-4 rounded-full bg-red-500/70" />
          )}
          <span>{message}</span>
        </div>
      )}
    </div>
  );
}
