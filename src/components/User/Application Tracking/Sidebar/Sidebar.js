import Logo from "../../../../assets/logos/Torche_Logo-01_White.png";
import * as Icon from "react-bootstrap-icons";
export default function Sidebar(params) {
    return(
        <aside className="flex flex-col w-[20vw] text-white bg-primary sticky top-0 left-0 h-screen py-8 px-6">
            <header className="cursor-pointer flex gap-2 items-center">
                <Icon.ChevronLeft size={20} className=""/>
                <h1 className="text-2xl font-rajdhani font-bold">Profil</h1>
            </header>
        </aside>
    )
}