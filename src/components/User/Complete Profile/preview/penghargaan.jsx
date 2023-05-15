import { Pencil, PlusCircle, Trash } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import AchivementPopup from "../popup/achivementPopup";
import { useState } from "react";

export default function Penghargaan(params) {
    const navigate = useNavigate()
    const [isCardOpen,setIsCardOpen] = useState(false)
    const handleCardOpen = ()=>{
      setIsCardOpen(!isCardOpen)
      console.log(isCardOpen);
    }
    return (
        <div className=" w-full flex flex-col gap-4 shadow-card rounded-lg p-6">
            <div onClick={handleCardOpen} className={` ${!isCardOpen && "hidden"}  h-screen fixed flex p-52 inset-0 overflow-scroll justify-center items-center  z-50 bg-opacity-50 w-full   bg-black`}>
                <div onClick={(event) => event.stopPropagation()} className="rounded-lg w-fit ">
                    <AchivementPopup onclick={handleCardOpen} />
                </div>
            </div>
            <div className="flex justify-between">
                <h1 className="heading-s-bold font-rajdhani">Penghargaan</h1>
                <div
                    onClick={handleCardOpen}
                    className="flex items-center cursor-pointer gap-2 py-1 px-2 text-white w-fit bg-primaryBlue-main rounded">
                    <PlusCircle size={12} />
                    <p className="font-cairo text-s-regular">Tambah</p>
                </div>
            </div>
            <div>
                <div>
                    <h1 className="font-cairo text-neutral-1000 font-normal leading-7 text-[18px]">Juara Nasional</h1>
                    <h2 className="font-cairo text-[14px] leading-6 text-neutral-1000">Mengambar</h2>
                    <h2 className="font-cairo text-[14px] leading-6 text-neutral-700">Agustus 2022 - Agustus 2023(1 tahun)</h2>

                    <div className="flex mt-2 gap-3">
                        <div className="flex items-center text-primaryBlue-main gap-1">
                            {<Pencil size={12} />}
                            <p className="font-cairo text-center text-s-regular">Edit</p>
                        </div>
                        <div className="flex gap-1 text-neutral-600 items-center">
                            {<Trash size={12} />}
                            <p className="font-cairo text-center text-s-regular">Hapus</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}