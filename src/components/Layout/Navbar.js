import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/logos/Torche_Logo-01_White.webp";

export default function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleNavbarOpen = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const navbarData = [
    { href: "/", title: "Home" },
    { href: "/joblist", title: "Job List" },
    { href: "/about", title: "About Torche" },
    { href: "/faq", title: "FAQ" },
  ];

  return (
    <nav className="sticky z-50 top-0 box-border bg-primaryNavy-main ">
      <div className=" font-rajdhani py-[1px] px-[16px] lg:px-[100px] font-medium  text-white flex items-center justify-between h-fit">
        <section className="flex gap-[24px]">
          <Link to="/" className="cursor-pointer">
            <img className="w-[128px] h-[72px]" src={Logo} alt="Logo" />
          </Link>
          <ul className="hidden md:flex items-center">
            {navbarData.map((data, index) => {
              return (
                <li
                  key={index}
                  className="px-[16px] py-[8px] hover:text-[#0362cb] transition duration-200 "
                >
                  <Link to={data.href}>{data.title}</Link>
                </li>
              );
            })}
          </ul>
        </section>
        <button
          onClick={handleNavbarOpen}
          className={`${isNavbarOpen && "hidden"} md:hidden hamburger`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <button
          onClick={handleNavbarOpen}
          className={`${
            isNavbarOpen ? "block" : "hidden"
          } lg:hidden absolute right-5 top-5 z-50 text-white`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <section className="hidden md:flex gap-[4px] justify-center">
          <Link
            to="/signup"
            className="bg-primaryBlue-surface text-neutral-1000 text-[16px] font-rajdhani font-semibold rounded-[8px] p-[8px] px-[16px]"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="text-neutral-100 text-[16px] font-rajdhani font-semibold rounded-[8px] p-[8px] px-[16px]"
          >
            Login
          </Link>
        </section>
      </div>
      <ul
        className={`${
          isNavbarOpen ? "block" : "hidden"
        } lg:hidden w-full text-white bg-primaryNavy-main flex flex-col mt-0 bg-red p-3 z-50 `}
      >
        {navbarData.map((data, index) => {
          return (
            <li
              key={index}
              className="relative p-[12px] px-[16px] transition duration-200 font-light"
              onClick={handleNavbarOpen}
            >
              <Link to={data.href}>{data.title}</Link>
            </li>
          );
        })}
        <div className="bg-[#5885E9] rounded-full w-1/2 mx-auto mb-3">
          <a
            href="/registration"
            className="flex justify-center p-3 px-[20px] text-[16px] font-cairo font-bold"
          >
            Daftar Kelas
          </a>
        </div>
      </ul>
    </nav>
  );
}
