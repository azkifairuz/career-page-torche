import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Item(props) {
  const { icon, title, href, isActive, setIsActive, index } = props;
  const activeLink =
    "border-primaryBlue-main border-l-2 border-primaryBlue-main text-primaryBlue-main";
  const normal = "";

  return (
    <Link
      onClick={() => {
        setIsActive(index);
      }}
      to={href}
      className={`flex items-center w-full  gap-5 font-cairo hover:font-bold text-m-regular hover:border-l-2 hover:border-primaryBlue-main hover:text-primaryBlue-main hover:bg-primaryBlue-surface active:text-primaryBlue-main active:bg-primaryBlue-surface text-[#494949]  p-4 ${
        isActive ? activeLink : normal
      } `}
    >
      {icon}
      <span>{title}</span>
    </Link>
  );
}

Item.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  setIsActive: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};
