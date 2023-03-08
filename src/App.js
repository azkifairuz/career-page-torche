import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import About from "./pages/about";
import Joblist from "./components/Joblist";
import Login from "./components/Login";
import Home from "./pages/home";
import Landing from "./pages/landing";
import Admin from "./pages/admin";
import Layout from "./components/Layout";
import Dashboard from "./pages/dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Custom404 from "./components/Custom404";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = () =>
    setUser({
      id: "test-1",
      name: "test",
      roles: ["admin"],
    });

  const handleLogout = () => setUser(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="joblist" element={<Joblist />} />
          <Route path="about" element={<About />} />
          <Route element={<ProtectedRoute isAllowed={!!user} />}>
            <Route path="home" element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Route>
        <Route
          path="admin"
          element={
            <ProtectedRoute
              redirectPath="/home"
              isAllowed={!!user && user.roles.includes("admin")}
            >
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Custom404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
