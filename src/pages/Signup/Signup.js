import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSignup } from "../../hooks/useSignup";
import Select from "react-select";
// import { FcGoogle } from "react-icons/fc";
const options = [
    { value: 'nitmeghalaya', label: 'NIT Meghalaya' },
    { value: 'nitsilchar', label: 'NIT Silchar' },
    { value: 'nitnagaland', label: 'NIT Nagaland'  },
    { value: 'nitmanipur', label: 'NIT Manipur' },
    { value: 'nitagartala', label: 'NIT Agartala' },
    { value: 'nitmizoram', label: 'Nit Mizoram' },
    { value: 'nitarunachalpradesh', label: 'NIT Arunachalpradesh' }
  ]
export default function Signup()  {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [thumbnail, setThumbnail] = useState(null)
    const [thumbnailError, setThumbnailError] = useState(null)
    const [err,setErr] = useState("")
    const [college,setCollege] = useState(null)
    const { signup, isPending, error } = useSignup()
    const [email,setEmail] = useState("")
    const handleFileChange = (e) => {
        setThumbnail(null)
        let selected = e.target.files[0]
        console.log(selected)
    
        if (!selected) {
          setThumbnailError('Please select a file')
          return
        }
        if (!selected.type.includes('image')) {
          setThumbnailError('Selected file must be an image')
          return
        }
        if (selected.size > 100000) {
          setThumbnailError('Image file size must be less than 100kb')
          return
        }
        
        setThumbnailError(null)
        setThumbnail(selected)
        console.log('thumbnail updated')
      }
      const handleSubmit = (e) => {
        e.preventDefault()
        if(college==null){

            setErr("dude select a damn college")
            return;
        }
        // console.log(email,password,username,thumbnail,college.value)
        signup(email, password, username, thumbnail,college.value)
      }
   return(
        <main className="flex lg:h-[100vh] bg-blue-400">
            <div className="w-full lg:w-[60%] p-8 md:p-14 flex items-center justify-center lg:justify-start">
                <div className="p-8 w-[600px]">
                    <h1 className="text-6xl font-semibold">Sign Up</h1>
                    <p className="mt-6 ml-1">
                        Already have an account ?{" "}
                        <Link to="/login" className="und underline">Login </Link>
                    </p>
                <form onSubmit={handleSubmit}>
                    <div className="mt-10 pl-1 flex flex-col">
                        <label className="text-left">Username</label>
                        <input
                            type="text"
                            className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                            required
                            value={username}
                            onChange={(e)=>setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mt-10 pl-1 flex flex-col">
                        <label className="text-left">university</label>
                       <Select options={options} onChange={(option)=>setCollege(option)}/>
                    </div>
                    <div className="mt-10 pl-1 flex flex-col">
                        <label className="text-left">Email</label>
                        <input
                            type="email"
                            className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                            required
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mt-10 pl-1 flex flex-col">
                        <label className="text-left">Password</label>
                        <input
                            type="password"
                            className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                            required
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mt-10 pl-1 flex flex-col text-center">
                        <label className="text-left">Upload Profile Photo</label>
                        <input
                            type="file"
                            className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400 d-none"
                            required
                            onChange={handleFileChange}
                            // value={password}
                            // onChange={(e)=>setPassword(e.target.value)}
                        />
                        {thumbnailError&&<div>{thumbnailError}</div>}
                    </div>
                    {!isPending&&<button className="bg-black text-white w-44 py-4 mt-10 rounded-full transition-transform hover:bg-black/[0.8] active:scale-90" >
                        Sign Up
                    </button>}
                    {isPending&&<button className="bg-black text-white w-44 py-4 mt-10 rounded-full transition-transform hover:bg-black/[0.8] active:scale-90" >
                        Loading...
                    </button>}
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

// export default RegisterForm;