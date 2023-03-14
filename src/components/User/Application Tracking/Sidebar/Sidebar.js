import Logo from "../../../../assets/logos/Torche_Logo-01_White.png";
import * as Icon from "react-bootstrap-icons";
import Item from "./item";
export default function Sidebar(params) {
  return (
    <aside className="flex flex-col w-[20vw] text-white bg-primary sticky top-0 left-0 h-screen py-8 px-6">
      <header className="cursor-pointer flex gap-2 items-center">
        <Icon.ChevronLeft size={20} className="" />
        <h1 className="text-2xl font-rajdhani font-bold">Profil</h1>
      </header>
      <main className="flex flex-col justify-between h-full">
        <ul className="flex flex-col gap-2 mt-14">
        <Item
            title="Semua"
            href="semua"
          />
        <Item
            title="Terkirim"
            href="terkirim"
          />
        <Item
            title="Dilihat HRD"
            href="dilihat"
          />
        <Item
            title="Diproses"
            href="diproses"
          />
        <Item
            title="Diterima kerja"
            href="diterima kerja"
          />
        <Item
            title="Ditolak"
            href="ditolak"
          />
        <Item
            title="Belum Terkirim"
            href="belum"
          />
        </ul>
      </main>
    </aside>
  );
}
