"use client";

import Link from "next/link";

export default function Guide() {
  return (
    <div className="px-6 md:px-10 py-16 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-purple-600">
          Watermark Wizard – User Guide
        </h1>
        
        {/* PDF Download Button */}
        <div className="mb-8 p-4 bg-purple-50 border border-purple-200 rounded-lg">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="font-semibold text-gray-900 mb-1">Download PDF Version</h2>
              <p className="text-sm text-gray-600">
                Download the complete user guide as a PDF for offline reading or printing.
              </p>
            </div>
            <a
              href="/WatermarkWizard-UserGuide.pdf"
              className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors whitespace-nowrap"
              download="WatermarkWizard-UserGuide.pdf"
            >
              Download PDF
            </a>
          </div>
        </div>
      </div>

      {/* Guide Content */}
      <div className="prose prose-lg max-w-none">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Overview</h2>
          <p className="text-gray-700 mb-4">
            Watermark Wizard is a simple, offline-first application that allows you to add professional
            watermarks to images in seconds.
          </p>
          <p className="text-gray-700 mb-4">
            All processing happens locally on your computer — your images are never uploaded to our
            servers or sent to any third-party service.
          </p>
          <p className="text-gray-700 mb-4">
            This also applies if your images are stored in cloud-synced folders such as Google Drive,
            OneDrive, Dropbox, or similar services. These tools create local folders on your computer.
            Watermark Wizard only works with the local files in those folders and does not upload,
            sync, or transmit your images anywhere.
          </p>
          <p className="text-gray-700 mb-4 font-semibold">The app is designed for:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Online sellers (Etsy, eBay, Shopify)</li>
            <li>Photographers</li>
            <li>Real estate agents</li>
            <li>
              Anyone who wants to watermark images before sending them to clients or publish them
              online
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">System Requirements</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">macOS</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>macOS 12 or later</li>
                <li>Apple Silicon or Intel</li>
                <li>8GB RAM recommended</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Windows</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Windows 10 or later</li>
                <li>64-bit system</li>
                <li>8GB RAM recommended</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Download</h2>
          <p className="text-gray-700 mb-4">
            The latest version of the software can be downloaded from this location{" "}
            <Link href="/download" className="text-purple-600 hover:text-purple-700 font-semibold">
              https://www.watermarkwizard.app/download
            </Link>
            .
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Installation</h2>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Windows Installation</h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-4">
              <li>Download the ZIP file</li>
              <li>Extract the contents</li>
              <li>Double-click the .exe file to launch</li>
            </ol>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
              <p className="font-semibold text-yellow-900 mb-2">If Windows SmartScreen appears:</p>
              <ul className="list-disc list-inside text-yellow-800 space-y-1">
                <li>Click More info</li>
                <li>Click Run anyway</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">macOS Installation</h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-4">
              <li>Download the ZIP file</li>
              <li>Extract the contents</li>
              <li>Drag Watermark Wizard.app into the Applications folder</li>
              <li>Double-click to open</li>
            </ol>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
              <p className="font-semibold text-yellow-900 mb-2">If macOS blocks the app:</p>
              <ol className="list-decimal list-inside text-yellow-800 space-y-1 mb-3">
                <li>Go to System Settings → Privacy &amp; Security</li>
                <li>Scroll to Security</li>
                <li>Click Open Anyway next to Watermark Wizard</li>
                <li>Confirm when prompted</li>
              </ol>
              <p className="text-yellow-800 font-semibold mt-3">Alternative:</p>
              <ul className="list-disc list-inside text-yellow-800 space-y-1">
                <li>Right-click the app</li>
                <li>Select Open</li>
                <li>Click Open again</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Entering License Key</h2>
          <p className="text-gray-700 mb-4">
            By default, Watermark Wizard will work for 7 days before a license key is required. Ensure
            you have an internet connection during activation.
          </p>
          <ol className="list-decimal list-inside space-y-3 text-gray-700">
            <li>Open Watermark Wizard</li>
            <li>
              Click Help &gt; Enter/Change License Key
            </li>
            <li>Enter your license key in the box and click upgrade</li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">License Verification</h2>
          <p className="text-gray-700 mb-4">
            Watermark Wizard processes all images locally on your device. Your images are never
            uploaded, transmitted, or stored on our servers.
          </p>
          <p className="text-gray-700 mb-4">
            To activate your license, the application makes a brief, secure connection to our license
            server. This connection is used only to verify that your license key is valid. It is not
            used for image processing or data collection.
          </p>
          <p className="text-gray-700 mb-4">
            Once your license has been successfully verified, the application will continue to operate
            normally.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Firewall or Security Software</h2>
          <p className="text-gray-700 mb-4">
            In some cases, firewall or antivirus software may block the connection required for license
            verification.
          </p>
          <p className="text-gray-700 mb-4 font-semibold">If you experience issues activating your license:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Ensure Watermark Wizard is allowed to access the internet</li>
            <li>Check your firewall or antivirus settings for blocked applications</li>
            <li>Temporarily allow network access during activation if needed</li>
          </ul>
          <p className="text-gray-700 mb-4">
            If problems persist, refer to the{" "}
            <Link href="/privacy" className="text-purple-600 hover:text-purple-700 font-semibold">
              Privacy Policy
            </Link>{" "}
            or contact support.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Main Application Sections</h2>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Input</h3>
            <p className="text-gray-700 mb-4">
              Click Browse and select images from your device or drag and drop images or folders in the
              input box.
            </p>
            <p className="text-gray-700 mb-4">
              Images can be deleted individually by hovering over the image and clicking the &quot;x&quot; in
              the top right corner. Alternatively, all images can be removed by clicking Clear All
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Output</h3>
            <p className="text-gray-700 mb-4">
              If you wish to save the watermarked version in the same folder as the original then leave
              this box ticked. If you wish the watermarked copy to be in a different folder then untick
              this box, next to output folder box click browse and select a location where the
              watermarked files should be saved.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Watermark Library</h3>
            <p className="text-gray-700 mb-4">
              This is where you can save and select your watermarks. To populate either drag and drop
              your watermark file into the box or click Browse and select your watermark image from your
              device. Watermarks can be renamed by clicking on the pencil icon (this is for reference
              only and will not show on the watermark image). Click on the &quot;x&quot; in the top right of
              the watermark to remove it.
            </p>
            <p className="text-gray-700 mb-4">
              Select a watermark file by clicking it, the selected watermark (the one that will appear on
              your images) will have a blue border.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
              <p className="text-blue-900">
                <strong>Note:</strong> If your Watermark image has a transparent background then in this
                box it will show with a grey background for preview purposes, this helps with
                watermarks that are white in colour, the exported image will keep the transparent
                background
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Watermark Position</h3>
            <p className="text-gray-700 mb-4">
              Click the box relevant to where you want the watermark to appear on your image, multiple
              positions can be selected
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Settings</h3>
            <div className="space-y-4">
              <p className="text-gray-700 mb-2">
                <strong>Scale</strong> – Controls the maximum width of the image that the watermark will
                use, the default (and maximum) is 15% this represents a reasonable size watermark but
                can be reduced.
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Opacity</strong> – Controls how visible the watermark is. A higher value makes
                the watermark more solid and visible, while a lower value makes it more transparent.
              </p>
              <ul className="list-disc list-inside text-gray-600 ml-4 space-y-1">
                <li>0% – Watermark is invisible</li>
                <li>100% – Watermark is fully visible</li>
              </ul>
              <p className="text-gray-700 mb-2">
                <strong>Centre Size Multiplier</strong> – Controls the size of the image if the center
                position is selected, the maximum is 2.00
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Filename Suffix</strong> – Controls what the watermark file will be called, the
                watermarked file will be created using the existing file name suffixed with whatever is
                entered into this box
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Start Watermarking</h2>
          <p className="text-gray-700 mb-4">
            This will watermark your images, progress will be shown in the progress bar, click stop to
            stop the process
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Troubleshooting</h2>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-gray-900 mb-2">macOS app won&apos;t open:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Follow Privacy &amp; Security steps</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-2">Watermark too strong:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Reduce opacity or size</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-2">License issues:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>Check internet connections</li>
                <li>Re-copy license key</li>
                <li>Restart app</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Support</h2>
          <p className="text-gray-700 mb-4">
            Email{" "}
            <a
              href="mailto:support@davepetersdigital.com"
              className="text-purple-600 hover:text-purple-700 font-semibold"
            >
              support@davepetersdigital.com
            </a>{" "}
            with:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Operating system</li>
            <li>Short issue description</li>
          </ul>
        </section>
      </div>

      {/* Quick Links */}
      <div className="mt-12 pt-8 border-t">
        <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/download"
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Download App
          </Link>
          <Link
            href="/pricing"
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            View Pricing
          </Link>
          <Link
            href="/"
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
