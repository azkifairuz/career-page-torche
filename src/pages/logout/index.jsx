import { useNavigate } from "react-router-dom";

import { logout } from "service/auth";

import AuthContainer from "components/organisms/AuthContainer";
import AuthButton from "components/atoms/AuthButton";

export default function Logout() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    const res = await logout();

    console.log(res);

    const msg = res.messages ? res.messages : res.message;
    alert(msg);

    if (res.success === false) {
      return;
    }

    navigate("/logout");
  };

  return (
    <main className="relative flex p-0 md:px-[100px] md:py-[129px] justify-center lg:justify-end items-center bg-primaryNavy-main min-h-screen">
      <AuthContainer>
        <form
          className="flex flex-col gap-4 w-full h-full"
          action=""
          method="post"
        >
          <AuthButton
            onClick={handleSubmit}
            name="login-button"
            title="Keluar"
          />
        </form>
      </AuthContainer>
    </main>
  );
}
