export default function EulaPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">
        End User License Agreement (EULA)
      </h1>

      <p className="text-gray-700 mb-4">
        This End User License Agreement (“EULA”) is a legal agreement between you (“the user”)
        and the owner of Watermark Wizard (“we”, “us”). By installing or using Watermark Wizard
        (“the Software”), you agree to the terms of this EULA.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. License Grant</h2>
      <p className="text-gray-700 mb-4">
        Subject to an active plan or license, we grant you a non-exclusive, non-transferable
        license to install and use the Software on up to <strong>two devices</strong> in any
        combination of macOS and Windows that you own or control.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. Plan Types and Duration</h2>
      <p className="text-gray-700 mb-4">
        Your right to use the Software depends on the type of plan you have purchased:
      </p>
      <ul className="list-disc ml-6 text-gray-700 mb-4">
        <li>
          <strong>Monthly Subscription</strong> – You may use the Software while your monthly
          subscription is active and paid. The subscription renews automatically each month unless cancelled.
        </li>
        <li>
          <strong>Yearly Subscription</strong> – You may use the Software while your yearly
          subscription is active and paid. The subscription renews automatically every 12 months unless cancelled.
        </li>
        <li>
          <strong>2-Year Creator License</strong> – You may use the Software for 24 months from
          the date of purchase. This license is fixed-term and does not auto-renew.
        </li>
      </ul>
      <p className="text-gray-700 mb-4">
        When your subscription or license expires or is cancelled, your right to use the Software
        ends and you must stop using it.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. Permitted Use</h2>
      <p className="text-gray-700 mb-4">
        You may use the Software to add your logo or watermark to images you own or are licensed
        to use, for both personal and commercial projects, subject to any third-party rights in
        the images themselves.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. Restrictions</h2>
      <p className="text-gray-700 mb-4">
        You agree that you will not:
      </p>
      <ul className="list-disc ml-6 text-gray-700 mb-4">
        <li>Sell, rent, lease, sublicense or distribute the Software to others;</li>
        <li>Share your license key, activation details or download links with any other person;</li>
        <li>Install or use the Software on more than two devices at the same time under a single license;</li>
        <li>Reverse engineer, decompile, disassemble or attempt to access the source code, except where permitted by law;</li>
        <li>Bypass or interfere with any license, activation or security mechanisms.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">5. Ownership</h2>
      <p className="text-gray-700 mb-4">
        The Software is licensed, not sold. All intellectual property rights in and to the Software
        remain with us. This EULA does not grant you any ownership rights in the Software or its code.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">6. Image Processing and Privacy</h2>
      <p className="text-gray-700 mb-4">
        The Software processes images locally on your device. Images are not uploaded or stored
        on our servers. You are responsible for backing up your own files and for ensuring that
        you have the right to use any images you process with the Software.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">7. Updates</h2>
      <p className="text-gray-700 mb-4">
        We may provide updates, improvements or bug fixes for the Software from time to time.
        For subscription plans, updates are included while your subscription remains active.
        For the 2-Year Creator License, updates are included for the duration of the 24-month term.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">8. Termination</h2>
      <p className="text-gray-700 mb-4">
        This EULA is effective until terminated. It will automatically terminate if your subscription
        or 2-year license expires, or if you fail to comply with any of its terms. Upon termination,
        you must stop using the Software and uninstall it from your devices.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">9. Disclaimer of Warranties</h2>
      <p className="text-gray-700 mb-4">
        The Software is provided “as is” and “as available,” without warranty of any kind, either
        express or implied, including but not limited to implied warranties of merchantability,
        fitness for a particular purpose and non-infringement.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">10. Limitation of Liability</h2>
      <p className="text-gray-700 mb-4">
        To the maximum extent permitted by law, we are not liable for any indirect, incidental,
        special, consequential or punitive damages, or for any loss of data or profits, arising
        from your use of or inability to use the Software.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">11. Governing Law</h2>
      <p className="text-gray-700 mb-4">
        This EULA is governed by the laws of Australia. Any disputes arising from or relating to
        this EULA or the Software will be subject to the exclusive jurisdiction of the courts in Australia.
      </p>

      <p className="mt-8 text-gray-500 text-sm">
        Last updated: {new Date().getFullYear()}
      </p>
    </div>
  );
}