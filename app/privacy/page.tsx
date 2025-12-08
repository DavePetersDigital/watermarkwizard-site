export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="text-gray-700 mb-4">
        This Privacy Policy explains how we collect, use and protect information when you use
        Watermark Wizard (“the Software”) and this website (“the Service”). By using the Software,
        you agree to the practices described in this policy.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. Images Are Processed Locally</h2>
      <p className="text-gray-700 mb-4">
        Watermark Wizard processes all images locally on your device. Your images are
        <strong> never uploaded, transmitted or stored</strong> on our servers or any third-party system.
        This ensures complete privacy and control over your media.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. Information We Collect</h2>
      <p className="text-gray-700 mb-4">
        We collect only the information necessary to operate the Service and deliver purchased licenses.
        This may include:
      </p>
      <ul className="list-disc ml-6 text-gray-700 mb-4">
        <li>Your email address (for account access and purchase confirmations)</li>
        <li>License status (to verify active plans)</li>
        <li>Basic device information (to enforce the two-device limit)</li>
      </ul>

      <p className="text-gray-700 mb-4">
        We do <strong>not</strong> collect personal files, images, or any content processed through the Software.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. Optional Analytics (Currently Disabled)</h2>
      <p className="text-gray-700 mb-4">
        The Software may support optional analytics in future updates, such as anonymized usage,
        error logs or crash reports. At present, all analytics features are
        <strong> disabled by default</strong>.
      </p>
      <p className="text-gray-700 mb-4">
        If analytics are enabled in the future, they will:
      </p>
      <ul className="list-disc ml-6 text-gray-700 mb-4">
        <li>Exclude images and media files</li>
        <li>Never collect personal or identifying information</li>
        <li>Be used solely to improve performance and stability</li>
        <li>Be disclosed clearly in this Privacy Policy when activated</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. Payment Information</h2>
      <p className="text-gray-700 mb-4">
        Payments, taxation, fraud prevention and currency conversion are handled by our trusted payment
        processor. We do <strong>not</strong> store or process payment card information.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">5. How We Use Your Information</h2>
      <p className="text-gray-700 mb-4">We use your information to:</p>
      <ul className="list-disc ml-6 text-gray-700 mb-4">
        <li>Provide access to the Software</li>
        <li>Verify active licenses or subscriptions</li>
        <li>Deliver purchase confirmations or important notices</li>
        <li>Enforce the two-device license limit</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">6. Data Security</h2>
      <p className="text-gray-700 mb-4">
        We use secure systems and industry best practices to protect your data. Your images remain on
        your device at all times.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">7. Legal Compliance</h2>
      <p className="text-gray-700 mb-4">
        We comply with applicable privacy regulations, including GDPR and CCPA. You may request to
        access or delete your stored account information by contacting support.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">8. Third Parties</h2>
      <p className="text-gray-700 mb-4">
        We do not sell, rent or share your information with third parties except as necessary
        for secure payment processing and delivery of the Software.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">9. Changes to This Policy</h2>
      <p className="text-gray-700 mb-4">
        This Privacy Policy may be updated from time to time. Significant changes will be posted
        on this page with an updated date.
      </p>

      <p className="mt-8 text-gray-500 text-sm">Last updated: {new Date().getFullYear()}</p>
    </div>
  );
}