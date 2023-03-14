import * as Icon from "react-bootstrap-icons";
export default function Card(params) {
    return(
        <>
            <div className="flex gap-2 flex-col p-5 w-[500px] border-2 shadow rounded-lg ">
                <div className="flex justify-between items-center pb-2 border-b">
                    <div className="flex gap-2 items-center">
                        <div className="py-2 px-4 bg-green-300 text-green-700 font-bold text-md">Diproses HRD</div>
                        <p className="text-sm font-rajdhani font-thin">2 february 2023</p>
                    </div>
                    <div className="cursor-pointer">
                        <Icon.ThreeDotsVertical size={20}/>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                <div>
                    <h1 className="font-bold font-cairo">Nama Lowongan</h1>
                    <p className="font-rajdhani">Nama Company</p>
                    <p className="text-[10px] font-rajdhani text-red-700 mt-5">Lowongan Sudah ditutup</p>
                </div>
                <div className="self-end cursor-pointer">
                    <Icon.ArrowRightSquare size={25}/>
                </div>
                </div>
            </div>
        </>
    )
}
