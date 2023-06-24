import PropTypes from "prop-types";

import { CheckCircleFill } from "react-bootstrap-icons";

export default function PassValidationLabel(props) {
  const { color, label } = props;
  return (
    <div className="flex gap-[8px] items-center">
      <CheckCircleFill size={20} id="number-check" color={color} />
      <p className="text-neutral-1000 text-">{label}</p>
    </div>
  );
}

PassValidationLabel.propTypes = {
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
