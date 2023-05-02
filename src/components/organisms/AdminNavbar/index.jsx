import Logo from "assets/icons/TorcheDarkBg.svg";
import { Bell } from "react-bootstrap-icons";

export default function AdminNavbar() {
  return (
    <section className="flex gap-5 mt-[63px] items-center w-full justify-end mb-[44px]">
      <Bell size={32} />
      <img src={Logo} alt="Torche Logo" className="w-[44px]" />
    </section>
  );
}
