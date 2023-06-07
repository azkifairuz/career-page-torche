import React from "react";

export default function DayButton(props) {
  const { day, key, onClick, active } = props;

  return (
    <button
      onClick={onClick}
      key={key}
      className={`py-[9px] pl-4 pr-5 rounded-lg border-[1px] hover:border-primaryBlue-main ${
        active
          ? "bg-primaryBlue-surface border-primaryBlue-main"
          : "border-primaryNavy-main"
      }`}
    >
      <p className=" text-center button-s-regular focus-within:text-primaryBlue-main ">
        {day}
      </p>
    </button>
  );
}
