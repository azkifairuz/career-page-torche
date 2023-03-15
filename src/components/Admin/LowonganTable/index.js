import React from "react";
import Card from "./Card";
import { lowongan } from "../../../data/lowongan";

export default function Table(props) {
  const { filterStatus } = props;
  if (filterStatus === "all") {
    return (
      <table className="w-full ">
        <tr className="bg-slate-200 shadow-md border-spacing-0">
          <th className="py-3 pl-6 text-sm" align="left">
            Lowongan
          </th>
          <th className="text-sm">Jumlah Pelamar per Status</th>
          <th className="text-sm">Ganti Status</th>
          <th className="text-sm pr-4">Aksi</th>
        </tr>
        {lowongan.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </table>
    );
  }

  const filteredLowongan = lowongan.filter(
    (item) => item.status.toLowerCase() === filterStatus
  );

  return (
    <table className="w-full ">
      <tr className="bg-slate-200 shadow-md border-spacing-0">
        <th className="py-3 pl-6 text-sm" align="left">
          Lowongan
        </th>
        <th className="text-sm">Jumlah Pelamar per Status</th>
        <th className="text-sm">Ganti Status</th>
        <th className="text-sm pr-4">Aksi</th>
      </tr>
      {filteredLowongan.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </table>
  );
}
