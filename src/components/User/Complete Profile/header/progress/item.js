import React from "react";
import { Link } from "react-router-dom";

export default function Item(props) {
  const { icon, title, href } = props;
  return (
    <Link
      to={href}
      className="flex items-center w-full  text-[#494949]  p-4 lg:p-2"
    >
      {icon}
      <span className="text-m-regular font-cairo text-primaryBlue-hover cursor-pointer">{title}</span>
    </Link>
  );
}