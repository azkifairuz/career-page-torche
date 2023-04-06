import Sidebar from "components/organisms/AdminSidebar";
import { Outlet } from "react-router-dom";
import AdminDashboard from "./dashboard";
import Vacancy from "./vacancy";
import Create from "./vacancy/create";
import Applicants from "./applicants";


function Admin(props) {
  const { user } = props;
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Admin;
export { AdminDashboard, Vacancy, Create, Applicants };
