import UserDashboard from "components/User/Dashboard";
import Navbar from "components/User/navbar";
import { Outlet } from "react-router";

function User() {

    return (
    <>  
        <Navbar/>
        <Outlet/>
    </>
    );
}

export default User;
