"use client";

import { useEffect } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
import BuyButton from "./components/BuyButton";
import Image from "next/image";

export default function Home() {
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
    <div className="px-6 md:px-10 py-16 max-w-6xl mx-auto text-center">
      {/* HERO SECTION - 2 Column Layout */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-2 max-w-2xl">
              Protect Your Images Before You Share Them Online
            </h1>

            <p className="text-lg md:text-xl font-semibold text-black mb-3">
              Fast, private image watermarking that runs locally on your computer — no uploads, no accounts.
            </p>

            <div className="flex justify-center md:justify-start mb-2 md:hidden">
              <a
                href="/download"
                className="px-6 py-3 bg-purple-600 text-white rounded-lg text-sm font-semibold hover:bg-purple-700 transition"
              >
                Download Free Trial
              </a>
            </div>

            <p className="text-sm text-gray-600 mb-2 md:hidden">
              Try free — you can test on 25 images before you buy — no credit card required
            </p>

            <div className="flex justify-center md:justify-start mb-0 md:hidden">
              <a
                href="#pricing"
                className="px-5 py-2.5 bg-white text-purple-500 border border-purple-300 rounded-lg text-xs font-medium hover:bg-purple-50 transition"
              >
                View pricing
              </a>
            </div>

            <div className="hidden md:flex md:flex-row md:flex-wrap md:justify-start gap-3 mb-2">
              <a
                href="/download"
                className="px-6 py-3 bg-purple-600 text-white rounded-lg text-sm font-semibold hover:bg-purple-700 transition"
              >
                Download Free Trial
              </a>

              <a
                href="#pricing"
                className="px-5 py-2.5 bg-white text-purple-500 border border-purple-300 rounded-lg text-xs font-medium hover:bg-purple-50 transition"
              >
                View pricing
              </a>
            </div>

            <p className="hidden md:block text-sm text-gray-600 mb-0">
              Try free — you can test on 25 images before you buy — no credit card required
            </p>
          </div>

          <div className="flex justify-center order-2 md:order-2">
            <div
              className="relative max-w-full rounded-2xl overflow-hidden shadow-2xl"
              style={{
                maxWidth: "100%",
                width: "100%",
                aspectRatio: "16/9",
              }}
            >
              <div className="relative w-full h-0 pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-2xl"
                  src="https://www.youtube.com/embed/NJMXFAR_r2s"
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
      </div>

      {/* FEATURES */}
      <div className="max-w-xl mx-auto py-10 mb-12">
        <div
          id="features"
          className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left"
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
              <CheckIcon className="h-4 w-4 text-gray-400 mt-0.5" />
              <span className="text-sm text-gray-600">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="mb-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Watermark your images in 5 simple steps.
        </p>

        <div className="grid md:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {[
            {
              step: "1",
              title: "Import Your Images",
              description: "Select your images or drag and drop an entire folder.",
            },
            {
              step: "2",
              title: "Select Output Folder",
              description: "Choose where you want your watermarked images saved.",
            },
            {
              step: "3",
              title: "Add Your Watermark",
              description: "Upload your watermark image (PNG with transparency works best).",
            },
            {
              step: "4",
              title: "Adjust Settings",
              description: "Set position, size, opacity, and scale to match your style.",
            },
            {
              step: "5",
              title: "Generate Watermarks",
              description: "Click generate and watch your images get watermarked instantly.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white border border-purple-50 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-600 text-white text-xl font-bold mb-4 mx-auto">
                {item.step}
              </div>
              <h3 className="font-semibold text-lg mb-2 text-center">{item.title}</h3>
              <p className="text-sm text-gray-600 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* TRY BEFORE YOU BUY */}
      <div className="mb-8 p-6 bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-2xl max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-2xl">🎁</span>
          <h3 className="text-xl font-bold text-purple-900">Try Before You Buy</h3>
        </div>
        <p className="text-gray-700 text-sm mb-3">
          Download Watermark Wizard and <strong>you can test on 25 images before you buy</strong> — no credit card required.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-600">
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
        <div className="mt-4 text-center">
          <a
            href="/download"
            className="inline-block px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-semibold hover:bg-purple-700 transition"
          >
            Download free →
          </a>
        </div>
      </div>

      {/* PRICING — single one-time card */}
      <div id="pricing" className="mt-12 mb-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Pricing</h2>

        <div className="text-gray-600 text-sm mb-10 max-w-2xl mx-auto space-y-2">
          <p>One purchase unlocks both macOS &amp; Windows versions.</p>
          <p className="font-bold text-gray-700">
            All prices in USD — converted to your local currency at checkout, with any taxes applied
            automatically.
          </p>
        </div>

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

            <h3 className="text-lg font-semibold mb-1">Watermark Wizard</h3>
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

      {/* WHY WATERMARK — moved to bottom */}
      <div className="max-w-xl mx-auto py-16 mt-8 border-t border-gray-200">
        <h2 className="text-lg md:text-xl font-semibold mb-4 text-center">
          Why watermark images before you post them?
        </h2>
        <div className="max-w-2xl mx-auto text-left">
          <div className="space-y-3 mb-3">
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 flex-shrink-0"></div>
              <span className="text-xs md:text-sm text-gray-700 leading-snug">
                Images shared online can be downloaded and reused instantly
              </span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 flex-shrink-0"></div>
              <span className="text-xs md:text-sm text-gray-700 leading-snug">
                A visible watermark discourages reposting and misrepresentation
              </span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 flex-shrink-0"></div>
              <span className="text-xs md:text-sm text-gray-700 leading-snug">
                It takes seconds — and saves problems later
              </span>
            </div>
          </div>
          <p className="text-xs md:text-sm text-gray-500 mt-2 text-center md:text-left">
            The best time to protect an image is before it goes public.
          </p>
        </div>
      </div>
    </div>
  );
}
