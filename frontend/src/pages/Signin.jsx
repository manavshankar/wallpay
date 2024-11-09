import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { Subheading } from '../components/Subheading'
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signin(){
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    return(
        <div className="h-screen bg-slate-400 w-full flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-96 text-center max-h-fit p-4 m-6">
                    <Heading label={"Sign in"}/>
                    <Subheading label={"Enter your credentials to access your account"} />
                    <InputBox onChange={(e)=>{
                        setUsername(e.target.value);
                    }} label={"Email"} placeholder={"user@mail.com"}/>
                    <InputBox onChange={(e)=>{
                        setPassword(e.target.value)
                    }} label={"Password"} placeholder={"********"}/>
                    <Button onClick={async ()=>{
                        const response = await axios.post('http://localhost:3000/api/v1/user/signin',{
                            username,
                            password
                        })
                        localStorage.setItem("token",response.data.token);
                        if(response.status == 200){
                            navigate('/dashboard');
                        }
                    }} label={"Sign-in"}/>
                    <BottomWarning label={"Don't have an Account?"} buttonText = {"Sign up"} to={'/signup'}/>
                </div> 
            </div>
        </div>
    )
}