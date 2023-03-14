import Card from "../../../components/User/Application Tracking/Card"

export default function Terkirim(params) {
    const datas = [
        {
            "status":"Terkirim",
            "tanggal":"02 februari 2023",
            "perusahaan":"Torche",
            "posisi":"Front End",
            "isClosed":"Lowobgan Sudah Di tutup"
        },
        {
            "status":"Terkirim",
            "tanggal":"02 februari 2023",
            "perusahaan":"Torche",
            "posisi":"Front End",
            "isClosed":"Lowobgan Sudah Di tutup"
        },
        {
            "status":"Terkirim",
            "tanggal":"02 februari 2023",
            "perusahaan":"Torche",
            "posisi":"Front End",
            "isClosed":"Lowobgan Sudah Di tutup"
        },
        {
            "status":"Terkirim",
            "tanggal":"02 februari 2023",
            "perusahaan":"Torche",
            "posisi":"Front End",
            "isClosed":"Lowobgan Sudah Di tutup"
        },
    ]
    return(
        <div className=" flex  h-screen w-screen ">
            <div className="w-fit h-fit mx-auto my-10  grid md:grid-cols-2 grid-flow-row gap-2">
            {datas.map((data)=>{
                return <Card status={data.status} posisi={data.posisi} tanggal={data.tanggal} perusahaan={data.perusahaan} isClosed={data.isClosed} />
            })}
            </div>
        </div>
    )
}