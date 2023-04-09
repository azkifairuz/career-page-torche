export default function Card(props) {
    const {posisi,salary,place,tanggal,status,category}=props



    return(
        <div className="py-6 px-8 flex shadow-[0px_0px_8px_0px_#00000033] bg-neutral-100 gap-3 flex-col justify-between lg:w-[830px] w-full">
           <div className="flex justify-between">
           <h1 className="uppercase font-bold font-rajdhani text-[24px] leading-7">{posisi}</h1>
           <button className="py-2 rounded-lg px-6 bg-primaryBlue-main font-cairo text-white capitalize active:bg-primaryBlue-pressed hover:bg-primaryBlue-hover">details</button>
           </div>
            <div className="flex gap-[23px]">
                <p className="text-m-bold text-primaryBlue-main">Torche App</p>
                <p className="text-m-regular">{place}</p>
            </div>
            <h1 className="uppercase text-l-bold text-primaryBlue-main">{salary}</h1>
            <div>
                <span className="block bg-primaryBlue-surface text-primaryBlue-main py-2 px-3 rounded-lg">{category}</span>
            </div>
            <div className="flex justify-between">
                <div className="text-m-regular w-fit py-1 px-2 capitalize text-primaryBlue-main bg-primaryBlue-surface border-black">{status}</div>
                <h1 className="text-s-regular">Diikirim : {tanggal}</h1>
            </div>
        </div>
    )
}
