import { useAuthDispatch, logout } from "context";
import { Link, Navigate } from "react-router-dom";

import Item from "./Item";

import Logo from "assets/icons/TorcheDarkBg.svg";
import DashboardIcon from "assets/icons/DashboradIcon.svg";
import LowonganIcon from "assets/icons/LowonganIcon.svg";
import PelamarIcon from "assets/icons/PelamarIcon.svg";
import WawancaraIcon from "assets/icons/WawancaraIcon.svg";

export default function AdminSidebar(props) {
  const dispatch = useAuthDispatch();

  const handleLogout = () => {
    logout(dispatch);
    console.log("logout");
  };

  return (
    <aside className="box-border flex flex-col text-black border-r-2 sticky top-0 left-0 h-screen pt-[100px] px-[60px]">
      <main className="flex flex-col">
        <div className="flex gap-[12px] p-[12px] items-center bg-neutral-200 rounded-[12px]">
          <img src={Logo} alt="Torche Logo" className="w-[44px]" />
          <section className="flex flex-col gap-[4px]">
            <h2 className="heading-s-bold">Torche Education</h2>
            <p className="heading-s-medium">Admin</p>
          </section>
        </div>
        <ul className="flex flex-col gap-2 mt-14">
          <Item src={DashboardIcon} title="Dashboard" href="dashboard" />
          <Item src={LowonganIcon} title="Lowongan" href="vacancy" />
          <Item src={PelamarIcon} title="Pelamar" href="applicants" />
          <Item src={WawancaraIcon} title="Pengaturan" href="settings" />
        </ul>
      </main>
    </aside>
  );
}
