import { Outlet } from "react-router";
import Sidebar from "components/User/Application Tracking/Sidebar/Sidebar";

function tracking() {
    return(
        <div className="flex gap-2">
            <Sidebar/>
            <Outlet/>
        </div>
    )
}
export default tracking