import { useState } from "react";
import Item from "./item";
export default function Pagination() {
  const pages = [1, 2, 3];
  const [currentPage, setCurrentPage] = useState(0);
  const btnNext = ()=>{
    if (currentPage+1 < pages.length) {
        setCurrentPage(currentPage+1)
    }else{
    setCurrentPage(currentPage-currentPage)
    }
  }
  const btnPrev = ()=>{
    if (currentPage > 0 ) {
      setCurrentPage(currentPage-1)
    }
    return
  }
  return (
    <section className=" mt-[48px] w-fit h-fit bg-white  text-black flex justify-end items-center">
      <button 
      onClick={btnPrev}
      className="pr-[21px] border  md:border-[#EBEBEB] pl-[17px] py-[10px] text-neutral-700 text-cairo text-xl-regular ">
        Prev
      </button>
      <section className="paginationLarge md:block hidden">
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
      </section>
      {/* <section className="paginationMobile md:hidden border-[#EBEBEB] bg-[#4D74CC] text-white border  py-[10px] px-[17px]">
        {
          currentPage+1
        }
      </section> */}
      <select className="paginationMobile md:hidden bg-no-repeat bg-right bg-[url(assets/icons/chevron-down.svg)] appearance-none bg-white text-neutral-900 border text-xl-regular border-primaryBlue-border w-[64px] h-[48px] py-[10px] px-2">
        {
          pages.map(((page,index) =>{
            return(<option key={index}>{page}</option>)
          }))
        }
      </select>
      <section className="md:hidden bg-white text-neutral-900 border text-xl-regular  pr-[21px] pl-[17px] py-[10px]">
        /{pages.length}
      </section>
      <button 
      onClick={btnNext}
      className=" border border-[#EBEBEB] pr-[21px] pl-[17px] py-[10px]  text-neutral-700 text-cairo text-xl-regular ">
        Next
      </button>
    </section>
  );
}