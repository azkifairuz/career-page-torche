import { PencilFill, PlusCircle } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

export default function Portfolio(params) {
    const navigate = useNavigate()
    return(
        <div className="max-w-[314px] w-full flex flex-col gap-4 shadow-card rounded-lg p-6">
            <div className="flex justify-between">
                <h1 className="heading-s-bold font-rajdhani">Portfolio</h1>
                <div 
                onClick={()=>navigate("/tambahPortfolio")}
                className="flex  gap-2 py-1 px-2 text-white w-fit bg-primaryBlue-main rounded">
                    <PlusCircle/>
                    <p className="font-cairo text-s-regular">Tambah</p>
                </div>
            </div>           
            <div>
                <div>
                    <h1 className="mb-2 text-l-bold font-cairo text-neutral-1000">Link Portfolio</h1>
                    <p className="text-l-regular font-cairo text-primaryBlue-main">https:..wwww/gada.com</p>
                </div>
                <div>
                    <h1 className="mb-2 text-l-bold font-cairo text-neutral-1000">Link Media Sosial</h1>
                    <p className="text-l-regular font-cairo text-primaryBlue-main">https:..wwww/gada.com</p>
                </div>
            </div>
        </div>
    )
}