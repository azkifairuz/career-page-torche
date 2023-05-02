import { vacancies } from "data/vacancy";

import VacancyCard from "components/molecules/VacancyCard";
import Card from "./Card";
import lamaran1 from "assets/icons/lamaran-1.svg";
import lamaran2 from "assets/icons/lamaran-2.svg";
import lamaran3 from "assets/icons/lamaran-3.svg";
import AdminNavbar from "components/organisms/AdminNavbar";

export default function AdminDashboard() {
  return (
    <div className="box-border flex-1 pb-[35px] pr-[100px] pl-[30px] bg-[#fcfdfd] font-cairo flex flex-col">
      <AdminNavbar />
      <h1 className="heading-l-bold">Welcome to Admin Career Page</h1>
      <section className="flex gap-4 mt-[55px]">
        <Card count="10" title="Lamaran Sedang Aktif" icon={lamaran1} />
        <Card count="10" title="Lamaran Belum Diproses" icon={lamaran2} />
        <Card count="10" title="Lamaran Sedang Diproses" icon={lamaran3} />
      </section>
      <section className="flex flex-col gap-[8px]">
        <h1 className="px-[12px] heading-m-medium mt-[31px]">
          Lowongan belum diproses terbanyak
        </h1>
        <div className="bg-white shadow rounded-xl p-[12px] w-full">
          <table className="w-full border-separate border-spacing-y-[4px]">
            <thead className="bg-primaryBlue-main text-neutral-100 rounded-[32px] heading-s-bold">
              <th
                align="left"
                className="p-[16px] pl-[37px] rounded-l-[32px] border-0 font-semibold"
              >
                Lowongan
              </th>
              <th className=" border-0 font-semibold">Jumlah Lamaran</th>
              <th className=" border-0 font-semibold">End Date</th>
              <th className="rounded-r-[32px] border-0 ">{""}</th>
            </thead>
            <tbody>
              {vacancies
                .filter((vacancy) => vacancy.status === "Aktif")
                .sort((a, b) => b.total - a.total)
                .map((vacancy, index) => (
                  <VacancyCard {...vacancy} key={index} index={index} />
                ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
