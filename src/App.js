import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import {
  Home,
  Landing,
  Custom404,
  Login,
  Joblist,
  About,
  FAQ,
  Signup,
  User,
} from "./pages";
import Admin, { AdminDashboard, Applicants, Create, Vacancy } from "pages/admin";
import Track from "./pages/user/application track";
import CompleteProfil from "./pages/user/complete profile/CompleteProfile";
import Semua from "./pages/user/application track/semua";
import Dilihat from "./pages/user/application track/dilihat";
import Diproses from "./pages/user/application track/diproses";
import Diterima from "./pages/user/application track/diterima";
import Ditolak from "./pages/user/application track/ditolak";
import Terkirim from "./pages/user/application track/terkirim";
import Belum from "./pages/user/application track/belum";
import JobApplication from "pages/jobdescription/index";
import UserDashboard from "pages/user/dashboard";
import { AuthProvider } from "context";
import Profil from "pages/user/dashboard/profil";

function App() {
  const [user, setUser] = useState({
    id: "test-1",
    name: "test",
    roles: ["admin", "user"],
  });

  const handleLogin = () =>
    setUser({
      id: "test-1",
      name: "test",
      roles: ["admin"],
    });

  const handleLogout = () => setUser(null);

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="joblist" element={<Joblist />} />
            <Route path="about" element={<About />} />
            <Route path="FAQ" element={<FAQ />} />
            <Route path="debug" element={<CompleteProfil />} />
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
          >
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="vacancy" element={<Vacancy />} />
            <Route path="applicants" element={<Applicants />} />
            <Route path="vacancy/create" element={<Create />} />
          </Route>
          <Route path="track" element={<Track />}>
            <Route index element={<Navigate to="semua" />} />
            <Route path="semua" element={<Semua />} />
            <Route path="dilihat" element={<Dilihat />} />
            <Route path="diproses" element={<Diproses />} />
            <Route path="diterima" element={<Diterima />} />
            <Route path="ditolak" element={<Ditolak />} />
            <Route path="terkirim" element={<Terkirim />} />
            <Route path="belum" element={<Belum />} />
          </Route>
          <Route
            path="user"
            element={
              <ProtectedRoute
                redirectPath="/login"
                isAllowed={!!user && user.roles.includes("user")}
              >
                <User />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="dashboard" element={<UserDashboard />}>
              <Route index element={<Navigate to="profil" />} />
              <Route path="profil" element={<Profil />}></Route>
            </Route>
            <Route path="completeprofile" element={<CompleteProfil />}></Route>
            <Route path="jobapplication" element={<JobApplication />} />
            <Route path="joblist" element={<Joblist />} />
          </Route>
          <Route path="*" element={<Custom404 />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
