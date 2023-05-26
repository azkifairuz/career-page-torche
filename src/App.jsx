import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Layout from "./components/organisms/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import {
  Landing,
  Custom404,
  Login,
  Joblist,
  About,
  FAQ,
  Signup,
  User,
  Verify,
} from "./pages";
import Admin, {
  AdminDashboard,
  Applicants,
  Create,
  Vacancy,
  Edit,
} from "pages/admin";
import CompleteProfil from "./pages/complete profile/CompleteProfile";
import UserDashboard from "pages/user/dashboard";
import { AuthProvider } from "context";
import Profil from "pages/user/dashboard/profil";
import JobDetail from "pages/joblist/detail";
import Tracking from "./pages/user/dashboard/application track";
import JobApplication from "pages/user/JobApplication";
import Setting from "pages/user/dashboard/setting";
import ForgetPassword from "pages/forget-password";
import ChangePassword from "pages/forget-password/confirmed";
import ScrollToTop from "utils/scrollToTop";

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
        <ScrollToTop />
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="signup">
            <Route index element={<Signup />} />
            <Route path="verify" element={<Verify />} />
            {/* <Route path="success" element={<SignupSuccess />} /> */}
          </Route>
          <Route path="forget-password">
            <Route index element={<ForgetPassword />} />
            <Route path="confirmed" element={<ChangePassword />} />
          </Route>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="joblist" element={<Joblist />} />
            <Route path="about" element={<About />} />
            <Route path="FAQ" element={<FAQ />} />
            <Route path="debug" element={<CompleteProfil />} />
          </Route>
          <Route path={"/joblist/:id"} element={<JobDetail />} />
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
            <Route path="vacancy/:id/edit" element={<Edit />} />
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
            <Route path="home" element={<Landing />} />
            <Route path="dashboard" element={<UserDashboard />}>
              <Route index element={<Navigate to="profil" />} />
              <Route path="profil" element={<Profil />}></Route>
              <Route path="lamaran" element={<JobApplication />}></Route>
              <Route path="applicationtracking" element={<Tracking />} />
              <Route path="setting" element={<Setting />} />
            </Route>
            <Route path="FAQ" element={<FAQ />} />
            <Route path="completeprofile" element={<CompleteProfil />}></Route>
            <Route path="joblist" element={<Joblist />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="*" element={<Custom404 />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
