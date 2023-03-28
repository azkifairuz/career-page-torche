export default function Card(props) {
    const {profil,name,kampus,feed} = props
    return(
        <div className="w-[285px] rounded-lg p-4 flex gap-4">
            <div className="flex gap-4">
                <img src={profil} alt="avatar" className="w-12 h-12 rounded-full" ></img>
                <div>
                    <h1 className="text-l-bold text-primaryBlue-main">{name}</h1>
                    <p className="text-s-regular text-neutral-900">{kampus}</p>
                </div>
                <div className="text-m-regular text-neutral-900">
                    "{feed}"
                </div>
            </div>
        </div>
    )
}