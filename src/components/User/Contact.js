import React from "react";
import { Textarea } from "react-bootstrap-icons";
export default function Contact(params) {
    return(
        <div>
            <div>
                <header className="border-b border-primaryBlue-main p-2">
                    <h1 className="font-rajdhani heading-l-medium">Kontak</h1>
                </header>
                <form>
                    <div className="flex flex-col">
                        <label className="font-cairo self-start cairo-xl-regular">Phone</label>
                        <input type="text" className="py-2 px-4 outline-primaryBlue-main outline-2 rounded-md outline focus:outline-primaryBlue-main focus:ring-1 focus:ring-primaryBlue-main"  />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-cairo  cairo-xl-regular">Alamat Email</label>
                        <input type="text" className="py-2 px-4 outline-primaryBlue-main outline-2 rounded-md  outline focus:outline-primaryBlue-main focus:ring-1 focus:ring-primaryBlue-main"  />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-cairo  cairo-xl-regular">Negara</label>
                        <input type="text" className="py-2 px-4 outline-primaryBlue-main outline-2 rounded-md outline focus:outline-primaryBlue-main focus:ring-1 focus:ring-primaryBlue-main"  />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-cairo  cairo-xl-regular">Kota</label>
                        <input type="text" className="py-2 px-4 outline-primaryBlue-main outline-2 rounded-md outline focus:outline-primaryBlue-main focus:ring-1 focus:ring-primaryBlue-main"  />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-cairo  cairo-xl-regular">Alamat</label>
                        <textarea type="text" className="py-2 h-[167px] resize-none px-4 outline-primaryBlue-main outline-2 rounded-md outline focus:outline-primaryBlue-main focus:ring-1 focus:ring-primaryBlue-main"  ></textarea>
                    </div>
                </form>
            </div>
        </div>
    )
}