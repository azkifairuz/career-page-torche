import * as Icon from "react-bootstrap-icons";

export default function LowonganCard() {
  return (
    <tr className="hover:bg-slate-100">
      <td className="p-4 pl-6 rounded-l-xl border-0">
        <h1 className="font-rajdhani font-semibold text-md">
          Account Executive
        </h1>
        <span className="flex gap-1 items-center">
          <Icon.PinFill size={10} />
          <p className=" text-xs">PT. Torche Education</p>
        </span>
        <span className="flex gap-1 items-center">
          <Icon.Calendar size={10}/>
          <p className=" text-xs">Dibuat pada 10 Maret 2023</p>
        </span>
      </td>

      <td>
        <h1 className="font-semibold font-rajdhani text-xl text-center">88</h1>
        <p className="text-xs text-center">Pelamar</p>
      </td>

      <td align="right" className="rounded-r-xl border-0 px-6">
        <button className="text-blue-500 font-semibold text-sm">Lihat</button>
      </td>
    </tr>
  );
}
