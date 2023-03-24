import Pengalaman from "./experience";
import Organisasi from "./organisasi";
import Pendidikan from "./pendidikan";
import Penghargaan from "./penghargaan";
import Portfolio from "./portofolio";
import Resume from "./resume";
import Skill from "./skill";
import Tentang from "./tentang";

export default function Preview(params) {
    return(
        <div className="flex flex-col gap-6 p-6 mx-auto justify-center items-center">
            <Tentang/>
            <Pengalaman/>
            <Pendidikan/>
            <Organisasi/>
            <Skill/>
            <Penghargaan/>
            <Portfolio/>
            <Resume/>
        </div>
    )
}