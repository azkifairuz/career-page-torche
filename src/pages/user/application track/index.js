import Card from "components/User/Application Tracking/Card"
import { applications } from "data/application"
function Tracking() {
        
         return (
            <div className="capitalize">
                <div className="flex justify-between mb-16">
                    <h1 className="heading-l-bold">status lamaran</h1>
                    <select  className="border-2 bg-primaryBlue-surface border-primaryBlue-border rounded-[4px] py-2 px-6">
                        <option>Terbaru</option>
                    </select>
                </div>
                <div>
                        {applications.slice(0,5).map((data)=>{
                        return(
                            <Card posisi={data.posisi} status={data.status} isClosed={data.isClosed} tanggal={data.tanggal} perusahaan={data.perusahaan}/>
                        )
                    })}
                </div>
            </div>
           
         )
}
export default Tracking