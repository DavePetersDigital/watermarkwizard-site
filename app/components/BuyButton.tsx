"use client";

import { useState } from "react";

export default function BuyButton({ priceId, children }) {
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [email, setEmail] = useState("");

  const handleButtonClick = () => {
    if (showEmailInput && email.trim()) {
      // Email is entered, proceed to checkout
      openCheckout();
    } else {
      // Show email input
      setShowEmailInput(true);
    }
  };

  const openCheckout = () => {
    if (typeof window === "undefined" || !window.Paddle) {
      console.warn("Paddle not ready yet.");
      return;
    }

    if (!email.trim()) {
      // Shouldn't happen, but just in case
      setShowEmailInput(true);
      return;
    }

    const trimmedEmail = email.trim();
    console.log("Opening checkout with email:", trimmedEmail);

    const checkoutOptions: any = {
      items: [
        {
          priceId,
          quantity: 1   // <-- enables quantity selector at checkout
        }
      ],
      // Pass email in custom_data so it appears in webhooks
      customData: {
        email: trimmedEmail
      },
      // Set customer email - this should be used for receipts
      customer: {
        email: trimmedEmail
      },
      // Top-level email parameter (Paddle uses this for receipt emails)
      email: trimmedEmail
    };

    console.log("Full checkout options:", JSON.stringify(checkoutOptions, null, 2));
    console.log("Email passed to Paddle in email (top-level):", trimmedEmail);
    console.log("Email passed to Paddle in customer.email:", trimmedEmail);
    console.log("Email passed to Paddle in customData.email:", trimmedEmail);

    window.Paddle.Checkout.open(checkoutOptions);
  };

  return (
    <div className="w-full">
      {showEmailInput && (
        <div className="mb-4 p-4 bg-purple-50 border-2 border-purple-200 rounded-lg">
          <label htmlFor={`email-${priceId}`} className="block text-sm font-semibold text-gray-800 mb-2">
            📧 Enter your email address
          </label>
          <p className="text-xs text-gray-600 mb-3">
            We'll use this to send your license key and important updates
          </p>
          <input
            type="email"
            id={`email-${priceId}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && email.trim()) {
                openCheckout();
              }
            }}
            placeholder="your@email.com"
            className="w-full px-3 py-2 text-sm border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white mb-3"
            autoFocus
          />
          <div className="flex gap-2">
            <button
              onClick={openCheckout}
              disabled={!email.trim()}
              className="flex-1 px-4 py-2 rounded-lg text-sm font-semibold bg-purple-600 text-white hover:bg-purple-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Continue to Checkout
            </button>
            <button
              onClick={() => {
                setShowEmailInput(false);
                setEmail("");
              }}
              className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      {!showEmailInput && (
        <button
          onClick={handleButtonClick}
          className="mt-auto w-full px-4 py-2.5 rounded-lg text-sm font-semibold bg-purple-600 text-white hover:bg-purple-700 transition"
        >
          {children}
        </button>
      )}
    </div>
  );
}