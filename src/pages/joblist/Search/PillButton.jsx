export default function PillButton(props) {
  const { isActive, name, onClick } = props;
  return (
    <button
      onClick={onClick}
      className={` ${
        isActive && "bg-primaryBlue-main text-white order-first"
      } px-[10px] py-1 border-[1px] rounded-lg border-primaryBlue-main text-neutral-1000 `}
    >
      {name}
    </button>
  );
}
