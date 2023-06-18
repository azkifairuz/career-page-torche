import Footer from "components/organisms/Layout/Footer";

import Navbar from "components/organisms/userNavbar/navbar";
import { Outlet } from "react-router";

function User() {
  return (
    <div>
      <Navbar />
      <div className="mb-[100px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default User;
