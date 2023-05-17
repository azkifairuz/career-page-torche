import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "assets/logos/Torche_Logo-01_White.webp";

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
    <>
      <nav className="sticky z-50 top-0 right-0 left-0 box-border bg-primaryNavy-main w-[100vw]">
        <div className=" font-rajdhani py-[1px] px-[16px] md:px-[32px] lg:px-[100px] font-medium  text-white flex items-center justify-between h-fit">
          <section className="flex gap-[24px]">
            <Link to="/" className="cursor-pointer">
              <img className="w-[128px] h-[72px]" src={Logo} alt="Logo" />
            </Link>
            <ul className="hidden md:flex items-center">
              {navbarData.map((data, index) => {
                return (
                  <Link
                    to={data.href}
                    key={index}
                    className="px-[16px] py-[8px] rounded-[8px] hover:bg-primaryBlue-hover active:bg-primaryBlue-pressed transition-all duration-200 ease-in text-l-regular font-semibold font-rajdhani cursor-pointer"
                  >
                    {data.title}
                  </Link>
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
            } md:hidden text-white`}
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
              className="text-neutral-100 text-[16px] hover:bg-primaryBlue-hover active:bg-primaryBlue-pressed font-rajdhani font-semibold rounded-[8px] p-[8px] px-[16px]"
            >
              Login
            </Link>
          </section>
        </div>
      </nav>
      <ul
        className={`${
          isNavbarOpen ? "block" : "hidden"
        } md:hidden w-full fixed text-l-regular text-neutral-100 bg-primaryNavy-main top-[74px] flex flex-col z-50 font-rajdhani font-semibold`}
      >
        {navbarData.map((data, index) => {
          return (
            <Link
              to={data.href}
              key={index}
              className=" p-[12px] px-[16px] transition-all duration-200 hover:bg-primaryBlue-hover active:bg-primaryBlue-pressed"
              onClick={handleNavbarOpen}
            >
              {data.title}
            </Link>
          );
        })}
        <li
          className="relative p-[12px] text-primaryNavy-main  px-[16px] bg-primaryBlue-surface transition duration-200"
          onClick={handleNavbarOpen}
        >
          <Link to="/signup">Register</Link>
        </li>
        <li
          className="relative p-[12px] px-[16px] transition duration-200 hover:bg-primaryBlue-hover active:bg-primaryBlue-pressed"
          onClick={handleNavbarOpen}
        >
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </>
  );
}
