import { vacancies } from "data/vacancy";

import Card from "./Card";
import Search from "./Search";

import CyberSecurity from "assets/images/joblist/cybersecurity.webp";
import Background from "assets/images/bg.webp";

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
          {vacancies.map((loker) => (
            <Card
              key={loker.id}
              title={loker.title}
              type={loker.type}
              category={loker.category}
              place={loker.place}
              src={CyberSecurity}
              id={loker.id}
            />
          ))}
        </ul>
      </main>
    </section>
  );
}
