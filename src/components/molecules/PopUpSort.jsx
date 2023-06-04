import { X } from "react-bootstrap-icons";

export default function PopUpSort (){
    return(
        <>
            <div className="w-[300px] border    flex-col h-[160px] rounded-[40px] flex">
                <div className="self-end flex top-[21px] right-[41px] relative  content-start cursor-pointer">
                    <X size={30} color="#323232"/>
                </div>
                <div className="flex ml-[40px] flex-col mt-[11px] gap-[20px]">
                    <h1 className="text-l-bold">Urutkan</h1>
                    <div className="flex gap-[44px]">
                        <label className="flex gap-[8px] text-s-regular" htmlFor="terbaru">
                            <input type="checkbox" />
                            Terbaru
                        </label>
                        <label className="flex gap-[8px] text-s-regular" htmlFor="terbaru">
                            <input type="checkbox" />
                            Terlama
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}