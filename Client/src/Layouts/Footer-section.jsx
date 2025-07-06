export default function Footer() {
    return (
        <>
            <footer className="w-full bg-slate-800 text-white py-10 px-6 md:px-12 mt-20">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h2 className="text-xl font-bold mb-2">Swift Bill</h2>
                        <p className="text-sm text-slate-300">
                            Manage your free trials, track subscriptions, and protect your wallet.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-2">Quick Links</h3>
                        <ul className="space-y-1 text-sm text-slate-300">
                            <li><a href="#features" className="hover:text-white">Features</a></li>
                            <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
                            <li><a href="#apps" className="hover:text-white">Popular Apps</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-2">Contact</h3>
                        <p className="text-sm text-slate-300">support@swiftbill.app</p>
                        <p className="text-sm text-slate-300">Nairobi, Kenya</p>
                    </div>
                </div>

            <div className="mt-10 border-t border-slate-700 pt-4 text-center text-xs text-slate-400">
                &copy; {new Date().getFullYear()} Swift Bill. All rights reserved.
            </div>
            </footer>
        </>
    )
}
// This code defines a footer section for a web application using React and Tailwind CSS.
// It includes a brief description of the app, quick links to different sections, and contact information