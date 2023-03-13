import React from "react";
import Card from "./Card";

export default function Table() {
  return (
    <table className="w-full">
      <tr className="bg-slate-200 shadow-md ">
        <th className="py-3 px-6 text-sm " align="left">
          Lowongan
        </th>
        <th className="text-sm">Jumlah Pelamar per Status</th>
        <th className="text-sm">Ganti Status</th>
        <th className="text-sm">Aksi</th>
      </tr>
      <Card />
    </table>
  );
}
