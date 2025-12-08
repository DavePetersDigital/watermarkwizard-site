export default function Download() {
  return (
    <div className="px-6 md:px-10 py-16">
      <h1 className="text-3xl font-bold mb-4">Download Watermark Wizard</h1>
      <p className="mb-6">
        This ZIP contains both the Mac and Windows versions. Your license covers activation on two devices.
      </p>
      <a
        href="https://github.com/placeholder/watermarkwizard/releases/latest/download/WatermarkWizard.zip"
        className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors"
      >
        Download ZIP
      </a>
    </div>
  );
}
