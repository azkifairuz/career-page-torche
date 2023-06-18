import { useState } from "react";
import { Search } from "react-bootstrap-icons";

import Table from "components/organisms/TableApplicants";
import ApplicantsTab from "components/molecules/ApplicantsTab";
import Pagination from "components/molecules/Pagination";
import SearchBar from "components/molecules/SearchBar";

import sort from "assets/icons/sort.svg";
import filter from "assets/icons/filter-bold.svg";

import { applicants } from "data/applicants";
import AdminNavbar from "components/organisms/AdminNavbar";
import PopUpSort from "components/molecules/PopUpSort";
import PopUpFilter from "components/molecules/PopUpFilter";
import { click } from "@testing-library/user-event/dist/click";

export default function Applicants() {
  const [applicantsArr, setApplicantsArr] = useState(applicants[0].data);
  const [filterStatus, setFilterStatus] = useState("all");
  const maxData = 100;
  const [hidenSort, setHidenSort] = useState("hidden");
  const [hidenFilter, setHidenFilter] = useState("hidden");
  const [sortOrder, setSortOrder] = useState("terbaru");
  const [lastEduFilter, setLastEduFilter] = useState("all");

  // Sorting data berdasarkan bulan
  const sortedData = [...applicantsArr]
    .sort((a, b) => {
      const dateA = new Date(a.appliedAt);
      const dateB = new Date(b.appliedAt);
      if (sortOrder === "terbaru") {
        return dateB - dateA; // Urutan terbaru
      }
      return dateA - dateB; // Urutan terlama
    })
    .filter((item) => {
      if (lastEduFilter === "all") {
        return item.lastEducation;
      }
      return item.lastEducation === lastEduFilter;
    });

  const handleSort = (order) => {
    setSortOrder(order);
  };

  const handlePopUpSort = () => {
    setHidenSort(!hidenSort);
  };

  const handlePopUpFilter = () => {
    setHidenFilter(!hidenFilter);
  };
  //filter pura pura
  const handleFilter = (order) => {
    handlePopUpFilter();
    setLastEduFilter("S1");
  };

  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      // Memastikan bahwa event.target adalah elemen section
      setHidenFilter("hidden");
      setHidenSort("hidden");
    }
  };
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
      {/* hidden popup section */}
      <section
        onClick={handleOutsideClick}
        className={`${
          hidenSort && "hidden"
        } h-screen fixed flex p-5 inset-0 overflow-scroll justify-center 
          items-center  z-50 bg-opacity-50 w-full 
        bg-black`}
      >
        <PopUpSort onClick={handlePopUpSort} onSort={handleSort} />
      </section>
      <section
        onClick={handleOutsideClick}
        className={`${
          hidenFilter && "hidden"
        } h-screen fixed flex p-5 inset-0 overflow-scroll justify-center 
          items-center py-[400px] z-50 bg-opacity-50 w-full 
        bg-black`}
      >
        <PopUpFilter onClick={handlePopUpFilter} />
      </section>
      {/* end hidden popup section */}
      <section className="flex gap-6 mt-6 w-full first:w-3/4 justify-between last:w-fit ">
        <SearchBar
          placeholder="Cari lowongan"
          icon={<Search color="#5885E9" />}
          width="w-[60%]"
        />
        <div className="flex gap-[50px] cursor-pointer">
          <div onClick={handleFilter} className="flex gap-[11px] items-center">
            <img src={filter} alt="filter" />
            <h1 className="text-xl-bold">Filter</h1>
          </div>
          <div
            onClick={handlePopUpSort}
            className="flex gap-[11px] items-center cursor-pointer"
          >
            <img src={sort} alt="sort" />
            <h1 className="text-xl-bold">Urutkat Pelamar</h1>
          </div>
        </div>
      </section>
      <div className="bg-white drop-shadow-[0_0_4px_rgba(0,0,0,0.25)] rounded-xl p-[12px] w-full mt-[54px]">
        <Table data={sortedData} />
      </div>
      <Pagination maxData={maxData} />
    </main>
  );
}
