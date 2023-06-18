import { useState } from "react";

import PropTypes from "prop-types";

import DetailsCard from "./detailsCard";

export default function Card(props) {
  const { posisi, salary, place, tanggal, category } = props;
  const categories = [];
  category.forEach((element) => {
    categories.push({ element });
  });

  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const handleDetailOpen = () => {
    setIsDetailOpen(!isDetailOpen);
  };

  return (
    <div className="p-4 md:min-w-[422px] rounded-lg flex shadow-[0px_0px_10px_0px_#0000001A] bg-neutral-100 gap-3 flex-col justify-between md:flex-row  ">
      <div
        onClick={handleDetailOpen}
        className={` ${
          !isDetailOpen && "hidden"
        }  fixed flex h-[100%] p-5  inset-0 overflow-scroll justify-center items-center  z-50 bg-opacity-50 w-full   bg-black`}
      >
        <div
          onClick={(event) => event.stopPropagation()}
          className="rounded-lg w-fit my-auto"
        >
          <DetailsCard onclick={handleDetailOpen} />
        </div>
      </div>
      <div className="flex flex-col w-full ">
        <div className="flex justify-between ">
          <h1 className="uppercase font-bold font-rajdhani text-[24px] leading-7">
            {posisi}
          </h1>
          <button
            onClick={handleDetailOpen}
            className="py-2 hidden md:block h-fit rounded-lg px-6  bg-primaryBlue-main font-cairo text-white capitalize active:bg-primaryBlue-pressed hover:bg-primaryBlue-hover"
          >
            details
          </button>
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-m-bold text-primaryBlue-main">Torche App</p>
          <p className="text-m-regular">Jakarta,Indonesia</p>
        </div>
        <h1 className="uppercase text-l-bold mt-2 text-primaryBlue-main">
          {salary}
        </h1>
        <div className="grid grid-cols-1 lg:flex lg:w-full w-1/2 place-content-start gap-[8px] mt-4">
          <div className="flex w-fit h-fit items-center gap-[5px]">
            <div className="h-fit bg-secondary-orange font-roboto text-[15px] cursor-default leading-[22.5px] w-fit text-center py-1 px-2 md:py-2 md:px-4 capitalize text-neutral-1000 rounded-lg">
              {place}
            </div>
            <div className=" h-fit bg-secondary-tosca font-roboto text-[15px] cursor-default leading-[22.5px] whitespace-nowrap w-fit text-center capitalize text-neutral-1000 md:py-2 md:px-4 py-1 px-2  rounded-lg">
              Marketing & Sales
            </div>
          </div>
          <div className="h-fit bg-primaryBlue-surface font-roboto text-[15px] cursor-default w-fit leading-[22.5px] text-center capitalize text-primaryBlue-main  md:py-2 md:px-4 py-1 px-2  rounded-lg">
            Digital Media
          </div>
        </div>
        <div className="flex flex-col mt-1  ">
          <h1 className="text-s-regular self-end lg:self-start text-neutral-700">
            Diikirim : {tanggal}
          </h1>
        </div>
      </div>
      <div className="md:hidden">
        <button className="py-2 h-fit  rounded-lg px-6 w-full bg-primaryBlue-main font-cairo text-white capitalize active:bg-primaryBlue-pressed hover:bg-primaryBlue-hover">
          details
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  posisi: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  tanggal: PropTypes.string.isRequired,
  category: PropTypes.array.isRequired,
};
