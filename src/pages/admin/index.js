import Sidebar from "../../components/Admin/Sidebar";
import Dashboard from "../../components/Admin/Dashboard";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";

function Admin(props) {
  const { user } = props;
  return (
      <Outlet/>
  );
}

export default Admin;
