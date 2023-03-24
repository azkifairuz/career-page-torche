import { PlusCircle } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

export default function Skill(params) {
    const navigate = useNavigate()
    return(
        <div className="max-w-[314px] w-full flex flex-col gap-4 shadow-card rounded-lg p-6">
            <div className="flex justify-between">
                <h1 className="heading-s-bold font-rajdhani">Skill</h1>
                <div 
                onClick={()=>navigate("/tambahSkill")}
                className="flex  gap-2 py-1 px-2 text-white w-fit bg-primaryBlue-main rounded">
                    <PlusCircle/>
                    <p className="font-cairo text-s-regular">Tambah</p>
                </div>
            </div>           
                <ul className=" grid w-fit gap-x-3 grid-cols-2  text-primaryBlue-main font-cairo text-m-regular ">
                    <li>Javascript</li>
                    <li>Bootstrap</li>
                    <li>CSS</li>
                    <li>Web Designing</li>
                    <li>HTML</li>
                    <li>Photoshop</li>
                </ul>
        </div>
    )
}