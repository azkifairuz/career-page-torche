import { useState } from "react";
import Item from "./item";
export default function Pagination() {
  const pages = [1, 2, 3];
  const [currentPage, setCurrentPage] = useState(0);
  console.log(currentPage)
  const btnNext = ()=>{
    setCurrentPage(currentPage+1)
  }
  const btnPrev = ()=>{
    setCurrentPage(currentPage-1)
  }
  return (
    <section className=" mt-[48px] w-fit h-fit bg-white  text-black flex justify-end items-center">
      <button 
      onClick={btnPrev}
      className="pr-[21px] border border-[#EBEBEB] pl-[17px] py-[10px] text-neutral-700 text-cairo text-xl-regular ">
        Prev
      </button>
      {
        pages.map((page,index)=>{
           return(
            <Item 
            key={index} 
            page={page}
            index={index}
            isActive = {currentPage === index}
            setIsActive = {setCurrentPage}
            />
           )
        })
      }
      <button 
      onClick={btnNext}
      className=" border border-[#EBEBEB] pr-[21px] pl-[17px] py-[10px]  text-neutral-700 text-cairo text-xl-regular ">
        Next
      </button>
    </section>
  );
}