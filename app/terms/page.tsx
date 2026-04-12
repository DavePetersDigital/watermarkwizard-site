import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

      <p className="mb-4 text-gray-700">
        These Terms of Service (&quot;Terms&quot;) govern your use of Watermark Wizard
        (&quot;the Software&quot;) and related services (&quot;the Service&quot;). By
        downloading, installing, or using the Software, you agree to these Terms.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. License</h2>
      <p className="mb-4 text-gray-700">Watermark Wizard is licensed, not sold.</p>
      <p className="mb-4 text-gray-700">
        During the free trial period, you are granted a limited, non-exclusive,
        non-transferable license to use the Software subject to trial limits enforced by the
        Software and our licensing systems.
      </p>
      <p className="mb-4 text-gray-700">
        When you complete a one-time purchase, you are granted a non-exclusive,
        non-transferable lifetime license to use the Software on up to two devices that you own
        or control, in any combination of macOS and Windows.
      </p>
      <p className="mb-4 text-gray-700">
        Watermark Wizard may implement technical measures to enforce license limits, including
        device restrictions and usage limits.
      </p>
      <p className="mb-4 text-gray-700">
        Any rights to updates, new versions, or support are as described at the time of
        purchase.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. Free Trial</h2>
      <p className="mb-4 text-gray-700">
        The Software may offer a free trial with usage and device limitations. Trial access
        ends when those limits are reached or when a license is purchased.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. One-Time Purchase</h2>
      <p className="mb-4 text-gray-700">
        Paid access is sold as a one-time purchase. There is no automatic renewal or recurring
        billing for the standard license.
      </p>
      <p className="mb-4 text-gray-700">
        Refunds and billing disputes are handled by Paddle as the merchant of record in
        accordance with their policies and any terms presented at checkout.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. Payments</h2>
      <p className="mb-4 text-gray-700">
        Payments, taxes, and refunds are processed by Paddle.com, which acts as the merchant of
        record. We do not store or process payment details.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">5. Software Delivery</h2>
      <p className="mb-4 text-gray-700">
        Access to installers is provided for trial and licensed users in accordance with your
        license and any terms described at purchase.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">6. Acceptable Use</h2>
      <p className="mb-4 text-gray-700">You agree not to:</p>
      <ul className="list-disc ml-6 text-gray-700 mb-4 space-y-1">
        <li>Reverse engineer, decompile, or attempt to extract source code</li>
        <li>Modify or create derivative works</li>
        <li>Distribute, sell, sublicense, or share access to the Software</li>
        <li>Bypass or attempt to bypass licensing or usage restrictions</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">7. Privacy</h2>
      <p className="mb-4 text-gray-700">
        Watermark Wizard processes images locally on your device. Images are not uploaded or
        stored by the Software. See our{" "}
        <Link href="/privacy" className="text-purple-600 hover:text-purple-700 font-semibold">
          Privacy Policy
        </Link>{" "}
        for full details.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">8. Disclaimer and Limitation of Liability</h2>
      <p className="mb-4 text-gray-700">
        The Software is provided &quot;as is&quot; and &quot;as available&quot; without warranties
        of any kind, to the extent permitted by law.
      </p>
      <p className="mb-4 text-gray-700">You use the Software at your own risk.</p>
      <p className="mb-4 text-gray-700">
        We take reasonable steps to ensure the Software is free from viruses and harmful
        components. However, we do not guarantee that the Software will be free from defects,
        errors, or harmful elements, and you are responsible for implementing appropriate
        safeguards on your devices.
      </p>
      <p className="mb-4 text-gray-700">
        To the maximum extent permitted by law, Watermark Wizard excludes all liability for any
        indirect, incidental, special, or consequential loss, including loss of data, loss of
        business, or loss of profits arising from or in connection with your use of the Software.
      </p>
      <p className="mb-4 text-gray-700">
        Where liability cannot be excluded under applicable law (including under the Australian
        Consumer Law), our liability is limited, at our option, to:
      </p>
      <ul className="list-disc ml-6 text-gray-700 mb-4 space-y-1">
        <li>(a) replacement of the Software; or</li>
        <li>(b) the cost of replacing or re-supplying the Software.</li>
      </ul>
      <p className="mb-4 text-gray-700">
        Nothing in these Terms excludes, restricts, or modifies any rights you may have under
        applicable consumer protection laws.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">9. Termination</h2>
      <p className="mb-4 text-gray-700">
        We may suspend or terminate your access to the Software if you breach these Terms.
      </p>
      <p className="mb-4 text-gray-700">
        Upon termination, your right to use the Software ceases.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">10. Changes to These Terms</h2>
      <p className="mb-4 text-gray-700">
        We may update these Terms from time to time. Updated Terms will be posted on our website
        and take effect upon publication.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">11. Governing Law</h2>
      <p className="mb-4 text-gray-700">
        These Terms are governed by the laws of Queensland, Australia. Any disputes will be
        handled in the courts of Queensland, Australia.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">12. International Use</h2>
      <p className="mb-4 text-gray-700">
        The Software may be accessed and used worldwide. You are responsible for ensuring that
        your use of the Software complies with the laws applicable in your jurisdiction.
      </p>
      <p className="mb-4 text-gray-700">
        We make no representation that the Software is appropriate or compliant with laws
        outside of Australia.
      </p>

      <p className="mt-8 text-gray-500 text-sm">Last updated: {new Date().getFullYear()}</p>
    </div>
  );
}
