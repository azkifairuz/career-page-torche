import { useState } from "react";

import ChevronDown from "assets/icons/chevron-down.svg";

export default function Select(props) {
  const { title, data, width, active, fit, isLabeled = false } = props;
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
    <div className={`relative flex flex-col flex-1 ${fit && "w-fit"}`}>
      {isLabeled && (
        <label className="text-neutral-1000 text-xs-regular -top-2 left-4 px-1 bg-white absolute">
          {title}
        </label>
      )}
      <div
        className={`border-primaryNavy-border border-[1px] py-3 px-4 rounded-lg flex gap-3 items-center ${
          width ? width : "w-full"
        }`}
      >
        <button
          onClick={handleClick}
          className="border-none justify-between focus:outline-none flex gap-2 items-center shrink flex-1"
        >
          <p className="text-neutral-1000 button-s-regular opacity-50 text-left shrink-0 ">
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
        } z-50 absolute left-0 top-12 p-2 min-w-full rounded-2 bg-white transition duration-300 ease-in-out border-[1px] border-neutral-300 shadow-[2px_4px_10px_rgba(19,47,159,0.25)]`}
      >
        {data.map((item, index) => (
          <li
            key={index}
            className="px-[16px] py-2 text-s-regular cursor-pointer"
            onClick={handleItemClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
