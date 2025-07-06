import { FaArrowRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import AuthModal from "./Auth-modal.jsx";
import { supabase } from "../assets/supabase.js";
import { useNavigate } from "react-router-dom";

export default function NavBar(){
    const [showAuthModal, setShowAuthModal] = useState(false);
    const navigate = useNavigate();
    const toggleModal = () => {
        setShowAuthModal(prev => !prev);
    }

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

    return(
        <>
            <nav className="w-full h-fit flex justify-between items-center p-5">
                <h1 className="md:text-5xl text-3xl font-bold text-slate-700">SwiftBill</h1>

                <ul className="hidden md:flex flex-row gap-5 items-center text-2xl font-semibold text-slate-800">
                    <li>Pricing</li>
                    <li>Dashboard</li>
                    <li>Contact us</li>
                </ul>

                <button className="flex flex-row items-center gap-3 md:text-2xl text-xl font-semibold text-slate-700 underline hover:no-underline" onClick={toggleModal}>login<FaArrowRight/></button>
                {
                    showAuthModal&&
                    <AuthModal onClose={toggleModal}/>

                }
            </nav>
        </>
    )
}