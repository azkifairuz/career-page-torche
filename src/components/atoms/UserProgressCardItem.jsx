import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function UserProgressCardItem(props) {
  const { icon, title, href } = props;
  return (
    <Link
      to={href}
      className="flex items-center w-full  text-[#494949]  p-4 lg:p-2"
    >
      {icon}
      <span className="text-m-regular font-cairo text-primaryBlue-hover cursor-pointer">
        {title}
      </span>
    </Link>
  );
}

UserProgressCardItem.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
