import PropTypes from "prop-types";

import { Check } from "react-bootstrap-icons";

export default function CardRequirement(props) {
  const { title } = props;
  return (
    <div className="px-4 py-2 rounded-lg font-bold  shadow flex font-rajdhani bg-blue-200 text-blue-600">
      <Check size={20} />
      {title}
    </div>
  );
}

CardRequirement.propTypes = {
  title: PropTypes.string.isRequired,
};
