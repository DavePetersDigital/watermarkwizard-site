import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t mt-16">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-8 flex flex-col items-center gap-3 text-sm text-gray-600">

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/terms"
            className="hover:text-gray-900 transition-colors"
          >
            Terms of Service
          </Link>
          <span className="text-gray-400">•</span>

          <Link
            href="/privacy"
            className="hover:text-gray-900 transition-colors"
          >
            Privacy Policy
          </Link>
          <span className="text-gray-400">•</span>

          <Link
            href="/refund"
            className="hover:text-gray-900 transition-colors"
          >
            Refund Policy
          </Link>
          <span className="text-gray-400">•</span>

          <Link
            href="/eula"
            className="hover:text-gray-900 transition-colors"
          >
            EULA
          </Link>
        </div>

        <div className="text-center">
          © {new Date().getFullYear()} Watermark Wizard. By Dave Peters Digital.
        </div>

      </div>
    </footer>
  );
}