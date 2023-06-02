import EditContainer from "components/organisms/EditContainer";
import EditInput from "components/molecules/EditInput";
import InputField from "components/atoms/InputField";
import Select from "components/atoms/Select";

export default function Informasi() {
  return (
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
  );
}
