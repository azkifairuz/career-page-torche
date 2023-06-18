import { useState } from "react";

import Item from "./Item";

import Logo from "assets/icons/TorcheDarkBg.svg";
import DashboardIcon from "assets/icons/DashboradIcon.svg";
import LowonganIcon from "assets/icons/LowonganIcon.svg";
import PelamarIcon from "assets/icons/PelamarIcon.svg";
import WawancaraIcon from "assets/icons/WawancaraIcon.svg";
import Hamburger from "assets/icons/hamburger.svg";

export default function AdminSidebar(props) {
  const [onOpen, setOnOpen] = useState(false);

  const handleOpen = () => {
    setOnOpen(!onOpen);
    console.log(onOpen);
  };

  return (
    <>
      <aside
        className={` ${
          onOpen ? "fixed flex overflow-y-scroll h-screen" : "hidden"
        } bg-neutral-100 lg:sticky lg:flex box-border flex-col text-black border-0 border-r-2 top-0 lg:h-auto left-0 py-[150px] px-[57px] lg:pl-[100px] z-10`}
      >
        <button className="absolute top-[63px] lg:hidden" onClick={handleOpen}>
          <img src={Hamburger} alt="Hamburger Button" />
        </button>
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
      <button
        className="absolute left-[18px] md:left-[32px] lg:left-[30px]  top-[63px] lg:hidden"
        onClick={handleOpen}
      >
        <img src={Hamburger} alt="Hamburger Button" />
      </button>
    </>
  );
}
