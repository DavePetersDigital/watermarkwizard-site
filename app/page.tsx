"use client";

import { useEffect } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import BuyButton from "./components/BuyButton";
import Image from "next/image";

const TRUST_PILLS = [
  "Mac & Windows",
  "Batch processing",
  "PNG transparency",
  "One-time purchase",
];

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
    <div className="px-6 md:px-10 py-12 md:py-16 max-w-6xl mx-auto text-center">
      {/* HERO */}
      <section className="max-w-6xl mx-auto mb-12 md:mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Left — copy */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1.5 text-sm font-medium text-green-900 mb-5">
              <span
                className="h-2 w-2 shrink-0 rounded-full bg-green-600"
                aria-hidden
              />
              Works offline — no uploads ever
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold leading-tight mb-4 text-gray-900">
              Watermark hundreds of images in seconds
            </h1>

            <p className="text-base md:text-lg text-gray-600 mb-6 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Batch-process your entire photo library privately on your computer. No cloud, no
              subscription, no waiting. One purchase — Mac and Windows.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start mb-4">
              <a
                href="/download"
                className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-lg text-sm font-semibold hover:bg-purple-700 transition shadow-sm"
              >
                Download free trial
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center px-5 py-3 bg-white text-purple-600 border-2 border-purple-300 rounded-lg text-sm font-semibold hover:bg-purple-50 transition"
              >
                View pricing — $29.99
              </a>
            </div>

            <p className="text-sm text-gray-500 mb-6">
              Try on 25 images free · No credit card · No account needed
            </p>

            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {TRUST_PILLS.map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm"
                >
                  <CheckIcon className="h-3.5 w-3.5 text-green-600 shrink-0" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Right — before / after visual */}
          <div className="w-full">
            <div className="rounded-2xl bg-gray-100 p-4 md:p-5 border border-gray-200/80">
              <div className="flex items-stretch gap-2 sm:gap-3">
                {/* Original */}
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-gray-600 mb-2 text-left">Original</p>
                  <div className="relative aspect-[4/3] w-full rounded-lg bg-gray-200 overflow-hidden border border-gray-300/80">
                    <Image
                      src="/original.jpg"
                      alt="Original example"
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 50vw, 100vw"
                      priority
                    />
                  </div>
                </div>

                <div className="flex shrink-0 items-center justify-center self-center pt-8">
                  <ArrowRightIcon className="h-7 w-7 text-gray-400" aria-hidden />
                </div>

                {/* Watermarked */}
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-gray-600 mb-2 text-left">Watermarked</p>
                  <div className="relative aspect-[4/3] w-full rounded-lg bg-gray-200 overflow-hidden border border-gray-300/80">
                    <Image
                      src="/watermarked.jpg"
                      alt="Watermarked example"
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
                {[
                  "100+ images/min",
                  "Select up to 25 different positions",
                  "One-time purchase",
                ].map((label) => (
                  <div
                    key={label}
                    className="rounded-xl bg-white border border-gray-200 px-2 py-3 text-center shadow-sm"
                  >
                    <p className="text-[11px] sm:text-xs font-bold text-gray-900 leading-tight">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="w-full max-w-4xl mx-auto mb-16 md:mb-20 text-center">
        <h2 className="text-lg font-semibold text-gray-700 mb-6">See it in action</h2>
        <div
          className="relative max-w-full rounded-2xl overflow-hidden shadow-2xl mx-auto"
          style={{ width: "100%", aspectRatio: "16/9" }}
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
            />
          </div>
        </div>
      </section>

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
          Download Watermark Wizard and <strong>you can test on 25 images before you buy</strong> — no
          credit card required.
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

      {/* PRICING */}
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
        This is a one-time purchase. Your license is valid for the term shown in your confirmation
        email. No recurring charges.
      </p>

      <div className="flex flex-col items-center mt-6 text-gray-400 text-xs">
        <div className="flex items-center gap-1">
          <span>🔒</span> Secure checkout
        </div>
        <div className="mt-1">Payments powered by Paddle</div>
      </div>

      {/* WHY WATERMARK */}
      <div className="max-w-xl mx-auto py-16 mt-8 border-t border-gray-200">
        <h2 className="text-lg md:text-xl font-semibold mb-4 text-center">
          Why watermark images before you post them?
        </h2>
        <div className="max-w-2xl mx-auto text-left">
          <div className="space-y-3 mb-3">
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 flex-shrink-0" />
              <span className="text-xs md:text-sm text-gray-700 leading-snug">
                Images shared online can be downloaded and reused instantly
              </span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 flex-shrink-0" />
              <span className="text-xs md:text-sm text-gray-700 leading-snug">
                A visible watermark discourages reposting and misrepresentation
              </span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 flex-shrink-0" />
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
