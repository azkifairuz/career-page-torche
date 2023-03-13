import React from "react";
import { Plus } from "react-bootstrap-icons";
import TabButton from "../../components/admin/TabButton";
import Table from "../../components/admin/LowonganTable";
import Pagination from "../../components/Pagination";

export default function Lowongan() {
  const maxData = 100;
  return (
    <main className="flex-1 p-8 font-cairo flex flex-col gap-4">
      <header className="flex justify-between items-center   ">
        <h1 className="font-bold font-rajdhani text-2xl">
          Atur lowongan Anda di sini!
        </h1>
        <button className="bg-orange-500 flex font-semibold items-center gap-2 shadow text-white text-sm px-2 pr-4 py-2 rounded-xl">
          <Plus size={20} />
          <p>Buat lowongan</p>
        </button>
      </header>
      <input
        placeholder="Semua kota"
        className="border-2 rounded-xl p-2 px-4 w-2/5 "
      ></input>
      <div className="shadow-md w-full rounded-xl">
        <section className="bg-blue-800 text-white px-4 flex  rounded-t-xl">
          <TabButton title="Semua lowongan" count={48} active={true} />
          <TabButton title="Lowongan aktif" count={0} />
          <TabButton title="Lowongan tutup" count={48} />
        </section>
        <section className="p-4">
          <input
            placeholder="Cari Lowongan.."
            className="border-2 rounded-lg w-full py-2 px-4"
          />
        </section>
        <Table />
        <Pagination maxData={maxData} />
      </div>
    </main>
  );
}
