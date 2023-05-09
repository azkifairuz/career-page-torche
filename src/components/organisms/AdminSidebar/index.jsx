import { useState } from "react";

import Item from "./Item";

import Logo from "assets/icons/TorcheDarkBg.svg";
import DashboardIcon from "assets/icons/DashboradIcon.svg";
import LowonganIcon from "assets/icons/LowonganIcon.svg";
import PelamarIcon from "assets/icons/PelamarIcon.svg";
import WawancaraIcon from "assets/icons/WawancaraIcon.svg";
import { ThreeDotsVertical } from "react-bootstrap-icons";

export default function AdminSidebar(props) {
  const [onCollapse, setOnCollapse] = useState(false);

  const handleCollapse = () => {
    setOnCollapse(!onCollapse);
  };

  if (onCollapse) {
  }

  return (
    <>
      <aside className="hidden lg:flex box-border flex-col text-black border-r-2 sticky top-0 left-0 h-screen pt-[150px] pl-[100px] pr-[57px]">
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
          <Item src={WawancaraIcon} title="Wawancara" href="wawancara" />
        </ul>
      </aside>
      <button className="absolute left-9 lg:hidden">
        <ThreeDotsVertical />
      </button>
    </>
  );
}
