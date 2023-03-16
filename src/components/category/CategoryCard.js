export default function CategoryCard(props) {
    const {icon,Category,jumlah} = props
    return(
        <div className="w-[300px] p-5 flex-col gap-4 rounded-md border shadow flex">
            <div>
                {icon}
            </div>
            <div className="text-xl font-bold font-rajdhani">{Category}</div>
            <div className="text-lg font-cairo">{jumlah} Tersedia</div>
        </div>
    )
}