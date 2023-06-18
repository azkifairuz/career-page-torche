import PropTypes from "prop-types";

export default function SearchBar(props) {
  const { placeholder, icon, width } = props;
  return (
    <div
      className={`border-primaryNavy-border hover:border-primaryBlue-hover focus-within:border-primaryBlue-main border-[1px] px-3 py-[10px] rounded-[8px] flex gap-[12px] items-center ${width}`}
    >
      {icon}
      <input
        placeholder={placeholder}
        className="border-none focus:outline-none w-full text-neutral-1000"
      />
    </div>
  );
}

SearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  width: PropTypes.string,
};
