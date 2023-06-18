import { feedback } from "data/feedback";
import Card from "./card";
export default function Feedback(params) {
  return feedback.map((feed) => {
    return (
      <Card
        key={feed.id}
        profil={feed.profil}
        name={feed.name}
        kampus={feed.kampus}
        feed={feed.feedback}
      />
    );
  });
}
