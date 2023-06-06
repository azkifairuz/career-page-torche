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
      className={`box-border text-neutral-1000  rounded-[8px] flex flex-col flex-1 gap-3 ${
        (width || fit) && "w-fit"
      } max-h-[216px]  ${
        isOpen &&
        "z-50 -mx-2 -my-2 py-2 px-2 border-[1px] border-neutral-300 h-full shadow-[2px_4px_10px_rgba(19,47,159,0.25)]"
      } bg-white`}
    >
      <div
        className={`relative w-full ${fit && "w-fit"} ${width} ${
          isOpen ? "border-primaryBlue-main" : "border-primaryNavy-border"
        } hover:border-primaryBlue-hover  border-[1px] py-3 pl-4 pr-5 rounded-lg flex items-center`}
      >
        <label className="text-xs-regular -top-2 left-3 px-1 bg-white absolute text-neutral-500">
          {title}
        </label>
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
        }  activate-scroll origin-bottom transition duration-300 ease-in-out overflow-scroll`}
      >
        {data.map((item, index) => (
          <li
            key={index}
            className="px-4 py-2 text-s-regular cursor-pointer"
            onClick={handleItemClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
