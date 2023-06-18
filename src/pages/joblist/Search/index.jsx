import { useState } from "react";
import SearchBar from "components/molecules/SearchBar";
import Filter from "./Filter";
import * as Icon from "react-bootstrap-icons";

import SearchIcon from "assets/icons/search.svg";
import FilterIcon from "assets/icons/filter_list.svg";
import FilterTab from "./FilterTab";

export default function Search() {
  const [onShow, setOnShow] = useState(false);

  const category = ["Internship", "Full Time", "Part Time"];
  const jobType = ["Finance", "Marketing & Sales", "Human Resources"];

  return (
    <div className="flex flex-col gap-[12px]">
      <section className="flex md:flex-col bg-neutral-100 lg:flex-row md:p-4 gap-1 md:gap-[9px] flex-1 lg:mx-[102px] rounded-[8px] text-s-regular text-neutral-500">
        <SearchBar
          placeholder="Cari disini"
          width="flex-1"
          icon={<Icon.Search size={16} />}
        />
        <div className="flex gap-1 md:hidden">
          <button className="p-3 bg-primaryBlue-main rounded-lg">
            <img
              src={SearchIcon}
              alt="search"
              className="mix-blend-color-dodge"
            />
          </button>
          <button
            onClick={() => setOnShow(!onShow)}
            className="p-3 bg-primaryBlue-main rounded-lg"
          >
            <img
              src={FilterIcon}
              alt="filter"
              className="mix-blend-color-dodge"
            />
          </button>
        </div>
        <div className="hidden md:flex w-full lg:w-2/5 gap-[9px]">
          <Filter type="category" />
          <Filter type="tipe-kerja" />
        </div>
      </section>
      <section className={!onShow ? "hidden" : "md:hidden"}>
        <FilterTab data={category} />
        <FilterTab data={jobType} />
      </section>
    </div>
  );
}
