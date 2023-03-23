import { vacancies } from "data/vacancy";

import VacancyCard from "components/admin/VacancyCard";
import Card from "./Card";
import lamaran1 from "assets/icons/lamaran-1.svg";
import lamaran2 from "assets/icons/lamaran-2.svg";
import lamaran3 from "assets/icons/lamaran-3.svg";

function Dashboard() {
  return (
    <div className="box-border flex-1 p-8 bg-[#fcfdfd] font-cairo flex flex-col gap-4">
      <section className="flex gap-4">
        <Card count="10" title="Lamaran Sedang Aktif" icon={lamaran1} />
        <Card count="10" title="Lamaran Belum Diproses" icon={lamaran2} />
        <Card count="10" title="Lamaran Sedang Diproses" icon={lamaran3} />
      </section>
      <section className="flex gap-4">
        <div className="bg-white shadow rounded-xl p-4 w-full">
          <h1 className="px-4 font-rajdhani font-semibold">
            Lowongan belum diproses terbanyak
          </h1>
          <table className="w-full border-separate border-spacing-y-4">
            <tr className="bg-primaryBlue-main text-neutral-100 rounded-[32px] heading-s-bold">
              <th
                align="left"
                className="p-[16px] px-[32px] rounded-l-[32px] border-0 font-semibold"
              >
                Lowongan
              </th>
              <th className=" border-0 font-semibold">Jumlah</th>
              <th className=" border-0 font-semibold">End Date</th>
              <th className="rounded-r-[32px] border-0 font-semibold">{""}</th>
            </tr>
            {/* sort vacancy according to belum diproses sum */}
            {vacancies
              .sort((a, b) => {
                return (
                  b.applicantsCount.belumDiproses -
                  a.applicantsCount.belumDiproses
                );
              })
              .slice(0, 3)
              .map((vacancy) => (
                <VacancyCard
                  key={vacancy.id}
                  vacancy={vacancy}
                  total={vacancy.applicantsCount.belumDiproses}
                  status="Belum diproses"
                />
              ))}
          </table>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
