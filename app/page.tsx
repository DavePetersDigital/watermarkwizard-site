"use client";

import { CheckIcon } from "@heroicons/react/24/solid";
import BuyButton from "./components/BuyButton";
import Image from "next/image";

export default function Home() {
  const monthlyId = process.env.NEXT_PUBLIC_PADDLE_MONTHLY_ID;
  const yearlyId = process.env.NEXT_PUBLIC_PADDLE_YEARLY_ID;
  const twoYearId = process.env.NEXT_PUBLIC_PADDLE_2YEAR_ID;

  return (
    <div className="px-6 md:px-10 py-16 max-w-6xl mx-auto text-center">

      {/* HERO SECTION */}
      <div className="max-w-3xl mx-auto mb-10">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-3">
          Fast, Private<br />
          Image Watermarking
        </h1>

        <p className="text-lg md:text-xl font-semibold text-black mb-6">
          Works on Mac & Windows
        </p>

        {/* OS Badge */}
        <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg mb-10">
          <div className="flex items-center gap-2">
            <Image src="/Apple-Logo.png" width={20} height={20} alt="Apple" /> macOS
          </div>
          <div className="h-2 w-2 rounded-full bg-purple-200"></div>
          <div className="flex items-center gap-2">
            <Image src="/Windows-Logo.png" width={20} height={20} alt="Windows" /> Windows
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="#pricing"
            className="px-6 py-3 bg-purple-600 text-white rounded-lg text-sm font-semibold hover:bg-purple-700 transition"
          >
            View Pricing
          </a>

          <button
            onClick={() => {
              if (typeof window !== "undefined" && window.Paddle) {
                window.Paddle.Checkout.open({
                  items: [{ priceId: yearlyId }],
                  // Note: Email will be collected by Paddle during checkout
                  // If you want to pre-fill, add: customer: { email: "customer@example.com" }
                  // And customData: { email: "customer@example.com" } to pass to webhooks
                });
              }
            }}
            className="px-6 py-3 bg-green-600 text-white rounded-lg text-sm font-semibold hover:bg-green-700 transition"
          >
            Buy Now
          </button>
        </div>

        {/* Placeholder Mockup */}
        <div className="flex justify-center mt-6 mb-20">
          <svg
            width="650"
            height="380"
            className="max-w-full"
            style={{
              transform: "rotate(-10deg)",
              filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.25))",
            }}
          >
            <rect width="650" height="380" rx="24" fill="#ffffff" stroke="#e5e7eb" />
            <rect width="650" height="56" rx="24" fill="#f3f4f6" />
            <circle cx="32" cy="28" r="6" fill="#f87171" />
            <circle cx="54" cy="28" r="6" fill="#facc15" />
            <circle cx="76" cy="28" r="6" fill="#4ade80" />
            <rect x="50" y="110" width="230" height="160" rx="16" fill="#e0f2fe" />
            <rect x="300" y="110" width="200" height="24" rx="12" fill="#ede9fe" />
            <rect x="300" y="150" width="260" height="24" rx="12" fill="#ede9fe" />
            <rect x="300" y="190" width="180" height="24" rx="12" fill="#ede9fe" />
            <rect x="300" y="250" width="150" height="34" rx="16" fill="#a855f7" />
            <text
              x="375"
              y="272"
              textAnchor="middle"
              fill="#ffffff"
              fontSize="14"
              fontFamily="system-ui"
            >
              Export Watermarked
            </text>
            <text
              x="325"
              y="350"
              textAnchor="middle"
              fill="#9ca3af"
              fontSize="16"
              fontFamily="system-ui"
            >
              Mockup — replace with real app UI later
            </text>
          </svg>
        </div>
      </div>

      {/* FEATURES */}
      <div
        id="features"
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20 text-left max-w-xl mx-auto"
      >
        {[
          "Use on any combination of 2 devices (macOS + Windows)",
          "Lightning-fast processing — no image uploads",
          "Private — all watermarking happens locally on your device",
          "Batch processing for speed",
          "PNG transparency and high-resolution exports",
          "Clean, simple interface designed for creators",
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-2">
            <CheckIcon className="h-5 w-5 text-green-600 mt-0.5" />
            <span className="text-sm text-gray-700">{item}</span>
          </div>
        ))}
      </div>

      {/* -------------------------------------------------- */}
      {/*  FEATURE HIGHLIGHT CARDS (Option C) */}
      {/* -------------------------------------------------- */}

      <div className="grid md:grid-cols-3 gap-6 my-16 max-w-5xl mx-auto">

        <div className="p-6 rounded-2xl bg-white border shadow-sm">
          <h3 className="font-semibold text-lg mb-2">No Uploading Needed</h3>
          <p className="text-sm text-gray-600">
            Everything runs locally. Your images never leave your device — unlike browser-based watermark tools.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Faster Than Online Tools</h3>
          <p className="text-sm text-gray-600">
            No waiting for uploads or downloads. Watermark entire batches instantly.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Simple, Creator-Focused Design</h3>
          <p className="text-sm text-gray-600">
            No menus, clutter, or complexity. Just drop your images in and export.
          </p>
        </div>

      </div>

      {/* -------------------------------------------------- */}

      {/* PRICING */}
      <div id="pricing" className="mt-12 mb-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Pricing</h2>

        <p className="text-gray-600 text-sm mb-10">
          One purchase unlocks both macOS & Windows versions. All prices in USD — converted to your local currency at checkout, with any taxes applied automatically.
        </p>
      </div>

      {/* PRICING CARDS */}
      <div className="grid gap-6 md:grid-cols-3 text-left">

        {/* MONTHLY */}
        <div className="border rounded-2xl p-6 shadow-sm flex flex-col bg-white">
          <div className="flex items-center gap-2 mb-3">
            <Image src="/Apple-Logo.png" width={16} height={16} alt="Apple" />
            <Image src="/Windows-Logo.png" width={17} height={17} alt="Windows" />
          </div>

          <h3 className="text-lg font-semibold mb-1">Monthly</h3>
          <p className="text-2xl font-bold">$4.99</p>
          <p className="text-xs uppercase tracking-wide text-gray-500 mb-4">
            per month • auto-renews
          </p>

          <div className="space-y-2 mb-6">
            {[
              "Full access to all features",
              "Use on any 2 devices (Mac/Win)",
              "Local, private processing (no uploads)",
              "Updates included while active",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckIcon className="h-5 w-5 text-green-600 mt-0.5" />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <BuyButton priceId={monthlyId}>Choose Monthly</BuyButton>
        </div>

        {/* YEARLY — MOST POPULAR */}
        <div className="border-2 border-purple-600 rounded-2xl p-6 shadow-md flex flex-col bg-white relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-[11px] font-semibold px-3 py-1 rounded-full">
            MOST POPULAR
          </div>

          <div className="flex items-center gap-2 mb-3">
            <Image src="/Apple-Logo.png" width={16} height={16} alt="Apple" />
            <Image src="/Windows-Logo.png" width={17} height={17} alt="Windows" />
          </div>

          <h3 className="text-lg font-semibold mb-1">Yearly</h3>
          <p className="text-2xl font-bold">$29.99</p>
          <p className="text-xs uppercase tracking-wide text-gray-500">
            per year • auto-renews
          </p>
          <p className="text-xs text-green-700 font-medium mb-4">
            Save 50% vs monthly
          </p>

          <div className="space-y-2 mb-6">
            {[
              "Full access to all features",
              "Use on any 2 devices (Mac/Win)",
              "Local, private processing (no uploads)",
              "All updates for 12 months",
              "Best value for regular use",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckIcon className="h-5 w-5 text-green-600 mt-0.5" />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <BuyButton priceId={yearlyId}>Choose Yearly</BuyButton>
        </div>

        {/* TWO-YEAR LICENSE */}
        <div className="border rounded-2xl p-6 shadow-sm flex flex-col bg-white relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white text-[11px] font-semibold px-3 py-1 rounded-full">
            NO SUBSCRIPTION
          </div>

          <div className="flex items-center gap-2 mb-3">
            <Image src="/Apple-Logo.png" width={16} height={16} alt="Apple" />
            <Image src="/Windows-Logo.png" width={17} height={17} alt="Windows" />
          </div>

          <h3 className="text-lg font-semibold mb-1">2-Year Creator License</h3>
          <p className="text-2xl font-bold">$59.99</p>
          <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
            24 months of access
          </p>
          <p className="text-xs text-gray-500 mb-4">
            Pay once — access and updates for 2 full years.
          </p>

          <div className="space-y-2 mb-6">
            {[
              "Full access for 24 months",
              "Use on any 2 devices (Mac/Win)",
              "Local, private processing (no uploads)",
              "Updates included for the entire term",
              "No auto-renewal",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckIcon className="h-5 w-5 text-green-600 mt-0.5" />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <BuyButton priceId={twoYearId}>Choose 2-Year License</BuyButton>
        </div>
      </div>

      {/* Footer Note */}
      <p className="mt-10 text-xs text-gray-500 leading-relaxed max-w-xl mx-auto">
        Monthly and yearly subscriptions auto-renew unless cancelled.
        The 2-Year Creator License does not auto-renew.
        You may cancel at any time; access continues until the end of the billing period.
      </p>

      {/* Secure Checkout + Paddle */}
      <div className="flex flex-col items-center mt-6 text-gray-400 text-xs">
        <div className="flex items-center gap-1">
          <span>🔒</span> Secure checkout
        </div>
        <div className="mt-1">Payments powered by Paddle</div>
      </div>

    </div>
  );
}