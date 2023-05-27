import { useParams } from "react-router-dom";
import { vacancies } from "data/vacancy";

import AdminNavbar from "components/organisms/AdminNavbar";

import Chevron from "assets/icons/chevron-down.svg";
import Ingfo from "assets/icons/Ingfo.svg";
import EditContainer from "components/organisms/EditContainer";
import EditInput from "components/molecules/EditInput";
import InputField from "components/atoms/InputField";
import Select from "components/atoms/Select";

export default function Edit() {
  const { id } = useParams();
  const vacancy = vacancies.find((loker) => loker.id === id);

  return (
    <div className="flex w-full flex-col flex-1 pb-[35px] pr-[30px] lg:pr-[100px] pl-[30px] text-black">
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

      <EditContainer>
        <EditInput
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
            title="Kebijakan bekerja"
            data={["WFO", "WFA", "Hybrid"]}
            width="w-[276px]"
          />
        </EditInput>

        <EditInput
          title="Lokasi penempatan"
          desc="Buatlah nama pekerjaan sesuai dengan kata kunci yang akan digunakan."
        >
          <div className="flex gap-10 ">
            <Select
              title="Provinsi"
              data={["Jawa Barat", "Jawa Tengah", "Jawa Timur", "Jawa Utara"]}
            />
            <Select title="Kota" data={["Bandung", "Semarang", "Surabaya"]} />
            <Select
              title="Kecamatan"
              data={["Bandung", "Semarang", "Surabaya"]}
            />
          </div>
        </EditInput>
      </EditContainer>
    </div>
  );
}
