import React from "react";

export default function Card() {
  return (
    <tr className="hover:bg-slate-100 border-spacing-0 ">
      <td>
        <input type="checkbox" className="ml-6" />
      </td>

      <td className="p-4 pl-6 rounded-l-xl border-0 ">
        <h1 className="font-rajdhani font-semibold text-md">
          Account Executive
        </h1>
        <p className=" text-xs">24 Tahun</p>
        <p className=" text-xs">Kabupaten cianjur</p>
      </td>

      <td className="text-sm">Teknik Informatika</td>

      <td className="text-sm">1 Tahun</td>

      <td className="text-sm">12/12/2020</td>

      <td align="center" className="rounded-r-xl border-0 px-6">
        <select className="text-blue-500 font-semibold text-sm cursor-pointer">
          <option value="Tidak Aktif" selected>
            Belum diproses
          </option>
          <option>Diproses</option>
          <option>Diterima</option>
          <option>Ditolak</option>
          <option>Disimpan</option>
          <option>Undur diri</option>
        </select>
      </td>
    </tr>
  );
}
