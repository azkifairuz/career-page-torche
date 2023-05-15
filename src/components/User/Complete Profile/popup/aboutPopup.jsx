import { X } from "react-bootstrap-icons";
export default function AboutPopUp(props) {
    const {onclick} = props
    return (
        <form className="rounded-lg z-50 w-[537px] bg-white">
            <div className="p-[16px_32px_16px_32px] border-b border-neutral-400 flex items-center justify-between">
                <h1 className="heading-s-bold">Tentang Saya</h1>
                <X
                    size={25}
                    color="#727272"
                    className="cursor-pointer"
                    onClick={onclick} />
            </div>
            <div className="px-[32px]  py-[16px] flex flex-col gap-[16px]">
                <p className="text-l-regular text-neutral-900">Jelaskan singkat tentang dirimu agar perekrut dapat dengan mudah melihat kualifikasimu.</p>
                <textarea 
                type="text"
                className="h-[180px] border rounded-[4px] px-[16px] py-2 border-neutral-700 w-full resize-none focus:border-primaryBlue-main"> 

                </textarea>
            </div>
            <div className="w-full border-t border-neutral-400 py-[16px] px-[32px] gap-[16px] flex justify-end items-center">
            <button 
            onClick={onclick} 
            type="button" 
            className="py-[9px] px-[16px] hover:bg-neutral-300 font-rajdhani border border-neutral-700 rounded-lg">Cancel</button>
            <button className="py-[9px] px-[24px] font-rajdhani bg-primaryBlue-main text-white active:bg-primaryBlue-pressed hover:bg-primaryBlue-hover rounded-lg">Save</button>
            </div>
        </form>
    )
}