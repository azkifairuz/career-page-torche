import { useState } from "react";

import ChevronDown from "assets/icons/chevron-down.svg";

export default function SelectEditLowongan(props) {
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
      className={`relative box-border text-neutral-1000  rounded-[8px] flex flex-col items-center flex-1 gap-3 ${width}   ${
        isOpen && "-mx-2 px-2"
      } bg-white`}
    >
      <div
        className={`relative w-full ${fit && "w-fit"}  ${
          isOpen ? "border-primaryBlue-main z-50" : "border-primaryNavy-border "
        }  hover:border-primaryBlue-hover bg-white border-[1px] py-3 pl-4 pr-5 rounded-lg flex items-center transition-all duration-500 ease-in-out`}
      >
        <label className="text-xs-regular -top-2 left-3 px-1 bg-white absolute text-neutral-500">
          {title}
        </label>
        <button
          onClick={handleClick}
          className="border-none  justify-between focus:outline-none flex gap-2 items-center flex-1"
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
        className={`z-30 -my-2 absolute w-full max-h-[216px] rounded-lg flex flex-col border-[1px] border-neutral-300 shadow-[2px_4px_10px_rgba(19,47,159,0.25)] activate-scroll origin-bottom transition-all duration-500 ease-in-out overflow-scroll ${
          !isOpen && "border-none shadow-none bg-none border-0 max-h-[0%] "
        }`}
      >
        <div className="h-16 shrink-0" />
        {data.map((item, index) => (
          <li
            key={index}
            className="px-6 py-2 bg-white text-s-regular cursor-pointer hover:bg-primaryBlue-surface active:text-neutral-100 active:bg-primaryBlue-main "
            onClick={handleItemClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
