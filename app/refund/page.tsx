export default function RefundPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Refund Policy</h1>

      <p className="text-gray-700 mb-4">
        Payments and refunds for Watermark Wizard are handled securely by Paddle, our payment provider and merchant of record.
      </p>

      <p className="text-gray-700 mb-4">
        Customers may request a refund within 14 days of purchase, in accordance with Paddle's refund policy.
      </p>

      <p className="text-gray-700 mb-4">
        To request a refund, please use the refund link provided in your purchase confirmation email or contact Paddle support directly.
      </p>

      <p className="mt-8 text-gray-500 text-sm">
        Last updated: {new Date().getFullYear()}
      </p>
    </div>
  );
}