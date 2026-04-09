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
      console.error("❌ Paddle token missing in props - check NEXT_PUBLIC_PADDLE_CLIENT_TOKEN environment variable");
      return;
    }

    // Validate token format
    if (token.length < 20) {
      console.error("❌ Paddle token appears to be too short or invalid. Token length:", token.length);
      console.error("Token value:", token);
      return;
    }

    // Verify token matches environment
    if (environment === "production" && token.startsWith("test_")) {
      console.error("❌ CRITICAL: Production environment but token starts with 'test_' - this is a sandbox token!");
      console.error("You need to use a production client token (starts with 'live_') in production");
      return;
    }
    if (environment === "sandbox" && token.startsWith("live_")) {
      console.warn("⚠️ WARNING: Sandbox environment but token starts with 'live_' - this is a production token!");
    }

    // Load Paddle script
    const script = document.createElement("script");
    script.src = "https://cdn.paddle.com/paddle/v2/paddle.js";
    script.async = true;

    script.onload = () => {
      if (!window.Paddle) {
        console.error("❌ Paddle failed to load from CDN");
        return;
      }

      // Set environment
      if (environment === "sandbox") {
        window.Paddle.Environment.set("sandbox");
      } else {
        // Explicitly set production (default, but being explicit)
        window.Paddle.Environment.set("production");
      }

      // Initialize Paddle (v2: use eventCallback — Checkout.on does not exist)
      try {
        window.Paddle.Initialize({
          token,
          eventCallback: (data: { name?: string; detail?: string; type?: string; code?: string }) => {
            if (
              data?.name === "checkout.error" ||
              data?.name === "checkout.payment.error"
            ) {
              console.error("Paddle checkout error:", data);
              window.dispatchEvent(
                new CustomEvent("paddle-checkout-error", { detail: data })
              );
            }
          },
        });

        console.log("✔️ Paddle initialized:", environment);
        console.log("Token prefix:", token.substring(0, 10) + "...");
        console.log("Token length:", token.length);
        
        // Verify initialization
        const currentEnv = window.Paddle.Environment?.get?.();
        console.log("Current Paddle environment:", currentEnv);
        
        if (currentEnv !== environment) {
          console.error("❌ Environment mismatch! Expected:", environment, "Got:", currentEnv);
        }
      } catch (err) {
        console.error("❌ Paddle initialization failed:", err);
        console.error("Token being used (first 20 chars):", token.substring(0, 20));
      }
    };

    script.onerror = () => {
      console.error("❌ Failed to load Paddle script from CDN");
    };

    document.body.appendChild(script);

    return () => {};
  }, [token, environment]);

  return null;
}