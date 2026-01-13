"use client";

import Image from "next/image";

export default function Download() {
  return (
    <div className="px-6 md:px-10 py-16 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Download Watermark Wizard</h1>
      <p className="mb-2 text-center text-gray-600">
        Choose your operating system.
      </p>
      <p className="mb-8 text-center text-sm text-gray-500">
        Your license allows activation on any combination of 2 devices: 2 Mac, 2 Windows, or 1 Mac and 1 Windows.
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        {/* macOS Download */}
        <div className="border-2 border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Image src="/Apple-Logo.png" width={48} height={48} alt="Apple" />
            <h2 className="text-2xl font-semibold">macOS</h2>
          </div>
          <p className="text-sm text-gray-600 mb-6 text-center">
            For Mac computers running macOS 10.15 or later
          </p>
          <div className="mt-auto">
            <a
              href="https://github.com/DavePetersDigital/Watermarkwizard-releases/releases/download/v1.0.1/WatermarkWizard-mac.zip"
              className="block w-full px-6 py-3 bg-purple-600 text-white rounded-lg text-center font-semibold hover:bg-purple-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download for Mac
            </a>
          </div>
        </div>

        {/* Windows Download */}
        <div className="border-2 border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Image src="/Windows-Logo.png" width={48} height={48} alt="Windows" />
            <h2 className="text-2xl font-semibold">Windows</h2>
          </div>
          <p className="text-sm text-gray-600 mb-6 text-center">
            For Windows 10 and Windows 11
          </p>
          <div className="mt-auto">
            <a
              href="https://github.com/DavePetersDigital/Watermarkwizard-releases/releases/download/v1.0.1/WatermarkWizard-windows.zip"
              className="block w-full px-6 py-3 bg-purple-600 text-white rounded-lg text-center font-semibold hover:bg-purple-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download for Windows
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
