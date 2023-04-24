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
        className={`border-${bgColors[active]} bg-${
          bgColors[active] === "black" ? "white" : bgColors[active]
        } text-${
          textColors[active]
        } border-[1px] py-2 px-4 rounded-xl flex gap-3 items-center w-fit`}
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
