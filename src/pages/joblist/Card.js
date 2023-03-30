import { useNavigate } from "react-router-dom";

import TimerIcon from "assets/icons/timer.svg";

export default function Card(props) {
  const { title, place, type, category, src } = props;
  const navigate = useNavigate();
  return (
    <div className="rounded-[8px] bg-neutral-100 shadow-[0_1px_16px_rgba(0,0,0,0.2)] cursor-pointer hover:bg-neutral-1000 hover:bg-opacity-5" onClick={() => navigate("/user/jobapplication")}>
      <header>
        <img src={src} alt={title} className="w-full h-[200px] rounded-t-[8px] object-cover" />
      </header>
      <main className="flex flex-col gap-[8px] p-[16px]">
        <h1 className="heading-s-medium md:heading-m-medium">{title}</h1>
        <section className="text-neutral-1000 flex gap-[4px] text-s-regular md:text-m-regular">
          <span className="px-[8px] py-[4px] bg-secondary-yellow rounded-[8px]">{type}</span>
          <span className="px-[8px] py-[4px] bg-secondary-tosca rounded-[8px]">{category}</span>
        </section>
        <section className="text-neutral-1000 flex justify-between items-center text-m-regular md:text-l-regular">
          <p>
            {place}
          </p>
          <span className="flex items-center gap-[4px]">
            <img src={TimerIcon} alt="timer" />
            <p>3d left</p>
          </span>
        </section>
        {/* <div className="flex justify-between">
          <h1>{description}</h1>
          <button
            onClick={() => navigate("/user/jobapplication")}
            className="bg-blue-500 rounded-md text-white w-20 p-2  "
          >
            Lihat
          </button>
        </div> */}
      </main>
    </div>
  );
}
