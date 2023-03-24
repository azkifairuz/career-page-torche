import { Pencil, PlusCircle, Trash } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

export default function Pendidikan(params) {
    const navigate = useNavigate()
    return(
        <div className="max-w-[314px] w-full flex flex-col gap-4 shadow-card rounded-lg p-6">
            <div className="flex justify-between">
                <h1 className="heading-s-bold font-rajdhani">Pendidikan</h1>
                <div 
                onClick={()=>navigate("/tambahPengalaman")}
                className="flex  gap-2 py-1 px-2 text-white w-fit bg-primaryBlue-main rounded">
                    <PlusCircle/>
                    <p className="font-cairo text-s-regular">Tambah</p>
                </div>
            </div>
            <div>
                <div>
                    <h1 className="font-cairo text-neutral-1000 leading-7 text-[18px]">Universitas Padjadjaran</h1>
                    <h2 className="font-cairo text-[14px] leading-6 text-neutral-1000">Sarjana Ilmu Komunikasi</h2>
                    <h2 className="font-cairo text-[14px] leading-6 text-neutral-700">Agustus 2022 - Agustus 2023(1 tahun)</h2>
                   
                    <div className="flex mt-2 gap-3">
                        <div className="flex items-center text-primaryBlue-main gap-1">
                            {<Pencil size={12}/>}
                            <p className="font-cairo text-center text-s-regular">Edit</p>
                        </div>
                        <div className="flex gap-1 text-neutral-600 items-center">
                            {<Trash size={12}/>}
                            <p className="font-cairo text-center text-s-regular">Hapus</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}