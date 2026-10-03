"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function LegacyGameRedirect({ slug }: { slug: string }) {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/games/${slug}`);
  }, [router, slug]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-dark-900 text-gray-300">
      Moving you to the current game page…
    </main>
  );
}
