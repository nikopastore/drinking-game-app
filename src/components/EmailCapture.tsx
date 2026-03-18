"use client";

import { useState } from "react";
import { Mail, Gift, CheckCircle2 } from "lucide-react";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/client";

interface EmailCaptureProps {
  source: string;
}

export function EmailCapture({ source }: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setMessage("");

    if (!email.trim()) {
      setStatus("error");
      setMessage("Please enter a valid email.");
      return;
    }

    if (!isSupabaseConfigured()) {
      setStatus("error");
      setMessage("Email signups are temporarily unavailable.");
      return;
    }

    setStatus("loading");

    const supabase = createClient();
    const { error } = await supabase.from("email_subscribers").insert({
      email: email.trim().toLowerCase(),
      source,
      lead_magnet: "party-planning-checklist",
      page_path: typeof window !== "undefined" ? window.location.pathname : null,
    });

    if (error) {
      if (error.code === "23505") {
        setStatus("success");
        setMessage("You're already on the list. We'll send the checklist soon!");
        return;
      }
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
      return;
    }

    setStatus("success");
    setMessage("Success! Check your inbox for the checklist PDF.");
    setEmail("");
  };

  return (
    <div className="my-10 rounded-2xl border border-neon-pink/30 bg-gradient-to-r from-neon-pink/10 via-dark-800 to-neon-purple/10 p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-2 text-neon-pink">
            <Gift className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Free Download</span>
          </div>
          <h3 className="mt-2 text-xl font-bold text-white">
            Free Party Planning Checklist PDF
          </h3>
          <p className="mt-2 text-gray-300">
            Get the complete shopping list, prep timeline, and hosting tips in one printable checklist.
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
            {status === "loading" ? "Sending..." : "Send Me the PDF"}
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
