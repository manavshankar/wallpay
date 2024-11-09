import { useState } from 'react'
import logo from '../assets/wallet.png'

export default function Appbar(){
    const [logout, setLogout] = useState(false);

    return (
        <div className="shadow h-14 flex justify-between">
            <div className="flex flex-row items-center justify-center text-xl max-w-fit font-mono font-bold h-full ml-4">
                <img className='mr-2 w-[90%] h-[90%]' src={logo} />
                WallPay
            </div>
            <div className="flex">
                <div className="flex flex-col font-semibold justify-center h-full mr-4">
                    Hello
                </div>
                <div className="rounded-full cursor-pointer h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                    <div onClick={()=>{
                        setLogout(prev=>!prev)
                    }} className="flex flex-col justify-center h-full text-xl">
                        U
                    </div>
                    {logout && <Logout/>}
                </div>
            </div>
        </div>
    )
}

function Logout(){
    return(
        <div className='absolute top-16 right-3'>
            <div className='flex justify-center max-w-fit rounded-lg bg-white shadow-lg max-h-fit'>
                <div className='flex flex-col py-4 px-6 items-center'>
                    <h1 className='my-2 mx-8 text-lg font-semibold'>Want to logout?</h1>
                    <button className='bg-red-600 py-2 px-4 text-white font-bold font-mono rounded-xl'>Logout</button>
                </div>
            </div>
        </div>
    )
}