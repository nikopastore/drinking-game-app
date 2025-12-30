"use client";

import { AlertTriangle, Phone, Heart } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface AlcoholDisclaimerProps {
  variant?: "full" | "compact" | "footer";
  className?: string;
}

export function AlcoholDisclaimer({
  variant = "full",
  className
}: AlcoholDisclaimerProps) {
  if (variant === "footer") {
    return (
      <div className={cn("text-center py-4 border-t border-dark-600", className)}>
        <p className="text-gray-500 text-xs">
          <strong>21+</strong> | Drink Responsibly | Never Drink and Drive
        </p>
        <p className="text-gray-600 text-xs mt-1">
          If you need help, call SAMHSA: 1-800-662-4357
        </p>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className={cn(
        "p-3 bg-yellow-900/20 rounded-lg border border-yellow-600/30",
        className
      )}>
        <div className="flex items-start gap-2">
          <AlertTriangle className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5" />
          <p className="text-yellow-300 text-xs">
            <strong>Drink Responsibly.</strong> This content is for adults of legal drinking age only.
            Never drink and drive. If you or someone you know has a problem with alcohol,
            call SAMHSA at 1-800-662-4357.
          </p>
        </div>
      </div>
    );
  }

  // Full variant
  return (
    <div className={cn(
      "bg-dark-800 border border-dark-600 rounded-xl p-6",
      className
    )}>
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-yellow-900/30 rounded-lg">
          <AlertTriangle className="h-6 w-6 text-yellow-500" />
        </div>
        <h3 className="text-lg font-bold text-white">Drink Responsibly</h3>
      </div>

      <div className="space-y-4">
        <p className="text-gray-300">
          SipWiki provides drinking game information for entertainment purposes only.
          Please enjoy alcohol responsibly and within legal limits.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="flex items-start gap-2">
            <Heart className="h-4 w-4 text-neon-pink flex-shrink-0 mt-1" />
            <div>
              <p className="text-white text-sm font-medium">Know Your Limits</p>
              <p className="text-gray-400 text-xs">Stop drinking before you feel intoxicated</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Heart className="h-4 w-4 text-neon-pink flex-shrink-0 mt-1" />
            <div>
              <p className="text-white text-sm font-medium">Never Drink & Drive</p>
              <p className="text-gray-400 text-xs">Always arrange safe transportation</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Heart className="h-4 w-4 text-neon-pink flex-shrink-0 mt-1" />
            <div>
              <p className="text-white text-sm font-medium">Stay Hydrated</p>
              <p className="text-gray-400 text-xs">Drink water between alcoholic beverages</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Heart className="h-4 w-4 text-neon-pink flex-shrink-0 mt-1" />
            <div>
              <p className="text-white text-sm font-medium">Look Out for Friends</p>
              <p className="text-gray-400 text-xs">Never pressure anyone to drink</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 p-4 bg-dark-700 rounded-lg">
          <Phone className="h-5 w-5 text-neon-blue flex-shrink-0" />
          <div>
            <p className="text-white text-sm font-medium">Need Help?</p>
            <p className="text-gray-300 text-sm">
              SAMHSA National Helpline:{" "}
              <a href="tel:1-800-662-4357" className="text-neon-pink hover:underline font-bold">
                1-800-662-4357
              </a>
            </p>
            <p className="text-gray-400 text-xs">Free, confidential, 24/7 support</p>
          </div>
        </div>

        <p className="text-gray-500 text-xs">
          By using SipWiki, you confirm you are of legal drinking age and agree to our{" "}
          <Link href="/terms" className="text-neon-pink hover:underline">
            Terms of Service
          </Link>
          . We are not responsible for any actions taken while using this app.
        </p>
      </div>
    </div>
  );
}
