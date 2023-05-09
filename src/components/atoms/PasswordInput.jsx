import { useState } from "react";
import { Eye, EyeSlash } from "react-bootstrap-icons";

export default function PasswordInput(props) {
  const [isVisible, setIsVisible] = useState(false);
  const { label, type, placeholder, value, onChange } = props;

  const handleClick = (e) => {
    e.preventDefault();
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex flex-col gap-[8px] w-full font-cairo">
      <label className="font-[#151515] font-bold">{label}</label>
      <div className="flex w-full px-[16px] py-[10px] rounded-[8px] border-[1px] border-primaryNavy-border focus:outline-none focus:border-primaryNavy-focus ">
        <input
          type={isVisible ? "text" : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="focus:outline-none w-full active:bg-none autofill:bg-none"
        />
        <button onClick={handleClick}>
          {isVisible ? <EyeSlash size={20} /> : <Eye size={20} />}
        </button>
      </div>
    </div>
  );
}
