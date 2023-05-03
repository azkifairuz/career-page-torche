import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import InputField from "components/atoms/InputField";

import AuthContainer from "components/organisms/AuthContainer";
import AuthButton from "components/atoms/AuthButton";
import GoogleButton from "components/atoms/GoogleButton";

import logoWhite from "assets/logos/Torche_Logo-01_White.webp";
import LoginBG from "assets/images/LoginBG.webp";

function Login() {
  const navigate = useNavigate();
  const [users, setUsers] = useState("");

  const handler = (e) => {
    setUsers(e.target.value);
  };

  function isAdmin() {
    if (users === "admin") {
      return navigate("/admin");
    }

    return navigate("/user");
  }

  return (
    <main className="relative flex p-0 md:px-[100px] md:py-[129px] justify-center lg:justify-end items-center bg-primaryNavy-main min-h-screen -z-20">
      <img
        src={LoginBG}
        alt="Login Background"
        className="hidden md:block absolute left-0 top-0 -z-10  "
      />
      <AuthContainer>
        <form
          className="flex flex-col gap-4 w-full h-full"
          action=""
          method="post"
        >
          <InputField label="Email" type="text" placeholder="Your Email Here" />
          <div className="flex flex-col gap-2 items-start">
            <InputField
              label="Kata Sandi"
              type="password"
              placeholder="••••••••"
            />
            <Link
              to="/forget-password"
              className="text-sm text-center text-primaryBlue-main font-cairo font-bold"
            >
              Forgot Password?
            </Link>
          </div>
          <AuthButton onClick={isAdmin} name="login-button" title="Masuk" />
        </form>
        <p className="text-neutral-1000 text-[14px]">atau masuk dengan </p>
        <GoogleButton onClick={isAdmin} />
        <p className="text-neutral-1000 text-[14px]">
          tidak punya akun?{" "}
          <Link to="/signup" className="font-bold text-primaryBlue-main">
            Buat Akun
          </Link>
        </p>
      </AuthContainer>
      <img
        src={logoWhite}
        alt="Logo"
        className="hidden md:block absolute w-32 bottom-8  left-8"
      />
    </main>
  );
}
export default Login;
