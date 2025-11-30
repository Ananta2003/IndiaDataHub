import { CiLock } from "react-icons/ci";
import Inputbox from "../components/Inputbox";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function Signin() {

    const usernameRef = useRef<HTMLInputElement>(null)
    const PasswordRef = useRef<HTMLInputElement>(null)
    const navigate = useNavigate()

    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

    async function signup() {
        const username = usernameRef.current?.value
        const password = PasswordRef.current?.value

        if (!username && !password ) {
            toast.error("Please Fill All Fields")
        }

        try {
            await axios.post(`${BACKEND_URL}/api/v1/signin`, {
                username, password
            }).then((res) => {
                if(res.status === 401){
                    return toast.error("Incorrect Password")
                }
                navigate('/dashboard')
                toast.success("User Created")
            })
        }catch(err){
            console.log(err)
            toast.error("Err Creating Account")
        }
        
    }

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <Toaster/>
            <div className=" w-full flex items-center justify-center ">
                <div className="w-md">
                    <div className="w-full h-full my-4">
                        <div className="flex items-center justify-center">
                            <div className="bg-[#1c1463] h-[50px] w-[50px] rounded-[50%] flex items-center justify-center ">
                                <CiLock className="text-white" size={30} />
                            </div>
                        </div>

                        <h1 className="flex items-center justify-center">Sign In</h1>

                    </div>

                    <div>
                        <Inputbox type="text" ref={usernameRef} placeholder="Username" />
                        <Inputbox type="password" ref={PasswordRef} placeholder="Password" />
                    </div>
                    <div>
                        <button onClick={signup} className="w-full rounded-md m-2 py-2 bg-[#0a1236] text-white">Sign In</button>
                    </div>
                    <div className="text-[#1c1463] flex items-center m-2 underline">
                        <a href="/">Didn't have an Account? SignUp</a>
                    </div>
                </div>
            </div>
        </div>
    )
}