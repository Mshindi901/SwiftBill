import NavBar from "./Nav-bar.jsx";
import { useEffect, useState } from "react";
import AuthModal from "./Auth-modal.jsx";
import { supabase } from "../assets/supabase.js";
import { useNavigate } from "react-router-dom";
import PremiumModal from "./premium-package-modal.jsx";

export default function HeroSection() {
    const [showAuthModal, setShowAuthModal] = useState(false);
    const [showPremiumModal, setShowPremiumModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const checkUser = async () => {
            const { data, error } = await supabase.auth.getUser();
            if (data?.user) {
            navigate("/dashboard");
            } else {
                console.error(error.message);
            }
        };
        checkUser();
    },[navigate])

    const handleShowAuthModal = () => {
        setShowAuthModal(prev => !prev);
    }   
    
    const handleShowPremiumModal = () => {
        setShowPremiumModal(prev => !prev);
    }
        /*
            const Apps = [
                {
                    "category": "Streaming & Entertainment",
                    "apps": [
                    {
                        "name": "Amazon Prime Video",
                        "trialDuration": "30 days",
                        "imageUrl": "https://icon2.cleanpng.com/lnd/20241122/xq/a0ef7ddce1e39ed793d9dde4e5b3bd.webp"
                    },
                    {
                        "name": "Hulu",
                        "trialDuration": "30 days",
                        "imageUrl": "https://icon2.cleanpng.com/lnd/20241222/vz/4e6ac2313f01bdc603a765af1af255.webp"
                    }
                    ]
                },
                {
                    "category": "Music & Audio",
                    "apps": [
                    {
                        "name": "Spotify Premium",
                        "trialDuration": "1 month",
                        "imageUrl": "https://icon2.cleanpng.com/20181001/yii/kisspng-computer-icons-portable-network-graphics-clip-art-the-kentucky-grasshoppers-veenhoop-festival-1713928039881.webp"
                    },
                    {
                        "name": "Apple Music",
                        "trialDuration": "1 month",
                        "imageUrl": "https://icon2.cleanpng.com/20180425/yfq/avtrhh0yt.webp"
                    }
                    ]
                },
                {
                    "category": "Software & Productivity",
                    "apps": [
                    {
                        "name": "Microsoft 365",
                        "trialDuration": "1 month",
                        "imageUrl": "https://icon2.cleanpng.com/20180822/wis/20e0dda15bd87a659accee85c2eb36e7.webp"
                    },
                    {
                        "name": "Canva Pro",
                        "trialDuration": "30 days",
                        "imageUrl": "https://icon2.cleanpng.com/lnd/20250226/hu/f099bf37793bd2a9b12bc561626cd6.webp"
                    }
                    ]
                },
                {
                    "category": "Security & VPN",
                    "apps": [
                    {
                        "name": "NordVPN",
                        "trialDuration": "7 days (mobile only)",
                        "imageUrl": "https://icon2.cleanpng.com/20181206/cfh/kisspng-nordvpn-virtual-private-network-openvpn-private-in-wizcase-vpn-1713912753616.webp"
                    },
                    {
                        "name": "ExpressVPN",
                        "trialDuration": "7 days (mobile) / 30-day money-back",
                        "imageUrl": "https://icon2.cleanpng.com/20180613/xrg/aa738sihu.webp"
                    }
                    ]
                },
            ]
        */
    

   



    return (
        <>
            <NavBar />
            <section className="w-full min-h-screen flex flex-col justify-center items-center px-6 md:px-0 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-300">
                <div className="md:w-3/4 max-w-4xl w-full flex flex-col gap-6 text-center items-center">
                    <h1 className="text-slate-900 font-extrabold text-4xl md:text-6xl leading-tight drop-shadow-md">
                        Manage Your Free Trials. <br className="hidden md:block" /> Protect Your Money.
                    </h1>
                    <p className="text-violet-800 text-lg md:text-2xl font-medium max-w-xl">
                        Swift Bill helps you track all your free trials and subscriptions so you only pay for what you truly love.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 mt-6 w-full md:w-auto justify-center">
                        <button className="px-6 py-3 rounded-xl bg-violet-700 text-white font-semibold shadow hover:bg-violet-800 transition-all duration-300" onClick={handleShowAuthModal}>
                            Start Free Trial
                        </button>
                        <button className="px-6 py-3 rounded-xl bg-slate-800 text-white font-semibold shadow hover:bg-slate-900 transition-all duration-300">
                            Explore Premium
                        </button>
                    </div>
                </div>

                {
                    showAuthModal&&
                    <AuthModal onClose={handleShowAuthModal}/>
                }

                {
                    showPremiumModal&&
                    <PremiumModal onClose={handleShowPremiumModal}/>
                }

                {
                    /*
                        <div className="w-fit h-fit p-5 flex flex-col gap-5">
                            <h1 className="md:text-3xl text-lg font-semibold text-slate-800 mb-6 text-center">Most Popular Apps</h1>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {Apps.flatMap(category => category.apps).map((app, index) => (
                                    <div
                                    key={index}
                                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-4 flex flex-col items-center text-center gap-2"
                                    >
                                    <img
                                        src={app.imageUrl || "/placeholder.png"}
                                        alt={app.name}
                                        className="w-12 h-12 rounded-full object-center"
                                    />
                                    <h3 className="text-md font-semibold text-slate-800">{app.name}</h3>
                                    <p className="text-sm text-slate-600">{app.trialDuration}</p>
                                    <button className="w-full py-3 bg-slate-700 text-white rounded-3xl">Track Trial</button>
                                    </div>
                                ))}
                            </div>
                        </div>

                    */
                }
                
            </section>
        </>
    );
}
