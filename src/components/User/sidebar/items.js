import React from "react";
import { Link } from "react-router-dom";

export default function Item(props) {
  const { icon, title, href } = props;
  return (
    <Link
      to={href}
      className="flex gap-5 font-cairo hover:font-bold cairo-m-regular hover:border-l-2 hover:border-primaryBlue-main hover:text-primaryBlue-main hover:bg-primaryBlue-surface active:text-primaryBlue-main active:bg-primaryBlue-surface text-[#494949]  p-4"
    >
      {icon}
      <span>{title}</span>
    </Link>
  );
}