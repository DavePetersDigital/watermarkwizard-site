// app/pricing/page.tsx
import { CheckIcon } from '@heroicons/react/24/solid';

export default function Pricing() {
  return (
    <div className="px-6 md:px-10 py-16 max-w-5xl mx-auto text-center">

      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Simple, creator-friendly pricing
      </h1>
      <p className="text-gray-700 text-sm md:text-base mb-1">
        Fast, private watermarking for photographers, Etsy sellers, real estate agents and digital creators.
      </p>
      <p className="text-gray-500 text-xs md:text-sm mb-10">
        All prices in <span className="font-semibold">USD</span>. Currency conversion, tax handling and 
        secure payment processing are completed automatically at checkout.
      </p>

      {/* Feature list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14 text-left max-w-xl mx-auto">
        {[
          "Use on any combination of two devices (macOS or Windows)",
          "Lightning-fast processing — no image uploads",
          "Private — all watermarking happens locally on your device",
          "Batch processing support",
          "PNG transparency and high-resolution exports",
          "Clean, simple interface designed for speed"
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-2">
            <CheckIcon className="h-5 w-5 text-green-600 mt-0.5" />
            <span className="text-sm text-gray-700">{item}</span>
          </div>
        ))}
      </div>

      {/* Pricing grid */}
      <div className="grid gap-6 md:grid-cols-3 text-left">

        {/* Monthly plan */}
        <div className="border rounded-2xl p-6 shadow-sm flex flex-col bg-white">
          <h2 className="text-lg font-semibold mb-1">Monthly</h2>
          <p className="text-2xl font-bold">$4.99</p>
          <p className="text-xs uppercase tracking-wide text-gray-500 mb-4">
            per month • auto-renews
          </p>

          <p className="text-sm text-gray-700 mb-4">
            Best if you want to try Watermark Wizard with zero commitment.
          </p>

          <div className="space-y-2 mb-6">
            {[
              "Full access to all features",
              "Use on any 2 devices",
              "Local, private processing (no uploads)",
              "Updates included while active"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckIcon className="h-5 w-5 text-green-600 mt-0.5" />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <button className="mt-auto w-full px-4 py-2.5 rounded-lg text-sm font-semibold bg-purple-600 text-white hover:bg-purple-700 transition">
            Choose Monthly
          </button>
        </div>

        {/* Yearly plan — Most Popular */}
        <div className="border-2 border-purple-600 rounded-2xl p-6 shadow-md flex flex-col bg-white relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-[11px] font-semibold px-3 py-1 rounded-full">
            MOST POPULAR
          </div>

          <h2 className="text-lg font-semibold mb-1">Yearly</h2>
          <p className="text-2xl font-bold">$29.99</p>
          <p className="text-xs uppercase tracking-wide text-gray-500">
            per year • auto-renews
          </p>
          <p className="text-xs text-green-700 font-medium mb-4">
            Save over 50% vs monthly
          </p>

          <p className="text-sm text-gray-700 mb-4">
            Ideal for busy creators who watermark images every week.
          </p>

          <div className="space-y-2 mb-6">
            {[
              "Full access to all features",
              "Use on any 2 devices",
              "Local, private processing (no uploads)",
              "All updates for 12 months",
              "Best value for regular use"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckIcon className="h-5 w-5 text-green-600 mt-0.5" />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <button className="mt-auto w-full px-4 py-2.5 rounded-lg text-sm font-semibold bg-purple-600 text-white hover:bg-purple-700 transition">
            Choose Yearly
          </button>
        </div>

        {/* 2-Year Creator License — No Subscription */}
        <div className="border rounded-2xl p-6 shadow-sm flex flex-col bg-white relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white text-[11px] font-semibold px-3 py-1 rounded-full">
            NO SUBSCRIPTION
          </div>

          <h2 className="text-lg font-semibold mb-1">2-Year Creator License</h2>
          <p className="text-2xl font-bold">$59.99</p>
          <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
            24 months of access
          </p>
          <p className="text-xs text-gray-500 mb-4">
            Pay once — access and updates for 2 full years.
          </p>

          <p className="text-sm text-gray-700 mb-4">
            Perfect if you dislike subscriptions but want long-term access.
          </p>

          <div className="space-y-2 mb-6">
            {[
              "Full access for 24 months",
              "Use on any 2 devices (Mac/Win)",
              "Local, private processing (no uploads)",
              "Updates included for the entire term",
              "No auto-renewal"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckIcon className="h-5 w-5 text-green-600 mt-0.5" />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <button className="mt-auto w-full px-4 py-2.5 rounded-lg text-sm font-semibold bg-purple-600 text-white hover:bg-purple-700 transition">
            Choose 2-Year License
          </button>
        </div>
      </div>

      <p className="mt-10 text-xs text-gray-500 leading-relaxed max-w-xl mx-auto">
        Monthly and yearly subscriptions auto-renew unless cancelled. 
        The 2-Year Creator License is a fixed-term license and does not auto-renew. 
        You may cancel a subscription at any time; access continues until the end of your billing period.
      </p>
    </div>
  );
}