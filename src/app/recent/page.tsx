import Link from "next/link";
import { Header } from "@/components/Header";
import { MobileNav } from "@/components/MobileNav";
import { Button, Card, CardContent } from "@/components/ui";

export default function RecentPage() {
  return (
    <div className="min-h-screen bg-dark-900">
      <Header />
      <main className="mx-auto max-w-2xl px-4 py-12 pb-28">
        <h1 className="text-3xl font-bold text-white">Recent games</h1>
        <Card className="mt-6">
          <CardContent className="p-6">
            <p className="text-gray-400">Your recent games will appear here as you play.</p>
            <Link href="/games" className="mt-5 inline-block"><Button>Browse games</Button></Link>
          </CardContent>
        </Card>
      </main>
      <MobileNav />
    </div>
  );
}
