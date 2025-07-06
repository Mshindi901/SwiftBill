import { Check } from "lucide-react";

export default function PricingSection() {
  const FreeFeatures = [
    "Track up to 5 Subscriptions",
    "Basic Notifications",
    "Access to Basic Analytics",
    "Community Support",
    "No Credit Card Required",
  ];

  const PremiumFeatures = [
    "Track Unlimited Subscriptions",
    "Advanced Notifications",
    "Premium Analytics Dashboard",
    "Priority Support",
    "Exclusive Features & Updates",
    "Early Access to New Tools",
    "Custom Billing Alerts",
  ];

  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 flex flex-col items-center gap-6">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-800 text-center">
        Simple, Transparent Pricing
      </h1>
      <p className="text-slate-600 text-center md:text-xl text-lg max-w-2xl">
        Whether you're just starting out or need full control, we've got a plan that fits your lifestyle.
      </p>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* Free Plan */}
        <div className="border border-slate-300 bg-white rounded-2xl p-6 shadow hover:shadow-lg transition-all flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Free</h2>
            <p className="text-slate-600 mb-4">Perfect for individuals trying out the platform.</p>
            <ul className="flex flex-col gap-3 text-slate-700">
              {FreeFeatures.map((feature, index) => (
                <li className="flex items-start gap-2" key={index}>
                  <Check className="text-green-600 mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <button className="mt-6 w-full py-3 bg-slate-800 text-white font-semibold rounded-xl hover:bg-slate-900 transition">
            Get Started Free
          </button>
        </div>

        {/* Premium Plan */}
        <div className="border-2 border-violet-700 bg-gradient-to-br from-violet-700 to-violet-600 text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Premium</h2>
            <p className="text-violet-200 mb-4">For users who want full control & automation.</p>
            <h3 className="text-4xl font-bold mb-6">Ksh 300 / $2</h3>
            <ul className="flex flex-col gap-3 text-violet-100">
              {PremiumFeatures.map((feature, index) => (
                <li className="flex items-start gap-2" key={index}>
                  <Check className="mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <button className="mt-6 w-full py-3 bg-white text-violet-700 font-semibold rounded-xl hover:bg-violet-100 transition">
            Upgrade to Premium
          </button>
        </div>
      </div>
    </section>
  );
}
