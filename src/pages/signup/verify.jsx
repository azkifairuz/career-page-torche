import AuthContainer from "components/organisms/AuthContainer";
import InputField from "components/atoms/InputField";

import Background from "assets/images/RegisterBG.webp";

export default function Verify() {
  return (
    <main className="flex p-0 md:px-[100px] md:py-[62px] justify-center lg:justify-end items-center min-h-screen">
      <img
        src={Background}
        alt="background"
        className="fixed -z-10 top-0 left-0 min-h-screen"
      />
      <AuthContainer>
        <div className="flex flex-col gap-[16px] w-full h-fit ">
          <p className="text-neutral-1000">
            We just sent you a temporary sign up code. Please check your inbox
            and paste the sign up code below.
          </p>
          <div className="flex flex-col gap-6 bg-red-50">
            <InputField
              label="Kode Verifikasi"
              type="text"
              placeholder="••••••••"
            />
            <button type="submit" className="w-full">
              Verifikasi
            </button>
          </div>
        </div>
      </AuthContainer>
    </main>
  );
}
