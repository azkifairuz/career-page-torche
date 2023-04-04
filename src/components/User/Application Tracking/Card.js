import {useState } from "react";
import * as Icon from "react-bootstrap-icons";
export default function Card(props) {
    const {posisi,perushaan,isClosed,tanggal,status}=props
 const [statusColor ,setStatusColor]= useState("bg-green-300")
 const [isClosedColor,setColor] = useState("text-red-700")


    return(
        <>
            <div className="flex gap-2 flex-col p-6 w-[830px] border-2 shadow rounded-lg ">
                <div className="flex justify-between items-center pb-2 border-b">
                    <div className="flex gap-2 items-center">
                        <div className={"py-2 px-4 text-green-700 font-bold text-sm font-cairo " + statusColor}>{status}</div>
                        <p className="text-sm  font-rajdhani font-thin">{tanggal}</p>
                    </div>
                    <div className="cursor-pointer">
                        <Icon.ThreeDotsVertical size={20}/>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                <div>
                    <h1 className="font-bold font-cairo">{posisi}</h1>
                    <p className="font-rajdhani">{perushaan}</p>
                    <p className={"text-[10px] font-rajdhani  mt-5 "+ isClosedColor }>{isClosed}</p>
                </div>
                <div className="self-end cursor-pointer">
                    <Icon.ArrowRightSquare size={25}/>
                </div>
                </div>
            </div>
        </>
    )
}
