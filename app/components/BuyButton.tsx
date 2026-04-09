"use client";

import { useState, useEffect } from "react";

export default function BuyButton({ priceId, children, disabled = false }) {
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const onCheckoutError = (ev: Event) => {
      const data = (ev as CustomEvent).detail as {
        detail?: string;
        message?: string;
      };
      const msg =
        (typeof data?.detail === "string" && data.detail) ||
        (typeof data?.message === "string" && data.message) ||
        "Something went wrong at checkout. Please try again.";
      console.error("Paddle checkout error:", data);
      alert(`Checkout error: ${msg}`);
    };
    window.addEventListener("paddle-checkout-error", onCheckoutError);
    return () =>
      window.removeEventListener("paddle-checkout-error", onCheckoutError);
  }, []);

  const handleButtonClick = () => {
    if (disabled) return; // Don't do anything if disabled
    
    if (showEmailInput && email.trim()) {
      // Email is entered, proceed to checkout
      openCheckout();
    } else {
      // Show email input
      setShowEmailInput(true);
    }
  };

  const openCheckout = () => {
    if (disabled) return; // Don't open checkout if disabled
    
    if (typeof window === "undefined" || !window.Paddle) {
      console.warn("Paddle not ready yet.");
      alert("Paddle is not ready yet. Please wait a moment and try again.");
      return;
    }

    if (!email.trim()) {
      // Shouldn't happen, but just in case
      setShowEmailInput(true);
      return;
    }

    if (!priceId) {
      console.error("Price ID is missing!");
      console.error("Received priceId value:", priceId);
      console.error("priceId type:", typeof priceId);
      console.error("priceId === undefined:", priceId === undefined);
      console.error("priceId === null:", priceId === null);
      console.error("priceId === '':", priceId === '');
      alert(`Error: Price ID is missing. Received: "${priceId}" (type: ${typeof priceId}). Please check your configuration and browser console.`);
      return;
    }

    const trimmedEmail = email.trim();
    console.log("Opening checkout with email:", trimmedEmail);
    console.log("Price ID:", priceId);
    console.log("Paddle environment:", window.Paddle.Environment?.get?.());

    const checkoutOptions: any = {
      items: [
        {
          priceId,
          quantity: 1
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

    try {
      window.Paddle.Checkout.open(checkoutOptions);
    } catch (error) {
      console.error("Error opening Paddle checkout:", error);
      alert(`Error opening checkout: ${error instanceof Error ? error.message : 'Unknown error'}. Please check the console for details.`);
    }
  };

  return (
    <div className="w-full">
      {showEmailInput && !disabled && (
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
          disabled={disabled}
          className={`mt-auto w-full px-4 py-2.5 rounded-lg text-sm font-semibold transition ${
            disabled 
              ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
              : 'bg-purple-600 text-white hover:bg-purple-700'
          }`}
        >
          {disabled ? 'Coming Soon' : children}
        </button>
      )}
    </div>
  );
}