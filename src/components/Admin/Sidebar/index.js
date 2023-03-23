import * as Icon from "react-bootstrap-icons";

import Logo from "assets/logos/Torche_Logo-01_White.webp";
import Item from "./Item";

import { useAuthState, useAuthDispatch, logout } from "context";
import { Link, Navigate } from "react-router-dom";

export default function Sidebar(props) {
  const dispatch = useAuthDispatch();

  const handleLogout = () => {
    logout(dispatch);
    console.log("logout");
  };

  return (
    <aside className="flex flex-col w-[20vw] text-black border-r-2 sticky top-0 left-0 h-screen py-8 px-6">
      <header>
        <img src={Logo} alt="Logo" className="h-20 -ml-2" />
      </header>
      <main className="flex flex-col justify-between h-full">
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
