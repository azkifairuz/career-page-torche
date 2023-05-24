import { useState } from "react";
import { PlusCircle } from "react-bootstrap-icons";
import SkillPopup from "../popup/skillPopup";

export default function Skill() {
    const [isCardOpen,setIsCardOpen] = useState(false)
    const handleCardOpen = ()=>{
      setIsCardOpen(!isCardOpen)
      console.log(isCardOpen);
    }
    return(
        <div className="w-full flex flex-col gap-4 shadow-card rounded-lg p-6">
            <div onClick={handleCardOpen} className={` ${!isCardOpen && "hidden"}   fixed flex p-5 inset-0 overflow-scroll justify-center items-center  z-50 bg-opacity-50 w-full   bg-black`}>
                <div onClick={(event) => event.stopPropagation()} className="rounded-lg w-fit my-auto">
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
                <ul className=" grid w-fit gap-1 grid-cols-2 place-items-start md:flex text-[15px] leading-[22px] text-primaryBlue-main font-roboto text-m-regular ">
                    <li className="bg-primaryBlue-surface p-[1px_10px_2.5px_10px] rounded text-center">Javascript</li>
                    <li className="bg-primaryBlue-surface p-[1px_10px_2.5px_10px] rounded text-center">Bootstrap</li>
                    <li className="bg-primaryBlue-surface p-[1px_10px_2.5px_10px] rounded text-center">CSS</li>
                    <li className="bg-primaryBlue-surface p-[1px_10px_2.5px_10px] rounded text-center">Web Designing</li>
                    <li className="bg-primaryBlue-surface p-[1px_10px_2.5px_10px] rounded text-center">HTML</li>
                    <li className="bg-primaryBlue-surface p-[1px_10px_2.5px_10px] rounded text-center">Photoshop</li>
                </ul>
        </div>
    )
}