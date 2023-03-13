import React from "react";

export default function TabButton(props) {
  const { title, count = null, active } = props;
  return (
    <button
      className={`flex items-center gap-2 p-4 border-b-2 border-transparent ${
        active && "border-b-orange-500"
      }`}
    >
      <h1 className="font-semibold font-rajdhani ">{title}</h1>
      {count !== null && <p className="text-xs rounded font-semibold bg-white p-[6px] py-[0.5px] text-blue-800">
        {count}
      </p>}
    </button>
  );
}
