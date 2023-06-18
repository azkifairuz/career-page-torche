import PropTypes from "prop-types";

export default function ToggleSwitch(props) {
  const { isActive, onclick } = props;

  return (
    <div className="relative inline-block w-fit align-middle select-none transition duration-200 ease-in">
      <input
        type="checkbox"
        className="toggle-checkbox absolute block w-[56px] h-[24px] z-50 border-none appearance-none cursor-pointer"
        checked={isActive}
        onChange={onclick}
      />
      <label
        htmlFor="toggle"
        className={`toggle-label  overflow-hidden h-[24px] w-[56px] px-[4px] py-2 flex items-center rounded-full cursor-pointer ${
          isActive ? "bg-primaryBlue-border" : "bg-neutral-400"
        }`}
      >
        <span
          className={`${
            isActive
              ? "translate-x-[140%] bg-primaryBlue-main"
              : "translate-x-0 bg-neutral-700"
          } inline-block w-5 h-5 transform  rounded-full transition-transform`}
        ></span>
      </label>
    </div>
  );
}

ToggleSwitch.propTypes = {
  isActive: PropTypes.bool,
  onclick: PropTypes.func,
};
