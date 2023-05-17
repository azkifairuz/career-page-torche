import { useState } from "react";
import { Search } from "react-bootstrap-icons";

import Table from "components/organisms/TableApplicants";
import ApplicantsTab from "components/molecules/ApplicantsTab";
import Pagination from "components/molecules/Pagination";
import Select from "components/atoms/Select";
import SearchBar from "components/molecules/SearchBar";

import { applicants } from "data/applicants";
import AdminNavbar from "components/organisms/AdminNavbar";

export default function Applicants() {
  const [applicantsArr, setApplicantsArr] = useState(applicants[0].data);
  const [filterStatus, setFilterStatus] = useState("all");
  const maxData = 100;

  const applicantStatus = [
    {
      title: "Belum Diproses",
      count: 48,
    },
    {
      title: "Diproses",
      count: 40,
    },
    {
      title: "Diterima",
      count: 40,
    },
    {
      title: "Ditolak",
      count: 24,
    },
    {
      title: "Disimpan",
      count: 40,
    },
  ];

  return (
    <main className="flex-1 pb-[35px] pr-[30px] lg:pr-[100px] pl-[30px] flex flex-col">
      <AdminNavbar />
      <h1 className="heading-l-bold ">Kelola Lowongan</h1>
      <section className="flex gap-10 mt-4">
        {applicantStatus.map((item, index) => (
          <ApplicantsTab
            key={index}
            title={item.title}
            count={item.count}
            active={filterStatus === item.title}
            setFilterStatus={setFilterStatus}
          />
        ))}
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
