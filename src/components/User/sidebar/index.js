import sample from "assets/index.png";

import * as Icon from "react-bootstrap-icons";
import Header from "./header";
import Item from "./items";
import { useAuthState, useAuthDispatch, logout } from "context";
import { Link, Navigate } from "react-router-dom";
export default function Sidebar(props) {
  const dispatch = useAuthDispatch();
  const handleLogout = () => {
    logout(dispatch);
    console.log("logout");
  };
  return (
    <aside className="flex flex-col  lg:w-[397px] lg:gap-2 px-6 py-2 text-white justify-center items-center bg-neutral-100 ">
      <header className="w-full">
        <Header image={sample} profesi="Web Developer" name="John Doe" />
      </header>
      <main className="flex flex-col mt-5 justify-between w-full h-full">
        <ul className="flex flex-col justify-center gap-2  ">
          <Item
            icon={<Icon.Person size={20} />}
            title="Profile"
            href="dashboard"
          />
          <Item
            icon={
              <svg
                width="16"
                height="21"
                viewBox="0 0 16 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 3.19031H3C1.89543 3.19031 1 4.08574 1 5.19031V17.1903C1 18.2949 1.89543 19.1903 3 19.1903H13C14.1046 19.1903 15 18.2949 15 17.1903V5.19031C15 4.08574 14.1046 3.19031 13 3.19031H11M5 3.19031C5 4.29488 5.89543 5.19031 7 5.19031H9C10.1046 5.19031 11 4.29488 11 3.19031M5 3.19031C5 2.08574 5.89543 1.19031 7 1.19031H9C10.1046 1.19031 11 2.08574 11 3.19031M8 10.1903H11M8 14.1903H11M5 10.1903H5.01M5 14.1903H5.01"
                  stroke="#494949"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            }
            title="Resume"
            href="dashboard"
          />
          <Item
            icon={<Icon.Briefcase size={20} />}
            title="Lamaran"
            href="vacancy"
          />
          <Item
            icon={
              <svg
                width="18"
                height="21"
                viewBox="0 0 18 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 3.19031H3C1.89543 3.19031 1 4.08574 1 5.19031V17.1903C1 18.2949 1.89543 19.1903 3 19.1903H13C14.1046 19.1903 15 18.2949 15 17.1903V16.1903M5 3.19031C5 4.29488 5.89543 5.19031 7 5.19031H9C10.1046 5.19031 11 4.29488 11 3.19031M5 3.19031C5 2.08574 5.89543 1.19031 7 1.19031H9C10.1046 1.19031 11 2.08574 11 3.19031M11 3.19031H13C14.1046 3.19031 15 4.08574 15 5.19031V8.19031M17 12.1903H7M7 12.1903L10 9.19031M7 12.1903L10 15.1903"
                  stroke="#494949"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
            title="Status Lamaran"
            href="applicationTracking"
          />
          <Item
            icon={<Icon.Gear size={20} />}
            title="Setting"
            href="settings"
          />
        </ul>
        
      </main>
    </aside>
  );
}
