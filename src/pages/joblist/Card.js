import { useNavigate } from "react-router-dom";

export default function Card(props) {
  const navigate = useNavigate();
  return (
    <div className="w-full h-32 min-w-0  flex flex-col justify-evenly  m-auto p-2 border border-slate-500  text-black rounded-lg shadow shadow-slate-400 bg-slate-20 ">
      <h1>{props.jobTitle}</h1>
      <p>{props.company}</p>
      <div className="flex justify-between">
        <h1>{props.deskripsi}</h1>
        <button
          onClick={() => navigate("/user/jobapplication")}
          className="bg-blue-500 rounded-md text-white w-20 p-2  "
        >
          Lihat
        </button>
      </div>
    </div>
  );
}
