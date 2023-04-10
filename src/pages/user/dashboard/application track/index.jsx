import Card from "./Card"
import { ChevronDown } from "react-bootstrap-icons"
import { applications } from "data/application"


import Pagination from "components/User/Pagination"

function Tracking() {
     
        
         return (
            <div className="capitalize mt-14 mr-[100px] w-fit">
                <div className="flex justify-between mb-16 w-ful">
                    <h1 className="heading-l-bold">status lamaran</h1>
                    <select  className="border-2 flex flex-row items-center gap-11 text-xl-regular bg-primaryBlue-surface border-primaryBlue-border rounded-[4px] py-2 px-4 w-[160px]">
                        <option>Terbaru</option>
                        <ChevronDown size={20} color={"#5885E9"}/>
                    </select>
                </div>
                <div className="flex flex-col gap-6 w-full">
                        {applications.slice(0,5).map((data)=>{
                        return(
                            <Card posisi={data.posisi} status={data.status} isClosed={data.isClosed} tanggal={data.tanggal} perusahaan={data.perusahaan} salary={data.salary}/>
                        )
                    })}
                </div>
                <div>
                    <Pagination/>
                </div>
            </div>
           
         )
}
export default Tracking