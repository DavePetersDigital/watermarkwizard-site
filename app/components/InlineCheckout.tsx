"use client";

export default function InlineCheckout({ priceId, customerEmail }) {
  const openInline = () => {
    if (!window.Paddle) {
      console.error("Paddle not ready yet");
      return;
    }

    const trimmedEmail = customerEmail && customerEmail.trim() ? customerEmail.trim() : "";
    
    const checkoutOptions: any = {
      items: [{ priceId }],
      displayMode: "inline",
      frameTarget: "inline-checkout-container",
      frameInitialHeight: 450,
      frameStyle: "width: 100%; background: transparent; border: none;",
      // Pass email in custom_data so it appears in webhooks
      customData: trimmedEmail ? {
        email: trimmedEmail
      } : {}
    };

    // Set customer email if provided (for Paddle's customer object and receipts)
    if (trimmedEmail) {
      checkoutOptions.customer = {
        email: trimmedEmail
      };
      // Top-level email parameter (Paddle uses this for receipt emails)
      checkoutOptions.email = trimmedEmail;
    }

    window.Paddle.Checkout.open(checkoutOptions);
  };

  return (
    <button
      onClick={openInline}
      className="mt-auto w-full px-4 py-2.5 rounded-lg text-sm font-semibold bg-purple-600 text-white hover:bg-purple-700 transition"
    >
      Buy Now
    </button>
  );
}