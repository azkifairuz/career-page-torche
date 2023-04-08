import { useState } from "react";

export default function Item(props) {
    
  const { isActive, setIsActive,index,page } = props;
  const activeItem = "bg-[#4D74CC] text-white"
  const [currentPage, setcurrentPage] = useState(null);
  console.log()
  const handleClick = () => {
    if (!isActive) {
        setIsActive(index)
    }else{
      setIsActive(index)
    }
  };
  return (

          <button
            onClick={handleClick}
            className={` border-[#EBEBEB] text-neutral-700 border  py-[10px] px-[17px] ${isActive ? activeItem : "normal"  } ` }
          >
            {page}
          </button>
  );
}