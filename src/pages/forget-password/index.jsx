import { useNavigate, Link } from "react-router-dom";

import AuthContainer from "components/organisms/AuthContainer";
import InputField from "components/atoms/InputField";
import AuthButton from "components/atoms/AuthButton";

import Background from "assets/images/RegisterBG.webp";

export default function ForgetPassword() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <main className="relative flex p-0 md:px-[100px] md:py-[62px] justify-center lg:justify-end items-center min-h-screen">
      <img
        src={Background}
        alt="background"
        className="absolute -z-10 top-0 left-0 h-full w-full"
      />
      <AuthContainer>
        <p className="text-neutral-1000 bg-[#FFE7B9] py-3 px-4">
          We just sent you a temporary sign up code. Please check your inbox and
          paste the sign up code below.
        </p>
        <div className="flex flex-col gap-6 w-full">
          <InputField
            title="Email"
            type="email"
            placeholder="yourmail@gmail.com"
          />
          <AuthButton title="Verifikasi" type="submit" onClick={handleSubmit} />
        </div>
        <p className="text-neutral-1000 text-[14px]">
          sudah ingat akun anda?{" "}
          <Link
            to="/login"
            className="font-bold text-primaryBlue-main hover:text-primaryBlue-hover active:text-primaryBlue-pressed"
          >
            Masuk Sekarang
          </Link>
        </p>
      </AuthContainer>
    </main>
  );
}
