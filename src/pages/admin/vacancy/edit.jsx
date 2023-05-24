import { useParams } from "react-router-dom";
import { vacancies } from "data/vacancy";

export default function Edit() {
  const { id } = useParams();
  const vacancy = vacancies.find((loker) => loker.id === id);

  return <div>edit</div>;
}
