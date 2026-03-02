const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 animate-fadeIn">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-8">Privacy Policy</h1>
        <div className="bg-white p-8 md:p-12 asym-card shadow-lg space-y-6 text-gray-700 leading-relaxed">
          <p className="text-sm text-gray-500">Last updated: March 1, 2026</p>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#4169E1]">1. Information We Collect</h2>
            <p className="mb-3">We collect information you provide directly to us, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name, email address, phone number, and shipping address</li>
              <li>Payment information (processed securely through our payment providers)</li>
              <li>Order history and preferences</li>
              <li>Communications with our customer service team</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#4169E1]">2. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process and fulfill your orders</li>
              <li>Send order confirmations and shipping updates</li>
              <li>Respond to your questions and provide customer support</li>
              <li>Send promotional emails (you can opt-out anytime)</li>
              <li>Improve our products and services</li>
              <li>Prevent fraud and enhance security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#4169E1]">3. Information Sharing</h2>
            <p className="mb-3">We do not sell your personal information. We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Service providers who help us operate our business (shipping, payment processing)</li>
              <li>Law enforcement when required by law</li>
              <li>Business partners with your consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#4169E1]">4. Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#4169E1]">5. Cookies</h2>
            <p>We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookies through your browser settings.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#4169E1]">6. Your Rights</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access and update your personal information</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Object to certain data processing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#4169E1]">7. Children's Privacy</h2>
            <p>Our services are not directed to children under 13. We do not knowingly collect information from children under 13.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#4169E1]">8. Changes to This Policy</h2>
            <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-[#4169E1]">9. Contact Us</h2>
            <p>If you have questions about this privacy policy, please contact us at:</p>
            <p className="mt-2">Email: privacy@gladnesshairline.com</p>
            <p>Phone: +1 (234) 567-8900</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
