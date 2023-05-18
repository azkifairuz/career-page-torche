import { useState } from "react";
import Item from "./item";
export default function Pagination() {
  const pages = [1, 2, 3];
  const [currentPage, setCurrentPage] = useState(0);
  const [isSelected,setIsSelected] = useState()

  const btnNext = () => {
    const nextIndex = (currentPage + 1) % pages.length;
    setIsSelected(pages[nextIndex]);
    setCurrentPage(nextIndex)
  }
  const btnPrev = () => {
    const prev = (currentPage -1 + pages.length) % pages.length;
    setIsSelected(pages[prev]);
    setCurrentPage(prev)
  }
  return (
    <section className="  w-fit h-fit bg-white  text-black flex justify-center items-center">
      <button
        onClick={btnPrev}
        className="p-[10px_21px_10px_17px] border hover:text-white hover:bg-primaryBlue-hover active:bg-primaryNavy-pressed md:border-[#EBEBEB] text-neutral-700 text-cairo text-xl-regular ">
        Prev
      </button>
      <section className="paginationLarge h-full md:block hidden">
        {
          pages.map((page, index) => {
            return (
              <Item
                key={index}
                page={page}
                index={index}
                isActive={currentPage === index}
                setIsActive={setCurrentPage}
              />
            )
          })
        }
      </section>

      <select id="SelectPage" value={isSelected}  onChange={(e) => setIsSelected(e.target.value)}  className="paginationMobile md:hidden bg-no-repeat bg-right bg-[url(assets/icons/chevron-down.svg)] appearance-none bg-white text-neutral-900 border text-xl-regular border-primaryBlue-border w-[64px] h-[48px] p-[10px_8px_10px_8px]">
        {
          pages.map(((page, index) => {
            return (<option key={index}>{page}
            </option>)
          }))
        }
      </select>
      <section className="md:hidden bg-white text-neutral-900 border text-xl-regular  p-[10px_21px_10px_17px]">
        /{pages.length}
      </section>
      <button
        onClick={btnNext}
        className="p-[10px_21px_10px_17px] border hover:text-white hover:bg-primaryBlue-hover active:bg-primaryNavy-pressed border-[#EBEBEB]  text-neutral-700 text-cairo text-xl-regular ">
        Next
      </button>
    </section>
  );
}