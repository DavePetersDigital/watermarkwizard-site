// app/components/OSBadge.tsx
"use client";

import { Apple, Monitor } from "lucide-react";

export default function OSBadge() {
  return (
    <div className="flex justify-center mt-6">
      <div
        className="
          flex items-center gap-3 
          px-4 py-2 
          rounded-full 
          bg-gradient-to-r from-purple-600 to-indigo-600
          text-white shadow-md
        "
      >
        {/* Apple Icon */}
        <div className="flex items-center gap-1">
          <Apple className="h-4 w-4" />
          <span className="text-sm font-medium">macOS</span>
        </div>

        <span className="text-white/40">•</span>

        {/* Windows Icon */}
        <div className="flex items-center gap-1">
          <Monitor className="h-4 w-4" />
          <span className="text-sm font-medium">Windows</span>
        </div>
      </div>
    </div>
  );
}