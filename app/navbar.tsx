'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-10 py-4 border-b bg-white/80 backdrop-blur">
      {/* LEFT SIDE — LOGO + TEXT SHOULD LINK TO HOME */}
      <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition">
        <Image src="/logo.png" alt="Watermark Wizard logo" width={40} height={40} />
        <span className="text-xl font-semibold">Watermark Wizard</span>
      </Link>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-6">
        <Link href="/pricing" className="text-sm font-medium text-gray-700 hover:text-gray-900">
          Pricing
        </Link>
        <Link href="/download" className="text-sm font-medium text-gray-700 hover:text-gray-900">
          Download
        </Link>
        <button
          className="px-5 py-2 rounded-lg text-sm font-semibold text-white bg-purple-600 hover:bg-purple-700 transition-colors"
        >
          Buy Now
        </button>
      </div>
    </nav>
  );
}