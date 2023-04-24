import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "react-bootstrap-icons";

import Table from "components/organisms/TableApplicants";
import TabButton from "components/admin/VacancyTab";
import Pagination from "components/molecules/Pagination";
import Select from "components/atoms/Select";
import SearchBar from "components/molecules/SearchBar";

import { vacancies } from "data/vacancy";
import { applicants } from "data/applicants";

export default function Applicants() {
  const [applicantsArr, setApplicantsArr] = useState(applicants[0].data);
  const [filterStatus, setFilterStatus] = useState("all");
  const [vacancySelected, setVacancySelected] = useState(vacancies[0]);
  const maxData = 100;

  const handleSelectChange = (e) => {
    e.preventDefault();
    setVacancySelected(vacancies.find((item) => item.name === e.target.value));
    setApplicantsArr(
      applicants.find((item) => item.name === e.target.value).data
    );
  };

  return (
    <main className="flex-1 p-8 font-cairo flex flex-col">
      <header className="flex justify-between items-center">
        <h1 className="heading-l-bold ">Kelola Lowongan</h1>
      </header>
      <section className="flex gap-10 mt-4">
        <TabButton
          filter="all"
          title="Semua lowongan"
          count={48}
          active={filterStatus === "all"}
          setFilterStatus={setFilterStatus}
        />
        <TabButton
          filter="aktif"
          title="Lowongan aktif"
          count={0}
          active={filterStatus === "aktif"}
          setFilterStatus={setFilterStatus}
        />
        <TabButton
          filter="tutup"
          title="Lowongan tutup"
          count={48}
          active={filterStatus === "tutup"}
          setFilterStatus={setFilterStatus}
        />
      </section>
      <section className="flex gap-6 mt-6 w-full first:w-4/5 last:w-fit ">
        <SearchBar
          placeholder="Cari lowongan"
          icon={<Search />}
          width="w-4/5"
        />
        <Select title="Kota" data={["Kota A", "Kota B"]} />
      </section>
      <div className="bg-white drop-shadow-[0_0_4px_rgba(0,0,0,0.25)] rounded-xl p-[12px] w-full mt-[54px]">
        <Table data={applicantsArr} />
      </div>  
      <Pagination maxData={maxData} />
    </main>
  );
}
