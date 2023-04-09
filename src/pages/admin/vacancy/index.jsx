import { useState } from "react";
import { Link } from "react-router-dom";

import { Plus, Search } from "react-bootstrap-icons";

import TabButton from "components/admin/VacancyTab";
import Table from "components/organisms/TableVacancy";
import Pagination from "components/Pagination";
import Select from "components/atom/Select";
import SearchBar from "components/molecules/SearchBar";

export default function Vacancy() {
  const [filterStatus, setFilterStatus] = useState("all");
  const maxData = 100;
  return (
    <main className="flex-1 p-10 text-black">
      <header className="flex justify-between items-center">
        <h1 className="heading-l-bold ">Kelola Lowongan</h1>
        <Link
          to="create"
          className="bg-secondary-yellow rounded-xl flex items-center gap-2 px-3 py-2 shadow-[0_0_12px_rgba(255,174,95,0.5)]"
        >
          <Plus size={24} color="black" />
          <p className="text-white text-m-bold">Buat lowongan baru</p>
        </Link>
      </header>
      <section className="mt-4 flex gap-10">
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
      <section className="flex gap-6 mt-6 w-full first:w-4/5 last:w-fit">
        <SearchBar placeholder="Cari lowongan" icon={<Search />} width="w-4/5"  />
        <Select title="Kota" data={["Kota A", "Kota B"]} />
      </section>
      <div className="bg-white drop-shadow-[0_0_4px_rgba(0,0,0,0.25)] rounded-xl p-[12px] w-full mt-[54px]">
        <Table filterStatus={filterStatus} />
      </div>
      <Pagination maxData={maxData} />
    </main>
  );
}
