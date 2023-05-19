import { PlusCircle } from "react-bootstrap-icons";
import { useState } from "react";
import PortfolioPopup from "../popup/portfolioPopup";
export default function Portfolio(params) {
    const [isCardOpen,setIsCardOpen] = useState(false)
    const handleCardOpen = ()=>{
      setIsCardOpen(!isCardOpen)
      console.log(isCardOpen);
    }
    return(
        <div className=" w-full flex flex-col gap-4 shadow-card rounded-lg p-6">
            <div onClick={handleCardOpen} className={` ${!isCardOpen && "hidden"} h-screen  fixed flex p-52 inset-0 overflow-scroll justify-center items-center  z-50 bg-opacity-50 w-full   bg-black`}>
                <div onClick={(event) => event.stopPropagation()} className="rounded-lg w-fit mt-72">
                    <PortfolioPopup onclick={handleCardOpen} />
                </div>
            </div>
            <div className="flex justify-between">
                <h1 className="heading-s-bold font-rajdhani">Portfolio</h1>
                <div 
                onClick={handleCardOpen}
                className="flex items-center cursor-pointer gap-2 py-1 px-2 text-white w-fit bg-primaryBlue-main rounded">
                    <PlusCircle size={12}/>
                    <p className="font-cairo text-s-regular">Tambah</p>
                </div>
            </div>           
            <div className="flex flex-col gap-8">
                <div className="md:flex gap-[32px]">
                    <h1 className="mb-2 md:w-[200px] text-l-bold font-cairo text-neutral-1000">Link Portfolio</h1>
                    <p className="text-l-regular font-cairo text-primaryBlue-main">https:..wwww/gada.com</p>
                </div>
                <div className="md:flex gap-[32px]">
                    <h1 className="mb-2 md:w-[200px]  text-l-bold font-cairo text-neutral-1000">Link Media Sosial</h1>
                    <p className="text-l-regular font-cairo text-primaryBlue-main">https:..wwww/gada.com</p>
                </div>
            </div>
        </div>
    )
}