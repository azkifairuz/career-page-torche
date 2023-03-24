import React from "react";
import { Link } from "react-router-dom";

export default function Item(props) {
  const { icon, title, href } = props;
  return (
    <Link
      to={href}
      className="flex items-center w-full  gap-5  text-[#494949]  p-4"
    >
      {icon}
      <span className="text-m-regular font-cairo text-primaryBlue-hover">{title}</span>
    </Link>
  );
}