import { X } from "react-bootstrap-icons";
export default function AboutPopUp(params) {
    return (
        <div className="rounded-lg w-[537px]">
            <div className="p-[16px_32px_16px_32px] border border-neutral-400 flex justify-between">
                <h1 className="heading-s-bold">Tentang Saya</h1>
                <X size="16.48px" color="#727272" />
            </div>
            <div className="px-[32px]  py-[16px] flex flex-row gap-[16px]">
                <p className="text-l-regular text-neutral-900">Jelaskan singkat tentang dirimu agar perekrut dapat dengan mudah melihat kualifikasimu.</p>
                <textarea 
                type="text"
                className="h-[180px] w-full resize-none outline-1"> 

                </textarea>
            </div>
        </div>
    )
}