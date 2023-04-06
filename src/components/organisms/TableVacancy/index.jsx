import React from "react";
import Card from "./Card";
import { vacancies } from "data/vacancy";

export default function Table(props) {
  const { filterStatus } = props;
  if (filterStatus === "all") {
    return (
      <table className="w-full ">
        <thead>
          <tr className="bg-slate-200 shadow-md border-spacing-0">
            <th className="py-3 pl-6 text-sm" align="left">
              Lowongan
            </th>
            <th className="text-sm">Jumlah Pelamar per Status</th>
            <th className="text-sm">Ganti Status</th>
            <th className="text-sm pr-4">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {vacancies.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </tbody>
      </table>
    );
  }

  const filteredVacancies = vacancies.filter(
    (item) => item.status.toLowerCase() === filterStatus
  );

  return (
    <table className="w-full ">
      <thead>
        <tr className="bg-slate-200 shadow-md border-spacing-0">
          <th className="py-3 pl-6 text-sm" align="left">
            Lowongan
          </th>
          <th className="text-sm">Jumlah Pelamar per Status</th>
          <th className="text-sm">Ganti Status</th>
          <th className="text-sm pr-4">Aksi</th>
        </tr>
      </thead>
      <tbody>
        {filteredVacancies.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </tbody>
    </table>
  );
}
