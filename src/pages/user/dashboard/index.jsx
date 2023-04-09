import Sidebar from "components/User/sidebar";
import { Outlet } from "react-router-dom";

export default function UserDashboard() {
    return(
        <div className="flex flex-col w-full p-4 lg:px-[100px] lg:mx-auto md:flex-row gap-6">
                <Sidebar/>
                <div className="flex flex-col w-full gap-6">
                    <Outlet/>
                </div>
        </div>
    )
}