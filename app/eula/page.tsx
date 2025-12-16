export default function EulaPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">
        End User License Agreement (EULA)
      </h1>

      <p className="text-gray-700 mb-4">
        This End User License Agreement ("EULA") is a legal agreement between you ("the user")
        and the owner of Watermark Wizard ("we", "us"). By installing or using Watermark Wizard
        ("the Software"), you agree to the terms of this EULA.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. License Grant</h2>
      <p className="text-gray-700 mb-4">
        Watermark Wizard is licensed, not sold. During a free trial period, we grant you a limited, non-exclusive, non-transferable license to install and use the Software on one device.
      </p>
      <p className="text-gray-700 mb-4">
        With an active paid subscription, we grant you a non-exclusive, non-transferable license to install and use the Software on up to two devices in any combination of macOS and Windows that you own or control.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. License Duration</h2>
      <p className="text-gray-700 mb-4">
        Your right to use the Software is valid only while your trial or paid subscription is active. When your trial expires or your subscription ends or is cancelled, your right to use the Software automatically terminates.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. Permitted Use</h2>
      <p className="text-gray-700 mb-4">
        You may use the Software to add watermarks or logos to images that you own or are licensed to use, for both personal and commercial purposes, subject to any third-party rights in the images themselves.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. Restrictions</h2>
      <p className="text-gray-700 mb-4">
        You agree that you will not:
      </p>
      <ul className="list-disc ml-6 text-gray-700 mb-4">
        <li>Sell, rent, lease, sublicense or distribute the Software;</li>
        <li>Share license keys, activation details or access credentials;</li>
        <li>Use the Software on more devices than permitted by your license;</li>
        <li>Reverse engineer, decompile or attempt to access the source code, except where permitted by law;</li>
        <li>Bypass or interfere with license enforcement or security mechanisms.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">5. Ownership</h2>
      <p className="text-gray-700 mb-4">
        The Software is licensed, not sold. All intellectual property rights in and to the Software remain with us. This EULA does not grant you ownership rights in the Software or its code.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">6. Image Processing and Privacy</h2>
      <p className="text-gray-700 mb-4">
        The Software processes images locally on your device. Images are not uploaded or stored on our servers. You are responsible for backing up your files and ensuring you have rights to any images processed.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">7. Updates</h2>
      <p className="text-gray-700 mb-4">
        We may provide updates, improvements or bug fixes from time to time. Access to updates is provided while your trial or paid subscription remains active.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">8. Termination</h2>
      <p className="text-gray-700 mb-4">
        This EULA remains effective until terminated. It will terminate automatically if your trial or subscription expires or if you breach these terms. Upon termination, you must stop using and uninstall the Software.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">9. Payments</h2>
      <p className="text-gray-700 mb-4">
        Payments and refunds are handled by Paddle.com, which acts as our payment provider and merchant of record. We do not process or store payment card information.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">10. Disclaimer of Warranties</h2>
      <p className="text-gray-700 mb-4">
        The Software is provided "as is" and "as available," without warranties of any kind, express or implied.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">11. Limitation of Liability</h2>
      <p className="text-gray-700 mb-4">
        To the maximum extent permitted by law, we are not liable for indirect, incidental or consequential damages arising from use of the Software.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">12. Governing Law</h2>
      <p className="text-gray-700 mb-4">
        This EULA is governed by the laws of Australia, and disputes shall be subject to the jurisdiction of Australian courts.
      </p>

      <p className="mt-8 text-gray-500 text-sm">
        Last updated: {new Date().getFullYear()}
      </p>
    </div>
  );
}