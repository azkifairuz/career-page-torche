import Card from "./Card"

import { applications } from "data/application"


import Pagination from "components/User/Pagination"

function Tracking() {
     
        
         return (
            <div className="flex flex-col gap-[24px]">
                <div className="capitalize flex flex-col shadow-[0px_0px_10px_0px_#0000001A]  gap-4  p-6 md:px-[42px] md:py-8 ">
                <div className="flex justify-between items-center border-b pb-2 border-primaryBlue-border w-full">
                    <h1 className="heading-s-bold md:heading-l-bold">status lamaran</h1>
                    <select className={`appearance-none bg-no-repeat bg-right bg-[url(assets/icons/chevron-down.svg)] border-2  text-xl-regular text-neutral-900 w-[108px] flex flex-row items-center gap-11 text-xl-regular bg-primaryBlue-surface border-primaryBlue-border rounded-[4px] py-1 px-2`}>
                        <option>Terbaru</option>
                    </select>
                </div>
                <div className="flex flex-col gap-6 w-full">
                        {applications.slice(0,5).map((data,index)=>{
                        return(
                            <Card  key={index} posisi={data.posisi}  status={data.status} isClosed={data.isClosed} tanggal={data.tglDikirim} perusahaan={data.perusahaan} salary={data.salary}/>
                        )
                    })}
                </div>
                
            </div>
            <div className="flex justify-center">
            <Pagination/>
        </div>
           
            </div>
         )
}
export default Tracking