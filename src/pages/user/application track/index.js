import Card from "components/User/Application Tracking/Card"
import { applications } from "data/application"
function Tracking() {
    
         return applications.slice(0,5).map((data)=>{
                return(
                    <Card posisi={data.posisi} status={data.status} isClosed={data.isClosed} tanggal={data.tanggal} perusahaan={data.perusahaan}/>
                )
            })
}
export default Tracking