import React from "react";

export default function InputField(props) {
  const { title, type, placeholder, value, onChange } = props;
  return (
    <div className="flex flex-col gap-[8px] w-full font-cairo">
      <h1 className="font-[#151515] font-bold">{title}</h1>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-[16px] py-[10px] rounded-[8px] border-[1px] border-primaryNavy-border focus:outline-none focus:border-primaryNavy-focus "
      />
    </div>
  );
}
