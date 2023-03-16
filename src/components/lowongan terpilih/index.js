import LokerCard from "./Card";
import {lokers} from "../../data/loker"
export default function LowonganTerpilih(params) {

    return(
        <div className="m-5 p-2">
            <div className="flex justify-between">
            <h1 className="font-rajdhani text-2xl">Lowongan Terpilih</h1>
            <h1 className="font-rajdhani cursor-pointer  text-blue-500 text-xl">Lihat Semua</h1>
            </div>
            <div className=" grid grid-cols-4 w-fit mx-auto h-fit p-4 ">
                {
                    lokers.map((loker,index)=>{
                        return <LokerCard ker={index} jobTitle={loker.JobTitle} jobType={loker.JobType} jobPlace={loker.JobPlace} />
                    })
                }
            </div>
        </div>
    )
}