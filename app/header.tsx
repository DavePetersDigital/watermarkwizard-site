"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-6 px-6 border-b border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">

        {/* Logo + Name Centered */}
        <Link href="/" className="flex flex-col items-center gap-3">

          <Image
            src="/logo.png"
            alt="Watermark Wizard"
            width={96}   // <-- INCREASED (was 36)
            height={96}  // <-- INCREASED
            priority
          />

         <span className="text-4xl md:text-8xl font-bold leading-tight text-purple-700">
  		Watermark Wizard
		</span>

        </Link>

      </div>
    </header>
  );
}