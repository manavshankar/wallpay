import { useState } from "react";
import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { Subheading } from "../components/Subheading";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Signup(){
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    return(
        <div className="h-screen bg-slate-400 w-full flex justify-center">
            <div className="flex flex-col justify-center">
                <div  className="rounded-lg bg-white w-96 text-center max-h-fit p-4 m-6">
                    <Heading label={"Sign Up"}/>
                    <Subheading label={"Enter your credentials to create an account"} />
                    <InputBox onChange={(e)=>{
                        setUsername(e.target.value);
                    }} label={"Email"} placeholder={"user@mail.com"} />
                    <InputBox onChange={(e)=>{
                        setFirstName(e.target.value);
                    }} label={"First Name"} placeholder={"John"} />
                    <InputBox onChange={(e)=>{
                        setLastName(e.target.value)
                    }} label={"Last Name"} placeholder={"Doe"} />
                    <InputBox onChange={(e)=>{
                        setPassword(e.target.value)
                    }} label={"Password"} placeholder={"******"} />
                    <Button onClick={async ()=>{
                        const response  = await axios.post('http://localhost:3000/api/v1/user/signup',{
                            username :username,
                            firstname :firstName,
                            lastname : lastName,
                            password : password
                        })
                        localStorage.setItem("token", response.data.token);
                        if(response.status==200){
                            navigate('/dashboard');
                        }
                    }} label={"Sign Up"}/>
                    <BottomWarning label={"Already have an Account?"} buttonText={"Sign in"} to={'/signin'}/>
                </div>
            </div>
        </div>
    )
}