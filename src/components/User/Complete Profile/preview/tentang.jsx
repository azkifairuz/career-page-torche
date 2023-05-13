import { PencilFill } from "react-bootstrap-icons";
import AboutPopUp from "components/User/Complete Profile/popup/aboutPopup";
import { useState } from "react";
export default function Tentang() {
    const [isCardOpen, setIsCardOpen] = useState(false)
    const handleCardOpen = () => {
        setIsCardOpen(!isCardOpen)
        console.log(isCardOpen);
    }
    return (
        <div className=" w-full flex flex-col gap-4 shadow-card rounded-lg p-6">
            <div className={` ${!isCardOpen && "hidden"}  fixed flex inset-0 overflow-scroll justify-center items-center  z-50 bg-opacity-50 w-full   bg-black`}>
                <div className="rounded-lg w-fit ">
                    <AboutPopUp onclick={handleCardOpen} />
                </div>
            </div>
            <div className="flex justify-between">
                <h1 className="heading-s-bold font-rajdhani">Tentang</h1>
                <div
                    onClick={handleCardOpen}
                    className="flex items-center cursor-pointer  gap-2 py-1 px-2 text-white w-fit bg-primaryBlue-main rounded">
                    <PencilFill size={12} />
                    <p className="font-cairo text-s-regular">Edit</p>
                </div>
            </div>
            <div>
                <h1 className="text-m-regular font-cairo text-neutral-1000">Saya merupakan lulusan S1 Pendidikan Bahasa Inggris dengan pengalaman kerja di bidang penulisan kreatif dan copywriter kurang lebih dua tahun.</h1>
            </div>
        </div>
    )
}