import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/logos/Torche_Logo-01_White.png";

export default function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleNavbarOpen = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const navbarData = [
    { href: "home", title: "Home" },
    { href: "joblist", title: "Job List" },
    { href: "dashboard", title: "Profile" },
  ];

  return (
    <>
      <nav className="sticky z-50 top-0 w-full font-rajdhani px-7 py-1 font-medium bg-primaryNavy-main text-white flex items-center justify-between">
        <div>
          <Link to="/" className="cursor-pointer">
            <img className="w-[128px] h-[72px]" src={Logo} alt="Logo" />
          </Link>
        </div>
        <div>
          <button
            onClick={handleNavbarOpen}
            className={`${isNavbarOpen && "hidden"} lg:hidden hamburger`}
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
          <ul className="lg:flex hidden items-center mt-0">
            {navbarData.map((data, index) => {
              return (
                <li
                  key={index}
                  className="lg:mx-3 lg:my-0 my-3 hover:text-[#0362cb] transition duration-200 "
                >
                  <Link to={data.href}>{data.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="lg:flex hidden justify-center">
          <Link
            to="/landing"
            className="bg-[#5885E9] rounded-full py-2 px-[20px] text-[16px] font-cairo font-bold"
          >
            Logout
          </Link>
        </div>
      </nav>
      <div
        className={`${
          isNavbarOpen ? "block" : "hidden"
        } backdrop lg:hidden absolute z-40 left-0 top-0 right-0 min-h-screen`}
        style={{ background: "rgba(23, 35, 46, 0.9)" }}
      ></div>
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
      <ul
        className={`${
          isNavbarOpen ? "block" : "hidden"
        } lg:hidden absolute w-full text-white bg-primaryNavy-main flex flex-col mt-0 bg-red p-3 z-50 min-h-[calc(100%-70px)]`}
      >
        {navbarData.map((data, index) => {
          return (
            <li
              key={index}
              className="relative lg:mx-3 lg:my-0 my-3 transition duration-200 font-light"
            >
              <div>{data.title}</div>
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
    </>
  );
}
