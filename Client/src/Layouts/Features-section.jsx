import { ShieldCheck, Clock, CreditCard, BellRing } from "lucide-react";

export default function FeaturesSection() {
    const features = [
        {
            icon: <ShieldCheck className="w-8 h-8 text-violet-700" />,
            title: "Secure & Private",
            desc: "Your data stays with you. We ensure full encryption and privacy at every step."
        },
        {
            icon: <Clock className="w-8 h-8 text-violet-700" />,
            title: "Smart Reminders",
            desc: "We alert you before trials end so you’re never charged for something you forgot."
        },
        {
            icon: <CreditCard className="w-8 h-8 text-violet-700" />,
            title: "Track Subscriptions",
            desc: "Get a complete view of where your money goes every month—no hidden fees."
        },
        {
            icon: <BellRing className="w-8 h-8 text-violet-700" />,
            title: "Custom Alerts",
            desc: "Set personalized alerts for renewals, cancellations, and billing updates."
        }
    ];

    return (
        <section className="w-full bg-gray-50 py-20 px-6 md:px-12">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">
                    Powerful Features to Keep You in Control
                </h2>
                <p className="text-slate-600 text-lg mb-12">
                    Everything you need to manage your free trials and paid subscriptions—effortlessly.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 text-left"
                        >
                            <div className="mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold text-slate-800 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-slate-600 text-sm">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}