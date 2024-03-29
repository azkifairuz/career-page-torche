import { useState } from "react";
import PropTypes from "prop-types";

import Item from "../atoms/UserProgressCardItem";

import ArrowDown from "assets/icons/chevron-down.svg";

export default function UserProgressCard(props) {
  const { percent } = props;
  const itemData = [
    { id: 1, href: "/tentang", title: "Tentang" },
    { id: 2, href: "/pengelaman", title: "Pengalaman Kerja" },
    { id: 3, href: "/pendidikan", title: "Pendidikan" },
    { id: 4, href: "/organisasi", title: "Organisasi" },
    { id: 5, href: "/skill", title: "Skill" },
    { id: 6, href: "/pernghargaan", title: "Pernghargaan" },
    { id: 7, href: "/portofolio", title: "Portofolio" },
    { id: 8, href: "/resume", title: "Resume" },
  ];
  const [IsOpen, setIsOpen] = useState(false);
  const [indexAkhir, setIndexAkhir] = useState(4);
  const [indexAkhirSm, setIndexAkhirSm] = useState(2);
  const handleOpen = () => {
    if (!IsOpen) {
      setIndexAkhir(8);
      setIndexAkhirSm(8);
      setIsOpen(!IsOpen);
    } else {
      setIsOpen(!IsOpen);
      setIndexAkhir(4);
      setIndexAkhirSm(2);
    }
  };
  return (
    <div className="md:static shadow-card  rounded-2xl z-50 md:py-2 md:mt-8 md:px-8 bg-white lg:min-w-[50%] lg:max-w-[397px] p-9 text-start">
      <div className="flex gap-2 mb-3 text-black ">
        <h1 className="font-cairo text-l-regular">Profile</h1>
        <span className="font-cairo text-l-bold">{percent}%</span>
      </div>
      <div>
        <div className="flex justify-between z-20 items-center relative text-black">
          <div
            style={{ width: `${percent}%` }}
            className="absolute bg-primaryBlue-main top-1/2 left-0 h-1  -translate-y-1/2 -z-10 rounded-md"
          ></div>
          <div className="absolute  bg-neutral-300 top-1/2 left-0 h-1 -translate-y-1/2 -z-20 rounded-md w-full  "></div>
        </div>
      </div>
      <div
        className={`text-start hidden lg:block lg:pl-2 mt-3 gap-2 z-20 -ml-5  first-letter ${
          !IsOpen ? "md:hidden" : "md:block"
        } `}
      >
        {itemData.slice(0, indexAkhir).map((item) => {
          return <Item key={item.id} href={item.href} title={item.title} />;
        })}
      </div>
      <div
        className={`text-start mt-3 md:hidden gap-2 z-20 -ml-5 block first-letter  `}
      >
        {itemData.slice(0, indexAkhirSm).map((item) => {
          return <Item key={item.id} href={item.href} title={item.title} />;
        })}
      </div>
      <div
        onClick={handleOpen}
        className="flex gap-2 cursor-pointer mt-3 items-center"
      >
        {
          <img
            alt="arrow"
            src={ArrowDown}
            className={`${
              IsOpen && "rotate-180"
            } transition-all duration-300 ease-in-out`}
          />
        }
        <p className="text-neutral-600 font-cairo text-m-regular">
          Tampilkan Semua
        </p>
      </div>
    </div>
  );
}

UserProgressCard.propTypes = {
  percent: PropTypes.number.isRequired,
};
