import { PencilFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

export default function Tentang(params) {
    const navigate = useNavigate()
    return(
        <div className="max-w-[314px] w-full flex flex-col gap-4 shadow-card rounded-lg p-6">
            <div className="flex justify-between">
                <h1 className="heading-s-bold font-rajdhani">Tentang</h1>
                <div 
                onClick={()=>navigate("/editTentang")}
                className="flex  gap-2 py-1 px-2 text-white w-fit bg-primaryBlue-main rounded">
                    <PencilFill/>
                    <p className="font-cairo text-s-regular">Edit</p>
                </div>
            </div>
            <div>
                <h1 className="text-m-regular font-cairo text-neutral-1000">Saya merupakan lulusan S1 Pendidikan Bahasa Inggris dengan pengalaman kerja di bidang penulisan kreatif dan copywriter kurang lebih dua tahun.</h1>
            </div>
        </div>
    )
}