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
            datas.map(()=>{
                return(
                    <Card/>
                )
            })
}
export default Tracking