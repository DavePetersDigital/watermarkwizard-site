"use client";

import { useEffect } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import BuyButton from "../components/BuyButton";

export default function Pricing() {
  const licensePriceId =
    process.env.NEXT_PUBLIC_PADDLE_LICENSE_ID ||
    process.env.NEXT_PUBLIC_PADDLE_CREATOR_ID;

  useEffect(() => {
    if (!licensePriceId) {
      console.error(
        "Missing NEXT_PUBLIC_PADDLE_LICENSE_ID (or fallback NEXT_PUBLIC_PADDLE_CREATOR_ID)"
      );
    }
  }, [licensePriceId]);

  const checkoutEnabled = process.env.NEXT_PUBLIC_ENABLE_CHECKOUT === "true";

  return (
    <div className="px-6 md:px-10 py-16 max-w-5xl mx-auto text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Pricing</h1>
      <p className="text-gray-700 text-sm md:text-base mb-1 max-w-2xl mx-auto">
        Fast, private watermarking for photographers, Etsy sellers, real estate agents and digital creators.
      </p>
      <p className="text-gray-500 text-xs md:text-sm mb-10 max-w-2xl mx-auto">
        All prices in <span className="font-semibold">USD</span>. Currency conversion, tax handling and secure payment processing are completed automatically at checkout.
      </p>

      <div className="mb-12 p-6 bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-2xl max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-2xl">🎁</span>
          <h2 className="text-xl font-bold text-purple-900">Try before you buy</h2>
        </div>
        <p className="text-gray-700 text-sm mb-3">
          Download Watermark Wizard and <strong>you can test on 25 images before you buy</strong> — no credit card required.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <span>✓</span> <span>25 images to try</span>
          </div>
          <div className="flex items-center gap-1">
            <span>✓</span> <span>Full features</span>
          </div>
          <div className="flex items-center gap-1">
            <span>✓</span> <span>No credit card</span>
          </div>
        </div>
        <div className="text-center">
          <a
            href="/download"
            className="inline-block px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-semibold hover:bg-purple-700 transition"
          >
            Download free →
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14 text-left max-w-xl mx-auto">
        {[
          "Use on any combination of two devices (macOS or Windows)",
          "Lightning-fast processing — no image uploads",
          "Private — all watermarking happens locally on your device",
          "Batch processing support",
          "PNG transparency and high-resolution exports",
          "Clean, simple interface designed for speed",
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-2">
            <CheckIcon className="h-5 w-5 text-green-600 mt-0.5" />
            <span className="text-sm text-gray-700">{item}</span>
          </div>
        ))}
      </div>

      <p className="text-gray-600 text-sm mb-8 max-w-2xl mx-auto">
        One purchase unlocks both macOS &amp; Windows versions. All prices in USD — converted to your local currency at checkout, with any taxes applied automatically.
      </p>

      <div className="max-w-md mx-auto text-left">
        <div className="border-2 border-purple-600 rounded-2xl p-6 shadow-md flex flex-col bg-white relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-[11px] font-semibold px-3 py-1 rounded-full">
            ONE-TIME PURCHASE
          </div>

          <div className="flex items-center gap-2 mb-3 mt-2">
            <Image src="/Apple-Logo.png" width={16} height={16} alt="Apple" />
            <Image
              src="/Windows-Logo.png"
              width={16}
              height={16}
              alt="Windows"
              style={{ height: "auto" }}
            />
          </div>

          <h2 className="text-lg font-semibold mb-1">Watermark Wizard</h2>
          <p className="text-2xl font-bold">$29.99</p>
          <p className="text-xs uppercase tracking-wide text-gray-500 mb-4">
            Pay once — no subscription
          </p>

          <div className="space-y-2 mb-6">
            {[
              "Full access to all features",
              "Use on any 2 devices (Mac/Win)",
              "Local, private processing (no uploads)",
              "Updates included for the licensed term",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckIcon className="h-5 w-5 text-green-600 mt-0.5" />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-auto">
            <BuyButton priceId={licensePriceId} disabled={!checkoutEnabled}>
              Buy now — $29.99
            </BuyButton>
          </div>
        </div>
      </div>

      <p className="mt-10 text-xs text-gray-500 leading-relaxed max-w-xl mx-auto">
        This is a one-time purchase. Your license is valid for the term shown in your confirmation email. No recurring charges.
      </p>

      <div className="flex flex-col items-center mt-6 text-gray-400 text-xs">
        <div className="flex items-center gap-1">
          <span>🔒</span> Secure checkout
        </div>
        <div className="mt-1">Payments powered by Paddle</div>
      </div>

      <p className="mt-10 text-sm text-gray-600">
        <a href="/" className="text-purple-600 font-semibold hover:underline">
          ← Back to home
        </a>
      </p>
    </div>
  );
}
