"use client";

import { CheckIcon } from "@heroicons/react/24/solid";
import BuyButton from "./components/BuyButton";
import Image from "next/image";

export default function Home() {
  const essentialId = process.env.NEXT_PUBLIC_PADDLE_ESSENTIAL_ID;
  const professionalId = process.env.NEXT_PUBLIC_PADDLE_PROFESSIONAL_ID;
  const creatorId = process.env.NEXT_PUBLIC_PADDLE_CREATOR_ID;
  
  // Debug: Log price IDs (remove in production)
  console.log("Price IDs loaded:", {
    essential: essentialId,
    professional: professionalId,
    creator: creatorId,
    environment: process.env.NEXT_PUBLIC_PADDLE_ENV
  });
  
  // Check if any are undefined
  if (!essentialId || !professionalId || !creatorId) {
    console.error("⚠️ Missing price IDs:", {
      essential: essentialId ? "OK" : "MISSING",
      professional: professionalId ? "OK" : "MISSING",
      creator: creatorId ? "OK" : "MISSING"
    });
    console.error("Make sure your .env.local file has:");
    console.error("NEXT_PUBLIC_PADDLE_ESSENTIAL_ID=pri_...");
    console.error("NEXT_PUBLIC_PADDLE_PROFESSIONAL_ID=pri_...");
    console.error("NEXT_PUBLIC_PADDLE_CREATOR_ID=pri_...");
  }
  
  // Control checkout availability via environment variable
  // Set NEXT_PUBLIC_ENABLE_CHECKOUT=true to enable checkout buttons
  // Default: false (disabled) for production safety
  const checkoutEnabled = process.env.NEXT_PUBLIC_ENABLE_CHECKOUT === "true";

  return (
    <div className="px-6 md:px-10 py-16 max-w-6xl mx-auto text-center">

      {/* HERO SECTION */}
      <div className="max-w-3xl mx-auto mb-10">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-3">
          Fast, Private<br />
          Image Watermarking
        </h1>

        <p className="text-lg md:text-xl font-semibold text-black mb-2">
          Works on Mac & Windows
        </p>
        <p className="text-base text-gray-600 mb-6">
          Start with a free 7-day trial — no credit card required
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
            href="/download"
            className="px-6 py-3 bg-purple-600 text-white rounded-lg text-sm font-semibold hover:bg-purple-700 transition"
          >
            Download Free Trial
          </a>

          <a
            href="#pricing"
            className="px-6 py-3 bg-white text-purple-600 border-2 border-purple-600 rounded-lg text-sm font-semibold hover:bg-purple-50 transition"
          >
            View Pricing
          </a>
        </div>

        {/* Video Demo - YouTube Embed */}
        <div className="flex justify-center mt-6 mb-20">
          <div 
            className="relative max-w-full rounded-2xl overflow-hidden shadow-2xl"
            style={{
              maxWidth: "650px",
              width: "100%",
              aspectRatio: "16/9"
            }}
          >
            <div className="relative w-full h-0 pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-2xl"
                src="https://www.youtube.com/embed/3hMy6DfHQZA"
                title="Watermark Wizard Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                  filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.25))",
                }}
              ></iframe>
            </div>
          </div>
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
            No menus, clutter, or complexity. Just drop your images in and start watermarking.
          </p>
        </div>

      </div>

      {/* -------------------------------------------------- */}

      {/* HOW IT WORKS */}
      <div className="mb-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Watermark your images in just 5 simple steps — all processing happens locally on your device.
        </p>
        
        <div className="grid md:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {[
            {
              step: "1",
              title: "Import Your Images",
              description: "Drag and drop your images or select a folder. Supports JPEG and PNG formats."
            },
            {
              step: "2",
              title: "Select Output Folder",
              description: "Choose where you want your watermarked images saved."
            },
            {
              step: "3",
              title: "Import Your Watermark",
              description: "Upload your watermark image (PNG with transparency works best)."
            },
            {
              step: "4",
              title: "Choose Settings",
              description: "Set position, size, opacity, and scale to match your style."
            },
            {
              step: "5",
              title: "Generate Watermarks",
              description: "Click generate and watch your images get watermarked instantly."
            }
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white border-2 border-purple-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-600 text-white text-xl font-bold mb-4 mx-auto">
                {item.step}
              </div>
              <h3 className="font-semibold text-lg mb-2 text-center">{item.title}</h3>
              <p className="text-sm text-gray-600 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* TRIAL CALLOUT */}
      <div className="mb-8 p-6 bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-2xl max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-2xl">🎁</span>
          <h3 className="text-xl font-bold text-purple-900">Try Before You Buy</h3>
        </div>
        <p className="text-gray-700 text-sm mb-3">
          Download Watermark Wizard and get started with a <strong>free 7-day trial</strong> — no credit card required.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-600">
          <div className="flex items-center gap-1">
            <span>✓</span> <span>7 days free</span>
          </div>
          <div className="flex items-center gap-1">
            <span>✓</span> <span>100 images included</span>
          </div>
          <div className="flex items-center gap-1">
            <span>✓</span> <span>All features unlocked</span>
          </div>
        </div>
        <div className="mt-4 text-center">
          <a
            href="/download"
            className="inline-block px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-semibold hover:bg-purple-700 transition"
          >
            Start Free Trial →
          </a>
        </div>
      </div>

      {/* PRICING */}
      <div id="pricing" className="mt-12 mb-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Pricing</h2>

        <p className="text-gray-600 text-sm mb-10">
          Start with a <strong>free 7-day trial</strong> (100 images included). 
          One purchase unlocks both macOS & Windows versions. 
          All prices in USD — converted to your local currency at checkout, with any taxes applied automatically.
        </p>
      </div>

      {/* PRICING CARDS */}
      <div className="grid gap-6 md:grid-cols-3 text-left">

        {/* ESSENTIAL LICENSE */}
        <div className="border rounded-2xl p-6 shadow-sm flex flex-col bg-white">
          <div className="flex items-center gap-2 mb-3">
            <Image src="/Apple-Logo.png" width={16} height={16} alt="Apple" />
            <Image src="/Windows-Logo.png" width={16} height={16} alt="Windows" style={{ height: 'auto' }} />
          </div>

          <h3 className="text-lg font-semibold mb-1">Essential License</h3>
          <p className="text-2xl font-bold">$14.99</p>
          <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
            90 days • auto-renews
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

          <div className="mt-auto">
            <BuyButton priceId={essentialId} disabled={!checkoutEnabled}>Choose Essential License</BuyButton>
          </div>
        </div>

        {/* PROFESSIONAL LICENSE — MOST POPULAR */}
        <div className="border-2 border-purple-600 rounded-2xl p-6 shadow-md flex flex-col bg-white relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-[11px] font-semibold px-3 py-1 rounded-full">
            MOST POPULAR
          </div>

          <div className="flex items-center gap-2 mb-3">
            <Image src="/Apple-Logo.png" width={16} height={16} alt="Apple" />
            <Image src="/Windows-Logo.png" width={16} height={16} alt="Windows" style={{ height: 'auto' }} />
          </div>

          <h3 className="text-lg font-semibold mb-1">Professional License</h3>
          <p className="text-2xl font-bold">$39.99</p>
          <p className="text-xs uppercase tracking-wide text-gray-500">
            365 days • auto-renews
          </p>
          <p className="text-xs text-green-700 font-medium mb-4">
            Save 33% vs Essential
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

          <div className="mt-auto">
            <BuyButton priceId={professionalId} disabled={!checkoutEnabled}>Choose Professional License</BuyButton>
          </div>
        </div>

        {/* CREATOR LICENSE */}
        <div className="border rounded-2xl p-6 shadow-sm flex flex-col bg-white relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white text-[11px] font-semibold px-3 py-1 rounded-full">
            NO SUBSCRIPTION
          </div>

          <div className="flex items-center gap-2 mb-3">
            <Image src="/Apple-Logo.png" width={16} height={16} alt="Apple" />
            <Image src="/Windows-Logo.png" width={16} height={16} alt="Windows" style={{ height: 'auto' }} />
          </div>

          <h3 className="text-lg font-semibold mb-1">Creator License</h3>
          <p className="text-2xl font-bold">$59.99</p>
          <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
            730 days of access
          </p>
          <p className="text-xs text-gray-500 mb-4">
            Pay once — access and updates for 2 full years. Does not auto-renew.
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

          <div className="mt-auto">
            <BuyButton priceId={creatorId} disabled={!checkoutEnabled}>Choose Creator License</BuyButton>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <p className="mt-10 text-xs text-gray-500 leading-relaxed max-w-xl mx-auto">
        Essential and Professional licenses auto-renew unless cancelled.
        The Creator License does not auto-renew.
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