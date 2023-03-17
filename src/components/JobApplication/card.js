import * as Icon from "react-bootstrap-icons"
export default function CardRequirement(props) {
        const Title = props
        return(
            <div className="px-4 py-2 flex font-rajdhani bg-blue-400 text-blue-600">
                <Icon.Check size={20} />
                {Title}
            </div>
        )
    
}