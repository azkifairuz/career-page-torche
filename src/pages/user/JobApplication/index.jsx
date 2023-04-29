import Card from "./card"
import { ChevronDown } from "react-bootstrap-icons"
import { applications } from "data/application"
import Pagination from "components/User/Pagination"

function JobApplication() {
     
        
         return (
            <div className="capitalize flex flex-col gap-4 w-fit p-6">
                <div className="flex justify-between border-b pb-2 border-primaryBlue-border w-ful">
                    <h1 className="heading-l-bold">Lamaran</h1>
                    <div>
                        <select className="border-2 text-xl-regular text-neutral-900 w-[108px] flex flex-row items-center gap-11 text-xl-regular bg-primaryBlue-surface border-primaryBlue-border rounded-[4px] py-1 px-2 ">
                        <option>Terbaru</option>
                        <ChevronDown size={20} color={"#5885E9"}/>
                    </select>
                    </div>
                </div>
                <div className="flex flex-col gap-6 w-full">
                        {applications.slice(0,5).map((data)=>{
                        return(
                            <Card posisi={data.posisi} place={data.place} time={data.status} isClosed={data.isClosed} tanggal={data.tglDikirim} perusahaan={data.perusahaan} salary={data.salary} category={data.category}/>
                        )
                    })}
                </div>
                <div>
                    <Pagination/>
                </div>
            </div>
           
         )
}
export default JobApplication