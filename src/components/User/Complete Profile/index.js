import HeaderSection from "./header";
import Preview from "./preview";

export default function CompleteProfil() {
    return(
        <div className="flex flex-col">
            {<HeaderSection/>}
            {<Preview/>}
        </div>
    )
}