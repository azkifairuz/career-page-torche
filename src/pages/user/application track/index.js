import { Outlet } from "react-router";
import ApplicationTracking from "../../../components/User/Application Tracking";

function tracking(params) {
    return(
        <div className="flex gap-2">
        <ApplicationTracking/>
            <Outlet/>
        </div>
    )
}
export default tracking