import Appbar from "../components/Appbar";
import { Balance } from "../components/Balance";
import Users from "../components/Users";

export default function Dashboard(){
    return(<>
        <Appbar/>
        <div className="m-8">
            <Balance/>
        </div>
        <Users/>
    </>
    )
}