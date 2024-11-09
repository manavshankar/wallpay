import { Link } from "react-router-dom";

export default function BottomWarning({label, buttonText, to}){
    return (
        <div className="flex text-sm pt-2 justify-center text-slate-800">
            <div className="mr-1">
                {label}
            </div>
            <Link className=" font-semibold underline" to={to}>{buttonText}</Link>
        </div>
    )
}