import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
