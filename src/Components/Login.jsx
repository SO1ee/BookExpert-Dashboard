import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { login } from "../utils/auth";
import "./Login.css"
import logo from "/BXP-Logo.webp"
export default function Login() {
    const [email, setEmail] = useState(null);
    const [pass, setPass] = useState(null);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleLogin = () => {
        const success = login(email, pass)
        
        if (success) {
            navigate("/dashboard");
        } else {
            setError("Invalid Credential")
        }
    };

    
    const handleEmail = (e) => { 
        setEmail(e.target.value)
    }
    const handlePass = (e) => {
        setPass(e.target.value)
    }

    return (
        <>  
            <div className=" main flex items-center justify-center h-screen">
                <div className="w-[80vw]  h-[80vh] flex">
                    <div className=" w-full lg:w-1/2 flex items-center bg-blue-900 justify-center border-r border-white rounded-lg">
                        <div>
                            <h2 className="text-white text-xl">Dashboard</h2>
                            <p className="text-gray-300">Enter your credential to login to the portal</p><br/>
                            <label className="text-gray-400">Email:</label><br/>
                            <input type="email" id="email" name="email" className="border-0 border-b-2 border-white focus:outline-none" onChange={(e)=>handleEmail(e)}/><br/>
                            <label className="text-gray-400">Password:</label><br/>
                            <input type="password" id="password" name="password" className="border-b-2 border-white focus:outline-none" onChange={(e) => handlePass(e)} /><br />
                            {error && (<p className="text-red-500 text-sm">{error}</p>)}

                            <button
                                className="btn-primary w-full"
                                onClick={handleLogin}
                            >
                                Login
                            </button>
                        </div>
                        
                    </div>
                    <div className="w-1/2 flex items-center justify-center bg-white hidden lg:flex rounded-lg">
                        <img src={logo} className="w-80 h-auto" alt="Logo"></img>
                    </div>
                </div>
            </div>
        </>
        )
}