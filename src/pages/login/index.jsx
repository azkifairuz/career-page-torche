import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import InputField from "components/atoms/InputField";

import Google from "assets/icons/Google.svg";
import logoWhite from "assets/logos/Torche_Logo-01_White.webp";
import AuthContainer from "components/organisms/AuthContainer";
import AuthButton from "components/atoms/AuthButton";

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
    <main className=" flex p-0 md:px-[100px] justify-center lg:justify-end items-center bg-primaryNavy-main min-h-screen">
      <AuthContainer>
        <form
          className="flex flex-col gap-[16px] w-full h-full"
          action=""
          method="post"
        >
          <InputField
            label="Email"
            type="text"
            placeholder="Your Email Here    "
          />
          <div className="flex flex-col gap-[8px] items-start   ">
            <InputField
              label="Kata Sandi"
              type="password"
              placeholder="••••••••"
            />
            <a href="/#">
              <p className="text-sm text-center text-primaryBlue-main font-cairo font-bold">
                Forgot Password?
              </p>
            </a>
          </div>
          <AuthButton onClick={isAdmin} name="login-button" title="Masuk" />
        </form>
        <p className="text-neutral-1000 text-[14px]">atau masuk dengan </p>
        <button
          onClick={isAdmin}
          name="loginbutton"
          className="flex gap-[15px] p-[15px] justify-center w-full bg-white border shadow-[0_0_3px_0_rgba(0, 0, 0, 0.084)] shadow-[0_2px_3px_0_rgba(0, 0, 0, 0.168)] rounded-[10px] focus:outline-none"
        >
          <>
            <img src={Google} alt="Google" />
            <p>Continue with Google</p>
          </>
        </button>
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
        className="hidden md:block absolute w-[128px] bottom-[32px] left-[32px]"
      />
    </main>
  );
}
export default Login;
