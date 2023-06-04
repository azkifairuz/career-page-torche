import { X } from "react-bootstrap-icons";

export default function PopUpSort (){
    return(
        <>
            <div className="w-[300px]  flex-col h-[160px] rounded-[40px] flex">
                <div className="self-end">
                    <X size={13.18} color="#323232"/>
                </div>
                <div className="flex gap-[44px]">
                    <h1 className="text-l-bold">Urutkan</h1>
                    <div>
                        <label className="flex gap-[8px]" htmlFor="terbaru">
                            <input type="checkbox" />
                            Terbaru
                        </label>
                        <label className="flex gap-[8px]" htmlFor="terbaru">
                            <input type="checkbox" />
                            Terlama
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}