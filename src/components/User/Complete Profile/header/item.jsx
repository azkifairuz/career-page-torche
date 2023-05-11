export default function Item(props) {
    const {title,desc}= props

    return(
        <div className="flex flex-col md:items-start items-center justify-center py-4 capitalize">
            <h1 className="font-cairo text-l-bold">{title}</h1>
            <p className="font cairo text-m-regular">{desc}</p>
        </div>
    )
}