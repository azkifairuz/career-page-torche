import React from "react";
export default function Contact(params) {
    return(
        <div>
            <div className="p-4 shadow-card rounded-lg">
                <header className="border-b-2 border-primaryBlue-main p-2">
                    <h1 className="font-rajdhani text-start heading-l-medium">Kontak</h1>
                </header>
                <form className="flex mt-2  flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label className="font-cairo self-start text-neutral-800 cairo-xl-regular">Phone</label>
                        <input type="text" className="py-2 px-4 outline-primaryBlue-main outline-2 rounded-md outline focus:outline-primaryBlue-main focus:ring-1 focus:ring-primaryBlue-main"  />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-cairo  self-start text-neutral-800 cairo-xl-regular">Alamat Email</label>
                        <input type="text" className="py-2 px-4 outline-primaryBlue-main outline-2 rounded-md  outline focus:outline-primaryBlue-main focus:ring-1 focus:ring-primaryBlue-main"  />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-cairo  self-start text-neutral-800 cairo-xl-regular">Negara</label>
                        <input type="text" className="py-2 px-4 outline-primaryBlue-main outline-2 rounded-md outline focus:outline-primaryBlue-main focus:ring-1 focus:ring-primaryBlue-main"  />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-cairo self-start text-neutral-800 cairo-xl-regular">Kota</label>
                        <input type="text" className="py-2 px-4 outline-primaryBlue-main outline-2 rounded-md outline focus:outline-primaryBlue-main focus:ring-1 focus:ring-primaryBlue-main"  />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-cairo self-start text-neutral-800 cairo-xl-regular">Alamat</label>
                        <textarea type="text" className="py-2 h-[167px] resize-none px-4 outline-primaryBlue-main outline-2 rounded-md outline focus:outline-primaryBlue-main focus:ring-1 focus:ring-primaryBlue-main"  ></textarea>
                    </div>
                </form>
            </div>
        </div>
    )
}