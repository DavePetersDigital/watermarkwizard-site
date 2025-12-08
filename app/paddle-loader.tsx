"use client";

import { useEffect } from "react";

export default function PaddleLoader() {
  useEffect(() => {
    const env =
      process.env.NEXT_PUBLIC_PADDLE_ENV === "production"
        ? "production"
        : "sandbox";

    const clientToken =
      env === "production"
        ? process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN
        : process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN_SANDBOX;

    if (!clientToken) {
      console.error("Missing Paddle Client Token");
      return;
    }

    // Create Paddle script tag
    const script = document.createElement("script");
    script.src = "https://cdn.paddle.com/paddle/paddle.billing.js";
    script.async = true;

    script.onload = () => {
      console.log("Paddle script loaded");
      (window as any).paddleReady = true;

      // At this point window.Paddle exists
      window.Paddle.Setup({
        environment: env,
        token: clientToken,
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}