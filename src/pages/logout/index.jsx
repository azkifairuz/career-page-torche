import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "service/auth";
import AuthContainer from "components/organisms/AuthContainer";
import AuthButton from "components/atoms/AuthButton";

export default function Logout() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const res = await logout();

    console.log(res);

    if (res.success === false) {
      return;
    }

    navigate("/login");
  };

  useEffect(() => {
    handleLogout();
  }, []); // Efek samping hanya dijalankan sekali saat komponen dipasang
}
