// app/layout.tsx
import "./globals.css";
import Footer from "./footer";
import PaddleLoader from "./components/PaddleLoader";
import Header from "./header";

export const metadata = {
  title: "Watermark Wizard",
  description: "Fast, private image watermarking for Mac and Windows",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">

        {/* Load Paddle early */}
        <PaddleLoader
          token={process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN ?? ""}
          environment={
            process.env.NEXT_PUBLIC_PADDLE_ENV === "production"
              ? "production"
              : "sandbox"
          }
        />

        {/* Header with logo */}
        <Header />

        {/* Page content */}
        {children}

        {/* Footer */}
        <Footer />

      </body>
    </html>
  );
}