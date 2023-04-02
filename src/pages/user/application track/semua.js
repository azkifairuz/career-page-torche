import Card from "components/User/Application Tracking/Card"

export default function Semua(params) {
    const datas = [
        {
            "status":"Dilihat HRD",
            "tanggal":"02 februari 2023",
            "perusahaan":"Torche",
            "posisi":"Front End",
            "isClosed":"Lowobgan Sudah Di tutup"
        },
        {
            "status":"Diproses HRD",
            "tanggal":"02 februari 2023",
            "perusahaan":"Torche",
            "posisi":"Front End",
            "isClosed":"Lowobgan Sudah Di tutup"
        },
        {
            "status":"Belum Terkirm",
            "tanggal":"02 februari 2023",
            "perusahaan":"Torche",
            "posisi":"Front End",
            "isClosed":"Lowobgan Sudah Di tutup"
        },
        {
            "status":"Ditolak",
            "tanggal":"02 februari 2023",
            "perusahaan":"Torche",
            "posisi":"Front End",
            "isClosed":"Lowobgan Sudah Di tutup"
        },
    ]
    return(
        <div className=" flex ">
            <div className="w-fit h-fit mx-auto my-10  flex flex-col gap-2">
            {datas.map((data)=>{
                return <Card status={data.status} posisi={data.posisi} tanggal={data.tanggal} perusahaan={data.perusahaan} isClosed={data.isClosed} />
            })}
            </div>
        </div>
    )
}