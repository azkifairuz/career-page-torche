import { Link } from "react-router-dom";

import TimerIcon from "assets/icons/timer.svg";

export default function Card(props) {
  const { name, place, type, category, src, id } = props;
  return (
    <Link
      className="rounded-lg bg-neutral-100 shadow-[0_1px_16px_rgba(0,0,0,0.2)] cursor-pointer hover:bg-neutral-1000 hover:bg-opacity-5"
      to={id}
    >
      <header>
        <img
          src={src}
          alt={name}
          className="w-full h-[140px] md:h-[200px] rounded-t-2 object-cover object-left-bottom"
        />
      </header>
      <main className="flex flex-col gap-2 p-4">
        <h1 className="heading-s-medium md:heading-m-medium">{name}</h1>
        <section className="text-neutral-1000 flex gap-1 text-s-regular md:text-m-regular">
          <span className="px-2 py-1 bg-secondary-yellow rounded-lg ">
            {type}
          </span>
          <span className="px-2 py-1 bg-secondary-tosca rounded-lg">
            {category}
          </span>
        </section>
        <section className="text-neutral-1000 flex justify-between items-center text-m-regular md:text-l-regular">
          <p>{place}</p>
          <span className="flex items-center gap-1">
            <img src={TimerIcon} alt="timer" />
            <p>3d left</p>
          </span>
        </section>
      </main>
    </Link>
  );
}
