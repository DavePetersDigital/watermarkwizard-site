export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

      <p className="mb-4 text-gray-700">
        These Terms of Service (“Terms”) govern your use of Watermark Wizard (“the Software”)
        and all related services offered through this website (“the Service”). By downloading,
        installing or using the Software, you agree to these Terms.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. License</h2>
      <p className="mb-4 text-gray-700">
        When you purchase a plan, you are granted a non-exclusive, non-transferable license to
        use Watermark Wizard on up to two devices in any combination of macOS and Windows.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. Plan Types</h2>
      <p className="mb-4 text-gray-700">
        We offer three plan types:
      </p>
      <ul className="list-disc ml-6 text-gray-700 mb-4">
        <li><strong>Monthly Subscription</strong> – Renews automatically every month.</li>
        <li><strong>Yearly Subscription</strong> – Renews automatically every 12 months.</li>
        <li><strong>2-Year Creator License</strong> – One-time purchase providing access for 24 months. This plan does <strong>not</strong> auto-renew.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. Renewals & Cancellations</h2>
      <p className="mb-4 text-gray-700">
        Monthly and yearly subscriptions renew automatically unless cancelled before the renewal date.
        Once cancelled, access remains active until the current billing period ends.
        The 2-Year Creator License does not renew automatically and must be repurchased manually
        after its 24-month term if continued access is desired.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. Payments</h2>
      <p className="mb-4 text-gray-700">
        Payments, tax handling, currency conversion and secure checkout are processed by
        our trusted global payment partner. We do not store or process any payment information directly.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">5. Software Delivery</h2>
      <p className="mb-4 text-gray-700">
        After purchase, you will receive access to a downloadable installer for both macOS and Windows.
        Access to downloads is tied to your active plan or license term.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">6. Acceptable Use</h2>
      <p className="mb-4 text-gray-700">
        You agree not to reverse engineer, modify, distribute, resell or otherwise misuse the Software.
        Sharing license keys or download links is prohibited.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">7. Privacy</h2>
      <p className="mb-4 text-gray-700">
        Watermark Wizard processes images locally on your device. We do not upload or store your images.
        Additional privacy information is available in our Privacy Policy.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">8. Disclaimer</h2>
      <p className="mb-4 text-gray-700">
        The Software is provided “as is,” without warranties of any kind. We are not liable for any
        loss, damage or data issues arising from use of the Software.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">9. Governing Law</h2>
      <p className="mb-4 text-gray-700">
        These Terms are governed by the laws of Australia. You agree that any disputes will be handled
        through the appropriate courts within Australia.
      </p>

      <p className="mt-8 text-gray-500 text-sm">Last updated: {new Date().getFullYear()}</p>
    </div>
  );
}