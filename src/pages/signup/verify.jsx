import AuthContainer from "components/organisms/AuthContainer";
import InputField from "components/atoms/InputField";

import Background from "assets/images/RegisterBG.webp";
import AuthButton from "components/atoms/AuthButton";
import { useNavigate } from "react-router-dom";

export default function Verify() {
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
        <p className="text-neutral-1000">
          We just sent you a temporary sign up code. Please check your inbox and
          paste the sign up code below.
        </p>
        <div className="flex flex-col gap-6 w-full">
          <InputField
            label="Kode Verifikasi"
            type="text"
            placeholder="••••••••"
          />
          <AuthButton title="Verifikasi" type="submit" onClick={handleSubmit} />
        </div>
      </AuthContainer>
    </main>
  );
}
