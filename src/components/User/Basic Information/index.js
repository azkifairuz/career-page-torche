import React from "react";
export default function BasicInformation(params) {
    return(
        <div>
            <div className="p-4 shadow-card  rounded-lg">
                <header className="border-b-2 border-primaryBlue-main p-2">
                    <h1 className="font-rajdhani text-start heading-l-medium ">Basic Information</h1>
                </header>
                <form className="flex flex-col gap-4 mt-2">
                    <div className="flex flex-col gap-1">
                        <label className="font-cairo self-start text-neutral-800  cairo-xl-regular">Nama</label>
                        <input type="text" className="py-2 px-4 outline-2 rounded-md outline-primaryBlue-main outline focus:outline-primaryBlue-main focus:ring-1 focus:ring-primaryBlue-main"  />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-cairo self-start text-neutral-800 cairo-xl-regular">Title</label>
                        <input type="text" className="py-2 px-4 outline-2 rounded-md outline-primaryBlue-main outline focus:outline-primaryBlue-main focus:ring-1 focus:ring-primaryBlue-main"  />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-cairo self-start text-neutral-800 cairo-xl-regular">Bahasa</label>
                        <input type="text" className="py-2 px-4 outline-2 rounded-md outline-primaryBlue-main outline focus:outline-primaryBlue-main focus:ring-1 focus:ring-primaryBlue-main"  />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-cairo self-start text-neutral-800 cairo-xl-regular">Umu/Jenis Kelamin</label>
                        <input type="text" className="py-2 px-4 outline-2 rounded-md outline-primaryBlue-main outline focus:outline-primaryBlue-main focus:ring-1 focus:ring-primaryBlue-main"  />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-cairo self-start text-neutral-800 cairo-xl-regular">Gaj Sekarang (IDR)</label>
                        <input type="text" className="py-2 px-4 outline-2 rounded-md outline-primaryBlue-main outline focus:outline-primaryBlue-main focus:ring-1 focus:ring-primaryBlue-main"  />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-cairo self-start text-neutral-800 cairo-xl-regular">Gaji Yang Diharapkan(IDR)</label>
                        <input type="text" className="py-2 px-4 outline-2 rounded-md outline-primaryBlue-main outline focus:outline-primaryBlue-main focus:ring-1 focus:ring-primaryBlue-main"  />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-cairo self-start text-neutral-800 cairo-xl-regular">Deskripsi</label>
                        <textarea type="text" className="py-2 px-4 h-[167px] resize-none outline-2 rounded-md outline-primaryBlue-main outline focus:outline-primaryBlue-main focus:ring-1 focus:ring-primaryBlue-main"  ></textarea>
                    </div>
                </form>
            </div>
        </div>
    )
}