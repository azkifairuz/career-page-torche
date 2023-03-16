import { useState } from "react";

import Table from "components/admin/TableApplicants";
import TabButton from "components/admin/TabButton";
import Pagination from "components/Pagination";

import { vacancies } from "data/vacancy";
import { applicants } from "data/applicants";

export default function Vacancy() {
  const [applicantsArr, setApplicantsArr] = useState(applicants[0].data);
  const [vacancySelected, setVacancySelected] = useState(vacancies[0]);
  const maxData = 100;

  const handleSelectChange = (e) => {
    e.preventDefault();
    setVacancySelected(vacancies.find((item) => item.title === e.target.value));
    setApplicantsArr(
      applicants.find((item) => item.title === e.target.value).data
    );
  };

  return (
    <main className="flex-1 p-8 font-cairo flex flex-col gap-4">
      <header className="flex justify-between items-center   ">
        <h1 className="font-bold font-rajdhani text-2xl">
          Kelola pelamar lowongan Anda di sini!
        </h1>
      </header>

      <select
        className="border-2 rounded-xl p-2 px-4 w-2/5 "
        value={vacancySelected.title}
        onChange={handleSelectChange}
      >
        {vacancies.map((item) => (
          <option value={item.title}>{item.title}</option>
        ))}
      </select>

      <div className="shadow-md w-full rounded-xl">
        <section className="bg-blue-800 text-white px-4 flex  rounded-t-xl">
          <TabButton title="Semua" active={true} />
        </section>
        <section className=" text-black px-4 flex">
          <button className="flex items-center gap-2 p-3 px-4 border-b-2 border-transparent border-b-blue-600">
            <h1 className="font-semibold font-rajdhani ">Belum diproses</h1>
            <p className="text-xs rounded bg-blue-200 font-bold p-2 py-1 text-blue-800">
              88
            </p>
          </button>

          <button className="flex items-center gap-2 p-3 px-4 border-b-2 border-transparent">
            <h1 className="font-semibold font-rajdhani ">Diproses</h1>
            <p className="text-xs rounded bg-blue-200 font-bold p-2 py-1 text-blue-800">
              88
            </p>
          </button>
        </section>
        <section className="p-4">
          <input
            placeholder="Cari Lowongan.."
            className="border-2 rounded-lg w-full py-2 px-4"
          />
        </section>
        <Table data={applicantsArr} />
        <Pagination maxData={maxData} />
      </div>
    </main>
  );
}
