import Sidebar from "components/User/sidebar";
import { Outlet } from "react-router-dom";

export default function UserDashboard() {
    return(
        <div className="flex flex-col w-full min-h-screen  p-4 md:px-[32px] md:mx-auto lg:px-[100px] lg:mx-auto md:flex-row gap-6">
                <Sidebar/>
                <div className="flex flex-col w-full  gap-6">
                    <Outlet/>
                </div>
        </div>
    )
}