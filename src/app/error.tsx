"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Home, RefreshCw, AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console (in production, send to error tracking service)
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Error Icon */}
        <div className="mb-6 flex justify-center">
          <div className="p-4 bg-red-500/10 rounded-full">
            <AlertTriangle className="h-16 w-16 text-red-500" />
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white mb-2">
            Something Went Wrong
          </h1>
          <p className="text-gray-400">
            Oops! The party hit a snag. Don&apos;t worry, it happens to the best of us.
          </p>
          {error.digest && (
            <p className="mt-2 text-xs text-gray-500">
              Error ID: {error.digest}
            </p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 mb-8">
          <button
            onClick={reset}
            className="flex items-center justify-center gap-3 w-full py-3 px-4 bg-gradient-to-r from-neon-pink to-neon-purple text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
          >
            <RefreshCw className="h-5 w-5" />
            Try Again
          </button>

          <Link
            href="/"
            className="flex items-center justify-center gap-3 w-full py-3 px-4 bg-dark-800 text-white font-medium rounded-xl border border-dark-600 hover:border-neon-pink/50 transition-colors"
          >
            <Home className="h-5 w-5 text-neon-pink" />
            Back to Home
          </Link>
        </div>

        {/* Help Text */}
        <div className="p-4 bg-dark-800/50 rounded-xl border border-dark-600">
          <p className="text-sm text-gray-400">
            If this keeps happening, try:
          </p>
          <ul className="mt-2 text-sm text-gray-500 space-y-1">
            <li>• Refreshing the page</li>
            <li>• Clearing your browser cache</li>
            <li>• Checking your internet connection</li>
          </ul>
        </div>

        {/* Contact */}
        <p className="mt-6 text-xs text-gray-500">
          Still having issues?{" "}
          <Link href="/about" className="text-neon-pink hover:underline">
            Let us know
          </Link>
        </p>
      </div>
    </div>
  );
}
