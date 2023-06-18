import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/organisms/Layout";
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
import Profil from "pages/user/dashboard/profil";
import JobDetail from "pages/joblist/detail";
import Tracking from "./pages/user/dashboard/application track";
import JobApplication from "pages/user/JobApplication";
import Setting from "pages/user/dashboard/setting";
import ForgetPassword from "pages/forget-password";
import ChangePassword from "pages/forget-password/confirmed";
import ScrollToTop from "utils/scrollToTop";

function App() {
  return (
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
        <Route path="TorcheJaya" element={<Admin />}>
          <Route index element={<AdminDashboard to="dashboard" />} />
          <Route path="vacancy" element={<Vacancy />} />
          <Route path="applicants" element={<Applicants />} />
          <Route path="vacancy/create" element={<Create />} />
          <Route path="vacancy/:id/edit" element={<Edit />} />
        </Route>
        <Route path="user" element={<User />}>
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
  );
}

export default App;
