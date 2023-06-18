import PropTypes from "prop-types";

export default function AuthButton(props) {
  const { onClick, name, type = "button", title } = props;
  return (
    <button
      onClick={onClick}
      name={name}
      type={type}
      className="w-full bg-primaryBlue-main hover:bg-primaryBlue-hover active:bg-primaryBlue-pressed  text-white focus:outline-none px-[14px] py-[16px] rounded-[8px] "
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
};
