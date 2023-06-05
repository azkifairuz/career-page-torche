import { X } from "react-bootstrap-icons";

export default function PopUpSort (props){
    const {onclick} = props
    return(
        <>
            <div className="w-[300px] border bg-white flex-col h-[160px] rounded-[40px] flex">
                <div className="self-end flex top-[20px] right-[30px] relative  content-start cursor-pointer">
                    <X 
                    size={30} 
                    color="#323232"
                    onClick={onclick}/>
                </div>
                <div className="flex ml-[40px] flex-col mt-[11px] gap-[20px]">
                    <h1 className="text-l-bold">Urutkan</h1>
                    <div className="flex gap-[44px]">
                        <label className="flex gap-[8px] text-s-regular" htmlFor="terbaru">
                            <input type="checkbox" className="w-5 h-5" />
                            Terbaru
                        </label>
                        <label className="flex gap-[8px] text-s-regular" htmlFor="terbaru">
                            <input type="checkbox" className="w-5 h-5" />
                            Terlama
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}