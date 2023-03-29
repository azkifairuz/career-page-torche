import React from "react";
import SearchBar from "./SearchBar";
import Filter from "./Filter";

export default function Search() {
  return (
    <section className="flex md:flex-col lg:flex-row p-[16px] gap-[9px] mx-auto bg-neutral-100 w-3/4 rounded-[8px] text-s-regular text-neutral-500">
      <SearchBar />
      <div className="flex md:w-full lg:w-2/5 gap-[9px]">
        <Filter type="category" />
        <Filter type="tipe-kerja" />
      </div>
    </section>
  );
}
