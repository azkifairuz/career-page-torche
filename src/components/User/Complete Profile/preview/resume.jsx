import { PlusCircle } from "react-bootstrap-icons";

export default function Resume(props) {

        return (
            <div className=" w-full flex flex-col gap-4 shadow-card rounded-lg p-6">
            
                <div className="flex justify-between">
                    <h1 className="heading-s-bold font-rajdhani">Resume</h1>
                    <div
                        className="flex items-center gap-2 py-1 px-2 cursor-pointer text-white w-fit bg-primaryBlue-main rounded">
                        <PlusCircle size={12} />
                        <p className="font-cairo text-s-regular">Tambah</p>
                    </div>
                </div>
                <div>
                    <h1 className="mb-2 text-l-bold font-cairo text-neutral-1000">Resume</h1>
                    <p className="text-l-regular font-cairo text-primaryBlue-main">cv.Resume.pdf</p>
                </div>
            </div>
        )
    }