import * as Icon from "react-bootstrap-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import notificationBadge from "assets/icons/notification-badge.svg"
import Item from "./items";
import Logo from "assets/logos/Torche_Logo-01_White.webp";
import sample from "assets/index.png";
import chevron from "assets/icons/chevron-white.svg";
export default function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isProfilNavOpen,setIsProfilNavOpen] = useState(false)
  const [isActive, setIsActive] = useState(0);
  const handleNavbarOpen = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  const handleProfilNav = ()=>{
    setIsProfilNavOpen(!isProfilNavOpen)
  }
  const resumeIcon = (
    <svg
      width="16"
      height="21"
      viewBox="0 0 16 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 3.19031H3C1.89543 3.19031 1 4.08574 1 5.19031V17.1903C1 18.2949 1.89543 19.1903 3 19.1903H13C14.1046 19.1903 15 18.2949 15 17.1903V5.19031C15 4.08574 14.1046 3.19031 13 3.19031H11M5 3.19031C5 4.29488 5.89543 5.19031 7 5.19031H9C10.1046 5.19031 11 4.29488 11 3.19031M5 3.19031C5 2.08574 5.89543 1.19031 7 1.19031H9C10.1046 1.19031 11 2.08574 11 3.19031M8 10.1903H11M8 14.1903H11M5 10.1903H5.01M5 14.1903H5.01"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
  const trackingIcon = (
    <svg
      width="18"
      height="21"
      viewBox="0 0 18 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 3.19031H3C1.89543 3.19031 1 4.08574 1 5.19031V17.1903C1 18.2949 1.89543 19.1903 3 19.1903H13C14.1046 19.1903 15 18.2949 15 17.1903V16.1903M5 3.19031C5 4.29488 5.89543 5.19031 7 5.19031H9C10.1046 5.19031 11 4.29488 11 3.19031M5 3.19031C5 2.08574 5.89543 1.19031 7 1.19031H9C10.1046 1.19031 11 2.08574 11 3.19031M11 3.19031H13C14.1046 3.19031 15 4.08574 15 5.19031V8.19031M17 12.1903H7M7 12.1903L10 9.19031M7 12.1903L10 15.1903"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
  const navbarData = [
    { href: "/user", title: "Home" },
    { href: "joblist", title: "Job List" },
    { href: "about", title: "About Torche" },
    { href: "faq", title: "FAQ" },
  ];
  const profilNav = [
    {
      title: "Profil",
      href: "dashboard",
      icon: <Icon.Person size={20} />,
    },
    {
      title: "Resume",
      href: "dashboard/resume",
      icon: resumeIcon,
    },
    {
      title: "Lamaran",
      href: "dashboard/lamaran",
      icon: <Icon.Briefcase size={20} />,
    },
    {
      title: "Status Lamaran",
      href: "dashboard/applicationtracking",
      icon: trackingIcon,
    },
    {
      title: "Setting",
      href: "dashboard/setting",
      icon: <Icon.Gear size={20} />,
    },
  ];
  const notification = [1, 2, 3, 4]


  return (
    <>
      <nav className="sticky z-50 top-0 w-full font-rajdhani px-7 lg:px-[100px] py-1 font-medium bg-primaryNavy-main text-white flex items-center justify-between">
        <div className=" md:gap-2 md:justify-start justify-between w-full flex items-center">
          <div>
            <Link to="/" className="cursor-pointer">
              <img className="w-[128px] h-[72px]" src={Logo} alt="Logo" />
            </Link>
          </div>
          <div>
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
            <ul className="md:flex hidden items-center mt-0">
              {navbarData.map((data, index) => {
                return (
                  <li
                    key={index}
                    className="md:mx-3 md:my-0 my-3 hover:text-[#0362cb] transition duration-200 "
                  >
                    <Link to={data.href}>{data.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-[16px]">
          <div className="relative w-[28px] mr-[16px]  md:flex hidden ">
            <span className={`absolute right-0 -top-1  bg-danger-main w-[12px] h-[12px] flex justify-center items-center font-cairo text-[9.6px] p-[6.4px] text-center leading-[17.6px] rounded-full ${notification.length > 0 ? "flex" : "hidden"} `}>{notification.length}</span>
            <img src={notificationBadge} alt="notification" className="w-[17.7px] h-[22.75px]"></img>
          </div>
          <li 
            onClick={handleProfilNav}
            className={` lg:flex lg:relative  w-[200px] hidden items-center gap-[8px] cursor-pointer`}>
            <img src={sample} alt="profie" className="w-[48px] h-[48px] rounded-full" />
            <h1 className="font-cairo text-[16px] leading-[28px] font-[700] flex-shrink-0  text-center">John Doe</h1>
            <img src={chevron} alt="chevron" className={` ${isProfilNavOpen && "rotate-0"} transition ease-in-out w-[12.11px] h-7.13px rotate-[180deg]`} />
            <ul className={`${isProfilNavOpen && "hidden"} transition  ease-in-out absolute w-[200px] rounded-lg bg-white left-0 top-16`}>
            {profilNav.map((item,index)=>{
            return(
              <Item
              key={index}
              title={item.title}
              icon = {item.icon}
              href = {item.href}
              isActive = {isActive === index}
              index = {index}
              setIsActive = {setIsActive}
              />
            )
          })}
            </ul>
          </li>
          
        </div>

      </nav>
      <div
        className={`${isNavbarOpen ? "block" : "hidden"
          } backdrop md:hidden absolute z-40 left-0 top-0 right-0 min-h-screen`}
        style={{ background: "rgba(23, 35, 46, 0.9)" }}
      ></div>
      <button
        onClick={handleNavbarOpen}
        className={`${isNavbarOpen ? "block" : "hidden"
          } md:hidden absolute right-5 top-5 z-50 text-white`}
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
        className={`${isNavbarOpen ? "block" : "hidden"
          } md:hidden absolute w-full text-white bg-primaryNavy-main flex flex-col mt-0 bg-red p-3 z-50 min-h-[calc(100%-70px)]`}
      >
        {navbarData.map((data, index) => {
          return (
            <Link
              onClick={handleNavbarOpen}
              key={index}
              className="relative cursor-pointer active:bg-primaryBlue-pressed py-3 px-4 hover:bg-primaryBlue-main md:mx-3 md:my-0 my-3 transition duration-200 font-light"
              to={data.href}
            >
              {data.title}
            </Link>
          );
        })}
        <div className="bg-[#5885E9] rounded-full w-1/2 mx-auto mb-3">
          <div className="md:hidden flex justify-center">
            <div>
              <span>
                {notificationBadge}
              </span>
            </div>
          </div>
        </div>
      </ul>
    </>
  );
}
