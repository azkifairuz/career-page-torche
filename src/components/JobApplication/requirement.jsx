import * as Icon from "react-bootstrap-icons";
export default function Requirement(params) {
  return (
    <div className="bg-white p-5 h-fitt w-full gap-5 grid grid-cols-2">
      <div className="flex flex-col gap-2">
        <div className="flex items-center font-cairo gap-2">
          <Icon.Mortarboard size={20} color="blue" />
          Pendidikan
        </div>
        <p className="font-rajdhani">Minimal s1</p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center font-cairo gap-2">
          <Icon.GenderAmbiguous size={20} color="blue" />
          Jenis Kelamin
        </div>
        <p className="font-rajdhani">Semua Jenis Kelamin</p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center  font-cairo gap-2">
          <Icon.Person size={20} color="blue" />
          usia
        </div>
        <p className="font-rajdhani">Tidak Ada Batasan Usia</p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center  font-cairo gap-2">
          <Icon.Mortarboard size={20} color="blue" />
          Pendidikan
        </div>
        <p className="font-rajdhani">Minimal s1</p>
      </div>
    </div>
  );
}
