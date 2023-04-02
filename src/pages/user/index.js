import Footer from "components/Layout/Footer";

import Navbar from "components/User/navbar";
import { Outlet } from "react-router";

function User() {

    return (
    <>  
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
    );
}

export default User;
