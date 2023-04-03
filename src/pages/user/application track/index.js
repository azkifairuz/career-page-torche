import Card from "components/User/Application Tracking/Card"

function Tracking() {
    const datas = [
        {
            "status":"Dilihat HRD",
            "tanggal":"02 februari 2023",
            "perusahaan":"Torche",
            "posisi":"Front End",
            "isClosed":"Lowobgan Sudah Di tutup"
        },
        {
            "status":"Dilihat HRD",
            "tanggal":"02 februari 2023",
            "perusahaan":"Torche",
            "posisi":"Front End",
            "isClosed":"Lowobgan Sudah Di tutup"
        },
        {
            "status":"Dilihat HRD",
            "tanggal":"02 februari 2023",
            "perusahaan":"Torche",
            "posisi":"Front End",
            "isClosed":"Lowobgan Sudah Di tutup"
        },
        {
            "status":"Dilihat HRD",
            "tanggal":"02 februari 2023",
            "perusahaan":"Torche",
            "posisi":"Front End",
            "isClosed":"Lowobgan Sudah Di tutup"
        },
    ]
         return datas.map((data)=>{
                return(
                    <Card posisi={data.posisi} status={data.status} isClosed={data.isClosed} tanggal={data.tanggal} perusahaan={data.perusahaan}/>
                )
            })
}
export default Tracking