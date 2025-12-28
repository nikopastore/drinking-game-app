"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui";
import { Wine, AlertTriangle } from "lucide-react";
import Link from "next/link";

const AGE_VERIFIED_KEY = "sipwiki-age-verified";

export function AgeGate({ children }: { children: React.ReactNode }) {
  const [isVerified, setIsVerified] = useState<boolean | null>(null);
  const [showDeclined, setShowDeclined] = useState(false);

  useEffect(() => {
    // Check localStorage for previous verification
    const verified = localStorage.getItem(AGE_VERIFIED_KEY);
    setIsVerified(verified === "true");
  }, []);

  const handleVerify = () => {
    localStorage.setItem(AGE_VERIFIED_KEY, "true");
    setIsVerified(true);
  };

  const handleDecline = () => {
    setShowDeclined(true);
  };

  // Still loading
  if (isVerified === null) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center">
        <div className="animate-pulse">
          <Wine className="h-12 w-12 text-neon-pink" />
        </div>
      </div>
    );
  }

  // Already verified
  if (isVerified) {
    return <>{children}</>;
  }

  // Declined access
  if (showDeclined) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-dark-800 border border-dark-600 rounded-xl p-8 text-center">
          <div className="mb-6">
            <AlertTriangle className="h-16 w-16 text-yellow-500 mx-auto" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-4">
            Access Denied
          </h1>
          <p className="text-gray-400 mb-6">
            You must be of legal drinking age in your jurisdiction to access SipWiki.
            This app contains alcohol-related content intended for adults only.
          </p>
          <p className="text-gray-500 text-sm mb-6">
            If you believe you reached this page in error, please close and reopen the app.
          </p>
          <Button
            variant="outline"
            onClick={() => setShowDeclined(false)}
            className="w-full"
          >
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  // Age verification prompt
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-dark-800 border border-dark-600 rounded-xl p-8">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-neon-pink to-neon-blue rounded-2xl mb-4">
            <Wine className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white">
            Sip<span className="text-neon-pink">Wiki</span>
          </h1>
          <p className="text-gray-400 mt-2">Drinking Game Encyclopedia</p>
        </div>

        {/* Age Verification */}
        <div className="bg-dark-700 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold text-white text-center mb-4">
            Age Verification Required
          </h2>
          <p className="text-gray-300 text-center mb-4">
            This app contains alcohol-related content and is intended for adults of
            legal drinking age only.
          </p>
          <p className="text-gray-400 text-sm text-center">
            By entering, you confirm that you are of legal drinking age in your
            country or region (21+ in the USA, 18+ in most other countries).
          </p>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <Button
            variant="primary"
            size="lg"
            onClick={handleVerify}
            className="w-full"
          >
            I am of legal drinking age
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={handleDecline}
            className="w-full"
          >
            I am not of legal drinking age
          </Button>
        </div>

        {/* Legal Links */}
        <div className="mt-6 pt-6 border-t border-dark-600">
          <p className="text-gray-500 text-xs text-center">
            By using SipWiki, you agree to our{" "}
            <Link href="/terms" className="text-neon-pink hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-neon-pink hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        {/* Responsible Drinking */}
        <div className="mt-4 p-3 bg-yellow-900/20 rounded-lg border border-yellow-600/30">
          <p className="text-yellow-300 text-xs text-center">
            <strong>Drink Responsibly.</strong> Never drink and drive.
            If you or someone you know has a drinking problem, call SAMHSA at 1-800-662-4357.
          </p>
        </div>
      </div>
    </div>
  );
}

// Hook to manually check/reset age verification (useful for testing)
export function useAgeGate() {
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem(AGE_VERIFIED_KEY);
    setIsVerified(verified === "true");
  }, []);

  const resetVerification = () => {
    localStorage.removeItem(AGE_VERIFIED_KEY);
    setIsVerified(false);
    window.location.reload();
  };

  return { isVerified, resetVerification };
}
