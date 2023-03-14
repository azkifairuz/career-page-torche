import { useState } from "react";

export default function Create() {
  const [lowongan, setLowongan] = useState({
    nama: "",
    level: "",
    tipe: "",
    deskripsi: "",
    jamKerjaMulai: null,
    jamKerjaSelesai: null,
    tempatKerja: "",
    jumlahPosisi: 0,
    tanggalTutup: null,
    minGaji: 0,
    maxGaji: 0,
    waRekruter: "",
    emailRekruter: "",
  });

  return (
    <main className="p-8 bg-slate-200 flex-1">
      <h1>Buat lowongan baru</h1>
      <section className="rounded-xl bg-white p-4">
        <h1>Informasi Utama</h1>
        <div className="flex flex-col">
          <label>Nama pekerjaan</label>
          <input
            className="p-3 border-slate-200 border-[1px] rounded-lg"
            value={lowongan.namaPekerjaan}
          />
        </div>
        <div className="flex flex-col">
          <label>Deskripsi</label>
          <textarea></textarea>
        </div>
      </section>
    </main>
  );
}
