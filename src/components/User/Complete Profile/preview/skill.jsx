import { useState } from "react";
import { PlusCircle } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import SkillPopup from "../popup/skillPopup";

export default function Skill() {
    const navigate = useNavigate()
    const [isCardOpen,setIsCardOpen] = useState(false)
    const handleCardOpen = ()=>{
      setIsCardOpen(!isCardOpen)
      console.log(isCardOpen);
    }
    return(
        <div className="w-full flex flex-col gap-4 shadow-card rounded-lg p-6">
            <div  className={` ${!isCardOpen && "hidden"}   fixed flex p-52 inset-0 overflow-scroll justify-center items-center  z-50 bg-opacity-50 w-full   bg-black`}>
                <div className="rounded-lg w-fit ">
                    <SkillPopup onclick={handleCardOpen} />
                </div>
            </div>
            <div className="flex justify-between">
                <h1 className="heading-s-bold font-rajdhani">Skill</h1>
                <div 
                onClick={handleCardOpen}
                className="flex items-center gap-2 py-1 px-2 cursor-pointer  text-white w-fit bg-primaryBlue-main rounded">
                    <PlusCircle size={12}/>
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