export default function Button({label,onClick}){
    return(
        <button onClick={onClick} className=" bg-black mt-3 w-full p-2 rounded-lg max-h-fit text-white text-1xl font-bold">
            {label}
        </button>
    )
}