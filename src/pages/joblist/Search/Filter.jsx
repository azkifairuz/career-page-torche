import { useState } from "react";

import CategoryIcon from "assets/icons/category.svg";
import Chevron from "assets/icons/chevron-down.svg";

export default function Filter(props) {
  const { type } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (e) => {
    e.preventDefault();
    console.log(e.target.innerHTML);
    setSelected(e.target.innerHTML);
    setIsOpen(false);
  };

  const data = ["Option 1", "Option 2", "Option 3", "option 4"];

  return (
    <div className="relative flex flex-col w-full">
      <div className=" border-primaryNavy-border border-[1px] px-[12px] py-[10px] rounded-[8px] flex gap-[12px] items-center w-full ">
        <img src={CategoryIcon} alt="search" />
        <button
          onClick={handleClick}
          className="border-none flex-1 justify-between focus:outline-none flex gap-[8px] items-center"
        >
          <p className={`${selected !== "" && "text-neutral-1000"}`}>
            {selected === "" ? "Pilih " + type : selected}
          </p>
          <img
            src={Chevron}
            alt="chevron"
            className={`${
              isOpen && "rotate-180"
            } transition duration-300 ease-in-out`}
          />
        </button>
      </div>
      <ul
        className={`${
          !isOpen && "hidden"
        } z-50 text-neutral-1000 absolute left-0 top-12 p-[8px] min-w-full rounded-[8px] bg-white transition duration-300 ease-in-out border-[1px] border-neutral-300 shadow-[2px_4px_10px_rgba(19,47,159,0.25)]`}
      >
        {data.map((item, index) => (
          <li
            key={index}
            className="px-[16px] py-[8px] text-s-regular cursor-pointer"
            onClick={handleItemClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
