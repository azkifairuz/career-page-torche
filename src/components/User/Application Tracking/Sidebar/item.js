import React from "react";
import { Link } from "react-router-dom";

export default function Item(props) {
  const { title, href} = props;

  
  return (
    <Link
      to={href}
      className="flex gap-6 items-center focus:bg-slate-500 active:bg-slate-500  px-4 py-3 hover:bg-slate-500 rounded-lg font-rajdhani font-medium"
    >
      
      <span>{title}</span>
    </Link>
  );
}