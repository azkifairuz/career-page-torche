import * as Icon from "react-bootstrap-icons";
export default function CardRequirement(props) {
  return (
    <div className="px-4 py-2 rounded-lg font-bold  shadow flex font-rajdhani bg-blue-200 text-blue-600">
      <Icon.Check size={20} />
      {props.title}
    </div>
  );
}
