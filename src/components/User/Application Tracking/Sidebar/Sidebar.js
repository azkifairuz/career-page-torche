
import * as Icon from "react-bootstrap-icons";
import { useNavigate } from "react-router";
import Item from "./item";
export default function Sidebar(params) {
 
    const navigate = useNavigate()


  return (
    <aside className="flex flex-col w-[20vw] text-white bg-primary sticky top-0 left-0 h-screen py-8 px-6">
      <header className=" flex gap-2  items-center">
        <Icon.Circle size={20} className="" />
        <h1 className="text-2xl font-rajdhani font-bold">Riwayat Lamaran</h1>
      </header>
      <main className="flex flex-col mt-14 justify-between h-full">
        <ul className="flex flex-col gap-2 ">
            <Item title="Semua" href="/track/semua" />
            <Item title="Terkirim" href="/track/terkirim" />
            <Item title="Dilihat HRD" href="/track/dilihat" />
            <Item title="Diproses" href="/track/diproses" />
            <Item title="Diterima kerja" href="/track/diterima" />
            <Item title="Ditolak" href="/track/ditolak" />
            <Item title="Belum Terkirim" href="/track/belum" />
        </ul>
      </main>
      <header onClick={()=>navigate("../user")} className="cursor-pointer flex gap-2 items-center">
        <Icon.ChevronLeft size={20} className="" />
        <h1 className="text-2xl font-rajdhani font-bold">Back To Profil</h1>
      </header>
    </aside>
  );
}
