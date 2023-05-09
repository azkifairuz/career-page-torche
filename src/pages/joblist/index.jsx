import { vacancies } from "data/vacancy";

import Card from "./Card";
import Search from "./Search";

import CyberSecurity from "assets/images/joblist/cybersecurity.webp";
import Background from "assets/images/bg.webp";

export default function Joblist() {
  return (
    <section className="flex-1">
      <header className="box-border flex items-center justify-center py-14 md:p-[120px]">
        <img
          src={Background}
          alt="background"
          className="hidden md:block absolute w-full top-0 h-[580px] -z-10"
        />
        <h1 className="heading-xxl-bold md:text-neutral-100">Job List</h1>
      </header>
      <main className="flex flex-col gap-8 md:gap-6 px-4 md:px-8 lg:px-[100px]">
        <Search />
        <ul className="w-full grid md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-[24px] m-auto">
          {vacancies.map((vacancy,index) => (
            <Card
              key={vacancy.id+"-"+index}
              name={vacancy.name}
              type={vacancy.type}
              category={vacancy.category}
              place={vacancy.place}
              src={CyberSecurity}
              id={vacancy.id}
            />
          ))}
        </ul>
      </main>
      <section className="relative flex w-full items-center py-9 md:py-[60px] px-4 md:px-8 lg:px-[100px] justify-between">
        <p className="static md:absolute">
          Showing <b>12</b> of <b>23</b>
        </p>
        <div className="flex gap-1 p-1 text-l-regular md:mx-auto">
          <button className="bg-primaryBlue-main text-neutral-100 rounded-lg p-1">
            <p className=" w-[26px]">1</p>
          </button>
          <button className="text-neutral-1000 rounded-lg p-1 w-[26px]">
            <p className=" w-[26px]">2</p>
          </button>
        </div>
      </section>
    </section>
  );
}
