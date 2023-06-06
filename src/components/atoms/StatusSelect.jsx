import { useState } from "react";
import { ChevronDown } from "react-bootstrap-icons";

export default function StatusSelect(props) {
  const { title, data, status } = props;
  const [isOpen, setIsOpen] = useState(false);

  const bgColors = {
    "All": "black",
    "Aktif": "success-border",
    "Tutup": "danger-border",
  };
  
  const textColors = {
    "All": "black",
    "Aktif": "success-hover",
    "Tutup": "danger-hover",
  }

  const [active, setActive] = useState(status);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (e) => {
    e.preventDefault();
    console.log(e.target.innerHTML);
    setActive(e.target.innerHTML);
    setIsOpen(false);
  };

  return (
    <div className="relative flex flex-col w-fit">
      <div
        className={`w-[104px] border-${bgColors[active]} bg-${
          active === "All" ? "white" : bgColors[active]
        } text-${
          textColors[active]
        } border-[1px] hover:border-primaryBlue-hover py-2 pl-4 pr-5 rounded-xl flex gap-3 items-center w-fit`}
      >
        <button
          onClick={handleClick}
          className="border-none flex-1 justify-between focus:outline-none flex gap-2 items-center"
        >
          <p className="text-l-bold">{active === "" ? "Pilih " + title : active}</p>
          <ChevronDown
            className={`${
              isOpen && "rotate-180"
            } transition duration-300 ease-in-out mt-[2px]`}
            color={bgColors[active]}
            size={12}
          />
        </button>
      </div>
      <ul
        className={`${
          !isOpen && "hidden"
        } z-50 absolute left-0 top-12 overflow-hidden w-full rounded-lg bg-white transition duration-300 ease-in-out border-[1px] border-primaryNavy-border`}
      >
        {data.map((item, index) => (
          <li
            key={index}
            className="pl-4 pr-5 py-2 text-left text-s-regular cursor-pointer  hover:bg-primaryBlue-surface"
            onClick={handleItemClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
