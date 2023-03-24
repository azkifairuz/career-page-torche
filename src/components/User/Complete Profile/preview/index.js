import Pengalaman from "./experience";
import Pendidikan from "./pendidikan";
import Tentang from "./tentang";

export default function Preview(params) {
    return(
        <div className="flex flex-col gap-6 p-6 mx-auto justify-center items-center">
            <Tentang/>
            <Pengalaman/>
            <Pendidikan/>
        </div>
    )
}