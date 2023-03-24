import React from "react";
import { Link } from "react-router-dom";

export default function Item(props) {
  const { icon, title, href } = props;
  return (
    <Link
      to={href}
      className="flex items-center w-fit  gap-8  text-[#494949]  p-4"
    >
      {icon}
      <span className="text-m-regular block  font-cairo truncate w-fit text-primaryBlue-hover">{title}</span>
    </Link>
  );
}