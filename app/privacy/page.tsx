export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="text-gray-700 mb-4">
        This Privacy Policy explains how Watermark Wizard (&quot;we&quot;, &quot;us&quot;, or
        &quot;our&quot;) collects, uses, and protects your information when you use our software
        and related services.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. Images Are Processed Locally</h2>
      <p className="text-gray-700 mb-4">
        Watermark Wizard processes all images locally on your device. The application does not
        upload, transmit, store, or analyse your images on our servers.
      </p>
      <p className="text-gray-700 mb-4">
        If you choose to open or save images from third-party storage services (such as Google
        Drive, Dropbox, or OneDrive), those services operate independently of Watermark Wizard
        and are subject to their own privacy and security policies. We do not control how those
        services store or process your files.
      </p>
      <p className="text-gray-700 mb-4">
        At no point does Watermark Wizard access, view, or process your images outside of your
        device.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. Information We Collect</h2>
      <p className="text-gray-700 mb-4">
        We collect limited technical information required to operate the Software and manage
        licensing. This may include:
      </p>
      <ul className="list-disc ml-6 text-gray-700 mb-4 space-y-1">
        <li>Device identifiers (used to enforce license limits)</li>
        <li>License or purchase status</li>
        <li>Basic application usage data (such as number of images processed)</li>
      </ul>
      <p className="text-gray-700 mb-4">
        We do not collect, store, or have access to your images.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. Licensing and Verification</h2>
      <p className="text-gray-700 mb-4">
        The Software communicates with our licensing systems to verify trial eligibility, license
        validity, and enforce device limits. This may involve periodic checks using your device
        identifier and license information.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. Payments</h2>
      <p className="text-gray-700 mb-4">
        Payments are processed securely by Paddle.com, which acts as the merchant of record. We do
        not collect or store your payment information.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">5. How We Use Information</h2>
      <p className="text-gray-700 mb-4">We use collected information solely to:</p>
      <ul className="list-disc ml-6 text-gray-700 mb-4 space-y-1">
        <li>Provide and maintain the Software</li>
        <li>Enforce licensing terms and trial limits</li>
        <li>Improve performance and reliability</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">6. Data Sharing</h2>
      <p className="text-gray-700 mb-4">
        We do not sell, rent, or share your personal information.
      </p>
      <p className="text-gray-700 mb-4">
        We may share limited information with trusted third-party providers strictly as required
        to operate the Service, including payment processing (such as Paddle) and licensing
        infrastructure. These providers are required to protect your information.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">7. Data Security</h2>
      <p className="text-gray-700 mb-4">
        We take reasonable technical and organisational measures to protect your information.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">8. Data Retention</h2>
      <p className="text-gray-700 mb-4">
        We retain only the information necessary to provide the Service and manage licenses.
        License and device-related data may be retained for as long as required to support your
        access and comply with legal obligations.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">9. International Users</h2>
      <p className="text-gray-700 mb-4">
        The Software may be used worldwide. Your information may be processed in Australia or
        other countries where our service providers operate.
      </p>
      <p className="text-gray-700 mb-4">
        We aim to comply with applicable privacy laws where relevant, including GDPR and CCPA.
        However, rights and obligations may vary depending on your location.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">10. Your Rights</h2>
      <p className="text-gray-700 mb-4">
        You may request access to or deletion of your personal data by contacting us.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">11. Changes to This Policy</h2>
      <p className="text-gray-700 mb-4">
        We may update this Privacy Policy from time to time. Updates will be posted on our
        website.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">12. Contact</h2>
      <p className="text-gray-700 mb-4">
        For any privacy-related questions, contact us at:{" "}
        <a
          href="mailto:support@davepetersdigital.com"
          className="text-purple-600 hover:text-purple-700 font-semibold"
        >
          support@davepetersdigital.com
        </a>
      </p>

      <p className="mt-8 text-gray-500 text-sm">Last updated: {new Date().getFullYear()}</p>
    </div>
  );
}
