import { useParams } from "react-router-dom";
import { vacancies } from "data/vacancy";

import AdminNavbar from "components/organisms/AdminNavbar";
import EditContainer from "components/organisms/EditContainer";
import EditInput from "components/molecules/EditInput";
import InputField from "components/atoms/InputField";
import Select from "components/atoms/Select";

import Chevron from "assets/icons/chevron-down.svg";
import Ingfo from "assets/icons/Ingfo.svg";
import NavigateNext from "assets/icons/navigate_next.svg";
import NavigateBefore from "assets/icons/navigate_before.svg";

export default function Edit() {
  const { id } = useParams();
  const vacancy = vacancies.find((loker) => loker.id === id);

  return (
    <div className="flex w-full flex-col flex-1 pb-[63px] pr-[30px] lg:pr-[100px] pl-[30px] text-black">
      <AdminNavbar />
      <h1 className="heading-l-bold">Edit Lowongan</h1>
      <section className="mt-[61px] button-m-regular flex gap-1 items-center">
        <h1>Lowongan</h1>
        <img src={Chevron} alt="Chevron" className="-rotate-90 opacity-30" />
        <h1>Edit Lowongan</h1>
      </section>

      <section className="mt-[43px] flex gap-3 items-center">
        <div className="flex gap-2">
          <img src={Ingfo} alt="Ingfo" />
          <h1 className="heading-s-medium">Informasi Lowongan</h1>
        </div>
        <hr className="w-[74px] border-neutral-300 border-[1px]" />
        <div className="flex gap-2">
          <img src={Ingfo} alt="Ingfo" />
          <h1 className="heading-s-medium">Ketentuan Pelamar</h1>
        </div>
        <hr className="w-[74px] border-neutral-300 border-[1px]" />
        <div className="flex gap-2">
          <img src={Ingfo} alt="Ingfo" />
          <h1 className="heading-s-medium">Konfirmasi</h1>
        </div>
      </section>

      <section className="flex flex-col gap-10 mt-[76px]">
        <EditContainer title="Informasi Lowongan">
          <EditInput
            isLabeled={true}
            title="Nama pekerjaan"
            desc="Buatlah nama pekerjaan sesuai dengan kata kunci yang akan digunakan."
            fit={true}
          >
            <InputField placeholder="Nama pekerjaan" />
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
            <div className="flex gap-10 ">
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
            tes tes
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

        <EditContainer title="Detail Lowongan">
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
      </section>

      <section className="flex justify-between mt-12">
        <button className="flex items-center py-2 pl-5 pr-4 gap-3 text-neutral-500 button-m-regular rounded-xl bg-neutral-300">
          <img src={NavigateBefore} alt="Navigate before" />
          <p>Kembali</p>
        </button>
        <button className="flex items-center py-2 pl-4 pr-5 gap-3 text-neutral-100 button-m-regular rounded-xl bg-secondary-yellow drop-shadow-[0_0_12px_rgba(255,174,95,0.5)]">
          <p>Selanjutnya</p>
          <img src={NavigateNext} alt="Navigate next" />
        </button>
      </section>
    </div>
  );
}
