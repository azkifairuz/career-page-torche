import LokerCard from "./Card";
import {lokers} from "../../data/loker"
export default function LowonganTerpilih(params) {

    return(
        <div className="m-5 p-2">
            <h1 className="font-rajdhani text-2xl">Lowongan Terpilih</h1>
            <div className="w-screen grid grid-flow-col h-fit p-4 overflow-x-scroll">
                {
                    lokers.map((loker,index)=>{
                        return <LokerCard ker={index} jobTitle={loker.JobTitle} jobType={loker.jobType} />
                    })
                }
            </div>
        </div>
    )
}