export default function CategoryCard(props) {
    const {icon,Category,jumlah} = props
    return(
        
        <div className="w-[242px] py-8 px-4 shadow-card flex-shrink-0 flex flex-col items-center gap-4 rounded-md border  ">
            <div>
                {icon}
            </div>
            <div className="text-xl font-bold font-rajdhani">{Category}</div>
            <div className="text-lg font-cairo">{jumlah} Tersedia</div>
        </div>
    )
}