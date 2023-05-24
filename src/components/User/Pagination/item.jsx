
export default function Item(props) {

  const { isActive, setIsActive, index, page } = props;
  const activeItem = "bg-[#4D74CC] text-white"
  console.log()
  const handleClick = () => {
    if (!isActive) {
      setIsActive(index)
    } else {
      setIsActive(index)
    }
  };
  return (

    <button
      onClick={handleClick}
      className={` border-[#EBEBEB] h-full text-neutral-700 border p-[12px_21px_12px_17px] ${isActive ? activeItem : "normal"} `}
    >
      {page}
    </button>
  );
}