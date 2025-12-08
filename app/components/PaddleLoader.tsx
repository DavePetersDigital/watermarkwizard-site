// app/components/PaddleLoader.tsx
"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Paddle?: any;
  }
}

export default function PaddleLoader({
  token,
  environment,
}: {
  token: string;
  environment: "sandbox" | "production";
}) {
  useEffect(() => {
    if (!token) {
      console.error("Paddle token missing in props");
      return;
    }

    // Load Paddle script
    const script = document.createElement("script");
    script.src = "https://cdn.paddle.com/paddle/v2/paddle.js";
    script.async = true;

    script.onload = () => {
      if (!window.Paddle) {
        console.error("Paddle failed to load");
        return;
      }

      // Set environment
      if (environment === "sandbox") {
        window.Paddle.Environment.set("sandbox");
      }

      // Initialize Paddle
      try {
        window.Paddle.Initialize({
          token,
        });

        console.log("✔️ Paddle initialized:", environment);
      } catch (err) {
        console.error("Paddle initialization failed:", err);
      }
    };

    document.body.appendChild(script);

    return () => {};
  }, [token, environment]);

  return null;
}