import * as Icon from "react-bootstrap-icons"
export default function LokerCard(props) {
    return(
        <div className="border flex flex-col justify-between  shadow rounded-lg p-2  md:w-[20vw] h-52 m-2 ">
            <div>
                <h1 className="text-2xl font-rajdhani font-bold">JobTitle</h1>
                <div>
                    <Icon.Map/>
                    <p className="font-cai">Job Place</p>
                </div>
            </div>
            <button className="w-full py-2 px-4 bg-blue-500 tex-wite">Lihat</button>
        </div>
    )
}