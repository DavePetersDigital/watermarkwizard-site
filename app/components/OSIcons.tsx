// app/components/OSIcons.tsx
import type { SVGProps } from "react";
import { Apple } from "lucide-react";

export function MacOSIcon(props: SVGProps<SVGSVGElement>) {
  // Just wrap the Lucide Apple icon so we can treat both icons consistently
  return <Apple {...props} />;
}

export function WindowsIcon(props: SVGProps<SVGSVGElement>) {
  // Windows 11 style four-square logo, using currentColor so we can tint it
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {/* Top-left */}
      <rect x="2" y="2" width="9" height="9" rx="0.8" fill="currentColor" />
      {/* Top-right */}
      <rect x="13" y="2" width="9" height="9" rx="0.8" fill="currentColor" />
      {/* Bottom-left */}
      <rect x="2" y="13" width="9" height="9" rx="0.8" fill="currentColor" />
      {/* Bottom-right */}
      <rect x="13" y="13" width="9" height="9" rx="0.8" fill="currentColor" />
    </svg>
  );
}