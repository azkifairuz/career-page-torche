import { Pencil, PlusCircle, Trash } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import WorkPopup from "components/User/Complete Profile/popup/workExperiencePopup";
import { useState } from "react";

export default function Pengalaman(props) {
    const {onclick} = props
    const [isCardOpen,setIsCardOpen] = useState(false)
    const handleCardOpen = ()=>{
      setIsCardOpen(!isCardOpen)
      console.log(isCardOpen);
    }
    const navigate = useNavigate()
    return (
        <div className=" w-full flex flex-col gap-4 shadow-card rounded-lg p-6">
            <div className={` ${!isCardOpen && "hidden"}   fixed flex p-52 inset-0 overflow-scroll justify-center items-center  z-50 bg-opacity-50 w-full   bg-black`}>
                <div className="rounded-lg w-fit mt-[400px]">
                    <WorkPopup onclick={handleCardOpen} />
                </div>
            </div>
            <div className="flex justify-between">
                <h1 className="heading-s-bold font-rajdhani">Pengalaman Kerja</h1>
                <div
                    onClick={handleCardOpen}
                    className="flex  items-center cursor-pointer justify-center gap-2 py-1 px-2 text-white w-fit bg-primaryBlue-main rounded">
                    <PlusCircle size={12} />
                    <p className="font-cairo text-s-regular">Tambah</p>
                </div>
            </div>
            <div>
                <div>
                    <h1 className="font-cairo text-neutral-1000 leading-7 text-[18px]">UI/UX Designer</h1>
                    <h2 className="font-cairo text-[14px] leading-6 text-neutral-700">Agustus 2022 - Agustus 2023(1 tahun)</h2>
                    <ul className="p-4 list-disc text-m-regular font-cairo text-neutral-1000">
                        <li>Merancang dan memberikan antarmuka pengguna untuk aplikasi seluler dan web, termasuk wireframe, mockup, dan prototipe.</li>
                        <li>Melakukan penelitian pengguna dan pengujian ketergunaan untuk mengidentifikasi kebutuhan dan masalah pengguna, dan memasukkan umpan balik ke dalam desain.</li>
                    </ul>
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