import React,{useState} from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
export default function Login(){
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const {login,error,isPending} = useLogin()
    const handleSubmit  = (e)=>{
        e.preventDefault()
        login(email,password)
    }
    return (
        <main className="flex lg:h-[100vh] bg-blue-300" onSubmit={handleSubmit}>
            <div className="w-full lg:w-[60%] p-8 md:p-14 flex items-center justify-center lg:justify-start">
                <div className="p-8 w-[600px]">
                    <h1 className="text-6xl font-semibold">Login</h1>
                    <p className="mt-6 ml-1">
                        Don't have an account ?{" "}
                        <Link to='/signup' className="underline hover:text-blue-400 cursor-pointer">
                            Sign Up
                        </Link>
                    </p>

                   

                <form onSubmit={(e)=>e.preventDefault()}>
                    <div className="mt-10 pl-1 flex flex-col">
                        <label className="text-left">Email</label>
                        <input
                            type="text"
                            required
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                        />
                    </div>
                    <div className="mt-10 pl-1 flex flex-col">
                        <label className="text-left">Password</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                        />
                    </div>
                    <button className="bg-black text-white w-44 py-4 mt-10 rounded-full transition-transform hover:bg-black/[0.8] active:scale-90" >
                        Sign in
                    </button>
                </form>
                </div>
            </div>
            <div
                className="w-[40%] bg-slate-400 bg-cover bg-right-top hidden lg:block"
                style={{
                    backgroundImage: "url('/login-banner.jpg')",
                }}
            ></div>
        </main>
    );
};
