import React from "react";
import { Link } from "react-router-dom";

export default function Item(props) {
  const { icon, title, href } = props;
  return (
    <Link
      to={href}
      className="flex items-center w-full  gap-5 font-cairo hover:font-bold text-m-regular hover:border-l-2 hover:border-primaryBlue-hover hover:text-primaryBlue-hover hover:bg-primaryBlue-surface active:text-primaryBlue-main active:bg-primaryBlue-surface text-[#494949]  p-4"
    >
      {icon}
      <span className="text-m-regular font-cairo text-primaryBlue-hover">{title}</span>
    </Link>
  );
}