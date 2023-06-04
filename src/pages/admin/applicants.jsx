import { useState } from "react";
import { Search } from "react-bootstrap-icons";

import Table from "components/organisms/TableApplicants";
import ApplicantsTab from "components/molecules/ApplicantsTab";
import Pagination from "components/molecules/Pagination";
import SearchBar from "components/molecules/SearchBar";

import sort from "assets/icons/sort.svg"
import filter from "assets/icons/filter-bold.svg"

import { applicants } from "data/applicants";
import AdminNavbar from "components/organisms/AdminNavbar";
import PopUpSort from "components/molecules/PopUpSort";

export default function Applicants() {
  const [applicantsArr, setApplicantsArr] = useState(applicants[0].data);
  const [filterStatus, setFilterStatus] = useState("all");
  const maxData = 100;
  const [hidenSort,setHidenSort] = useState("hidden")
  const handleCardSort = () =>{
    setHidenSort(!hidenSort)
  }
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
      <section  className="flex gap-10 mt-4">
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
      <section className={`${hidenSort && "hidden"} block`}>
          <PopUpSort/>
      </section>
      <section className="flex gap-6 mt-6 w-full first:w-3/4 justify-between last:w-fit ">
        <SearchBar
          placeholder="Cari lowongan"
          icon={<Search color="#5885E9" />}
          width="w-[60%]"
        />
      <div className="flex gap-[50px] cursor-pointer">
        <div  className="flex gap-[11px] items-center">
            <img src={filter} alt="filter" />
            <h1 className="text-xl-bold">Filter</h1>
          </div>
          <div onClick={handleCardSort} className="flex gap-[11px] items-center cursor-pointer">
            <img src={sort} alt="sort" />
            <h1 className="text-xl-bold">Urutkat Pelamar</h1>
          </div>
      </div>
      </section>
      <div className="bg-white drop-shadow-[0_0_4px_rgba(0,0,0,0.25)] rounded-xl p-[12px] w-full mt-[54px]">
        <Table data={applicantsArr} />
      </div>
      <Pagination maxData={maxData} />
    </main>
  );
}
