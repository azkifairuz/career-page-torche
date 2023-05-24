import Sidebar from "components/organisms/AdminSidebar";
import { Outlet } from "react-router-dom";
import AdminDashboard from "./dashboard";
import Vacancy from "./vacancy";
import Create from "./vacancy/create";
import Applicants from "./applicants";
import Edit from "./vacancy/edit";

function Admin(props) {
  const { user } = props;
  return (
    <div className="flex w-[100vw] overflow-hidden">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Admin;
export { AdminDashboard, Vacancy, Create, Applicants, Edit };
