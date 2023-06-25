import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function OptionBarNavItem(props) {
  const { icon, title, href, itemKey, index, isActive, setIsActive } = props;
  const handleClick = () => {
    setIsActive(index);
  };
  return (
    <Link
      key={itemKey}
      to={href}
      onClick={handleClick}
      className={`box-border flex items-center md:border-b-0 w-fit ${
        isActive && "text-primaryBlue-main border-b border-b-primaryBlue-main"
      } gap-8  text-neutral-900  p-4 md:hover:border-primaryBlue-main  md:w-full md:hover:bg-primaryBlue-surface md:text-neutral-900  md:hover:text-primaryBlue-main md:hover:font-bold md:hover:border-l-2`}
    >
      {icon}
      <span className="text-m-regular block  font-cairo truncate w-fit  ">
        {title}
      </span>
    </Link>
  );
}

OptionBarNavItem.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  itemKey: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  setIsActive: PropTypes.func.isRequired,
};
