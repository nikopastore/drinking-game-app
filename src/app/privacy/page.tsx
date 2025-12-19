"use client";

import { Header } from "@/components/Header";
import { Sidebar, useSidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";
import { Card, CardContent } from "@/components/ui";

export default function PrivacyPage() {
  const { isExpanded } = useSidebar();

  return (
    <div className="min-h-screen bg-dark-900">
      <Header />
      <Sidebar />

      <main
        className={`
          max-w-4xl mx-auto px-4 py-8 pb-24 md:pb-8
          transition-all duration-300 ease-in-out
          ${isExpanded ? "md:ml-56" : "md:ml-16"}
        `}
      >
        <h1 className="text-3xl font-bold text-white mb-6">Privacy Policy</h1>

        <Card className="mb-6">
          <CardContent className="p-6 prose prose-invert max-w-none">
            <p className="text-gray-300 mb-4">
              <strong>Last updated:</strong> December 2025
            </p>

            <h2 className="text-xl font-bold text-white mt-6 mb-3">1. Information We Collect</h2>
            <p className="text-gray-300 mb-4">
              SipWiki collects minimal information to provide our drinking game discovery service:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li><strong>Account Information:</strong> If you create an account, we collect your email address and display name.</li>
              <li><strong>Usage Data:</strong> We collect anonymous usage statistics to improve our service.</li>
              <li><strong>Favorites & History:</strong> Games you favorite or recently viewed are stored locally on your device.</li>
            </ul>

            <h2 className="text-xl font-bold text-white mt-6 mb-3">2. ChatGPT Integration</h2>
            <p className="text-gray-300 mb-4">
              When you use SipWiki through ChatGPT&apos;s Apps SDK:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>We receive your search queries and filter preferences to return relevant games.</li>
              <li>We do not store your ChatGPT conversation history.</li>
              <li>No personal information is shared with or collected from ChatGPT.</li>
            </ul>

            <h2 className="text-xl font-bold text-white mt-6 mb-3">3. How We Use Your Information</h2>
            <p className="text-gray-300 mb-4">
              We use collected information to:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Provide and improve our drinking game discovery service</li>
              <li>Personalize your experience with favorites and history</li>
              <li>Respond to support requests</li>
              <li>Send important service updates (if you opt in)</li>
            </ul>

            <h2 className="text-xl font-bold text-white mt-6 mb-3">4. Data Sharing</h2>
            <p className="text-gray-300 mb-4">
              We do not sell your personal information. We may share data with:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li><strong>Service Providers:</strong> Hosting, analytics, and authentication services</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            </ul>

            <h2 className="text-xl font-bold text-white mt-6 mb-3">5. Cookies & Local Storage</h2>
            <p className="text-gray-300 mb-4">
              We use cookies and local storage for:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Authentication and session management</li>
              <li>Storing your preferences and favorites</li>
              <li>Anonymous analytics</li>
            </ul>

            <h2 className="text-xl font-bold text-white mt-6 mb-3">6. Your Rights</h2>
            <p className="text-gray-300 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Access your personal data</li>
              <li>Request deletion of your account and data</li>
              <li>Opt out of marketing communications</li>
              <li>Export your data</li>
            </ul>

            <h2 className="text-xl font-bold text-white mt-6 mb-3">7. Age Restriction</h2>
            <p className="text-gray-300 mb-4">
              SipWiki is intended for users of legal drinking age in their jurisdiction.
              We do not knowingly collect information from minors.
            </p>

            <h2 className="text-xl font-bold text-white mt-6 mb-3">8. Contact Us</h2>
            <p className="text-gray-300 mb-4">
              For privacy-related questions or requests, contact us at:{" "}
              <a href="mailto:support@sipwiki.com" className="text-neon-pink hover:underline">
                support@sipwiki.com
              </a>
            </p>

            <h2 className="text-xl font-bold text-white mt-6 mb-3">9. Changes to This Policy</h2>
            <p className="text-gray-300 mb-4">
              We may update this privacy policy from time to time. We will notify you of
              significant changes by posting a notice on our website.
            </p>
          </CardContent>
        </Card>
      </main>

      <MobileNav />
    </div>
  );
}
