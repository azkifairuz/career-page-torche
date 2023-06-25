import { useState } from "react";
import PropTypes from "prop-types";

import { Eye, EyeSlash } from "react-bootstrap-icons";

export default function PasswordInput(props) {
  const [isVisible, setIsVisible] = useState(false);
  const { title, placeholder, value, onChange } = props;

  return (
    <div className="flex flex-col gap-[8px] w-full font-cairo">
      <h1 className="font-[#151515] font-bold">{title}</h1>
      <div className="flex w-full px-[16px] py-[10px] rounded-[8px] border-[1px] border-primaryNavy-border hover:border-primaryBlue-hover focus-within:border-primaryBlue-main">
        <input
          type={isVisible ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="focus:outline-none w-full active:bg-none autofill:bg-none"
        />
        <button onClick={() => setIsVisible(!isVisible)} type="button">
          {isVisible ? <EyeSlash size={20} /> : <Eye size={20} />}
        </button>
      </div>
    </div>
  );
}

PasswordInput.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
