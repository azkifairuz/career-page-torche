import React from "react";
export default function BasicInformation(params) {
    return(
        <div>
            <div className="p-4 shadow-card lg:w-10/12 lg:max-w-[714px]  rounded-lg">
                <header className="border-b-2 border-primaryBlue-main p-2">
                    <h1 className="font-rajdhani text-start heading-l-medium ">Basic Information</h1>
                </header>
                <form className="flex flex-col lg:grid lg:grid-cols-2 gap-4 mt-2">
                    <div className="flex flex-col gap-1">
                        <label className="font-cairo self-start text-neutral-800  text-xl-regular">Nama</label>
                        <input type="text" className="py-2 px-4 outline-1 rounded-md outline-primaryBlue-main outline focus:outline-primaryBlue-main md:outline-neutral-700 focus:ring-1 focus:ring-primaryBlue-main"  />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-cairo self-start text-neutral-800 text-xl-regular">Title</label>
                        <input type="text" className="py-2 px-4 outline-1 rounded-md outline-primaryBlue-main outline focus:outline-primaryBlue-main md:outline-neutral-700 focus:ring-1 focus:ring-primaryBlue-main"  />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-cairo self-start text-neutral-800 text-xl-regular">Bahasa</label>
                        <input type="text" className="py-2 px-4 outline-1 rounded-md outline-primaryBlue-main outline focus:outline-primaryBlue-main md:outline-neutral-700 focus:ring-1 focus:ring-primaryBlue-main"  />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-cairo self-start text-neutral-800 text-xl-regular">Umur/Jenis Kelamin</label>
                        <input type="text" className="py-2 px-4 outline-1 rounded-md outline-primaryBlue-main outline focus:outline-primaryBlue-main md:outline-neutral-700 focus:ring-1 focus:ring-primaryBlue-main"  />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-cairo self-start text-neutral-800 text-xl-regular">Gaj Sekarang (IDR)</label>
                        <input type="text" className="py-2 px-4 outline-1 rounded-md outline-primaryBlue-main outline focus:outline-primaryBlue-main md:outline-neutral-700 focus:ring-1 focus:ring-primaryBlue-main"  />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="font-cairo self-start text-neutral-800 text-xl-regular">Gaji Yang Diharapkan(IDR)</label>
                        <input type="text" className="py-2 px-4 outline-1 rounded-md outline-primaryBlue-main outline focus:outline-primaryBlue-main focus:ring-1 md:outline-neutral-700 focus:ring-primaryBlue-main"  />
                    </div>
                    <div className="flex flex-col lg:col-span-2 gap-1">
                        <label className="font-cairo self-start text-neutral-800 text-xl-regular">Deskripsi</label>
                        <textarea type="text" className="py-2 px-4 h-[167px] resize-none outline-1 rounded-md outline-primaryBlue-main outline focus:outline-primaryBlue-main md:outline-neutral-700 focus:ring-1 focus:ring-primaryBlue-main"  ></textarea>
                    </div>
                </form>
            </div>
        </div>
    )
}