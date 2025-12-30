"use client";

import { Header } from "@/components/Header";
import { Sidebar, useSidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";
import { Card, CardContent } from "@/components/ui";
import Link from "next/link";

export default function TermsPage() {
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
        <h1 className="text-3xl font-bold text-white mb-6">Terms of Service</h1>

        <Card className="mb-6">
          <CardContent className="p-6 prose prose-invert max-w-none">
            <p className="text-gray-300 mb-4">
              <strong>Last updated:</strong> December 2025
            </p>

            <p className="text-gray-300 mb-4">
              Welcome to SipWiki. By accessing or using our website and mobile applications
              (collectively, the &quot;Service&quot;), you agree to be bound by these Terms of Service
              (&quot;Terms&quot;). Please read them carefully.
            </p>

            <h2 className="text-xl font-bold text-white mt-6 mb-3">1. Age Requirement</h2>
            <p className="text-gray-300 mb-4">
              <strong className="text-neon-pink">You must be of legal drinking age in your jurisdiction to use SipWiki.</strong>{" "}
              In the United States, this means you must be at least 21 years old. In most other
              countries, the legal drinking age is 18 or 19. By using our Service, you confirm that
              you meet the legal drinking age requirement in your location.
            </p>
            <p className="text-gray-300 mb-4">
              We do not knowingly provide services to individuals under the legal drinking age.
              If we discover that a user is underage, we will terminate their access immediately.
            </p>

            <h2 className="text-xl font-bold text-white mt-6 mb-3">2. Responsible Drinking</h2>
            <p className="text-gray-300 mb-4">
              SipWiki provides information about drinking games for entertainment purposes only.
              We strongly encourage responsible alcohol consumption:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li><strong>Know your limits:</strong> Stop drinking before you feel intoxicated.</li>
              <li><strong>Never drink and drive:</strong> Always arrange safe transportation.</li>
              <li><strong>Stay hydrated:</strong> Drink water between alcoholic beverages.</li>
              <li><strong>Eat before and during:</strong> Food helps slow alcohol absorption.</li>
              <li><strong>Look out for friends:</strong> Never pressure anyone to drink.</li>
              <li><strong>Seek help if needed:</strong> If you or someone you know has a drinking problem,
                contact SAMHSA at 1-800-662-4357.</li>
            </ul>

            <h2 className="text-xl font-bold text-white mt-6 mb-3">3. Disclaimer of Liability</h2>
            <p className="text-gray-300 mb-4">
              <strong>IMPORTANT:</strong> SipWiki is not responsible for any injuries, damages,
              legal issues, or negative consequences that may result from playing drinking games
              or consuming alcohol. This includes but is not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Alcohol poisoning or other health issues</li>
              <li>Accidents or injuries during or after drinking</li>
              <li>Property damage</li>
              <li>Legal consequences from underage drinking or public intoxication</li>
              <li>Relationship or social consequences</li>
            </ul>
            <p className="text-gray-300 mb-4">
              By using our Service, you acknowledge that you participate in any drinking games
              at your own risk and assume full responsibility for your actions.
            </p>

            <h2 className="text-xl font-bold text-white mt-6 mb-3">4. User-Generated Content</h2>
            <p className="text-gray-300 mb-4">
              Users may submit drinking games, comments, and other content to SipWiki. By submitting
              content, you:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Grant us a non-exclusive, royalty-free license to use, modify, and display your content</li>
              <li>Confirm that your content does not violate any laws or third-party rights</li>
              <li>Agree not to submit content that is harmful, illegal, or promotes dangerous behavior</li>
            </ul>
            <p className="text-gray-300 mb-4">
              We reserve the right to remove any content that violates these Terms or that we deem
              inappropriate at our sole discretion.
            </p>

            <h2 className="text-xl font-bold text-white mt-6 mb-3">5. Prohibited Activities</h2>
            <p className="text-gray-300 mb-4">
              When using SipWiki, you agree NOT to:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>Use the Service if you are under the legal drinking age</li>
              <li>Encourage underage drinking or provide the app to minors</li>
              <li>Submit false, misleading, or harmful content</li>
              <li>Attempt to hack, disrupt, or damage our Service</li>
              <li>Use the Service for any illegal purpose</li>
              <li>Scrape or collect user data without permission</li>
            </ul>

            <h2 className="text-xl font-bold text-white mt-6 mb-3">6. Intellectual Property</h2>
            <p className="text-gray-300 mb-4">
              The SipWiki name, logo, and all original content are owned by us and protected by
              intellectual property laws. You may not use our branding or content without written
              permission.
            </p>
            <p className="text-gray-300 mb-4">
              Many drinking games featured on SipWiki are traditional games in the public domain.
              We do not claim ownership of these games themselves, only our unique descriptions
              and presentations.
            </p>

            <h2 className="text-xl font-bold text-white mt-6 mb-3">7. Third-Party Links & Services</h2>
            <p className="text-gray-300 mb-4">
              SipWiki may contain links to third-party websites or services (such as Amazon for
              game supplies). We are not responsible for the content, privacy practices, or
              availability of these external sites. Affiliate links may earn us a commission
              at no extra cost to you.
            </p>

            <h2 className="text-xl font-bold text-white mt-6 mb-3">8. AI-Powered Features</h2>
            <p className="text-gray-300 mb-4">
              SipWiki uses AI (powered by OpenAI) to provide game recommendations and live referee
              features. While we strive for accuracy, AI-generated content may occasionally contain
              errors. Always use your judgment and refer to official game rules when in doubt.
            </p>

            <h2 className="text-xl font-bold text-white mt-6 mb-3">9. Service Availability</h2>
            <p className="text-gray-300 mb-4">
              We strive to keep SipWiki available 24/7 but cannot guarantee uninterrupted service.
              We may modify, suspend, or discontinue any part of the Service at any time without
              notice.
            </p>

            <h2 className="text-xl font-bold text-white mt-6 mb-3">10. Limitation of Liability</h2>
            <p className="text-gray-300 mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, SIPWIKI AND ITS OPERATORS SHALL NOT BE
              LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
              INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR GOODWILL, ARISING FROM YOUR
              USE OF THE SERVICE.
            </p>

            <h2 className="text-xl font-bold text-white mt-6 mb-3">11. Indemnification</h2>
            <p className="text-gray-300 mb-4">
              You agree to indemnify and hold harmless SipWiki, its operators, and affiliates from
              any claims, damages, or expenses arising from your use of the Service or violation
              of these Terms.
            </p>

            <h2 className="text-xl font-bold text-white mt-6 mb-3">12. Governing Law</h2>
            <p className="text-gray-300 mb-4">
              These Terms are governed by the laws of the United States. Any disputes shall be
              resolved in the courts of the State of Delaware.
            </p>

            <h2 className="text-xl font-bold text-white mt-6 mb-3">13. Changes to Terms</h2>
            <p className="text-gray-300 mb-4">
              We may update these Terms from time to time. Continued use of the Service after
              changes constitutes acceptance of the new Terms. We will notify users of significant
              changes via email or in-app notification.
            </p>

            <h2 className="text-xl font-bold text-white mt-6 mb-3">14. Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have questions about these Terms, please contact us at:{" "}
              <a href="mailto:support@sipwiki.com" className="text-neon-pink hover:underline">
                support@sipwiki.com
              </a>
            </p>

            <div className="mt-8 p-4 bg-dark-700 rounded-lg border border-dark-600">
              <p className="text-gray-300 text-sm">
                By using SipWiki, you acknowledge that you have read, understood, and agree to
                be bound by these Terms of Service and our{" "}
                <Link href="/privacy" className="text-neon-pink hover:underline">
                  Privacy Policy
                </Link>.
              </p>
            </div>
          </CardContent>
        </Card>
      </main>

      <MobileNav />
    </div>
  );
}
