import * as Icon from "react-bootstrap-icons"
export default function LokerCard(props) {
    const {jobTitle,jobType,jobPlace} = props
    return(
        <div className="border flex flex-col justify-between  shadow rounded-lg p-4 min-w-[200px]  md:w-[20vw] h-52 m-2 ">
            <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-rajdhani mt-4 font-bold">{jobTitle}</h1>
                <div className="flex items-center gap-3">
                    <Icon.Circle/>
                    <p className="font-cairo">{jobPlace}</p>
                </div>
                <div className="flex items-center gap-3">
                    <Icon.Clock color="blue"/>
                    <p className="font-cairo">{jobType}</p>
                </div>
            </div>
            <button className="w-full py-2 px-4 bg-blue-500 text-white">Lihat</button>
        </div>
    )
}