import EditContainer from "components/organisms/EditContainer";
import EditInput from "components/molecules/EditInput";
import InputField from "components/atoms/InputField";
import Select from "components/atoms/Select";

export default function Ketentuan() {
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
          <div className="flex gap-10">
            <InputField
              placeholder="18"
              isLabeled={true}
              title="Pendidikan minimal"
              data={["WFO", "WFA", "Hybrid"]}
            />
            <InputField
              placeholder="65"
              label="sampai"
            />
          </div>
        </EditInput>
      </EditContainer>
    </section>
  );
}
