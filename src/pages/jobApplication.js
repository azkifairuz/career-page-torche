import Information from "components/JobApplication/information"
import Requirement from "components/JobApplication/requirement"

function JobApplication() {
    return (
        <div className="min-h-screen w-1/2 mx-auto bg-gray-300">
            <Information/>
            <Requirement/>
        </div>
    )
}
export default JobApplication