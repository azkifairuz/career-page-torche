export default function CategoryCard(props) {
    const {icon,Category,jumlah} = props
    return(
        <div className="w-[20vw] rounded-md border shadow flex">
            <div>
                {icon}
            </div>
            <div>{Category}</div>
            <div>{jumlah}</div>
        </div>
    )
}