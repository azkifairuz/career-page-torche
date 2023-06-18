import { useState } from "react";

import ChevronDown from "assets/icons/chevron-down.svg";

export default function Select(props) {
  const { title, data, width, active, fit } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(active);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (e) => {
    e.preventDefault();
    console.log(e.target.innerHTML);
    setSelected(e.target.innerHTML);
    setIsOpen(false);
  };

  return (
    <div
      className={`relative box-border text-neutral-1000 rounded-[8px] flex flex-col flex-1 gap-3 ${
        (width || fit) && "w-fit"
      }   bg-white`}
    >
      <div
        className={`relative w-full ${fit && "w-fit"} ${width} ${
          isOpen ? "border-primaryBlue-main" : "border-primaryNavy-border"
        } hover:border-primaryBlue-hover  border-[1px] py-3 pl-4 pr-5 rounded-lg flex items-center`}
      >
        <button
          onClick={handleClick}
          className="border-none justify-between focus:outline-none flex gap-2 items-center flex-1"
        >
          <p
            className={`button-s-regular ${
              !selected && "opacity-50"
            } text-left shrink-0 `}
          >
            {selected ? selected : "Pilih " + title}
          </p>
          <img
            src={ChevronDown}
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
        } z-50 absolute left-0 top-14 overflow-hidden w-full rounded-lg bg-white transition duration-300 ease-in-out border-[1px] border-primaryNavy-border`}
      >
        {data.map((item, index) => (
          <li
            key={index}
            className="pl-4 pr-5 py-3 active:bg-primaryBlue-main active:text-neutral-100 text-left text-s-regular cursor-pointer  hover:bg-primaryBlue-surface"
            onClick={handleItemClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
