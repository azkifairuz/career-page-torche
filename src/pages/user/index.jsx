import Footer from "components/organisms/Layout/Footer";

import Navbar from "components/organisms/user navbar/navbar";
import { Outlet } from "react-router";

function User() {

    return (
    <div>  
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
    );
}

export default User;
