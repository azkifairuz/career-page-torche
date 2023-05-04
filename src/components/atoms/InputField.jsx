import React from "react";

export default function InputField(props) {
  const { label, type, placeholder, value, onChange } = props;
  return (
    <div className="flex flex-col gap-[8px] w-full font-cairo">
      <label className="font-[#151515] font-bold">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-[16px] py-[10px] rounded-[8px] border-[1px] border-primaryNavy-border focus:outline-none focus:border-primaryNavy-focus cursor-pointer"
      />
    </div>
  );
}
