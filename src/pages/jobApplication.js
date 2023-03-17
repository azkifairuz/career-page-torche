import Description from "components/JobApplication/description"
import Information from "components/JobApplication/information"
import Requirement from "components/JobApplication/requirement"

function JobApplication() {
    return (
        <div className="min-h-screen w-1/2  mx-auto flex flex-col my-2  bg-gray-300">
            <div className="flex flex-col gap-4">
            <Information/>
            <Requirement/>
            <Description/>
            </div>
            <div className="p-2 bg-white">
            <button className="px-4 w-full text-wxl font-cairo rounded-md  bottom-0 py-2 bg-blue-500 text-white">Lamar</button>
            </div>
        </div>
    )
}
export default JobApplication