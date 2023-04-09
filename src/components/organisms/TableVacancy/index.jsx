import React from "react";
import Card from "./Card";
import { vacancies } from "data/vacancy";

import StatusSelect from "components/atom/StatusSelect";

export default function Table(props) {
  const { filterStatus } = props;

  const filteredVacancies = filterStatus !== "all"
    ? vacancies.filter((item) => item.status.toLowerCase() === filterStatus)
    : vacancies;

  return (
    <table className="w-full ">
      <thead className="bg-primaryBlue-main text-neutral-100 rounded-[32px] heading-s-bold">
        <th
          align="left"
          className="p-[16px] pl-[37px] rounded-l-[32px] border-0 font-semibold"
        >
          Lowongan
        </th>
        <th className=" border-0 font-semibold">Jumlah Lamaran per Status</th>
        <th className=" border-0 font-semibold">Status</th>
        <th className="rounded-r-[32px] border-0 ">{""}</th>
      </thead>
      <tbody>
        {filteredVacancies.map((item, index) => (
          <Card key={index} {...item} index={index} />
        ))}
      </tbody>
    </table>
  );
}
