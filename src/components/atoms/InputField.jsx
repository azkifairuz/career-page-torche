import React from "react";

export default function InputField(props) {
  const { title, type, placeholder, value, onChange, labelText } = props;
  return (
    <div className="relative flex flex-col gap-[8px] w-full font-cairo">
      <h1 className="font-[#151515] font-bold">{title}</h1>
      <label className=" text-xs-regular top-0 left-3 px-1 bg-white absolute text-neutral-500">
        {labelText}
      </label>
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
