import { lokers } from "data/loker";
import Card from "./Card";

export default function Joblist() {
  return (
    <div className="min-h-screen mt-10">
      <div className="w-10/12 grid md:grid-cols-2 grid-flow-row justify-items-stretch gap-5 m-auto">
        {lokers.map((loker, index) => (
          <Card
            key={index}
            jobTitle={loker.JobTitle}
            company={loker.CompanyName}
            deskripsi={loker.Deskripsi}
          />
        ))}
      </div>
    </div>
  );
}
