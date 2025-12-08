"use client";

import { useEffect } from "react";

export default function PaddleInlineLoader() {
  useEffect(() => {
    // Create script element
    const script = document.createElement("script");
    script.src = "https://cdn.paddle.com/paddle/v2/paddle.js";
    script.async = true;

    script.onload = () => {
      console.log("Paddle v2 script loaded");

      const env =
        process.env.NEXT_PUBLIC_PADDLE_ENV === "production"
          ? "production"
          : "sandbox";

      const token = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN;

      if (!token) {
        console.error("Missing Paddle Client Token");
        return;
      }

      // Paddle API based on documentation
      window.Paddle.Environment.set(env);
      window.Paddle.Initialize({ token });

      console.log("Paddle initialized:", env);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
}