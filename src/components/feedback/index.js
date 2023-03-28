import { feedback } from "data/feedback";
import Card from "./card";
export default function Feedback(params) {
    feedback.map((feed)=>{
        return <Card profil={feed.profil} name={feed.name} kampus={feed.kampus} feed={feed.feedback} />
    })

}