import * as Icon from "react-bootstrap-icons";

import Logo from "assets/icons/TorcheDarkBg.svg";
import Item from "./Item";

import { useAuthDispatch, logout } from "context";
import { Link, Navigate } from "react-router-dom";

export default function Sidebar(props) {
  const dispatch = useAuthDispatch();

  const handleLogout = () => {
    logout(dispatch);
    console.log("logout");
  };

  return (
    <aside className="box-border flex flex-col text-black border-r-2 sticky top-0 left-0 h-screen pt-[152px] px-[80px]">
      <main className="flex flex-col">
        <div className="flex gap-[12px] p-[12px] items-center bg-neutral-200 rounded-[12px]">
          <img src={Logo} alt="Torche Logo" className="w-[44px]" />
          <section className="flex flex-col gap-[4px]">
            <h2 className="heading-s-bold">
              Torche Education
            </h2>
            <p className="heading-s-medium">
              Admin
            </p>
          </section>
        </div>
        <ul className="flex flex-col gap-2 mt-14">
          <Item
            icon={<Icon.Grid size={20} />}
            title="Dashboard"
            href="dashboard"
          />
          <Item
            icon={<Icon.BriefcaseFill size={20} />}
            title="Lowongan"
            href="vacancy"
          />
          <Item
            icon={<Icon.PeopleFill size={20} />}
            title="Pelamar"
            href="applicants"
          />
          <Item
            icon={<Icon.GearFill size={20} />}
            title="Pengaturan"
            href="settings"
          />
        </ul>
        <button onClick={handleLogout}>
          <Link to="/login">Keluar</Link>
        </button>
      </main>
    </aside>
  );
}
