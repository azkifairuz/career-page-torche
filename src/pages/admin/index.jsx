import { Outlet } from "react-router-dom";

import Sidebar from "components/organisms/AdminSidebar";
import AdminDashboard from "./dashboard";
import Vacancy from "./vacancy";
import Create from "./vacancy/create";
import Applicants from "./applicants";
import Edit from "./vacancy/edit";

export default function Admin() {
  return (
    <div className="relative  flex w-[100vw] ">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export { AdminDashboard, Vacancy, Create, Applicants, Edit };
