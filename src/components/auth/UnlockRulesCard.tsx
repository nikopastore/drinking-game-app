"use client";

import { Card, CardContent } from "@/components/ui";
import { useAuth } from "@/lib/auth";
import { Lock } from "lucide-react";
import { useState } from "react";

interface UnlockRulesCardProps {
  gameName: string;
}

export function UnlockRulesCard({ gameName }: UnlockRulesCardProps) {
  const { signInWithGoogle, signInWithApple } = useAuth();
  const [isLoading, setIsLoading] = useState<"google" | "apple" | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGoogleSignIn = async () => {
    setIsLoading("google");
    setError(null);
    try {
      await signInWithGoogle();
      setTimeout(() => {
        setIsLoading(null);
        setError("Sign in failed. Please try again.");
      }, 5000);
    } catch (err) {
      console.error("Google sign in error:", err);
      setIsLoading(null);
      setError(err instanceof Error ? err.message : "Failed to sign in with Google");
    }
  };

  const handleAppleSignIn = async () => {
    setIsLoading("apple");
    setError(null);
    try {
      await signInWithApple();
      setTimeout(() => {
        setIsLoading(null);
        setError("Sign in failed. Please try again.");
      }, 5000);
    } catch (err) {
      console.error("Apple sign in error:", err);
      setIsLoading(null);
      setError(err instanceof Error ? err.message : "Failed to sign in with Apple");
    }
  };

  return (
    <Card className="border-neon-pink/30 bg-gradient-to-br from-dark-800 to-dark-900">
      <CardContent className="p-8">
        <div className="flex flex-col items-center text-center">
          {/* Lock Icon */}
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-pink/20 to-neon-purple/20 flex items-center justify-center mb-4 border border-neon-pink/30">
            <Lock className="h-8 w-8 text-neon-pink" />
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-2">
            Unlock {gameName} Rules
          </h3>

          {/* Subtitle */}
          <p className="text-gray-400 text-sm mb-6 max-w-sm">
            Sign in for free to access complete rules, tips, and join the community discussion.
          </p>

          {/* Auth Buttons */}
          <div className="w-full max-w-xs space-y-3">
            {/* Google Button */}
            <button
              onClick={handleGoogleSignIn}
              disabled={isLoading !== null}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white text-gray-800 font-medium rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading === "google" ? (
                <LoadingSpinner />
              ) : (
                <GoogleIcon />
              )}
              Continue with Google
            </button>

            {/* Apple Button */}
            <button
              onClick={handleAppleSignIn}
              disabled={isLoading !== null}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-black text-white font-medium rounded-lg border border-gray-700 hover:bg-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading === "apple" ? (
                <LoadingSpinner />
              ) : (
                <AppleIcon />
              )}
              Continue with Apple
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="w-full max-w-xs mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          {/* Benefits */}
          <div className="mt-6 text-left w-full max-w-xs">
            <p className="text-xs text-gray-500 mb-2">What you get:</p>
            <ul className="text-xs text-gray-400 space-y-1">
              <li className="flex items-center gap-2">
                <span className="text-neon-green">✓</span> Complete game rules & setup
              </li>
              <li className="flex items-center gap-2">
                <span className="text-neon-green">✓</span> Pro tips & variations
              </li>
              <li className="flex items-center gap-2">
                <span className="text-neon-green">✓</span> Community comments & house rules
              </li>
              <li className="flex items-center gap-2">
                <span className="text-neon-green">✓</span> AI referee in Live Mode
              </li>
            </ul>
          </div>

          {/* Terms */}
          <p className="text-gray-600 text-xs mt-6">
            Free forever. No credit card required.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

function GoogleIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}

function LoadingSpinner() {
  return (
    <svg
      className="animate-spin h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}
