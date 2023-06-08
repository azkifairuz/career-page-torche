import { useState } from "react";

import EditContainer from "components/organisms/EditContainer";
import EditInput from "components/molecules/EditInput";
import InputField from "components/atoms/InputField";
import Select from "components/atoms/SelectEditLowongan";

export default function Ketentuan() {
  const [isAgeDisabled, setIsAgeDisabled] = useState(false);
  return (
    <section className="flex flex-col gap-10 mt-[76px]">
      <EditContainer title="Syarat Pelamar">
        <EditInput
          title="Syarat pelamar"
          desc="Informasikan syarat minimal yang harus dipenuhi pencari kerja untuk bisa diterima di lowongan ini"
        >
          <div className="flex gap-10">
            <Select
              isLabeled={true}
              title="Pendidikan minimal"
              data={["WFO", "WFA", "Hybrid"]}
            />
            <Select
              isLabeled={true}
              title="Jenis kelamin"
              data={["Laki-Laki", "Perempuan"]}
            />
            <Select
              isLabeled={true}
              title="Pengalaman kerja"
              data={["1 tahun", "2 tahun", "3 tahun", "4 tahun", "5 tahun"]}
            />
          </div>
        </EditInput>

        <EditInput
          title="Umur"
          desc="Tentukan rentang (umur) pelamar pada lowongan ini."
        >
          <section className="flex gap-10">
            <InputField
              placeholder="18"
              labelText="Umur minimal (tahun)"
              type="number"
              width="w-[240px]"
              disabled={isAgeDisabled}
            />
            <InputField
              placeholder="65"
              labelText="Umur maksimal (tahun)"
              type="number"
              width="w-[240px]"
              disabled={isAgeDisabled}
            />
          </section>
          <section className="flex gap-3 items-center">
            <input
              type="checkbox"
              className="w-5 h-5 rounded-md"
              checked={isAgeDisabled}
              onChange={() => setIsAgeDisabled(!isAgeDisabled)}
            />
            <p className="text-xl-regular text-neutral-500 ">
              Tidak ada batasan umur.
            </p>
          </section>
        </EditInput>
      </EditContainer>

      <EditContainer title="Informasi pelengkap">
        <EditInput
          title="Kandidat yang dibutuhkan"
          desc="Tentukan jumlah kandidat yang dibutuhkan untuk lowongan ini."
        >
          <InputField
            placeholder="1"
            labelText="Karyawan yang dibutuhkan"
            type="number"
            width="w-[240px]"
          />
        </EditInput>

        <EditInput
          title="Tanggal lowongan tutup"
          desc="Tentukan tanggal lowongan ditutup. Jika tanggal tutup sudah lewat, maka pelamar tidak dapat menemukan lowongan ini "
        >
          <InputField
            placeholder="DD/MM/YYYY"
            labelText="Tanggal lowongan ditutup"
            type="date"
            width="w-[240px]"
          />
        </EditInput>

        <EditInput
          title="Rentang gaji"
          desc="Tentukan rentang gaji untuk menarik minat pelamar"
        >
          <section className="flex gap-10">
            <InputField
              placeholder="Isi gaji minimal"
              labelText="Gaji minimal (Rp)"
              type="number"
              width="w-[240px]"
            />
            <InputField
              placeholder="Isi gaji maksimal"
              labelText="Gaji maksimal (Rp)"
              type="number"
              width="w-[240px]"
            />
          </section>
        </EditInput>
      </EditContainer>

      <EditContainer>
        <EditInput
          title="Kontak rekruter"
          desc="Silahkan pilih opsi kontak yang akan dihubungi langsung oleh pelamar"
        >
          tes tes
        </EditInput>
      </EditContainer>
    </section>
  );
}
