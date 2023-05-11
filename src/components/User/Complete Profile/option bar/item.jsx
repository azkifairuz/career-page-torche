import React from "react";
import { Link } from "react-router-dom";

export default function Item(props) {
  const { icon, title, href } = props;
  return (
    <Link
      to={href}
      className="flex items-center w-fit  gap-8  text-neutral-900  p-4 md:hover:border-primaryBlue-main  md:w-full md:hover:bg-primaryBlue-surface md:text-neutral-900  md:hover:text-primaryBlue-main md:hover:font-bold md:hover:border-l-2"
    >
      {icon}
      <span className="text-m-regular block  font-cairo truncate w-fit  ">{title}</span>
    </Link>
  );
}