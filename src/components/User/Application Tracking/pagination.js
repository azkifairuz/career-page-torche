import { useState } from "react";
import { applications } from "data/application";
export default function Pagination() {
    const [page, setPage] = useState([1,2,3]);
    return (
      <section className=" mt-[48px] w-fit h-fit bg-white  text-black flex justify-end items-center">      
          <button className="pr-[21px] border border-[#EBEBEB] pl-[17px] py-[10px] text-neutral-700 text-cairo text-xl-regular ">
            Prev
          </button>
          {page.map((index)=>{
              return <p className="bg-primaryNavy-hover border-[#EBEBEB]  border text-white py-[10px] px-[17px]">{index}</p>
          })}
          <button className=" border border-[#EBEBEB] pr-[21px] pl-[17px] py-[10px]  text-neutral-700 text-cairo text-xl-regular ">
            Next
          </button>
      </section>
    );
}
