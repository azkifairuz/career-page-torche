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
    <main className="p-8 bg-slate-200 flex-1 flex flex-col gap-4">
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
          <textarea value={lowongan.deskripsi}></textarea>
        </div>
      </section>
      <seciton className="flex flex-col rounded-xl bg-white p-4">
        <h1>Lokasi pekerjaan</h1>
        <p>Secara bertahap kami belaksdjklajklsd</p>
        <div className="flex gap-4">
          <select className="flex-1">
            <option>Provinsi</option>
          </select>
          <select className="flex-1">
            <option>Kota</option>
          </select>
          <select className="flex-1">
            <option>Kecamatan</option>
          </select>
        </div>
      </seciton>
      <seciton className="flex flex-col rounded-xl bg-white p-4">
        <h1>Waktu Kerja </h1>
        <div className="flex gap-4">
          <input type="time" className="flex-1 p-4" />
          <input type="time" className="flex-1 p-4" />
        </div>
        <p>Pilih hari kerja di bawah sesuai kebutuhan anda</p>
        <div className="flex gap-2">
          <input type="checkbox" />
          <label>Minggu</label>
          <input type="checkbox" />
          <label>Senin</label>
          <input type="checkbox" />
          <label>Selasa</label>
          <input type="checkbox" />
          <label>Rabu</label>
          <input type="checkbox" />
          <label>Kamis</label>
          <input type="checkbox" />
          <label>Jumat</label>
          <input type="checkbox" />
          <label>Sabtu</label>
        </div>
      </seciton>
      <seciton className="flex flex-col rounded-xl bg-white p-4">
        <h1>Informasi pelengkap</h1>
        <div className="flex gap-4">
          <select className="flex-1">
            <option>Provinsi</option>
          </select>
          <select className="flex-1">
            <option>Kota</option>
          </select>
          <select className="flex-1">
            <option>Kecamatan</option>
          </select>
        </div>
        <p>Agar lebih menarik minat para pelamar kljasdkljakldjsad</p>
        <div className="flex gap-4">
          <input
            type="number"
            className="flex-1 p-4"
            placeholder="isi gaji minimal di sini"
          />
          <input
            type="number"
            className="flex-1 p-4"
            placeholder="isi gaji maksimal di sini"
          />
        </div>
      </seciton>
    </main>
  );
}
