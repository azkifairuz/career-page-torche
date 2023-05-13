import point from "assets/icons/Torche_Point.svg"
export default function Benefit(params) {
    const benefitList = [
        {id:1,title:"Belajar langsung dari pengalaman"},
        {id:2,title:"Lingkungan kerja yang nyaman dan ramah"},
        {id:3,title:"Jam kerja yang flexibel"},
    ]

    return (
        <div className="flex flex-col gap-2">
            {benefitList.map((benefit)=>  {
                return (
                    <div className="flex gap-2  items-center">
                        <img src={point} alt="icon" className="w-5 h-4"></img>
                        <div className="text-m-bold  font-cairo">{benefit.title}</div>
                    </div>
                )
            })}
        </div>
    )
}