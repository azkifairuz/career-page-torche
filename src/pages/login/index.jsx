import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { loginUser } from "features/auth/authAction";

import InputField from "components/atoms/InputField";
import AuthContainer from "components/organisms/AuthContainer";
import AuthButton from "components/atoms/AuthButton";
import GoogleButton from "components/atoms/GoogleButton";

import logoWhite from "assets/logos/Torche_Logo-01_White.webp";
import LoginBG from "assets/images/LoginBG.webp";

export default function Login() {
  const dispatch = useDispatch();
  const { loading, error, userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill all the fields");
      return;
    }

    dispatch(loginUser({ email, password }));
    // navigate("/user");
  };

  return (
    <main className="relative flex p-0 md:px-[100px] md:py-[129px] justify-center lg:justify-end items-center bg-primaryNavy-main min-h-screen">
      <img
        src={LoginBG}
        alt="Login Background"
        className="hidden md:block absolute left-0 top-0 h-full"
      />
      <AuthContainer>
        <form
          className="flex flex-col gap-4 w-full h-full"
          action=""
          method="post"
        >
          <InputField
            title="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Your Email Here"
          />
          <div className="flex flex-col gap-2 items-start">
            <InputField
              title="Kata Sandi"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
            <Link
              to="/forget-password"
              className="text-sm text-center text-primaryBlue-main font-cairo font-bold"
            >
              Forgot Password?
            </Link>
          </div>
          <AuthButton
            onClick={handleSubmit}
            name="login-button"
            title="Masuk"
          />
        </form>
        <p className="text-neutral-1000 text-[14px]">atau masuk dengan </p>
        <GoogleButton />
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
