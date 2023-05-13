import * as Icon from "react-bootstrap-icons"
export default function Information(props) {
    return(
        <div className="bg-white p-5 h-fitt w-full flex justify-between">
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold text-blue-500 font-rajdhani ">Front-End Engineer</h1>
                <h1>Torche Education</h1>
                <div className="text-sm flex flex-col gap-3 font-cairo font-thin">
                    <div className="flex gap-2">
                        <Icon.Circle size={20}/>
                        <p>Remote</p>
                    </div>
                    <div className="flex gap-2">
                    <Icon.Clipboard size={20}/>
                        <p>Intern</p>
                    </div>
                </div>
            </div>
            <div className="h-full">
                <Icon.Heart size={20}/>
            </div>
        </div>
    )
}