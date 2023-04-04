import {useState } from "react";
import * as Icon from "react-bootstrap-icons";
export default function Card(props) {
    const {posisi,salary,place,tanggal,status}=props



    return(
        <div className="p-6 flex bg-neutral-400 gap-3 flex-col justify-between lg:w-[830px] w-full">
           <h1 className="uppercase font-bold font-rajdhani text-[24px] leading-7">{posisi}</h1>
            <div className="flex gap-[23px]">
                <p className="text-m-bold">Torche App</p>
                <p className="text-m-regular">{place}</p>
            </div>
            <h1 className="uppercase text-l-regular">{salary}</h1>
            <div className="text-m-regular w-fit py-1 px-2 border border-black">Dalam Review</div>
            <h1 className="text-s-regular">Diikirim : {tanggal}</h1>
        </div>
    )
}
