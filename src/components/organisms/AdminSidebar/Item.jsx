import PropTypes from "prop-types";

import { Link } from "react-router-dom";

export default function Item(props) {
  const { src, title, href } = props;
  return (
    <Link
      to={href}
      className="flex gap-[20px] items-center px-4 py-3 hover:bg-neutral-300 rounded-lg"
    >
      <img src={src} alt={title} className="w-[22px]" />
      <p className="heading-s-medium">{title}</p>
    </Link>
  );
}

Item.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
