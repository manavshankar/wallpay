import axios from "axios";
import { useState } from "react";
import { useSearchParams } from "react-router-dom"

export default function SendMoney(){
    const [searchParams] =  useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount,setAmount] = useState(0)

    return(
        <div className="h-screen bg-slate-50 w-full flex justify-center">
            <div className="h-full p-3 justify-center flex flex-col">
                <div className="border p-6 shadow-xl lg:w-[30vw] sm:w-[30vh] bg-white rounded-lg">
                    <div className="flex flex-col space-y-1.5 p-6">
                        <h2 className="text-4xl m-4 font-bold text-center">Send Money</h2>
                    </div>
                        <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center">
                        <span className="text-2xl text-white">{name[0].toUpperCase()}</span>
                    </div>
                        <h3 className="text-2xl font-bold">{name[0].toUpperCase()+name.slice(1,name.length)}</h3>
                    </div>
                    <div className="space-y-4">
                        <div className="mt-3">
                            <label
                                className="text-sm mb-4 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                htmlFor="amount"
                            >Amount (in Rs)</label>
                            <input type="number"
                            placeholder="Enter amount"
                            className="flex h-10 w-full rounded-md border p-2 mt-2"
                            id="amount"
                            onChange={(e)=>{
                                setAmount(e.target.value)
                            }} />
                        </div>
                        <div>
                        <button onClick={()=>{
                            axios.post("http://localhost:3000/api/v1/account/transfer",{
                                to : id,
                                amount
                            },{
                                headers:{
                                    Authorization : "Bearer "+localStorage.getItem("token")
                                }
                            })
                        }} className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-blue-400 text-white">
                        Initiate Transfer
                    </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}