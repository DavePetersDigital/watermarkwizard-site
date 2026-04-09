export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

      <p className="mb-4 text-gray-700">
        These Terms of Service ("Terms") govern your use of Watermark Wizard ("the Software")
        and all related services ("the Service"). By downloading, installing, or using the Software, you agree to these Terms.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. License</h2>
      <p className="mb-4 text-gray-700">
        Watermark Wizard is licensed, not sold. During the free trial period, you are granted a limited, non-exclusive, non-transferable license to use the Software subject to trial limits (such as a maximum number of watermarked images) enforced by the Software and our licensing services.
      </p>
      <p className="mb-4 text-gray-700">
        When you complete a one-time purchase, you are granted a non-exclusive, non-transferable <strong>lifetime license</strong> to use the Software on up to two devices that you own or control, in any combination of macOS and Windows. This is not a subscription: you pay once, and there are no recurring fees for that license. Any rights to updates, new major versions, or support beyond what is stated at checkout or in your order confirmation are as described there.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. Free Trial</h2>
      <p className="mb-4 text-gray-700">
        Watermark Wizard may offer a free trial that allows limited use of the Software. Trial limitations, including usage limits and device restrictions, are enforced by the Software and associated licensing services. Trial access ends when those limits are reached or when you purchase a license, whichever applies.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. One-time purchase</h2>
      <p className="mb-4 text-gray-700">
        Paid access is sold as a <strong>one-time purchase</strong>. You are charged once at checkout unless you place a separate order. There is no automatic renewal or recurring billing for the standard lifetime license. Refunds and billing disputes are handled in line with Paddle&apos;s policies as merchant of record and any terms shown at checkout.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. Payments</h2>
      <p className="mb-4 text-gray-700">
        Payments, refunds, tax handling, and currency conversion are processed by Paddle.com, which acts as the authorized payment provider and merchant of record for Watermark Wizard. We do not store or process payment information directly.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">5. Software Delivery</h2>
      <p className="mb-4 text-gray-700">
        Access to downloadable installers for macOS and Windows is provided for the free trial while it remains valid, and for licensed users in accordance with your lifetime license and our download or update practices described at purchase or on this website.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">6. Acceptable Use</h2>
      <p className="mb-4 text-gray-700">
        You agree not to reverse engineer, modify, distribute, resell, sublicense, or otherwise misuse the Software. Sharing license keys or access credentials is prohibited.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">7. Privacy</h2>
      <p className="mb-4 text-gray-700">
        Watermark Wizard processes images locally on your device. Images are not uploaded or stored by the Software. Additional details are available in our Privacy Policy.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">8. Disclaimer</h2>
      <p className="mb-4 text-gray-700">
        The Software is provided "as is" without warranties of any kind, express or implied. To the maximum extent permitted by law, we are not liable for any loss or damage arising from use of the Software.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">9. Governing Law</h2>
      <p className="mb-4 text-gray-700">
        These Terms are governed by the laws of Australia, and any disputes shall be handled in the applicable courts of Australia.
      </p>

      <p className="mt-8 text-gray-500 text-sm">Last updated: {new Date().getFullYear()}</p>
    </div>
  );
}