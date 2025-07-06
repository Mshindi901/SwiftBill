import { X } from "lucide-react";

export default function PremiumModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 blur-md">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/...")`, // your full base64 here
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>

      {/* Modal Content */}
      <div className="relative z-10 w-[90%] max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden text-gray-900">
        <div className="p-6 sm:p-10 bg-opacity-90 backdrop-blur-md">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white hover:text-red-500 transition"
            onClick={onClose}
          >
            <X size={28} />
          </button>

          {/* Header */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-violet-600 mb-4 text-center">
            Unlock Premium – Take Full Control 🔓✨
          </h2>
          <p className="text-center text-gray-100 max-w-xl mx-auto mb-6">
            Go beyond free trials. Track, manage, and never miss a renewal. Premium gives you full power, visibility, and peace of mind.
          </p>

          {/* Features */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-white font-medium">
            <li className="flex items-center gap-3">
              ✅ Unlimited App Tracking
            </li>
            <li className="flex items-center gap-3">
              ✅ Smart Reminders Before Expiry
            </li>
            <li className="flex items-center gap-3">
              ✅ Calendar & Sync Support
            </li>
            <li className="flex items-center gap-3">
              ✅ Early Renewal Alerts
            </li>
            <li className="flex items-center gap-3">
              ✅ Export Data to PDF or Excel
            </li>
            <li className="flex items-center gap-3">
              ✅ Priority Support & Backup
            </li>
          </ul>

          {/* CTA */}
          <div className="flex justify-center">
            <button className="px-6 py-3 bg-violet-700 text-white text-lg font-semibold rounded-xl hover:bg-violet-800 transition">
              Upgrade to Premium 🚀
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
