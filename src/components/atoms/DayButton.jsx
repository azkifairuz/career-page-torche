import PropTypes from "prop-types";

export default function DayButton(props) {
  const { day, onClick, active } = props;

  return (
    <button
      onClick={onClick}
      className={`py-[9px] pl-4 pr-5 rounded-lg border-[1px] hover:border-primaryBlue-main ${
        active
          ? "bg-primaryBlue-surface border-primaryBlue-main"
          : "border-primaryNavy-main"
      }`}
    >
      <p className=" text-center button-s-regular focus-within:text-primaryBlue-main ">
        {day}
      </p>
    </button>
  );
}

DayButton.propTypes = {
  day: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};
