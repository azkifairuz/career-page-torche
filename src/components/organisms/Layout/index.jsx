import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="box-border relative min-h-screen w-[100vw] flex flex-col">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
