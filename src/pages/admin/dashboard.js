import Sidebar from "../../components/Admin/Sidebar";
import Dashboard from "../../components/Admin/Dashboard";
import { Route, Routes, useLocation } from "react-router-dom";

function Admin() {
  const location = useLocation();
  const path = location.pathname;
  console.log(path);
  return (
    <>
      <Sidebar />
    </>
  );
}

export default Admin;
