
export default function CategoryCard(props) {
    const {icon,Category,jumlah} = props
    return(

        <div className="w-[242px] py-8 px-4 shadow-card flex-shrink-0 flex flex-col items-center gap-4 rounded-md border  ">
            <img src={icon} alt='icon'>
                
            </img>
            <div className="heading-s-bold text-center font-bold font-rajdhani">{Category}</div>
            <div className="text-m-bold text-primaryBlue-main font-cairo">{jumlah} Vacancies</div>
        </div>
    )
}