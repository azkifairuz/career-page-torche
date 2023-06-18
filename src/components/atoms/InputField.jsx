import PropTypes from "prop-types";

export default function InputField(props) {
  const {
    title,
    type,
    placeholder,
    value,
    onChange,
    labelText,
    width,
    disabled,
  } = props;
  return (
    <div
      className={`relative flex flex-col gap-[8px] ${
        width ? width : "w-full"
      } font-cairo`}
    >
      <h1 className="font-[#151515] font-bold">{title}</h1>
      <label
        className={`text-xs-regular top-0 left-3 px-1 bg-gradient-to-t ${
          disabled ? "from-neutral-200" : "from-white"
        }  to-white absolute text-neutral-500`}
      >
        {labelText}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        min={1}
        disabled={disabled}
        className="w-full px-4 py-[10px] rounded-lg border-[1px] text-s-regular border-primaryNavy-border hover:border-primaryBlue-hover focus-visible:border-primaryBlue-main  focus:outline-none focus:border-primaryNavy-focus disabled:bg-neutral-200"
      />
    </div>
  );
}

InputField.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  labelText: PropTypes.string,
  width: PropTypes.string,
  disabled: PropTypes.bool,
};
