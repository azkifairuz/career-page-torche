import PropTypes from "prop-types";

export default function AuthButton(props) {
  const { onClick, name, type = "button", title, isDisabled = false } = props;
  return (
    <button
      onClick={onClick}
      name={name}
      type={type}
      disabled={isDisabled}
      className="w-full disabled:bg-opacity-50 bg-primaryBlue-main hover:bg-primaryBlue-hover active:bg-primaryBlue-pressed  text-white focus:outline-none px-[14px] py-[16px] rounded-[8px] "
    >
      {title}
    </button>
  );
}

AuthButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
};
