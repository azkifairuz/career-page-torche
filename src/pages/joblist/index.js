import { lokers } from "data/loker";
import CyberSecurity from "assets/images/joblist/cybersecurity.webp";

import Card from "./Card";

import Background from "assets/images/bg.webp";
import Search from "./Search";

export default function Joblist() {
  return (
    <section className="flex-1">
      <header className="box-border flex items-center justify-center p-[120px]">
        <img
          src={Background}
          alt="background"
          className="absolute w-full top-0 h-[85vh] -z-10"
        />
        <h1 className="heading-xxl-bold text-neutral-100">Job List</h1>
      </header>
      <main className="flex flex-col gap-[24px] md:px-[32px] lg:px-[100px]">
        <Search />
        <ul className="w-full grid md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-[24px] m-auto">
          {lokers.map((loker, index) => (
            <Card
              key={index}
              title={loker.title}
              type={loker.type}
              category={loker.category}
              place={loker.place}
              src={CyberSecurity}
            />
          ))}
        </ul>
      </main>
    </section>
  );
}
