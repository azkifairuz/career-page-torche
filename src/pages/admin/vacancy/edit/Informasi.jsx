import { useState } from "react";

import EditContainer from "components/organisms/EditContainer";
import EditInput from "components/molecules/EditInput";
import InputField from "components/atoms/InputField";
import Select from "components/atoms/SelectEditLowongan";
import DayButton from "components/atoms/DayButton";

export default function Informasi() {
  const [selectedDays, setSelectedDays] = useState([]);
  const days = [
    { day: "Senin", id: 1 },
    { day: "Selasa", id: 2 },
    { day: "Rabu", id: 3 },
    { day: "Kamis", id: 4 },
    { day: "Jumat", id: 5 },
    { day: "Sabtu", id: 6 },
    { day: "Minggu", id: 7 },
  ];
  return (
    <section className="flex flex-col-reverse gap-10 mt-[76px]">
      <EditContainer title="Detail Lowongan">
        <section className="flex flex-col gap-9">
          <h1 className="heading-s-bold">
            Deskripsi pekerjaan, kualifikasi, dan benefit karyawan
          </h1>
          <textarea
            placeholder="Saran: Agar lebih mudah dibaca, jelaskan poin-poin yang ingin Anda sampaikan dengan bullet points atau angka. Contohnya:
            &#10;
Deskripsi pekerjaan: 
1. Melakukan user research berupa user persona, user journey
2. Membuat wireframe dan menjadikannya hi-fi
3. Melakukan usability testing
&#10;
Kualifikasi yang dibutuhkan:
1. Pengalaman kerja minimal 1 tahun
2. Kemampuan menggunakan figma, adobe xd
3. Memahami html, css, dan java script akan menjadi poin plus "
            className="resize-none focus:outline-none p-4 pb-10 border-primaryNavy-border border-[1px] rounded-b-lg min-h-[392px]"
          />
        </section>
        <EditInput
          title="Benefit/Tunjangan pekerjaan"
          desc="Benefit/Tunjangan adalah komponen di luar gaji yang mempengaruhi keputusan pencari kerja saat melamar. Isilah sesuai ketentuan perusahaan Anda"
        >
          <Select
            isLabeled={true}
            title="Benefit pekerjaan"
            data={["WFO", "WFA", "Hybrid"]}
          />
        </EditInput>
      </EditContainer>

      <EditContainer title="Informasi Lowongan">
        <EditInput
          isLabeled={true}
          title="Nama pekerjaan"
          desc="Buatlah nama pekerjaan sesuai dengan kata kunci yang akan digunakan."
          fit={true}
        >
          <InputField placeholder="Contoh: Frontend Development, UI/UX Designer " />
        </EditInput>

        <EditInput
          title="Kebijakan bekerja"
          desc="Infokan terkait kebijakan bekerja yang diberlakukan pada pekerjaan ini. Bisa berupa kerja dari kantor (WFO), kerja dari mana pun (WFA), atau campuran keduanya (Hybrid)."
          fit={true}
        >
          <Select
            isLabeled={true}
            title="Kebijakan bekerja"
            data={["WFO", "WFA", "Hybrid"]}
            width="w-[250px]"
          />
        </EditInput>

        <EditInput
          title="Lokasi penempatan"
          desc="Buatlah nama pekerjaan sesuai dengan kata kunci yang akan digunakan."
        >
          <div className=" flex gap-10 ">
            <Select
              isLabeled={true}
              title="Provinsi"
              data={["Jawa Barat", "Jawa Tengah", "Jawa Timur", "Jawa Utara"]}
            />
            <Select
              isLabeled={true}
              title="Kota"
              data={["Bandung", "Semarang", "Surabaya"]}
            />
            <Select
              isLabeled={true}
              title="Kecamatan"
              data={["Bandung", "Semarang", "Surabaya"]}
            />
          </div>
        </EditInput>

        <EditInput
          title="Hari kerja"
          desc="Pilihlah hari kerja dibawah ini, sesuai ketentuan perusahaan Anda."
        >
          <div className="grid grid-cols-7 gap-4">
            {days.map((item) => (
              <DayButton
                key={item.id}
                day={item.day}
                active={selectedDays.includes(item.id)}
                onClick={() => {
                  if (selectedDays.includes(item.id)) {
                    setSelectedDays(
                      selectedDays.filter((id) => id !== item.id)
                    );
                  } else {
                    setSelectedDays([...selectedDays, item.id]);
                  }
                }}
              />
            ))}
          </div>
        </EditInput>

        <EditInput title="Tipe Pekerjaan">
          <div className="flex gap-10 ">
            <Select
              isLabeled={true}
              title="Bidang pekerjaan"
              data={["Jawa Barat", "Jawa Tengah", "Jawa Timur", "Jawa Utara"]}
            />
            <Select
              isLabeled={true}
              title="Level pekerjaan"
              data={["Bandung", "Semarang", "Surabaya"]}
            />
            <Select
              isLabeled={true}
              title="Tipe pekerjaan"
              data={["Bandung", "Semarang", "Surabaya"]}
            />
          </div>
        </EditInput>
      </EditContainer>
    </section>
  );
}
