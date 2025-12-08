// app/components/Windows11Icon.tsx
"use client";

import Image from "next/image";

export default function Windows11Icon({ size = 20 }: { size?: number }) {
  return (
    <Image
      src="/windows11.png"
      alt="Windows 11"
      width={size}
      height={size}
      priority
      className="inline-block"
    />
  );
}