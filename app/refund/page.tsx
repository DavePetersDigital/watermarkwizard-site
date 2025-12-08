export default function RefundPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Refund Policy</h1>

      <p className="text-gray-700 mb-4">
        This Refund Policy applies to all purchases of Watermark Wizard (“the Software”) made
        through this website.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. Digital Software Delivery</h2>
      <p className="text-gray-700 mb-4">
        Watermark Wizard is delivered as a digital download for macOS and Windows. Access is provided
        immediately after successful payment. Because the Software is fully accessible and usable
        immediately, all sales are considered final.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. No Refunds</h2>
      <p className="text-gray-700 mb-4">
        All payments for Watermark Wizard are <strong>non-refundable</strong>, including:
      </p>
      <ul className="list-disc ml-6 text-gray-700 mb-4">
        <li>Monthly subscriptions</li>
        <li>Yearly subscriptions</li>
        <li>2-Year Creator License purchases</li>
      </ul>
      <p className="text-gray-700 mb-4">
        We do not offer refunds for change of mind, non-use of the Software, or failure to cancel
        before a renewal date.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. Subscriptions</h2>
      <p className="text-gray-700 mb-4">
        Monthly and yearly subscriptions renew automatically until cancelled. You can cancel your
        subscription at any time before the next renewal date. When you cancel, your access continues
        until the end of the current billing period, and no further payments will be taken.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. 2-Year Creator License</h2>
      <p className="text-gray-700 mb-4">
        The 2-Year Creator License is a fixed-term license. You pay once for 24 months of access and
        updates. This license does not auto-renew and is also non-refundable once the purchase is
        completed.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">5. Billing Errors</h2>
      <p className="text-gray-700 mb-4">
        If you believe you have been incorrectly charged (for example, duplicate billing or an
        amount different from the price shown at checkout), please contact us as soon as possible
        with details. Legitimate billing errors will be corrected.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">6. Local Consumer Laws</h2>
      <p className="text-gray-700 mb-4">
        Where local consumer protection laws provide additional mandatory rights (for example, in
        certain jurisdictions that grant specific cooling-off periods), those rights will apply in
        addition to this policy. Nothing in this Refund Policy is intended to limit any such
        non-excludable rights.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">7. Contact</h2>
      <p className="text-gray-700 mb-4">
        If you have questions about this Refund Policy or believe a billing error has occurred,
        please contact us using the support details provided on this website.
      </p>

      <p className="mt-8 text-gray-500 text-sm">
        Last updated: {new Date().getFullYear()}
      </p>
    </div>
  );
}