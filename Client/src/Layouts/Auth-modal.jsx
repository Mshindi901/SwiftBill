import { X } from "lucide-react";
import { useState } from "react";
import {supabase} from '../assets/supabase.js'
import {useNavigate} from 'react-router-dom';
import {toast, ToastContainer, Bounce} from 'react-toastify'

export default function AuthModal({onClose}){
    const [showSignUp, setShowSignUp] = useState(false);
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState ('')

    const [newEmail, setNewEmail] = useState('')
    const [newName, setNewName] = useState('')
    const [newPassword, setNewPassword] = useState('');
    const navigate = useNavigate();

    const handleShowingSignUp = () => {
        setShowSignUp(prev => !prev);
    }

    const notify = () => {
        toast.info('Email Verification sent', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        });
    }

    const handleCreateAccountSubmit = async (e) => {
        e.preventDefault();
        const {data, error} = await supabase.auth.signUp({
            email: newEmail,
            password: newPassword,
            options: {data: {name: newName}}
        });
        if(error){console.error(error.message); return;} else {console.log(data.user); console.log('User Registered');};
        if(data?.user){
            await supabase.from("Users").insert({
                id: data.user.id,
                name: newName,
                email: newEmail,
            });
            notify();
            return;
        }
    }
    const handleLogin = async (e) => {
        e.preventDefault();
        const {data, error} = await supabase.auth.signInWithPassword({
            email: loginEmail,
            password: loginPassword
        });
        if(error){
            console.error(error.message);
            return;
        } else {
            console.log(data.user);
            localStorage.setItem('User', JSON.stringify(data.user));
            navigate('/dashboard');
            return;
        }
    }
    return (
        <>
            <div className="w-full min-h-screen flex justify-center items-center md:p-0 p-3 fixed inset-0 z-50 bg-black/50">

                {
                    !showSignUp&&
                    <div className="md:w-1/4 w-full h-fit p-5 rounded-3xl bg-slate-800 flex flex-col gap-5">
                        <div className="w-full h-fit flex flex-row justify-between px-4">
                            <div className="w-4/5 h-fit flex flex-col gap-3">
                                <h1 className="md:text-3xl text-xl font-bold text-slate-100">Login</h1>
                                <p className="text-sm text-slate-300">Welcome back! Please enter your details.</p>
                            </div>
                            <div className="w-1/5 h-fit flex justify-end items-start">
                                <button className="p-2 rounded-full text-red-500 hover:bg-red-500/10 transition-colors duration-200" onClick={onClose}>
                                    <X className="text-slate-400" size={20}/>
                                </button>
                            </div>    
                        </div>

                        <form action="" method="post" className="w-full h-fit flex flex-col gap-5 px-2 outline-none text-white" onSubmit={handleLogin}>
                            <input type="email" name="" id="" value={loginEmail} placeholder="Email Address" className="w-full py-3 border border-white rounded-3xl px-2" onChange={(e) => {setLoginEmail(e.target.value)}}/>
                            <input type="password" name="" id="" value={loginPassword} placeholder="Password" className="w-full py-3 border border-white rounded-3xl px-2" onChange={(e) => {setLoginPassword(e.target.value)}}/>
                            <button type="submit" className="w-full py-3 bg-slate-600 shadow rounded-3xl text-white" >Login</button>
                        </form>

                        <button className="w-full py-3 rounded-3xl bg-slate-400 text-white" onClick={handleShowingSignUp}>Create Account</button>
                    </div>
                }


                {
                    showSignUp&&
                    <div className="md:w-1/4 w-full h-fit p-5 rounded-3xl bg-slate-800 flex flex-col gap-5">
                        <div className="w-full h-fit flex flex-row justify-between px-4">
                            <div className="w-4/5 h-fit flex flex-col gap-3">
                                <h1 className="md:text-3xl text-xl font-bold text-slate-100">Create Account</h1>
                                <p className="text-sm text-slate-300">Welcome back! Please enter your details.</p>
                            </div>
                            <div className="w-1/5 h-fit flex justify-end items-start">
                                <button className="p-2 rounded-full text-red-500 hover:bg-red-500/10 transition-colors duration-200" onClick={onClose}> 
                                    <X className="text-slate-400" size={20}/>
                                </button>
                            </div>    
                        </div>

                        <form action="" method="post" className="w-full h-fit flex flex-col gap-5 px-2 outline-none text-white" onSubmit={handleCreateAccountSubmit}>
                            <input type="text" name="" id="" value={newName} placeholder="Name" className="w-full py-3 border border-white rounded-3xl px-2 text-white" onChange={(e) => {setNewName(e.target.value)}}/>
                            <input type="email" name="" id="" value={newEmail} placeholder="Email Address" className="w-full py-3 border border-white rounded-3xl px-2" onChange={(e) => {setNewEmail(e.target.value)}}/>
                            <input type="password" name="" id="" value={newPassword} placeholder="Password" className="w-full py-3 border border-white rounded-3xl px-2" onChange={(e) => {setNewPassword(e.target.value)}}/>
                            <button type="submit" className="w-full py-3 bg-slate-600 shadow rounded-3xl text-white">Create Account</button>
                        </form>

                        <button className="w-full py-3 rounded-3xl bg-slate-400 text-white" onClick={handleShowingSignUp}>Login</button>
                    </div>
                }
                <ToastContainer/>
            </div>
        </>
    )
}