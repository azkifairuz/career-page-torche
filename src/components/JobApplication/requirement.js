import * as Icon from "react-bootstrap-icons"
export default function Requirement(params) {
    return(
        <div className="bg-white p-5 h-fitt w-full grid grid-cols-2">
            <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                    <Icon.Mortarboard size={20}/>
                    Pendidikan
                </div>
                <p>Minimal s1</p>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                    <Icon.Mortarboard size={20}/>
                    Pendidikan
                </div>
                <p>Minimal s1</p>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                    <Icon.Mortarboard size={20}/>
                    Pendidikan
                </div>
                <p>Minimal s1</p>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                    <Icon.Mortarboard size={20}/>
                    Pendidikan
                </div>
                <p>Minimal s1</p>
            </div>
        </div>
    )
}