"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body style={{
        backgroundColor: "#0a0a0f",
        color: "white",
        fontFamily: "system-ui, sans-serif",
        margin: 0,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
            Something went wrong!
          </h1>
          <p style={{ color: "#9ca3af", marginBottom: "2rem" }}>
            We encountered an unexpected error. Please try again.
          </p>
          <button
            onClick={reset}
            style={{
              background: "linear-gradient(to right, #ec4899, #a855f7)",
              color: "white",
              border: "none",
              padding: "0.75rem 2rem",
              borderRadius: "0.75rem",
              fontSize: "1rem",
              fontWeight: "600",
              cursor: "pointer"
            }}
          >
            Try Again
          </button>
          <div style={{ marginTop: "1rem" }}>
            <a
              href="/"
              style={{ color: "#ec4899", textDecoration: "none" }}
            >
              Return Home
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
