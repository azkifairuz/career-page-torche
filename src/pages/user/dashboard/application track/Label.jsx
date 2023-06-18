export default function Label(props) {
  const { status } = props;
  let backgroundColor = "";
  let textColor = "";
  switch (status) {
    case "Interview":
      backgroundColor = "bg-secondary-tosca";
      textColor = "#151515";
      break;
    case "Tidak Lanjut":
      backgroundColor = "bg-primaryBlue-surface";
      textColor = "text-neutral-600";
      break;
    case "Screening Test":
      backgroundColor = "bg-primaryBlue-surface";
      textColor = "text-primaryBlue-main";
      break;
    case "Offering":
      backgroundColor = "bg-secondary-purple";
      textColor = "text-white";
      break;
    default:
      backgroundColor = "bg-white";
      break;
  }

  return (
    <span
      className={`px-8 py-2 rounded-lg  font-roboto text-[15px] leading-[22.5px] text-center ${backgroundColor} ${textColor}`}
      style={{ backgroundColor }}
    >
      {status}
    </span>
  );
}
