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
          ${isExpanded ? "md:ml-60" : "md:ml-[72px]"}
        `}
      >
        <h1 className="text-3xl font-bold text-white mb-6">Privacy Policy</h1>

        <Card className="mb-6">
          <CardContent className="p-6 prose prose-invert max-w-none">
            <p className="text-gray-300 mb-4">
              <strong>Last updated:</strong> September 2026
            </p>

            <h2 className="text-xl font-bold text-white mt-6 mb-3">1. Information We Collect</h2>
            <p className="text-gray-300 mb-4">
              SipWiki collects the information needed to provide accounts, favorites, contact matching, analytics, email signups, and AI-assisted features:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li><strong>Account Information:</strong> If you create an account, we collect your email address and display name.</li>
              <li><strong>Usage Data:</strong> We collect anonymous usage statistics to improve our service.</li>
              <li><strong>Favorites & History:</strong> Favorites can be stored in your Supabase account; local storage also keeps preferences and play-session state.</li>
              <li><strong>Contact Matching:</strong> With permission, the mobile app sends normalized email and phone values over an encrypted connection for a one-way keyed match. SipWiki stores only server-generated HMACs, not the contact values.</li>
              <li><strong>Email Signups:</strong> If you join the party-tips list, we store your email, signup source, and page path.</li>
            </ul>

            <h2 className="text-xl font-bold text-white mt-6 mb-3">2. ChatGPT Integration</h2>
            <p className="text-gray-300 mb-4">
              When you use SipWiki through ChatGPT&apos;s Apps SDK:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>We receive your search queries and filter preferences to return relevant games.</li>
              <li>We do not store your ChatGPT conversation history.</li>
              <li>Chat queries and game-finder requests are sent to the configured AI providers (OpenAI and Google Gemini) to generate responses.</li>
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
              <li><strong>Service Providers:</strong> Hosting, Supabase authentication/database, privacy-limited analytics, Resend email delivery, OpenAI and Google Gemini AI processing, and Amazon affiliate destinations.</li>
              <li><strong>Contact Permissions:</strong> Native contact data is read only after permission is granted. Normalized values are processed transiently by Supabase to generate keyed HMACs; raw address-book entries are not persisted.</li>
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
