import React from "react";
import { Link } from "react-router-dom";

export default function Item(props) {
  const { icon, title, href } = props;
  return (
    <Link
      to={href}
      className="flex items-center w-fit  gap-8  text-neutral-900  p-4 lg:hover:border-primaryBlue-main  lg:w-full lg:hover:bg-primaryBlue-surface lg:text-neutral-900  lg:hover:text-primaryBlue-main lg:hover:font-bold lg:hover:border-l-2"
    >
      {icon}
      <span className="text-m-regular block  font-cairo truncate w-fit  ">{title}</span>
    </Link>
  );
}