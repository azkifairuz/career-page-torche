import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import InputField from "components/atom/InputField";

import Google from "assets/icons/Google.svg";
import logoBlack from "assets/logos/Torche_Logo_Black.png";
import logoWhite from "assets/logos/Torche_Logo-01_White.webp";

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
      <div className="flex flex-col items-center gap-[24px] p-[16px] md:p-[48px] bg-white font-cairo w-[503px] h-screen md:h-fit">
        <img
          src={logoBlack}
          alt="Logo"
          className="block md:hidden w-[128px] mt-[36px] mb-[24px]"
        />

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
          <button
            onClick={isAdmin}
            name="loginbutton"
            className="w-full bg-primaryBlue-main text-white focus:outline-none px-[14px] py-[16px] rounded-[8px]"
          >
            Masuk
          </button>
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
      </div>
      <img
        src={logoWhite}
        alt="Logo"
        className="hidden md:block absolute w-[128px] bottom-[32px] left-[32px]"
      />
    </main>
  );
}
export default Login;