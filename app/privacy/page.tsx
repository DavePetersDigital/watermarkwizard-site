export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="text-gray-700 mb-4">
        This Privacy Policy explains how we collect, use and protect information when you use
        Watermark Wizard ("the Software") and this website ("the Service"). By using the Software,
        you agree to the practices described in this policy.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. Images Are Processed Locally</h2>
      <p className="text-gray-700 mb-4">
        Watermark Wizard processes all images locally on your device. Your images are never uploaded, transmitted or stored on our servers or any third-party system.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. Information We Collect</h2>
      <p className="text-gray-700 mb-4">
        We collect only the information necessary to operate the Service and manage licenses. This may include:
      </p>
      <ul className="list-disc ml-6 text-gray-700 mb-4">
        <li>Your email address (for license access and purchase confirmations)</li>
        <li>License status (to verify trial or active subscriptions)</li>
        <li>Basic device information (to enforce device limits associated with your trial or paid subscription)</li>
      </ul>

      <p className="text-gray-700 mb-4">
        We do not collect personal files, images, or any content processed through the Software.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. Optional Analytics (Currently Disabled)</h2>
      <p className="text-gray-700 mb-4">
        The Software may support optional analytics in future updates, such as anonymized usage, error logs or crash reports. At present, all analytics features are disabled by default.
      </p>
      <p className="text-gray-700 mb-4">
        If enabled in the future, analytics will:
      </p>
      <ul className="list-disc ml-6 text-gray-700 mb-4">
        <li>Exclude images and media files</li>
        <li>Not collect personally identifiable information</li>
        <li>Be used solely to improve performance and stability</li>
      </ul>
      <p className="text-gray-700 mb-4">
        Any such changes will be disclosed in this Privacy Policy.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. Payment Information</h2>
      <p className="text-gray-700 mb-4">
        Payments, taxation, fraud prevention and currency conversion are handled by Paddle.com, which acts as our payment provider and merchant of record. We do not store or process payment card information.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">5. How We Use Your Information</h2>
      <p className="text-gray-700 mb-4">We use your information to:</p>
      <ul className="list-disc ml-6 text-gray-700 mb-4">
        <li>Provide access to the Software</li>
        <li>Verify active trials or subscriptions</li>
        <li>Deliver purchase confirmations or important notices</li>
        <li>Enforce applicable device limits</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">6. Data Security</h2>
      <p className="text-gray-700 mb-4">
        We use secure systems and industry best practices to protect your data. Your images remain on your device at all times.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">7. Legal Compliance</h2>
      <p className="text-gray-700 mb-4">
        We comply with applicable privacy regulations, including GDPR and CCPA. You may request access to or deletion of your stored account information by contacting us via the support details listed on this website.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">8. Third Parties</h2>
      <p className="text-gray-700 mb-4">
        We do not sell, rent or share your information with third parties except as required for secure payment processing and delivery of the Software.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">9. Changes to This Policy</h2>
      <p className="text-gray-700 mb-4">
        This Privacy Policy may be updated from time to time. Updates will be posted on this page with a revised effective date.
      </p>

      <p className="mt-8 text-gray-500 text-sm">Last updated: {new Date().getFullYear()}</p>
    </div>
  );
}